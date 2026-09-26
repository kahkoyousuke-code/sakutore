import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import { belts, dumbbells, grips, proteins, wristWraps, type Product } from "@/lib/gear";
import GearProductCard from "@/components/GearProductCard";

export const metadata = pageMetadata({
  title: "おすすめトレーニングギア | プロテイン・ベルト・グリップ・可変式ダンベル",
  description:
    "筋トレ歴15年・フィジーク大会入賞の運営者が選んだトレーニングギアを厳選紹介。プロテイン・リフティングベルト・パワーグリップ・リストラップは実際に使っているもの、可変式ダンベルは体重比の目安から必要な重さで選んだ候補です。",
  path: "/gear",
  type: "website",
});

function Section({
  title,
  products,
  note,
}: {
  title: string;
  products: Product[];
  /** 「使ったうえでの推薦ではない」など、セクション単位の断りを入れる。 */
  note?: React.ReactNode;
}) {
  return (
    <section className="space-y-3">
      <h2 className="font-bold text-orange-500 text-lg px-1">{title}</h2>
      {note ? (
        <p className="text-xs text-gray-500 leading-relaxed px-1">{note}</p>
      ) : null}
      {products.map((product) => (
        <GearProductCard key={product.id} product={product} />
      ))}
    </section>
  );
}

export default function GearPage() {
  return (
    <main className="min-h-screen flex flex-col items-center px-4 py-8">
      <div className="max-w-md w-full animate-slideUp space-y-6">

        {/* ヘッダー */}
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800">おすすめトレーニングギア</h1>
          <p className="text-gray-500 text-sm mt-1">運営者が実際に使って選んだギア</p>
        </div>

        {/* プロフィール */}
        <div className="bg-white rounded-2xl shadow-lg p-5">
          <div className="flex items-start gap-3">
            <span className="text-3xl flex-shrink-0">💪</span>
            <p className="text-sm text-gray-700 leading-relaxed">
              筋トレ歴15年・フィジーク大会入賞の運営者が選んだギアです。
              ベルト・グリップ・リストラップはALLOUTで統一。
              プロテインはエクスプロージョンとマイプロを愛用中。
              可変式ダンベルだけは自宅用に買った経験がないので、
              必要な重さの基準から選んだ候補として載せています。
            </p>
          </div>
        </div>

        {/* 各セクション */}
        <div data-affiliate-placement="gear-page" className="space-y-6">
          <Section title="プロテイン｜目的別おすすめ4選" products={proteins} />
          <Section title="リフティングベルト｜レベル別おすすめ3選" products={belts} />
          <Section title="パワーグリップ｜愛用の1択" products={grips} />
          <Section title="リストラップ｜愛用の1択" products={wristWraps} />
          <Section
            title="可変式ダンベル｜自宅トレ用"
            products={dumbbells}
            note={
              <>
                ダンベルだけは、運営者がジム派のため自宅用に購入した経験がありません。使った感想ではなく、
                <Link href="/column/dumbbell-weight" className="text-orange-600 font-bold underline">
                  種目別・体重別の重さの目安
                </Link>
                に照らして「何kgまで伸ばせるか」で選んだ候補です。
              </>
            }
          />
        </div>

        {/* アフィリエイト表記 */}
        <p className="text-center text-xs text-gray-400 leading-relaxed px-2">
          ※ 当ページのリンクはAmazonアソシエイト・プログラムによるアフィリエイトリンクを含みます。
        </p>

        {/* CTA */}
        <div className="text-center space-y-3 pb-4">
          <Link
            href="/questions"
            className="inline-block w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
          >
            さっそく今日のメニューを作る
          </Link>
          <Link
            href="/"
            className="inline-block text-orange-500 font-bold hover:text-orange-600 transition-colors text-sm"
          >
            トップに戻る
          </Link>
        </div>
      </div>
    </main>
  );
}
