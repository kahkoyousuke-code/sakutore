// scripts/gsc-fetch.mjs
// Google Search Console から検索パフォーマンスを取ってきて .gsc/latest.json に書く。
// `npm run seo:fetch` で実行する。分析は scripts/seo-report.mjs が別に担当する。
//
// 取得と分析を分けてあるのは、取得だけが「認証情報」と「外向き通信」を必要とするため。
// 分析側は JSON か CSV さえあればオフラインで動くので、認証情報が用意できない人は
// GSC の画面からエクスポートした CSV を .gsc/csv/ に置けば同じレポートが出せる
// （手順は docs/seo-workflow.md）。
//
// 依存は足さない。JWT の署名は node:crypto、通信は node 18+ の組み込み fetch で済ませる。
// 認証情報はサービスアカウント（GSC_SERVICE_ACCOUNT_JSON）。GSC 側で「所有者」ではなく
// 「制限付き」ユーザーとして追加すれば読み取りだけを渡せる。
//
// このスクリプト自体はサイトに依存しない。対象プロパティと URL 検査の対象は
// seo.config.mjs から受け取る（scripts/seo-config.mjs 参照）。

import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { createSign } from 'node:crypto'
import { spawnSync } from 'node:child_process'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'
import { loadConfig, resolveSite, siteBaseOf } from './seo-config.mjs'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')
const GSC_DIR = join(ROOT, '.gsc')

// ---------------------------------------------------------------- プロキシ

// クラウド実行環境では外向き HTTPS がプロキシを通る。組み込み fetch は既定で
// HTTPS_PROXY を見ず、この変数は起動時にしか読まれない（CLAUDE.md の注記を参照）。
// open-pr.mjs と同じく、立っていなければ立てて自分を起動し直す。
// なお GitHub と違い Google への認証情報はこちらで用意するので、プロキシが
// 差し込むトークンの話（401 Bad credentials）はここでは関係ない。
function relaunchWithProxy() {
  const result = spawnSync(
    process.execPath,
    ['--disable-warning=UNDICI-EHPA', fileURLToPath(import.meta.url), ...process.argv.slice(2)],
    { stdio: 'inherit', env: { ...process.env, NODE_USE_ENV_PROXY: '1' } },
  )
  if (result.error) throw result.error
  process.exitCode = result.status ?? 1
}

// ---------------------------------------------------------------- 引数

function parseArgs(argv) {
  const out = { days: 28, lag: 3, inspect: true, site: '' }
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i]
    if (a === '--days') out.days = Number(argv[++i])
    else if (a === '--lag') out.lag = Number(argv[++i])
    else if (a === '--site') out.site = argv[++i]
    else if (a === '--no-inspect') out.inspect = false
    else if (a === '--help' || a === '-h') out.help = true
    else throw new Error(`知らない引数です: ${a}`)
  }
  if (!Number.isFinite(out.days) || out.days < 1) throw new Error('--days は1以上の数値で指定してください')
  if (!Number.isFinite(out.lag) || out.lag < 0) throw new Error('--lag は0以上の数値で指定してください')
  return out
}

const HELP = `使い方: npm run seo:fetch [-- オプション]

  --site <url>   対象プロパティ。省略時は $GSC_SITE_URL → seo.config.mjs の siteUrl の順で探す
                 ドメインプロパティなら sc-domain:example.com の形で渡す
  --days <n>     集計する日数。既定 28（同じ長さの直前期間と比べる）
  --lag <n>      今日から何日前までを対象にするか。既定 3
                 （GSC のデータは2〜3日遅れて確定するため）
  --no-inspect   URL 検査 API（インデックス状況の確認）を呼ばない
`

// ---------------------------------------------------------------- 認証

/** サービスアカウントの鍵を環境変数かファイルから読む。 */
function loadServiceAccount() {
  const file = process.env.GSC_SERVICE_ACCOUNT_FILE
  const raw = process.env.GSC_SERVICE_ACCOUNT_JSON

  let text
  if (raw && raw.trim()) {
    // Vercel や GitHub Secrets に貼るとき改行が壊れやすいので base64 も受ける。
    text = raw.trim().startsWith('{') ? raw : Buffer.from(raw, 'base64').toString('utf8')
  } else if (file) {
    text = readFileSync(file, 'utf8')
  } else {
    throw new Error(
      '認証情報がありません。GSC_SERVICE_ACCOUNT_JSON（サービスアカウントの鍵 JSON、'
      + 'または その base64）か GSC_SERVICE_ACCOUNT_FILE（鍵ファイルのパス）を設定してください。\n'
      + '設定手順は docs/seo-workflow.md の「1. データの入り口をつくる」を参照。\n'
      + '認証情報なしで進めたい場合は、GSC の画面からエクスポートした CSV を .gsc/csv/ に置いて '
      + '`npm run seo:report` を直接実行してください。',
    )
  }

  let key
  try {
    key = JSON.parse(text)
  } catch {
    throw new Error('サービスアカウントの鍵が JSON として読めません（base64 で渡す場合は余計な改行が入っていないか確認）')
  }
  if (!key.client_email || !key.private_key) {
    throw new Error('鍵に client_email / private_key がありません。サービスアカウントの鍵 JSON をそのまま渡してください')
  }
  return key
}

