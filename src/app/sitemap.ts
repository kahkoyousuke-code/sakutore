import { MetadataRoute } from "next";
import fs from "fs";
import path from "path";
import { lastModifiedFor } from "@/lib/lastModified";

const BASE_URL = "https://sakutore.jp";

/**
 * 収録するのは読み物として実体のあるページだけにする。
 * /videos（外部動画へのリンク集）と /chat・/result（ツールのUIのみ）は
 * noindex なのでサイトマップにも載せない。申告と実態を一致させる。
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    { path: "/", priority: 1.0 },
    { path: "/column", priority: 0.9 },
    { path: "/questions", priority: 0.8 },
    { path: "/rm-calculator", priority: 0.8 },
    { path: "/weight-checker", priority: 0.8 },
    { path: "/calorie-calculator", priority: 0.8 },
    { path: "/guide", priority: 0.7 },
    { path: "/faq", priority: 0.7 },
    { path: "/gear", priority: 0.6 },
    { path: "/about", priority: 0.5 },
    { path: "/privacy", priority: 0.3 },
    { path: "/terms", priority: 0.3 },
  ].map(({ path: pagePath, priority }) => ({
    url: pagePath === "/" ? BASE_URL : `${BASE_URL}${pagePath}`,
    // Each page carries its own last significant update (see lastModified.ts).
    lastModified: lastModifiedFor(pagePath),
    changeFrequency: "monthly" as const,
    priority,
  }));

  const columnDir = path.join(process.cwd(), "src/app/column");
  const columnSlugs = fs
    .readdirSync(columnDir, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name);

  // コラムはサイトで最も中身のあるページ群なので優先度を高く申告する。
  const columnPages = columnSlugs.map((slug) => ({
    url: `${BASE_URL}/column/${slug}`,
    lastModified: lastModifiedFor(`/column/${slug}`),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticPages, ...columnPages];
}
