import Link from "next/link";

export const metadata = {
  title: "10年筋トレを続けてわかったこと - サクトレ",
  description:
    "10年間筋トレを続けることで得られる体の変化、メンタルの変化、そして続けてよかったと感じる理由を体験談をもとに解説します。",
};

export default function TenYearsPage() {
  return (
    <main className="min-h-screen flex flex-col items-center px-4 py-8">
      <div className="max-w-md w-full animate-slideUp">
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <p className="text-xs text-orange-500 font-bold mb-2">コラム</p>
          <h1 className="text-xl font-bold text-gray-800 mb-6">
            10年筋トレを続けてわかったこと
          </h1>

          <div className="space-y-6 text-sm text-gray-700 leading-relaxed">
            <section>
              <p>
                筋トレを始めて1年も経たないうちに「本当に効果があるのだろうか」と疑問を感じ、やめてしまう方は少なくありません。しかし、筋トレは1年・3年・5年・10年と続けるにつれて、体だけでなく人生に与えるインパクトが指数関数的に大きくなっていきます。10年間筋トレを続けることで見えてくる景色を、体の変化・メンタルの変化・続けてよかったこと、の3つの視点からお伝えします。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                体の変化
              </h2>

              <h3 className="font-bold text-gray-800 mt-4 mb-2">
                1〜2年：基礎が固まる時期
              </h3>
              <p>
                筋トレを始めてから1〜2年は、「初心者ボーナス期間」とも呼ばれます。筋肉がトレーニング刺激に慣れていないため、比較的短期間で体の変化を感じやすい時期です。正しいフォームを身につけ、扱える重量が週単位で伸びていく喜びを体験できます。
              </p>
              <p className="mt-2">
                この時期は体脂肪が落ちながら筋肉がつく「リコンポジション」が起きやすく、体重があまり変わらなくても見た目が大きく変わることがあります。
              </p>

              <h3 className="font-bold text-gray-800 mt-4 mb-2">
                3〜5年：土台が完成する時期
              </h3>
              <p>
                3〜5年続けると、筋肉の付き方が本格的になってきます。服の上からでもわかるような体の変化が生まれ、周囲から「体格が変わったね」と言われることも増えてきます。
              </p>
              <p className="mt-2">
                この頃には基礎代謝が大きく上がり、食事量が変わらなくても太りにくい体になります。また、骨密度の上昇や姿勢の改善も顕著になり、見た目だけでなく体の機能的な若さを実感できるようになります。
              </p>

              <h3 className="font-bold text-gray-800 mt-4 mb-2">
                10年：加齢に打ち勝つ体
              </h3>
              <p>
                10年間継続することで得られる最大の恩恵は「同世代との圧倒的な差」です。何もしなければ30代以降は年1〜2%ずつ筋肉が失われていきますが、10年間筋トレを続けた人はこの老化のプロセスに抗い続けています。
              </p>
              <p className="mt-2">
                10年筋トレを続けた人の体は、同年代の平均と比べて筋肉量・骨密度・基礎代謝・柔軟性のすべてにおいて大きな差が生まれています。「年齢のわりに若く見える」という言葉を受けることが当たり前になります。
              </p>
              <div className="bg-gray-50 rounded-xl p-4 mt-3">
                <p className="font-bold text-gray-800 mb-2">10年で得られる体の変化</p>
                <ul className="space-y-1 text-gray-600">
                  <li>・筋肉量が大幅に増加し、基礎代謝が高い状態が続く</li>
                  <li>・骨密度が高く、骨折リスクが低い</li>
                  <li>・血糖値・血圧・コレステロール値などが健康的な範囲に</li>
                  <li>・姿勢が良く、関節の痛みが少ない</li>
                  <li>・免疫力が高く、風邪をひきにくい</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                メンタルの変化
              </h2>

              <h3 className="font-bold text-gray-800 mt-4 mb-2">
                自己効力感が高まる
              </h3>
              <p>
                筋トレを続けることで得られる最大のメンタル的変化が「自己効力感（自分はできるという感覚）」の向上です。昨日できなかった重量が今日できた、先月より多くの回数をこなせた——という小さな成功体験の積み重ねが、「継続すれば成長できる」という確信に変わっていきます。
              </p>
              <p className="mt-2">
                この自己効力感は筋トレにとどまらず、仕事や人間関係など人生の他の場面にも波及します。「努力し続ければ変われる」という信念を持った人は、困難な状況でも諦めにくくなります。
              </p>

              <h3 className="font-bold text-gray-800 mt-4 mb-2">
                ストレス耐性が上がる
              </h3>
              <p>
                運動にはコルチゾール（ストレスホルモン）を調節し、セロトニンやエンドルフィンなど幸福感に関わる神経伝達物質を増やす効果があります。定期的に筋トレを続けている人は、日常的なストレスへの耐性が上がり、同じ出来事でも感情的に揺さぶられにくくなることを体感しています。
              </p>
              <p className="mt-2">
                仕事が辛い日も、悩みがある日も、「とりあえずトレーニングしよう」と体を動かすことで気持ちが切り替わる——そんな習慣が10年続くと、精神的な安定の拠り所になります。
              </p>

              <h3 className="font-bold text-gray-800 mt-4 mb-2">
                長期的な思考ができるようになる
              </h3>
              <p>
                筋トレは「今日やった努力が体に現れるまでに時間がかかる」という性質を持っています。10年間この習慣を続けることで、「短期の結果より長期の積み重ねに目を向ける力」が自然と養われます。
              </p>
              <p className="mt-2">
                この考え方は、貯蓄・キャリア・人間関係など人生のあらゆる場面に応用できます。筋トレを10年続けた人が「仕事でも粘り強く取り組める」「焦らず物事を進められる」と語るのは、単なる偶然ではありません。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                続けてよかったこと
              </h2>

              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">▸</span>
                  <div>
                    <p className="font-bold">体の資産が増え続ける</p>
                    <p className="mt-1 text-gray-600">
                      筋トレに費やした時間は、筋肉・骨密度・代謝という「体の資産」になります。お金の資産と同様に、早く始めて長く続けるほど複利のように増えていきます。
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">▸</span>
                  <div>
                    <p className="font-bold">医療費が減る</p>
                    <p className="mt-1 text-gray-600">
                      定期的な運動習慣がある人は、生活習慣病・骨粗しょう症・腰痛などのリスクが大幅に下がります。10年単位で考えると、筋トレを続けることで節約できる医療費は決して小さくありません。
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">▸</span>
                  <div>
                    <p className="font-bold">年齢を重ねるのが怖くなくなる</p>
                    <p className="mt-1 text-gray-600">
                      筋トレを続けている人にとって、加齢は「衰えていく過程」ではなく「積み上げてきた体が証明される時間」になります。40代・50代でも体力と体型を維持できている実感が、年齢への不安を和らげます。
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">▸</span>
                  <div>
                    <p className="font-bold">仲間・コミュニティができる</p>
                    <p className="mt-1 text-gray-600">
                      ジムで顔なじみができたり、同じ趣味を持つ友人ができたりと、筋トレを通じた人間関係が広がります。年齢・職業・背景を超えた「共通の話題と目標」が人をつなぎます。
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">▸</span>
                  <div>
                    <p className="font-bold">「続けた」という誇りが生まれる</p>
                    <p className="mt-1 text-gray-600">
                      10年間何かを続けることができた人は、世の中にそれほど多くありません。筋トレを続けた事実そのものが、自分自身への誇りと自信の源になります。
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                まとめ
              </h2>
              <p>
                筋トレは始めてすぐに劇的な変化が起きるものではありませんが、1年・5年・10年と続けることで、体・メンタル・人生の質が着実に変わっていきます。「10年後の自分への投資」という視点で、今日から少しずつ積み上げていきましょう。
              </p>
              <p className="mt-2">
                10年の旅は、最初の一歩から始まります。サクトレで今日のメニューを作成し、あなたの筋トレライフをスタートさせてください。
              </p>
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
