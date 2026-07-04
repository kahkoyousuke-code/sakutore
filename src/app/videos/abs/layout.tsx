import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "腹筋トレ動画まとめ｜クランチ・プランク・レッグレイズ - サクトレ",
  description:
    "腹筋を鍛えるトレーニング動画を厳選。クランチ・プランク・レッグレイズなど、初心者向けから中級者向けまでフォーム解説動画をまとめています。",
  path: "/videos/abs",
  type: "website",
});

export default function AbsVideosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
