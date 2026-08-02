import Link from "next/link";
import ShareButtons from "@/components/ShareButtons";
import { pageMetadata } from "@/lib/metadata";
import AuthorBox from "@/components/AuthorBox";

export const metadata = pageMetadata({
  title: "脂肪燃焼は筋トレと有酸素どっち？｜消費カロリー比較表つき - サクトレ",
  description:
    "運動中の消費カロリーだけならランニングの勝ちです。METsで計算した比較表を出したうえで、それでも筋トレを土台に置くべき理由を解説。「筋肉1kgで代謝が50〜100kcal上がる」という誇張も訂正します。",
  path: "/column/muscle-vs-cardio-women",
});

export default function MuscleVsCardioWomenPage() {
  return (
    <main className="min-h-screen flex flex-col items-center px-4 py-8">
      <div className="max-w-md w-full animate-slideUp">
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <p className="text-xs text-orange-500 font-bold mb-2">コラム</p>
          <h1 className="text-xl font-bold text-gray-800 mb-6">
            脂肪燃焼に筋トレが有酸素運動より効果的な理由
          </h1>

          <div className="space-y-6 text-sm text-gray-700 leading-relaxed">
            <section>
              <p className="text-gray-500 italic border-l-2 border-orange-300 pl-3 mb-3">
                私（男性・筋トレ歴15年）は20代の頃、体重90kg超の状態から走るだけのダイエットをして、まったく結果が出ませんでした。筋トレを軸に変えてから12kg落とせた理由を、数字で説明します。
              </p>
              <p>
                「痩せたいならランニング」というイメージは根強くあります。しかし実際には、長期的な脂肪燃焼において筋トレは有酸素運動を上回る効果を発揮します。この記事では、筋トレが脂肪燃焼に優れている理由を「基礎代謝」と「アフターバーン効果」という2つの観点から詳しく解説します。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                有酸素運動だけでは痩せにくい理由
              </h2>
              <p>
                ランニングや自転車などの有酸素運動は、運動中に脂肪をエネルギーとして使うため、一時的に脂肪を燃焼させる効果があります。しかし、有酸素運動には大きな落とし穴があります。
              </p>

              <h3 className="font-bold text-gray-800 mt-4 mb-2">
                筋肉も失ってしまう
              </h3>
              <p>
                過度な有酸素運動を続けると、体はエネルギー源として脂肪だけでなく筋肉（タンパク質）も分解して使うようになります。これを「筋肉の異化（カタボリズム）」と言います。筋肉が減ると基礎代謝が低下し、かえって太りやすい体になってしまいます。
              </p>

              <h3 className="font-bold text-gray-800 mt-4 mb-2">
                体が慣れて消費カロリーが減る
              </h3>
              <p>
                同じ有酸素運動を繰り返すと、体はその運動に慣れて効率的に行えるようになります。これは体の適応反応ですが、ダイエット目的では「同じ運動でも消費カロリーが減っていく」というデメリットになります。結果として、同じ効果を得るために運動量をどんどん増やさなければならなくなります。
              </p>

              <h3 className="font-bold text-gray-800 mt-4 mb-2">
                食欲が増加しやすい
              </h3>
              <p>
                長時間の有酸素運動は食欲を増進させるホルモン（グレリン）の分泌を高めることがわかっています。「走った後に食欲が増してかえって食べ過ぎてしまう」という経験がある方も多いのではないでしょうか。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                筋トレが脂肪燃焼に優れている2つの理由
              </h2>

              <h3 className="font-bold text-gray-800 mt-4 mb-2">
                1. 減量中に筋肉が減るのを防げる（これが本命）
              </h3>
              <p>
                ここで多くの記事が「筋肉が1kg増えると基礎代謝が50〜100kcal上がる」と書いていますが、<strong className="text-gray-800">この数字は誇張です</strong>。実際に測定されている骨格筋の代謝量は<strong className="text-gray-800">1kgあたり1日約13kcal</strong>で、筋肉を2kg増やしても増える基礎代謝は26kcal程度。おにぎり1個にもなりません（
                <Link href="/column/metabolism" className="text-orange-500 font-bold hover:text-orange-600 underline">
                  筋トレで痩せる仕組み
                </Link>
                に組織別の代謝率表を載せています）。
              </p>
              <p className="mt-2">
                では筋トレの何が効くのかというと、<strong className="text-gray-800">減量中に筋肉が減るのを防ぐこと</strong>です。食事制限だけで10kg落とすと、そのうち2.5kg前後が筋肉などの除脂肪量になります。筋トレを併用するとこれを1kg以下に抑えられます。同じ10kg減でも、中身がまったく違うということです。
              </p>
              <p className="mt-2">
                この差が効いてくるのは、痩せた後です。筋肉を残して落とした体は戻りにくく、筋肉ごと落とした体は戻したときに脂肪だけが増えます。<strong className="text-gray-800">筋トレの役割は「落とすこと」ではなく「落とした後に戻らないこと」</strong>だと考えるほうが、期待値として正確です（
                <Link href="/column/diet-rebound-muscle" className="text-orange-500 font-bold hover:text-orange-600 underline">
                  食事制限だけでリバウンドする理由
                </Link>
                に内訳の比較表があります）。
              </p>

              <h3 className="font-bold text-gray-800 mt-4 mb-2">
                2. アフターバーン効果（EPOC）
              </h3>
              <p>
                「アフターバーン効果」とは、運動後も体が通常より多くのカロリーを消費し続ける現象のことです。正式名称は「EPOC（運動後過剰酸素消費量）」と言います。
              </p>
              <p className="mt-2">
                有酸素運動後のEPOCは数時間程度で収まることが多いのに対し、筋トレ（特に高強度のもの）後のEPOCは24〜48時間続くことが研究で示されています。つまり筋トレをした翌日・翌々日も、体は余分にカロリーを消費し続けているのです。
              </p>
              <p className="mt-2">
                これが「筋トレは運動していない時間でも脂肪を燃やし続ける」と言われる理由です。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                最も効果的なのは「筋トレ＋有酸素運動」の組み合わせ
              </h2>
              <p>
                筋トレが優れているとはいえ、有酸素運動をまったく行わなくていいというわけではありません。むしろ<strong className="text-gray-800">運動中に消費するカロリーだけを見れば、有酸素運動のほうが上です</strong>。ここは正直に数字で見ておきます。
              </p>

              <div className="overflow-x-auto -mx-2 px-2 mt-3">
                <table className="w-full text-xs border-collapse">
                  <thead>
                    <tr className="bg-orange-50">
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
                        30分やった場合
                      </th>
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
                        強度（METs）
                      </th>
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
                        体重60kgの消費
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-200 px-2 py-2 font-bold text-gray-700 whitespace-nowrap">ウォーキング</td>
                      <td className="border border-gray-200 px-2 py-2">約3.5</td>
                      <td className="border border-gray-200 px-2 py-2">約110kcal</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 px-2 py-2 font-bold text-gray-700 whitespace-nowrap">筋トレ（中程度）</td>
                      <td className="border border-gray-200 px-2 py-2">約5.0</td>
                      <td className="border border-gray-200 px-2 py-2">約158kcal</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-2 py-2 font-bold text-gray-700 whitespace-nowrap">ジョギング</td>
                      <td className="border border-gray-200 px-2 py-2">約7.0</td>
                      <td className="border border-gray-200 px-2 py-2">約221kcal</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 px-2 py-2 font-bold text-gray-700 whitespace-nowrap">ランニング</td>
                      <td className="border border-gray-200 px-2 py-2">約8.3</td>
                      <td className="border border-gray-200 px-2 py-2">約261kcal</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                ※METs式（METs × 体重kg × 時間h × 1.05）で計算。この式には安静時の代謝も含まれるので、実際の「上乗せ分」は1〜2割少なくなります。自分の体重での計算は
                <Link href="/calorie-calculator" className="text-orange-500 font-bold hover:text-orange-600 underline">
                  カロリー計算機
                </Link>
                でできます。
              </p>

              <p className="mt-3">
                表の通り、その場で燃やす量ならランニングの勝ちです。<strong className="text-gray-800">それでも筋トレを土台に置くべきなのは、有酸素だけで落とすと筋肉ごと減るから</strong>。「どちらが優れているか」ではなく、役割が違うと考えてください。最も効果的なのは両方を組み合わせることです。
              </p>
              <p className="mt-2">
                理想的な順番は「筋トレ→有酸素運動」です。先に筋トレで糖質を消費しておくことで、その後の有酸素運動で脂肪が燃えやすい状態をつくれます。また、有酸素運動は心肺機能を高め、筋トレのパフォーマンス向上にもつながります。
              </p>

              <div className="bg-gray-50 rounded-xl p-4 mt-3">
                <p className="font-bold text-gray-800 mb-2">週3〜4日の理想的なスケジュール（例）</p>
                <ul className="space-y-1 text-gray-600">
                  <li>・月：筋トレ30分 → 有酸素20分</li>
                  <li>・水：筋トレ30分 → 有酸素20分</li>
                  <li>・金：筋トレ30分 → 有酸素20分</li>
                  <li>・土：軽い有酸素のみ（ウォーキングなど）</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                女性が筋トレで結果を出すためのポイント
              </h2>

              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">▸</span>
                  <p>
                    <span className="font-bold">体重より体脂肪率を指標にする</span>：筋トレ中は筋肉が増えて体重が変わりにくくなることがありますが、体脂肪率は確実に下がっています。体重だけで判断しないようにしましょう。
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">▸</span>
                  <p>
                    <span className="font-bold">タンパク質をしっかり摂る</span>：筋肉をつくるためには材料となるタンパク質が必要です。体重1kgあたり1.2〜1.6gを目安に毎日摂取しましょう。
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">▸</span>
                  <p>
                    <span className="font-bold">3ヶ月は続ける</span>：筋トレの効果が実感できるまでには3ヶ月程度かかります。焦らず継続することが最も重要です。
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                まとめ
              </h2>
              <ul className="space-y-1">
                <li>・運動中に燃やす量だけならランニングの勝ち。ここは正直に認めるべきところ</li>
                <li>・「筋肉1kgで代謝が50〜100kcal上がる」は誇張。実際は約13kcal</li>
                <li>・筋トレの本命は代謝アップではなく、<strong>減量中に筋肉が減るのを防ぐこと</strong></li>
                <li>・同じ10kg減でも、筋肉を残したかどうかで戻りやすさが変わる</li>
                <li>・順番は筋トレ→有酸素。役割が違うので、どちらが上かではなく両方使う</li>
              </ul>
              <p className="mt-3">
                「走っても痩せない」と悩んでいるなら、走る量を増やすより先に筋トレを土台に入れてください。私自身、20代の頃に走るだけで結果が出なかったところから、筋トレを軸にして90kgから78kgまで落としました。サクトレでは5つの質問に答えるだけで、目的に合ったメニューを提案します。
              </p>
            </section>
          </div>
        </div>

        <ShareButtons url="https://sakutore.jp/column/muscle-vs-cardio-women" title="脂肪燃焼に筋トレが有酸素運動より効果的な理由" />
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
