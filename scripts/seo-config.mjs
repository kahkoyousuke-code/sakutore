// scripts/seo-config.mjs
// gsc-fetch.mjs と seo-report.mjs が共通で読む設定ローダー。
//
// この3つのスクリプトはサイトに依存しない。サイトごとに違うもの
// （対象URL・記事の一覧・クエリと記事の対応・打ち手の文面）は、
// リポジトリ直下の seo.config.mjs から受け取る。
// 他のプロジェクトで使うときは scripts/ の3ファイルをコピーして、
// seo.config.mjs だけ書けばよい（書き方は docs/seo-workflow.md）。
//
// seo.config.mjs が無くても動く。その場合は Search Console のデータだけで
// レポートを出し、記事の突き合わせが要るセクションは省略する。

import { existsSync } from 'node:fs'
import { pathToFileURL } from 'node:url'
import { join } from 'node:path'

const CANDIDATES = ['seo.config.mjs', 'seo.config.js']

/** 判定の基準値。サイトの規模に合わせて seo.config.mjs の thresholds で部分的に上書きできる。 */
export const DEFAULT_THRESHOLDS = {
  /** 「あと一歩」とみなす平均掲載順位の範囲。 */
  nearTop: { minPosition: 5.5, maxPosition: 20.5, minImpressions: 30 },
  /** タイトル/説明の見直し候補にする条件。順位の目安CTRをこの割合より下回ったもの。 */
  lowCtr: { minImpressions: 100, ratio: 0.6, maxPosition: 20.5 },
  /** 順位が低いクエリとして拾う条件。 */
  uncovered: { minImpressions: 20, minPosition: 15.5 },
  /** 落ち込みとして拾う条件（前期間比）。 */
  declining: { minPreviousClicks: 5, dropRatio: 0.7 },
  /** 伸びとして拾う条件（前期間比）。 */
  rising: { minImpressions: 50, growthRatio: 1.5 },
  /** 各セクションに出す最大行数。読む側の負荷を抑えるため。 */
  maxRows: 20,
}

/** レポートの「打ち手」の文面。プロジェクトのファイル構成に合わせて上書きする。 */
export const DEFAULT_ADVICE = {
  nearTop: 'そのクエリを扱っているページに、正面から答える見出しを足す。内部リンクをそのページに集める。',
  lowCtr: 'そのページの title / description を見直す。',
  hasPage: 'そのページに、このクエリに答える節を足す。分量が増えるなら別ページとして企画を起こす。',
  noPage: '受け皿になるページを新しく作る（企画の在庫に近いものがあれば順番を上げる）。',
  declining: '順位が下がったのか表示回数ごと減ったのかを見る。順位だけ下がっているなら本文の追記、表示ごと減っているなら季節性や競合の可能性。',
  rising: '伸びている方向にページを寄せる。',
  index: '登録されていない URL は Search Console の URL 検査からインデックス登録をリクエストする（人の作業）。',
}

/** どの語も多くのページ名に入るため、クエリと企画の突き合わせで無視する一般語。 */
export const DEFAULT_STOP_WORDS = [
  '効果', '選び方', '方法', '違い', 'おすすめ', 'とは', '比較', '種類', '一覧',
  '人気', 'ランキング', '市販', '安い', '値段', 'やり方', 'コツ',
]

const asArray = (v) => (Array.isArray(v) ? v : [])

/** 関数でも配列でもよい設定値を配列にならす。 */
async function resolveList(value) {
  if (typeof value === 'function') return asArray(await value())
  return asArray(value)
}

/**
 * seo.config.mjs を読んで、スクリプトが使う形にならす。
 * 設定ファイルが無い場合も、既定値だけの設定を返す（エラーにはしない）。
 */
export async function loadConfig(root) {
  const file = CANDIDATES.map((name) => join(root, name)).find((p) => existsSync(p))

  let user = {}
  if (file) {
    const mod = await import(pathToFileURL(file).href)
    user = mod.default ?? mod
  }

  const thresholds = { ...DEFAULT_THRESHOLDS }
  for (const [key, value] of Object.entries(user.thresholds || {})) {
    thresholds[key] = typeof value === 'object' && value !== null && !Array.isArray(value)
      ? { ...thresholds[key], ...value }
      : value
  }

  const pages = await resolveList(user.pages)
  const keywords = await resolveList(user.keywords)
  const planned = await resolveList(user.planned)
  const inspectPaths = user.inspectPaths
    ? await resolveList(user.inspectPaths)
    : pages.map((p) => p.path).filter(Boolean)

  return {
    configFile: file,
    siteUrl: user.siteUrl || '',
    thresholds,
    advice: { ...DEFAULT_ADVICE, ...(user.advice || {}) },
    stopWords: new Set(user.stopWords || DEFAULT_STOP_WORDS),
    /** [{ path, title, description, date }] — path はサイト内の絶対パス（/column/foo）。 */
    pages,
    /** [{ kw, path }] — クエリにこの語が含まれたら、そのページが扱っているとみなす。 */
    keywords,
    /** [{ id, title }] — まだ作っていないページの企画。 */
    planned,
    /** URL 検査にかけるパス。省略時は pages の path。 */
    inspectPaths,
  }
}

/**
 * 対象プロパティを決める。優先順は CLI > 環境変数 > seo.config.mjs。
 * どれも無ければ、呼び出し側で案内を出せるように空文字を返す。
 */
export function resolveSite(cliSite, config) {
  return cliSite || process.env.GSC_SITE_URL || config.siteUrl || ''
}

/** sc-domain:example.com → https://example.com。URL プレフィックスはそのまま。 */
export function siteBaseOf(site) {
  const base = site.startsWith('sc-domain:') ? `https://${site.slice('sc-domain:'.length)}` : site
  return base.replace(/\/$/, '')
}
