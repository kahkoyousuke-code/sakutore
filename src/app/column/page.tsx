import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "筋トレコラム - サクトレ",
  description:
    "筋トレ初心者から中級者に向けたコラム記事。トレーニングの基礎知識、栄養、休息、ストレッチなど、筋トレに役立つ情報をわかりやすく解説します。",
  path: "/column",
  type: "website",
});

const categories = [
  {
    name: "🔰 はじめての筋トレ",
    articles: [
      {
        href: "/column/beginner-guide",
        title: "筋トレ初心者が最初にやるべき5つのこと",
        description:
          "目標設定、正しいフォーム、大きな筋肉から鍛えるコツなど、初心者が押さえるべきポイントを解説します。",
      },
      {
        href: "/column/gym-beginner",
        title: "ジム初心者が最初にやるべきマシン5選",
        description:
          "レッグプレス・ラットプルダウンなど初心者向けマシンの使い方とNG行動をわかりやすく紹介します。",
      },
      {
        href: "/column/personal-gym-cost",
        title: "パーソナルジムの費用相場｜普通のジムと比べて高いのか",
        description:
          "パーソナルジム・24時間ジム・公営ジムなどの費用を比較表で整理。指導にお金を払う価値はあるのか、15年自力で通った筆者が正直に考えます。",
      },
      {
        href: "/column/over40",
        title: "40代からの筋トレ入門",
        description:
          "40代から始めるメリット、無理のない始め方、年齢を考慮した注意点をわかりやすく解説します。",
      },
      {
        href: "/column/motivation",
        title: "筋トレのモチベーション維持法",
        description:
          "続けるためのコツ、SMARTな目標設定の方法、停滞期の乗り越え方を具体的に解説します。",
      },
      {
        href: "/column/10years",
        title: "10年筋トレを続けてわかったこと",
        description:
          "10年継続することで得られる体の変化・メンタルの変化・続けてよかったことを詳しく解説します。",
      },
    ],
  },
  {
    name: "👩 女性向け・ダイエット",
    articles: [
      {
        href: "/column/women-muscle-slim",
        title: "女性が筋トレしても「太くならない」理由を解説",
        description:
          "筋トレで体が大きくなるという誤解を解消し、女性こそ筋トレすべき理由をホルモンの違いやデータをもとに解説します。",
      },
      {
        href: "/column/muscle-vs-cardio-women",
        title: "脂肪燃焼に筋トレが有酸素運動より効果的な理由",
        description:
          "ランニングより筋トレの方が長期的に痩せやすい理由を、基礎代謝とアフターバーン効果から解説します。",
      },
      {
        href: "/column/women-training-timing",
        title: "女性が筋トレで痩せやすい時間帯と頻度",
        description:
          "脂肪燃焼効果が高まる時間帯、週の最適な頻度、忙しい人でも続けられるスケジュールを紹介します。",
      },
      {
        href: "/column/diet-rebound-muscle",
        title: "食事制限だけでリバウンドする理由と筋トレの関係",
        description:
          "食事制限だけでは筋肉が落ちてリバウンドしやすくなる仕組みと、筋トレを組み合わせるべき理由を解説します。",
      },
      {
        href: "/column/women-40s-training",
        title: "40代女性が筋トレで痩せにくい理由と対策",
        description:
          "40代以降のホルモン変化・基礎代謝低下の仕組みと、それに合わせた効果的なトレーニング・食事法を解説します。",
      },
      {
        href: "/column/metabolism",
        title: "筋トレで痩せる仕組みを解説",
        description:
          "基礎代謝・筋肉量・アフターバーン効果など、筋トレがダイエットに効く理由を有酸素運動と比較しながら解説します。",
      },
    ],
  },
  {
    name: "🍗 栄養・食事",
    articles: [
      {
        href: "/column/protein",
        title: "筋トレに必要なタンパク質の量と摂り方",
        description:
          "体重あたりの必要量、高タンパク食材、効果的な摂取タイミングなど、栄養面から筋トレをサポートします。",
      },
      {
        href: "/column/protein-guide",
        title: "プロテインの選び方ガイド",
        description:
          "ホエイ・カゼイン・ソイの違い、飲むタイミング、目的別のおすすめ選び方を解説します。",
      },
      {
        href: "/column/alcohol",
        title: "筋トレとお酒の付き合い方",
        description:
          "アルコールが筋肉に与える影響、飲んでもOKなタイミング、お酒好きでも成果を出すコツを紹介します。",
      },
    ],
  },
  {
    name: "😴 頻度・休息・コンディション",
    articles: [
      {
        href: "/column/frequency",
        title: "週に何回筋トレすればいい？最適な頻度を解説",
        description:
          "初心者・中級者・上級者のレベル別に最適なトレーニング頻度と分割法の考え方を紹介します。",
      },
      {
        href: "/column/split-routine",
        title: "筋トレ分割法の早見表｜週2・3・4回それぞれの組み方",
        description:
          "週の回数別に最適な分割法（全身法・上下2分割・PPL）を早見表で解説。部位別の回復時間と、初心者がやりがちな分割の失敗例も紹介します。",
      },
      {
        href: "/column/rest",
        title: "筋肉を育てる休息の重要性",
        description:
          "超回復のメカニズム、オーバートレーニングのリスク、効果的な休息の取り方を解説します。",
      },
      {
        href: "/column/sleep",
        title: "筋トレと睡眠の関係",
        description:
          "成長ホルモンと睡眠の仕組み、理想の睡眠時間、睡眠の質を高めるための実践的なコツを紹介します。",
      },
      {
        href: "/column/stretch",
        title: "筋トレ前後のストレッチの効果とやり方",
        description:
          "動的ストレッチと静的ストレッチの使い分け、具体的なメニューを紹介します。",
      },
    ],
  },
  {
    name: "📊 重量・強度の目安",
    articles: [
      {
        href: "/column/strength-standards",
        title: "BIG3の重量目安一覧｜体重の何倍が普通？",
        description:
          "ベンチプレス・スクワット・デッドリフトの目安を体重別・レベル別の一覧表で解説。筆者自身の実重量（60kg→120/120/160kg）と、目安表とのズレも公開します。",
      },
      {
        href: "/column/bench-press-average",
        title: "ベンチプレスの平均は何kg？体重別・トレ歴別の目安一覧",
        description:
          "「全国平均◯kg」に根拠はありません。体重別・男女別・トレ歴別の目安と、今の重量から1RMを出す換算表で自分の現在地を確認できます。",
      },
    ],
  },
  {
    name: "💪 部位別トレーニング",
    articles: [
      {
        href: "/column/chest-home",
        title: "自宅でできる胸トレ完全ガイド",
        description:
          "器具なしの腕立て伏せバリエーションからダンベル種目まで、大胸筋を効果的に鍛える方法を解説します。",
      },
      {
        href: "/column/back-benefits",
        title: "背中を鍛えるべき3つの理由",
        description:
          "姿勢改善・腰痛予防・見た目の変化。背中の筋肉を鍛えることで得られる効果と具体的な種目を紹介します。",
      },
    ],
  },
];

