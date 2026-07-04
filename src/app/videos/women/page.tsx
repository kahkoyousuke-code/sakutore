import Link from "next/link";
import Image from "next/image";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "女性向けトレーニング動画 - サクトレ",
  description:
    "女性向けトレーニング動画のおすすめYouTubeチャンネルを紹介。自宅でできる脚痩せ・ダイエット・腹筋引き締めなど、目的別に人気チャンネルをまとめています。",
  path: "/videos/women",
  type: "website",
});

const channels = [
  {
    href: "https://www.youtube.com/@marinatakewaki",
    name: "竹脇まりな",
    subscribers: "登録者400万人超",
    description: "明るく楽しい自宅トレ動画が人気。初心者〜中級者向け。",
    tags: ["自宅トレ", "初心者OK", "中級者"],
  },
  {
    href: "https://www.youtube.com/@HinataKato",
    name: "ひなちゃんねる（加藤ひなた）",
    subscribers: "登録者280万人超",
    description: "脚痩せ・ダイエット特化。器具なしで始められる。",
    tags: ["脚痩せ", "ダイエット", "器具なし"],
  },
  {
    href: "https://www.youtube.com/@noga",
    name: "のがちゃんねる",
    subscribers: "登録者140万人超",
    description: "腹筋・引き締め系が特に強い。毎日続けやすい動画多数。",
    tags: ["腹筋", "引き締め", "継続向き"],
  },
  {
    href: "https://www.youtube.com/@MiyakosChannel",
    name: "MiyakosChannel",
    subscribers: "女性専用パーソナルジム経営",
    description: "本格的な筋トレを女性目線で解説。",
    tags: ["本格筋トレ", "女性目線", "解説丁寧"],
  },
];

export default function WomenVideosPage() {
  return (
    <main className="min-h-screen flex flex-col items-center px-4 py-8">
      <div className="max-w-md w-full animate-slideUp">
        <div className="text-center mb-6">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Image src="/sakura.png" alt="サクラ" width={40} height={40} />
            <h1 className="text-2xl font-bold text-gray-800">
              女性向けトレーニング動画
            </h1>
          </div>
          <p className="text-sm text-gray-500">
            人気YouTubeチャンネルで自宅から気軽に始めよう
          </p>
        </div>

        <div className="space-y-3 mb-6">
          {channels.map((channel) => (
            <a
              key={channel.href}
              href={channel.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white rounded-2xl shadow-md p-5 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-gray-800 text-base leading-snug">
                    {channel.name}
                  </p>
                  <p className="text-xs text-orange-500 font-bold mt-0.5">
                    {channel.subscribers}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    {channel.description}
                  </p>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {channel.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-orange-50 text-orange-600 rounded-full px-2 py-0.5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center shrink-0 pt-1">
                  <svg
                    className="w-5 h-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/videos"
            className="text-orange-500 font-bold hover:text-orange-600 transition-colors text-sm"
          >
            動画一覧に戻る
          </Link>
        </div>
      </div>
    </main>
  );
}
