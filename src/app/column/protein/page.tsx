import Link from "next/link";
import ShareButtons from "@/components/ShareButtons";
import { pageMetadata } from "@/lib/metadata";
import AuthorBox from "@/components/AuthorBox";

export const metadata = pageMetadata({
  title: "筋トレに必要なタンパク質の量と摂り方 - サクトレ",
  description:
    "筋トレの効果を最大化するために必要なタンパク質の量、摂取タイミング、おすすめの食材をわかりやすく解説します。",
  path: "/column/protein",
});

export default function ProteinPage() {
  return (
    <main className="min-h-screen flex flex-col items-center px-4 py-8">
      <div className="max-w-md w-full animate-slideUp">
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <p className="text-xs text-orange-500 font-bold mb-2">コラム</p>
          <h1 className="text-xl font-bold text-gray-800 mb-6">
            筋トレに必要なタンパク質の量と摂り方
          </h1>

          <div className="space-y-6 text-sm text-gray-700 leading-relaxed">
            <section>
              <p>
                筋トレの効果を最大限に引き出すためには、トレーニングだけでなく栄養管理も欠かせません。中でも筋肉の材料となるタンパク質は、筋トレをする人にとって最も重要な栄養素です。この記事では、必要なタンパク質の量や効果的な摂り方について詳しく解説します。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                なぜタンパク質が重要なのか
              </h2>
              <p>
                筋肉は主にタンパク質（アミノ酸）で構成されています。筋トレで筋繊維に微細なダメージを与えた後、体はタンパク質を使って筋肉を修復・強化します。この「超回復」のプロセスで筋肉が成長していくのです。
              </p>
              <p className="mt-2">
                タンパク質が不足していると、いくらトレーニングをしても筋肉の修復が追いつかず、期待した効果が得られません。逆に十分なタンパク質を摂取することで、トレーニングの効果を最大化できます。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                1日に必要なタンパク質の量
              </h2>
              <p>
                筋トレをしている人に必要なタンパク質の量は、体重1kgあたり1.6〜2.2gが一般的な目安とされています。例えば体重60kgの人なら、1日96〜132gのタンパク質が必要です。
              </p>
              <div className="bg-gray-50 rounded-xl p-4 mt-3">
                <p className="font-bold text-gray-800 mb-2">目安量の計算例</p>
                <ul className="space-y-1 text-gray-600">
                  <li>体重50kg → 80〜110g/日</li>
                  <li>体重60kg → 96〜132g/日</li>
                  <li>体重70kg → 112〜154g/日</li>
                  <li>体重80kg → 128〜176g/日</li>
                </ul>
              </div>
              <p className="mt-3">
                運動をしていない一般的な成人の場合は体重1kgあたり0.8g程度で十分ですが、筋トレをしている場合はその2倍以上が必要になります。初心者のうちは、まず体重1kgあたり1.6gを目標にするとよいでしょう。
              </p>
              <p className="mt-3 text-xs bg-orange-50 border border-orange-100 rounded-xl p-3">
                💡 タンパク質だけでなく、1日に必要な総カロリーも知りたい方は
                <Link href="/calorie-calculator" className="text-orange-600 font-bold underline">
                  カロリー計算機
                </Link>
                で目的別（増量・減量）の摂取カロリーを計算できます。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                タンパク質を多く含む食材
              </h2>
              <p>
                日常の食事からしっかりタンパク質を摂るためには、高タンパクな食材を意識的に取り入れることが大切です。以下に代表的な食材とタンパク質量をまとめました。
              </p>
              <div className="overflow-x-auto -mx-2 px-2 mt-3">
                <table className="w-full text-xs border-collapse">
                  <thead>
                    <tr className="bg-orange-50">
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700">
                        食材
                      </th>
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
                        タンパク質
                      </th>
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
                        1食の目安
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { food: "鶏むね肉（皮なし）100g", protein: "約23g", serving: "1/2枚で約27g" },
                      { food: "鶏ささみ 100g", protein: "約24g", serving: "2〜3本で約24g" },
                      { food: "豚ヒレ肉 100g", protein: "約22g", serving: "とんかつ1枚分" },
                      { food: "鮭 100g", protein: "約20g", serving: "切り身1切れで約16g" },
                      { food: "卵 1個（約50g）", protein: "約6g", serving: "2個で約12g" },
                      { food: "納豆 1パック（40g）", protein: "約7g", serving: "1パックで約7g" },
                      { food: "木綿豆腐 100g", protein: "約7g", serving: "半丁で約10g" },
                      { food: "ギリシャヨーグルト 100g", protein: "約10g", serving: "1カップで約10g" },
                      { food: "プロテイン 1杯", protein: "約20g", serving: "水に溶かすだけ" },
                    ].map((row) => (
                      <tr key={row.food}>
                        <td className="border border-gray-200 px-2 py-2 text-gray-700">{row.food}</td>
                        <td className="border border-gray-200 px-2 py-2 font-bold text-gray-800 whitespace-nowrap">{row.protein}</td>
                        <td className="border border-gray-200 px-2 py-2 text-gray-600 whitespace-nowrap">{row.serving}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-3">
                肉・魚・卵・大豆製品・乳製品をバランスよく組み合わせることで、無理なく必要量を摂取できます。表を見るとわかる通り、体重70kgの人が食事だけで110g以上を毎日揃えるのはかなりの量です。足りない分は、プロテインパウダーで補うのが現実的です。プロテインの種類と選び方は
                <Link href="/column/protein-guide" className="text-orange-600 font-bold underline">
                  プロテインの選び方ガイド
                </Link>
                で詳しく解説しています。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                効果的な摂取タイミング
              </h2>
              <p>
                タンパク質は一度に大量に摂るよりも、1日を通してこまめに摂取する方が筋肉合成に効果的です。1回の食事で20〜40g程度を目安に、3〜5回に分けて摂取しましょう。
              </p>
              <div className="space-y-2 mt-3">
                <div className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">▸</span>
                  <p>
                    <span className="font-bold">朝食</span>：睡眠中に枯渇したタンパク質を補給。卵や納豆、ヨーグルトなどが手軽です。
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">▸</span>
                  <p>
                    <span className="font-bold">トレーニング後</span>：筋肉の合成が最も活発になるタイミング。トレーニング後30分〜2時間以内が理想です。
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">▸</span>
                  <p>
                    <span className="font-bold">就寝前</span>：睡眠中の筋肉修復を助けます。カゼインプロテインやギリシャヨーグルトがおすすめです。
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                まとめ
              </h2>
              <p>
                筋トレの効果を最大化するには、体重1kgあたり1.6〜2.2gのタンパク質を毎日摂取することが重要です。肉・魚・卵・大豆製品を中心にバランスよく食べ、1日を通してこまめに摂取しましょう。食事だけでは難しい場合は、プロテインも上手に活用してください。
              </p>
              <p className="mt-2">
                まずはサクトレであなたに合ったトレーニングメニューを作り、栄養管理と合わせて理想の体づくりを始めましょう。
              </p>
            </section>
          </div>
        </div>

        <ShareButtons url="https://sakutore.jp/column/protein" title="筋トレに必要なタンパク質の量と摂り方" />
        <Link
          href="/gear"
          className="block bg-orange-50 hover:bg-orange-100 rounded-2xl p-4 mb-6 border-2 border-orange-200 transition-colors"
        >
          <div className="flex items-center gap-3">
            <span className="text-2xl flex-shrink-0">🏋️</span>
            <div>
              <p className="font-bold text-orange-600 text-sm">運営者厳選のおすすめギア</p>
              <p className="text-xs text-gray-500 mt-0.5">実際に使って選んだプロテイン・ベルト・グリップを見る →</p>
            </div>
          </div>
        </Link>

        <AuthorBox />

        <div className="text-center space-y-3">
          <Link
            href="/questions"
            className="inline-block w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-2xl transition-all duration-200 hover:shadow-lg"
          >
            さっそくメニューを作る
          </Link>
          <div>
            <Link
              href="/column"
              className="text-orange-500 font-bold hover:text-orange-600 transition-colors text-sm"
            >
              コラム一覧に戻る
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
