import Link from "next/link";
import { GuideCard, GuideNote } from "@/components/GuideCard";
import {
  LEVEL_STEP_PERIOD,
  LIFTS,
  MEN_WEIGHTS,
  WOMEN_WEIGHTS,
  formatRatio,
  levelsFor,
  rowsFor,
  type Gender,
  type Level,
} from "@/lib/strengthStandards";

/**
 * /weight-checker に静的に出力する表。
 *
 * ツール本体は "use client" で、結果は「診断する」を押すまで描画されない。
 * つまり検索エンジンが読むHTMLには表が1つも存在しない状態だった。
 *
 * /column/strength-standards とは向きを変えてある。
 * あちらは「レベル → 目標重量」（絶対値の early 引き）、
 * こちらは「いまのレベル → 次のレベルまであと何kg」（差分）。
 * 数字はすべて同じ @/lib/strengthStandards から計算しているので、
 * 2ページが食い違うことはない。
 */

type Step = {
  from: Level;
  to: Level;
  period: string | null;
};

/** Consecutive level pairs for a gender: 未経験→初心者, 初心者→中級者, ... */
function stepsFor(gender: Gender): Step[] {
  const levels = levelsFor(gender);
  return levels.slice(0, -1).map((from, i) => ({
    from,
    to: levels[i + 1],
    period: LEVEL_STEP_PERIOD[from],
  }));
}

/** How much the ratio has to grow to clear one level, for one lift. */
function stepRatio(gender: Gender, lift: "bench" | "squat" | "deadlift", step: Step) {
  const rows = rowsFor(gender, lift);
  const from = rows.find((r) => r.level === step.from)!;
  const to = rows.find((r) => r.level === step.to)!;
  return to.ratio - from.ratio;
}

/** Same, summed over the three lifts (the "BIG3 total" gap). */
const stepTotalRatio = (gender: Gender, step: Step) =>
  LIFTS.reduce((sum, lift) => sum + stepRatio(gender, lift.id, step), 0);

const round1 = (n: number) => Math.round(n * 10) / 10;

const th =
  "border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap";
const td = "border border-gray-200 px-2 py-2 text-gray-700 whitespace-nowrap";
const tdHead =
  "border border-gray-200 px-2 py-2 font-bold text-gray-800 whitespace-nowrap";

const MEN_STEPS = stepsFor("male");
const WOMEN_STEPS = stepsFor("female");

// Reference body weights for the "how many kg" columns.
const MEN_SAMPLE = 70;
const WOMEN_SAMPLE = 50;

// The two men's steps that need the same total jump, used in the note below.
const EQUAL_STEPS = MEN_STEPS.filter(
  (step) =>
    Math.abs(stepTotalRatio("male", step) - stepTotalRatio("male", MEN_STEPS[0])) < 1e-9
);

const FOCUS: Record<string, { frequency: string; focus: string }> = {
  未経験: {
    frequency: "週2〜3回",
    focus: "フォームの定着が最優先。重量は勝手に伸びる時期なので焦らない。",
  },
  初心者: {
    frequency: "週3〜4回",
    focus: "少しずつ重量を足し続ける（漸進性過負荷）。伸びが緩やかになり始める。",
  },
  中級者: {
    frequency: "週4〜5回",
    focus: "トレーニング以外が効いてくる。食事と睡眠を数字で管理する段階。",
  },
  上級者: {
    frequency: "週4〜5回",
    focus: "競技志向の領域。到達できるのはごく一部で、期間の目安も当てにならない。",
  },
};

