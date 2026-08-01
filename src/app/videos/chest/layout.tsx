import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "胸トレ動画まとめ｜ベンチプレス・ダンベルフライ・腕立て伏せ - サクトレ",
  description:
    "大胸筋を鍛えるトレーニング動画を厳選。ベンチプレス・ダンベルフライ・腕立て伏せなど、初心者向けから中級者向けまでフォーム解説動画をまとめています。",
  path: "/videos/chest",
  type: "website",
  noindex: true,
});

export default function ChestVideosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