export default function ColumnPage() {
  return (
    <main className="min-h-screen flex flex-col items-center px-4 py-8">
      <div className="max-w-md w-full animate-slideUp">
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <h1 className="text-xl font-bold text-gray-800 mb-2">
            筋トレコラム
          </h1>
          <p className="text-sm text-gray-500 mb-6">
            筋トレに役立つ知識をわかりやすく解説します。
          </p>

          <div className="space-y-6">
            {categories.map((category) => (
              <section key={category.name}>
                <h2 className="text-sm font-bold text-orange-500 mb-3">
                  {category.name}
                </h2>
                <div className="space-y-3">
                  {category.articles.map((article) => (
                    <Link
                      key={article.href}
                      href={article.href}
                      className="block border border-gray-100 rounded-xl p-4 hover:bg-gray-50 transition-colors"
                    >
                      <p className="font-bold text-gray-800 text-sm mb-1">
                        {article.title}
                      </p>
                      <p className="text-gray-500 text-xs leading-relaxed">
                        {article.description}
                      </p>
                    </Link>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>

        <div className="text-center space-y-3">
          <Link
            href="/questions"
            className="inline-block w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-2xl transition-all duration-200 hover:shadow-lg"
          >
            さっそくメニューを作る
          </Link>
          <div>
            <Link
              href="/"
              className="text-orange-500 font-bold hover:text-orange-600 transition-colors text-sm"
            >
              トップに戻る
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
