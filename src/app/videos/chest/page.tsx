"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { chestVideos, ChestVideo } from "@/lib/chestVideos";

type FilterType = "all" | "初心者" | "中級者" | "バーベル" | "ダンベル" | "自重";

function VideoCard({ video }: { video: ChestVideo }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      {/* サムネイル部分 - YouTubeで検索 */}
      <a
        href={video.youtubeUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block relative aspect-video bg-gray-100 group"
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
          <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
            <svg
              className="w-8 h-8 text-white ml-1"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
          <span className="text-sm text-gray-500 font-semibold">YouTubeで見る</span>
        </div>
      </a>

      {/* 動画情報 */}
      <div className="p-4">
        <div className="flex items-start gap-2 mb-2">
          <span
            className={`text-xs font-bold px-2 py-1 rounded ${
              video.level === "初心者"
                ? "bg-green-100 text-green-700"
                : video.level === "中級者"
                ? "bg-blue-100 text-blue-700"
                : "bg-purple-100 text-purple-700"
            }`}
          >
            {video.level}
          </span>
          <span className="text-xs font-semibold px-2 py-1 rounded bg-orange-100 text-orange-700">
            {video.equipment}
          </span>
        </div>

        <h3 className="font-bold text-gray-800 mb-1 line-clamp-2">
          {video.title}
        </h3>
        <p className="text-xs text-gray-500 mb-3">{video.youtuber}</p>

        {/* サクトレからのアドバイス */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full text-left"
        >
          <div className="flex items-center gap-2 text-orange-600 text-sm font-semibold mb-2">
            <Image
              src="/sakura.png"
              alt="サクラ"
              width={20}
              height={20}
              className="rounded-full"
            />
            <span>サクトレからのアドバイス</span>
            <svg
              className={`w-4 h-4 transition-transform ${isExpanded ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </button>

        {isExpanded && (
          <div className="bg-orange-50 rounded-lg p-3 text-sm text-gray-700 animate-fadeIn">
            {video.advice}
          </div>
        )}
      </div>
    </div>
  );
}

export default function ChestVideosPage() {
  const [filter, setFilter] = useState<FilterType>("all");

  const filteredVideos = chestVideos.filter((video) => {
    if (filter === "all") return true;
    if (filter === "初心者" || filter === "中級者") {
      return video.level === filter;
    }
    return video.equipment === filter;
  });

  const filters: { value: FilterType; label: string }[] = [
    { value: "all", label: "すべて" },
    { value: "初心者", label: "初心者向け" },
    { value: "中級者", label: "中級者向け" },
    { value: "バーベル", label: "バーベル" },
    { value: "ダンベル", label: "ダンベル" },
    { value: "自重", label: "自重" },
  ];

  return (
    <main className="min-h-screen px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* ヘッダー */}
        <div className="text-center mb-8 animate-slideUp">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Image
              src="/sakura.png"
              alt="サクラ"
              width={40}
              height={40}
            />
            <h1 className="text-3xl font-bold text-gray-800">胸トレ動画</h1>
          </div>
          <p className="text-gray-600">
            サクトレが厳選した、胸を鍛える動画ライブラリ
          </p>
        </div>

        {/* フィルター */}
        <div className="flex gap-2 mb-6 overflow-x-auto pb-2 scrollbar-hide">
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setFilter(f.value)}
              className={`px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all ${
                filter === f.value
                  ? "bg-orange-500 text-white shadow-md"
                  : "bg-white text-gray-600 border border-gray-200 hover:border-orange-300"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* 動画一覧 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {filteredVideos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>

        {/* 戻るボタン */}
        <div className="text-center">
          <Link
            href="/"
            className="inline-block px-6 py-3 rounded-xl border-2 border-orange-500 text-orange-500 font-bold hover:bg-orange-50 transition-colors"
          >
            トップに戻る
          </Link>
        </div>
      </div>
    </main>
  );
}