const b64url = (buf) => Buffer.from(buf).toString('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '')

/** サービスアカウントの鍵で JWT を作り、読み取り専用のアクセストークンに交換する。 */
async function getAccessToken(key) {
  const now = Math.floor(Date.now() / 1000)
  const header = b64url(JSON.stringify({ alg: 'RS256', typ: 'JWT' }))
  const claim = b64url(JSON.stringify({
    iss: key.client_email,
    scope: 'https://www.googleapis.com/auth/webmasters.readonly',
    aud: key.token_uri || 'https://oauth2.googleapis.com/token',
    exp: now + 3600,
    iat: now,
  }))
  const signature = b64url(createSign('RSA-SHA256').update(`${header}.${claim}`).sign(key.private_key))
  const assertion = `${header}.${claim}.${signature}`

  const res = await fetch(key.token_uri || 'https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({ grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer', assertion }),
  })
  const body = await res.text()
  if (!res.ok) {
    throw new Error(`アクセストークンを取得できませんでした (HTTP ${res.status})\n${body.slice(0, 500)}`)
  }
  return JSON.parse(body).access_token
}

// ---------------------------------------------------------------- 日付

const iso = (d) => d.toISOString().slice(0, 10)

function periods(days, lag) {
  const end = new Date()
  end.setUTCDate(end.getUTCDate() - lag)
  const start = new Date(end)
  start.setUTCDate(start.getUTCDate() - (days - 1))

  const prevEnd = new Date(start)
  prevEnd.setUTCDate(prevEnd.getUTCDate() - 1)
  const prevStart = new Date(prevEnd)
  prevStart.setUTCDate(prevStart.getUTCDate() - (days - 1))

  return {
    current: { startDate: iso(start), endDate: iso(end) },
    previous: { startDate: iso(prevStart), endDate: iso(prevEnd) },
  }
}

// ---------------------------------------------------------------- API

const API = 'https://searchconsole.googleapis.com'

async function searchAnalytics(token, site, body) {
  const url = `${API}/webmasters/v3/sites/${encodeURIComponent(site)}/searchAnalytics/query`
  const res = await fetch(url, {
    method: 'POST',
    headers: { authorization: `Bearer ${token}`, 'content-type': 'application/json' },
    body: JSON.stringify({ dataState: 'final', ...body }),
  })
  const text = await res.text()
  if (!res.ok) {
    const hint = res.status === 403
      ? `\nヒント: サービスアカウント（鍵の client_email）を Search Console の「ユーザーと権限」に追加しましたか。`
      + `\n      また、プロパティの指定が合っているか確認してください（URL プレフィックスは末尾の / まで含める、`
      + `ドメインプロパティは sc-domain:example.com）。`
      : ''
    throw new Error(`Search Console API が失敗しました (HTTP ${res.status})\n${text.slice(0, 500)}${hint}`)
  }
  return JSON.parse(text).rows || []
}

/** rows を { key, clicks, impressions, ctr, position } の配列にならす。 */
const normalize = (rows, keyNames) =>
  rows.map((r) => {
    const out = { clicks: r.clicks || 0, impressions: r.impressions || 0, ctr: r.ctr || 0, position: r.position || 0 }
    keyNames.forEach((name, i) => { out[name] = (r.keys || [])[i] ?? '' })
    return out
  })

