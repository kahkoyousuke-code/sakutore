import Link from "next/link";
import ShareButtons from "@/components/ShareButtons";
import { pageMetadata } from "@/lib/metadata";
import AuthorBox from "@/components/AuthorBox";

export const metadata = pageMetadata({
  title: "プロテインの選び方ガイド｜種類別比較表と必要量の早見表 - サクトレ",
  description:
    "ホエイWPC・WPI・カゼイン・ソイを吸収速度・含有率・1食コストで比較した表と、体重別に1日何g必要か・プロテイン何杯分かの早見表付き。筋トレ歴15年の筆者が選び方を解説します。",
  path: "/column/protein-guide",
});

export default function ProteinGuidePage() {
  return (
    <main className="min-h-screen flex flex-col items-center px-4 py-8">
      <div className="max-w-md w-full animate-slideUp">
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <p className="text-xs text-orange-500 font-bold mb-2">コラム</p>
          <h1 className="text-xl font-bold text-gray-800 mb-6">
            プロテインの選び方ガイド
          </h1>

          <div className="space-y-6 text-sm text-gray-700 leading-relaxed">
            <section>
              <p>
                「プロテインを飲みたいけれど種類が多すぎてどれを選べばいいかわからない」——そんな声をよく聞きます。ドラッグストアやネット通販には数えきれないほどのプロテイン商品が並んでいますが、自分の目的や生活習慣に合ったものを選ぶことが大切です。この記事では、プロテインの主な種類と特徴、効果的な飲み方、そして選び方のポイントをわかりやすく解説します。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                プロテインの種類と特徴
              </h2>
              <p>
                プロテインには大きく分けて動物性と植物性があり、それぞれ異なる特徴を持っています。細かい説明の前に、4種類を一覧で比較しておきます。迷ったらこの表だけ見れば選べます。
              </p>

              <div className="overflow-x-auto -mx-2 px-2 mt-3">
                <table className="w-full text-xs border-collapse">
                  <thead>
                    <tr className="bg-orange-50">
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
                        種類
                      </th>
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
                        吸収の速さ
                      </th>
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
                        タンパク質含有率
                      </th>
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
                        価格帯
                      </th>
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
                        向いている場面
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-200 px-2 py-2 font-bold text-gray-700 whitespace-nowrap">ホエイWPC</td>
                      <td className="border border-gray-200 px-2 py-2">速い（30分〜1時間）</td>
                      <td className="border border-gray-200 px-2 py-2">約70〜80%</td>
                      <td className="border border-gray-200 px-2 py-2">安い</td>
                      <td className="border border-gray-200 px-2 py-2">迷ったらこれ。トレ後・コスパ重視</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 px-2 py-2 font-bold text-gray-700 whitespace-nowrap">ホエイWPI</td>
                      <td className="border border-gray-200 px-2 py-2">速い（30分〜1時間）</td>
                      <td className="border border-gray-200 px-2 py-2">約85〜90%</td>
                      <td className="border border-gray-200 px-2 py-2">高い</td>
                      <td className="border border-gray-200 px-2 py-2">牛乳でお腹を下す人・減量中</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-2 py-2 font-bold text-gray-700 whitespace-nowrap">カゼイン</td>
                      <td className="border border-gray-200 px-2 py-2">遅い（数時間）</td>
                      <td className="border border-gray-200 px-2 py-2">約80%前後</td>
                      <td className="border border-gray-200 px-2 py-2">やや高い</td>
                      <td className="border border-gray-200 px-2 py-2">就寝前・間食の置き換え</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 px-2 py-2 font-bold text-gray-700 whitespace-nowrap">ソイ</td>
                      <td className="border border-gray-200 px-2 py-2">中間</td>
                      <td className="border border-gray-200 px-2 py-2">約80%前後</td>
                      <td className="border border-gray-200 px-2 py-2">安い〜普通</td>
                      <td className="border border-gray-200 px-2 py-2">乳製品NG・植物性にしたい</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                ※含有率・価格帯は市販品でよく見る範囲の目安です。商品ごとに差があるので、購入前に成分表示を確認してください。
              </p>

              <h3 className="font-bold text-gray-800 mt-4 mb-2">
                ホエイプロテイン
              </h3>
              <div className="bg-gray-50 rounded-xl p-4">
                <p className="text-gray-600">
                  牛乳からチーズを作る際に分離される乳清（ホエイ）から作られるタンパク質です。プロテインの中で最も広く使われており、以下の特徴があります。
                </p>
                <ul className="mt-2 space-y-1 text-gray-600">
                  <li>・消化・吸収が速い（30分〜1時間程度）</li>
                  <li>・必須アミノ酸をバランスよく含む</li>
                  <li>・特に分岐鎖アミノ酸（BCAA）が豊富で筋肉合成に優れる</li>
                  <li>・トレーニング直後の摂取に最適</li>
                  <li>・種類が多く、味のバリエーションも豊富</li>
                  <li>・乳糖不耐症の方は注意が必要（WPIタイプなら乳糖が少ない）</li>
                </ul>
              </div>
              <p className="mt-3">
                ホエイプロテインにはさらに「WPC（ホエイプロテインコンセントレート）」と「WPI（ホエイプロテインアイソレート）」の2種類があります。WPCはコストパフォーマンスが高く、WPIは乳糖が少なくタンパク質純度が高いため、お腹が弱い方にはWPIがおすすめです。
              </p>

              <h3 className="font-bold text-gray-800 mt-4 mb-2">
                カゼインプロテイン
              </h3>
              <div className="bg-gray-50 rounded-xl p-4">
                <p className="text-gray-600">
                  牛乳に含まれるタンパク質の約80%を占めるのがカゼインです。ホエイとは対照的に、消化・吸収がゆっくりという特徴があります。
                </p>
                <ul className="mt-2 space-y-1 text-gray-600">
                  <li>・消化・吸収が遅い（数時間かけてゆっくり吸収）</li>
                  <li>・長時間にわたってアミノ酸を血中に供給し続ける</li>
                  <li>・就寝前の摂取に最適（睡眠中の筋肉分解を防ぐ）</li>
                  <li>・腹持ちが良く、食事の代わりとしても使いやすい</li>
                  <li>・ホエイより価格がやや高め</li>
                </ul>
              </div>

              <h3 className="font-bold text-gray-800 mt-4 mb-2">
                ソイプロテイン
              </h3>
              <div className="bg-gray-50 rounded-xl p-4">
                <p className="text-gray-600">
                  大豆から作られる植物性のプロテインです。動物性タンパク質を避けたい方や乳製品アレルギーの方に人気があります。
                </p>
                <ul className="mt-2 space-y-1 text-gray-600">
                  <li>・動物性タンパク質不使用（ヴィーガン・ベジタリアン対応）</li>
                  <li>・イソフラボンを含み、女性ホルモン様の作用がある</li>
                  <li>・消化吸収速度はカゼインとホエイの中間程度</li>
                  <li>・コレステロールゼロ、脂質が少ない</li>
                  <li>・必須アミノ酸のバランスはホエイよりやや劣る</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                そもそも何杯必要か（体重別の早見表）
              </h2>
              <p>
                種類選びの前に、自分に何g足りていないかを知るほうが先です。筋トレをしている人の目安は体重1kgあたり1.6〜2.2g。一方、日本人成人の平均的なタンパク質摂取量は1日70g前後です。この差がプロテインで埋める量になります。
              </p>

              <div className="overflow-x-auto -mx-2 px-2 mt-3">
                <table className="w-full text-xs border-collapse">
                  <thead>
                    <tr className="bg-orange-50">
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
                        体重
                      </th>
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
                        必要量（1.6g/kg）
                      </th>
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
                        必要量（2.2g/kg）
                      </th>
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
                        平均食事70gとの差
                      </th>
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
                        プロテイン換算
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-200 px-2 py-2 font-bold text-gray-700">50kg</td>
                      <td className="border border-gray-200 px-2 py-2">80g</td>
                      <td className="border border-gray-200 px-2 py-2">110g</td>
                      <td className="border border-gray-200 px-2 py-2">10〜40g</td>
                      <td className="border border-gray-200 px-2 py-2">0.5〜2杯</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 px-2 py-2 font-bold text-gray-700">60kg</td>
                      <td className="border border-gray-200 px-2 py-2">96g</td>
                      <td className="border border-gray-200 px-2 py-2">132g</td>
                      <td className="border border-gray-200 px-2 py-2">26〜62g</td>
                      <td className="border border-gray-200 px-2 py-2">1.5〜3杯</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-2 py-2 font-bold text-gray-700">70kg</td>
                      <td className="border border-gray-200 px-2 py-2">112g</td>
                      <td className="border border-gray-200 px-2 py-2">154g</td>
                      <td className="border border-gray-200 px-2 py-2">42〜84g</td>
                      <td className="border border-gray-200 px-2 py-2">2〜4杯</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 px-2 py-2 font-bold text-gray-700">80kg</td>
                      <td className="border border-gray-200 px-2 py-2">128g</td>
                      <td className="border border-gray-200 px-2 py-2">176g</td>
                      <td className="border border-gray-200 px-2 py-2">58〜106g</td>
                      <td className="border border-gray-200 px-2 py-2">3〜5杯</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                ※プロテイン1杯＝タンパク質20gで換算。食事量には個人差が大きいので、実際は自分の食事内容で計算し直してください。
              </p>

              <div className="bg-gray-50 rounded-xl p-4 mt-3">
                <p className="font-bold text-gray-800 mb-2">筆者の場合（体重78kg）</p>
                <p className="text-gray-600">
                  計算すると1日125〜172g。平均的な食事だけだと3〜5杯分足りない計算になります。ただし現実にプロテインを1日5杯飲むのはきついし、コストも跳ね上がります。この表を作って改めて思うのは、<strong className="text-gray-800">プロテインを増やすより先に、食事のタンパク質を増やすほうが早い</strong>ということです。鶏むね肉100gで約23g、卵1個で約6g、納豆1パックで約8g入っています。
                </p>
                <p className="text-gray-600 mt-2">
                  食材ごとの含有量は
                  <Link href="/column/protein" className="text-orange-500 font-bold hover:text-orange-600 underline">
                    タンパク質の摂り方
                  </Link>
                  に表でまとめています。1日の総カロリーとのバランスは
                  <Link href="/calorie-calculator" className="text-orange-500 font-bold hover:text-orange-600 underline">
                    カロリー計算機
                  </Link>
                  で確認できます。
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                飲むタイミング
              </h2>
              <p>
                プロテインの効果を最大化するには、飲むタイミングが重要です。
              </p>

              <div className="space-y-3 mt-3">
                <div className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">▸</span>
                  <div>
                    <p className="font-bold">トレーニング後（最重要）</p>
                    <p className="mt-1 text-gray-600">
                      筋トレ後30分〜2時間以内は「アナボリックウィンドウ」と呼ばれ、筋肉合成が最も活発な時間帯です。ホエイプロテインをトレーニング後すぐに飲むのが最も効果的です。
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">▸</span>
                  <div>
                    <p className="font-bold">起床直後</p>
                    <p className="mt-1 text-gray-600">
                      睡眠中は約8時間タンパク質を摂取していないため、体はアミノ酸不足の状態です。朝食でプロテインを補給することで、睡眠中に行われた筋肉分解からの回復を早められます。
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">▸</span>
                  <div>
                    <p className="font-bold">就寝前</p>
                    <p className="mt-1 text-gray-600">
                      カゼインプロテインを就寝30〜60分前に飲むと、睡眠中にゆっくりとアミノ酸が供給され、筋肉の修復と成長をサポートします。
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">▸</span>
                  <div>
                    <p className="font-bold">食事の補助として</p>
                    <p className="mt-1 text-gray-600">
                      食事だけで必要なタンパク質量（体重1kgあたり1.6〜2.2g）を確保するのが難しい場合、食事の合間や間食として活用しましょう。
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                自分に合うプロテインの選び方
              </h2>

              <h3 className="font-bold text-gray-800 mt-4 mb-2">
                目的別おすすめ
              </h3>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">▸</span>
                  <p>
                    <span className="font-bold">筋肉をつけたい・パフォーマンスを上げたい</span>：ホエイプロテイン（WPC or WPI）がベスト。トレーニング後すぐに飲める吸収の速さが魅力。
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">▸</span>
                  <p>
                    <span className="font-bold">夜間の筋肉分解を防ぎたい</span>：カゼインプロテインを就寝前に。ホエイと組み合わせて使うのがベスト。
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">▸</span>
                  <p>
                    <span className="font-bold">乳製品アレルギー・ヴィーガンの方</span>：ソイプロテインまたはエンドウ豆プロテイン（ピープロテイン）を選びましょう。
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">▸</span>
                  <p>
                    <span className="font-bold">お腹が弱い・乳糖不耐症の方</span>：WPI（ホエイプロテインアイソレート）を選ぶと乳糖が少なく安心です。
                  </p>
                </div>
              </div>

              <h3 className="font-bold text-gray-800 mt-4 mb-2">
                商品を選ぶ際にチェックすべき点
              </h3>
              <div className="bg-gray-50 rounded-xl p-4 mt-2">
                <ul className="space-y-2 text-gray-600">
                  <li>
                    <span className="font-bold text-gray-800">タンパク質含有率</span>：1食あたりのタンパク質量が20g以上あるものを選ぼう。含有率が低いと余分な糖質・脂質も摂ってしまいます。
                  </li>
                  <li>
                    <span className="font-bold text-gray-800">不必要な添加物が少ない</span>：人工甘味料や着色料が気になる方は成分表示を確認しましょう。
                  </li>
                  <li>
                    <span className="font-bold text-gray-800">味と続けやすさ</span>：毎日飲むものなので、自分が好きな味を選ぶことも重要です。初めての方はプレーン・チョコ・バニラなど定番フレーバーから試してみましょう。
                  </li>
                  <li>
                    <span className="font-bold text-gray-800">コストパフォーマンス</span>：袋の価格ではなく<strong>タンパク質1gあたりの単価</strong>で比べます。計算式は「価格 ÷（内容量g × タンパク質含有率）」。たとえば1kg3,500円・含有率75%なら 3,500 ÷ 750 ＝ 約4.7円/g。1kg5,000円でも含有率90%のWPIなら 5,000 ÷ 900 ＝ 約5.6円/gで、思ったほど差は開きません。袋の値段だけで比べると、含有率の低い商品を割安だと勘違いします。
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                まとめ
              </h2>
              <ul className="space-y-1">
                <li>・迷ったらホエイWPC。安くて含有率も十分で、トレーニング後に合っています</li>
                <li>・牛乳でお腹を下す人はWPI、就寝前に足すならカゼイン、乳製品を避けるならソイ</li>
                <li>・比べるときはタンパク質1gあたりの単価（価格 ÷ 内容量 × 含有率）で見る</li>
                <li>・種類選びより先に「自分は1日何g足りないのか」を計算する</li>
              </ul>
              <p className="mt-3">
                最後に正直なところを書いておくと、私は15年やってきて、<strong className="text-gray-800">サプリメントを変えたことで停滞が動いた経験はありません</strong>。実際に効いたのは環境とトレーニングのほうでした（詳しくは
                <Link href="/column/10years" className="text-orange-500 font-bold hover:text-orange-600 underline">
                  10年筋トレを続けてわかったこと
                </Link>
                に書いています）。プロテインは「不足を埋めるための道具」であって、伸ばすための切り札ではありません。そのつもりで選ぶと、値段でも広告でも迷わなくなります。
              </p>
              <p className="mt-2">
                まずは食事でタンパク質を確保し、足りない分をプロテインで補う。この順番が基本です。サクトレでトレーニングメニューを作成し、食事・栄養と合わせて理想の体を目指しましょう。
              </p>
            </section>
          </div>
        </div>

        <ShareButtons url="https://sakutore.jp/column/protein-guide" title="プロテインの選び方ガイド" />
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
