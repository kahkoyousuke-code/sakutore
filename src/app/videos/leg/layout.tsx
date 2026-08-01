import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "脚トレ動画まとめ｜スクワット・レッグプレス・ランジ - サクトレ",
  description:
    "脚（大腿四頭筋・ハムストリング・お尻）を鍛えるトレーニング動画を厳選。スクワット・レッグプレス・ランジなど、初心者向けから中級者向けまでフォーム解説動画をまとめています。",
  path: "/videos/leg",
  type: "website",
  noindex: true,
});

export default function LegVideosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
