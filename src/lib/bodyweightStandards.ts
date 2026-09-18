/**
 * 自重種目（腕立て伏せ・懸垂）の「負荷」と「回数目安」の単一ソース。
 *
 * BIG3の strengthStandards.ts と同じ役割を、器具を使わない種目について担う。
 * 負荷の数字はもともと /column/chest-home に直書きされていたので、ここへ移して
 * 記事どうしで食い違わないようにした。数字を足すときは必ずここに足すこと。
 *
 * レベル名は strengthStandards.ts と共通。同じサイトの中で「中級者」の意味が
 * 種目ごとに変わらないようにするため。
 */

import type { Level } from "./strengthStandards";

export type PushupId = "knee" | "incline" | "standard" | "decline";

export type LoadRow = {
  id: PushupId | "pullup";
  name: string;
  /** 台の高さで表示名を補う。表では名前の下に出す。 */
  detail?: string;
  /** 体重に対して手（またはバー）にかかる荷重の割合。 */
  ratio: number;
  /** 幅で示す種目の上限。単一の値で言い切れないものだけ持つ。 */
  ratioMax?: number;
  note: string;
};

/**
 * 腕立て伏せの負荷。手にかかる荷重が体重の何%かは計測されていて、
 * 台の高さと手幅で変わるぶんは「目安」と断って使う。
 */
export const pushupLoadRows: LoadRow[] = [
  {
    id: "knee",
    name: "膝つき腕立て",
    ratio: 0.49,
    note: "標準の半分強。ここから始めても遠回りにはならない",
  },
  {
    id: "incline",
    name: "インクライン",
    detail: "手を台に",
    ratio: 0.55,
    note: "台が高いほど軽い。机や階段で調整できる",
  },
  {
    id: "standard",
    name: "標準の腕立て",
    ratio: 0.64,
    note: "つま先立ちで体は一直線。この記事の回数目安の基準",
  },
  {
    id: "decline",
    name: "デクライン",
    detail: "足を台に",
    ratio: 0.7,
    ratioMax: 0.75,
    note: "足が高いほど重い。自重で負荷を上げる最後の手段",
  },
];

/**
 * 懸垂はぶら下がった体重がそのまま負荷になる。
 * 斜め懸垂は角度で大きく変わり、根拠のある一つの数字を出せないので載せない。
 */
export const pullupLoadRow: LoadRow = {
  id: "pullup",
  name: "懸垂",
  ratio: 1.0,
  note: "体重の100%。体重が増えると種目そのものが重くなる",
};

/**
 * 腕立ての種類を id で引く。記事側で ratio を直書きさせないための入口。
 * 定義漏れは型ではなく起動時に気づけるよう、見つからなければ例外にする。
 */
export const pushupLoad = (id: PushupId): LoadRow => {
  const row = pushupLoadRows.find((r) => r.id === id);
  if (!row) throw new Error(`unknown pushup id: ${id}`);
  return row;
};

/** 体重に対する負荷を実際の重量（kg）に直す。表示は1kg単位。 */
export const loadWeight = (bodyWeight: number, ratio: number) =>
  Math.round(bodyWeight * ratio);

/** 「約64%」「約70〜75%」のような割合表記。 */
export const formatLoadPercent = (row: LoadRow) =>
  row.ratioMax
    ? `約${Math.round(row.ratio * 100)}〜${Math.round(row.ratioMax * 100)}%`
    : `約${Math.round(row.ratio * 100)}%`;

/** 「約45kg」「約49〜53kg」のような重量表記。 */
export const formatLoadWeight = (row: LoadRow, bodyWeight: number) =>
  row.ratioMax
    ? `約${loadWeight(bodyWeight, row.ratio)}〜${loadWeight(bodyWeight, row.ratioMax)}kg`
    : `約${loadWeight(bodyWeight, row.ratio)}kg`;

/**
 * 懸垂1回に届くかどうかを、ラットプルダウンの重量で判定するときの体重比。
 *
 * 出典のある基準ではなくサクトレの目安。ラットプルダウンは背中を引く動きが
 * 懸垂と近いので、「体重の8割を8〜10回」引ければ、体重の100%を1回引く力が
 * ついている可能性が高い、という見立てで置いている。記事では必ず目安と
 * 断って使うこと。
 */
export const LAT_PULLDOWN_TO_PULLUP_RATIO = 0.8;

/** 懸垂1回の目標になるラットプルダウンの重量（kg）。表示は1kg単位。 */
export const latPulldownTarget = (bodyWeight: number) =>
  Math.round(bodyWeight * LAT_PULLDOWN_TO_PULLUP_RATIO);

export type RepRow = {
  level: Level;
  /** フォームを崩さず連続でできる回数。 */
  reps: number;
  note: string;
};

/**
 * 回数の目安。
 *
 * 重要：これは公的な統計ではなくサクトレの基準。自重種目の回数に
 * 出典のある「全国平均」は存在しないので、代わりにフォームの条件を固定して
 * 比べられるようにしている。条件は記事本文に明記すること。
 */
export const pushupRepRows: RepRow[] = [
  { level: "未経験", reps: 5, note: "まずは膝つきで15回を目指す段階" },
  { level: "初心者", reps: 15, note: "3セット組めるようになるのがこのあたり" },
  { level: "中級者", reps: 30, note: "回数より負荷を上げる段階に入る" },
  { level: "上級者", reps: 50, note: "胸より先に体幹が保たなくなってくる" },
  { level: "エリート", reps: 70, note: "持久力の領域。筋肥大とは別の能力" },
];

export const pullupRepRows: RepRow[] = [
  { level: "未経験", reps: 0, note: "1回もできない。ここから始める人が多数派" },
  { level: "初心者", reps: 3, note: "反動なしで3回できれば入口を通過" },
  { level: "中級者", reps: 10, note: "背中を引く力がついてきた証拠" },
  { level: "上級者", reps: 15, note: "加重（ディップスベルト）を検討する段階" },
  { level: "エリート", reps: 20, note: "体重が軽いほど有利なので体格差も出る" },
];

// 女性は strengthStandards.ts と同じく上級者まで。信頼できる基準を
// 未経験・エリートまで広げられないため、レベルも増やさない。
export const womenPushupRepRows: RepRow[] = [
  { level: "初心者", reps: 3, note: "膝つきで15回できたら挑戦する段階" },
  { level: "中級者", reps: 10, note: "続けている女性でもここが一つの壁" },
  { level: "上級者", reps: 20, note: "男性の初心者を超える水準" },
];

export const womenPullupRepRows: RepRow[] = [
  { level: "初心者", reps: 0, note: "斜め懸垂10回から始めるのが現実的" },
  { level: "中級者", reps: 3, note: "反動なしで3回できれば十分に強い" },
  { level: "上級者", reps: 8, note: "男性の中級者に近い水準" },
];

/** 0回を「—」ではなく「0回」と出す。できないことも位置のひとつなので隠さない。 */
export const formatReps = (reps: number) => `${reps}回`;
