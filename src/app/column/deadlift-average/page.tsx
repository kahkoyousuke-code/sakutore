import Link from "next/link";
import ShareButtons from "@/components/ShareButtons";
import { pageMetadata } from "@/lib/metadata";
import AuthorBox from "@/components/AuthorBox";
import GearPick from "@/components/GearPick";
import {
  LEVEL_EXPERIENCE,
  LEVEL_STEP_PERIOD,
  MEN_WEIGHTS,
  WOMEN_WEIGHTS,
  benchRows,
  deadliftRows,
  formatRatio,
  squatRows,
  womenDeadliftRows,
  type Row,
} from "@/lib/strengthStandards";

export const metadata = pageMetadata({
  title: "デッドリフトの平均は何kg？体重別・トレ歴別・男女別の目安一覧 - サクトレ",
  description:
    "デッドリフトの平均重量を体重50〜100kg別・レベル別の一覧表で解説。スモウ・トラップバー・ラックプルで数字が変わる問題、プレートの直径で可動域が変わる話、男女差、回数から1RMを出す換算表つき。筋トレ歴15年・フィジーク大会入賞の筆者の実重量160kgも公開します。",
  path: "/column/deadlift-average",
});

// Epley: 1RM = weight x (1 + reps / 30). Same formula as /rm-calculator and
// the other two BIG3 articles, including the 1-rep special case.
// The weight band is the heaviest of the three: deadlift numbers start where
// the squat table ends.
const FLOOR_WEIGHTS = [80, 100, 120, 140, 160, 180];
const REP_COUNTS = [1, 3, 5, 8, 10, 12];
const oneRm = (weight: number, reps: number) =>
  Math.round(weight * (reps === 1 ? 1 : 1 + reps / 30));

// Body weight used by the experience table and the prose around it.
const EXAMPLE_WEIGHT = 70;

// Why "deadlift 100kg" cannot be compared across people: the same word covers
// several movements. No correction factors are quoted - there is no source for
// them, and the point is only "match the standard before comparing".
const VARIANTS = [
  {
    name: "コンベンショナル",
    form: "床から。足は腰幅、手は足の外側",
    compare: "◎",
    note: "この記事の表の基準",
  },
  {
    name: "スモウ",
    form: "足を大きく開き、手は足の内側",
    compare: "△",
    note: "引く距離が短いぶん数字が上ぶれする",
  },
  {
    name: "トラップバー（ヘックスバー）",
    form: "六角形のバーの中に立って引く",
    compare: "△",
    note: "重心が体の真下に来るぶん有利",
  },
  {
    name: "ラックプル・ハーフデッド",
    form: "膝上など、床より高い位置から引く",
    compare: "×",
    note: "一番きつい範囲を飛ばしている",
  },
  {
    name: "スミスマシン",
    form: "バーの軌道が固定される",
    compare: "△",
    note: "バランスを取らずに済むぶん上ぶれする",
  },
  {
    name: "バックエクステンション等",
    form: "マシンで背中を反らせる",
    compare: "×",
    note: "別種目。持ち込まない",
  },
];

// The same level name means a different number in each lift. This is the
// clearest answer to "is 100kg good?" - it depends on the lift, not the mood.
const MIDDLE_LINE = [
  { name: "ベンチプレス", rows: benchRows },
  { name: "スクワット", rows: squatRows },
  { name: "デッドリフト", rows: deadliftRows },
];
const middleRatio = (rows: Row[]) =>
  rows.find((row) => row.level === "中級者")?.ratio ?? 0;

/**
 * Body weight as rows, level as columns.
 * /column/strength-standards prints the same numbers the other way round
 * (level as rows), so the two pages answer two different questions:
 * "what does my level require" there, "where do I sit at my weight" here.
 */
