import Image from "next/image";
import Link from "next/link";
import WorkoutCalendar from "@/components/WorkoutCalendar";
import MenuHistoryList from "@/components/MenuHistoryList";
import TodaySuggestion from "@/components/TodaySuggestion";
import ResetDataButton from "@/components/ResetDataButton";
import HomeIntro from "@/components/HomeIntro";

function ToolCard({
  href,
  icon,
  title,
  description,
}: {
  href: string;
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <Link
      href={href}
      className="flex items-center gap-3 w-full bg-white hover:bg-gray-50 rounded-2xl border-2 border-gray-100 p-4 transition-all duration-200 hover:shadow-md hover:border-orange-200"
    >
      <span className="text-2xl flex-shrink-0">{icon}</span>
      <span className="flex-1">
        <span className="block font-bold text-gray-800">{title}</span>
        <span className="block text-xs text-gray-500 mt-0.5 leading-relaxed">
          {description}
        </span>
      </span>
      <span className="text-gray-300">→</span>
    </Link>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 py-8">
      <div className="max-w-md w-full text-center animate-slideUp">
        <div className="mb-6">
          <Image
            src="/sakura.png"
            alt="サクラ"
            width={150}
            height={150}
            className="mx-auto mb-4"
            priority
          />
          <h1 className="text-4xl font-bold text-orange-500 mb-2">サクトレ</h1>
          <p className="text-gray-600 text-lg">
            サクッとトレーニングメニュー作成
          </p>
        </div>

        <TodaySuggestion />

        <p className="text-gray-500 mt-6 mb-4 leading-relaxed">
          いくつかの質問に答えるだけで、
          <br />
          今日のあなたにぴったりのメニューを
          <br />
          サクッと作成します!
        </p>

        <Link
          href="/questions"
          className="inline-block w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-2xl text-lg transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
        >
          今日のメニューを作る
        </Link>

        <Link
          href="/guide"
          className="inline-block mt-2 text-sm text-orange-400 hover:text-orange-600 transition-colors"
        >
          使い方・機能紹介を見る →
        </Link>

        <p className="mt-3 text-sm text-gray-400">所要時間:約1分</p>

        <MenuHistoryList />
        <WorkoutCalendar />

        <section className="mt-8 text-left">
          <h2 className="text-sm font-bold text-gray-400 tracking-wider mb-3 pl-1">
            無料ツール
          </h2>
          <div className="space-y-3">
            <ToolCard
              href="/rm-calculator"
              icon="🏆"
              title="RM換算計算ツール"
              description="重量×回数から1RMを算出。ビッグ3対応・強度ゾーン表つき"
            />
            <ToolCard
              href="/calorie-calculator"
              icon="🔥"
              title="消費カロリー計算ツール"
              description="種目と時間から消費カロリーと脂肪換算をサクッと計算"
            />
            <ToolCard
              href="/weight-checker"
              icon="💪"
              title="筋トレ適正重量診断"
              description="体重×レベルからビッグ3の適正重量と次の目標がわかる"
            />
          </div>
        </section>

        <section className="mt-8 text-left">
          <h2 className="text-sm font-bold text-gray-400 tracking-wider mb-3 pl-1">
            学ぶ・そろえる
          </h2>
          <div className="space-y-3">
            <ToolCard
              href="/videos"
              icon="🎬"
              title="トレーニング動画"
              description="部位別に厳選したフォーム解説動画で正しく効かせる"
            />
            <ToolCard
              href="/column"
              icon="📖"
              title="筋トレコラム"
              description="頻度・栄養・休息など、続けるための知識を23本で解説"
            />
            <ToolCard
              href="/gear"
              icon="🏋️"
              title="おすすめギア"
              description="自宅トレ・ジムがはかどる厳選アイテムを紹介"
            />
          </div>
        </section>

        <section className="mt-8 text-left">
          <h2 className="text-sm font-bold text-gray-400 tracking-wider mb-3 pl-1">
            姉妹サービス
          </h2>
          <div className="space-y-3">
            <a
              href={process.env.NEXT_PUBLIC_SAKUMESHI_URL ?? "https://sakumeshi.app/"}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 w-full bg-orange-50 hover:bg-orange-100 rounded-2xl border-2 border-orange-200 p-4 transition-all duration-200 hover:shadow-md"
            >
              <span className="text-2xl flex-shrink-0">🍚</span>
              <span className="flex-1">
                <span className="block font-bold text-orange-600">サクメシ</span>
                <span className="block text-xs text-gray-500 mt-0.5">
                  食事メニューもAIにおまかせ
                </span>
              </span>
              <span className="text-orange-300">→</span>
            </a>
            <a
              href="https://sakusapu.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 w-full bg-orange-50 hover:bg-orange-100 rounded-2xl border-2 border-orange-200 p-4 transition-all duration-200 hover:shadow-md"
            >
              <span className="text-2xl flex-shrink-0">🧴</span>
              <span className="flex-1">
                <span className="block font-bold text-orange-600">サクサプ</span>
                <span className="block text-xs text-gray-500 mt-0.5">
                  あなたに合うサプリを診断
                </span>
              </span>
              <span className="text-orange-300">→</span>
            </a>
          </div>
        </section>

        <HomeIntro />

        <ResetDataButton />
      </div>
    </main>
  );
}
