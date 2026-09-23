// scripts/seo-report.mjs
// Search Console のデータを読んで「次に何を直すか」の一覧を Markdown で出す。
// `npm run seo:report` で実行する。
//
// 入力は2通り。どちらも .gsc/ に置く（.gsc/ は git 管理外）。
//   1. .gsc/latest.json  — `npm run seo:fetch` が書いたもの。前期間との比較まで出せる
//   2. .gsc/csv/*.csv    — GSC の画面からエクスポートしたもの。1期間ぶんだけなので比較は出ない
//
// このスクリプト自体はサイトに依存しない。記事の一覧・クエリとページの対応・打ち手の
// 文面といったサイト固有のものは seo.config.mjs から受け取る（scripts/seo-config.mjs 参照）。
// 設定ファイルが無くても、Search Console のデータだけで出せるところまでは出す。

import { readFileSync, existsSync, readdirSync, writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'
import { loadConfig, siteBaseOf } from './seo-config.mjs'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')
const GSC_DIR = join(ROOT, '.gsc')

// 掲載順位ごとのCTRの目安。業界で広く使われている概算値で、出典のある確定値ではない。
// 「順位のわりにクリックされていないページ」を機械的に拾うための物差しとしてのみ使う。
const EXPECTED_CTR = [
  0.28, 0.15, 0.11, 0.08, 0.06, 0.05, 0.04, 0.033, 0.028, 0.025,
  0.020, 0.018, 0.016, 0.015, 0.014, 0.013, 0.012, 0.011, 0.010, 0.009,
]
const expectedCtr = (position) => {
  if (!position || position < 1) return EXPECTED_CTR[0]
  const i = Math.min(Math.round(position), EXPECTED_CTR.length) - 1
  return EXPECTED_CTR[i] ?? 0.008
}

// ---------------------------------------------------------------- 引数

function parseArgs(argv) {
  const out = { out: null }
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i]
    if (a === '--out') out.out = argv[++i]
    else if (a === '--help' || a === '-h') out.help = true
    else throw new Error(`知らない引数です: ${a}`)
  }
  return out
}

const HELP = `使い方: npm run seo:report [-- --out <ファイル>]

  --out <path>   標準出力のかわりにファイルへ書く

先に .gsc/latest.json（npm run seo:fetch）か .gsc/csv/*.csv を用意しておくこと。
手順は docs/seo-workflow.md。
`

// ---------------------------------------------------------------- 入力

/** ダブルクォート対応の最小限の CSV パーサ。 */
function parseCsv(text) {
  const rows = []
  let row = []
  let field = ''
  let quoted = false
  const src = text.replace(/^﻿/, '').replace(/\r\n/g, '\n')
  for (let i = 0; i < src.length; i++) {
    const c = src[i]
    if (quoted) {
      if (c === '"') {
        if (src[i + 1] === '"') { field += '"'; i++ } else quoted = false
      } else field += c
    } else if (c === '"') quoted = true
    else if (c === ',') { row.push(field); field = '' }
    else if (c === '\n') { row.push(field); rows.push(row); row = []; field = '' }
    else field += c
  }
  if (field !== '' || row.length) { row.push(field); rows.push(row) }
  return rows.filter((r) => r.some((cell) => cell.trim() !== ''))
}

const toNumber = (s) => Number(String(s ?? '').replace(/[, %]/g, '')) || 0
const toRate = (s) => (String(s ?? '').includes('%') ? toNumber(s) / 100 : toNumber(s))

