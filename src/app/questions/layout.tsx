import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "今日の筋トレメニューを作る｜5つの質問で約1分 - サクトレ",
  description:
    "目的・時間・経験・部位・環境の5つの質問に答えるだけで、AIが今日のあなた専用の筋トレメニューを無料で作成します。所要時間は約1分。",
  path: "/questions",
  type: "website",
});

export default function QuestionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