function StepGapTable({
  gender,
  steps,
  weights,
}: {
  gender: Gender;
  steps: Step[];
  weights: number[];
}) {
  return (
    <div className="overflow-x-auto -mx-2 px-2">
      <table className="w-full text-xs border-collapse">
        <thead>
          <tr className="bg-orange-50">
            <th className={th}>ステップ</th>
            <th className={th}>体重比</th>
            {weights.map((w) => (
              <th key={w} className={th}>
                {w}kg
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {steps.map((step) => {
            const ratio = stepTotalRatio(gender, step);
            return (
              <tr key={step.from}>
                <td className={tdHead}>
                  {step.from} → {step.to}
                </td>
                <td className={`${td} text-gray-500`}>+×{formatRatio(ratio)}</td>
                {weights.map((w) => (
                  <td key={w} className={td}>
                    +{round1(w * ratio)}kg
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

function PerLiftGapTable({
  gender,
  steps,
  sampleWeight,
}: {
  gender: Gender;
  steps: Step[];
  sampleWeight: number;
}) {
  return (
    <div className="overflow-x-auto -mx-2 px-2">
      <table className="w-full text-xs border-collapse">
        <thead>
          <tr className="bg-orange-50">
            <th className={th}>ステップ</th>
            {LIFTS.map((lift) => (
              <th key={lift.id} className={th}>
                {lift.label}
              </th>
            ))}
            <th className={th}>BIG3合計</th>
          </tr>
        </thead>
        <tbody>
          {steps.map((step) => (
            <tr key={step.from}>
              <td className={tdHead}>
                {step.from} → {step.to}
              </td>
              {LIFTS.map((lift) => {
                const ratio = stepRatio(gender, lift.id, step);
                return (
                  <td key={lift.id} className={td}>
                    +{round1(sampleWeight * ratio)}kg
                    <span className="text-gray-400">
                      {" "}
                      (×{formatRatio(ratio)})
                    </span>
                  </td>
                );
              })}
              <td className={`${td} font-bold`}>
                +{round1(sampleWeight * stepTotalRatio(gender, step))}kg
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function WeightCheckerTables() {
  return (
    <>
      <GuideCard title="次のレベルまで、BIG3合計であと何kg必要か（男性・体重別）">
        <p>
          診断結果は「いまのレベルの目標重量」を出しますが、実際に知りたいのは
          <span className="font-bold">あと何kg積めば1つ上に行けるのか</span>のほうだと思います。
          BIG3合計で必要な上乗せを、体重別に並べました。
        </p>
        <StepGapTable gender="male" steps={MEN_STEPS} weights={MEN_WEIGHTS} />
        <p className="text-xs text-gray-500">
          読み方：体重{MEN_SAMPLE}kgで中級者にいる人が上級者になるには、BIG3合計で
          <span className="font-bold">
            {" "}
            +{round1(MEN_SAMPLE * stepTotalRatio("male", MEN_STEPS[2]))}kg
          </span>
          。3種目に割り振ると1種目あたり十数kg〜30kg台の上積みです。
          到達後の絶対値そのものは
          <Link
            href="/column/strength-standards"
            className="text-orange-500 font-bold hover:underline"
          >
            体重別・レベル別の早見表
          </Link>
          で確認できます。
        </p>
        <GuideNote>
          <p className="font-bold text-orange-600 mb-1">
            必要なkgは同じなのに、かかる時間は数倍になる
          </p>
          <p>
            {EQUAL_STEPS.length >= 2 && (
              <>
                <span className="font-bold">
                  {EQUAL_STEPS[0].from}→{EQUAL_STEPS[0].to}
                </span>
                と
                <span className="font-bold">
                  {EQUAL_STEPS[1].from}→{EQUAL_STEPS[1].to}
                </span>
                は、どちらもBIG3合計で
                <span className="font-bold">
                  {" "}
                  体重×{formatRatio(stepTotalRatio("male", EQUAL_STEPS[0]))}
                </span>
                （体重{MEN_SAMPLE}kgなら+
                {round1(MEN_SAMPLE * stepTotalRatio("male", EQUAL_STEPS[0]))}kg）の上乗せです。
                必要な重量はまったく同じ。それなのに目安期間は
                <span className="font-bold">{EQUAL_STEPS[0].period}</span>と
                <span className="font-bold">{EQUAL_STEPS[1].period}</span>で、
                数倍の開きがあります。
              </>
            )}
          </p>
          <p className="mt-2">
            伸びが止まったように感じるのは、多くの場合ペースが落ちたのではなく
            <span className="font-bold">同じ距離を進むのに時間がかかるようになっただけ</span>です。
            月単位で見て動いていなくても、年単位では進んでいることがあります。
          </p>
        </GuideNote>
      </GuideCard>

      <GuideCard title={`種目別・1レベル上げるのに必要な上乗せ（男性・体重${MEN_SAMPLE}kgの場合）`}>
        <p>
          同じ「1レベル」でも、種目によって必要な上積みは違います。
          体重{MEN_SAMPLE}kgを例に、種目ごとの必要量を並べました。
        </p>
        <PerLiftGapTable gender="male" steps={MEN_STEPS} sampleWeight={MEN_SAMPLE} />
        <p className="text-xs text-gray-500">
          ベンチプレスはどのステップでも
          <span className="font-bold">
            体重×{formatRatio(stepRatio("male", "bench", MEN_STEPS[0]))}
          </span>
          で一定、デッドリフトは
          <span className="font-bold">
            体重×{formatRatio(stepRatio("male", "deadlift", MEN_STEPS[0]))}
          </span>
          で一定。つまり
          <span className="font-bold">デッドリフトはベンチプレスのちょうど2倍の上積みが要る</span>
          計算になります。ベンチが先に伸びて見えるのは、要求される増分がそもそも半分だからです。
        </p>
        <p className="text-xs text-gray-500">
          例外は
          <span className="font-bold">
            {MEN_STEPS[1].from}→{MEN_STEPS[1].to}のスクワット
          </span>
          で、ここだけ+×{formatRatio(stepRatio("male", "squat", MEN_STEPS[1]))}と軽くなっています。
          BIG3で唯一「1レベル上げるのが安い」区間なので、脚を後回しにしてきた人が
          取り返しやすいのもこの区間です。
        </p>
      </GuideCard>

      <GuideCard title="レベルアップにかかる目安期間">
        <p>
          上の表が「あと何kg」なら、こちらは「あとどれくらいの期間」です。
          週の頻度とセットで見てください。
        </p>
        <div className="overflow-x-auto -mx-2 px-2">
          <table className="w-full text-xs border-collapse">
            <thead>
              <tr className="bg-orange-50">
                <th className={th}>ステップ</th>
                <th className={th}>目安期間</th>
                <th className={th}>頻度</th>
                <th className={th}>この時期の主眼</th>
              </tr>
            </thead>
            <tbody>
              {MEN_STEPS.map((step) => (
                <tr key={step.from}>
                  <td className={tdHead}>
                    {step.from} → {step.to}
                  </td>
                  <td className={td}>{step.period}</td>
                  <td className={td}>{FOCUS[step.from]?.frequency}</td>
                  <td className={`${td} whitespace-normal text-gray-500`}>
                    {FOCUS[step.from]?.focus}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-500">
          期間はあくまで中央値のイメージです。開始年齢・睡眠・食事量で簡単に倍半分になります。
          自分が遅れているかどうかを判定する材料には使わないでください。
        </p>
      </GuideCard>

      <GuideCard title={`女性の場合・次のレベルまであと何kg（体重${WOMEN_SAMPLE}kgの場合）`}>
        <p>
          女性の基準は
          <span className="font-bold">初心者・中級者・上級者の3段階</span>です。
          男性のような未経験／エリートの帯は、信頼できる目安が置けないので設けていません。
        </p>
        <PerLiftGapTable
          gender="female"
          steps={WOMEN_STEPS}
          sampleWeight={WOMEN_SAMPLE}
        />
        <p className="text-xs text-gray-500">
          体重別のBIG3合計で見ると、こうなります。
        </p>
        <StepGapTable gender="female" steps={WOMEN_STEPS} weights={WOMEN_WEIGHTS} />
        <GuideNote>
          <p className="font-bold text-orange-600 mb-1">
            ベンチプレスだけ上乗せが極端に小さい理由
          </p>
          <p>
            女性のベンチプレスは1レベルあたり
            <span className="font-bold">
              体重×{formatRatio(stepRatio("female", "bench", WOMEN_STEPS[0]))}
            </span>
            （体重{WOMEN_SAMPLE}kgなら+
            {round1(WOMEN_SAMPLE * stepRatio("female", "bench", WOMEN_STEPS[0]))}kg）しかありません。
            これは伸ばしやすいという意味ではなく、
            <span className="font-bold">上半身の押す力がBIG3で最も伸びにくい</span>ことを
            基準側が織り込んでいるためです。
          </p>
          <p className="mt-2">
            もうひとつ、器具の下限という物理的な問題もあります。
            シャフト単体で20kgあるので、体重{WOMEN_SAMPLE}kgの人にとっては
            <span className="font-bold">バーだけで既に体重×0.4</span>。
            初心者の目安に最初から到達している状態から始まります。
            数字が動かないのは筋力不足ではなく、刻める単位が粗いだけということが起こります。
          </p>
        </GuideNote>
      </GuideCard>
    </>
  );
}
