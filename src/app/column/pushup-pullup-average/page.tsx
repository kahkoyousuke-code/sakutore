import Link from "next/link";
import ShareButtons from "@/components/ShareButtons";
import { pageMetadata } from "@/lib/metadata";
import AuthorBox from "@/components/AuthorBox";
import {
  formatLoadPercent,
  formatLoadWeight,
  formatReps,
  loadWeight,
  pullupLoadRow,
  pullupRepRows,
  pushupLoad,
  pushupLoadRows,
  pushupRepRows,
  womenPullupRepRows,
  womenPushupRepRows,
  type RepRow,
} from "@/lib/bodyweightStandards";
import { benchRows, formatRatio } from "@/lib/strengthStandards";

export const metadata = pageMetadata({
  title: "腕立て伏せ・懸垂は何回できれば普通？レベル別の回数目安一覧 - サクトレ",
  description:
    "自重種目の回数に「全国平均」は存在しません。フォームの条件を固定したうえで、腕立て伏せと懸垂の回数目安を男女別・レベル別の表に。腕立ては体重の約64%、懸垂は100%という負荷から、バーベル換算で何kgを挙げているのかも出します。",
  path: "/column/pushup-pullup-average",
});

// 例示に使う体重。負荷の換算はすべてこの体重で統一する。
const EXAMPLE_WEIGHT = 70;

// ベンチプレスの中級者ライン（体重比）。腕立ての負荷と比べるために使う。
// 数字は strengthStandards.ts が単一ソース。
const benchMiddle = benchRows.find((row) => row.level === "中級者");

// 負荷の数字は bodyweightStandards.ts が単一ソース。記事側では id で引くだけ。
const KNEE = pushupLoad("knee");
const INCLINE = pushupLoad("incline");
const STANDARD = pushupLoad("standard");
const DECLINE = pushupLoad("decline");
const STANDARD_KG = loadWeight(EXAMPLE_WEIGHT, STANDARD.ratio);

// 回数を測るときの条件。ここを揃えないと表と比べる意味がなくなる。
const FORM_RULES = [
  {
    name: "腕立て伏せ",
    rules: [
      "つま先立ちで、頭からかかとまで一直線",
      "胸が拳ひとつ分の高さまで下りる",
      "肘を伸ばしきって1回",
      "途中で静止せず、連続で",
    ],
  },
  {
    name: "懸垂",
    rules: [
      "順手（手の甲が自分側）で肩幅より少し広め",
      "肘を伸ばしきった状態から始める",
      "アゴがバーを越える",
      "反動をつけて蹴り上げない",
    ],
  },
];

