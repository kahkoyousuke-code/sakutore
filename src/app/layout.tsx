import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "サクトレ - サクッとトレーニングメニュー作成",
  description:
    "6つの質問に答えるだけで、あなたにぴったりのトレーニングメニューをサクッと作成！",
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
      </head>
      <body className={`${notoSansJP.className} antialiased`}>
        {children}
        <footer className="py-6 text-center text-xs text-gray-400">
          <div className="flex justify-center gap-4">
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
          <p className="mt-2">&copy; 2025 サクトレ</p>
        </footer>
      </body>
    </html>
  );
}
