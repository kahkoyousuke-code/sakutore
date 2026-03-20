import { MetadataRoute } from "next";
import fs from "fs";
import path from "path";

const BASE_URL = "https://sakutore.vercel.app";
const LAST_MODIFIED = new Date("2026-03-20");

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    { url: BASE_URL, priority: 1.0 },
    { url: `${BASE_URL}/questions`, priority: 0.9 },
    { url: `${BASE_URL}/column`, priority: 0.8 },
    { url: `${BASE_URL}/videos`, priority: 0.8 },
    { url: `${BASE_URL}/guide`, priority: 0.7 },
    { url: `${BASE_URL}/faq`, priority: 0.7 },
    { url: `${BASE_URL}/about`, priority: 0.5 },
    { url: `${BASE_URL}/privacy`, priority: 0.3 },
    { url: `${BASE_URL}/terms`, priority: 0.3 },
  ].map(({ url, priority }) => ({
    url,
    lastModified: LAST_MODIFIED,
    changeFrequency: "monthly" as const,
    priority,
  }));

  const columnDir = path.join(process.cwd(), "src/app/column");
  const columnSlugs = fs
    .readdirSync(columnDir, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name);

  const columnPages = columnSlugs.map((slug) => ({
    url: `${BASE_URL}/column/${slug}`,
    lastModified: LAST_MODIFIED,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...columnPages];
}
