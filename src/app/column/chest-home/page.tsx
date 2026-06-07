import Link from "next/link";

export const metadata = {
  title: "自宅でできる胸トレ完全ガイド - サクトレ",
  description:
    "器具なしの腕立て伏せバリエーションからダンベル種目まで、自宅でできる胸トレを完全解説。大胸筋に効かせるためのコツも紹介します。",
};

export default function ChestHomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center px-4 py-8">
      <div className="max-w-md w-full animate-slideUp">
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <p className="text-xs text-orange-500 font-bold mb-2">コラム</p>
          <h1 className="text-xl font-bold text-gray-800 mb-6">
            自宅でできる胸トレ完全ガイド
          </h1>

          <div className="space-y-6 text-sm text-gray-700 leading-relaxed">
            <section>
              <p>
                「胸板を厚くしたい」「バストアップしたい」「姿勢を良くしたい」——胸の筋肉（大胸筋）を鍛えることは、見た目の変化だけでなく、肩こりの改善や姿勢の改善にもつながります。ジムに行かなくても、自宅でしっかりと胸を鍛える方法があります。この記事では、器具なしとダンベルを使った胸トレメニューを幅広く紹介します。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                器具なし編：腕立て伏せバリエーション
              </h2>
              <p>
                腕立て伏せ（プッシュアップ）は、器具を使わずに大胸筋を鍛えられる最も優れた種目です。手の位置や体の角度を変えるだけで、効かせる部位をコントロールできます。
              </p>

              <h3 className="font-bold text-gray-800 mt-4 mb-2">
                1. 標準腕立て伏せ（ノーマルプッシュアップ）
              </h3>
              <div className="border border-gray-100 rounded-xl p-3">
                <p className="text-gray-600">
                  両手を肩幅より少し広めに置き、体を一直線に保ちながら胸を床に近づけます。肘は45度程度に曲がる角度が理想です。大胸筋全体に効く基本種目。10〜15回 × 3セット。
                </p>
              </div>

              <h3 className="font-bold text-gray-800 mt-4 mb-2">
                2. ワイドプッシュアップ
              </h3>
              <div className="border border-gray-100 rounded-xl p-3">
                <p className="text-gray-600">
                  手の位置を肩幅より大きく広げます（肩幅の約1.5倍）。大胸筋の内側（胸の中央）により強い刺激を与えられます。胸の厚みを出したい方に特におすすめ。8〜12回 × 3セット。
                </p>
              </div>

              <h3 className="font-bold text-gray-800 mt-4 mb-2">
                3. ナロープッシュアップ（ダイヤモンドプッシュアップ）
              </h3>
              <div className="border border-gray-100 rounded-xl p-3">
                <p className="text-gray-600">
                  両手を近づけてひし形（ダイヤモンド形）を作り、その上に体を乗せます。大胸筋の内側と上腕三頭筋（二の腕）を集中的に鍛えられます。難易度は少し高め。6〜10回 × 3セット。
                </p>
              </div>

              <h3 className="font-bold text-gray-800 mt-4 mb-2">
                4. デクラインプッシュアップ
              </h3>
              <div className="border border-gray-100 rounded-xl p-3">
                <p className="text-gray-600">
                  足を椅子やベッドの上に乗せ、頭が低くなる姿勢で行います。大胸筋の上部（鎖骨周り）に効かせられ、首から肩にかけてのラインを整えるのに効果的。8〜12回 × 3セット。
                </p>
              </div>

              <h3 className="font-bold text-gray-800 mt-4 mb-2">
                5. インクラインプッシュアップ
              </h3>
              <div className="border border-gray-100 rounded-xl p-3">
                <p className="text-gray-600">
                  机や椅子の縁に手をつき、斜め上から体を押し上げます。大胸筋の下部に効果的で、初心者や筋力が弱い方のウォームアップにも最適。15〜20回 × 3セット。
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                ダンベル編
              </h2>
              <p>
                ダンベルがあると胸トレの幅が大きく広がります。可変式ダンベル（重さを調節できるタイプ）が一つあれば、ジムと同等の胸トレが自宅で可能になります。
              </p>

              <h3 className="font-bold text-gray-800 mt-4 mb-2">
                1. ダンベルフライ
              </h3>
              <div className="border border-gray-100 rounded-xl p-3">
                <p className="text-gray-600">
                  床またはベンチに仰向けになり、両手にダンベルを持って胸の前で構えます。肘を少し曲げたまま、腕を横に大きく開き、胸が十分に伸びたら元の位置に戻します。大胸筋を大きく引き伸ばして収縮させるため、筋肉への刺激が強い種目です。10〜12回 × 3セット。
                </p>
              </div>

              <h3 className="font-bold text-gray-800 mt-4 mb-2">
                2. ダンベルプレス
              </h3>
              <div className="border border-gray-100 rounded-xl p-3">
                <p className="text-gray-600">
                  仰向けになり、両手のダンベルを胸の高さで持ち、真上に押し上げます。バーベルのベンチプレスに近い動きで、大胸筋・三角筋前部・上腕三頭筋をまとめて鍛えられます。8〜10回 × 3セット。
                </p>
              </div>

              <h3 className="font-bold text-gray-800 mt-4 mb-2">
                3. ダンベルプルオーバー
              </h3>
              <div className="border border-gray-100 rounded-xl p-3">
                <p className="text-gray-600">
                  仰向けで膝を立て、両手でダンベルを持ち胸の上に構えます。腕を伸ばしたまま頭の後ろ方向へゆっくり下ろし、胸を大きく開きます。大胸筋の上部と広背筋（背中）を同時に伸ばせる珍しい種目です。10〜12回 × 3セット。
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                大胸筋に効かせるコツ
              </h2>
              <p>
                胸トレをしているのに「腕ばかり疲れる」「肩に効いてしまう」という経験はありませんか？それはフォームや意識の持ち方に問題があることが多いです。
              </p>

              <div className="space-y-2 mt-3">
                <div className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">▸</span>
                  <p>
                    <span className="font-bold">胸を張り、肩甲骨を寄せる</span>：腕立て伏せでもダンベル種目でも、肩甲骨を内側に寄せて胸を開く意識が大切です。肩が前に出ると三角筋に逃げてしまいます。
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">▸</span>
                  <p>
                    <span className="font-bold">大胸筋を意識して動かす</span>：「胸で押す」「胸を使って上げる」というイメージを持ちましょう。手や腕で動かそうとすると腕の筋肉ばかり使ってしまいます。
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">▸</span>
                  <p>
                    <span className="font-bold">ゆっくり下ろす（ネガティブ動作）</span>：筋肉への刺激は下ろす動作（エキセントリック収縮）でより強くなります。2〜3秒かけてゆっくり下ろすと効果が高まります。
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">▸</span>
                  <p>
                    <span className="font-bold">胸が完全に伸びる位置まで下ろす</span>：可動域を広げることで筋肉への刺激が増します。ただし、無理に深く下ろして肩を痛めないよう注意してください。
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">▸</span>
                  <p>
                    <span className="font-bold">頂点で1秒止める（ピークコントラクション）</span>：押し上げた最高点で1秒間力を入れて保持すると、大胸筋の収縮をより強く感じられます。
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-4 mt-4">
                <p className="font-bold text-gray-800 mb-2">
                  自宅胸トレ週2回メニュー例
                </p>
                <p className="text-gray-600 mb-2">器具なし</p>
                <ul className="space-y-1 text-gray-600 mb-3">
                  <li>・ノーマルプッシュアップ：12回 × 3セット</li>
                  <li>・ワイドプッシュアップ：10回 × 3セット</li>
                  <li>・デクラインプッシュアップ：8回 × 3セット</li>
                </ul>
                <p className="text-gray-600 mb-2">ダンベルあり</p>
                <ul className="space-y-1 text-gray-600">
                  <li>・ダンベルフライ：12回 × 3セット</li>
                  <li>・ダンベルプレス：10回 × 3セット</li>
                  <li>・ナロープッシュアップ：10回 × 2セット</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                まとめ
              </h2>
              <p>
                自宅でも腕立て伏せのバリエーションやダンベル種目を組み合わせることで、大胸筋を効果的に鍛えることができます。大切なのは、正しいフォームで胸に意識を集中させながら行うことです。
              </p>
              <p className="mt-2">
                サクトレでは自宅トレーニングに最適化したメニューも作成できます。「自宅」「器具なし」などの条件に合わせたメニューを自動で生成しますので、ぜひ活用してみてください。
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