function RepTable({ rows, unit }: { rows: RepRow[]; unit: string }) {
  return (
    <div className="overflow-x-auto -mx-2 px-2 mt-3">
      <table className="w-full text-xs border-collapse">
        <thead>
          <tr className="bg-orange-50">
            <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
              レベル
            </th>
            <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
              {unit}
            </th>
            <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700">
              その位置の意味
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.level}>
              <td className="border border-gray-200 px-2 py-2 font-bold text-gray-800 whitespace-nowrap">
                {row.level}
              </td>
              <td className="border border-gray-200 px-2 py-2 font-bold text-gray-800 whitespace-nowrap">
                {formatReps(row.reps)}
              </td>
              <td className="border border-gray-200 px-2 py-2 text-gray-600">
                {row.note}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function PushupPullupAveragePage() {
  return (
    <main className="min-h-screen flex flex-col items-center px-4 py-8">
      <div className="max-w-md w-full animate-slideUp">
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <p className="text-xs text-orange-500 font-bold mb-2">コラム</p>
          <h1 className="text-xl font-bold text-gray-800 mb-6">
            腕立て伏せ・懸垂は何回できれば普通？レベル別の回数目安一覧
          </h1>

          <div className="space-y-6 text-sm text-gray-700 leading-relaxed">
            <section>
              <p>
                「腕立て伏せは何回できれば普通なのか」「懸垂10回はすごいのか」。器具を使わないトレーニングは重量という物差しがないぶん、自分の位置が分かりにくくなります。
              </p>
              <p className="mt-2">
                先に2つ書いておきます。ひとつめ、<span className="font-bold">回数の「全国平均」と言える信頼できる統計はありません。</span>バーベル種目と同じで、ネットの数字はほとんど出典がありません。ふたつめ、<span className="font-bold">自重種目の回数はフォーム次第で倍以上変わります。</span>肘を伸ばしきらない腕立てと、胸を床すれすれまで下ろす腕立てでは、同じ「1回」がまったく違う運動です。
              </p>
              <p className="mt-2">
                なので、この記事では先に<span className="font-bold">条件を固定</span>します。そのうえでレベル別の回数目安と、<span className="font-bold">その1回で実際に何kgを挙げているのか</span>までを出します。
              </p>
            </section>

            <section className="bg-orange-50 border border-orange-100 rounded-xl p-4">
              <p className="font-bold text-orange-600 mb-2">数える条件</p>
              <div className="space-y-3">
                {FORM_RULES.map((item) => (
                  <div key={item.name}>
                    <p className="text-xs font-bold text-gray-800">{item.name}</p>
                    <ul className="mt-1 space-y-0.5 text-xs text-gray-600">
                      {item.rules.map((rule) => (
                        <li key={rule}>・{rule}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-500 mt-3">
                この条件で数えると、多くの人は自己申告より回数が減ります。それが本当の位置です。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                腕立て伏せの回数目安（男性）
              </h2>
              <p>
                上の条件で、連続して何回できるかの目安です。
              </p>
              <RepTable rows={pushupRepRows} unit="連続でできる回数" />
              <p className="mt-3">
                覚えやすい基準は<span className="font-bold">「30回が中級者」</span>です。ただしこの表でいちばん伝えたいのは上のほうではなく、<span className="font-bold">中級者から先は回数を増やしても意味が薄くなる</span>ということ。理由は後半の「何kgを挙げているのか」で説明します。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                腕立て伏せの回数目安（女性）
              </h2>
              <p>
                女性は上半身の筋量の付き方が違うので、別の表で見ます。
              </p>
              <RepTable rows={womenPushupRepRows} unit="連続でできる回数" />
              <p className="mt-3">
                <span className="font-bold">つま先で3回できれば、もう初心者の枠です。</span>できないうちは膝つきで構いません。膝つきの負荷は標準の半分強（体重の{formatLoadPercent(KNEE)}）なので、まずは膝つきで15回できるようになってから、つま先に移るのが現実的な順番です。
              </p>
              <p className="mt-2">
                「腕が太くなるのが心配」で回数を抑えている人は
                <Link href="/column/women-muscle-slim" className="text-orange-600 font-bold underline">
                  女性が筋トレしても太くならない理由
                </Link>
                を先に読んでみてください。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                懸垂の回数目安（男女）
              </h2>
              <p>
                懸垂は腕立てと違い、<span className="font-bold">0回から始まる種目</span>です。表の一番上に「0回」を置いているのは、そこが多数派だからです。
              </p>
              <RepTable rows={pullupRepRows} unit="連続でできる回数" />
              <p className="mt-3 font-bold text-gray-800">女性の場合</p>
              <RepTable rows={womenPullupRepRows} unit="連続でできる回数" />
              <p className="mt-3">
                男性の中級者が10回、女性の上級者が8回。<span className="font-bold">懸垂はBIG3のベンチプレスほど男女差が開かない種目</span>です。背中と腕で引く動作は、女性でも出力が出ます。
              </p>
              <p className="mt-2">
                1回もできない人へ。これは筋力の問題であると同時に、<span className="font-bold">体重をそのまま持ち上げる種目だから</span>です。次で数字にします。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                その1回で、実は何kgを挙げているのか
              </h2>
              <p>
                自重種目の弱点は負荷が見えないことですが、<span className="font-bold">腕立て伏せは手にかかる荷重が計測されています</span>。体重{EXAMPLE_WEIGHT}kgの人で換算するとこうなります。
              </p>
              <div className="overflow-x-auto -mx-2 px-2 mt-3">
                <table className="w-full text-xs border-collapse">
                  <thead>
                    <tr className="bg-orange-50">
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
                        種目
                      </th>
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
                        体重に対する負荷
                      </th>
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
                        体重{EXAMPLE_WEIGHT}kgなら
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {pushupLoadRows.map((row, idx) => (
                      <tr key={row.name} className={idx % 2 === 1 ? "bg-gray-50" : undefined}>
                        <td className="border border-gray-200 px-2 py-2 font-bold text-gray-700 whitespace-nowrap">
                          {row.name}
                          {row.detail && (
                            <>
                              <br />（{row.detail}）
                            </>
                          )}
                        </td>
                        <td className="border border-gray-200 px-2 py-2">
                          {formatLoadPercent(row)}
                        </td>
                        <td className="border border-gray-200 px-2 py-2">
                          {formatLoadWeight(row, EXAMPLE_WEIGHT)}
                        </td>
                      </tr>
                    ))}
                    <tr className="bg-orange-50">
                      <td className="border border-gray-200 px-2 py-2 font-bold text-gray-700 whitespace-nowrap">
                        {pullupLoadRow.name}
                      </td>
                      <td className="border border-gray-200 px-2 py-2 font-bold">
                        {formatLoadPercent(pullupLoadRow)}
                      </td>
                      <td className="border border-gray-200 px-2 py-2 font-bold">
                        {formatLoadWeight(pullupLoadRow, EXAMPLE_WEIGHT)}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-3 text-xs text-gray-500">
                ※ 台の高さや手幅で変わるので目安です。腕立ての詳しい種類別の解説は
                <Link href="/column/chest-home" className="text-orange-600 font-bold underline">
                  自宅でできる胸トレ
                </Link>
                にあります。
              </p>
              <p className="mt-3">
                ここが、この記事でいちばん見てほしいところです。体重{EXAMPLE_WEIGHT}kgの人にとって、
              </p>
              <ul className="mt-2 space-y-1">
                <li>
                  ▸ <span className="font-bold">標準の腕立て伏せ＝約{STANDARD_KG}kgのベンチプレス</span>に近い負荷
                </li>
                <li>
                  ▸ <span className="font-bold">懸垂1回＝{EXAMPLE_WEIGHT}kgを引き上げている</span>
                </li>
              </ul>
              <p className="mt-3">
                懸垂が1回もできないのは当たり前なんです。<span className="font-bold">いきなり{EXAMPLE_WEIGHT}kgのラットプルダウンをやれと言われている</span>のと同じなので。腕立てから始めた人が懸垂で挫折するのは、筋力が足りないというより、<span className="font-bold">負荷が一気に1.5倍以上に跳ね上がる</span>からです。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                回数を増やしても、負荷は1gも増えない
              </h2>
              <p>
                自重種目の一番の落とし穴がこれです。<span className="font-bold">腕立てが20回から40回に伸びても、かかる重さは約{STANDARD_KG}kgのまま</span>。筋肉を大きくする刺激としては、同じところで足踏みしています。
              </p>
              <p className="mt-2">
                筋肉が増えるのは負荷が上がったときです。回数が増えたのは、その重さに慣れた（＝持久力がついた）ということで、別の能力が伸びています。どちらも価値はありますが、<span className="font-bold">目的が筋肥大なら、回数ではなく負荷を上げる</span>ほうへ進んでください。
              </p>
              <p className="mt-2">
                進め方の順番はこうなります。
              </p>
              <div className="space-y-2 mt-3">
                <div className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">▸</span>
                  <p>
                    <span className="font-bold">腕立て</span>：膝つき（{formatLoadPercent(KNEE)}）→ インクライン（{formatLoadPercent(INCLINE)}）→ 標準（{formatLoadPercent(STANDARD)}）→ デクライン（{formatLoadPercent(DECLINE)}）。<span className="font-bold">20回を超えたら次の段へ</span>。
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">▸</span>
                  <p>
                    <span className="font-bold">懸垂</span>：斜め懸垂 → ジャンプして下ろすだけ（ネガティブ）→ 通常の懸垂 → 加重。<span className="font-bold">1回もできない段階を飛ばさない</span>のがコツです。
                  </p>
                </div>
              </div>
              <p className="mt-3">
                そして自重には上限があります。体重{EXAMPLE_WEIGHT}kgの人がデクラインまで進んでも負荷は{formatLoadWeight(DECLINE, EXAMPLE_WEIGHT)}どまり。
                {benchMiddle && (
                  <>
                    ベンチプレスで中級者と呼ばれるのは体重×{formatRatio(benchMiddle.ratio)}＝
                    <span className="font-bold">
                      {Math.round(EXAMPLE_WEIGHT * benchMiddle.ratio)}kg
                    </span>
                    なので、
                  </>
                )}
                <span className="font-bold">腕立てだけで届く範囲には限りがある</span>ということになります。器具を足すタイミングは、ここで決まります。最初に買うダンベルの重さは
                <Link href="/column/dumbbell-weight" className="text-orange-600 font-bold underline">
                  ダンベルは何kgを買えばいい？
                </Link>
                に種目別で出しました。
              </p>
              <p className="mt-2">
                重量で見た自分の位置は
                <Link href="/column/strength-standards" className="text-orange-600 font-bold underline">
                  BIG3の重量目安一覧
                </Link>
                や
                <Link href="/column/bench-press-average" className="text-orange-600 font-bold underline">
                  ベンチプレスの平均
                </Link>
                で確認できます。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                体重が変わると、懸垂の回数も変わる
              </h2>
              <p>
                懸垂の負荷は体重そのものなので、<span className="font-bold">体重が5kg減れば、負荷も5kg軽くなります</span>。減量中に懸垂の回数が増えるのは、背中が強くなったからとは限りません。
              </p>
              <p className="mt-2">
                逆も同じです。増量して体重が増えると懸垂の回数は落ちます。これは<span className="font-bold">弱くなったのではなく、種目のほうが重くなった</span>だけです。体重が動いている時期は、懸垂の回数を「強さの指標」にしないほうがいいということになります。
              </p>
              <p className="mt-2">
                体重で評価が変わるのはバーベル種目も同じで、だからBIG3の目安も体重比で作られています。この考え方を全種目に広げると、自分の現在地を見誤らなくなります。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                高回数は「1RM換算」しないでください
              </h2>
              <p>
                挙げた重量と回数から最大筋力を推定する
                <Link href="/rm-calculator" className="text-orange-600 font-bold underline">
                  1RM換算
                </Link>
                という計算がありますが、<span className="font-bold">腕立て30回のような高回数には使えません</span>。
              </p>
              <p className="mt-2">
                換算式（1RM ＝ 重量 ×（1 + 回数 ÷ 30））は回数が増えるほど誤差が大きくなり、実務的には<span className="font-bold">6回以下</span>で使うものだからです。30回を入れると重量が2倍という非現実的な答えが出ます。<span className="font-bold">高回数は筋持久力の指標で、最大筋力とは別の能力</span>——そう割り切って、別々に記録してください。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                よくある質問
              </h2>
              <h3 className="font-bold text-gray-800 mt-5 mb-2">
                腕立て30回できればすごいですか？
              </h3>
              <p>
                条件を守って連続30回なら中級者の水準です。ただし「すごい」かどうかより、<span className="font-bold">30回できる時点で負荷が軽すぎる</span>ほうが重要です。デクラインに移るか、器具を足す段階に来ています。
              </p>
              <h3 className="font-bold text-gray-800 mt-5 mb-2">
                腕立ては毎日やっていいですか？
              </h3>
              <p>
                回数が少ないうち（10回程度）なら毎日でも回復が追いつきます。ただし限界まで追い込むようになったら、中1〜2日あけたほうが伸びます。
                <Link href="/column/rest" className="text-orange-600 font-bold underline">
                  休息の重要性
                </Link>
                に詳しく書きました。
              </p>
              <h3 className="font-bold text-gray-800 mt-5 mb-2">
                懸垂が1回もできません。何から始めればいいですか？
              </h3>
              <p>
                斜め懸垂（足を床につけたまま、低いバーを引く）からです。角度を立てるほど軽くなるので、10回できる角度から始めてください。次はジャンプで上がって、下りるときだけゆっくり耐える（ネガティブ）練習。この順番なら、ぶら下がれる場所さえあれば進めます。
              </p>
              <h3 className="font-bold text-gray-800 mt-5 mb-2">
                腕立てだけで胸は大きくなりますか？
              </h3>
              <p>
                ある程度までは大きくなります。ただし前述のとおり負荷の上限が体重で決まるので、<span className="font-bold">どこかで必ず止まります</span>。止まった時点で回数を増やしても、そこから先はあまり変わりません。
              </p>
              <h3 className="font-bold text-gray-800 mt-5 mb-2">
                効果が出るまでどれくらいかかりますか？
              </h3>
              <p>
                最初の1ヶ月で伸びるのは回数（＝神経の慣れ）で、見た目が動き出すのは3ヶ月目からです。詳しくは
                <Link href="/column/effect-timeline" className="text-orange-600 font-bold underline">
                  筋トレの効果はいつから出る？
                </Link>
                にまとめています。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                まとめ
              </h2>
              <ul className="space-y-2">
                <li>
                  ▸ 出典のある「平均回数」は存在しない。<span className="font-bold">フォームの条件を揃えて</span>から表と比べる。
                </li>
                <li>
                  ▸ 目安は腕立て<span className="font-bold">30回で中級者</span>、懸垂<span className="font-bold">10回で中級者</span>。懸垂は0回から始まる種目で、それが多数派。
                </li>
                <li>
                  ▸ 体重{EXAMPLE_WEIGHT}kgなら腕立ては約{STANDARD_KG}kg、<span className="font-bold">懸垂は{EXAMPLE_WEIGHT}kg</span>を挙げている。懸垂ができないのは当たり前。
                </li>
                <li>
                  ▸ <span className="font-bold">回数が増えても負荷は増えない。</span>20回を超えたら、次の段（インクライン→標準→デクライン→加重）へ。
                </li>
                <li>
                  ▸ 高回数は筋持久力。<span className="font-bold">1RMに換算しない。</span>最大筋力とは別に記録する。
                </li>
              </ul>
              <p className="mt-2">
                背中を鍛える意味は
                <Link href="/column/back-benefits" className="text-orange-600 font-bold underline">
                  背中を鍛えるべき3つの理由
                </Link>
                に、自宅での胸トレの進め方は
                <Link href="/column/chest-home" className="text-orange-600 font-bold underline">
                  自宅でできる胸トレ完全ガイド
                </Link>
                にあります。
              </p>
            </section>
          </div>

          <Link
            href="/questions"
            className="block bg-orange-500 hover:bg-orange-600 rounded-xl p-4 mt-6 transition-colors"
          >
            <p className="font-bold text-white text-sm">
              🏠 自宅（自重のみ）のメニューを作る
            </p>
            <p className="text-xs text-orange-50 mt-0.5">
              器具なしを選べば、今日の分を自重種目だけで組みます →
            </p>
          </Link>
        </div>

        <ShareButtons
          url="https://sakutore.jp/column/pushup-pullup-average"
          title="腕立て伏せ・懸垂は何回できれば普通？レベル別の回数目安一覧"
        />
        <Link
          href="/gear"
          className="block bg-orange-50 hover:bg-orange-100 rounded-2xl p-4 mb-6 border-2 border-orange-200 transition-colors"
        >
          <div className="flex items-center gap-3">
            <span className="text-2xl flex-shrink-0">🏋️</span>
            <div>
              <p className="font-bold text-orange-600 text-sm">運営者厳選のおすすめギア</p>
              <p className="text-xs text-gray-500 mt-0.5">自重の次に足すプロテイン・グリップを見る →</p>
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
