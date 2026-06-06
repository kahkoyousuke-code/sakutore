import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "RM換算計算ツール | ベンチプレス・スクワット・デッドリフトの1RM計算",
  description:
    "重量と回数を入力するだけでビッグ3の1RMと全RM換算表を自動計算。Epley式採用で高精度。筋トレの強度設定に役立つ無料ツール。",
};

export default function RmCalculatorLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
