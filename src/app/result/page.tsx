import { Suspense } from "react";
import { Metadata } from "next";
import ResultClient from "./ResultClient";

const BASE_URL = "https://sakutore.jp";

type Props = {
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const purpose = (searchParams.q0 as string) || "";
  const parts = (searchParams.q3 as string) || "";

  const ogUrl =
    `${BASE_URL}/api/og` +
    `?purpose=${encodeURIComponent(purpose)}` +
    `&parts=${encodeURIComponent(parts)}`;

  const description = purpose
    ? `${purpose}向けの今日の筋トレメニューをAIが無料作成。質問に答えるだけ！`
    : "AIが今日のあなた専用の筋トレメニューを無料作成。質問に答えるだけ！";

  return {
    title: "サクトレ | あなた専用の筋トレメニュー",
    description,
    openGraph: {
      title: "AIがあなた専用の筋トレメニューを作成！",
      description,
      images: [{ url: ogUrl, width: 1200, height: 630, alt: "サクトレ - あなた専用の筋トレメニュー" }],
      url: BASE_URL,
      siteName: "サクトレ",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "AIがあなた専用の筋トレメニューを作成！",
      description,
      images: [ogUrl],
    },
  };
}

export default function ResultPage() {
  return (
    <main className="min-h-screen flex flex-col items-center px-4 py-8">
      <Suspense fallback={<div className="text-center text-gray-400 mt-20">読み込み中...</div>}>
        <ResultClient />
      </Suspense>
    </main>
  );
}