function DeadliftByWeightTable({
  rows,
  weights,
}: {
  rows: Row[];
  weights: number[];
}) {
  return (
    <div className="overflow-x-auto -mx-2 px-2 mt-3">
      <table className="w-full text-xs border-collapse">
        <thead>
          <tr className="bg-orange-50">
            <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
              体重
            </th>
            {rows.map((row) => (
              <th
                key={row.level}
                className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap"
              >
                {row.level}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr className="bg-gray-50">
            <td className="border border-gray-200 px-2 py-2 text-gray-500 whitespace-nowrap">
              体重比
            </td>
            {rows.map((row) => (
              <td
                key={row.level}
                className="border border-gray-200 px-2 py-2 text-gray-500 whitespace-nowrap"
              >
                ×{formatRatio(row.ratio)}
              </td>
            ))}
          </tr>
          {weights.map((w) => (
            <tr key={w}>
              <td className="border border-gray-200 px-2 py-2 font-bold text-gray-800 whitespace-nowrap">
                {w}kg
              </td>
              {rows.map((row) => (
                <td
                  key={row.level}
                  className="border border-gray-200 px-2 py-2 text-gray-700 whitespace-nowrap"
                >
                  {Math.round(w * row.ratio)}kg
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function LevelLegend({ rows }: { rows: Row[] }) {
  return (
    <ul className="mt-3 space-y-1 text-xs text-gray-500">
      {rows.map((row) => (
        <li key={row.level}>
          <span className="font-bold text-gray-700">
            {row.level}（体重×{formatRatio(row.ratio)}）
          </span>
          ：{row.note}
        </li>
      ))}
    </ul>
  );
}

export default function DeadliftAveragePage() {
  return (
    <main className="min-h-screen flex flex-col items-center px-4 py-8">
      <div className="max-w-md w-full animate-slideUp">
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <p className="text-xs text-orange-500 font-bold mb-2">コラム</p>
          <h1 className="text-xl font-bold text-gray-800 mb-6">
            デッドリフトの平均は何kg？体重別・トレ歴別の目安一覧
          </h1>

          <div className="space-y-6 text-sm text-gray-700 leading-relaxed">
            <section>
              <p>
                デッドリフトはBIG3の中で<span className="font-bold">一番大きな数字が出る種目</span>です。ジムで「100kg引けた」と聞くと、ベンチプレスの100kgと同じ感覚で受け取ってしまいますが、この2つはまったく別の水準の話です。
              </p>
              <p className="mt-2">
                先に結論を書きます。<span className="font-bold">デッドリフトに「全国平均◯kg」と言える信頼できる統計はありません。</span>ベンチプレスと同じで、ネットの数字はほとんどが出典のない引用の連鎖です。代わりに世界共通で使われているのが<span className="font-bold">体重比</span>で、デッドリフトの中級者ラインは<span className="font-bold">体重の2.0倍</span>。体重70kgなら140kgです。
              </p>
              <p className="mt-2">
                ただしデッドリフトには、比べる前に揃えないといけない条件が他の2種目より多くあります。そこから先に片づけます。
              </p>
            </section>

            <section className="bg-orange-50 border border-orange-100 rounded-xl p-4">
              <p className="font-bold text-orange-600 mb-1">先に知っておくこと</p>
              <p className="text-xs">
                以下の表はすべて<span className="font-bold">1RM（1回だけ引ける最大重量）</span>です。「10回引ける重量」とは別物なので、比べる前に換算してください。デッドリフトで1回の限界に挑戦するのは腰のリスクが大きいので、
                <Link href="/rm-calculator" className="text-orange-600 font-bold underline">
                  RM計算機
                </Link>
                か、この記事の<span className="font-bold">換算表</span>で推定するほうが安全です。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                その数字、どのデッドリフトですか？
              </h2>
              <p>
                「デッドリフト」という1語がいくつもの動作を指しています。引く距離が変われば数字も変わるので、比べる前に自分がどれをやっているか確認してください。
              </p>
              <div className="overflow-x-auto -mx-2 px-2 mt-3">
                <table className="w-full text-xs border-collapse">
                  <thead>
                    <tr className="bg-orange-50">
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
                        種類
                      </th>
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700">
                        引き方
                      </th>
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
                        表と比較
                      </th>
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700">
                        補足
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {VARIANTS.map((v) => (
                      <tr key={v.name}>
                        <td className="border border-gray-200 px-2 py-2 font-bold text-gray-800 whitespace-nowrap">
                          {v.name}
                        </td>
                        <td className="border border-gray-200 px-2 py-2 text-gray-700">
                          {v.form}
                        </td>
                        <td className="border border-gray-200 px-2 py-2 text-center font-bold text-gray-800">
                          {v.compare}
                        </td>
                        <td className="border border-gray-200 px-2 py-2 text-gray-600">
                          {v.note}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-3 text-xs text-gray-500">
                ※ 補正して比べる方法はあえて書きません。根拠のある換算係数が存在しないからです。「基準を揃えて測り直す」ほうが確実です。
              </p>

              <h3 className="font-bold text-gray-800 mt-5 mb-2">
                プレートが小さいと、同じ重量でもきつくなる
              </h3>
              <p>
                意外と知られていない条件がもう1つあります。<span className="font-bold">バーの高さはプレートの直径で決まる</span>ということです。
              </p>
              <p className="mt-2">
                ジムの20kgプレートは直径45cmが標準で、これを付けたときのバーの高さが「床から引く」の基準になっています。ところが軽いプレートは直径も小さいので、たとえば10kgプレート2枚（＝合計40kg）で引くと、<span className="font-bold">バーが数cm低い位置から始まります</span>。引く距離が伸びるぶん、同じ重量でもきつくなる。
              </p>
              <p className="mt-2">
                つまり<span className="font-bold">始めたばかりの軽い重量のほうが、実は不利な条件で引いている</span>ことになります。「軽いのに全然上がらない」と感じるのは気のせいではありません。ジムに大きい直径の軽量プレート（いわゆるバンパープレート）があるなら、そちらを使ってください。
              </p>

              <h3 className="font-bold text-gray-800 mt-5 mb-2">
                ストラップを使った数字は、ズルではない
              </h3>
              <p>
                デッドリフトは<span className="font-bold">背中や脚より先に握力が限界になる</span>種目です。そのため、パワーグリップやストラップを使うと数字が伸びます。
              </p>
              <p className="mt-2">
                競技の基準では補助具なしですが、自分の現在地を測るだけなら<span className="font-bold">どちらでも構いません</span>。大事なのは毎回同じ条件で測ることです。握力が理由で伸びが止まっているなら、それは背中を鍛え損ねているのと同じなので、道具を使ったほうが筋肉は育ちます。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                体重別・デッドリフトの目安一覧（男性）
              </h2>
              <p>
                自分の体重の行を見てください。コンベンショナル（床から）での1RMが基準です。
              </p>
              <DeadliftByWeightTable rows={deadliftRows} weights={MEN_WEIGHTS} />
              <LevelLegend rows={deadliftRows} />
              <p className="mt-3">
                覚えやすい基準は<span className="font-bold">「体重の2倍が中級者」</span>です。体重70kgなら140kg。ベンチプレスの「体重と同じ重さ」と比べると倍の数字ですが、<span className="font-bold">デッドリフトはそういう種目</span>だというだけで、難易度が2倍なわけではありません。
              </p>
              <p className="mt-2">
                もうひとつ、デッドリフトには他の2種目にない特徴があります。<span className="font-bold">BIG3で最も伸びが速い</span>ことです。背中・お尻・脚・体幹を一度に使い、可動域も単純なので、始めて半年ほどで体重の1.5倍に届く人は珍しくありません。数字の伸びを実感しやすいのはこの種目です。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                同じ「中級者」でも、種目で数字はこれだけ違う
              </h2>
              <p>
                「100kg引けたらすごいのか」という問いに一発で答えるための表です。体重{EXAMPLE_WEIGHT}kgの人が各種目で<span className="font-bold">中級者</span>と呼ばれるラインを並べました。
              </p>
              <div className="overflow-x-auto -mx-2 px-2 mt-3">
                <table className="w-full text-xs border-collapse">
                  <thead>
                    <tr className="bg-orange-50">
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
                        種目
                      </th>
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
                        中級者の体重比
                      </th>
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
                        体重{EXAMPLE_WEIGHT}kgなら
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {MIDDLE_LINE.map((lift) => (
                      <tr key={lift.name}>
                        <td className="border border-gray-200 px-2 py-2 font-bold text-gray-800 whitespace-nowrap">
                          {lift.name}
                        </td>
                        <td className="border border-gray-200 px-2 py-2 text-gray-700 whitespace-nowrap">
                          ×{formatRatio(middleRatio(lift.rows))}
                        </td>
                        <td className="border border-gray-200 px-2 py-2 font-bold text-gray-800 whitespace-nowrap">
                          {Math.round(EXAMPLE_WEIGHT * middleRatio(lift.rows))}kg
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-3">
                体重{EXAMPLE_WEIGHT}kgの人の100kgは、<span className="font-bold">ベンチプレスなら上級者（87.5kg）を超え、デッドリフトなら初心者（105kg）にも届きません</span>。同じ100kgでここまで評価が変わります。種目をまたいで「◯kgはすごい／すごくない」と語れない理由が、この表に全部出ています。
              </p>
              <p className="mt-2">
                3種目まとめた早見表と合計（トータル）の目安は
                <Link href="/column/strength-standards" className="text-orange-600 font-bold underline">
                  BIG3の重量目安一覧
                </Link>
                に、種目ごとの詳細は
                <Link href="/column/bench-press-average" className="text-orange-600 font-bold underline">
                  ベンチプレスの平均
                </Link>
                と
                <Link href="/column/squat-average" className="text-orange-600 font-bold underline">
                  スクワットの平均
                </Link>
                にあります。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                トレーニング歴別に見た場合の目安
              </h2>
              <p>
                「何年やったら何kg」を知りたい人向けに、体重{EXAMPLE_WEIGHT}kgを例にして期間の目安を並べます。
              </p>
              <div className="overflow-x-auto -mx-2 px-2 mt-3">
                <table className="w-full text-xs border-collapse">
                  <thead>
                    <tr className="bg-orange-50">
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
                        レベル
                      </th>
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
                        トレ歴の目安
                      </th>
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
                        体重{EXAMPLE_WEIGHT}kgなら
                      </th>
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
                        次のレベルまで
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {deadliftRows.map((row) => (
                      <tr key={row.level}>
                        <td className="border border-gray-200 px-2 py-2 font-bold text-gray-800 whitespace-nowrap">
                          {row.level}
                        </td>
                        <td className="border border-gray-200 px-2 py-2 text-gray-700 whitespace-nowrap">
                          {LEVEL_EXPERIENCE[row.level]}
                        </td>
                        <td className="border border-gray-200 px-2 py-2 text-gray-700 font-bold whitespace-nowrap">
                          {Math.round(EXAMPLE_WEIGHT * row.ratio)}kg
                        </td>
                        <td className="border border-gray-200 px-2 py-2 text-gray-500 whitespace-nowrap">
                          {LEVEL_STEP_PERIOD[row.level] ?? "—"}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-3">
                1レベル上がるのに必要な重量は、体重{EXAMPLE_WEIGHT}kgなら毎回<span className="font-bold">+35kg</span>（体重×0.5）で一定です。それなのに、かかる期間だけが半年〜1年 → 1〜2年 → 3〜5年と伸びていきます。<span className="font-bold">同じ距離を進むのに時間がかかるようになるだけで、あなたのペースが落ちたわけではありません。</span>
              </p>
              <p className="mt-2">
                ただしデッドリフトは、最初の1段目（未経験→初心者）だけが例外的に速いです。ここを数ヶ月で通過できたからといって、次も同じペースで行けるとは思わないほうが、あとで心が折れません。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                女性のデッドリフトの目安
              </h2>
              <p>
                女性の場合は別の表で見ます。デッドリフトは、<span className="font-bold">女性が最初に「自分の体重を超える重量」を扱えるようになる種目</span>です。初心者の目安が体重×1.0なので、体重50kgなら50kg。バー（20kg）に左右15kgずつ足せば届きます。
              </p>
              <DeadliftByWeightTable rows={womenDeadliftRows} weights={WOMEN_WEIGHTS} />
              <LevelLegend rows={womenDeadliftRows} />
              <p className="mt-3">
                同じレベル名で比べると、女性の体重比は男性の<span className="font-bold">約65%</span>です（中級者：男性×2.0に対し女性×1.3）。ベンチプレスの約60%よりは差が小さく、スクワットの約73%ほどではない——<span className="font-bold">ちょうど3種目の中間</span>です。それでも<span className="font-bold">女性の上級者（×1.8）は男性の中級者（×2.0）に迫る水準</span>で、お尻と背中は女性でもしっかり出力が出る場所だと分かります。
              </p>
              <p className="mt-2">
                「重いものを持つと脚が太くなる」という心配については
                <Link href="/column/women-muscle-slim" className="text-orange-600 font-bold underline">
                  女性が筋トレしても太くならない理由
                </Link>
                に書きました。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                今の重量から1RMを出す換算表
              </h2>
              <p>
                ここまでの表と比べるには、自分の1RMが必要です。縦が今扱っている重量、横が引ける回数です。
              </p>
              <div className="overflow-x-auto -mx-2 px-2 mt-3">
                <table className="w-full text-xs border-collapse">
                  <thead>
                    <tr className="bg-orange-50">
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
                        重量＼回数
                      </th>
                      {REP_COUNTS.map((reps) => (
                        <th
                          key={reps}
                          className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap"
                        >
                          {reps}回
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {FLOOR_WEIGHTS.map((w) => (
                      <tr key={w}>
                        <td className="border border-gray-200 px-2 py-2 font-bold text-gray-800 whitespace-nowrap">
                          {w}kg
                        </td>
                        {REP_COUNTS.map((reps) => (
                          <td
                            key={reps}
                            className="border border-gray-200 px-2 py-2 text-gray-700 whitespace-nowrap"
                          >
                            {oneRm(w, reps)}kg
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-3 text-xs text-gray-500">
                ※ 計算式は 1RM ＝ 重量 ×（1 + 回数 ÷ 30）。デッドリフトは高回数だと握力とフォームが先に落ちるので、<span className="font-bold">5回以下</span>で計算したほうが実態に合います。
              </p>
              <p className="mt-3">
                たとえば<span className="font-bold">100kgを5回</span>引けるなら1RMは約117kg。体重70kgの人なら体重比×1.67で、<span className="font-bold">初心者（×1.5）を超えて中級者（×2.0）に向かっている</span>位置です。「まだ100kgしか引けない」ではなく、目安表の真ん中あたりにいます。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                筆者の場合：BIG3で唯一、目安どおりだったのがデッドリフト
              </h2>
              <p>
                参考までに、筆者自身（筋トレ歴15年・フィジーク大会入賞）の数字を出しておきます。デッドリフトの自己ベストは<span className="font-bold">160kg</span>。体重80kg台の頃の数字なので、体重比は約1.9倍です。表で言えば<span className="font-bold">中級者（×2.0）の一歩手前</span>。
              </p>
              <p className="mt-2">
                面白いのは、BIG3の中で<span className="font-bold">この種目だけが目安表どおりの位置にいる</span>ことです。ベンチプレスは120kg（体重比×1.4）で上級者（×1.25）を超えているのに、スクワットは同じ120kg（×1.4）で中級者（×1.5）に届いていない。デッドリフトだけが真ん中に収まっています。
              </p>
              <p className="mt-2">
                理由は正直なところ<span className="font-bold">「特別なことをしなかったから」</span>だと思っています。フィジークは上半身の見た目で評価される競技なので、私はベンチプレスを重点的に伸ばし、下半身の最大重量は追いませんでした。それでもデッドリフトが平均的な位置まで来たのは、この種目が<span className="font-bold">背中を鍛えていれば勝手に伸びる</span>性質を持っているからです。
              </p>
              <p className="mt-2">
                3種目を足すとBIG3合計は400kg。合計だけ見れば中級者を超えますが、内訳はかなり歪んでいます。<span className="font-bold">合計は内訳を隠します</span>。その話は
                <Link href="/column/strength-standards" className="text-orange-600 font-bold underline">
                  BIG3の重量目安一覧
                </Link>
                に詳しく書きました。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                デッドリフトを伸ばす前に、腰を壊さないための優先順位
              </h2>
              <p>
                デッドリフトは<span className="font-bold">伸びが速いぶん、フォームが置いていかれやすい</span>種目です。ケガの報告が最も多いのもこの種目なので、順番を間違えないでください。
              </p>
              <div className="space-y-2 mt-3">
                <div className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">1</span>
                  <p>
                    <span className="font-bold">背中が丸まる重量には手を出さない。</span>これだけは例外なしです。丸まったまま引けてしまうのがこの種目の怖いところで、引けたという事実は安全の証明になりません。動画を撮って自分で確認するのが一番早いです。
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">2</span>
                  <p>
                    <span className="font-bold">股関節から折る動き（ヒップヒンジ）を先に覚える。</span>膝を曲げてしゃがむのではなく、お尻を後ろに引く動きです。ここができていないと、脚ではなく腰で引くことになります。
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">3</span>
                  <p>
                    <span className="font-bold">頻度は週1回で十分。</span>全身を使うぶん回復に時間がかかります。週2回入れるなら、片方は軽い日にしてください。
                    <Link href="/column/split-routine" className="text-orange-600 font-bold underline">
                      分割法の早見表
                    </Link>
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">4</span>
                  <p>
                    <span className="font-bold">握力が理由で止まったら道具を使う。</span>パワーグリップやストラップは甘えではなく、背中に効かせるための道具です。
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">5</span>
                  <p>
                    <span className="font-bold">体重の1.5倍を超えたらベルトを検討する。</span>腹圧を保ちやすくなり、腰の負担が減ります。
                  </p>
                </div>
              </div>
              <GearPick
                placement="deadlift-average-grip-belt"
                lead="筆者が使っているのはALLOUTのパワーグリップとベルトです。先に握力で止まる人はグリップから揃えてください。"
                productIds={["alloutPowerGrip", "alloutNylonBelt"]}
              />
              <p className="mt-3">
                背中を鍛える意味そのものについては
                <Link href="/column/back-benefits" className="text-orange-600 font-bold underline">
                  背中を鍛えるべき3つの理由
                </Link>
                に書いています。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                よくある質問
              </h2>
              <h3 className="font-bold text-gray-800 mt-5 mb-2">
                デッドリフト100kgはすごいですか？
              </h3>
              <p>
                体重によります。体重50kgなら×2.0で中級者、体重70kgなら×1.43で初心者（×1.5）の一歩手前です。<span className="font-bold">同じ100kgでも評価は変わります。</span>ただしこれは1RMでの話なので、「100kgを5回」なら1RMは約117kgとして読んでください。
              </p>
              <h3 className="font-bold text-gray-800 mt-5 mb-2">
                スモウとコンベンショナル、どちらで測ればいいですか？
              </h3>
              <p>
                この記事の表と比べるならコンベンショナルです。スモウは引く距離が短いぶん数字が上ぶれしやすいので、<span className="font-bold">同じ表で比べると自分を高く見積もることになります</span>。普段スモウで引いている人は、それはそれで構いません。毎回同じ条件で記録していれば、伸びているかどうかは分かります。
              </p>
              <h3 className="font-bold text-gray-800 mt-5 mb-2">
                翌日に腰が張るのは普通ですか？
              </h3>
              <p>
                背中やお尻、もも裏の筋肉痛なら正常です。ただし<span className="font-bold">腰の一点が刺すように痛む・しびれる</span>場合は筋肉痛ではありません。重量を落とすのではなく、いったん止めてください。デッドリフトは「痛いけど引ける」が成立してしまう種目なので、自己判断で続けるのが一番危険です。
              </p>
              <h3 className="font-bold text-gray-800 mt-5 mb-2">
                自宅（ダンベル）でもデッドリフトはできますか？
              </h3>
              <p>
                できます。ダンベルを両手に持つルーマニアンデッドリフトなら、もも裏とお尻に十分効きます。ただし扱える重量が変わるので、<span className="font-bold">この記事の表とは比べないでください</span>。
              </p>
              <h3 className="font-bold text-gray-800 mt-5 mb-2">
                自分のレベルをまとめて知りたい
              </h3>
              <p>
                体重とレベルを選ぶだけでBIG3の目標重量が出る
                <Link href="/weight-checker" className="text-orange-600 font-bold underline">
                  筋トレレベル診断
                </Link>
                を用意しています。3種目を足した「BIG3合計」で見たい人は
                <Link href="/column/big3-total" className="text-orange-600 font-bold underline">
                  BIG3合計◯kgはどのレベル？
                </Link>
                へどうぞ。合計に占める割合はデッドリフトが最も大きいので、合計を伸ばしたいならこの種目が主役になります。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                まとめ
              </h2>
              <ul className="space-y-2">
                <li>
                  ▸ 出典のある「全国平均」は存在しない。比べるなら<span className="font-bold">体重比</span>で見る。
                </li>
                <li>
                  ▸ 男性は<span className="font-bold">体重×2.0が中級者</span>。女性はその約65%（中級者×1.3）で、BIG3で最も男女差が小さい。
                </li>
                <li>
                  ▸ 比べる前に<span className="font-bold">条件を揃える</span>。スモウ・トラップバー・ラックプル、そしてプレートの直径でも数字は変わる。
                </li>
                <li>
                  ▸ BIG3で最も伸びが速い種目。<span className="font-bold">最初の1段目が速いだけ</span>で、そのあとは他の種目と同じように時間がかかる。
                </li>
                <li>
                  ▸ 背中が丸まる重量には手を出さない。<span className="font-bold">引けたことは安全の証明にならない。</span>
                </li>
              </ul>
              <p className="mt-2">
                まずは今の重量から1RMを換算して、自分の行を確認してみてください。次の行までの距離が数字で見えると、デッドリフトは「重さ自慢の種目」から「計画」に変わります。
              </p>
            </section>
          </div>

          <Link
            href="/weight-checker"
            className="block bg-orange-500 hover:bg-orange-600 rounded-xl p-4 mt-6 transition-colors"
          >
            <p className="font-bold text-white text-sm">
              📊 BIG3の目標重量をまとめて診断する
            </p>
            <p className="text-xs text-orange-50 mt-0.5">
              体重とレベルを選ぶだけ。次のレベルまでの差分もわかります →
            </p>
          </Link>
        </div>

        <ShareButtons
          url="https://sakutore.jp/column/deadlift-average"
          title="デッドリフトの平均は何kg？体重別・トレ歴別の目安一覧"
        />
        <Link
          href="/gear"
          className="block bg-orange-50 hover:bg-orange-100 rounded-2xl p-4 mb-6 border-2 border-orange-200 transition-colors"
        >
          <div className="flex items-center gap-3">
            <span className="text-2xl flex-shrink-0">🏋️</span>
            <div>
              <p className="font-bold text-orange-600 text-sm">運営者厳選のおすすめギア</p>
              <p className="text-xs text-gray-500 mt-0.5">デッドリフトで効くベルト・パワーグリップを見る →</p>
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
