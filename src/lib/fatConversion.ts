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

/**
 * 体脂肪率を目標まで下げるのに落とす必要がある脂肪の重さ（kg）。
 *
 * 除脂肪量（筋肉・骨・水分）が変わらず、減ったぶんがすべて脂肪だという
 * 前提の理論値。実際には多少の筋肉も落ちるので、下振れの目安として使う。
 */
export const fatLossToReachPercent = (
  weightKg: number,
  currentPercent: number,
  targetPercent: number
) => {
  const leanMass = weightKg * (1 - currentPercent / 100);
  const goalWeight = leanMass / (1 - targetPercent / 100);
  return Math.round((weightKg - goalWeight) * 10) / 10;
};

/** 1日あたりの赤字が決まっているとき、その減量にかかる日数。 */
export const daysToLoseFat = (fatKg: number, dailyDeficitKcal: number) =>
  Math.round((fatKg * FAT_KCAL_PER_KG) / dailyDeficitKcal);