/** GSC のエクスポート CSV を読む。ファイル名ではなくヘッダの1列目で種類を判定する。 */
function loadFromCsv(site) {
  const dir = join(GSC_DIR, 'csv')
  if (!existsSync(dir)) return null
  const files = readdirSync(dir).filter((f) => f.toLowerCase().endsWith('.csv'))
  if (!files.length) return null

  const queries = []
  const pages = []
  for (const f of files) {
    const rows = parseCsv(readFileSync(join(dir, f), 'utf8'))
    if (rows.length < 2) continue
    const head = (rows[0][0] || '').trim()
    const isQuery = /クエリ|Quer/i.test(head)
    const isPage = /ページ|Page/i.test(head)
    if (!isQuery && !isPage) continue
    for (const r of rows.slice(1)) {
      const item = {
        [isQuery ? 'query' : 'page']: (r[0] || '').trim(),
        clicks: toNumber(r[1]),
        impressions: toNumber(r[2]),
        ctr: toRate(r[3]),
        position: toNumber(r[4]),
      }
      ;(isQuery ? queries : pages).push(item)
    }
  }
  if (!queries.length && !pages.length) return null

  const sum = (arr, k) => arr.reduce((a, x) => a + x[k], 0)
  const basis = pages.length ? pages : queries
  const impressions = sum(basis, 'impressions')
  const clicks = sum(basis, 'clicks')
  return {
    source: 'csv',
    site,
    siteBase: siteBaseOf(site),
    period: null,
    previousPeriod: null,
    totals: {
      current: { clicks, impressions, ctr: impressions ? clicks / impressions : 0, position: 0 },
      previous: null,
    },
    queries: { current: queries, previous: [] },
    pages: { current: pages, previous: [] },
    pageQueries: [],
    daily: [],
    indexStatus: null,
  }
}

function loadData(site) {
  const latest = join(GSC_DIR, 'latest.json')
  if (existsSync(latest)) {
    const data = JSON.parse(readFileSync(latest, 'utf8'))
    data.source = 'api'
    return data
  }
  const csv = loadFromCsv(site)
  if (csv) return csv
  throw new Error(
    'Search Console のデータがありません。次のどちらかを用意してください。\n'
    + '  A) npm run seo:fetch   （サービスアカウントの鍵が要る。docs/seo-workflow.md 参照）\n'
    + '  B) GSC の画面 → 検索パフォーマンス → エクスポート → CSV を .gsc/csv/ に展開して置く',
  )
}

// ---------------------------------------------------------------- 整形

const pct = (v) => `${(v * 100).toFixed(1)}%`
const pos = (v) => (v ? v.toFixed(1) : '-')
const num = (v) => Math.round(v).toLocaleString('ja-JP')
const diff = (now, before) => {
  if (before === null || before === undefined) return '-'
  const d = now - before
  return `${d > 0 ? '+' : ''}${num(d)}`
}

/** クエリ文字列に | や改行が入ると表が崩れるので潰す。 */
const cell = (v) => String(v).replace(/\|/g, '\\|').replace(/\n/g, ' ')

const table = (header, rows) => {
  if (!rows.length) return '該当なし。\n'
  return [
    `| ${header.join(' | ')} |`,
    `|${header.map(() => '---').join('|')}|`,
    ...rows.map((r) => `| ${r.map(cell).join(' | ')} |`),
    '',
  ].join('\n')
}

// ---------------------------------------------------------------- 分析

