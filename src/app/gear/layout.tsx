import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "筋トレおすすめギア｜10年トレーニーが実際に使って選んだ厳選9選",
  description:
    "筋トレ歴10年・大会出場経験のyousukeが実際に使って選んだプロテイン・ベルト・パワーグリップ・リストラップを紹介。初心者から中級者向けの厳選ギアまとめ。",
};

export default function GearLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
