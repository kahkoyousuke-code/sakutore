import type { Metadata } from "next";

const SITE_URL = "https://sakutore.jp";
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
  noindex = false,
}: {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  /**
   * 検索結果に載せたくないページ（外部リンク集・ツールのUIのみで
   * 読み物としての実体がないページ）に付ける。発リンクは辿らせたいので
   * follow は残す。
   */
  noindex?: boolean;
}): Metadata {
  const url = `${SITE_URL}${path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    ...(noindex
      ? { robots: { index: false, follow: true } }
      : {}),
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
