import type { Metadata } from "next";

const SITE_URL = "https://sakutore.vercel.app";
const SITE_NAME = "サクトレ";
const OG_IMAGE = `${SITE_URL}/ogp.png`;

/**
 * ページ別のmetadataを生成する。
 * Next.jsはopenGraph/twitterを親から継承するため、子ページで明示しないと
 * SNSシェア時に全ページ同じ汎用OGPカードになってしまう。これを防ぐ。
 * canonicalも付与してインデックスの正規化を助ける。
 */
export function pageMetadata({
  title,
  description,
  path,
  type = "article",
}: {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
}): Metadata {
  const url = `${SITE_URL}${path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: title }],
      locale: "ja_JP",
      type,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [OG_IMAGE],
    },
  };
}
