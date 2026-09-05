/**
 * BIG3（ベンチプレス・スクワット・デッドリフト）の体重比目安。
 *
 * ここがサイト唯一の出典。/column/strength-standards と /weight-checker が
 * 同じ数字を出すために、両方がこのファイルを読む。
 *
 * 以前は2ページが別々に比率をハードコードしていて、体重70kg・中級の
 * スクワットが記事105kg／ツール87.5kgと食い違っていた。
 * 同じ問いに2つの答えを返すのはツール系サイトとして最悪なので、
 * 数字を足すときは必ずここに足すこと。
 */

export type Level = "未経験" | "初心者" | "中級者" | "上級者" | "エリート";

export type Row = {
  level: Level;
  ratio: number;
  note: string;
};

export type Gender = "male" | "female";

export type LiftId = "bench" | "squat" | "deadlift";

// Body weights used as table columns. Men cover the common 50-100kg range,
// women a lighter band, so "BIG3 by body weight" queries land on a real number.
export const MEN_WEIGHTS = [50, 60, 70, 80, 90, 100];
export const WOMEN_WEIGHTS = [45, 50, 55, 60, 65];

export const benchRows: Row[] = [
  { level: "未経験", ratio: 0.5, note: "はじめてバーベルを握る段階" },
  { level: "初心者", ratio: 0.75, note: "数ヶ月続ければ届く" },
  { level: "中級者", ratio: 1.0, note: "体重と同じ重さ。最初の大きな壁" },
  { level: "上級者", ratio: 1.25, note: "ジムで一目置かれるライン" },
  { level: "エリート", ratio: 1.5, note: "競技志向の領域" },
];

export const squatRows: Row[] = [
  { level: "未経験", ratio: 0.75, note: "フォーム習得が最優先" },
  { level: "初心者", ratio: 1.25, note: "体重の1.25倍" },
  { level: "中級者", ratio: 1.5, note: "下半身が「使える」ラインに" },
  { level: "上級者", ratio: 2.0, note: "体重の2倍。到達者は少数" },
  { level: "エリート", ratio: 2.5, note: "競技志向の領域" },
];

export const deadliftRows: Row[] = [
  { level: "未経験", ratio: 1.0, note: "背中を丸めないことが全て" },
  { level: "初心者", ratio: 1.5, note: "BIG3で最も伸びが速い" },
  { level: "中級者", ratio: 2.0, note: "体重の2倍" },
  { level: "上級者", ratio: 2.5, note: "ベルトとグリップが必須に" },
  { level: "エリート", ratio: 3.0, note: "競技志向の領域" },
];

// Sum of the three lifts at the same level. Quoted as "BIG3 total".
export const totalRows: Row[] = [
  { level: "未経験", ratio: 2.25, note: "3種目とも始めたばかり" },
  { level: "初心者", ratio: 3.5, note: "半年〜1年で届く人が多い" },
  { level: "中級者", ratio: 4.5, note: "BIG3合計の最初の目標地点" },
  { level: "上級者", ratio: 5.75, note: "3種目とも高い水準で揃っている" },
  { level: "エリート", ratio: 7.0, note: "競技志向の領域" },
];

// Women's standards stop at 上級者: there is no reliable 未経験 / エリート
// band to quote, so the tool must not offer those levels for women either.
export const womenBenchRows: Row[] = [
  { level: "初心者", ratio: 0.4, note: "バーベル（20kg）だけでも十分な段階" },
  { level: "中級者", ratio: 0.6, note: "上半身で最も伸びにくい種目" },
  { level: "上級者", ratio: 0.8, note: "続けている女性でも到達者は多くない" },
];

export const womenSquatRows: Row[] = [
  { level: "初心者", ratio: 0.75, note: "自重で深くしゃがめてから重量へ" },
  { level: "中級者", ratio: 1.1, note: "体重を超えるあたり" },
  { level: "上級者", ratio: 1.5, note: "男性の中級者と同じ比率" },
];

export const womenDeadliftRows: Row[] = [
  { level: "初心者", ratio: 1.0, note: "女性が最初に体重を超えやすい種目" },
  { level: "中級者", ratio: 1.3, note: "お尻と背中が使えている証拠" },
  { level: "上級者", ratio: 1.8, note: "男性の中級者に近い水準" },
];

export const LIFTS: { id: LiftId; label: string; icon: string }[] = [
  { id: "bench", label: "ベンチプレス", icon: "🏋️" },
  { id: "squat", label: "スクワット", icon: "🦵" },
  { id: "deadlift", label: "デッドリフト", icon: "💪" },
];

const ROWS: Record<Gender, Record<LiftId, Row[]>> = {
  male: { bench: benchRows, squat: squatRows, deadlift: deadliftRows },
  female: {
    bench: womenBenchRows,
    squat: womenSquatRows,
    deadlift: womenDeadliftRows,
  },
};

/** Rows for one gender / lift. */
export const rowsFor = (gender: Gender, lift: LiftId): Row[] =>
  ROWS[gender][lift];

/**
 * Levels available for a gender, in order.
 * Bench is the reference lift; all three share the same level set.
 */
export const levelsFor = (gender: Gender): Level[] =>
  ROWS[gender].bench.map((row) => row.level);

/** Training experience each level roughly corresponds to. */
export const LEVEL_EXPERIENCE: Record<Level, string> = {
  未経験: "〜6ヶ月",
  初心者: "6ヶ月〜2年",
  中級者: "2〜5年",
  上級者: "5年以上",
  エリート: "競技志向",
};

/** How long the step up to the next level typically takes. */
export const LEVEL_STEP_PERIOD: Record<Level, string | null> = {
  未経験: "約6ヶ月〜1年",
  初心者: "約1〜2年",
  中級者: "約3〜5年",
  上級者: "数年〜（到達者はごく一部）",
  エリート: null,
};

/** Target weight for one lift, rounded to 0.1kg as the tool has always done. */
export const targetWeight = (bodyWeight: number, ratio: number) =>
  Math.round(bodyWeight * ratio * 10) / 10;

// Keep one decimal minimum so levels read as x1.0 / x1.25, not x1 / x1.25.
export const formatRatio = (ratio: number) => ratio.toFixed(2).replace(/0$/, "");
