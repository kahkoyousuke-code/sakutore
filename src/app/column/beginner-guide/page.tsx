import Link from "next/link";
import ShareButtons from "@/components/ShareButtons";
import { pageMetadata } from "@/lib/metadata";
import AuthorBox from "@/components/AuthorBox";

export const metadata = pageMetadata({
  title: "筋トレ初心者が最初にやるべき5つのこと｜種目表・負荷設定表つき - サクトレ",
  description:
    "最初に覚える5種目（ジム・自宅の対応表）と、目的別の重量・回数・休憩の目安表を掲載。筋トレ歴15年の筆者がBIG3すべて60kg前後から始めた実データつきで、失敗しない始め方を解説します。",
  path: "/column/beginner-guide",
});

export default function BeginnerGuidePage() {
  return (
    <main className="min-h-screen flex flex-col items-center px-4 py-8">
      <div className="max-w-md w-full animate-slideUp">
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <p className="text-xs text-orange-500 font-bold mb-2">コラム</p>
          <h1 className="text-xl font-bold text-gray-800 mb-6">
            筋トレ初心者が最初にやるべき5つのこと
          </h1>

          <div className="space-y-6 text-sm text-gray-700 leading-relaxed">
            <section>
              <p className="text-gray-500 italic border-l-2 border-orange-300 pl-3 mb-3">
                私も最初は何から始めればいいかまったくわからず、むやみにトレーニングして結果が出ない時期がありました。その経験をもとに、本当に最初にやるべきことをまとめました。
              </p>
              <p>
                「筋トレを始めたいけれど、何から手をつければいいかわからない」という方は多いのではないでしょうか。ジムに行っても器具の使い方がわからず、自宅でやるにしても正しいやり方がわからない。そんな初心者の方に向けて、筋トレを始めるときに最初にやるべき5つのことを解説します。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                1. 目標を明確にする
              </h2>
              <p>
                筋トレを始める前に、まず「なぜ筋トレをするのか」を明確にしましょう。「体を引き締めたい」「筋肉をつけて見た目を変えたい」「健康のために運動習慣をつけたい」など、目標によってトレーニングの内容は大きく変わります。
              </p>
              <p className="mt-2">
                目標が曖昧なまま始めると、モチベーションが続きにくくなります。具体的な目標を持つことで、何をすべきかが明確になり、トレーニングを継続しやすくなります。まずは「3ヶ月後にどうなっていたいか」をイメージしてみてください。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                2. 正しいフォームを覚える
              </h2>
              <p>
                筋トレで最も大切なのは、正しいフォームで行うことです。間違ったフォームでトレーニングを続けると、狙った筋肉に効かないだけでなく、関節や腱を痛めるリスクがあります。
              </p>
              <p className="mt-2">
                最初のうちは重量を軽くしてでも、正しいフォームを身につけることを優先しましょう。鏡を見ながら行ったり、動画で正しいフォームを確認したりするのが効果的です。特にスクワット・デッドリフト・ベンチプレスなどの基本種目は、フォームが崩れやすいので注意が必要です。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                3. 大きな筋肉から鍛える
              </h2>
              <p>
                初心者が効率よく成果を出すには、まず大きな筋肉群から鍛えるのがおすすめです。胸・背中・脚（太もも・お尻）といった大きな筋肉を鍛えることで、代謝が上がりやすく、見た目の変化も実感しやすくなります。
              </p>
              <p className="mt-2">
                具体的には、複数の関節を同時に使う「コンパウンド種目」から始めるのが効果的です。一度に多くの筋肉を使うため、種目数を絞っても全身をカバーできます。最初に覚えるのはこの5つで十分です。
              </p>

              <div className="overflow-x-auto -mx-2 px-2 mt-3">
                <table className="w-full text-xs border-collapse">
                  <thead>
                    <tr className="bg-orange-50">
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
                        部位
                      </th>
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
                        ジムなら
                      </th>
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
                        自宅なら
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-200 px-2 py-2 font-bold text-gray-700">脚・お尻</td>
                      <td className="border border-gray-200 px-2 py-2">スクワット</td>
                      <td className="border border-gray-200 px-2 py-2">ワイドスクワット</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 px-2 py-2 font-bold text-gray-700">胸</td>
                      <td className="border border-gray-200 px-2 py-2">ベンチプレス</td>
                      <td className="border border-gray-200 px-2 py-2">腕立て伏せ（膝つき可）</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-2 py-2 font-bold text-gray-700">背中</td>
                      <td className="border border-gray-200 px-2 py-2">ラットプルダウン</td>
                      <td className="border border-gray-200 px-2 py-2">インバーテッドロウ</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 px-2 py-2 font-bold text-gray-700">肩</td>
                      <td className="border border-gray-200 px-2 py-2">ショルダープレス</td>
                      <td className="border border-gray-200 px-2 py-2">パイクプッシュアップ</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-2 py-2 font-bold text-gray-700">体幹</td>
                      <td className="border border-gray-200 px-2 py-2">プランク</td>
                      <td className="border border-gray-200 px-2 py-2">プランク</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                ※種目名はサクトレのメニュー生成で使っている名称に合わせています。
              </p>
              <p className="mt-3">
                逆に、最初から腕や腹筋の種目を並べる必要はありません。<strong className="text-gray-800">腕は上の5種目をやっていれば勝手に使われます</strong>し、お腹の脂肪は腹筋種目では落ちません（部分痩せは起きません）。種目を増やすより、この5つの質を上げるほうが早いです。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                4. 適切な負荷と回数を設定する
              </h2>
              <p>
                初心者の場合、まずは「10〜15回で限界がくる重さ」を目安に設定しましょう。軽すぎると筋肉への刺激が足りず、重すぎるとフォームが崩れてケガのリスクが高まります。
              </p>
              <p className="mt-2">
                セット数は1種目あたり2〜3セットが目安です。セット間の休憩は1〜2分程度取りましょう。最初の数週間は筋肉痛がひどくなりやすいので、無理をせず、体の反応を見ながら徐々に負荷を上げていくことが大切です。
              </p>
              <p className="mt-2">
                なぜ10〜15回なのかというと、重量・回数・セットの組み合わせは目的によって変わり、初心者はその中で最もフォームが崩れにくい帯だからです。目的別の目安はこうなります。
              </p>

              <div className="overflow-x-auto -mx-2 px-2 mt-3">
                <table className="w-full text-xs border-collapse">
                  <thead>
                    <tr className="bg-orange-50">
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
                        目的
                      </th>
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
                        重量（1RM比）
                      </th>
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
                        回数
                      </th>
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
                        休憩
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-200 px-2 py-2 font-bold text-gray-700 whitespace-nowrap">筋力を上げる</td>
                      <td className="border border-gray-200 px-2 py-2">85%以上</td>
                      <td className="border border-gray-200 px-2 py-2">1〜5回</td>
                      <td className="border border-gray-200 px-2 py-2">3〜5分</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 px-2 py-2 font-bold text-gray-700 whitespace-nowrap">筋肉を大きくする</td>
                      <td className="border border-gray-200 px-2 py-2">67〜85%</td>
                      <td className="border border-gray-200 px-2 py-2">6〜12回</td>
                      <td className="border border-gray-200 px-2 py-2">1〜2分</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-2 py-2 font-bold text-gray-700 whitespace-nowrap">引き締め・持久力</td>
                      <td className="border border-gray-200 px-2 py-2">67%以下</td>
                      <td className="border border-gray-200 px-2 py-2">15回以上</td>
                      <td className="border border-gray-200 px-2 py-2">30〜60秒</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                ※1RM＝1回だけ挙げられる最大重量。何kgが自分の何%にあたるかは
                <Link href="/rm-calculator" className="text-orange-600 font-bold underline">
                  RM計算機
                </Link>
                で換算できます。
              </p>
              <p className="mt-3">
                初心者が最初から1行目（85%以上）を狙うのは危険です。<strong className="text-gray-800">高重量は少しのフォームの崩れがそのまま怪我になります</strong>。まずは10〜15回の帯でフォームを固めて、そこから2行目に移るのが安全です。
              </p>
              <p className="mt-2">
                また、同じ重量でずっとトレーニングしていると筋肉が慣れてしまいます。2〜4週間ごとに少しずつ重量を増やす「漸進的過負荷」を意識すると、効率よく筋力がアップしていきます。</p>

              <div className="bg-gray-50 rounded-xl p-4 mt-3">
                <p className="font-bold text-gray-800 mb-2">最初の重量は、驚くほど軽くていい</p>
                <p className="text-gray-600">
                  私が始めた頃は、BIG3（ベンチプレス・スクワット・デッドリフト）がすべて60kg前後でした。ベンチは60kgを2〜3回がやっとです。当時の体重は90kgを超えていたので、体重比で0.7倍にも届いていません。<strong className="text-gray-800">スタート地点はその程度で問題ありません</strong>。そこから15年かけて、自己ベストはベンチ120kg・スクワット120kg・デッドリフト160kgになりました。
                </p>
                <p className="text-gray-600 mt-2">
                  初心者が最も失敗しやすいのは、初回に見栄を張って重すぎる重量を選ぶことです。挙がらないだけならまだしも、フォームが固まる前に変な癖がつくと後で直すほうが大変になります。詳しい推移は
                  <Link href="/column/10years" className="text-orange-600 font-bold underline">
                    10年筋トレを続けてわかったこと
                  </Link>
                  に書いています。
                </p>
              </div>
              <p className="mt-3 text-xs bg-orange-50 border border-orange-100 rounded-xl p-3">
                💡 最初の重量に迷ったら
                <Link href="/weight-checker" className="text-orange-600 font-bold underline">
                  適正重量診断
                </Link>
                で目安を確認できます。伸びてきたら
                <Link href="/column/strength-standards" className="text-orange-600 font-bold underline">
                  BIG3の重量目安表
                </Link>
                で自分の現在地をチェックしてみてください。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                5. 継続できる仕組みを作る
              </h2>
              <p>
                筋トレで成果を出すために最も重要なのは「継続すること」です。どんなに優れたメニューでも、続けなければ効果は出ません。初心者のうちは週2〜3回のペースで十分です。
              </p>
              <p className="mt-2">
                継続するコツは、ハードルを下げることです。「毎日1時間やる」ではなく「週2回、30分だけ」から始めましょう。トレーニングの曜日と時間を決めてルーティン化するのも効果的です。
              </p>
              <p className="mt-2">
                また、トレーニング記録をつけることでモチベーションを維持しやすくなります。前回より1回でも多くできた、重量を少し増やせたなど、小さな成長を実感することが継続の原動力になります。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                まとめ
              </h2>
              <ul className="space-y-1">
                <li>・種目は5つで足りる。腕と腹筋を最初から並べる必要はない</li>
                <li>・最初は10〜15回の帯でフォームを固める。高重量は崩れがそのまま怪我になる</li>
                <li>・スタート重量は驚くほど軽くていい（筆者はBIG3すべて60kg前後だった）</li>
                <li>・週2〜3回で十分。ハードルを下げて、記録をつけて続ける</li>
                <li>・2〜4週間ごとに少しずつ重量を上げる（漸進的過負荷）</li>
              </ul>
              <p className="mt-3">
                最初から完璧を目指す必要はありません。次に読むなら、週何回やるかを決める
                <Link href="/column/frequency" className="text-orange-600 font-bold underline">
                  筋トレの頻度
                </Link>
                と、休み方を決める
                <Link href="/column/rest" className="text-orange-600 font-bold underline">
                  休息の重要性
                </Link>
                、食事側の
                <Link href="/column/protein" className="text-orange-600 font-bold underline">
                  タンパク質の摂り方
                </Link>
                です。サクトレでは5つの質問に答えるだけで、今日やるメニューが出ます。
              </p>
            </section>
          </div>
        </div>

        <ShareButtons url="https://sakutore.jp/column/beginner-guide" title="筋トレ初心者が最初にやるべき5つのこと" />
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
