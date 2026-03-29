import Link from "next/link";

export const metadata = {
  title: "筋トレのモチベーション維持法 - サクトレ",
  description:
    "筋トレを長く続けるためのコツ、効果的な目標設定の方法、停滞期の乗り越え方をわかりやすく解説します。",
};

export default function MotivationPage() {
  return (
    <main className="min-h-screen flex flex-col items-center px-4 py-8">
      <div className="max-w-md w-full animate-slideUp">
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <p className="text-xs text-orange-500 font-bold mb-2">コラム</p>
          <h1 className="text-xl font-bold text-gray-800 mb-6">
            筋トレのモチベーション維持法
          </h1>

          <div className="space-y-6 text-sm text-gray-700 leading-relaxed">
            <section>
              <p className="text-gray-500 italic border-l-2 border-orange-300 pl-3 mb-3">
                筋トレ10年以上続けてきた私でも、モチベーションが落ちた時期は何度もあります。そこで実際に効果があった方法だけを厳選して紹介します。
              </p>
              <p>
                筋トレを始めたばかりの頃は意欲満々でも、数週間後には「なんとなくサボってしまう」「やる気が出ない」という状態に陥る方は少なくありません。実は筋トレを続けられるかどうかは、意志の強さよりも「仕組みと考え方」にかかっています。この記事では、筋トレを長期間続けるための実践的なモチベーション維持法を紹介します。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                続けるためのコツ
              </h2>

              <h3 className="font-bold text-gray-800 mt-4 mb-2">
                ハードルを極限まで下げる
              </h3>
              <p>
                モチベーションが下がったときでも続けられる人の共通点は、「ハードルを低く設定している」ことです。「今日は疲れているから腕立て伏せ5回だけでいい」という基準を作ってしまいましょう。5回やり始めると不思議と体が動き出し、結局いつものセット数をこなせることがほとんどです。
              </p>
              <p className="mt-2">
                「全力でやれないなら意味がない」と考えるのは危険な思考です。短時間・低強度でも筋トレを続けることの方が、完全にサボるよりずっと価値があります。習慣を途切れさせないことが最優先です。
              </p>

              <h3 className="font-bold text-gray-800 mt-4 mb-2">
                トレーニングをルーティン化する
              </h3>
              <p>
                モチベーションに頼らず動けるようにするには、筋トレを「考えなくてもやる行動」にする必要があります。曜日・時間・場所を固定して、歯磨きと同じ感覚でトレーニングできる状態を目指しましょう。
              </p>
              <p className="mt-2">
                たとえば「月・水・金の朝7時に自宅でトレーニング」と決めたら、その時間はトレーニングしかしないと決めてしまいます。習慣化されるまでの目安は66日（約2ヶ月）と言われています。最初の2ヶ月を乗り越えれば、モチベーションがなくても体が動くようになります。
              </p>

              <h3 className="font-bold text-gray-800 mt-4 mb-2">
                記録をつけて成長を可視化する
              </h3>
              <p>
                トレーニング記録をつけることは、モチベーション維持に非常に効果的です。重量・回数・セット数を記録しておくと、「先月より5kg重い重量を扱えるようになった」「1ヶ月前より5回多くできた」という成長が数字で見えてきます。
              </p>
              <p className="mt-2">
                人間の脳は数値化された成長に強い達成感を感じます。ノートでもスマホのメモでも、続けやすい方法で記録してみてください。
              </p>

              <h3 className="font-bold text-gray-800 mt-4 mb-2">
                仲間やコミュニティを活用する
              </h3>
              <p>
                一人で続けることが難しい場合は、一緒にトレーニングする仲間を作るのが効果的です。ジムで顔見知りを作る、SNSで同じ目標を持つ人とつながる、友人を誘ってみるなど、小さなつながりがサボりにくい環境を作ってくれます。
              </p>
              <p className="mt-2">
                SNSにトレーニング記録を投稿することも、「見てくれている人がいる」というプレッシャーが良い意味でのモチベーションになります。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                目標設定の方法
              </h2>
              <p>
                間違った目標設定がモチベーション低下の原因になることがあります。効果的な目標を立てるためのポイントを押さえましょう。
              </p>

              <h3 className="font-bold text-gray-800 mt-4 mb-2">
                SMARTな目標を立てる
              </h3>
              <p>
                良い目標の条件として「SMART」という考え方があります。
              </p>
              <div className="bg-gray-50 rounded-xl p-4 mt-3">
                <ul className="space-y-2 text-gray-600">
                  <li><span className="font-bold text-gray-800">S（Specific）具体的</span>：「痩せたい」ではなく「体脂肪率を20%から15%にする」</li>
                  <li><span className="font-bold text-gray-800">M（Measurable）測定可能</span>：体重・体脂肪率・扱える重量など数値で確認できる</li>
                  <li><span className="font-bold text-gray-800">A（Achievable）達成可能</span>：無理なく努力すれば届く範囲の目標</li>
                  <li><span className="font-bold text-gray-800">R（Relevant）関連性</span>：自分の本当の望みと一致している</li>
                  <li><span className="font-bold text-gray-800">T（Time-bound）期限あり</span>：「3ヶ月後までに」など期限を決める</li>
                </ul>
              </div>

              <h3 className="font-bold text-gray-800 mt-4 mb-2">
                大目標と小目標を組み合わせる
              </h3>
              <p>
                「半年で5kg減らす」という大目標だけでは、途中で達成感が得られずモチベーションが続きにくくなります。大目標を達成するための小目標（マイルストーン）を設定しましょう。
              </p>
              <p className="mt-2">
                たとえば「今月中に腕立て伏せを連続20回できるようにする」「来週は3日間トレーニングする」といった、1〜2週間で達成できる小さな目標を積み重ねることで、達成感が連続し、大目標へのモチベーションが維持されます。
              </p>

              <h3 className="font-bold text-gray-800 mt-4 mb-2">
                「なりたい自分」をイメージする
              </h3>
              <p>
                数値目標と合わせて、「なりたい自分の姿」を具体的にイメージすることも重要です。「夏に自信を持って海に行ける体になりたい」「スーツがかっこよく着られるようになりたい」など、感情を伴うビジョンはモチベーションの原動力になります。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                停滞期の乗り越え方
              </h2>
              <p>
                筋トレを続けていると、必ずと言っていいほど「停滞期」が訪れます。体重が変わらない、重量が伸びない、見た目が変わらない——そんな時期が2〜3ヶ月続くこともあります。停滞期はサボっているからではなく、体が適応している証拠です。
              </p>

              <h3 className="font-bold text-gray-800 mt-4 mb-2">
                停滞期に試すべきこと
              </h3>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">▸</span>
                  <p>
                    <span className="font-bold">メニューを変える</span>：同じトレーニングを続けると筋肉が慣れてしまいます。種目・重量・回数・セット数のどれかを変えて、筋肉に新鮮な刺激を与えましょう。
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">▸</span>
                  <p>
                    <span className="font-bold">デロード週を設ける</span>：1〜2ヶ月に一度、負荷を大幅に下げた「軽い週」を設けると、体の疲労が回復してその後の伸びが良くなります。
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">▸</span>
                  <p>
                    <span className="font-bold">食事を見直す</span>：筋肉の成長に必要なタンパク質や総カロリーが不足していないか確認しましょう。停滞の原因が栄養不足であることは多いです。
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">▸</span>
                  <p>
                    <span className="font-bold">比較対象を変える</span>：昨日や先週と比べるのではなく、3ヶ月前・半年前の自分と比べましょう。短期間では見えにくい変化も、長い目で見ると必ず成長しています。
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">▸</span>
                  <p>
                    <span className="font-bold">「続けること」自体を目標にする</span>：停滞期こそ、成果を求めず「今日もやった」という事実だけを積み重ねましょう。継続した時間は裏切りません。
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                まとめ
              </h2>
              <p>
                筋トレのモチベーションを維持するためには、意志の力に頼らず「仕組みと習慣」で動ける状態を作ることが大切です。ハードルを下げてルーティン化し、具体的な目標と記録で成長を実感しながら、停滞期も焦らず乗り越えていきましょう。
              </p>
              <p className="mt-2">
                サクトレでは、あなたのペースや目標に合わせたトレーニングメニューを自動で作成します。まず「何をすればいいか」を明確にすることが、続けるための第一歩です。
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
