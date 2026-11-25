import { SET_SCHEMES } from "@/lib/strengthStandards";

/**
 * 1回のトレーニングの時間の単一ソース（/column/training-order, /column/workout-time）。
 *
 * 時間は「セット数 ×（1セットの時間 ＋ セット間の休憩）」で出す。
 * 休憩は SET_SCHEMES（/column/sets-and-reps・/column/beginner-guide の表と同じ値）から読む。
 */

/** 1セットにかかる時間の目安（分）。重さの付け替えと動作を含めて、サクトレでは1分で数える。 */
export const SET_MINUTES = 1;

type SchemeLabel = (typeof SET_SCHEMES)[number]["label"];

const schemeFor = (label: SchemeLabel) => SET_SCHEMES.find((s) => s.label === label)!;

/** その型で exercises 種目やったときの時間（分）。休憩の短い側と長い側で幅を出す。 */
export const exerciseMinutes = (label: SchemeLabel, exercises = 1) => {
  const s = schemeFor(label);
  return {
    min: exercises * s.sets * (SET_MINUTES + s.restMin),
    max: exercises * s.sets * (SET_MINUTES + s.restMax),
  };
};

/**
 * 1回のトレーニングの流れ（/column/training-order の表と図）。60分とれた日の配分。
 * minutes が null のもの（有酸素）は「任意」で、合計に入れない。
 * メイン種目の20分は 5×5 を1種目、休憩を短い側でとった時間（exerciseMinutes("5×5").min）と同じ。
 */
export const SESSION_FLOW = [
  { step: "1", name: "動的ストレッチ", minutes: 5, detail: "関節を大きく動かす。座って伸ばすのはここではやらない" },
  { step: "2", name: "アップセット", minutes: 5, detail: "その日の1種目目を、軽い重量から段階的に上げる" },
  { step: "3", name: "メイン種目（大きい種目）", minutes: 20, detail: "ベンチプレス・スクワットなど、いちばん重いものを最初に" },
  { step: "4", name: "補助種目（小さい種目）", minutes: 20, detail: "フライ・サイドレイズなど、1つの筋肉を狙うもの" },
  { step: "5", name: "腹筋", minutes: 5, detail: "先にやると体幹が効かなくなるので最後" },
  { step: "6", name: "有酸素", minutes: null, detail: "やるならここ。筋トレの前ではなく後" },
  { step: "7", name: "静的ストレッチ", minutes: 5, detail: "ゆっくり伸ばすのはトレーニングが終わってから" },
] as const;

export const OPTIONAL_TIME = "任意";

export const flowTime = (minutes: number | null) => (minutes === null ? OPTIONAL_TIME : `${minutes}分`);

/** SESSION_FLOW の合計（任意のものは除く）。 */
export const SESSION_FLOW_TOTAL = SESSION_FLOW.reduce((sum, r) => sum + (r.minutes ?? 0), 0);

const flowMinutes = (name: string) => SESSION_FLOW.find((r) => r.name === name)!.minutes as number;

/** 時間ごとの組み方の1行。fixed は決まった時間、scheme は型と種目数から時間を出す。 */
export type PlanBlock =
  | { name: string; fixed: number }
  | { name: string; scheme: SchemeLabel; exercises: number };

export const blockMinutes = (b: PlanBlock) =>
  "fixed" in b ? { min: b.fixed, max: b.fixed } : exerciseMinutes(b.scheme, b.exercises);

export const planMinutes = (blocks: readonly PlanBlock[]) =>
  blocks.reduce(
    (acc, b) => {
      const m = blockMinutes(b);
      return { min: acc.min + m.min, max: acc.max + m.max };
    },
    { min: 0, max: 0 },
  );

const WARM: PlanBlock[] = [
  { name: "動的ストレッチ", fixed: flowMinutes("動的ストレッチ") },
  { name: "アップセット", fixed: flowMinutes("アップセット") },
];
const COOL: PlanBlock = { name: "静的ストレッチ", fixed: flowMinutes("静的ストレッチ") };

/**
 * 時間が限られた日の組み方（/column/workout-time）。削る順番は
 * 有酸素 → 補助種目の数と腹筋 → （それでも収まらないとき）メイン種目を 5×5 から 3×8 へ。
 * メインの 5×5 を最後まで残すのは /column/sets-and-reps の FAQ（時間がない日はメインだけ 5×5 にして
 * ほかの種目を減らす）に合わせるため。ストレッチとアップセットは削らない。
 */
export const TIME_PLANS: { label: string; blocks: PlanBlock[] }[] = [
  {
    label: "60分",
    blocks: [
      ...WARM,
      { name: "メイン種目", scheme: "5×5", exercises: 1 },
      { name: "補助種目", scheme: "3×10", exercises: 2 },
      { name: "腹筋", fixed: flowMinutes("腹筋") },
      COOL,
    ],
  },
  {
    label: "45分",
    blocks: [
      ...WARM,
      { name: "メイン種目", scheme: "5×5", exercises: 1 },
      { name: "補助種目", scheme: "3×10", exercises: 1 },
      COOL,
    ],
  },
  {
    label: "30分",
    blocks: [
      ...WARM,
      { name: "メイン種目", scheme: "3×8", exercises: 1 },
      { name: "補助種目", scheme: "3×10", exercises: 1 },
      COOL,
    ],
  },
];
