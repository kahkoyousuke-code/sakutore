import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "筋トレカロリー消費計算ツール | 種目別・体重別に自動計算",
  description:
    "体重・種目・時間を入力するだけで消費カロリーと脂肪換算量を自動計算。ベンチプレス・スクワット・ランニングなど8種目対応。無料で使えます。",
  path: "/calorie-calculator",
  type: "website",
});

export default function CalorieCalculatorLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
