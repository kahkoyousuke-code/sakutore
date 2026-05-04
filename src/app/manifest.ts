import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "サクトレ",
    short_name: "サクトレ",
    description:
      "6つの質問に答えるだけで、あなた専用の筋トレメニューをサクッと作成",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#f97316",
    orientation: "portrait",
    screenshots: [
      {
        src: "/screenshot-mobile.png",
        sizes: "390x844",
        type: "image/png",
        form_factor: "narrow",
        label: "サクトレ - AIが筋トレメニューを作成",
      },
      {
        src: "/ogp.png",
        sizes: "1200x630",
        type: "image/png",
        form_factor: "wide",
        label: "サクトレ - AIが筋トレメニューを作成",
      },
    ],
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
