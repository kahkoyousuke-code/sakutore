/**
 * 部位ごとの1日の種目の並べ方の単一ソース。
 *
 * もとは /column/training-order に直書きされていたものを、/column/leg-training
 * でも同じ並びを使うために移した。どれも「大きい種目 → 小さい種目」の順。
 * 種目名は src/lib/exercises.ts と同じ表記にそろえる。
 */
export type DayOrder = {
  day: string;
  /** 表示用の並び（「→」区切り）。 */
  order: string;
};

export const DAY_ORDER: DayOrder[] = [
  {
    day: "胸の日",
    order: "ベンチプレス → インクラインダンベルプレス → ダンベルフライ → ケーブルクロスオーバー",
  },
  {
    day: "背中の日",
    order: "懸垂（またはラットプルダウン）→ ベントオーバーロウ → シーテッドロウ → ストレートアームプルダウン",
  },
  {
    day: "脚の日",
    order: "スクワット → レッグプレス → ルーマニアンデッドリフト → レッグエクステンション・レッグカール → カーフレイズ",
  },
  {
    day: "肩・腕の日",
    order: "ショルダープレス → サイドレイズ → リアレイズ → バーベルカール → トライセプスプッシュダウン",
  },
];

/** 日の名前で引く。記事側で並びを直書きさせないための入口。 */
export const dayOrderFor = (day: string): DayOrder => {
  const row = DAY_ORDER.find((r) => r.day === day);
  if (!row) throw new Error(`unknown day: ${day}`);
  return row;
};
