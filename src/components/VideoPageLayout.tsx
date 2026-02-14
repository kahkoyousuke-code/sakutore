"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import VideoCard from "@/components/VideoCard";
import { Video, FilterType } from "@/lib/videoTypes";

interface FilterOption {
  value: FilterType;
  label: string;
}

interface VideoPageLayoutProps {
  title: string;
  description: string;
  videos: Video[];
  filters: FilterOption[];
}

export default function VideoPageLayout({
  title,
  description,
  videos,
  filters,
}: VideoPageLayoutProps) {
  const [filter, setFilter] = useState<FilterType>("all");

  const filteredVideos = videos.filter((video) => {
    if (filter === "all") return true;
    if (filter === "初心者" || filter === "中級者") {
      return video.level === filter;
    }
    return video.equipment === filter;
  });

  return (
    <main className="min-h-screen px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8 animate-slideUp">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Image
              src="/sakura.png"
              alt="サクラ"
              width={40}
              height={40}
            />
            <h1 className="text-3xl font-bold text-gray-800">{title}</h1>
          </div>
          <p className="text-gray-600">{description}</p>
        </div>

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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {filteredVideos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>

        <div className="text-center space-y-3">
          <Link
            href="/videos"
            className="inline-block px-6 py-3 rounded-xl border-2 border-orange-500 text-orange-500 font-bold hover:bg-orange-50 transition-colors"
          >
            動画一覧に戻る
          </Link>
        </div>
      </div>
    </main>
  );
}
