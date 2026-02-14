import Link from "next/link";

export const metadata = {
  title: "筋トレコラム - サクトレ",
  description:
    "筋トレ初心者から中級者に向けたコラム記事。トレーニングの基礎知識、栄養、休息、ストレッチなど、筋トレに役立つ情報をわかりやすく解説します。",
};

const articles = [
  {
    href: "/column/beginner-guide",
    title: "筋トレ初心者が最初にやるべき5つのこと",
    description:
      "目標設定、正しいフォーム、大きな筋肉から鍛えるコツなど、初心者が押さえるべきポイントを解説します。",
  },
  {
    href: "/column/protein",
    title: "筋トレに必要なタンパク質の量と摂り方",
    description:
      "体重あたりの必要量、高タンパク食材、効果的な摂取タイミングなど、栄養面から筋トレをサポートします。",
  },
  {
    href: "/column/frequency",
    title: "週に何回筋トレすればいい？最適な頻度を解説",
    description:
      "初心者・中級者・上級者のレベル別に最適なトレーニング頻度と分割法の考え方を紹介します。",
  },
  {
    href: "/column/rest",
    title: "筋肉を育てる休息の重要性",
    description:
      "超回復のメカニズム、オーバートレーニングのリスク、効果的な休息の取り方を解説します。",
  },
  {
    href: "/column/stretch",
    title: "筋トレ前後のストレッチの効果とやり方",
    description:
      "動的ストレッチと静的ストレッチの使い分け、具体的なメニューを紹介します。",
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

          <div className="space-y-4">
            {articles.map((article) => (
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
