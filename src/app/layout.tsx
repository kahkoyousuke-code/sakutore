import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import ServiceWorkerRegistration from "@/components/ServiceWorkerRegistration";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import { AUTHOR, AUTHOR_SAME_AS } from "@/lib/author";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const siteUrl = "https://sakutore.jp";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "サクトレ",
  url: siteUrl,
  description:
    "いくつかの質問に答えるだけで、AIが今日のあなた専用の筋トレメニューを無料で作成するWebアプリ。",
  applicationCategory: "HealthApplication",
  operatingSystem: "Web",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "JPY",
  },
  inLanguage: "ja",
  creator: {
    "@type": "Person",
    name: AUTHOR.name,
    url: `${siteUrl}/about`,
    description: "筋トレ歴15年・フィジーク大会入賞",
    sameAs: AUTHOR_SAME_AS,
  },
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "サクトレ | AIがあなた専用の筋トレメニューを作成",
  description:
    "いくつかの質問に答えるだけで、今日のあなたにぴったりのトレーニングメニューをサクッと作成。初心者から中級者まで、無料で使えます。",
  openGraph: {
    title: "サクトレ | AIがあなた専用の筋トレメニューを作成",
    description:
      "いくつかの質問に答えるだけで、今日のあなたにぴったりのトレーニングメニューをサクッと作成。初心者から中級者まで、無料で使えます。",
    url: siteUrl,
    siteName: "サクトレ",
    images: [
      {
        url: `${siteUrl}/ogp.png`,
        width: 1200,
        height: 630,
        alt: "サクトレ - AIがあなた専用の筋トレメニューを作成",
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "サクトレ | AIがあなた専用の筋トレメニューを作成",
    description:
      "いくつかの質問に答えるだけで、今日のあなたにぴったりのトレーニングメニューをサクッと作成。初心者から中級者まで、無料で使えます。",
    images: [`${siteUrl}/ogp.png`],
  },
  icons: {
    icon: "/icon-192.png",
    apple: "/icon-192.png",
  },
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "サクトレ",
  },
  verification: {
    google: [
      "ZjWPPXKFHLaA28ucYVXLYd-MO0aZCkUEjSQ96J8qPJE",
      "2Wv1DNAoAAx3n2WXEVoMJfF8Z1Ob0H1CGDti9WrAggA",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2851344861391489"
          crossOrigin="anonymous"
        />
        <meta name="theme-color" content="#f97316" />
        <meta name="mobile-web-app-capable" content="yes" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${notoSansJP.className} antialiased`}>
        <GoogleAnalytics />
        <ServiceWorkerRegistration />
        <header className="py-4 px-4">
          <Link href="/" className="flex items-center justify-center gap-2">
            <Image
              src="/sakura.png"
              alt="サクラ"
              width={32}
              height={32}
            />
            <span className="text-xl font-bold text-orange-500">サクトレ</span>
          </Link>
        </header>
        {children}
        <footer className="py-6 text-center text-xs text-gray-400">
          <div className="mb-1">
            <a
              href={process.env.NEXT_PUBLIC_SAKUMESHI_URL ?? "https://sakumeshi.app/"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-orange-500 font-semibold hover:text-orange-600 transition-colors"
            >
              🍚 食事プランも作ろう → サクメシ
            </a>
          </div>
          <div className="mb-3">
            <a
              href="https://sakusapu.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-orange-500 font-semibold hover:text-orange-600 transition-colors"
            >
              🧴 サプリも診断してみよう → サクサプ
            </a>
          </div>
          <div className="flex justify-center gap-4 flex-wrap mb-2 px-4">
            <Link
              href="/rm-calculator"
              className="hover:text-gray-600 transition-colors"
            >
              RM換算計算
            </Link>
            <Link
              href="/calorie-calculator"
              className="hover:text-gray-600 transition-colors"
            >
              消費カロリー計算
            </Link>
            <Link
              href="/weight-checker"
              className="hover:text-gray-600 transition-colors"
            >
              適正重量診断
            </Link>
            <Link
              href="/videos"
              className="hover:text-gray-600 transition-colors"
            >
              トレーニング動画
            </Link>
          </div>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link
              href="/guide"
              className="hover:text-gray-600 transition-colors"
            >
              使い方ガイド
            </Link>
            <Link
              href="/faq"
              className="hover:text-gray-600 transition-colors"
            >
              よくある質問
            </Link>
            <Link
              href="/about"
              className="hover:text-gray-600 transition-colors"
            >
              運営者情報
            </Link>
            <Link
              href="/column"
              className="hover:text-gray-600 transition-colors"
            >
              コラム
            </Link>
            <Link
              href="/gear"
              className="hover:text-gray-600 transition-colors"
            >
              おすすめギア
            </Link>
          </div>
          <div className="flex justify-center gap-4 mt-2">
            <Link
              href="/privacy"
              className="hover:text-gray-600 transition-colors"
            >
              プライバシーポリシー
            </Link>
            <Link
              href="/terms"
              className="hover:text-gray-600 transition-colors"
            >
              利用規約
            </Link>
          </div>
          <p className="mt-2">&copy; 2025-2026 サクトレ</p>
        </footer>
      </body>
    </html>
  );
}
