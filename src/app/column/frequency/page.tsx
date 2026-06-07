import Link from "next/link";

export const metadata = {
  title: "週に何回筋トレすればいい？最適な頻度を解説 - サクトレ",
  description:
    "筋トレの最適な頻度をレベル別に解説。初心者から上級者まで、週何回トレーニングすべきか、分割法の考え方もわかりやすく紹介します。",
};

export default function FrequencyPage() {
  return (
    <main className="min-h-screen flex flex-col items-center px-4 py-8">
      <div className="max-w-md w-full animate-slideUp">
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <p className="text-xs text-orange-500 font-bold mb-2">コラム</p>
          <h1 className="text-xl font-bold text-gray-800 mb-6">
            週に何回筋トレすればいい？最適な頻度を解説
          </h1>

          <div className="space-y-6 text-sm text-gray-700 leading-relaxed">
            <section>
              <p>
                筋トレを始めようとしたとき、「週に何回やればいいの？」という疑問は誰もが抱くものです。やりすぎても体に負担がかかりますし、少なすぎると効果が出にくい。この記事では、トレーニングの最適な頻度をレベル別に解説し、自分に合ったペースの見つけ方をお伝えします。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                筋トレの頻度を決める基本的な考え方
              </h2>
              <p>
                筋トレの頻度を決めるうえで重要なのは「超回復」の仕組みを理解することです。筋トレで筋繊維にダメージを与えた後、体は48〜72時間かけて筋肉を修復し、以前より少し強い状態に回復させます。
              </p>
              <p className="mt-2">
                この回復が完了する前に同じ部位をトレーニングすると、筋肉が十分に修復されず、かえって筋力が落ちたり怪我のリスクが高まったりします。一方、回復後にトレーニングしないまま時間が経つと、せっかくの超回復の効果が薄れてしまいます。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                レベル別おすすめ頻度
              </h2>

              <h3 className="font-bold text-gray-800 mt-4 mb-2">
                初心者（0〜6ヶ月）：週2〜3回
              </h3>
              <p>
                筋トレを始めたばかりの初心者には、週2〜3回がおすすめです。この頻度なら、トレーニング日の間に十分な休息を取れるため、筋肉の回復が追いつきます。例えば月曜・水曜・金曜のように、1日おきにトレーニングするのが理想的です。
              </p>
              <p className="mt-2">
                初心者のうちは全身をまんべんなく鍛える「全身トレーニング」がおすすめです。1回のトレーニングで全身の主要な筋肉群をまとめて鍛えることで、効率よく基礎体力と筋力を身につけられます。
              </p>

              <h3 className="font-bold text-gray-800 mt-4 mb-2">
                中級者（6ヶ月〜2年）：週3〜4回
              </h3>
              <p>
                ある程度経験を積んだ中級者は、週3〜4回に頻度を上げるとよいでしょう。この段階では「分割法」を取り入れ、日によって鍛える部位を分けるのが効果的です。
              </p>
              <p className="mt-2">
                例えば「上半身の日」と「下半身の日」に分ける2分割や、「胸・三頭筋の日」「背中・二頭筋の日」「脚の日」に分ける3分割が一般的です。部位を分けることで、各筋肉に十分な刺激を与えつつ、回復時間も確保できます。
              </p>

              <h3 className="font-bold text-gray-800 mt-4 mb-2">
                上級者（2年以上）：週4〜6回
              </h3>
              <p>
                十分な経験と体力がある上級者は、週4〜6回のトレーニングが可能です。4〜5分割で各部位を細かく分けてトレーニングすることで、各部位に対してより多くの種目とボリュームで刺激を与えられます。
              </p>
              <p className="mt-2">
                ただし、週6回以上トレーニングする場合は、オーバートレーニングにならないよう体の状態に注意が必要です。疲労が抜けない、パフォーマンスが落ちたと感じたら、迷わず休息日を設けましょう。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                頻度を決めるときの注意点
              </h2>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">▸</span>
                  <p>
                    <span className="font-bold">無理をしない</span>：最初から高頻度で始めると、体が追いつかず挫折しやすくなります。まずは低頻度で始めて、慣れてきたら徐々に増やしましょう。
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">▸</span>
                  <p>
                    <span className="font-bold">生活リズムに合わせる</span>：仕事や家事で忙しい場合は、無理に回数を増やす必要はありません。週2回でも正しく行えば十分な効果が得られます。
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">▸</span>
                  <p>
                    <span className="font-bold">体の声を聞く</span>：筋肉痛が残っている部位は休ませましょう。痛みや違和感がある場合は、無理にトレーニングせず回復を優先してください。
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">▸</span>
                  <p>
                    <span className="font-bold">睡眠を十分に取る</span>：筋肉の回復には質の高い睡眠が欠かせません。7〜8時間の睡眠を心がけましょう。
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                まとめ
              </h2>
              <p>
                筋トレの最適な頻度は、初心者なら週2〜3回、中級者なら週3〜4回、上級者なら週4〜6回が目安です。大切なのは、自分の生活リズムや体の状態に合わせて無理なく続けられるペースを見つけることです。
              </p>
              <p className="mt-2">
                サクトレでは、あなたのトレーニング頻度に合わせた最適なメニューを自動で作成します。週何回トレーニングできるかを選ぶだけで、その頻度に最適化されたメニューが完成します。
              </p>
            </section>
          </div>
        </div>

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