function buildReport(data, config) {
  const L = []
  const T = config.thresholds
  const A = config.advice
  const siteBase = data.siteBase || siteBaseOf(String(data.site))

  /** GSC が返す完全な URL を、設定側と突き合わせられるサイト内パスにする。 */
  const toPath = (url) => {
    const p = String(url).replace(siteBase, '')
    return p === '' ? '/' : p
  }

  const pageByPath = new Map(config.pages.map((p) => [p.path, p]))
  const hasPages = config.pages.length > 0
  const byUrlPrev = new Map((data.pages.previous || []).map((p) => [p.page, p]))
  const byQueryPrev = new Map((data.queries.previous || []).map((q) => [q.query, q]))
  const hasPrev = Boolean(data.previousPeriod)

  /** クエリがどのページに結びつくか。設定のキーワード表で見る。 */
  const matchPaths = (query) => {
    const q = query.toLowerCase()
    const hits = new Set()
    for (const { kw, path } of config.keywords) {
      if (kw && q.includes(String(kw).toLowerCase())) hits.add(path)
    }
    return [...hits]
  }

  /** クエリを突き合わせ用の語に割る。一般語と1文字は落とす。 */
  const keyWords = (query) =>
    query.split(/[\s　]+/).filter((w) => w.length > 1 && !config.stopWords.has(w))

  L.push('# Search Console レポート')
  L.push('')
  L.push(`対象: ${data.site}`)
  L.push(data.period
    ? `対象期間: **${data.period.startDate} 〜 ${data.period.endDate}**` + (hasPrev ? `（比較: ${data.previousPeriod.startDate} 〜 ${data.previousPeriod.endDate}）` : '')
    : '対象期間: CSV の期間（画面で選んだ範囲）')
  L.push(`データ元: ${data.source === 'api' ? 'Search Console API' : '画面からエクスポートした CSV'}${data.fetchedAt ? ` / 取得 ${data.fetchedAt.slice(0, 16).replace('T', ' ')} UTC` : ''}`)
  if (!hasPages) {
    L.push('')
    L.push('> seo.config.mjs が無い（またはページ一覧が空）ため、ページの突き合わせが要るセクションは簡略版で出しています。')
  }
  L.push('')

  // ---- 全体
  const c = data.totals.current
  const p = data.totals.previous
  L.push('## 0. 全体')
  L.push('')
  L.push(table(
    ['指標', '今期間', '前期間', '差'],
    [
      ['クリック', num(c.clicks), p ? num(p.clicks) : '-', p ? diff(c.clicks, p.clicks) : '-'],
      ['表示回数', num(c.impressions), p ? num(p.impressions) : '-', p ? diff(c.impressions, p.impressions) : '-'],
      ['CTR', pct(c.ctr), p ? pct(p.ctr) : '-', p ? `${((c.ctr - p.ctr) * 100).toFixed(2)}pt` : '-'],
      ['平均掲載順位', pos(c.position), p ? pos(p.position) : '-', p && p.position ? (c.position - p.position).toFixed(1) : '-'],
    ],
  ))

  // ---- 1. あと一歩のクエリ
  const near = (data.queries.current || [])
    .filter((q) => q.impressions >= T.nearTop.minImpressions
      && q.position >= T.nearTop.minPosition
      && q.position <= T.nearTop.maxPosition)
    .sort((a, b) => b.impressions - a.impressions)
    .slice(0, T.maxRows)

  // クエリ → 実際に出ているページ（pageQueries がある API 取得時のみ）
  const rankingPage = new Map()
  for (const row of data.pageQueries || []) {
    const cur = rankingPage.get(row.query)
    if (!cur || row.impressions > cur.impressions) rankingPage.set(row.query, row)
  }

  L.push('## 1. あと一歩で上位に届きそうなクエリ')
  L.push('')
  L.push(`平均掲載順位 ${T.nearTop.minPosition}〜${T.nearTop.maxPosition} 位・表示回数 ${T.nearTop.minImpressions} 回以上。`)
  L.push(`**打ち手**: ${A.nearTop}`)
  L.push('')
  L.push(table(
    ['クエリ', '表示', 'クリック', '順位', '出ているページ', '扱っているページ'],
    near.map((q) => {
      const rp = rankingPage.get(q.query)
      const url = rp ? toPath(rp.page) : '-'
      const cand = matchPaths(q.query).filter((path) => pageByPath.has(path))
      return [q.query, num(q.impressions), num(q.clicks), pos(q.position), url, cand.length ? cand.join(', ') : '-']
    }),
  ))

  // ---- 2. タイトル・説明の見直し候補
  const lowCtr = (data.pages.current || [])
    .filter((pg) => pg.impressions >= T.lowCtr.minImpressions && pg.position <= T.lowCtr.maxPosition)
    .map((pg) => ({ ...pg, exp: expectedCtr(pg.position) }))
    .filter((pg) => pg.ctr < pg.exp * T.lowCtr.ratio)
    .sort((a, b) => (b.exp - b.ctr) * b.impressions - (a.exp - a.ctr) * a.impressions)
    .slice(0, T.maxRows)

  L.push('## 2. 順位のわりにクリックされていないページ')
  L.push('')
  L.push(`表示回数 ${T.lowCtr.minImpressions} 回以上で、実CTRが順位の目安の ${T.lowCtr.ratio * 100}% 未満のページ。`)
  L.push(`**打ち手**: ${A.lowCtr}`)
  L.push('')
  L.push(table(
    ['ページ', '表示', 'クリック', '実CTR', '目安CTR', '順位', '取りこぼし(概算)'],
    lowCtr.map((pg) => [
      toPath(pg.page),
      num(pg.impressions), num(pg.clicks), pct(pg.ctr), pct(pg.exp), pos(pg.position),
      `${num((pg.exp - pg.ctr) * pg.impressions)}クリック`,
    ]),
  ))
  const lowCtrKnown = lowCtr.map((pg) => pageByPath.get(toPath(pg.page))).filter(Boolean)
  if (lowCtrKnown.length) {
    L.push('現在の title / description:')
    L.push('')
    for (const page of lowCtrKnown) {
      L.push(`- \`${page.path}\``)
      L.push(`  - title: ${page.title ?? '(未取得)'}`)
      L.push(`  - description: ${page.description ?? '(未取得)'}`)
    }
    L.push('')
  }

  // ---- 3. 順位が低いクエリ
  const uncovered = (data.queries.current || [])
    .filter((q) => q.impressions >= T.uncovered.minImpressions && q.position >= T.uncovered.minPosition)
    .sort((a, b) => b.impressions - a.impressions)
    .map((q) => {
      const words = keyWords(q.query)
      return {
        ...q,
        cand: matchPaths(q.query).filter((path) => pageByPath.has(path)),
        planned: words.length
          ? config.planned.filter((b) => words.some((w) => String(b.title).includes(w) || String(b.id).includes(w.toLowerCase())))
          : [],
      }
    })

  const noPage = uncovered.filter((q) => q.cand.length === 0).slice(0, T.maxRows)
  const hasPage = uncovered.filter((q) => q.cand.length > 0).slice(0, T.maxRows)

  L.push('## 3. 表示はされているのに順位が低いクエリ')
  L.push('')
  L.push(`表示回数 ${T.uncovered.minImpressions} 回以上・平均 ${T.uncovered.minPosition} 位より下。1 の「あと一歩」より遠いが、需要があることは分かっているもの。`)
  L.push('')
  if (hasPages) {
    L.push('### 3-1. 扱っているページはある（届いていない）')
    L.push('')
    L.push(`**打ち手**: ${A.hasPage}`)
    L.push('')
    L.push(table(
      ['クエリ', '表示', 'クリック', '順位', '扱っているページ'],
      hasPage.map((q) => [q.query, num(q.impressions), num(q.clicks), pos(q.position), q.cand.join(', ')]),
    ))
    L.push('### 3-2. 受け皿になるページが無い')
    L.push('')
  }
  L.push(`**打ち手**: ${A.noPage}`)
  L.push('')
  L.push(table(
    ['クエリ', '表示', 'クリック', '順位', '在庫にある近い企画'],
    noPage.map((q) => [q.query, num(q.impressions), num(q.clicks), pos(q.position), q.planned.length ? q.planned.map((b) => b.id).join(', ') : '－（新規）']),
  ))

  // ---- 4/5. 前期間との比較
  if (hasPrev) {
    const declining = (data.pages.current || [])
      .map((pg) => ({ ...pg, prev: byUrlPrev.get(pg.page) }))
      .filter((pg) => pg.prev && pg.prev.clicks >= T.declining.minPreviousClicks
        && pg.clicks < pg.prev.clicks * T.declining.dropRatio)
      .sort((a, b) => (b.prev.clicks - b.clicks) - (a.prev.clicks - a.clicks))
      .slice(0, T.maxRows)

    // 前期間にあって今期間に消えたページも拾う
    const curUrls = new Set((data.pages.current || []).map((pg) => pg.page))
    const vanished = (data.pages.previous || [])
      .filter((pg) => !curUrls.has(pg.page) && pg.clicks >= T.declining.minPreviousClicks)
      .sort((a, b) => b.clicks - a.clicks)
      .slice(0, T.maxRows)

    L.push('## 4. 前期間から落ちているページ')
    L.push('')
    L.push(`前期間に ${T.declining.minPreviousClicks} クリック以上あり、今期間が ${T.declining.dropRatio * 100}% 未満になったもの。`)
    L.push(`**打ち手**: ${A.declining}`)
    L.push('')
    L.push(table(
      ['ページ', 'クリック(今)', 'クリック(前)', '表示(今)', '表示(前)', '順位(今)', '順位(前)'],
      [
        ...declining.map((pg) => [
          toPath(pg.page), num(pg.clicks), num(pg.prev.clicks),
          num(pg.impressions), num(pg.prev.impressions), pos(pg.position), pos(pg.prev.position),
        ]),
        ...vanished.map((pg) => [toPath(pg.page), '0', num(pg.clicks), '0', num(pg.impressions), '-', pos(pg.position)]),
      ],
    ))

    const rising = (data.queries.current || [])
      .map((q) => ({ ...q, prev: byQueryPrev.get(q.query) }))
      .filter((q) => q.impressions >= T.rising.minImpressions
        && (!q.prev || q.impressions > q.prev.impressions * T.rising.growthRatio))
      .sort((a, b) => (b.impressions - (b.prev?.impressions || 0)) - (a.impressions - (a.prev?.impressions || 0)))
      .slice(0, 10)

    L.push('## 5. 伸びているクエリ')
    L.push('')
    L.push(`表示回数が前期間の${T.rising.growthRatio}倍以上（または新規）で${T.rising.minImpressions}回以上のもの。`)
    L.push(`**打ち手**: ${A.rising}`)
    L.push('')
    L.push(table(
      ['クエリ', '表示(今)', '表示(前)', 'クリック', '順位'],
      rising.map((q) => [q.query, num(q.impressions), q.prev ? num(q.prev.impressions) : '新規', num(q.clicks), pos(q.position)]),
    ))
  }

  // ---- 6. インデックス
  L.push('## 6. インデックス状況')
  L.push('')
  if (data.indexStatus && data.indexStatus.length) {
    const bad = data.indexStatus.filter((r) => r.error || r.verdict !== 'PASS')
    L.push(`URL 検査 ${data.indexStatus.length} 件のうち、登録されていない／確認できないもの: **${bad.length} 件**`)
    L.push('')
    L.push(table(
      ['URL', '判定', '状態', '最終クロール'],
      bad.slice(0, T.maxRows).map((r) => [
        toPath(r.url), r.error || r.verdict || '-', r.coverageState || '-', (r.lastCrawlTime || '-').slice(0, 10),
      ]),
    ))
    L.push(`**打ち手**: ${A.index}`)
    L.push('')
  } else if (hasPages) {
    // URL 検査が無いときは「公開済みなのに表示回数0」で代用する。
    const seen = new Set((data.pages.current || []).map((pg) => toPath(pg.page)))
    const unseen = config.pages.filter((page) => !seen.has(page.path))
    L.push('URL 検査のデータがありません（`--no-inspect` で取得したか CSV 入力）。かわりに「期間中に一度も表示されていないページ」を出します。')
    L.push('')
    L.push(table(
      ['ページ', '公開日'],
      unseen.slice(0, T.maxRows).map((page) => [page.path, page.date ?? '-']),
    ))
    L.push('公開直後なら想定どおり。1か月以上経っても出てこないものは、Search Console の URL 検査で状況を確認する。')
    L.push('')
  } else {
    L.push('URL 検査のデータもページ一覧もないため、このセクションは出せません。')
    L.push('')
  }

  // ---- 7. 在庫
  if (hasPages || config.planned.length) {
    L.push('## 7. ページと企画の在庫')
    L.push('')
    L.push(`公開済み ${config.pages.length} 件 / 未着手の企画 ${config.planned.length} 件`)
    if (config.planned.length) {
      L.push('')
      L.push('次に作る順:')
      config.planned.slice(0, 5).forEach((b, i) => L.push(`${i + 1}. \`${b.id}\` — ${b.title}`))
    }
    L.push('')
  }

  return L.join('\n')
}

// ---------------------------------------------------------------- 本体

async function main() {
  const args = parseArgs(process.argv.slice(2))
  if (args.help) {
    console.log(HELP)
    return
  }

  const config = await loadConfig(ROOT)
  // 取得済みの JSON には対象プロパティが入っている。CSV だけのときは設定から補う。
  const data = loadData(process.env.GSC_SITE_URL || config.siteUrl || '(不明)')
  const report = buildReport(data, config)

  if (args.out) {
    writeFileSync(join(ROOT, args.out), report)
    console.error(`書き出し: ${args.out}`)
  } else {
    console.log(report)
  }
}

try {
  await main()
} catch (e) {
  console.error(`\n[seo:report] ${e.message}`)
  process.exitCode = 1
}
