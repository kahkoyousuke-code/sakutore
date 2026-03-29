import Link from "next/link";

export const metadata = {
  title: "40代からの筋トレ入門 - サクトレ",
  description:
    "40代から筋トレを始めるメリットと正しい始め方を解説。中年以降に特有の体の変化を理解し、無理なく続けられるトレーニング法を紹介します。",
};

export default function Over40Page() {
  return (
    <main className="min-h-screen flex flex-col items-center px-4 py-8">
      <div className="max-w-md w-full animate-slideUp">
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <p className="text-xs text-orange-500 font-bold mb-2">コラム</p>
          <h1 className="text-xl font-bold text-gray-800 mb-6">
            40代からの筋トレ入門
          </h1>

          <div className="space-y-6 text-sm text-gray-700 leading-relaxed">
            <section>
              <p>
                「40代になってから体が重くなった」「昔と同じ食事なのに太りやすくなった」「腰や膝が気になり始めた」——そんな悩みを抱えている方は少なくないはずです。これらはすべて、加齢に伴う筋肉量の低下が大きく関わっています。実は40代こそ、筋トレを始める絶好のタイミングです。この記事では、40代から筋トレを始めるメリットと、無理なく続けるための方法を解説します。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                40代から筋トレを始めるメリット
              </h2>
              <p>
                「もう40代だから筋トレは遅い」と思っていませんか？実はそれは大きな誤解です。40代からでも筋肉は十分に増やせますし、むしろ今始めることで得られる恩恵は非常に大きいのです。
              </p>

              <h3 className="font-bold text-gray-800 mt-4 mb-2">
                基礎代謝の低下を食い止める
              </h3>
              <p>
                人間の筋肉量は30代をピークに、何もしなければ1年に約1〜2％ずつ減少していきます。これを「サルコペニア（筋肉減少症）」と呼びます。筋肉が減ると基礎代謝（何もしなくても消費するエネルギー量）が下がり、同じ食事量でも太りやすい体になっていきます。
              </p>
              <p className="mt-2">
                筋トレを始めることで筋肉量の減少を食い止め、代謝を維持・向上させることができます。40代で筋トレを始めた人が「食事を変えていないのに体が締まってきた」と感じるのは、まさにこの効果によるものです。
              </p>

              <h3 className="font-bold text-gray-800 mt-4 mb-2">
                骨密度と関節の健康を守る
              </h3>
              <p>
                筋トレは筋肉だけでなく、骨や関節にも良い影響を与えます。適度な負荷をかけることで骨密度が高まり、骨粗しょう症の予防につながります。また、関節周囲の筋肉を鍛えることで膝や腰への負担が軽減し、慢性的な痛みの改善にも効果的です。
              </p>

              <h3 className="font-bold text-gray-800 mt-4 mb-2">
                ホルモンバランスの改善
              </h3>
              <p>
                筋トレには、テストステロン（男性ホルモン）や成長ホルモンの分泌を促す効果があります。これらのホルモンは40代以降に分泌量が低下しやすく、活力や気力の低下、体脂肪の増加に影響します。定期的な筋トレによってホルモンバランスが改善されると、体だけでなくメンタル面にも良い変化が現れることがあります。
              </p>

              <h3 className="font-bold text-gray-800 mt-4 mb-2">
                生活習慣病の予防
              </h3>
              <p>
                筋肉は血糖値の調節に重要な役割を担っています。筋肉量が多いほど血糖を取り込む能力が高まり、インスリン感受性が改善されます。これにより、2型糖尿病や高血圧、脂質異常症といった生活習慣病のリスクを下げる効果も期待できます。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                無理のない始め方
              </h2>
              <p>
                40代から筋トレを始める際に最も大切なのは、「無理をしない」ことです。20代・30代の頃と同じ感覚でハードなトレーニングをすると、怪我のリスクが高まります。
              </p>

              <h3 className="font-bold text-gray-800 mt-4 mb-2">
                まずは週2回から始める
              </h3>
              <p>
                40代の初心者には、週2回のトレーニングが最適なスタートです。たとえば月曜と木曜、または火曜と金曜のように、2〜3日の間隔を空けてトレーニングを行いましょう。この頻度なら筋肉の回復時間を十分に確保できます。
              </p>
              <p className="mt-2">
                まずは2〜3ヶ月継続することを目標にしてください。体が筋トレに慣れ、基礎的な筋力がついてきたら、徐々に頻度や強度を上げていきましょう。
              </p>

              <h3 className="font-bold text-gray-800 mt-4 mb-2">
                自体重トレーニングから始める
              </h3>
              <p>
                器具がなくても、自体重（自分の体重）を使ったトレーニングで十分な効果が得られます。スクワット、腕立て伏せ、プランクなどは特別な道具が必要なく、自宅で手軽に始められます。
              </p>
              <div className="bg-gray-50 rounded-xl p-4 mt-3">
                <p className="font-bold text-gray-800 mb-2">
                  40代初心者におすすめのメニュー（週2回）
                </p>
                <ul className="space-y-1 text-gray-600">
                  <li>・スクワット：10〜15回 × 2セット</li>
                  <li>・腕立て伏せ（膝つき可）：8〜12回 × 2セット</li>
                  <li>・プランク：20〜30秒 × 2セット</li>
                  <li>・ヒップリフト：10〜15回 × 2セット</li>
                </ul>
              </div>
              <p className="mt-3">
                最初は「物足りないくらい」でちょうどいいです。翌日に極端な筋肉痛が残るようなら、強度を下げましょう。
              </p>

              <h3 className="font-bold text-gray-800 mt-4 mb-2">
                ウォームアップを丁寧に行う
              </h3>
              <p>
                40代以降は筋肉や関節の柔軟性が低下しやすいため、トレーニング前のウォームアップが特に重要です。5〜10分かけて体を温め、動的ストレッチで関節の可動域を広げてからトレーニングに入ることで、怪我のリスクを大幅に下げられます。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                40代が特に気をつけるポイント
              </h2>

              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">▸</span>
                  <p>
                    <span className="font-bold">回復に時間がかかることを理解する</span>：20〜30代に比べて回復速度が落ちています。筋肉痛がある部位は無理に鍛えず、しっかり休ませましょう。
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">▸</span>
                  <p>
                    <span className="font-bold">関節に優しいフォームを徹底する</span>：重量より正確なフォームを優先してください。フォームの崩れは関節への負担を増やし、慢性的な痛みの原因になります。
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">▸</span>
                  <p>
                    <span className="font-bold">痛みは我慢しない</span>：筋肉痛（じんわりした痛み）と怪我の痛み（鋭い痛み・関節の痛み）は別物です。怪我の痛みを感じたらすぐに中止し、必要に応じて医師に相談しましょう。
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">▸</span>
                  <p>
                    <span className="font-bold">睡眠と栄養を整える</span>：40代は睡眠の質が低下しやすい年代です。7〜8時間の睡眠と、体重あたり1.6g以上のタンパク質摂取を意識しましょう。
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">▸</span>
                  <p>
                    <span className="font-bold">健康診断の結果を確認する</span>：持病や高血圧、心臓疾患がある場合は、運動を始める前にかかりつけ医に相談することをおすすめします。
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                まとめ
              </h2>
              <p>
                40代からの筋トレは、決して遅くありません。むしろ、老化に伴う筋肉量の低下、代謝の悪化、骨密度の低下に対抗するためには、今すぐ始めることが理想的です。無理のないペースで週2回から始め、体の変化を楽しみながら続けていきましょう。
              </p>
              <p className="mt-2">
                サクトレでは、年齢や経験レベルに関係なく、6つの質問に答えるだけであなたに合ったトレーニングメニューを作成できます。40代からのスタートを、サクトレがサポートします。
              </p>
            </section>
          </div>
        </div>

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
