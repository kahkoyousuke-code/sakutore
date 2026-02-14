import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "トレーニング動画 - サクトレ",
  description:
    "部位別のトレーニング動画を厳選して紹介。胸・背中・肩・腕・脚・腹筋の各部位ごとに、初心者から中級者向けの動画をまとめています。",
};

const categories = [
  {
    href: "/videos/chest",
    title: "胸トレ動画",
    description: "ベンチプレス・ダンベルフライ・腕立て伏せなど",
    count: 9,
  },
  {
    href: "/videos/back",
    title: "背中トレ動画",
    description: "デッドリフト・懸垂・ラットプルダウンなど",
    count: 8,
  },
  {
    href: "/videos/shoulder",
    title: "肩トレ動画",
    description: "オーバーヘッドプレス・サイドレイズなど",
    count: 7,
  },
  {
    href: "/videos/arm",
    title: "腕トレ動画",
    description: "アームカール・トライセプス系種目など",
    count: 7,
  },
  {
    href: "/videos/leg",
    title: "脚トレ動画",
    description: "スクワット・レッグプレス・ランジなど",
    count: 8,
  },
  {
    href: "/videos/abs",
    title: "腹筋トレ動画",
    description: "クランチ・プランク・レッグレイズなど",
    count: 7,
  },
];

export default function VideosPage() {
  return (
    <main className="min-h-screen flex flex-col items-center px-4 py-8">
      <div className="max-w-md w-full animate-slideUp">
        <div className="text-center mb-6">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Image
              src="/sakura.png"
              alt="サクラ"
              width={40}
              height={40}
            />
            <h1 className="text-2xl font-bold text-gray-800">
              トレーニング動画
            </h1>
          </div>
          <p className="text-sm text-gray-500">
            部位別に厳選した動画で正しいフォームを学ぼう
          </p>
        </div>

        <div className="space-y-3 mb-6">
          {categories.map((cat) => (
            <Link
              key={cat.href}
              href={cat.href}
              className="block bg-white rounded-2xl shadow-md p-5 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-bold text-gray-800 text-base">
                    {cat.title}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    {cat.description}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-orange-500 font-bold">
                    {cat.count}本
                  </span>
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
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/"
            className="text-orange-500 font-bold hover:text-orange-600 transition-colors text-sm"
          >
            トップに戻る
          </Link>
        </div>
      </div>
    </main>
  );
}
