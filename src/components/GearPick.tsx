import Link from "next/link";
import { getProduct } from "@/lib/gear";
import { AmazonButton, GearTag } from "@/components/GearProductCard";

/**
 * 記事本文の「道具が必要になる」説明の直後に置く商品カード。
 * /gear まで回り道させず、読んだその場で商品を見られるようにする。
 * placement は GA4 の affiliate_click イベントで「どの記事のどの枠か」を見分けるためのキー。
 */
export default function GearPick({
  lead,
  productIds,
  placement,
}: {
  lead: string;
  productIds: string[];
  placement: string;
}) {
  const products = productIds.map(getProduct);

  return (
    <div
      data-affiliate-placement={placement}
      className="my-4 rounded-2xl border-2 border-orange-200 bg-orange-50 p-4 space-y-3"
    >
      <p className="text-sm font-bold text-gray-800 leading-relaxed">{lead}</p>

      {products.map((product) => (
        <div key={product.id} className="bg-white rounded-xl p-4 shadow-sm">
          <div className="flex flex-wrap gap-1.5 mb-2">
            {product.tags.map((tag) => (
              <GearTag key={tag} label={tag} />
            ))}
          </div>
          <p className="font-bold text-gray-800 text-sm leading-snug mb-2">{product.name}</p>
          <p className="text-xs text-gray-600 leading-relaxed mb-3">{product.comment}</p>
          <AmazonButton asin={product.asin} />
        </div>
      ))}

      <p className="text-xs text-gray-500 leading-relaxed">
        ほかの候補は
        <Link href="/gear" className="text-orange-600 font-bold underline">
          おすすめギアのページ
        </Link>
        にまとめています。※ Amazonアソシエイトのリンクを含みます。
      </p>
    </div>
  );
}
