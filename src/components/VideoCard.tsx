"use client";

import { useState } from "react";
import Image from "next/image";
import { Video } from "@/lib/videoTypes";

export default function VideoCard({ video }: { video: Video }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
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
