import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "肩トレ動画まとめ｜オーバーヘッドプレス・サイドレイズ - サクトレ",
  description:
    "肩（三角筋）を鍛えるトレーニング動画を厳選。オーバーヘッドプレス・サイドレイズなど、初心者向けから中級者向けまでフォーム解説動画をまとめています。",
  path: "/videos/shoulder",
  type: "website",
  noindex: true,
});

export default function ShoulderVideosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
