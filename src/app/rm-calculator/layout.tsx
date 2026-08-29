import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "RM換算表と1RM計算機 | ベンチプレス・スクワット・デッドリフト対応",
  description:
    "1RMに対する割合の早見表と、1RM40〜140kg別の重量換算表を掲載。重量と回数を入れれば計算機が自動で1RMを換算します。Epley式とBrzycki式の差、種目ごとの当たりやすさまで解説。",
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
