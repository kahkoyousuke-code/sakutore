import Link from "next/link";

export const metadata = {
  title: "使い方・機能紹介 - サクトレ",
  description:
    "サクトレの使い方と機能を紹介。AIメニュー生成・トレーニング記録・カレンダー・実績メモなど、継続をサポートする機能が揃っています。",
};

function Step({ num, title, desc }: { num: number; title: string; desc: string }) {
  return (
    <div className="flex gap-3">
      <div className="flex-shrink-0 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
        {num}
      </div>
      <div>
        <p className="font-bold text-gray-800">{title}</p>
        <p className="text-gray-500 mt-1">{desc}</p>
      </div>
    </div>
  );
}

function Feature({ icon, title, desc }: { icon: string; title: string; desc: string }) {
  return (
    <div className="flex gap-3 bg-orange-50 rounded-xl p-4">
      <span className="text-2xl flex-shrink-0">{icon}</span>
      <div>
        <p className="font-bold text-gray-800 text-sm mb-1">{title}</p>
        <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

export default function GuidePage() {
  return (
    <main className="min-h-screen flex flex-col items-center px-4 py-8">
      <div className="max-w-md w-full animate-slideUp space-y-4">

        {/* ヘッダー */}
        <div className="text-center mb-2">
          <h1 className="text-2xl font-bold text-gray-800">使い方・機能紹介</h1>
          <p className="text-gray-500 text-sm mt-1">サクトレでできること</p>
        </div>

        {/* 基本の使い方 */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="font-bold text-orange-500 text-base mb-4">基本の使い方</h2>
          <div className="space-y-4 text-sm text-gray-700">
            <Step num={1} title="「今日のメニューを作る」をタップ" desc="トップページのボタンから質問画面に進みます。" />
            <Step num={2} title="5つの質問に回答（約1分）" desc="目的・時間・経験・部位・環境の5項目を選択肢から選ぶだけ。" />
            <Step num={3} title="AIが今日のメニューを自動生成" desc="回答とこれまでの履歴をもとに、今日のあなた専用のメニューが数秒で完成します。" />
            <Step num={4} title="メニューを確認してトレーニング開始" desc="種目名をタップするとやり方・フォームのコツも確認できます。" />
          </div>
        </div>

        {/* 便利な機能 */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="font-bold text-orange-500 text-base mb-4">便利な機能</h2>
          <div className="space-y-3 text-sm">
            <Feature
              icon="⏱️"
              title="レストタイマー"
              desc="各種目の休憩時間ボタンをタップするとカウントダウンが始まります。終了時にビープ音でお知らせ。"
            />
            <Feature
              icon="💪"
              title="トレーニング完了ボタン"
              desc="メニューページ下部の「今日のトレーニング完了！」を押すと、その日の記録が保存されます。"
            />
            <Feature
              icon="📝"
              title="実績メモ（重量・回数）"
              desc="各種目カード下部の「実績を記録する」から、セットごとに使用重量と回数を記録できます。前回の記録が確認でき、成長を実感しやすくなります。"
            />
            <Feature
              icon="🔥"
              title="連続トレーニング日数"
              desc="連続してトレーニングした日数がトップページに表示されます。ストリークを途切れさせないようにモチベーション維持に役立ちます。"
            />
            <Feature
              icon="📅"
              title="トレーニングカレンダー"
              desc="トップページのカレンダーでトレーニングした日が緑でハイライトされます。緑の日付をタップするとその日のメニューを確認できます。"
            />
            <Feature
              icon="📁"
              title="メニュー履歴"
              desc="過去10件のメニューがトップページに保存されます。同じメニューを繰り返し使ったり、以前の内容を振り返るのに便利です。"
            />
            <Feature
              icon="📋"
              title="前回のメニューを引き継ぎ"
              desc="直前に作ったメニューはトップページの「前回のメニューを見る」からすぐに確認できます。毎回質問に答え直す必要はありません。"
            />
            <Feature
              icon="⚖️"
              title="RM換算計算ツール"
              desc="ベンチプレス・スクワット・デッドリフトの使用重量と回数を入力するだけで、1RMと2〜15RMの換算表を自動生成。トレーニング強度の設定に役立ちます。"
            />
            <Feature
              icon="🔥"
              title="カロリー消費計算ツール"
              desc="体重・種目・時間を入力するとMETs値をもとに消費カロリーを自動計算。脂肪換算グラムも表示し、トレーニングの効果を数値で実感できます。"
            />
            <Feature
              icon="🎯"
              title="筋トレ適正重量診断"
              desc="性別・体重・経験レベルを入力するだけで、ビッグ3（ベンチプレス・スクワット・デッドリフト）の目標重量を自動算出。次のレベルまでの差分も表示します。"
            />
          </div>
        </div>

        {/* よくある質問 */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="font-bold text-orange-500 text-base mb-4">よくある質問</h2>
          <div className="space-y-4 text-sm">
            <div>
              <p className="font-bold text-gray-800">無料で使えますか？</p>
              <p className="text-gray-500 mt-1">はい、完全無料です。会員登録も不要です。</p>
            </div>
            <div>
              <p className="font-bold text-gray-800">データはどこに保存されますか？</p>
              <p className="text-gray-500 mt-1">トレーニング記録・メモ・履歴はすべてお使いのスマートフォン内（ブラウザのローカルストレージ）に保存されます。サーバーには送信されません。</p>
            </div>
            <div>
              <p className="font-bold text-gray-800">ブラウザを変えると記録が消えますか？</p>
              <p className="text-gray-500 mt-1">はい、記録はブラウザごとに独立して保存されるため、別のブラウザやデバイスでは引き継がれません。</p>
            </div>
            <div>
              <p className="font-bold text-gray-800">何度でもメニューを作り直せますか？</p>
              <p className="text-gray-500 mt-1">はい、何度でも無料で作成できます。体力がついてきたら条件を変えて新しいメニューを作ってみてください。</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center space-y-3 pb-4">
          <Link
            href="/questions"
            className="inline-block w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
          >
            さっそくメニューを作る
          </Link>
          <Link
            href="/rm-calculator"
            className="inline-block w-full bg-white hover:bg-gray-50 text-orange-500 font-bold py-4 px-8 rounded-2xl border-2 border-orange-500 transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
          >
            RM換算計算ツールを使う
          </Link>
          <Link
            href="/calorie-calculator"
            className="inline-block w-full bg-white hover:bg-gray-50 text-orange-500 font-bold py-4 px-8 rounded-2xl border-2 border-orange-500 transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
          >
            カロリー消費計算ツールを使う
          </Link>
          <Link
            href="/weight-checker"
            className="inline-block w-full bg-white hover:bg-gray-50 text-orange-500 font-bold py-4 px-8 rounded-2xl border-2 border-orange-500 transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
          >
            筋トレ適正重量診断を使う
          </Link>
          <Link
            href="/"
            className="inline-block text-orange-500 font-bold hover:text-orange-600 transition-colors text-sm"
          >
            トップに戻る
          </Link>
        </div>
      </div>
    </main>
  );
}
