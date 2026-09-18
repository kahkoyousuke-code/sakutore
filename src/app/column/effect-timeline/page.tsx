import Link from "next/link";
import ShareButtons from "@/components/ShareButtons";
import RizapCta from "@/components/RizapCta";
import { pageMetadata } from "@/lib/metadata";
import AuthorBox from "@/components/AuthorBox";

export const metadata = pageMetadata({
  title: "筋トレの効果はいつから出る？1ヶ月・3ヶ月・6ヶ月の変化の目安 - サクトレ",
  description:
    "「1ヶ月で見た目が変わる」はまず起きません。1ヶ月で増える筋肉0.5kgを腕の太さに換算するとわずか3mm。変化が出る順番を時系列の早見表で整理し、筋トレ歴15年の筆者が効果の測り方まで解説します。",
  path: "/column/effect-timeline",
});

// 「いつ・体の中で何が起きていて・自分では何が見えるか」を3列に分ける。
// 見た目の変化を待つ人が心折れるのは、1列目と3列目のズレを知らないから。
const timelineRows = [
  {
    period: "1〜2週間",
    inside: "フォームを覚えている段階。筋肉痛が出る",
    visible: "見た目も重量も変化なし",
  },
  {
    period: "1ヶ月",
    inside: "神経系が適応し、同じ筋肉でより強い力を出せるようになる",
    visible: "扱える重量が上がる。見た目は変わらない",
  },
  {
    period: "2〜3ヶ月",
    inside: "筋肉そのものが増え始める",
    visible: "触ると硬い。袖や胸まわりの感じが少し変わる",
  },
  {
    period: "4〜6ヶ月",
    inside: "増えた筋肉がまとまった量になる",
    visible: "写真で分かる。家族や同僚に気づかれ始める",
  },
  {
    period: "1年",
    inside: "体型として定着する",
    visible: "久しぶりに会う人に気づかれる",
  },
  {
    period: "2年目以降",
    inside: "増えるペースが1年目の半分以下になる",
    visible: "見た目の変化はゆるやか。重量の更新が指標になる",
  },
];

// 1ヶ月で増えた筋肉0.5kgを部位のサイズに換算した結果。
// 筋肉の密度1.06g/cm3、部位を円柱とみなして周囲の増分を出している。
const sizeRows = [
  {
    part: "上腕（片方）",
    gain: "約50g",
    size: "32.0cm → 32.3cm（＋0.3cm）",
  },
  {
    part: "太もも（片方）",
    gain: "約100g",
    size: "55.0cm → 55.3cm（＋0.3cm）",
  },
];

const checkRows = [
  {
    title: "毎回まったく同じ重量でやっている",
    body: "体は「今の負荷で足りている」と判断すると、それ以上変わりません。回数が目標の上限まで届いたら、次回は少しだけ重くする。この積み重ねだけが効果の正体です。",
  },
  {
    title: "週1回しかやっていない",
    body: "週1回だと、鍛えた分が回復して元に戻るころに次が来ます。同じ部位を週2回触れる組み方にするだけで、伸び方が変わります。",
  },
  {
    title: "タンパク質が足りていない",
    body: "材料がなければ筋肉は増えません。体重1kgあたり1.6〜2.0gが目安で、体重70kgなら112〜140g。日本人の平均摂取量のおよそ2倍です。",
  },
  {
    title: "睡眠時間が6時間を切っている",
    body: "筋肉が作られるのはトレーニング中ではなく休んでいる間です。睡眠が削られると、同じメニューをこなしても回復が追いつきません。",
  },
  {
    title: "体重計しか見ていない",
    body: "筋肉が増えて脂肪が減ると、体重はほとんど動きません。体重だけを見ていると「変化なし」と判断して、一番伸びている時期にやめてしまいます。",
  },
];

