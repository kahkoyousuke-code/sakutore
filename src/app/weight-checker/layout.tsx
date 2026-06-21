import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "筋トレ適正重量診断 | ビッグ3の目標重量を体重比で判定",
  description:
    "性別・体重・トレーニング経験を入力するだけでベンチプレス・スクワット・デッドリフトの適正重量を診断。初心者〜上級者まで対応。無料。",
  path: "/weight-checker",
  type: "website",
});

export default function WeightCheckerLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
