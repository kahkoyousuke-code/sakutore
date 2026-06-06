import { MetadataRoute } from "next";

type Screenshot = NonNullable<MetadataRoute.Manifest["screenshots"]>[number] & {
  form_factor?: string;
  label?: string;
};

const screenshots: Screenshot[] = [
  { src: "/screenshot-mobile.png", sizes: "390x844", type: "image/png", form_factor: "narrow", label: "サクトレ - AIが筋トレメニューを作成" },
  { src: "/ogp.png", sizes: "1200x630", type: "image/png", form_factor: "wide", label: "サクトレ - AIが筋トレメニューを作成" },
];

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "サクトレ",
    short_name: "サクトレ",
    description:
      "いくつかの質問に答えるだけで、今日のあなた専用の筋トレメニューをサクッと作成",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#f97316",
    orientation: "portrait",
    screenshots: screenshots as MetadataRoute.Manifest["screenshots"],
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
