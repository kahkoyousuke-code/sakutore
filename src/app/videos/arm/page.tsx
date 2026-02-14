"use client";

import VideoPageLayout from "@/components/VideoPageLayout";
import { armVideos } from "@/lib/armVideos";

const filters = [
  { value: "all" as const, label: "すべて" },
  { value: "初心者" as const, label: "初心者向け" },
  { value: "中級者" as const, label: "中級者向け" },
  { value: "ダンベル", label: "ダンベル" },
  { value: "マシン", label: "マシン" },
  { value: "自重", label: "自重" },
];

export default function ArmVideosPage() {
  return (
    <VideoPageLayout
      title="腕トレ動画"
      description="サクトレが厳選した、腕を鍛える動画ライブラリ"
      videos={armVideos}
      filters={filters}
    />
  );
}
