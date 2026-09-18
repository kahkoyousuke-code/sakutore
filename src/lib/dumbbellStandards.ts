/**
 * ダンベル種目で扱う重さの目安（体重比）の単一ソース。
 *
 * BIG3の strengthStandards.ts、自重の bodyweightStandards.ts と同じ役割を
 * ダンベルについて担う。/column/dumbbell-weight が使う。
 *
 * 条件を固定しないと数字の意味が変わるので、すべて次の前提で統一する。
 * ・フォームを崩さず「10回」できる重さ（1回の最大重量ではない）
 * ・断りがなければ「片手に持つ1個」の重さ
 *
 * ダンベルプレスだけは strengthStandards.ts のベンチプレス体重比から計算する。
 * ベンチの目安とダンベルの目安が食い違わないようにするため、ここに数字を
 * 直書きしない。残りの種目に公的な統計は存在しないので、サクトレの基準として
 * 持つ（自重の回数目安と同じ扱い）。
 */

import {
  benchRows,
  womenBenchRows,
  type Gender,
  type Level,
} from "./strengthStandards";

/** この表が対象にするレベル。未経験とエリートは扱わない（買う話に使えないため）。 */
export type DumbbellLevel = Extract<Level, "初心者" | "中級者">;

export const DUMBBELL_LEVELS: DumbbellLevel[] = ["初心者", "中級者"];

/**
 * 1RMから10回できる重さを出す係数。Epley式（1RM = 重量 ×(1 + 回数 / 30)）の
 * 逆算で、/rm-calculator と同じ式を使っている。10回なら 1 ÷ 1.333 ＝ 0.75。
 */
const TEN_REP_FACTOR = 1 / (1 + 10 / 30);

/**
 * 同じ重さでもダンベルはバーベルより挙がりにくい（左右を別々に支えるため）。
 * 合計でバーベルの約9割として計算する。厳密な定数ではないので、記事では
 * 「目安」と断って使うこと。
 */
const DUMBBELL_VS_BARBELL = 0.9;

export type DumbbellExercise = {
  id: "press" | "shoulder" | "row" | "curl" | "lateral" | "goblet";
  name: string;
  target: string;
  /** 片手1個ではなく、1個を両手で持つ種目（ゴブレットスクワット）に付ける。 */
  bothHands?: boolean;
  note: string;
};

export const dumbbellExercises: DumbbellExercise[] = [
  {
    id: "press",
    name: "ダンベルプレス",
    target: "胸",
    note: "ベンチプレスの体重比から計算した値",
  },
  {
    id: "shoulder",
    name: "ダンベルショルダープレス",
    target: "肩",
    note: "座って行う前提。立つともう少し軽くなる",
  },
  { id: "row", name: "ワンハンドロウ", target: "背中", note: "自宅で最も重さが要る種目" },
  { id: "curl", name: "ダンベルカール", target: "腕（前）", note: "反動を使わない前提" },
  {
    id: "lateral",
    name: "サイドレイズ",
    target: "肩（横）",
    note: "重くすると効かない。軽いのが正常",
  },
  {
    id: "goblet",
    name: "ゴブレットスクワット",
    target: "脚",
    bothHands: true,
    note: "1個を両手で胸の前に持つ。脚には物足りなくなるのが早い",
  },
];

/**
 * ダンベルプレス（片手）の体重比。ベンチプレスの目安から計算する。
 * 例）男性・初心者はベンチ1RMが体重×0.75 → 10回なら×0.5625 →
 * ダンベル合計で×0.506 → 片手は×0.25。
 */
const pressRatio = (gender: Gender, level: DumbbellLevel): number => {
  const rows = gender === "male" ? benchRows : womenBenchRows;
  const row = rows.find((r) => r.level === level);
  if (!row) throw new Error(`no bench row for ${gender} / ${level}`);
  return (row.ratio * TEN_REP_FACTOR * DUMBBELL_VS_BARBELL) / 2;
};

/**
 * プレス以外の体重比。出典のある統計はないので、サクトレの基準として持つ。
 * 男性の値をジムでよく見る重さに合わせ、女性は上半身で約6割、下半身で
 * 約7割として置いた。
 */
const RATIOS: Record<
  Exclude<DumbbellExercise["id"], "press">,
  Record<Gender, Record<DumbbellLevel, number>>
> = {
  shoulder: {
    male: { 初心者: 0.15, 中級者: 0.25 },
    female: { 初心者: 0.08, 中級者: 0.14 },
  },
  row: {
    male: { 初心者: 0.3, 中級者: 0.45 },
    female: { 初心者: 0.2, 中級者: 0.3 },
  },
  curl: {
    male: { 初心者: 0.12, 中級者: 0.2 },
    female: { 初心者: 0.07, 中級者: 0.12 },
  },
  lateral: {
    male: { 初心者: 0.06, 中級者: 0.12 },
    female: { 初心者: 0.04, 中級者: 0.07 },
  },
  goblet: {
    male: { 初心者: 0.25, 中級者: 0.4 },
    female: { 初心者: 0.18, 中級者: 0.3 },
  },
};

/** 種目・性別・レベルの体重比。記事側に比率を直書きさせないための入口。 */
export const dumbbellRatio = (
  id: DumbbellExercise["id"],
  gender: Gender,
  level: DumbbellLevel
): number =>
  id === "press" ? pressRatio(gender, level) : RATIOS[id][gender][level];

/**
 * 体重から実際の重さ（kg）に直す。
 * 市販のダンベルは0.5kg刻みまでしか合わせられないので、そこで丸める。
 */
export const dumbbellWeight = (
  bodyWeight: number,
  id: DumbbellExercise["id"],
  gender: Gender,
  level: DumbbellLevel
): number => Math.round(bodyWeight * dumbbellRatio(id, gender, level) * 2) / 2;

/** 「17.5kg」のような表記。小数第1位が0のときは整数で出す。 */
export const formatDumbbell = (kg: number) =>
  `${Number.isInteger(kg) ? kg : kg.toFixed(1)}kg`;

/**
 * 中級者まで使うとしたら、片手いくらまで必要になるか。
 * 「何kgのダンベルを買えばいいか」の答えはこの数字で決まる。
 * 両手で1個持つ種目（ゴブレット）は片手の必要量ではないので除く。
 */
export const heaviestNeeded = (bodyWeight: number, gender: Gender): number =>
  Math.max(
    ...dumbbellExercises
      .filter((e) => !e.bothHands)
      .map((e) => dumbbellWeight(bodyWeight, e.id, gender, "中級者"))
  );
