import Link from "next/link";
import ShareButtons from "@/components/ShareButtons";
import { pageMetadata } from "@/lib/metadata";
import AuthorBox from "@/components/AuthorBox";
import {
  LEVEL_EXPERIENCE,
  LEVEL_STEP_PERIOD,
  MEN_WEIGHTS,
  WOMEN_WEIGHTS,
  formatRatio,
  squatRows,
  womenSquatRows,
  type Row,
} from "@/lib/strengthStandards";

export const metadata = pageMetadata({
  title: "スクワットの平均は何kg？体重別・トレ歴別・男女別の目安一覧 - サクトレ",
  description:
    "スクワットの平均重量を体重50〜100kg別・レベル別の一覧表で解説。深さ（フル・パラレル・ハーフ）で数字が変わる問題、男女差、回数から1RMを出す換算表つき。筋トレ歴15年・フィジーク大会入賞の筆者が、ベンチと同じ120kgで止まっている実数字も公開します。",
  path: "/column/squat-average",
});

// Epley: 1RM = weight x (1 + reps / 30). Same formula as /rm-calculator and
// /column/strength-standards, including the 1-rep special case.
// Squat uses a heavier band than the bench article: the same 40-100kg table
// would stop short of where squat numbers actually sit.
const RACK_WEIGHTS = [60, 80, 100, 120, 140, 160];
const REP_COUNTS = [1, 3, 5, 8, 10, 12];
const oneRm = (weight: number, reps: number) =>
  Math.round(weight * (reps === 1 ? 1 : 1 + reps / 30));

// Body weight used by the experience table and the prose around it.
const EXAMPLE_WEIGHT = 70;

// Depth and machine variants, and whether their numbers can be compared with
// the tables below. No correction factors are quoted: there is no source for
// them, and the point here is only "match the standard before comparing".
const VARIANTS = [
  {
    name: "フルスクワット",
    depth: "しゃがみきる（お尻がかかとに近づく）",
    compare: "◎",
    note: "基準より深いので数字は控えめに出る",
  },
  {
    name: "パラレル",
    depth: "太ももが床と平行",
    compare: "◎",
    note: "この記事の表の基準",
  },
  {
    name: "ハーフ",
    depth: "膝が90度あたりまで",
    compare: "△",
    note: "同じ実力でも数字が上ぶれする",
  },
  {
    name: "クォーター",
    depth: "軽く膝を曲げるだけ",
    compare: "×",
    note: "比べる意味がない",
  },
  {
    name: "スミスマシン",
    depth: "軌道が固定される",
    compare: "△",
    note: "バランスを取らずに済むぶん上ぶれする",
  },
  {
    name: "レッグプレス",
    depth: "座って脚で押す",
    compare: "×",
    note: "まったく別の数字。持ち込まない",
  },
];

/**
 * Body weight as rows, level as columns.
 * /column/strength-standards prints the same numbers the other way round
 * (level as rows), so the two pages answer two different questions:
 * "what does my level require" there, "where do I sit at my weight" here.
 */
