import Link from "next/link";
import ShareButtons from "@/components/ShareButtons";
import { pageMetadata } from "@/lib/metadata";
import AuthorBox from "@/components/AuthorBox";

export const metadata = pageMetadata({
  title: "週に何回筋トレすればいい？｜回数より週セット数で決まる - サクトレ",
  description:
    "レベル別の頻度目安と、部位別の回復時間表を掲載。さらに「本質は回数ではなく1部位あたり週何セットか」を表で解説します。40代で週5回続けている筆者が、その回数にしている理由も公開します。",
  path: "/column/frequency",
});

export default function FrequencyPage() {
  return (
    <main className="min-h-screen flex flex-col items-center px-4 py-8">
      <div className="max-w-md w-full animate-slideUp">
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <p className="text-xs text-orange-500 font-bold mb-2">コラム</p>
          <h1 className="text-xl font-bold text-gray-800 mb-6">
            週に何回筋トレすればいい？最適な頻度を解説
          </h1>

          <div className="space-y-6 text-sm text-gray-700 leading-relaxed">
            <section>
              <p>
                筋トレを始めようとしたとき、「週に何回やればいいの？」という疑問は誰もが抱くものです。やりすぎても体に負担がかかりますし、少なすぎると効果が出にくい。この記事では、トレーニングの最適な頻度をレベル別に解説し、自分に合ったペースの見つけ方をお伝えします。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                筋トレの頻度を決める基本的な考え方
              </h2>
              <p>
                筋トレの頻度を決めるうえで重要なのは「超回復」の仕組みを理解することです。筋トレで筋繊維にダメージを与えた後、体は48〜72時間かけて筋肉を修復し、以前より少し強い状態に回復させます。
              </p>
              <p className="mt-2">
                この回復が完了する前に同じ部位をトレーニングすると、筋肉が十分に修復されず、かえって筋力が落ちたり怪我のリスクが高まったりします。一方、回復後にトレーニングしないまま時間が経つと、せっかくの超回復の効果が薄れてしまいます。
              </p>
              <div className="overflow-x-auto -mx-2 px-2 mt-3">
                <table className="w-full text-xs border-collapse">
                  <thead>
                    <tr className="bg-orange-50">
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700">
                        部位
                      </th>
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
                        回復の目安
                      </th>
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
                        次に鍛えるまで
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-200 px-2 py-2 text-gray-700">胸・背中・脚（大筋群）</td>
                      <td className="border border-gray-200 px-2 py-2 font-bold text-gray-800 whitespace-nowrap">48〜72時間</td>
                      <td className="border border-gray-200 px-2 py-2 text-gray-600 whitespace-nowrap">中2〜3日</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-2 py-2 text-gray-700">肩・腕（小筋群）</td>
                      <td className="border border-gray-200 px-2 py-2 font-bold text-gray-800 whitespace-nowrap">約48時間</td>
                      <td className="border border-gray-200 px-2 py-2 text-gray-600 whitespace-nowrap">中1〜2日</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-2 py-2 text-gray-700">腹筋・ふくらはぎ</td>
                      <td className="border border-gray-200 px-2 py-2 font-bold text-gray-800 whitespace-nowrap">約24時間</td>
                      <td className="border border-gray-200 px-2 py-2 text-gray-600 whitespace-nowrap">毎日でも可</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                レベル別おすすめ頻度
              </h2>

              <h3 className="font-bold text-gray-800 mt-4 mb-2">
                初心者（0〜6ヶ月）：週2〜3回
              </h3>
              <p>
                筋トレを始めたばかりの初心者には、週2〜3回がおすすめです。この頻度なら、トレーニング日の間に十分な休息を取れるため、筋肉の回復が追いつきます。例えば月曜・水曜・金曜のように、1日おきにトレーニングするのが理想的です。
              </p>
              <p className="mt-2">
                初心者のうちは全身をまんべんなく鍛える「全身トレーニング」がおすすめです。1回のトレーニングで全身の主要な筋肉群をまとめて鍛えることで、効率よく基礎体力と筋力を身につけられます。
              </p>

              <h3 className="font-bold text-gray-800 mt-4 mb-2">
                中級者（6ヶ月〜2年）：週3〜4回
              </h3>
              <p>
                ある程度経験を積んだ中級者は、週3〜4回に頻度を上げるとよいでしょう。この段階では「分割法」を取り入れ、日によって鍛える部位を分けるのが効果的です。
              </p>
              <p className="mt-2">
                例えば「上半身の日」と「下半身の日」に分ける2分割や、「胸・三頭筋の日」「背中・二頭筋の日」「脚の日」に分ける3分割が一般的です。部位を分けることで、各筋肉に十分な刺激を与えつつ、回復時間も確保できます。頻度別の具体的な組み方は
                <Link href="/column/split-routine" className="text-orange-600 font-bold underline">
                  分割法の早見表
                </Link>
                にまとめています。
              </p>

              <h3 className="font-bold text-gray-800 mt-4 mb-2">
                上級者（2年以上）：週4〜6回
              </h3>
              <p>
                十分な経験と体力がある上級者は、週4〜6回のトレーニングが可能です。4〜5分割で各部位を細かく分けてトレーニングすることで、各部位に対してより多くの種目とボリュームで刺激を与えられます。
              </p>
              <p className="mt-2">
                ただし、週6回以上トレーニングする場合は、オーバートレーニングにならないよう体の状態に注意が必要です。疲労が抜けない、パフォーマンスが落ちたと感じたら、迷わず休息日を設けましょう。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                本当に大事なのは回数より「週あたりのセット数」
              </h2>
              <p>
                ここまで回数の話をしてきましたが、正直に言うと<strong className="text-gray-800">週何回かということ自体は、それほど本質ではありません</strong>。筋肉の成長を決めているのは、1つの部位に対して週に何セットやったかという総量（ボリューム）のほうです。
              </p>

              <div className="overflow-x-auto -mx-2 px-2 mt-3">
                <table className="w-full text-xs border-collapse">
                  <thead>
                    <tr className="bg-orange-50">
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
                        目的
                      </th>
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
                        1部位あたり週セット数
                      </th>
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
                        分け方の目安
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-200 px-2 py-2 font-bold text-gray-700 whitespace-nowrap">今の体を維持</td>
                      <td className="border border-gray-200 px-2 py-2">4〜6セット</td>
                      <td className="border border-gray-200 px-2 py-2">週1回でも足りる</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 px-2 py-2 font-bold text-gray-700 whitespace-nowrap">筋肉を増やす</td>
                      <td className="border border-gray-200 px-2 py-2">10〜20セット</td>
                      <td className="border border-gray-200 px-2 py-2">週2回に分けるのが効率的</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-2 py-2 font-bold text-gray-700 whitespace-nowrap">さらに追い込む</td>
                      <td className="border border-gray-200 px-2 py-2">20セット超</td>
                      <td className="border border-gray-200 px-2 py-2">週2〜3回に分割しないと消化できない</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="mt-3">
                ここで頻度が効いてきます。<strong className="text-gray-800">同じ週10セットでも、週1回で10セットまとめてやるより、週2回に5セットずつ分けたほうが質が保てます</strong>。1回のセッションで10セットも同じ部位をやると、後半は疲労で重量も動作の質も落ちるからです。つまり「週何回やるか」は、<strong className="text-gray-800">やりたい総量を消化するために何回に分ける必要があるか</strong>という順番で決まります。
              </p>

              <div className="bg-gray-50 rounded-xl p-4 mt-3">
                <p className="font-bold text-gray-800 mb-2">私が週5回にしている理由</p>
                <p className="text-gray-600">
                  私は40代でいまも週5回トレーニングしていますが、これは体力に任せて回数を増やしているわけではありません。やりたい種目数が多くて、週2〜3回では1回あたりが長くなりすぎるからです。<strong className="text-gray-800">1つの部位で見れば週1〜2回</strong>で、上の表の範囲に収まっています。
                </p>
                <p className="text-gray-600 mt-2">
                  逆に、週2回しか取れない人が無理に種目を詰め込むと、後半のセットが消化試合になります。<strong className="text-gray-800">回数を増やせないなら、種目を減らして質を上げるほうが正解</strong>です。回復が追いついているかの判断方法は
                  <Link href="/column/rest" className="text-orange-500 font-bold hover:text-orange-600 underline">
                    筋肉を育てる休息の重要性
                  </Link>
                  に、5つのチェック項目としてまとめています。
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                頻度を決めるときの注意点
              </h2>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">▸</span>
                  <p>
                    <span className="font-bold">無理をしない</span>：最初から高頻度で始めると、体が追いつかず挫折しやすくなります。まずは低頻度で始めて、慣れてきたら徐々に増やしましょう。
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">▸</span>
                  <p>
                    <span className="font-bold">生活リズムに合わせる</span>：仕事や家事で忙しい場合は、無理に回数を増やす必要はありません。週2回でも正しく行えば十分な効果が得られます。
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">▸</span>
                  <p>
                    <span className="font-bold">体の声を聞く</span>：筋肉痛が残っている部位は休ませましょう。痛みや違和感がある場合は、無理にトレーニングせず回復を優先してください。
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">▸</span>
                  <p>
                    <span className="font-bold">睡眠を十分に取る</span>：筋肉の回復には質の高い睡眠が欠かせません。7〜8時間の睡眠を心がけましょう。
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                まとめ
              </h2>
              <ul className="space-y-1">
                <li>・目安は初心者 週2〜3回、中級者 週3〜4回、上級者 週4〜6回</li>
                <li>・ただし本質は回数ではなく、1部位あたり週何セットやったか（増やしたいなら10〜20セット）</li>
                <li>・同じ総量なら、1回にまとめるより2回に分けたほうが質が保てる</li>
                <li>・週2回しか取れないなら、詰め込まず種目を減らして1種目の質を上げる</li>
                <li>・回復の判断は気分ではなく「前回と同じ重量で回数が落ちていないか」</li>
              </ul>
              <p className="mt-3">
                自分の生活で続けられる回数がまずあって、そこから逆算して総量と分け方を決める——この順番が現実的です。頻度別の具体的な組み方は
                <Link href="/column/split-routine" className="text-orange-500 font-bold hover:text-orange-600 underline">
                  分割法の早見表
                </Link>
                に、サクトレでは週何回トレーニングできるかを選ぶだけで、その頻度に最適化されたメニューが出ます。
              </p>
            </section>
          </div>
        </div>

        <ShareButtons url="https://sakutore.jp/column/frequency" title="週に何回筋トレすればいい？最適な頻度を解説" />
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
