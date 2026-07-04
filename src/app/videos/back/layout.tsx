import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "背中トレ動画まとめ｜デッドリフト・懸垂・ラットプルダウン - サクトレ",
  description:
    "背中（広背筋・僧帽筋）を鍛えるトレーニング動画を厳選。デッドリフト・懸垂・ラットプルダウンなど、初心者向けから中級者向けまでフォーム解説動画をまとめています。",
  path: "/videos/back",
  type: "website",
});

export default function BackVideosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
