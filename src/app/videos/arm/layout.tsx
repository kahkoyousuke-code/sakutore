import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "腕トレ動画まとめ｜アームカール・トライセプス種目 - サクトレ",
  description:
    "腕（上腕二頭筋・上腕三頭筋）を鍛えるトレーニング動画を厳選。アームカール・トライセプス系種目など、初心者向けから中級者向けまでフォーム解説動画をまとめています。",
  path: "/videos/arm",
  type: "website",
});

export default function ArmVideosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
