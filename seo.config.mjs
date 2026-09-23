// seo.config.mjs
// SEO レポート（npm run seo:fetch / seo:report）に、このサイト固有の情報を渡す設定。
//
// scripts/ の3ファイル（gsc-fetch.mjs / seo-report.mjs / seo-config.mjs）はサイトに
// 依存しない。姉妹サービス（サクメシ・サクサプ）と同じものをそのまま置いてあり、
// サクトレの事情はこのファイルだけに閉じ込めてある。
//
// TypeScript をそのまま実行はできないので、正規表現で読む。
// 対象ファイルの書式を変えたらここのパターンも直すこと。

import { readFileSync, readdirSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const ROOT = dirname(fileURLToPath(import.meta.url));
const read = (rel) => readFileSync(join(ROOT, rel), "utf8").replace(/\r\n/g, "\n");

const COLUMN_DIR = "src/app/column";

/** コラム記事の slug。sitemap.ts と同じくディレクトリを正本にする（一覧ファイルが無いため）。 */
function slugs() {
  return readdirSync(join(ROOT, COLUMN_DIR), { withFileTypes: true })
    .filter((e) => e.isDirectory())
    .map((e) => e.name);
}

/**
 * 公開済みのコラム。
 * title / description は各記事の pageMetadata() から読む。検索結果に出るのはこれ。
 */
function columns() {
  return slugs().map((slug) => {
    const file = join(COLUMN_DIR, slug, "page.tsx");
    let title;
    let description;
    if (existsSync(join(ROOT, file))) {
      // prettier が description を次の行に折るので、改行を挟む形も拾う。
      const m = read(file).match(
        /pageMetadata\(\{\s*title:\s*\n?\s*"((?:[^"\\]|\\.)*)"\s*,\s*description:\s*\n?\s*"((?:[^"\\]|\\.)*)"/,
      );
      if (m) {
        title = m[1];
        description = m[2];
      }
    }
    return { path: `/column/${slug}`, title, description };
  });
}

const config = {
  siteUrl: "https://sakutore.jp/",

  pages: columns,

  /**
   * まだ書いていない記事の候補。docs/column-backlog.md の未チェック項目を読む。
   * ネタ帳は Search Console の実測を見ながら人が育てているので、そちらを正本にする。
   */
  planned: () => {
    const src = read("docs/column-backlog.md");
    return [...src.matchAll(/^- \[ \] (.+)$/gm)].map((m) => {
      // 「タイトル（根拠…）」の形。丸カッコ以降は根拠の長文なのでレポートには出さない。
      const raw = m[1].replace(/~~/g, "").trim();
      const title = raw.split(/[（(【]/)[0].trim() || raw;
      return { id: title, title };
    });
  },

  /**
   * クエリにこの語が含まれたら、その記事が扱っているとみなす表。
   * 記事を足したらここにも足す（足さなくても動くが、その記事は
   * 「受け皿が無い」側に出てしまう）。
   */
  keywords: () => [
    { kw: "ベンチプレス", path: "/column/bench-press-average" },
    { kw: "スクワット", path: "/column/squat-average" },
    { kw: "デッドリフト", path: "/column/deadlift-average" },
    { kw: "BIG3", path: "/column/strength-standards" },
    { kw: "big3", path: "/column/strength-standards" },
    { kw: "ビッグ3", path: "/column/strength-standards" },
    { kw: "合計", path: "/column/big3-total" },
    { kw: "懸垂", path: "/column/pullup-progression" },
    { kw: "腕立て", path: "/column/pushup-pullup-average" },
    { kw: "ダンベル", path: "/column/dumbbell-weight" },
    { kw: "タンパク質", path: "/column/protein" },
    { kw: "たんぱく質", path: "/column/protein" },
    { kw: "プロテイン", path: "/column/protein-guide" },
    { kw: "分割", path: "/column/split-routine" },
    { kw: "週何回", path: "/column/frequency" },
    { kw: "頻度", path: "/column/frequency" },
    { kw: "毎日", path: "/column/everyday-training" },
    { kw: "筋肉痛", path: "/column/muscle-soreness" },
    { kw: "休息", path: "/column/rest" },
    { kw: "回復", path: "/column/rest" },
    { kw: "睡眠", path: "/column/sleep" },
    { kw: "ストレッチ", path: "/column/stretch" },
    { kw: "順番", path: "/column/training-order" },
    { kw: "有酸素", path: "/column/muscle-vs-cardio-women" },
    { kw: "代謝", path: "/column/metabolism" },
    { kw: "消費カロリー", path: "/column/metabolism" },
    { kw: "腹筋", path: "/column/abs-body-fat" },
    { kw: "体脂肪率", path: "/column/abs-body-fat" },
    { kw: "背中", path: "/column/back-benefits" },
    { kw: "背筋", path: "/column/back-benefits" },
    { kw: "腕を太く", path: "/column/arm-training" },
    { kw: "二頭", path: "/column/arm-training" },
    { kw: "三頭", path: "/column/arm-training" },
    { kw: "胸", path: "/column/chest-home" },
    { kw: "自宅", path: "/column/chest-home" },
    { kw: "お尻", path: "/column/hip-training" },
    { kw: "ヒップ", path: "/column/hip-training" },
    { kw: "40代", path: "/column/over40" },
    { kw: "女性", path: "/column/women-muscle-slim" },
    { kw: "モチベーション", path: "/column/motivation" },
    { kw: "ジム", path: "/column/gym-beginner" },
    { kw: "パーソナル", path: "/column/personal-gym-cost" },
    { kw: "お酒", path: "/column/alcohol" },
    { kw: "アルコール", path: "/column/alcohol" },
    { kw: "初心者", path: "/column/beginner-guide" },
    { kw: "いつから", path: "/column/effect-timeline" },
    { kw: "リバウンド", path: "/column/diet-rebound-muscle" },
    { kw: "時間帯", path: "/column/women-training-timing" },
  ],

  /** 記事に加えて、sitemap に載せている固定ページも URL 検査にかける。 */
  inspectPaths: () => [
    "/", "/column", "/questions", "/rm-calculator", "/weight-checker",
    "/calorie-calculator", "/guide", "/faq", "/gear", "/about",
    ...columns().map((c) => c.path),
  ],

  /** 筋トレ系のクエリで、どの記事名にも入ってしまう一般語。突き合わせから外す。 */
  stopWords: [
    "筋トレ", "トレーニング", "筋肉", "方法", "やり方", "効果", "おすすめ", "とは",
    "選び方", "比較", "一覧", "人気", "ランキング", "コツ", "できる", "する",
  ],

  /**
   * 打ち手の文面。CLAUDE.md の「このサイトのゴール」にある実測の結論を反映してある。
   * 課題は発見されることではなく順位とCTR。技術的SEOはすでに整っている。
   */
  advice: {
    nearTop: "その記事に、クエリに正面から答える節を足す。既存記事からそのページへ内部リンクを張る。CLAUDE.md の実測どおり、効くのは1ページ目下段にいるページを押し込むこと。",
    lowCtr: "その記事の `src/app/column/<slug>/page.tsx` にある `pageMetadata()` の `title` / `description` を書き直す。CTR はこのサイトの最大の課題（実測 0.7%）なので、ここが一番効く。",
    hasPage: "その記事に、このクエリに答える節を足す。分量が増えるなら別記事として起こす（その場合は下と同じ判断をする）。",
    noPage: "`docs/column-backlog.md` に候補として足す。**ただし書く前に競合の混雑度を見る** — 同じ品質でも、クエリが空いているかどうかで順位が10位台と20位台に割れた実例がネタ帳にある。書くと決めたら `src/app/column/page.tsx` の一覧への追記を忘れないこと。",
    index: "登録されていない URL は Search Console の URL 検査から登録をリクエストする（人の作業）。ただし 2026-09-20 時点でインデックス未登録問題は解決済みと確認されているので、新規ページ以外が出たら内容を疑う。",
  },
};

export default config;
