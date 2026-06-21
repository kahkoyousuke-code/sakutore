import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "女性が筋トレで痩せやすい時間帯と頻度 - サクトレ",
  description:
    "脂肪燃焼効果が高まる時間帯、週の最適な頻度、忙しい人でも続けられるスケジュールを紹介。仕事をしながら週5で続けてきた経験から解説します。",
  path: "/column/women-training-timing",
});

export default function WomenTrainingTimingPage() {
  return (
    <main className="min-h-screen flex flex-col items-center px-4 py-8">
      <div className="max-w-md w-full animate-slideUp">
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <p className="text-xs text-orange-500 font-bold mb-2">コラム</p>
          <h1 className="text-xl font-bold text-gray-800 mb-6">
            女性が筋トレで痩せやすい時間帯と頻度
          </h1>

          <div className="space-y-6 text-sm text-gray-700 leading-relaxed">
            <section>
              <p className="text-gray-500 italic border-l-2 border-orange-300 pl-3 mb-3">
                仕事をしながら週5でトレーニングを続けてきた経験から、本当に続けやすい時間帯と頻度を紹介します。
              </p>
              <p>
                「筋トレはいつやるのが一番効果的？」「週に何回やればいい？」——これは筋トレを始めた多くの方が抱く疑問です。実は、トレーニングの時間帯や頻度を少し工夫するだけで、同じ努力でも得られる効果が変わってきます。この記事では、女性が脂肪燃焼効果を最大化するための時間帯と頻度を、科学的な根拠をもとに解説します。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                脂肪燃焼に効果的な時間帯
              </h2>

              <h3 className="font-bold text-gray-800 mt-4 mb-2">
                朝トレーニングのメリット
              </h3>
              <p>
                朝（特に起床後1〜2時間以内）のトレーニングは、脂肪燃焼の観点から非常に優れた時間帯です。起床直後は体内のグリコーゲン（糖質）が枯渇した状態にあるため、体が優先的に脂肪をエネルギーとして使いやすい状態になっています。
              </p>
              <p className="mt-2">
                また、朝のトレーニングはコルチゾール（ストレスホルモン）の分泌が自然と高い時間帯にあたります。コルチゾールは脂肪分解を促進する働きがあり、この時間帯の運動との相乗効果が期待できます。
              </p>
              <p className="mt-2">
                さらに、朝トレーニングを習慣化することで1日のスタートに活力が生まれ、仕事の生産性向上にもつながります。「朝トレをした日は頭がすっきりする」という感覚を経験している方も多いのではないでしょうか。
              </p>

              <h3 className="font-bold text-gray-800 mt-4 mb-2">
                夕方〜夜トレーニングのメリット
              </h3>
              <p>
                一方で、夕方から夜（16時〜20時ごろ）は体温が最も高くなる時間帯であり、筋肉の柔軟性や反応速度がピークに達します。この時間帯は筋力パフォーマンスが高く、より高強度のトレーニングが行いやすいという利点があります。
              </p>
              <p className="mt-2">
                高強度のトレーニングが行えるということは、それだけ多くのカロリーを消費し、アフターバーン効果（運動後の代謝亢進）も高くなります。筋肥大や筋力向上を重視するなら、夕方のトレーニングが有利です。
              </p>

              <div className="bg-gray-50 rounded-xl p-4 mt-3">
                <p className="font-bold text-gray-800 mb-2">時間帯別の特徴まとめ</p>
                <ul className="space-y-2 text-gray-600">
                  <li>
                    <span className="font-bold text-gray-700">朝：</span>脂肪燃焼優先・習慣化しやすい・グリコーゲン枯渇状態で脂肪を使いやすい
                  </li>
                  <li>
                    <span className="font-bold text-gray-700">夕方〜夜：</span>体温が高くパフォーマンス向上・高強度トレーニングに向く・筋肉づくりに有利
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                最も大切なのは「続けられる時間帯」
              </h2>
              <p>
                朝と夕方のどちらが優れているかより、実際に「続けられる時間帯」に行うことの方がずっと重要です。週に1回しかできない「最適な時間帯」より、週3〜4回できる「自分に合った時間帯」の方が、長期的には圧倒的に高い効果をもたらします。
              </p>
              <p className="mt-2">
                仕事が忙しい平日は夜にトレーニングし、週末の朝は有酸素運動を組み合わせるなど、自分のライフスタイルに合わせた柔軟なスケジュールを組むことが長続きのコツです。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                女性に最適なトレーニング頻度
              </h2>

              <h3 className="font-bold text-gray-800 mt-4 mb-2">
                初心者：週2〜3回
              </h3>
              <p>
                筋トレを始めて間もない方には、週2〜3回が最適です。筋トレで筋肉に負荷をかけると、筋繊維に微細な損傷が生じます。回復（超回復）には48〜72時間が必要であるため、同じ部位を毎日鍛えることは逆効果です。
              </p>
              <p className="mt-2">
                週2〜3回であれば十分な回復時間を確保しながら、体を徐々に筋トレに慣らしていけます。最初の1〜3ヶ月はこのペースで継続し、体の変化と疲労感を観察しながら徐々に頻度を上げていきましょう。
              </p>

              <h3 className="font-bold text-gray-800 mt-4 mb-2">
                中級者：週3〜4回（分割法）
              </h3>
              <p>
                ある程度体が慣れてきたら、週3〜4回に増やし、部位を分けてトレーニングする「分割法」を取り入れましょう。分割法とは、「上半身と下半身」「前面と後面」のように体の部位ごとにトレーニングする日を分ける方法です。
              </p>

              <div className="bg-gray-50 rounded-xl p-4 mt-3">
                <p className="font-bold text-gray-800 mb-2">週4回・2分割の例</p>
                <ul className="space-y-1 text-gray-600">
                  <li>・月：下半身（スクワット・ランジ・ヒップリフト）</li>
                  <li>・火：休息</li>
                  <li>・水：上半身（プッシュアップ・ダンベルロウ・肩）</li>
                  <li>・木：休息</li>
                  <li>・金：下半身（月と同様またはバリエーションを変える）</li>
                  <li>・土：上半身（水と同様またはバリエーションを変える）</li>
                  <li>・日：休息</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                忙しい女性でも続けやすいスケジュール術
              </h2>

              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">▸</span>
                  <p>
                    <span className="font-bold">曜日を固定する</span>：「月・水・金にトレーニングする」と曜日を決めることで習慣化しやすくなります。毎回「今日やるか迷う」という意志力の消耗がなくなります。
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">▸</span>
                  <p>
                    <span className="font-bold">20〜30分でもOK</span>：時間がない日は20〜30分の短いトレーニングで構いません。「完璧にできない日はやらない」という考え方を捨て、短くても継続することを優先しましょう。
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">▸</span>
                  <p>
                    <span className="font-bold">着替えの手間を減らす</span>：自宅でトレーニングできる環境を整えると、ジムへの移動時間が不要になり継続しやすくなります。ヨガマット1枚あればスクワット・プランク・ヒップリフトなどの基本種目は十分行えます。
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">▸</span>
                  <p>
                    <span className="font-bold">生理周期を考慮する</span>：生理前〜生理中は体が重くなりやすく、無理に高強度トレーニングを行う必要はありません。この時期は強度を下げてストレッチや軽いウォーキング程度にとどめることも選択肢の一つです。
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                まとめ
              </h2>
              <p>
                脂肪燃焼を優先するなら朝、パフォーマンスを重視するなら夕方がおすすめですが、最終的には「自分が継続できる時間帯」が一番の正解です。頻度は初心者なら週2〜3回から始め、体が慣れてきたら徐々に増やしましょう。
              </p>
              <p className="mt-2">
                サクトレではいくつかの質問に答えるだけで、あなたの生活スタイルや目的に合ったメニューを提案しています。まずは自分に合ったペースでスタートしてみてください。
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
