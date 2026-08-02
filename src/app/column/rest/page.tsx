import Link from "next/link";
import ShareButtons from "@/components/ShareButtons";
import { pageMetadata } from "@/lib/metadata";
import AuthorBox from "@/components/AuthorBox";

export const metadata = pageMetadata({
  title: "筋肉を育てる休息の重要性｜休めているか判断する5つの数字 - サクトレ",
  description:
    "超回復の仕組みと、休息が足りているかを起床時心拍数・挙上重量・睡眠などで判断するセルフチェック表。40代で週5回トレーニングしている筆者が、休みながら頻度を上げる考え方を解説します。",
  path: "/column/rest",
});

export default function RestPage() {
  return (
    <main className="min-h-screen flex flex-col items-center px-4 py-8">
      <div className="max-w-md w-full animate-slideUp">
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <p className="text-xs text-orange-500 font-bold mb-2">コラム</p>
          <h1 className="text-xl font-bold text-gray-800 mb-6">
            筋肉を育てる休息の重要性
          </h1>

          <div className="space-y-6 text-sm text-gray-700 leading-relaxed">
            <section>
              <p>
                「筋肉はトレーニング中ではなく、休んでいる間に成長する」ということをご存知でしょうか。筋トレに熱心になるあまり、毎日ハードなトレーニングを続けてしまう方がいますが、実は休息こそが筋肉の成長に欠かせない要素なのです。この記事では、休息が筋肉にとってなぜ重要なのかを詳しく解説します。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                超回復のメカニズム
              </h2>
              <p>
                筋トレを行うと、筋繊維に微細な損傷が生じます。体はこの損傷を修復する際に、元の状態よりも少し強く太い筋繊維を作ります。これが「超回復」と呼ばれる現象です。
              </p>
              <p className="mt-2">
                超回復には通常48〜72時間（2〜3日）かかります。この回復期間中に適切な栄養と睡眠を取ることで、筋肉は効率よく成長します。逆に、回復が完了する前に同じ部位を再びトレーニングすると、筋肉が十分に修復されないまま再度損傷を受けてしまいます。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                オーバートレーニングのリスク
              </h2>
              <p>
                休息を十分に取らずにトレーニングを続けると、「オーバートレーニング症候群」に陥るリスクがあります。以下のような症状が現れたら要注意です。
              </p>
              <div className="bg-gray-50 rounded-xl p-4 mt-3">
                <p className="font-bold text-gray-800 mb-2">
                  オーバートレーニングの主な症状
                </p>
                <ul className="space-y-1 text-gray-600">
                  <li>・慢性的な疲労感が抜けない</li>
                  <li>・トレーニングのパフォーマンスが低下する</li>
                  <li>・筋力や筋持久力が落ちる</li>
                  <li>・睡眠の質が低下する</li>
                  <li>・免疫力が落ちて風邪を引きやすくなる</li>
                  <li>・モチベーションが著しく低下する</li>
                  <li>・関節や腱に痛みが出る</li>
                </ul>
              </div>
              <p className="mt-3">
                オーバートレーニングに陥ると、回復までに数週間〜数ヶ月かかることもあります。「休むこともトレーニングの一部」という意識を持つことが大切です。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                休めているかを判断する5つの数字
              </h2>
              <p>
                「疲れている気がする」という感覚は当てになりません。前日の仕事や気分にも左右されるからです。私は次の5つを目安にしています。感覚ではなく、前回との比較で判断できるものを選んでいます。
              </p>

              <div className="overflow-x-auto -mx-2 px-2 mt-3">
                <table className="w-full text-xs border-collapse">
                  <thead>
                    <tr className="bg-orange-50">
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
                        見るもの
                      </th>
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
                        回復できている
                      </th>
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
                        要注意
                      </th>
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
                        休むべき
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-200 px-2 py-2 font-bold text-gray-700 whitespace-nowrap">起床時の心拍数</td>
                      <td className="border border-gray-200 px-2 py-2">いつも通り</td>
                      <td className="border border-gray-200 px-2 py-2">+5〜10拍</td>
                      <td className="border border-gray-200 px-2 py-2">+10拍以上が数日続く</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 px-2 py-2 font-bold text-gray-700 whitespace-nowrap">前回と同じ重量</td>
                      <td className="border border-gray-200 px-2 py-2">同じか、それ以上挙がる</td>
                      <td className="border border-gray-200 px-2 py-2">回数が1〜2回落ちる</td>
                      <td className="border border-gray-200 px-2 py-2">明らかに挙がらない</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-2 py-2 font-bold text-gray-700 whitespace-nowrap">睡眠</td>
                      <td className="border border-gray-200 px-2 py-2">7〜8時間眠れる</td>
                      <td className="border border-gray-200 px-2 py-2">寝つきが悪い</td>
                      <td className="border border-gray-200 px-2 py-2">寝ても疲れが残る</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 px-2 py-2 font-bold text-gray-700 whitespace-nowrap">関節・腱</td>
                      <td className="border border-gray-200 px-2 py-2">痛みなし</td>
                      <td className="border border-gray-200 px-2 py-2">動作の入りだけ違和感</td>
                      <td className="border border-gray-200 px-2 py-2">日常生活でも痛む</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-2 py-2 font-bold text-gray-700 whitespace-nowrap">気持ち</td>
                      <td className="border border-gray-200 px-2 py-2">ジムに行きたい</td>
                      <td className="border border-gray-200 px-2 py-2">少し億劫</td>
                      <td className="border border-gray-200 px-2 py-2">考えるだけで嫌になる</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="mt-3">
                一番わかりやすいのは<strong className="text-gray-800">2番目の「前回と同じ重量」</strong>です。同じ種目・同じ重量で回数が落ちたら、それは気のせいではなく回復が間に合っていない客観的なサインです。逆にここが維持できているなら、多少だるくても進めて問題ありません。
              </p>
              <p className="mt-2">
                「休むべき」が2つ以上当てはまったら、その週は思い切って1〜2日多く休むほうが結果的に早いです。特に4番目の関節の痛みを無視すると、数週間から数ヶ月の離脱につながります。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                効果的な休息の取り方
              </h2>

              <h3 className="font-bold text-gray-800 mt-4 mb-2">
                完全休養日を設ける
              </h3>
              <p>
                週に最低1〜2日は、筋トレをしない完全休養日を設けましょう。初心者なら2〜3日、中級者以上でも最低1日は完全に体を休める日が必要です。この日は体の修復に集中させる日と考えてください。
              </p>

              <div className="bg-gray-50 rounded-xl p-4 mt-3">
                <p className="font-bold text-gray-800 mb-2">週5回やっても回復が間に合う理由</p>
                <p className="text-gray-600">
                  私は40代ですが、いまも週5回トレーニングしています。完全休養は週2日だけです。こう書くと超回復の48〜72時間と矛盾するように見えますが、そうではありません。<strong className="text-gray-800">超回復の48〜72時間は「同じ部位」の話</strong>だからです。週5回でも、部位を分けていれば1つの部位あたりは週1〜2回にしかなりません。
                </p>
                <p className="text-gray-600 mt-2">
                  つまり頻度を上げたいなら、休みを削るのではなく分け方を変えるのが正解です。逆に全身を毎回やる組み方のまま週5回にすると、確実に回復が破綻します。頻度別の具体的な分け方は
                  <Link href="/column/split-routine" className="text-orange-500 font-bold hover:text-orange-600 underline">
                    筋トレ分割法の早見表
                  </Link>
                  に、週何回が自分に合うかは
                  <Link href="/column/frequency" className="text-orange-500 font-bold hover:text-orange-600 underline">
                    筋トレの頻度
                  </Link>
                  にまとめています。
                </p>
              </div>

              <h3 className="font-bold text-gray-800 mt-4 mb-2">
                アクティブレストを活用する
              </h3>
              <p>
                完全に動かないのではなく、軽い運動で血行を促進する「アクティブレスト（積極的休養）」も効果的です。軽いウォーキング、ストレッチ、ヨガなど、筋肉に大きな負荷をかけない運動は、血流を改善して回復を早める効果があります。
              </p>

              <h3 className="font-bold text-gray-800 mt-4 mb-2">
                質の高い睡眠を取る
              </h3>
              <p>
                筋肉の修復と成長に欠かせない成長ホルモンは、睡眠中に最も多く分泌されます。特に深い睡眠（ノンレム睡眠）の時間帯に多く分泌されるため、7〜8時間の質の高い睡眠を確保することが重要です。
              </p>
              <div className="space-y-2 mt-3">
                <div className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">▸</span>
                  <p>就寝の1〜2時間前にはスマホやパソコンの画面を見ないようにする</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">▸</span>
                  <p>毎日同じ時間に就寝・起床するリズムを作る</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">▸</span>
                  <p>寝室の温度を18〜22度に保ち、暗い環境で眠る</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">▸</span>
                  <p>就寝前のカフェインやアルコールを避ける</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                休息日の栄養管理
              </h2>
              <p>
                休息日だからといってタンパク質の摂取を減らしてはいけません。筋肉は休息日にこそ修復・成長しているため、トレーニング日と同じくらいのタンパク質が必要です。
              </p>
              <p className="mt-2">
                ただし、トレーニング日に比べて消費カロリーは少なくなるため、炭水化物や脂質の量を少し控えめにするとよいでしょう。水分補給も忘れずに行い、体の回復をサポートしましょう。必要なタンパク質量は
                <Link href="/column/protein-guide" className="text-orange-500 font-bold hover:text-orange-600 underline">
                  プロテインの選び方ガイド
                </Link>
                に体重別の早見表を、休息日の消費カロリーは
                <Link href="/calorie-calculator" className="text-orange-500 font-bold hover:text-orange-600 underline">
                  カロリー計算機
                </Link>
                で概算できます。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                まとめ
              </h2>
              <ul className="space-y-1">
                <li>・超回復の48〜72時間は「同じ部位」の話。部位を分ければ週5回でも成立する</li>
                <li>・休めているかは感覚ではなく、前回と同じ重量で回数が落ちていないかで判断する</li>
                <li>・関節の痛みだけは我慢しない。数週間〜数ヶ月の離脱に直結する</li>
                <li>・休息日もタンパク質は減らさない。修復しているのは休息日のほう</li>
              </ul>
              <p className="mt-3">
                「休むこともトレーニング」と考え、計画的に休息を取りましょう。サクトレでは、直近でどの部位をやったかの履歴をもとに、回復が間に合っていない部位を避けたメニューを提案します。
              </p>
            </section>
          </div>
        </div>

        <ShareButtons url="https://sakutore.jp/column/rest" title="筋肉を育てる休息の重要性" />
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
