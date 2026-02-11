import Link from "next/link";

export const metadata = {
  title: "使い方ガイド - サクトレ",
  description:
    "サクトレの使い方を詳しく解説。6つの質問に答えるだけで、あなた専用のトレーニングメニューが完成します。",
};

export default function GuidePage() {
  return (
    <main className="min-h-screen flex flex-col items-center px-4 py-8">
      <div className="max-w-md w-full animate-slideUp">
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <h1 className="text-xl font-bold text-gray-800 mb-6">
            使い方ガイド
          </h1>

          <div className="space-y-8 text-sm text-gray-700 leading-relaxed">
            {/* サクトレとは */}
            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                サクトレとは？
              </h2>
              <p>
                サクトレは、<span className="font-bold">6つの簡単な質問に答えるだけ</span>で、あなたにぴったりのトレーニングメニューをAIがサクッと作成してくれる無料サービスです。
              </p>
              <p className="mt-2">
                筋トレを始めたいけど「何をすればいいかわからない」「自分に合ったメニューがわからない」という方のために作りました。会員登録不要で、すぐにお使いいただけます。
              </p>
            </section>

            {/* 使い方の手順 */}
            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                使い方の手順
              </h2>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    1
                  </div>
                  <div>
                    <p className="font-bold text-gray-800">トップページにアクセス</p>
                    <p className="text-gray-500 mt-1">
                      「メニューを作る」ボタンをタップして、質問画面に進みます。
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    2
                  </div>
                  <div>
                    <p className="font-bold text-gray-800">6つの質問に回答</p>
                    <p className="text-gray-500 mt-1">
                      目的・頻度・時間・経験・部位・環境の6つの質問に、選択肢から選んで答えます。所要時間は約1分です。
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    3
                  </div>
                  <div>
                    <p className="font-bold text-gray-800">AIがメニューを生成</p>
                    <p className="text-gray-500 mt-1">
                      回答に基づいて、AIがあなた専用のトレーニングメニューを数秒で自動生成します。
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    4
                  </div>
                  <div>
                    <p className="font-bold text-gray-800">メニューを確認・活用</p>
                    <p className="text-gray-500 mt-1">
                      生成されたメニューを確認し、各種目の詳しいやり方もチェックできます。スクリーンショットで保存すると便利です。
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* 6つの質問の解説 */}
            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                6つの質問の意味と選び方のコツ
              </h2>
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-xl p-4">
                  <p className="font-bold text-gray-800 mb-1">
                    Q1. トレーニングの目的は？
                  </p>
                  <p className="text-gray-500">
                    あなたの一番の目的を選びましょう。「筋肥大」は筋肉を大きくしたい方、「ダイエット」は脂肪を落としたい方、「健康維持」は体力づくりが目的の方、「スポーツパフォーマンス向上」は競技力を上げたい方向けです。
                  </p>
                </div>

                <div className="bg-gray-50 rounded-xl p-4">
                  <p className="font-bold text-gray-800 mb-1">
                    Q2. 週に何回トレーニングできる？
                  </p>
                  <p className="text-gray-500">
                    無理なく続けられる回数を選ぶのがコツです。初心者の方は週2〜3回から始めるのがおすすめです。回数に合わせてメニューの分割が変わります。
                  </p>
                </div>

                <div className="bg-gray-50 rounded-xl p-4">
                  <p className="font-bold text-gray-800 mb-1">
                    Q3. 1回のトレーニング時間は？
                  </p>
                  <p className="text-gray-500">
                    ウォームアップやストレッチを含めた時間です。短い時間でも効果的なメニューが作れるので、忙しい方も安心です。
                  </p>
                </div>

                <div className="bg-gray-50 rounded-xl p-4">
                  <p className="font-bold text-gray-800 mb-1">
                    Q4. トレーニング経験は？
                  </p>
                  <p className="text-gray-500">
                    正直に選びましょう。経験レベルに合わせて、種目の難易度やセット数が調整されます。初心者でも安全にできるメニューが提案されます。
                  </p>
                </div>

                <div className="bg-gray-50 rounded-xl p-4">
                  <p className="font-bold text-gray-800 mb-1">
                    Q5. 特に鍛えたい部位は？
                  </p>
                  <p className="text-gray-500">
                    重点的に鍛えたい部位を選びます。「全身バランスよく」を選ぶと、偏りなく全身を鍛えるメニューが作成されます。迷ったら「全身バランスよく」がおすすめです。
                  </p>
                </div>

                <div className="bg-gray-50 rounded-xl p-4">
                  <p className="font-bold text-gray-800 mb-1">
                    Q6. トレーニング環境は？
                  </p>
                  <p className="text-gray-500">
                    自分のトレーニング環境を選びましょう。ジムならマシンやバーベルを使ったメニュー、自宅なら器具に合わせた最適なメニューが提案されます。
                  </p>
                </div>
              </div>
            </section>

            {/* メニューの活用方法 */}
            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                生成されたメニューの活用方法
              </h2>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">▸</span>
                  <p>
                    <span className="font-bold">種目名をタップ</span>すると、正しいフォームやコツが表示されます。初めての種目でも安心して取り組めます。
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">▸</span>
                  <p>
                    <span className="font-bold">セット数・回数・休憩時間</span>はあくまで目安です。体調に合わせて調整してください。
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">▸</span>
                  <p>
                    <span className="font-bold">スクリーンショット</span>で保存しておくと、ジムや自宅でいつでも見返せて便利です。
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">▸</span>
                  <p>
                    メニューに慣れてきたら、回答を変えて<span className="font-bold">新しいメニューを作り直す</span>こともできます。何度でも無料です。
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">▸</span>
                  <p>
                    まずは<span className="font-bold">2週間続ける</span>ことを目標にしてみましょう。習慣化することでトレーニング効果がぐんと上がります。
                  </p>
                </div>
              </div>
            </section>
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
