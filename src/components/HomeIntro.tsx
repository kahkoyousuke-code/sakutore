import Link from "next/link";
import { AUTHOR } from "@/lib/author";

const STEPS = [
  {
    n: "1",
    title: "5つの質問に答える",
    desc: "目的・使える時間・経験・鍛えたい部位・トレーニング環境を選ぶだけ。所要時間は約1分です。",
  },
  {
    n: "2",
    title: "今日の1回分が出てくる",
    desc: "種目・セット数・回数・インターバルまで決まった状態で表示されます。そのまま画面を見ながらジムで進められます。",
  },
  {
    n: "3",
    title: "次回は回復状況を見て変わる",
    desc: "作ったメニューは端末に記録され、次に作るときは前回鍛えた部位を避けた構成になります。",
  },
];

export default function HomeIntro() {
  return (
    <section className="mt-10 text-left space-y-4">
      <div className="bg-white rounded-2xl shadow-lg p-6 space-y-3 text-sm text-gray-700 leading-relaxed">
        <h2 className="font-bold text-orange-500 text-lg">サクトレとは</h2>
        <p>
          サクトレは、<strong>その日1回分の筋トレメニューを無料で作れるツール</strong>です。
          会員登録もアプリのインストールも必要ありません。
        </p>
        <p>
          「ジムには来たけれど、今日は何をやるか決めていない」
          「毎回同じ種目ばかりになってしまう」——
          そうした日のために、目的と使える時間から今日やることだけを提案します。
          1週間分のプログラムを組むツールではなく、
          <strong>今日の分だけを決めるツール</strong>という点が特徴です。
        </p>
        <p>
          メニュー作成のほかに、1RM換算・消費カロリー・適正重量の計算ツールと、
          トレーニングの基礎知識をまとめたコラムを公開しています。すべて無料で使えます。
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-6">
        <h2 className="font-bold text-orange-500 text-lg mb-4">使い方は3ステップ</h2>
        <div className="space-y-4">
          {STEPS.map(({ n, title, desc }) => (
            <div key={n} className="flex gap-3">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-orange-500 text-white font-bold text-sm flex items-center justify-center">
                {n}
              </span>
              <div className="flex-1">
                <p className="font-bold text-gray-800 text-sm">{title}</p>
                <p className="text-xs text-gray-500 mt-1 leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-orange-50 rounded-2xl p-6 space-y-3 text-sm text-gray-700 leading-relaxed">
        <h2 className="font-bold text-orange-500 text-lg">運営者について</h2>
        <p>
          {AUTHOR.name}（{AUTHOR.handle}）が運営しています。
          {AUTHOR.credentials.join("・")}。
        </p>
        <p>
          自分が始めた頃、BIG3はすべて60kg前後しか挙がりませんでした。
          何をやればいいのか分からず、雑誌のメニューをそのまま真似しては続かない、を繰り返した時期があります。
          サクトレは、その頃の自分が欲しかったものを形にしたサービスです。
        </p>
        <p>
          コラムは一般論の寄せ集めではなく、実際にやってみて分かったことを中心に書いています。
          詳しいプロフィールは
          <Link href="/about" className="text-orange-500 font-bold hover:underline">
            運営者について
          </Link>
          をご覧ください。
        </p>
      </div>
    </section>
  );
}