export default function EffectTimelinePage() {
  return (
    <main className="min-h-screen flex flex-col items-center px-4 py-8">
      <div className="max-w-md w-full animate-slideUp">
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <p className="text-xs text-orange-500 font-bold mb-2">コラム</p>
          <h1 className="text-xl font-bold text-gray-800 mb-6">
            筋トレの効果はいつから出る？1ヶ月・3ヶ月・6ヶ月の変化の目安
          </h1>

          <div className="space-y-6 text-sm text-gray-700 leading-relaxed">
            <section>
              <p>
                筋トレを始めて最初にぶつかる壁は、重さでもきつさでもなく「やっているのに変わらない」という時間です。SNSでは「1ヶ月でこれだけ変わりました」という写真が流れてきます。自分の鏡には、何も起きていない。
              </p>
              <p className="mt-2">
                先に結論を書きます。<span className="font-bold">変化には順番があります</span>。①扱える重量が上がる → ②触ると硬くなる → ③自分が鏡で気づく → ④他人が気づく、の順です。そして見た目（③④）が動き出すのは、早くても3ヶ月目からです。1ヶ月で見た目が変わらないのは失敗ではなく、順番どおりです。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                効果が出る順番の早見表
              </h2>
              <p>
                週2〜3回、正しく続けた場合の目安です。「体の中で起きていること」と「自分で確認できること」は、ずれます。
              </p>
              <div className="overflow-x-auto -mx-2 px-2 mt-3">
                <table className="w-full text-xs border-collapse">
                  <thead>
                    <tr className="bg-orange-50">
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
                        時期
                      </th>
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700">
                        体の中で起きていること
                      </th>
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700">
                        自分で確認できること
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {timelineRows.map((row) => (
                      <tr key={row.period}>
                        <td className="border border-gray-200 px-2 py-2 font-bold text-gray-800 whitespace-nowrap">
                          {row.period}
                        </td>
                        <td className="border border-gray-200 px-2 py-2 text-gray-700">
                          {row.inside}
                        </td>
                        <td className="border border-gray-200 px-2 py-2 text-gray-600">
                          {row.visible}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-3 text-xs text-gray-500">
                ※ 週1回だと全体が1.5〜2倍の時間軸にずれると考えてください。逆に、週4回に増やしても半分にはなりません。回復が間に合わないためです。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                なぜ1ヶ月では見た目が変わらないのか（計算してみる）
              </h2>
              <p>
                「気合いが足りない」ではなく、単純に量の問題です。計算すると一瞬で納得できます。
              </p>
              <p className="mt-2">
                初心者が1ヶ月に増やせる筋肉は、条件がよくても<span className="font-bold">せいぜい0.5kg</span>です。ここで大事なのは、その0.5kgが<span className="font-bold">全身に散らばる</span>こと。腕だけに0.5kgつくわけではありません。腕2本に回るのはせいぜい2割（100g）、脚2本で4割（200g）といったところです。
              </p>
              <p className="mt-2">
                筋肉の密度は1cm³あたり約1.06g。部位を円柱とみなして、周囲が何cm増えるか出してみます。
              </p>
              <div className="overflow-x-auto -mx-2 px-2 mt-3">
                <table className="w-full text-xs border-collapse">
                  <thead>
                    <tr className="bg-orange-50">
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
                        部位
                      </th>
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
                        1ヶ月で増える量
                      </th>
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
                        周囲のサイズ
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {sizeRows.map((row) => (
                      <tr key={row.part}>
                        <td className="border border-gray-200 px-2 py-2 text-gray-700 whitespace-nowrap">
                          {row.part}
                        </td>
                        <td className="border border-gray-200 px-2 py-2 font-bold text-gray-800 whitespace-nowrap">
                          {row.gain}
                        </td>
                        <td className="border border-gray-200 px-2 py-2 text-gray-600 whitespace-nowrap">
                          {row.size}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-3 text-xs text-gray-500">
                ※ 上腕は長さ30cm・周囲32cm、太ももは長さ40cm・周囲55cmの円柱として計算した概算です。
              </p>
              <p className="mt-3">
                <span className="font-bold">1ヶ月で＋3mm</span>。メジャーならぎりぎり読めますが、鏡や写真で分かるわけがない差です。「1ヶ月で激変」の写真の中身は、ほとんどが落ちた脂肪・むくみ・トレーニング直後のパンプ、そして撮影条件（照明と角度）です。筋肉が増えた量そのものではありません。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                最初の1ヶ月で伸びているのは筋肉ではなく「神経」
              </h2>
              <p>
                では1ヶ月目は無駄かというと、逆です。ここで確実に伸びるものがあります。<span className="font-bold">扱える重量</span>です。
              </p>
              <p className="mt-2">
                トレーニングを始めて最初の1ヶ月で挙がる重量が増えるのは、筋肉が太くなったからではありません。持っている筋線維をいっぺんに動員できるようになり、力の出し方を体が覚えるからです。開始からおよそ4〜6週間の筋力の伸びは、筋肉の太さの変化よりもこの神経系の適応で説明できることが古くから知られています。
              </p>
              <p className="mt-2">
                つまり「重量は伸びているのに見た目が変わらない」は、順調に進んでいる証拠です。逆に言えば、<span className="font-bold">最初の3ヶ月を見た目で採点すると必ず心が折れます</span>。この時期の通知表は重量と回数のほうです。
              </p>
              <p className="mt-2">
                挙げた重量が前より強くなっているかは、
                <Link href="/rm-calculator" className="text-orange-600 font-bold underline">
                  1RM換算計算機
                </Link>
                で比べられます。「60kg×5回」と「70kg×3回」のどちらが強いかは、換算しないと分かりません。今の自分がどのレベルにいるかは
                <Link href="/column/strength-standards" className="text-orange-600 font-bold underline">
                  BIG3の重量目安一覧
                </Link>
                で確認できます。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                見た目だけを急ぐなら、増やすより減らすほうが速い
              </h2>
              <p>
                筋肉は1ヶ月に0.5kgしか増えません。一方、脂肪は<span className="font-bold">1kgが約7,200kcal</span>なので、1日300kcalの赤字をつくれば1ヶ月で1.2kg落ちます。同じ1ヶ月なら、減らすほうが2倍以上動きます。「1ヶ月で見た目が変わった」の多くは、こちら側です。
              </p>
              <p className="mt-2">
                私自身も、体重90kg超から78kgまで12kg落とすのに約1年かかりました。1ヶ月あたり1kgのペースです。急がなかったというより、<span className="font-bold">これ以上速くすると筋肉から落ちていく</span>からです。食事制限だけで落とした体が戻りやすい理由は
                <Link href="/column/diet-rebound-muscle" className="text-orange-600 font-bold underline">
                  リバウンドの記事
                </Link>
                に、代謝の実際の数字は
                <Link href="/column/metabolism" className="text-orange-600 font-bold underline">
                  筋トレで痩せる仕組み
                </Link>
                にまとめています。
              </p>
            </section>

            <section className="bg-orange-50 border border-orange-100 rounded-xl p-4">
              <p className="font-bold text-orange-600 mb-2">
                筆者（筋トレ歴15年）の場合
              </p>
              <p className="text-xs leading-relaxed">
                私はBIG3とも60kg程度から始めて、自己ベストはベンチ120kg・スクワット120kg・デッドリフト160kgです。ここで正直に書いておくと、<span className="font-bold">この数字は15年かけて届いたもの</span>で、1年や2年の話ではありません。大会に出られる体になるまでも年単位でした。
                <br />
                <br />
                そのあいだ何を見ていたかというと、鏡ではなくノートです。前回より1回多い、前回より2.5kg重い。その記録だけは、見た目が止まって見える月でも必ず動いていました。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                効果が出るのが遅い人がやりがちなこと
              </h2>
              <p>
                半年やっても変化がないなら、時間ではなく中身の問題です。多いのはこの5つです。
              </p>
              <div className="space-y-3 mt-3">
                {checkRows.map((row) => (
                  <div key={row.title} className="flex items-start gap-2">
                    <span className="text-orange-500 font-bold">▸</span>
                    <p>
                      <span className="font-bold">{row.title}</span>：{row.body}
                    </p>
                  </div>
                ))}
              </div>
              <p className="mt-3">
                頻度と組み方は
                <Link href="/column/frequency" className="text-orange-600 font-bold underline">
                  週に何回筋トレすればいい？
                </Link>
                と
                <Link href="/column/split-routine" className="text-orange-600 font-bold underline">
                  分割法の早見表
                </Link>
                、タンパク質は
                <Link href="/column/protein" className="text-orange-600 font-bold underline">
                  必要な量と摂り方
                </Link>
                、睡眠は
                <Link href="/column/sleep" className="text-orange-600 font-bold underline">
                  筋トレと睡眠の関係
                </Link>
                で詳しく扱っています。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                変化を見逃さないための記録の取り方
              </h2>
              <p>
                3ヶ月目までの変化は、記録していないと存在しないのと同じです。やることは3つだけです。
              </p>
              <div className="space-y-2 mt-3">
                <div className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">1.</span>
                  <p>
                    <span className="font-bold">月に1回、同じ条件で写真を撮る</span>：朝起きてすぐ、同じ場所・同じ明るさ・同じ角度で。毎日撮っても差は見えません。比べるのは1ヶ月前とです。
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">2.</span>
                  <p>
                    <span className="font-bold">メジャーで腕・太もも・ウエストを測る</span>：先ほどの計算どおり、月の変化は数mmです。体重より正直に動きます。
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">3.</span>
                  <p>
                    <span className="font-bold">扱った重量と回数を毎回書く</span>：一番早く動く数字です。ここが3ヶ月伸びていないなら、負荷が足りていません。
                  </p>
                </div>
              </div>
              <p className="mt-3">
                サクトレでは、メニューの各種目に重量と回数をその場で記録できます。トレーニングした日はカレンダーに残るので、「今月何回やったか」も後から確認できます。ノートを別に用意しなくても3番目は自動でたまります。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                まとめ
              </h2>
              <p>
                効果が出る時期は、何を効果と呼ぶかで変わります。<span className="font-bold">1ヶ月で重量、3ヶ月で自分が気づき、6ヶ月で他人が気づく</span>。これが週2〜3回続けた場合の現実的な目安です。
              </p>
              <p className="mt-2">
                やめる人のほとんどは、体が変わらなかったのではなく、変化が見える前にやめています。逆に言えば、3ヶ月続けられる形を選べた時点で、ほぼ勝ちです。毎回のメニューを考えるのが負担なら、質問に答えるだけで今日の分が出てくるので使ってみてください。
              </p>
            </section>
          </div>
        </div>

        <RizapCta lead="効果が見え始める3ヶ月目までが、一番やめたくなる時期です。ここだけは人の手を借りる、という選び方もあります。" />

        <ShareButtons
          url="https://sakutore.jp/column/effect-timeline"
          title="筋トレの効果はいつから出る？1ヶ月・3ヶ月・6ヶ月の変化の目安"
        />
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
            今日の分のメニューを作る
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
