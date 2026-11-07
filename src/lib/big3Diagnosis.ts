/**
 * BIG3 level diagnosis from the user's own lifts.
 *
 * The weight checker tool, the share page (/big3-result) and its X card image
 * (/api/og/big3) all call diagnoseBig3(), so the three never disagree.
 * All ratios come from strengthStandards.ts — do not add numbers here.
 */
import {
  LIFTS,
  levelForRatio,
  rowsFor,
  totalRows,
  type Gender,
  type Level,
  type LiftId,
} from "@/lib/strengthStandards";

export type Big3Input = {
  gender: Gender;
  bodyWeight: number;
  bench: number;
  squat: number;
  deadlift: number;
};

export type Big3LiftResult = {
  id: LiftId;
  label: string;
  kg: number;
  ratio: number;
  level: Level | null;
};

export type Big3Result = {
  input: Big3Input;
  lifts: Big3LiftResult[];
  total: number;
  totalRatio: number;
  /** Men only: there is no women's BIG3 total standard to compare against. */
  totalLevel: Level | null;
  hasTotalStandard: boolean;
};

export const BODY_WEIGHT_RANGE = { min: 30, max: 300 };
export const LIFT_MAX_KG = 600;

const round1 = (n: number) => Math.round(n * 10) / 10;
const round2 = (n: number) => Math.round(n * 100) / 100;

export function diagnoseBig3(input: Big3Input): Big3Result {
  const lifts = LIFTS.map((lift) => {
    const kg = input[lift.id];
    const ratio = round2(kg / input.bodyWeight);
    return {
      id: lift.id,
      label: lift.label,
      kg,
      ratio,
      level: levelForRatio(rowsFor(input.gender, lift.id), kg / input.bodyWeight),
    };
  });
  const total = round1(input.bench + input.squat + input.deadlift);
  const hasTotalStandard = input.gender === "male";
  return {
    input,
    lifts,
    total,
    totalRatio: round2(total / input.bodyWeight),
    totalLevel: hasTotalStandard
      ? levelForRatio(totalRows, total / input.bodyWeight)
      : null,
    hasTotalStandard,
  };
}

/** Label for a level, including "below the lowest band". */
export function levelText(level: Level | null, gender: Gender): string {
  if (level) return level;
  return gender === "male" ? "未経験の手前" : "初心者の手前";
}

/** The one-word headline used on the share card and page title. */
export function headlineLevel(result: Big3Result): string | null {
  return result.hasTotalStandard
    ? levelText(result.totalLevel, result.input.gender)
    : null;
}

// --- URL params (share page and OG image read the same format) ---

type ParamSource = { get(key: string): string | null };

const num = (v: string | null) => (v === null || v === "" ? NaN : Number(v));

/** Returns null when any value is missing or out of range. */
export function parseBig3Params(params: ParamSource): Big3Input | null {
  const g = params.get("g");
  if (g !== "male" && g !== "female") return null;
  const bodyWeight = num(params.get("w"));
  const bench = num(params.get("b"));
  const squat = num(params.get("s"));
  const deadlift = num(params.get("d"));
  if (
    !Number.isFinite(bodyWeight) ||
    bodyWeight < BODY_WEIGHT_RANGE.min ||
    bodyWeight > BODY_WEIGHT_RANGE.max
  ) {
    return null;
  }
  for (const kg of [bench, squat, deadlift]) {
    if (!Number.isFinite(kg) || kg < 0 || kg > LIFT_MAX_KG) return null;
  }
  return { gender: g, bodyWeight, bench, squat, deadlift };
}

export function big3Query(input: Big3Input): string {
  const p = new URLSearchParams({
    g: input.gender,
    w: String(input.bodyWeight),
    b: String(input.bench),
    s: String(input.squat),
    d: String(input.deadlift),
  });
  return p.toString();
}

/** Text for the X post. Kept short so the card does the talking. */
export function big3ShareText(result: Big3Result): string {
  const short: Record<LiftId, string> = {
    bench: "ベンチ",
    squat: "スクワット",
    deadlift: "デッド",
  };
  const g = result.input.gender;
  const lines = result.lifts.map(
    (l) => `${short[l.id]} ${l.kg}kg（${levelText(l.level, g)}）`
  );
  const head = headlineLevel(result);
  const totalLine = head
    ? `合計${result.total}kg・体重の${result.totalRatio}倍 → ${head}`
    : `合計${result.total}kg・体重の${result.totalRatio}倍`;
  return ["BIG3レベル診断の結果", ...lines, totalLine, "#サクトレ #筋トレ"].join("\n");
}
