"use client";

import VideoPageLayout from "@/components/VideoPageLayout";
import { shoulderVideos } from "@/lib/shoulderVideos";

const filters = [
  { value: "all" as const, label: "すべて" },
  { value: "初心者" as const, label: "初心者向け" },
  { value: "中級者" as const, label: "中級者向け" },
  { value: "バーベル", label: "バーベル" },
  { value: "ダンベル", label: "ダンベル" },
  { value: "自重", label: "自重" },
];

export default function ShoulderVideosPage() {
  return (
    <VideoPageLayout
      title="肩トレ動画"
      description="サクトレが厳選した、肩を鍛える動画ライブラリ"
      videos={shoulderVideos}
      filters={filters}
    />
  );
}
