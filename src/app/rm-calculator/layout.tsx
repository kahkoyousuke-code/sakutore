import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "RM計算機 | ベンチプレス・スクワット・デッドリフトの1RM換算ツール",
  description:
    "RM計算機・1RM計算ツール。重量と回数を入力するだけでビッグ3の1RMと全RM換算表を自動計算。Epley式採用で高精度。筋トレの強度設定に役立つ無料ツールです。",
  path: "/rm-calculator",
  type: "website",
});

export default function RmCalculatorLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