/** URL 検査 API でインデックス状況を見る。1件ずつしか聞けないので順番に叩く。 */
async function inspectUrls(token, site, urls) {
  const out = []
  for (const url of urls) {
    const res = await fetch(`${API}/v1/urlInspection/index:inspect`, {
      method: 'POST',
      headers: { authorization: `Bearer ${token}`, 'content-type': 'application/json' },
      body: JSON.stringify({ inspectionUrl: url, siteUrl: site, languageCode: 'ja' }),
    })
    if (!res.ok) {
      // 1件失敗しても全体は止めない（レートやドメインプロパティ側の制約で落ちることがある）。
      out.push({ url, error: `HTTP ${res.status}` })
      continue
    }
    const r = (await res.json()).inspectionResult || {}
    const idx = r.indexStatusResult || {}
    out.push({
      url,
      verdict: idx.verdict || '',            // PASS / NEUTRAL / FAIL
      coverageState: idx.coverageState || '', // 「送信して登録されました」など
      lastCrawlTime: idx.lastCrawlTime || '',
      robotsTxtState: idx.robotsTxtState || '',
      indexingState: idx.indexingState || '',
    })
  }
  return out
}

// ---------------------------------------------------------------- 本体

async function main() {
  const args = parseArgs(process.argv.slice(2))
  if (args.help) {
    console.log(HELP)
    return
  }

  const config = await loadConfig(ROOT)
  const site = resolveSite(args.site, config)
  if (!site) {
    throw new Error(
      '対象プロパティが分かりません。次のどれかで指定してください。\n'
      + '  --site https://example.com/   （または sc-domain:example.com）\n'
      + '  環境変数 GSC_SITE_URL\n'
      + '  seo.config.mjs の siteUrl',
    )
  }
  // URL 検査に渡す用のサイト URL。ドメインプロパティでも https:// の実 URL が要る。
  const siteBase = siteBaseOf(site)

  const key = loadServiceAccount()
  const token = await getAccessToken(key)
  const { current, previous } = periods(args.days, args.lag)

  console.error(`対象: ${site}`)
  console.error(`期間: ${current.startDate} 〜 ${current.endDate}（前期間: ${previous.startDate} 〜 ${previous.endDate}）`)

  const get = (range, dims, rowLimit = 1000) =>
    searchAnalytics(token, site, { ...range, dimensions: dims, rowLimit })

  const [totalsNow, totalsPrev, queriesNow, queriesPrev, pagesNow, pagesPrev, pageQueries, daily] = await Promise.all([
    get(current, []),
    get(previous, []),
    get(current, ['query']),
    get(previous, ['query']),
    get(current, ['page']),
    get(previous, ['page']),
    get(current, ['page', 'query'], 2000),
    get(current, ['date']),
  ])

  let indexStatus = null
  const inspectPaths = config.inspectPaths
  if (args.inspect && inspectPaths.length) {
    const urls = inspectPaths.map((path) => `${siteBase}${path.startsWith('/') ? path : `/${path}`}`)
    console.error(`URL 検査: ${urls.length} 件`)
    try {
      indexStatus = await inspectUrls(token, siteBase, urls)
    } catch (e) {
      console.error(`URL 検査をスキップしました: ${e.message}`)
    }
  } else if (args.inspect) {
    console.error('URL 検査: 対象パスが無いのでスキップしました（seo.config.mjs の pages / inspectPaths）')
  }

  const data = {
    fetchedAt: new Date().toISOString(),
    site,
    siteBase,
    period: current,
    previousPeriod: previous,
    totals: {
      current: normalize(totalsNow, [])[0] || { clicks: 0, impressions: 0, ctr: 0, position: 0 },
      previous: normalize(totalsPrev, [])[0] || { clicks: 0, impressions: 0, ctr: 0, position: 0 },
    },
    queries: { current: normalize(queriesNow, ['query']), previous: normalize(queriesPrev, ['query']) },
    pages: { current: normalize(pagesNow, ['page']), previous: normalize(pagesPrev, ['page']) },
    pageQueries: normalize(pageQueries, ['page', 'query']),
    daily: normalize(daily, ['date']),
    indexStatus,
  }

  mkdirSync(GSC_DIR, { recursive: true })
  const dated = join(GSC_DIR, `${current.endDate}.json`)
  const latest = join(GSC_DIR, 'latest.json')
  const json = JSON.stringify(data, null, 2)
  writeFileSync(dated, json)
  writeFileSync(latest, json)

  console.error(`クエリ ${data.queries.current.length} 件 / ページ ${data.pages.current.length} 件を取得しました`)
  console.error(`書き出し: .gsc/${current.endDate}.json（.gsc/latest.json も同じ内容）`)
  console.error('次: npm run seo:report')
}

if (process.env.NODE_USE_ENV_PROXY !== '1' && (process.env.HTTPS_PROXY || process.env.https_proxy)) {
  relaunchWithProxy()
} else {
  try {
    await main()
  } catch (e) {
    console.error(`\n[seo:fetch] ${e.message}`)
    process.exitCode = 1
  }
}
