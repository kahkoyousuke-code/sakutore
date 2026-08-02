import Link from "next/link";
import ShareButtons from "@/components/ShareButtons";
import { pageMetadata } from "@/lib/metadata";
import AuthorBox from "@/components/AuthorBox";
import RizapCta from "@/components/RizapCta";

export const metadata = pageMetadata({
  title: "筋トレで痩せる仕組み｜筋肉1kgで代謝は何kcal上がるのか - サクトレ",
  description:
    "組織別の代謝率データをもとに「筋肉を増やせば代謝が激増する」の実際を検証。筋肉1kgは1日13kcal、5kg増やしても65kcalです。筆者が12kg落としたときの内訳計算つきで、筋トレの本当の役割を解説します。",
  path: "/column/metabolism",
});

export default function MetabolismPage() {
  return (
    <main className="min-h-screen flex flex-col items-center px-4 py-8">
      <div className="max-w-md w-full animate-slideUp">
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <p className="text-xs text-orange-500 font-bold mb-2">コラム</p>
          <h1 className="text-xl font-bold text-gray-800 mb-6">
            筋トレで痩せる仕組みを解説
          </h1>

          <div className="space-y-6 text-sm text-gray-700 leading-relaxed">
            <section>
              <p>
                「筋トレって筋肉をつけるものでしょ？痩せるならランニングじゃないの？」と思っていませんか？実は、筋トレはダイエットにも非常に効果的なアプローチです。しかも、有酸素運動とは異なる仕組みで体脂肪を減らすため、組み合わせることでより大きな効果が得られます。この記事では、筋トレで痩せるメカニズムをわかりやすく解説します。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                基礎代謝とは何か
              </h2>
              <p>
                「代謝を上げれば痩せやすくなる」とよく聞きますが、代謝とは具体的に何でしょうか？
              </p>

              <h3 className="font-bold text-gray-800 mt-4 mb-2">
                1日の消費カロリーの内訳
              </h3>
              <p>
                人間が1日に消費するカロリーは、大きく3つに分けられます。
              </p>
              <div className="bg-gray-50 rounded-xl p-4 mt-3">
                <ul className="space-y-2 text-gray-600">
                  <li>
                    <span className="font-bold text-gray-800">基礎代謝（約60〜70%）</span>：何もしなくても生命維持のために消費するエネルギー。呼吸・体温維持・臓器の活動などに使われます。
                  </li>
                  <li>
                    <span className="font-bold text-gray-800">身体活動（約20〜30%）</span>：歩く・運動する・家事をするなど、体を動かすことで消費するエネルギー。
                  </li>
                  <li>
                    <span className="font-bold text-gray-800">食事誘発性熱産生（約10%）</span>：食べ物を消化・吸収する際に消費するエネルギー。
                  </li>
                </ul>
              </div>
              <p className="mt-3">
                このうち最も大きな割合を占めるのが基礎代謝です。基礎代謝が高いほど、何もしなくても多くのカロリーを消費できる「痩せやすい体」になります。
              </p>

              <h3 className="font-bold text-gray-800 mt-4 mb-2">
                「筋肉を増やせば代謝が激増する」は言いすぎ
              </h3>
              <p>
                ここで多くのサイトが「基礎代謝を決める最大の要因は筋肉量」と書きますが、数字を見ると少し話が違います。組織ごとの1日あたりの消費カロリー（体重1kgあたり）はこうなっています。
              </p>

              <div className="overflow-x-auto -mx-2 px-2 mt-3">
                <table className="w-full text-xs border-collapse">
                  <thead>
                    <tr className="bg-orange-50">
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
                        組織
                      </th>
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
                        1kgあたり/日
                      </th>
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
                        メモ
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-200 px-2 py-2 font-bold text-gray-700">心臓・腎臓</td>
                      <td className="border border-gray-200 px-2 py-2">約440kcal</td>
                      <td className="border border-gray-200 px-2 py-2">最も燃費が悪いが増やせない</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 px-2 py-2 font-bold text-gray-700">脳</td>
                      <td className="border border-gray-200 px-2 py-2">約240kcal</td>
                      <td className="border border-gray-200 px-2 py-2">重量は軽いが消費は大きい</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-2 py-2 font-bold text-gray-700">肝臓</td>
                      <td className="border border-gray-200 px-2 py-2">約200kcal</td>
                      <td className="border border-gray-200 px-2 py-2">基礎代謝の主役のひとつ</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 px-2 py-2 font-bold text-gray-700">骨格筋</td>
                      <td className="border border-gray-200 px-2 py-2">約13kcal</td>
                      <td className="border border-gray-200 px-2 py-2">量が多いので合計では大きい</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-2 py-2 font-bold text-gray-700">脂肪</td>
                      <td className="border border-gray-200 px-2 py-2">約4.5kcal</td>
                      <td className="border border-gray-200 px-2 py-2">筋肉の約3分の1</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                ※Elia（1992）の組織別代謝率としてよく引用される数値です。
              </p>

              <p className="mt-3">
                注目すべきは骨格筋の<strong className="text-gray-800">13kcal</strong>という数字です。仮に筋トレを頑張って筋肉を5kg増やしても、基礎代謝の増加は
                <strong className="text-gray-800">1日65kcal</strong>
                。おにぎり半分にもなりません。しかも筋肉5kgは、初心者でも1年以上かかる相当な増量です。
              </p>
              <p className="mt-2">
                では「筋トレで痩せる」は嘘なのかというと、そうではありません。ただし理由が世間で言われているものとは違います。<strong className="text-gray-800">筋トレが効くのは基礎代謝の底上げではなく、この後で説明する「減量中に筋肉を守ること」と「消費側の習慣が変わること」のほう</strong>です。数字を知らないまま「代謝が上がるから痩せる」と期待すると、思ったほど減らずに続かなくなります。
              </p>
              <p className="mt-2">
                自分の基礎代謝と1日の消費カロリーの概算は
                <Link href="/calorie-calculator" className="text-orange-500 font-bold hover:text-orange-600 underline">
                  カロリー計算機
                </Link>
                で出せます。まず今の数字を知るところからです。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                筋肉量と消費カロリーの関係
              </h2>
              <p>
                筋トレで筋肉量が増えると、どのように消費カロリーが変わるのでしょうか？
              </p>

              <h3 className="font-bold text-gray-800 mt-4 mb-2">
                アフターバーン効果（EPOC）
              </h3>
              <p>
                筋トレの最大の特徴は「アフターバーン効果（EPOC：運動後過剰酸素消費）」です。これは、激しい筋トレの後、筋肉の修復や体のホメオスタシス（恒常性）の回復のために、トレーニング終了後も数時間〜24時間以上にわたって多くのカロリーが消費される現象です。
              </p>
              <p className="mt-2">
                有酸素運動では運動中は多くのカロリーを消費しますが、終了後の消費量は急速に下がります。一方、筋トレはトレーニング後も長時間にわたって消費が続くため、「運動後も燃え続ける」効果があります。
              </p>

              <h3 className="font-bold text-gray-800 mt-4 mb-2">
                筋肉は24時間働く「燃焼エンジン」
              </h3>
              <p>
                筋トレで筋肉量を増やすことは、体に24時間365日動き続けるエンジンを搭載するようなイメージです。筋肉が増えた分だけ、寝ている間も含めてずっとカロリーを消費してくれます。
              </p>
              <div className="bg-gray-50 rounded-xl p-4 mt-3">
                <p className="font-bold text-gray-800 mb-2">
                  筋肉が増えると…
                </p>
                <ul className="space-y-1 text-gray-600">
                  <li>・同じ食事量でも太りにくくなる</li>
                  <li>・少し食べすぎても体重が戻りやすい</li>
                  <li>・体脂肪率が下がって引き締まって見える</li>
                  <li>・リバウンドしにくい体になる</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                有酸素運動との比較
              </h2>
              <p>
                「痩せるなら有酸素運動では？」という疑問に答えましょう。有酸素運動（ジョギング・ウォーキング・水泳など）と筋トレは、それぞれ異なる特性を持っています。
              </p>

              <div className="bg-gray-50 rounded-xl p-4 mt-3 space-y-3">
                <div>
                  <p className="font-bold text-gray-800">有酸素運動の特徴</p>
                  <ul className="mt-1 space-y-1 text-gray-600">
                    <li>・運動中の脂肪燃焼効率が高い</li>
                    <li>・心肺機能を高める効果がある</li>
                    <li>・筋肉量はほとんど増えない</li>
                    <li>・終了後の消費カロリーはすぐに戻る</li>
                    <li>・過度に行うと筋肉が分解されることがある</li>
                  </ul>
                </div>
                <div>
                  <p className="font-bold text-gray-800">筋トレの特徴</p>
                  <ul className="mt-1 space-y-1 text-gray-600">
                    <li>・運動中の直接的な脂肪燃焼は少ない</li>
                    <li>・減量中に筋肉が落ちるのを防げる（これが本命）</li>
                    <li>・基礎代謝も上がるが、増加幅は小さい（筋肉1kgで約13kcal）</li>
                    <li>・アフターバーン効果で長時間燃焼が続く</li>
                    <li>・リバウンドしにくい体質になる</li>
                    <li>・体型が引き締まって見える（体重変化が少なくても）</li>
                  </ul>
                </div>
              </div>

              <h3 className="font-bold text-gray-800 mt-4 mb-2">
                最も効果的な組み合わせ方
              </h3>
              <p>
                ダイエット効果を最大化するには、筋トレと有酸素運動を組み合わせるのが理想的です。ただし、順番が重要です。
              </p>
              <div className="space-y-2 mt-3">
                <div className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">▸</span>
                  <p>
                    <span className="font-bold">筋トレ → 有酸素運動の順</span>：筋トレでグリコーゲン（糖質エネルギー）を消費した後に有酸素運動を行うと、脂肪が優先的に使われやすくなります。
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">▸</span>
                  <p>
                    <span className="font-bold">別日に分ける</span>：筋トレ日と有酸素運動日を分けると、それぞれの質を高められます。筋トレ後は筋肉の回復に集中させましょう。
                  </p>
                </div>
              </div>

              <h3 className="font-bold text-gray-800 mt-4 mb-2">
                「体重より体脂肪率」を意識しよう
              </h3>
              <p>
                筋トレで筋肉が増えると、体重が変わらなくても見た目が大きく変わることがあります。これは筋肉が脂肪より密度が高いためで、同じ体重でも筋肉が多い方がスリムに見えます。体重計の数字だけに一喜一憂せず、体脂肪率や見た目の変化で成果を評価しましょう。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                筆者が12kg落としたときの内訳
              </h2>
              <p>
                私は体重90kg超から78kgまで、約1年で12kg落としました。この数字を先ほどの代謝の話に当てはめてみると、何が効いていたのかがはっきりします。
              </p>

              <div className="overflow-x-auto -mx-2 px-2 mt-3">
                <table className="w-full text-xs border-collapse">
                  <thead>
                    <tr className="bg-orange-50">
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
                        項目
                      </th>
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
                        数字
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-200 px-2 py-2 font-bold text-gray-700">減った体重</td>
                      <td className="border border-gray-200 px-2 py-2">12kg（約1年）</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 px-2 py-2 font-bold text-gray-700">仮に全部が脂肪なら</td>
                      <td className="border border-gray-200 px-2 py-2">7,200kcal × 12 ＝ 86,400kcal</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-2 py-2 font-bold text-gray-700">1日あたりの赤字</td>
                      <td className="border border-gray-200 px-2 py-2">86,400 ÷ 365 ≒ <strong>約237kcal</strong></td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 px-2 py-2 font-bold text-gray-700">筋肉5kg増でまかなえる分</td>
                      <td className="border border-gray-200 px-2 py-2">13 × 5 ＝ 65kcal（約27%）</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                ※減った12kgのすべてが脂肪とは限らないので、あくまで上限の試算です。
              </p>

              <p className="mt-3">
                つまり、<strong className="text-gray-800">仮に筋肉を5kg増やせていたとしても、必要な赤字の3割弱しか説明できません</strong>。残りの7割は食事と日々の活動量です。「筋トレしているから食べても大丈夫」という考え方が通用しないのは、この計算のためです。
              </p>
              <p className="mt-2">
                では筋トレは無駄だったのかというと逆で、私が12kg落としたあと今も78kgを維持できているのは筋トレを続けているからだと思っています。食事制限だけで落とすと筋肉ごと減って、戻したときに脂肪だけが増えます。<strong className="text-gray-800">筋トレの役割は「落とすこと」ではなく「落とした後に戻らないこと」</strong>です。この話は
                <Link href="/column/diet-rebound-muscle" className="text-orange-500 font-bold hover:text-orange-600 underline">
                  リバウンドと筋肉の関係
                </Link>
                に詳しく書いています。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                まとめ
              </h2>
              <ul className="space-y-1">
                <li>・筋肉1kgが増やす基礎代謝は1日約13kcal。5kg増やしても65kcalで、思っているより小さい</li>
                <li>・体重を落とす主役はあくまで食事。筋トレで代謝が激増するわけではない</li>
                <li>・筋トレの本当の役割は、減量中に筋肉を守り、落とした後に戻らない体にすること</li>
                <li>・筆者の12kg減も、計算上は筋肉の寄与では3割弱しか説明できない</li>
              </ul>
              <p className="mt-3">
                期待値を正しく持てれば、続けられます。まずは
                <Link href="/calorie-calculator" className="text-orange-500 font-bold hover:text-orange-600 underline">
                  カロリー計算機
                </Link>
                で自分の消費カロリーを把握し、サクトレで目標に合ったメニューを作成してみてください。
              </p>
            </section>
          </div>
        </div>

        <RizapCta lead="「痩せやすい体質」をつくるには継続が命。一人で挫折しがちな人ほど伴走者がいると変わります。" />

        <ShareButtons url="https://sakutore.jp/column/metabolism" title="筋トレで痩せる仕組みを解説" />
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
