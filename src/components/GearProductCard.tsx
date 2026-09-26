import { amazonUrl, type Product } from "@/lib/gear";

export function GearTag({ label }: { label: string }) {
  const isFavorite = label.includes("愛用");
  return (
    <span
      className={
        isFavorite
          ? "inline-block rounded-full bg-orange-500 text-white text-[11px] font-bold px-2.5 py-1"
          : "inline-block rounded-full bg-orange-100 text-orange-600 text-[11px] font-bold px-2.5 py-1"
      }
    >
      {label}
    </span>
  );
}

export function AmazonButton({ asin }: { asin: string }) {
  return (
    <a
      href={amazonUrl(asin)}
      target="_blank"
      rel="noopener noreferrer sponsored"
      className="block w-full text-center py-3 px-6 rounded-xl bg-[#FFD814] hover:bg-[#F7CA00] text-gray-900 font-bold text-sm transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 active:translate-y-0"
    >
      Amazonで見る →
    </a>
  );
}

/** /gear の一覧用。おすすめポイントまで含めたフル表示。 */
export default function GearProductCard({ product }: { product: Product }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-5">
      <div className="flex flex-wrap gap-1.5 mb-2">
        {product.tags.map((tag) => (
          <GearTag key={tag} label={tag} />
        ))}
      </div>

      <h3 className="font-bold text-gray-800 text-base leading-snug mb-3">
        {product.name}
      </h3>

      <p className="text-sm text-gray-600 leading-relaxed mb-3">
        {product.comment}
      </p>

      <div className="bg-orange-50 rounded-xl p-3 mb-4">
        <p className="text-xs font-bold text-orange-500 mb-1.5">おすすめポイント</p>
        <ul className="space-y-1">
          {product.points.map((point) => (
            <li key={point} className="flex gap-1.5 text-xs text-gray-700 leading-relaxed">
              <span className="text-orange-400 flex-shrink-0">✓</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>

      <AmazonButton asin={product.asin} />
    </div>
  );
}
