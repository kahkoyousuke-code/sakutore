import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "筋トレおすすめギア｜フィジーク入賞トレーニーが実際に使って選んだ厳選9選",
  description:
    "筋トレ歴15年・フィジーク大会入賞のmotsuが実際に使って選んだプロテイン・ベルト・パワーグリップ・リストラップを紹介。初心者から中級者向けの厳選ギアまとめ。",
};

export default function GearLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
