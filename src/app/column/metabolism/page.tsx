import Link from "next/link";

export const metadata = {
  title: "筋トレで痩せる仕組みを解説 - サクトレ",
  description:
    "基礎代謝と筋肉量の関係、筋トレで痩せるメカニズムをわかりやすく解説。有酸素運動との比較や、効率よく体脂肪を落とすための方法を紹介します。",
};

export default function MetabolismPage() {
  return (
    <main className="min-h-screen flex flex-col items-center px-4 py-8">
      <div className="max-w-md w-full animate-slideUp">
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <p className="text-xs text-orange-500 font-bold mb-2">コラム</p>
          <h1 className="text-xl font-bold text-gray-800 mb-6">
            筋トレで痩せる仕組みを解説
          </h1>

          <div className="space-y-6 text-sm text-gray-700 leading-relaxed">
            <section>
              <p>
                「筋トレって筋肉をつけるものでしょ？痩せるならランニングじゃないの？」と思っていませんか？実は、筋トレはダイエットにも非常に効果的なアプローチです。しかも、有酸素運動とは異なる仕組みで体脂肪を減らすため、組み合わせることでより大きな効果が得られます。この記事では、筋トレで痩せるメカニズムをわかりやすく解説します。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                基礎代謝とは何か
              </h2>
              <p>
                「代謝を上げれば痩せやすくなる」とよく聞きますが、代謝とは具体的に何でしょうか？
              </p>

              <h3 className="font-bold text-gray-800 mt-4 mb-2">
                1日の消費カロリーの内訳
              </h3>
              <p>
                人間が1日に消費するカロリーは、大きく3つに分けられます。
              </p>
              <div className="bg-gray-50 rounded-xl p-4 mt-3">
                <ul className="space-y-2 text-gray-600">
                  <li>
                    <span className="font-bold text-gray-800">基礎代謝（約60〜70%）</span>：何もしなくても生命維持のために消費するエネルギー。呼吸・体温維持・臓器の活動などに使われます。
                  </li>
                  <li>
                    <span className="font-bold text-gray-800">身体活動（約20〜30%）</span>：歩く・運動する・家事をするなど、体を動かすことで消費するエネルギー。
                  </li>
                  <li>
                    <span className="font-bold text-gray-800">食事誘発性熱産生（約10%）</span>：食べ物を消化・吸収する際に消費するエネルギー。
                  </li>
                </ul>
              </div>
              <p className="mt-3">
                このうち最も大きな割合を占めるのが基礎代謝です。基礎代謝が高いほど、何もしなくても多くのカロリーを消費できる「痩せやすい体」になります。
              </p>

              <h3 className="font-bold text-gray-800 mt-4 mb-2">
                基礎代謝を決める最大の要因は筋肉量
              </h3>
              <p>
                基礎代謝の大きさを決める要因はいくつかありますが、最も影響が大きいのが「筋肉量」です。筋肉は脂肪と比べてエネルギーを消費しやすい組織であり、筋肉量が多いほど基礎代謝が高くなります。
              </p>
              <p className="mt-2">
                参考として、筋肉1kgあたりの基礎代謝への寄与は1日約13kcalと言われています。一方、脂肪1kgは約4〜5kcalです。筋肉をつけることで、じわじわと基礎代謝を底上げできます。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                筋肉量と消費カロリーの関係
              </h2>
              <p>
                筋トレで筋肉量が増えると、どのように消費カロリーが変わるのでしょうか？
              </p>

              <h3 className="font-bold text-gray-800 mt-4 mb-2">
                アフターバーン効果（EPOC）
              </h3>
              <p>
                筋トレの最大の特徴は「アフターバーン効果（EPOC：運動後過剰酸素消費）」です。これは、激しい筋トレの後、筋肉の修復や体のホメオスタシス（恒常性）の回復のために、トレーニング終了後も数時間〜24時間以上にわたって多くのカロリーが消費される現象です。
              </p>
              <p className="mt-2">
                有酸素運動では運動中は多くのカロリーを消費しますが、終了後の消費量は急速に下がります。一方、筋トレはトレーニング後も長時間にわたって消費が続くため、「運動後も燃え続ける」効果があります。
              </p>

              <h3 className="font-bold text-gray-800 mt-4 mb-2">
                筋肉は24時間働く「燃焼エンジン」
              </h3>
              <p>
                筋トレで筋肉量を増やすことは、体に24時間365日動き続けるエンジンを搭載するようなイメージです。筋肉が増えた分だけ、寝ている間も含めてずっとカロリーを消費してくれます。
              </p>
              <div className="bg-gray-50 rounded-xl p-4 mt-3">
                <p className="font-bold text-gray-800 mb-2">
                  筋肉が増えると…
                </p>
                <ul className="space-y-1 text-gray-600">
                  <li>・同じ食事量でも太りにくくなる</li>
                  <li>・少し食べすぎても体重が戻りやすい</li>
                  <li>・体脂肪率が下がって引き締まって見える</li>
                  <li>・リバウンドしにくい体になる</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                有酸素運動との比較
              </h2>
              <p>
                「痩せるなら有酸素運動では？」という疑問に答えましょう。有酸素運動（ジョギング・ウォーキング・水泳など）と筋トレは、それぞれ異なる特性を持っています。
              </p>

              <div className="bg-gray-50 rounded-xl p-4 mt-3 space-y-3">
                <div>
                  <p className="font-bold text-gray-800">有酸素運動の特徴</p>
                  <ul className="mt-1 space-y-1 text-gray-600">
                    <li>・運動中の脂肪燃焼効率が高い</li>
                    <li>・心肺機能を高める効果がある</li>
                    <li>・筋肉量はほとんど増えない</li>
                    <li>・終了後の消費カロリーはすぐに戻る</li>
                    <li>・過度に行うと筋肉が分解されることがある</li>
                  </ul>
                </div>
                <div>
                  <p className="font-bold text-gray-800">筋トレの特徴</p>
                  <ul className="mt-1 space-y-1 text-gray-600">
                    <li>・運動中の直接的な脂肪燃焼は少ない</li>
                    <li>・筋肉量が増えて基礎代謝が上がる</li>
                    <li>・アフターバーン効果で長時間燃焼が続く</li>
                    <li>・リバウンドしにくい体質になる</li>
                    <li>・体型が引き締まって見える（体重変化が少なくても）</li>
                  </ul>
                </div>
              </div>

              <h3 className="font-bold text-gray-800 mt-4 mb-2">
                最も効果的な組み合わせ方
              </h3>
              <p>
                ダイエット効果を最大化するには、筋トレと有酸素運動を組み合わせるのが理想的です。ただし、順番が重要です。
              </p>
              <div className="space-y-2 mt-3">
                <div className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">▸</span>
                  <p>
                    <span className="font-bold">筋トレ → 有酸素運動の順</span>：筋トレでグリコーゲン（糖質エネルギー）を消費した後に有酸素運動を行うと、脂肪が優先的に使われやすくなります。
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">▸</span>
                  <p>
                    <span className="font-bold">別日に分ける</span>：筋トレ日と有酸素運動日を分けると、それぞれの質を高められます。筋トレ後は筋肉の回復に集中させましょう。
                  </p>
                </div>
              </div>

              <h3 className="font-bold text-gray-800 mt-4 mb-2">
                「体重より体脂肪率」を意識しよう
              </h3>
              <p>
                筋トレで筋肉が増えると、体重が変わらなくても見た目が大きく変わることがあります。これは筋肉が脂肪より密度が高いためで、同じ体重でも筋肉が多い方がスリムに見えます。体重計の数字だけに一喜一憂せず、体脂肪率や見た目の変化で成果を評価しましょう。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                まとめ
              </h2>
              <p>
                筋トレで痩せる仕組みは「筋肉量を増やすことで基礎代謝を底上げし、アフターバーン効果によってトレーニング後も長時間カロリーを消費し続ける」ことにあります。有酸素運動が運動中の脂肪燃焼に優れているのに対し、筋トレは長期的な痩せやすい体質づくりに優れています。
              </p>
              <p className="mt-2">
                ダイエット目的でも、筋トレは非常に効果的な手段です。サクトレであなたの目標（体脂肪を落としたい・引き締めたいなど）に合ったメニューを作成し、理想の体を目指しましょう。
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
