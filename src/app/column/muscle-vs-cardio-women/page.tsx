import Link from "next/link";

export const metadata = {
  title: "脂肪燃焼に筋トレが有酸素運動より効果的な理由 - サクトレ",
  description:
    "ランニングより筋トレの方が長期的に痩せやすい理由を、基礎代謝とアフターバーン効果から解説。女性が結果を出すための運動選びを紹介します。",
};

export default function MuscleVsCardioWomenPage() {
  return (
    <main className="min-h-screen flex flex-col items-center px-4 py-8">
      <div className="max-w-md w-full animate-slideUp">
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <p className="text-xs text-orange-500 font-bold mb-2">コラム</p>
          <h1 className="text-xl font-bold text-gray-800 mb-6">
            脂肪燃焼に筋トレが有酸素運動より効果的な理由
          </h1>

          <div className="space-y-6 text-sm text-gray-700 leading-relaxed">
            <section>
              <p className="text-gray-500 italic border-l-2 border-orange-300 pl-3 mb-3">
                20代の頃、走るだけのダイエットで全然結果が出なかった経験があります。筋トレを始めてから体が変わった理由を解説します。
              </p>
              <p>
                「痩せたいならランニング」というイメージは根強くあります。しかし実際には、長期的な脂肪燃焼において筋トレは有酸素運動を上回る効果を発揮します。この記事では、筋トレが脂肪燃焼に優れている理由を「基礎代謝」と「アフターバーン効果」という2つの観点から詳しく解説します。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                有酸素運動だけでは痩せにくい理由
              </h2>
              <p>
                ランニングや自転車などの有酸素運動は、運動中に脂肪をエネルギーとして使うため、一時的に脂肪を燃焼させる効果があります。しかし、有酸素運動には大きな落とし穴があります。
              </p>

              <h3 className="font-bold text-gray-800 mt-4 mb-2">
                筋肉も失ってしまう
              </h3>
              <p>
                過度な有酸素運動を続けると、体はエネルギー源として脂肪だけでなく筋肉（タンパク質）も分解して使うようになります。これを「筋肉の異化（カタボリズム）」と言います。筋肉が減ると基礎代謝が低下し、かえって太りやすい体になってしまいます。
              </p>

              <h3 className="font-bold text-gray-800 mt-4 mb-2">
                体が慣れて消費カロリーが減る
              </h3>
              <p>
                同じ有酸素運動を繰り返すと、体はその運動に慣れて効率的に行えるようになります。これは体の適応反応ですが、ダイエット目的では「同じ運動でも消費カロリーが減っていく」というデメリットになります。結果として、同じ効果を得るために運動量をどんどん増やさなければならなくなります。
              </p>

              <h3 className="font-bold text-gray-800 mt-4 mb-2">
                食欲が増加しやすい
              </h3>
              <p>
                長時間の有酸素運動は食欲を増進させるホルモン（グレリン）の分泌を高めることがわかっています。「走った後に食欲が増してかえって食べ過ぎてしまう」という経験がある方も多いのではないでしょうか。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                筋トレが脂肪燃焼に優れている2つの理由
              </h2>

              <h3 className="font-bold text-gray-800 mt-4 mb-2">
                1. 基礎代謝が上がる
              </h3>
              <p>
                筋肉は安静時でも多くのエネルギーを消費する「代謝が高い組織」です。筋肉量が1kg増えると、1日あたりの基礎代謝が約50〜100kcal程度上がると言われています。
              </p>
              <p className="mt-2">
                たとえば筋肉を2kg増やすだけで、1日100〜200kcal余分に消費できるようになります。1ヶ月で3,000〜6,000kcal、体脂肪に換算すると約400〜800gの差になります。何も意識しなくても、筋肉があるだけで自動的に脂肪が燃え続けるのです。
              </p>

              <div className="bg-gray-50 rounded-xl p-4 mt-3">
                <p className="font-bold text-gray-800 mb-2">基礎代謝の比較イメージ</p>
                <ul className="space-y-1 text-gray-600">
                  <li>・筋肉なし：1日1,200kcal消費（例）</li>
                  <li>・筋肉2kg増：1日1,400kcal消費（例）</li>
                  <li>・1ヶ月の差：約6,000kcal ≒ 体脂肪約800g</li>
                </ul>
              </div>

              <h3 className="font-bold text-gray-800 mt-4 mb-2">
                2. アフターバーン効果（EPOC）
              </h3>
              <p>
                「アフターバーン効果」とは、運動後も体が通常より多くのカロリーを消費し続ける現象のことです。正式名称は「EPOC（運動後過剰酸素消費量）」と言います。
              </p>
              <p className="mt-2">
                有酸素運動後のEPOCは数時間程度で収まることが多いのに対し、筋トレ（特に高強度のもの）後のEPOCは24〜48時間続くことが研究で示されています。つまり筋トレをした翌日・翌々日も、体は余分にカロリーを消費し続けているのです。
              </p>
              <p className="mt-2">
                これが「筋トレは運動していない時間でも脂肪を燃やし続ける」と言われる理由です。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                最も効果的なのは「筋トレ＋有酸素運動」の組み合わせ
              </h2>
              <p>
                筋トレが優れているとはいえ、有酸素運動をまったく行わなくていいというわけではありません。最も効果的なのは、両方を組み合わせることです。
              </p>
              <p className="mt-2">
                理想的な順番は「筋トレ→有酸素運動」です。先に筋トレで糖質を消費しておくことで、その後の有酸素運動で脂肪が燃えやすい状態をつくれます。また、有酸素運動は心肺機能を高め、筋トレのパフォーマンス向上にもつながります。
              </p>

              <div className="bg-gray-50 rounded-xl p-4 mt-3">
                <p className="font-bold text-gray-800 mb-2">週3〜4日の理想的なスケジュール（例）</p>
                <ul className="space-y-1 text-gray-600">
                  <li>・月：筋トレ30分 → 有酸素20分</li>
                  <li>・水：筋トレ30分 → 有酸素20分</li>
                  <li>・金：筋トレ30分 → 有酸素20分</li>
                  <li>・土：軽い有酸素のみ（ウォーキングなど）</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                女性が筋トレで結果を出すためのポイント
              </h2>

              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">▸</span>
                  <p>
                    <span className="font-bold">体重より体脂肪率を指標にする</span>：筋トレ中は筋肉が増えて体重が変わりにくくなることがありますが、体脂肪率は確実に下がっています。体重だけで判断しないようにしましょう。
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">▸</span>
                  <p>
                    <span className="font-bold">タンパク質をしっかり摂る</span>：筋肉をつくるためには材料となるタンパク質が必要です。体重1kgあたり1.2〜1.6gを目安に毎日摂取しましょう。
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">▸</span>
                  <p>
                    <span className="font-bold">3ヶ月は続ける</span>：筋トレの効果が実感できるまでには3ヶ月程度かかります。焦らず継続することが最も重要です。
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                まとめ
              </h2>
              <p>
                有酸素運動は運動中だけ脂肪を燃やしますが、筋トレは「基礎代謝の向上」と「アフターバーン効果」によって24時間脂肪を燃やし続ける体をつくります。長期的に痩せた体を維持したいなら、筋トレを中心に据えることが最も効率的な選択です。
              </p>
              <p className="mt-2">
                サクトレではいくつかの質問に答えるだけで、あなたの体型・目的に合った筋トレメニューを提案します。まずは一歩踏み出してみてください。
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
