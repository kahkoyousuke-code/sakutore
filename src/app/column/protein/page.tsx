import Link from "next/link";

export const metadata = {
  title: "筋トレに必要なタンパク質の量と摂り方 - サクトレ",
  description:
    "筋トレの効果を最大化するために必要なタンパク質の量、摂取タイミング、おすすめの食材をわかりやすく解説します。",
};

export default function ProteinPage() {
  return (
    <main className="min-h-screen flex flex-col items-center px-4 py-8">
      <div className="max-w-md w-full animate-slideUp">
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <p className="text-xs text-orange-500 font-bold mb-2">コラム</p>
          <h1 className="text-xl font-bold text-gray-800 mb-6">
            筋トレに必要なタンパク質の量と摂り方
          </h1>

          <div className="space-y-6 text-sm text-gray-700 leading-relaxed">
            <section>
              <p>
                筋トレの効果を最大限に引き出すためには、トレーニングだけでなく栄養管理も欠かせません。中でも筋肉の材料となるタンパク質は、筋トレをする人にとって最も重要な栄養素です。この記事では、必要なタンパク質の量や効果的な摂り方について詳しく解説します。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                なぜタンパク質が重要なのか
              </h2>
              <p>
                筋肉は主にタンパク質（アミノ酸）で構成されています。筋トレで筋繊維に微細なダメージを与えた後、体はタンパク質を使って筋肉を修復・強化します。この「超回復」のプロセスで筋肉が成長していくのです。
              </p>
              <p className="mt-2">
                タンパク質が不足していると、いくらトレーニングをしても筋肉の修復が追いつかず、期待した効果が得られません。逆に十分なタンパク質を摂取することで、トレーニングの効果を最大化できます。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                1日に必要なタンパク質の量
              </h2>
              <p>
                筋トレをしている人に必要なタンパク質の量は、体重1kgあたり1.6〜2.2gが一般的な目安とされています。例えば体重60kgの人なら、1日96〜132gのタンパク質が必要です。
              </p>
              <div className="bg-gray-50 rounded-xl p-4 mt-3">
                <p className="font-bold text-gray-800 mb-2">目安量の計算例</p>
                <ul className="space-y-1 text-gray-600">
                  <li>体重50kg → 80〜110g/日</li>
                  <li>体重60kg → 96〜132g/日</li>
                  <li>体重70kg → 112〜154g/日</li>
                  <li>体重80kg → 128〜176g/日</li>
                </ul>
              </div>
              <p className="mt-3">
                運動をしていない一般的な成人の場合は体重1kgあたり0.8g程度で十分ですが、筋トレをしている場合はその2倍以上が必要になります。初心者のうちは、まず体重1kgあたり1.6gを目標にするとよいでしょう。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                タンパク質を多く含む食材
              </h2>
              <p>
                日常の食事からしっかりタンパク質を摂るためには、高タンパクな食材を意識的に取り入れることが大切です。以下に代表的な食材とタンパク質量をまとめました。
              </p>
              <div className="bg-gray-50 rounded-xl p-4 mt-3">
                <p className="font-bold text-gray-800 mb-2">
                  食材ごとのタンパク質量（100gあたり）
                </p>
                <ul className="space-y-1 text-gray-600">
                  <li>鶏むね肉（皮なし）：約23g</li>
                  <li>鶏ささみ：約24g</li>
                  <li>豚ヒレ肉：約22g</li>
                  <li>鮭：約20g</li>
                  <li>卵1個（約50g）：約6g</li>
                  <li>納豆1パック（40g）：約7g</li>
                  <li>木綿豆腐：約7g</li>
                  <li>ギリシャヨーグルト：約10g</li>
                </ul>
              </div>
              <p className="mt-3">
                肉・魚・卵・大豆製品・乳製品をバランスよく組み合わせることで、無理なく必要量を摂取できます。食事だけで足りない場合は、プロテインパウダーを活用するのも効果的です。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                効果的な摂取タイミング
              </h2>
              <p>
                タンパク質は一度に大量に摂るよりも、1日を通してこまめに摂取する方が筋肉合成に効果的です。1回の食事で20〜40g程度を目安に、3〜5回に分けて摂取しましょう。
              </p>
              <div className="space-y-2 mt-3">
                <div className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">▸</span>
                  <p>
                    <span className="font-bold">朝食</span>：睡眠中に枯渇したタンパク質を補給。卵や納豆、ヨーグルトなどが手軽です。
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">▸</span>
                  <p>
                    <span className="font-bold">トレーニング後</span>：筋肉の合成が最も活発になるタイミング。トレーニング後30分〜2時間以内が理想です。
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">▸</span>
                  <p>
                    <span className="font-bold">就寝前</span>：睡眠中の筋肉修復を助けます。カゼインプロテインやギリシャヨーグルトがおすすめです。
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                まとめ
              </h2>
              <p>
                筋トレの効果を最大化するには、体重1kgあたり1.6〜2.2gのタンパク質を毎日摂取することが重要です。肉・魚・卵・大豆製品を中心にバランスよく食べ、1日を通してこまめに摂取しましょう。食事だけでは難しい場合は、プロテインも上手に活用してください。
              </p>
              <p className="mt-2">
                まずはサクトレであなたに合ったトレーニングメニューを作り、栄養管理と合わせて理想の体づくりを始めましょう。
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
