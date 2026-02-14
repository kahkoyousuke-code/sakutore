"use client";

import VideoPageLayout from "@/components/VideoPageLayout";
import { backVideos } from "@/lib/backVideos";

const filters = [
  { value: "all" as const, label: "すべて" },
  { value: "初心者" as const, label: "初心者向け" },
  { value: "中級者" as const, label: "中級者向け" },
  { value: "バーベル", label: "バーベル" },
  { value: "マシン", label: "マシン" },
  { value: "自重", label: "自重" },
];

export default function BackVideosPage() {
  return (
    <VideoPageLayout
      title="背中トレ動画"
      description="サクトレが厳選した、背中を鍛える動画ライブラリ"
      videos={backVideos}
      filters={filters}
    />
  );
}
