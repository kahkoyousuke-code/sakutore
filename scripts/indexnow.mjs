// scripts/indexnow.mjs
// Notify Bing (and other IndexNow engines) that pages were added or updated.
//
// Usage:
//   npm run indexnow -- /column/foo /rm-calculator   # specific paths
//   npm run indexnow -- --all                        # every URL in the live sitemap
//   npm run indexnow -- --dry-run /column/foo        # print the request, send nothing
//
// Run this AFTER the change is deployed to production. IndexNow tells the engine
// to crawl now, so the page (and the key file) must already be live.
// The key is public by design: the engine checks that https://<host>/<key>.txt
// returns the key, which proves we own the host. It is not a secret.

const HOST = 'sakutore.jp'
const ORIGIN = `https://${HOST}`
const KEY = '4d4bd46a0c28805899a32147c301d3b9'
const KEY_LOCATION = `${ORIGIN}/${KEY}.txt`
const ENDPOINT = 'https://api.indexnow.org/indexnow'
// IndexNow accepts up to 10,000 URLs per request.
const MAX_URLS = 10000

const args = process.argv.slice(2)
const dryRun = args.includes('--dry-run')
const all = args.includes('--all')
const paths = args.filter((a) => !a.startsWith('--'))

function fail(message) {
  console.error(`indexnow: ${message}`)
  process.exit(1)
}

function toUrl(input) {
  if (input.startsWith('http://') || input.startsWith('https://')) {
    const url = new URL(input)
    if (url.host !== HOST) fail(`${input} is not on ${HOST}`)
    return url.href
  }
  // Git Bash on Windows rewrites "/column/foo" into "C:/Program Files/Git/column/foo".
  if (/^[A-Za-z]:[\\/]/.test(input)) {
    fail(`looks like a Windows path: ${input} (in Git Bash, write column/foo without the leading "/")`)
  }
  const path = input.startsWith('/') ? input : `/${input}`
  return new URL(path, ORIGIN).href
}

async function urlsFromSitemap() {
  const res = await fetch(`${ORIGIN}/sitemap.xml`)
  if (!res.ok) fail(`could not read sitemap.xml (HTTP ${res.status})`)
  const xml = await res.text()
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim())
}

async function assertKeyIsLive() {
  const res = await fetch(KEY_LOCATION)
  const body = res.ok ? (await res.text()).trim() : ''
  if (body !== KEY) {
    fail(
      `key file is not live at ${KEY_LOCATION} (HTTP ${res.status}). ` +
        'Deploy public/' + KEY + '.txt to production first.',
    )
  }
}

async function main() {
  if (!all && paths.length === 0) {
    fail('give paths (e.g. /column/foo) or --all')
  }
  const urls = all ? await urlsFromSitemap() : paths.map(toUrl)
  const urlList = [...new Set(urls)]
  if (urlList.length === 0) fail('no URLs to submit')
  if (urlList.length > MAX_URLS) fail(`too many URLs (${urlList.length} > ${MAX_URLS})`)

  const payload = { host: HOST, key: KEY, keyLocation: KEY_LOCATION, urlList }

  if (dryRun) {
    console.log(`[dry-run] POST ${ENDPOINT}`)
    console.log(JSON.stringify(payload, null, 2))
    return
  }

  await assertKeyIsLive()

  const res = await fetch(ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify(payload),
  })
  // 200 = accepted, 202 = accepted but key validation still pending.
  if (res.status === 200 || res.status === 202) {
    console.log(`indexnow: submitted ${urlList.length} URL(s) (HTTP ${res.status})`)
    for (const u of urlList) console.log(`  ${u}`)
    return
  }
  const text = await res.text().catch(() => '')
  fail(`HTTP ${res.status} ${text}`.trim())
}

main().catch((err) => fail(err instanceof Error ? err.message : String(err)))
