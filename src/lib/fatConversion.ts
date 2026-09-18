/**
 * 体脂肪とカロリーの換算の単一ソース。
 *
 * /calorie-calculator が「1g＝7kcal（＝1kg 7,000kcal）」で計算する一方、
 * 記事側はどこも「1kg＝7,200kcal」と書いていて、同じページの中ですら
 * 数字が食い違っていた。ツールと読み物で答えが変わるのは避けたいので、
 * ここを唯一の出典にしてすべてここから引く。
 */

/** 体脂肪1kgを減らすのに必要な収支マイナス（kcal）。 */
export const FAT_KCAL_PER_KG = 7200;

/** 同じ数字を1gあたりに直したもの（＝7.2kcal）。 */
export const FAT_KCAL_PER_GRAM = FAT_KCAL_PER_KG / 1000;

/** 消費カロリーを体脂肪の重さ（g）に換算する。表示は0.1g単位。 */
export const fatGramsFromKcal = (kcal: number) =>
  Math.round((kcal / FAT_KCAL_PER_GRAM) * 10) / 10;

/** 体脂肪◯kg分に必要なkcal。 */
export const kcalForFatKg = (kg: number) => Math.round(FAT_KCAL_PER_KG * kg);

/**
 * 3桁区切りの文字列。toLocaleString はロケール依存で
 * サーバとブラウザで結果がずれうるので使わない。
 */
export const formatKcal = (kcal: number) =>
  String(Math.round(kcal)).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
