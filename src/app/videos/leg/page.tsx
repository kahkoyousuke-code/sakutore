"use client";

import VideoPageLayout from "@/components/VideoPageLayout";
import { legVideos } from "@/lib/legVideos";

const filters = [
  { value: "all" as const, label: "すべて" },
  { value: "初心者" as const, label: "初心者向け" },
  { value: "中級者" as const, label: "中級者向け" },
  { value: "バーベル", label: "バーベル" },
  { value: "マシン", label: "マシン" },
  { value: "自重", label: "自重" },
];

export default function LegVideosPage() {
  return (
    <VideoPageLayout
      title="脚トレ動画"
      description="サクトレが厳選した、脚を鍛える動画ライブラリ"
      videos={legVideos}
      filters={filters}
    />
  );
}
