"use client";

import VideoPageLayout from "@/components/VideoPageLayout";
import { absVideos } from "@/lib/absVideos";

const filters = [
  { value: "all" as const, label: "すべて" },
  { value: "初心者" as const, label: "初心者向け" },
  { value: "中級者" as const, label: "中級者向け" },
  { value: "自重", label: "自重" },
];

export default function AbsVideosPage() {
  return (
    <VideoPageLayout
      title="腹筋トレ動画"
      description="サクトレが厳選した、腹筋を鍛える動画ライブラリ"
      videos={absVideos}
      filters={filters}
    />
  );
}
