import { SISTER_ARTICLES, sisterArticleUrl, type SisterArticleId } from "@/lib/sisterArticles";

/**
 * 記事本文の文脈に合わせて、姉妹サイト（サクサプ）の記事へ送るカード。
 * placement は GA4 の sister_click イベントと、送り先の utm_content の両方に入る。
 */
export default function SisterArticleCard({
  lead,
  articleIds,
  placement,
}: {
  lead: string;
  articleIds: SisterArticleId[];
  placement: string;
}) {
  return (
    <div
      data-sister-placement={placement}
      className="my-4 rounded-2xl border-2 border-emerald-200 bg-emerald-50 p-4 space-y-3"
    >
      <p className="text-sm text-gray-800 leading-relaxed">{lead}</p>

      {articleIds.map((id) => {
        const article = SISTER_ARTICLES[id];
        return (
          <a
            key={id}
            href={sisterArticleUrl(article, placement)}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow"
          >
            <p className="text-xs font-bold text-emerald-600 mb-1">
              🧴 姉妹サイト「{article.site}」の記事
            </p>
            <p className="font-bold text-gray-800 text-sm leading-snug mb-1">{article.title}</p>
            <p className="text-xs text-gray-600 leading-relaxed">{article.summary} →</p>
          </a>
        );
      })}
    </div>
  );
}
