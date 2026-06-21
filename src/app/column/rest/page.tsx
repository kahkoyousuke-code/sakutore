import Link from "next/link";
import ShareButtons from "@/components/ShareButtons";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "筋肉を育てる休息の重要性 - サクトレ",
  description:
    "筋トレにおける休息の重要性を解説。超回復の仕組み、最適な休息日の取り方、睡眠や栄養の関係をわかりやすく紹介します。",
  path: "/column/rest",
});

export default function RestPage() {
  return (
    <main className="min-h-screen flex flex-col items-center px-4 py-8">
      <div className="max-w-md w-full animate-slideUp">
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <p className="text-xs text-orange-500 font-bold mb-2">コラム</p>
          <h1 className="text-xl font-bold text-gray-800 mb-6">
            筋肉を育てる休息の重要性
          </h1>

          <div className="space-y-6 text-sm text-gray-700 leading-relaxed">
            <section>
              <p>
                「筋肉はトレーニング中ではなく、休んでいる間に成長する」ということをご存知でしょうか。筋トレに熱心になるあまり、毎日ハードなトレーニングを続けてしまう方がいますが、実は休息こそが筋肉の成長に欠かせない要素なのです。この記事では、休息が筋肉にとってなぜ重要なのかを詳しく解説します。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                超回復のメカニズム
              </h2>
              <p>
                筋トレを行うと、筋繊維に微細な損傷が生じます。体はこの損傷を修復する際に、元の状態よりも少し強く太い筋繊維を作ります。これが「超回復」と呼ばれる現象です。
              </p>
              <p className="mt-2">
                超回復には通常48〜72時間（2〜3日）かかります。この回復期間中に適切な栄養と睡眠を取ることで、筋肉は効率よく成長します。逆に、回復が完了する前に同じ部位を再びトレーニングすると、筋肉が十分に修復されないまま再度損傷を受けてしまいます。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                オーバートレーニングのリスク
              </h2>
              <p>
                休息を十分に取らずにトレーニングを続けると、「オーバートレーニング症候群」に陥るリスクがあります。以下のような症状が現れたら要注意です。
              </p>
              <div className="bg-gray-50 rounded-xl p-4 mt-3">
                <p className="font-bold text-gray-800 mb-2">
                  オーバートレーニングの主な症状
                </p>
                <ul className="space-y-1 text-gray-600">
                  <li>・慢性的な疲労感が抜けない</li>
                  <li>・トレーニングのパフォーマンスが低下する</li>
                  <li>・筋力や筋持久力が落ちる</li>
                  <li>・睡眠の質が低下する</li>
                  <li>・免疫力が落ちて風邪を引きやすくなる</li>
                  <li>・モチベーションが著しく低下する</li>
                  <li>・関節や腱に痛みが出る</li>
                </ul>
              </div>
              <p className="mt-3">
                オーバートレーニングに陥ると、回復までに数週間〜数ヶ月かかることもあります。「休むことも トレーニングの一部」という意識を持つことが大切です。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                効果的な休息の取り方
              </h2>

              <h3 className="font-bold text-gray-800 mt-4 mb-2">
                完全休養日を設ける
              </h3>
              <p>
                週に最低1〜2日は、筋トレをしない完全休養日を設けましょう。初心者なら2〜3日、中級者以上でも最低1日は完全に体を休める日が必要です。この日は体の修復に集中させる日と考えてください。
              </p>

              <h3 className="font-bold text-gray-800 mt-4 mb-2">
                アクティブレストを活用する
              </h3>
              <p>
                完全に動かないのではなく、軽い運動で血行を促進する「アクティブレスト（積極的休養）」も効果的です。軽いウォーキング、ストレッチ、ヨガなど、筋肉に大きな負荷をかけない運動は、血流を改善して回復を早める効果があります。
              </p>

              <h3 className="font-bold text-gray-800 mt-4 mb-2">
                質の高い睡眠を取る
              </h3>
              <p>
                筋肉の修復と成長に欠かせない成長ホルモンは、睡眠中に最も多く分泌されます。特に深い睡眠（ノンレム睡眠）の時間帯に多く分泌されるため、7〜8時間の質の高い睡眠を確保することが重要です。
              </p>
              <div className="space-y-2 mt-3">
                <div className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">▸</span>
                  <p>就寝の1〜2時間前にはスマホやパソコンの画面を見ないようにする</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">▸</span>
                  <p>毎日同じ時間に就寝・起床するリズムを作る</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">▸</span>
                  <p>寝室の温度を18〜22度に保ち、暗い環境で眠る</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">▸</span>
                  <p>就寝前のカフェインやアルコールを避ける</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                休息日の栄養管理
              </h2>
              <p>
                休息日だからといってタンパク質の摂取を減らしてはいけません。筋肉は休息日にこそ修復・成長しているため、トレーニング日と同じくらいのタンパク質が必要です。
              </p>
              <p className="mt-2">
                ただし、トレーニング日に比べて消費カロリーは少なくなるため、炭水化物や脂質の量を少し控えめにするとよいでしょう。水分補給も忘れずに行い、体の回復をサポートしましょう。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                まとめ
              </h2>
              <p>
                筋肉の成長には、トレーニングと同じくらい休息が重要です。超回復のメカニズムを理解し、適切な休息日を設け、質の高い睡眠と栄養を確保することで、トレーニングの効果を最大化できます。
              </p>
              <p className="mt-2">
                「休むこともトレーニング」と考え、計画的に休息を取りましょう。サクトレでは、あなたのトレーニング頻度に合わせた最適なメニューを作成し、休息日も考慮した効果的なプランを提案します。
              </p>
            </section>
          </div>
        </div>

        <ShareButtons url="https://sakutore.vercel.app/column/rest" title="筋肉を育てる休息の重要性" />
        <Link
          href="/gear"
          className="block bg-orange-50 hover:bg-orange-100 rounded-2xl p-4 mb-6 border-2 border-orange-200 transition-colors"
        >
          <div className="flex items-center gap-3">
            <span className="text-2xl flex-shrink-0">🏋️</span>
            <div>
              <p className="font-bold text-orange-600 text-sm">運営者厳選のおすすめギア</p>
              <p className="text-xs text-gray-500 mt-0.5">実際に使って選んだプロテイン・ベルト・グリップを見る →</p>
            </div>
          </div>
        </Link>

        <div className="bg-white rounded-2xl shadow-lg p-4 mb-6">
          <div className="flex items-start gap-3">
            <span className="text-3xl">👤</span>
            <div>
              <p className="text-xs text-orange-500 font-bold mb-1">著者</p>
              <p className="font-bold text-gray-800 text-sm">yousuke</p>
              <p className="text-xs text-gray-500 mt-1 leading-relaxed">筋トレ歴10年以上｜ボディメイク大会出場経験あり｜90kg超から現在の体型に変化</p>
            </div>
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
              href="/column"
              className="text-orange-500 font-bold hover:text-orange-600 transition-colors text-sm"
            >
              コラム一覧に戻る
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
