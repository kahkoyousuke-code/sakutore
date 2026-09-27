/**
 * 姉妹サイト（サクサプ）の記事へ送るリンクの単一ソース。
 * タイトルは送り先の記事と一字一句そろえる（食い違うと「違う記事に飛んだ」ように見える）。
 * 送り先の記事を改題したら、ここも直すこと。
 */

export type SisterArticle = {
  id: string;
  site: "サクサプ";
  origin: string;
  path: string;
  title: string;
  /** カードの2行目。送り先で何が分かるかを1文で。薬機法の禁止表現は使わない */
  summary: string;
};

const SAKUSAPU = "https://sakusapu.com";

export const SISTER_ARTICLES = {
  creatineGuide: {
    id: "creatineGuide",
    site: "サクサプ",
    origin: SAKUSAPU,
    path: "/column/creatine-guide",
    title: "クレアチンの飲み方と選び方【ローディングの要否・HMBとの違い】",
    summary: "1日何gか、ローディングは要るか、HMBとどちらを先にするかを整理しています。",
  },
  proteinSelection: {
    id: "proteinSelection",
    site: "サクサプ",
    origin: SAKUSAPU,
    path: "/column/protein-selection",
    title: "プロテインの選び方【ホエイ・ソイとWPC/WPI/WPHの違い】",
    summary: "WPC・WPI・WPHの価格差と、EAAとの棲み分けまで踏み込んでいます。",
  },
  bulkBuyingGuide: {
    id: "bulkBuyingGuide",
    site: "サクサプ",
    origin: SAKUSAPU,
    path: "/column/bulk-buying-guide",
    title: "プロテイン・クレアチンのまとめ買い【何袋までか賞味期限から逆算】",
    summary: "1日の杯数と賞味期限から、セールで何袋まで買ってよいかを計算しています。",
  },
} satisfies Record<string, SisterArticle>;

export type SisterArticleId = keyof typeof SISTER_ARTICLES;

/**
 * GA4 でサクサプ側から「どのサイトのどの枠から来たか」を見分けるための utm を付ける。
 * placement はサクトレ側の sister_click イベントと同じ値を使う。
 */
export function sisterArticleUrl(article: SisterArticle, placement: string): string {
  const url = new URL(article.path, article.origin);
  url.searchParams.set("utm_source", "sakutore");
  url.searchParams.set("utm_medium", "referral");
  url.searchParams.set("utm_campaign", "cross_column");
  url.searchParams.set("utm_content", placement);
  return url.toString();
}