function SquatByWeightTable({
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

export default function SquatAveragePage() {
  // Step to the next level, taken from the numbers printed in the column beside
  // it so the arithmetic adds up on screen. Squat steps are not uniform: only
  // 初心者 -> 中級者 is x0.25 of body weight, the rest are x0.5.
  const stepUp = (index: number) => {
    const next = squatRows[index + 1];
    if (!next) return null;
    const from = Math.round(EXAMPLE_WEIGHT * squatRows[index].ratio);
    const to = Math.round(EXAMPLE_WEIGHT * next.ratio);
    return to - from;
  };

  return (
    <main className="min-h-screen flex flex-col items-center px-4 py-8">
      <div className="max-w-md w-full animate-slideUp">
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <p className="text-xs text-orange-500 font-bold mb-2">コラム</p>
          <h1 className="text-xl font-bold text-gray-800 mb-6">
            スクワットの平均は何kg？体重別・トレ歴別の目安一覧
          </h1>

          <div className="space-y-6 text-sm text-gray-700 leading-relaxed">
            <section>
              <p>
                「スクワットの平均って何kgなんだろう」。この検索をする人が本当に知りたいのは平均値そのものではなく、<span className="font-bold">自分は上のほうなのか、下のほうなのか</span>だと思います。
              </p>
              <p className="mt-2">
                先に結論を2つ書きます。ひとつめ、<span className="font-bold">スクワットに「全国平均◯kg」と言える信頼できる統計はありません。</span>出回っている数字はほとんどが出典のない引用の連鎖です。
              </p>
              <p className="mt-2">
                ふたつめ、こちらのほうが重要です。<span className="font-bold">スクワットはBIG3の中で「同じ言葉が指す動作の幅」が最も広い種目です。</span>どこまでしゃがむか、バーベルかマシンか。それだけで同じ人の数字が30kg以上変わります。平均を語る前に「どのスクワットの話か」を揃えないと、比較そのものが成立しません。
              </p>
              <p className="mt-2">
                そのうえで世界共通に使われている基準が<span className="font-bold">体重比（体重の何倍を挙げられるか）</span>です。体重55kgの人の100kgと体重90kgの人の100kgは、まったく意味が違います。この記事では深さの揃え方と、体重別・トレーニング歴別・男女別の目安をすべて表にしました。自分の行を探してください。
              </p>
            </section>

            <section className="bg-orange-50 border border-orange-100 rounded-xl p-4">
              <p className="font-bold text-orange-600 mb-1">この記事の表の前提</p>
              <p className="text-xs">
                <span className="font-bold">バーベルを担ぐバックスクワット</span>で、<span className="font-bold">太ももが床と平行（パラレル）</span>まで下げた、<span className="font-bold">1RM（1回だけ挙げられる最大重量）</span>の数字です。「10回挙げられる重量」とは別物なので、比べる前に換算してください。実際に1回の限界に挑戦するのは危険なので、
                <Link href="/rm-calculator" className="text-orange-600 font-bold underline">
                  RM計算機
                </Link>
                を使うか、この記事の<span className="font-bold">換算表</span>を見るのが安全です。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                その数字、どのスクワットですか？
              </h2>
              <p>
                ジムで「スクワット140kg」と言う人と「100kgで止まっている」人がいたとき、その差が実力差ではなく<span className="font-bold">深さの差</span>だったというのは本当によくある話です。先にここを揃えます。
              </p>
              <div className="overflow-x-auto -mx-2 px-2 mt-3">
                <table className="w-full text-xs border-collapse">
                  <thead>
                    <tr className="bg-orange-50">
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
                        種類
                      </th>
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
                        どこまで下げる
                      </th>
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
                        表と比較
                      </th>
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
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
                        <td className="border border-gray-200 px-2 py-2 text-gray-700 whitespace-nowrap">
                          {v.depth}
                        </td>
                        <td className="border border-gray-200 px-2 py-2 text-gray-700 text-center font-bold whitespace-nowrap">
                          {v.compare}
                        </td>
                        <td className="border border-gray-200 px-2 py-2 text-gray-500 whitespace-nowrap">
                          {v.note}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-3 text-xs text-gray-500">
                ※ 浅いのが悪いという話ではありません。<span className="font-bold">目安表と比べたいなら基準を揃える必要がある</span>、というだけです。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                体重別・スクワットの目安一覧（男性）
              </h2>
              <p>
                自分の体重の行を見てください。左から順に、<span className="font-bold">フォームを覚える段階 → ジムに通い慣れた段階 → 到達者が少数になる段階</span>という並びです。
              </p>
              <SquatByWeightTable rows={squatRows} weights={MEN_WEIGHTS} />
              <ul className="mt-3 space-y-1 text-xs text-gray-500">
                {squatRows.map((row) => (
                  <li key={row.level}>
                    <span className="font-bold text-gray-700">
                      {row.level}（体重×{formatRatio(row.ratio)}）
                    </span>
                    ：{row.note}
                  </li>
                ))}
              </ul>
              <p className="mt-3">
                覚えやすい基準は<span className="font-bold">「体重の1.5倍が中級者」</span>です。体重70kgならスクワット105kg。ベンチプレスは体重と同じ重さ（×1.0）が中級者なので、<span className="font-bold">同じ「中級者」でも必要な数字が1.5倍ちがいます</span>。下半身のほうが大きな重量を扱えるからで、種目をまたいで数字だけを比べても意味がないのはこのためです。
              </p>
              <p className="mt-2">
                よく検索される「スクワット100kg」を当てはめてみます。体重70kgの人なら体重比×1.43で<span className="font-bold">初心者（×1.25）を超え、中級者まであと5kg</span>。体重100kgの人なら×1.0で、<span className="font-bold">まだ初心者の目安（125kg）に届いていません</span>。数字の大きさだけでは何も決まりません。
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
                        次まで
                      </th>
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
                        かかる期間
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {squatRows.map((row, i) => {
                      const step = stepUp(i);
                      return (
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
                          <td className="border border-gray-200 px-2 py-2 text-gray-700 whitespace-nowrap">
                            {step === null ? "—" : "+" + step + "kg"}
                          </td>
                          <td className="border border-gray-200 px-2 py-2 text-gray-500 whitespace-nowrap">
                            {LEVEL_STEP_PERIOD[row.level] ?? "—"}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              <p className="mt-3">
                この表で気づいてほしいのは、<span className="font-bold">レベルの刻みが均等ではない</span>ことです。初心者から中級者への一歩だけが体重×0.25で、ほかはすべて体重×0.5。つまり<span className="font-bold">中級者の手前までは距離が短く、そこから先で急に遠くなります</span>。
              </p>
              <p className="mt-2">
                ベンチプレスは全レベルが体重×0.25で均等に並んでいるので、スクワットとは伸び方の感覚がそもそも違います。<span className="font-bold">「中級者までは意外と早かったのに、そこから何年も動かない」</span>のはスクワットでは普通のことで、あなたのペースが落ちたわけではありません。ベンチ側の刻みは
                <Link href="/column/bench-press-average" className="text-orange-600 font-bold underline">
                  ベンチプレスの平均は何kg？
                </Link>
                に同じ形式の表で置いてあります。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                女性のスクワットの目安
              </h2>
              <p>
                女性の場合は別の表になりますが、<span className="font-bold">スクワットは男女差が小さい種目</span>です。
              </p>
              <SquatByWeightTable rows={womenSquatRows} weights={WOMEN_WEIGHTS} />
              <ul className="mt-3 space-y-1 text-xs text-gray-500">
                {womenSquatRows.map((row) => (
                  <li key={row.level}>
                    <span className="font-bold text-gray-700">
                      {row.level}（体重×{formatRatio(row.ratio)}）
                    </span>
                    ：{row.note}
                  </li>
                ))}
              </ul>
              <p className="mt-3">
                同じレベル名で比べると、女性の体重比は男性の<span className="font-bold">約73%</span>です（中級者：男性×1.5に対し女性×1.1）。ベンチプレスでは約60%だったので、<span className="font-bold">下半身のほうが男女の開きは小さい</span>ことになります。女性の上級者（×1.5）は、男性の中級者とまったく同じ比率です。
              </p>
              <p className="mt-2">
                ベンチプレスと違う注意点がひとつあります。<span className="font-bold">スクワットはシャフト（20kg）だけでは初心者の目安に届きません。</span>体重50kgの女性の初心者ラインは38kgなので、バー20kgに左右9kgずつ足してようやくスタート地点です。ベンチはバーだけで初心者水準に入るので、<span className="font-bold">同じ「バーから始める」でも意味が違います</span>。最初からプレートを付ける前提で考えてください。
              </p>
              <p className="mt-2">
                「脚が太くなるのが不安」で重量を上げられない人は
                <Link href="/column/women-muscle-slim" className="text-orange-600 font-bold underline">
                  女性が筋トレしても太くならない理由
                </Link>
                を先に読んでみてください。張りの正体は、だいたい筋肉ではありません。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                今の重量から1RMを出す換算表
              </h2>
              <p>
                ここまでの表と比べるには自分の1RMが必要です。「◯kgを◯回」から換算した推定値を表にしました。縦が今扱っている重量、横が挙がる回数です。
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
                    {RACK_WEIGHTS.map((w) => (
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
                ※ 計算式は 1RM ＝ 重量 ×（1 + 回数 ÷ 30）。回数が多いほど誤差が大きくなるので、<span className="font-bold">6回以下</span>で計算するのが正確です。スクワットは高回数でも粘れてしまう種目なので、12回から逆算した数字はとくに当てになりません。
              </p>
              <p className="mt-3">
                たとえば<span className="font-bold">100kgを5回</span>挙げられるなら1RMは約117kg。体重70kgの人なら体重比×1.67で、<span className="font-bold">中級者（105kg）を超えていて、上級者（140kg）まであと23kg</span>という位置です。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                筆者の場合：ベンチと同じ120kgで止まっている
              </h2>
              <p>
                参考までに、筆者自身（筋トレ歴15年・フィジーク大会入賞）の数字を出しておきます。スクワットの自己ベストは<span className="font-bold">120kg</span>。体重80kg台の頃の数字なので、体重比は約1.4倍です。
              </p>
              <p className="mt-2">
                そして<span className="font-bold">ベンチプレスも同じ120kg</span>です。ここがこの記事でいちばん見てほしいところで、同じ120kgという数字が<span className="font-bold">ベンチプレスでは「上級者（×1.25）超え」、スクワットでは「中級者（×1.5）に未達」</span>になります。種目を変えるだけで評価が逆になる。「平均◯kg」を種目横断で語れない理由として、これ以上わかりやすい例はないと思います。
              </p>
              <p className="mt-2">
                一般的な目安ではスクワットはベンチの1.5倍前後になるはずなので、筆者の場合は本来180kgあってもおかしくありません。<span className="font-bold">はっきり上半身に偏っています。</span>
              </p>
              <p className="mt-2">
                15年で一番効いた要因は、新しいメニューでもサプリでもなく<span className="font-bold">ジムを変えたこと</span>でした。補助についてもらえてフォームも見てもらえる環境になったら、それだけで数字が動きました。<span className="font-bold">補助者がいないと、人は限界の手前で止めてしまう</span>からです。
              </p>
              <p className="mt-2">
                ただしスクワットには構造的な難しさがあります。<span className="font-bold">潰れたときの逃げ場を、自分で用意しないといけない</span>種目だからです。ベンチは人に見てもらえば済みますが、スクワットはセーフティバーの高さを自分で合わせておかないと限界には触れられません。筆者のスクワットが止まっている理由も、正直に言えばそこだと思っています。BIG3のバランスと内訳の話は
                <Link href="/column/strength-standards" className="text-orange-600 font-bold underline">
                  BIG3の重量目安一覧
                </Link>
                に書きました。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                スクワットが伸びないときの優先順位
              </h2>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">1</span>
                  <p>
                    <span className="font-bold">深さを固定する。</span>毎回違う深さで挙げていると、伸びたのか浅くなったのか自分でも判断できません。基準（パラレル）を決めて、重量はそこから足します。
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">2</span>
                  <p>
                    <span className="font-bold">足首と股関節の可動域を確認する。</span>かかとが浮く、背中が丸まる、膝が内に入る。これは筋力不足ではなく可動域の問題で、重量を足しても直りません。
                    <Link href="/column/stretch" className="text-orange-600 font-bold underline">
                      筋トレ前後のストレッチ
                    </Link>
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">3</span>
                  <p>
                    <span className="font-bold">週2回に固定し、回復日を空ける。</span>下半身は回復に時間がかかるので、他の種目と同じ日に全力を出すのは現実的ではありません。
                    <Link href="/column/split-routine" className="text-orange-600 font-bold underline">
                      筋トレ分割法の早見表
                    </Link>
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">4</span>
                  <p>
                    <span className="font-bold">ベルトで腹圧を作る。</span>体重の1.5倍あたりから、脚より先に腰と体幹が音を上げます。ここから先は装備が重量を決めます。
                  </p>
                </div>
              </div>
              <p className="mt-3">
                膝の違和感で重量を上げられない人、40代以降で回復が追いつかない人は
                <Link href="/column/over40" className="text-orange-600 font-bold underline">
                  40代からの筋トレ入門
                </Link>
                も合わせてどうぞ。週の頻度の決め方は
                <Link href="/column/frequency" className="text-orange-600 font-bold underline">
                  週に何回筋トレすればいい？
                </Link>
                にまとめています。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                よくある質問
              </h2>
              <h3 className="font-bold text-gray-800 mt-5 mb-2">
                スクワット100kgはすごいですか？
              </h3>
              <p>
                体重によります。体重70kgなら×1.43で中級者（105kg）の手前まで来ていますが、体重100kgなら×1.0で初心者の目安（125kg）に届いていません。<span className="font-bold">そして深さも揃えてから比べてください。</span>ハーフで100kgとパラレルで100kgは別の数字です。
              </p>
              <h3 className="font-bold text-gray-800 mt-5 mb-2">
                自重スクワットの平均回数はどれくらいですか？
              </h3>
              <p>
                自重は体重の一部しか負荷にならないので、<span className="font-bold">この記事の表とは比べられません</span>。目安として、フォームを崩さず20回以上できるならバーベル（シャフト20kg）に移る段階です。回数で追うより、担いで比べられるようにしたほうが早く伸びます。
              </p>
              <h3 className="font-bold text-gray-800 mt-5 mb-2">
                レッグプレスの数字と比べられますか？
              </h3>
              <p>
                比べられません。座って軌道が固定されていて、体幹でバーを支える必要もないので、<span className="font-bold">スクワットよりずっと大きな数字が出ます</span>。レッグプレス200kgをスクワット200kgとして持ち込むと、目安表は全部狂います。
              </p>
              <h3 className="font-bold text-gray-800 mt-5 mb-2">
                自分のレベルをまとめて知りたい
              </h3>
              <p>
                体重とレベルを選ぶだけでBIG3の目標重量が出る
                <Link href="/weight-checker" className="text-orange-600 font-bold underline">
                  筋トレレベル診断
                </Link>
                を用意しています。スクワットだけでなく3種目の現在地を一度に確認できます。
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
                  ▸ その前に<span className="font-bold">深さを揃える</span>。パラレルが基準。ハーフ・スミスマシン・レッグプレスの数字は持ち込まない。
                </li>
                <li>
                  ▸ 男性は<span className="font-bold">体重×1.5が中級者</span>（体重70kgで105kg）。女性はその約73%（中級者×1.1）で、男女差はベンチより小さい。
                </li>
                <li>
                  ▸ レベルの刻みは均等ではない。<span className="font-bold">中級者までは近く、そこから先は体重×0.5刻み</span>。止まって見えるのは普通のこと。
                </li>
              </ul>
              <p className="mt-2">
                まずは今の重量から1RMを換算して、自分の行を確認してみてください。次の行までの距離が数字で見えた瞬間、スクワットは「なんとなく担ぐもの」から「計画」に変わります。
              </p>
            </section>
          </div>

          <Link
            href="/weight-checker"
            className="block bg-orange-500 hover:bg-orange-600 rounded-xl p-4 mt-6 transition-colors"
          >
            <p className="font-bold text-white text-sm">
              🦵 自分のスクワット目標を出す
            </p>
            <p className="text-xs text-orange-50 mt-0.5">
              体重とレベルを選ぶだけ。BIG3の目標重量が一度に出ます →
            </p>
          </Link>
        </div>

        <ShareButtons
          url="https://sakutore.jp/column/squat-average"
          title="スクワットの平均は何kg？体重別・トレ歴別の目安一覧"
        />
        <Link
          href="/gear"
          className="block bg-orange-50 hover:bg-orange-100 rounded-2xl p-4 mb-6 border-2 border-orange-200 transition-colors"
        >
          <div className="flex items-center gap-3">
            <span className="text-2xl flex-shrink-0">🦵</span>
            <div>
              <p className="font-bold text-orange-600 text-sm">運営者厳選のおすすめギア</p>
              <p className="text-xs text-gray-500 mt-0.5">高重量で腰を守るトレーニングベルトを見る →</p>
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
