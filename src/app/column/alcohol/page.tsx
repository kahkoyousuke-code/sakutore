import Link from "next/link";

export const metadata = {
  title: "筋トレとお酒の付き合い方 - サクトレ",
  description:
    "アルコールが筋肉や筋トレの効果に与える影響を解説。飲んでもいいタイミングや、お酒好きでも成果を出すためのコツを紹介します。",
};

export default function AlcoholPage() {
  return (
    <main className="min-h-screen flex flex-col items-center px-4 py-8">
      <div className="max-w-md w-full animate-slideUp">
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <p className="text-xs text-orange-500 font-bold mb-2">コラム</p>
          <h1 className="text-xl font-bold text-gray-800 mb-6">
            筋トレとお酒の付き合い方
          </h1>

          <div className="space-y-6 text-sm text-gray-700 leading-relaxed">
            <section>
              <p>
                筋トレをしているけれど、お酒も好き——そんな方にとって「飲んでいいのか、やめるべきか」は気になるテーマですよね。お酒を完全にやめる必要はありませんが、アルコールが筋肉や体に与える影響を正しく理解した上で付き合い方を考えることが大切です。この記事では、アルコールの影響と上手な付き合い方を解説します。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                アルコールが筋肉に与える影響
              </h2>
              <p>
                アルコール（エタノール）は、体内でさまざまな筋肉合成・回復のプロセスを妨げることが研究で明らかになっています。
              </p>

              <h3 className="font-bold text-gray-800 mt-4 mb-2">
                タンパク質合成を抑制する
              </h3>
              <p>
                筋トレ後には筋肉の修復と成長のためにタンパク質合成が活発になります。しかしアルコールはこのタンパク質合成のシグナル（mTOR経路）を阻害することが確認されています。つまり、トレーニング後に飲酒すると、せっかくの筋トレ効果が減少してしまう可能性があるのです。
              </p>
              <p className="mt-2">
                ある研究では、筋トレ後にアルコールを摂取したグループは、摂取しなかったグループと比べてタンパク質合成量が約37%低下したという結果も報告されています。
              </p>

              <h3 className="font-bold text-gray-800 mt-4 mb-2">
                成長ホルモンの分泌を妨げる
              </h3>
              <p>
                筋肉の修復と成長には成長ホルモンが欠かせません。成長ホルモンは主に睡眠中（特に深い睡眠時）に分泌されますが、アルコールは睡眠の質を低下させ、深い睡眠の時間を短くしてしまいます。その結果、成長ホルモンの分泌量が減り、筋肉の回復が遅れます。
              </p>

              <h3 className="font-bold text-gray-800 mt-4 mb-2">
                脱水と栄養の消費
              </h3>
              <p>
                アルコールには利尿作用があり、飲酒によって体内の水分が失われます。筋肉の約70%は水分で構成されており、脱水状態になると筋肉のパフォーマンスや回復力が低下します。また、アルコールを代謝する過程でビタミンB群や亜鉛などのミネラルが消費されるため、栄養面での損失も生じます。
              </p>

              <h3 className="font-bold text-gray-800 mt-4 mb-2">
                テストステロンを低下させる
              </h3>
              <p>
                アルコールは男性ホルモンであるテストステロンの分泌を抑制します。テストステロンは筋肉の合成を促進する重要なホルモンであるため、慢性的な大量飲酒は筋肉がつきにくい体質につながる可能性があります。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                飲んでもOKなタイミング
              </h2>
              <p>
                アルコールの影響を最小限に抑えながらお酒を楽しむには、タイミングが重要です。
              </p>

              <div className="space-y-3 mt-3">
                <div className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">▸</span>
                  <div>
                    <p className="font-bold">トレーニングをしない日（オフ日）</p>
                    <p className="mt-1">
                      筋トレをしない休養日であれば、比較的ダメージは少なくなります。トレーニング後24時間以上経過していれば、急性期の筋肉合成への影響は小さくなります。
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">▸</span>
                  <div>
                    <p className="font-bold">次のトレーニングまでに時間がある日</p>
                    <p className="mt-1">
                      翌日がトレーニング日の場合は、飲むとしても量を控えめにしましょう。アルコールの分解には1ユニット（ビール350ml缶1本分）あたり約1〜2時間かかります。
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">▸</span>
                  <div>
                    <p className="font-bold">トレーニングから最低3〜4時間後</p>
                    <p className="mt-1">
                      どうしてもトレーニング日に飲む場合は、トレーニング後にまずタンパク質をしっかり摂取してから、最低でも3〜4時間後に飲むようにしましょう。
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                お酒好きでも成果を出すコツ
              </h2>
              <p>
                お酒が好きでも、工夫次第で筋トレの成果を出すことは十分可能です。完全禁酒でなくても、以下のポイントを意識するだけで大きく変わります。
              </p>

              <h3 className="font-bold text-gray-800 mt-4 mb-2">
                飲む量を「週単位」で管理する
              </h3>
              <p>
                毎日少し飲むよりも、週に1〜2日に集中させる方がダメージを最小化できます。厚生労働省が推奨する「節度ある適度な飲酒」は、1日あたり純アルコール20g程度（ビール中瓶1本・日本酒1合・ワイン2杯弱）です。これを週単位で守ることを意識してみましょう。
              </p>

              <h3 className="font-bold text-gray-800 mt-4 mb-2">
                飲む前後にタンパク質を摂る
              </h3>
              <p>
                飲酒前に高タンパクな食事（鶏肉・魚・卵など）をしっかり摂ると、アルコールの吸収が緩やかになり、タンパク質合成への影響も小さくなります。飲酒後もギリシャヨーグルトやプロテインなど、消化しやすいタンパク質を補給すると回復をサポートできます。
              </p>

              <h3 className="font-bold text-gray-800 mt-4 mb-2">
                水をしっかり飲む
              </h3>
              <p>
                飲酒中はお酒1杯につき同量の水を飲む習慣をつけましょう。脱水を防ぐことで翌日のコンディションが大きく改善します。
              </p>

              <h3 className="font-bold text-gray-800 mt-4 mb-2">
                蒸留酒（ハイボール・焼酎など）を選ぶ
              </h3>
              <p>
                糖質の少ない蒸留酒（ウィスキー・焼酎・ジン・ウォッカなど）を選ぶと、余計な糖質摂取を抑えられます。ビールや甘いカクテルは糖質が多く、体脂肪の蓄積につながりやすいため注意しましょう。
              </p>

              <div className="bg-gray-50 rounded-xl p-4 mt-3">
                <p className="font-bold text-gray-800 mb-2">
                  お酒との上手な付き合い方まとめ
                </p>
                <ul className="space-y-1 text-gray-600">
                  <li>・トレーニング直後の飲酒は避ける</li>
                  <li>・飲むならオフ日か、トレーニングから4時間以上後</li>
                  <li>・飲む前後にタンパク質をしっかり摂る</li>
                  <li>・水を並行して飲み、脱水を防ぐ</li>
                  <li>・糖質の少ない蒸留酒を選ぶ</li>
                  <li>・週単位で飲む量をコントロールする</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                まとめ
              </h2>
              <p>
                お酒が筋肉に悪影響を与えることは事実ですが、完全に禁酒しなければ筋トレの効果がゼロになるわけではありません。タイミングと量を管理し、食事と水分補給を工夫することで、お酒を楽しみながら筋トレの成果を出すことは十分可能です。
              </p>
              <p className="mt-2">
                まずはサクトレであなたに合ったトレーニングメニューを作成し、自分のライフスタイルに合わせた筋トレを継続していきましょう。
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
