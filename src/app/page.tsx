import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4">
      <div className="max-w-md w-full text-center animate-slideUp">
        <div className="mb-8">
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

        <p className="text-gray-500 mb-8 leading-relaxed">
          6つの質問に答えるだけで、
          <br />
          あなたにぴったりのトレーニングメニューを
          <br />
          サクッと作成します！
        </p>

        <Link
          href="/questions"
          className="inline-block w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-2xl text-lg transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
        >
          メニューを作る
        </Link>

        <p className="mt-6 text-sm text-gray-400">所要時間：約1分</p>
      </div>
    </main>
  );
}
