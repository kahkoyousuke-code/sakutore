import Link from "next/link";
import ShareButtons from "@/components/ShareButtons";
import { pageMetadata } from "@/lib/metadata";
import AuthorBox from "@/components/AuthorBox";

export const metadata = pageMetadata({
  title: "筋トレとお酒の付き合い方｜種類別カロリー比較表つき - サクトレ",
  description:
    "アルコールは1gあたり7kcal。糖質ゼロでもカロリーは残ります。お酒6種のカロリー・糖質比較表と、毎晩飲みながら90kg→78kgを達成した筆者の考え方を解説します。",
  path: "/column/alcohol",
});

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
              <p className="text-gray-500 italic border-l-2 border-orange-300 pl-3 mb-3">
                正直に言うと、私はお酒が好きで毎晩飲んでいます。それでも15年筋トレを続けてこられた経験から、お酒との上手な付き合い方をお伝えします。
              </p>
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
                お酒のカロリーを数字で見る
              </h2>
              <p>
                筋肉への影響と並んで現実的な問題が、カロリーです。まず前提として、<strong className="text-gray-800">アルコールそのものが1gあたり7kcal</strong>あります。糖質やタンパク質が4kcal、脂質が9kcalなので、位置づけとしては脂質寄りです。つまり「糖質ゼロ」でもカロリーはしっかり残ります。
              </p>

              <div className="overflow-x-auto -mx-2 px-2 mt-3">
                <table className="w-full text-xs border-collapse">
                  <thead>
                    <tr className="bg-orange-50">
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
                        種類
                      </th>
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
                        量
                      </th>
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
                        カロリー
                      </th>
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
                        糖質
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-200 px-2 py-2 font-bold text-gray-700 whitespace-nowrap">ハイボール</td>
                      <td className="border border-gray-200 px-2 py-2">350ml</td>
                      <td className="border border-gray-200 px-2 py-2">約70kcal</td>
                      <td className="border border-gray-200 px-2 py-2">0g</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 px-2 py-2 font-bold text-gray-700 whitespace-nowrap">焼酎ロック</td>
                      <td className="border border-gray-200 px-2 py-2">60ml</td>
                      <td className="border border-gray-200 px-2 py-2">約85kcal</td>
                      <td className="border border-gray-200 px-2 py-2">0g</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-2 py-2 font-bold text-gray-700 whitespace-nowrap">赤ワイン</td>
                      <td className="border border-gray-200 px-2 py-2">グラス120ml</td>
                      <td className="border border-gray-200 px-2 py-2">約85kcal</td>
                      <td className="border border-gray-200 px-2 py-2">約2g</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 px-2 py-2 font-bold text-gray-700 whitespace-nowrap">ビール</td>
                      <td className="border border-gray-200 px-2 py-2">350ml</td>
                      <td className="border border-gray-200 px-2 py-2">約140kcal</td>
                      <td className="border border-gray-200 px-2 py-2">約11g</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-2 py-2 font-bold text-gray-700 whitespace-nowrap">日本酒</td>
                      <td className="border border-gray-200 px-2 py-2">1合180ml</td>
                      <td className="border border-gray-200 px-2 py-2">約190kcal</td>
                      <td className="border border-gray-200 px-2 py-2">約8g</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 px-2 py-2 font-bold text-gray-700 whitespace-nowrap">缶チューハイ<br />（7%）</td>
                      <td className="border border-gray-200 px-2 py-2">350ml</td>
                      <td className="border border-gray-200 px-2 py-2">約200kcal</td>
                      <td className="border border-gray-200 px-2 py-2">約13g</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                ※商品によって差があるので目安です。
              </p>

              <p className="mt-3">
                ビール350mlの内訳を分解すると、糖質11g（44kcal）に対してアルコール由来が約98kcal。<strong className="text-gray-800">カロリーの7割はアルコールそのもの</strong>です。だから糖質ゼロビールに変えても、カロリーは半分程度にしかなりません。「糖質ゼロだから大丈夫」は成り立たないということです。
              </p>

              <div className="bg-gray-50 rounded-xl p-4 mt-3">
                <p className="font-bold text-gray-800 mb-2">毎晩ビール2本を1ヶ月続けると</p>
                <p className="text-gray-600">
                  140kcal × 2本 × 30日 ＝ <strong className="text-gray-800">8,400kcal</strong>。体脂肪1kgが約7,200kcalなので、<strong className="text-gray-800">ひと月あたり脂肪1.1kg分</strong>に相当します。1年なら13kg分です。もちろん実際には食事全体のバランスで決まりますが、飲む分をどこかで削らなければこの計算が効いてきます。
                </p>
                <p className="text-gray-600 mt-2">
                  私は毎晩飲みますが、90kgから78kgまで落とせました。矛盾しているようで、していません。<strong className="text-gray-800">飲む前提で1日の総カロリーを組んでいた</strong>だけです。お酒をやめるか続けるかではなく、飲む分の枠をどこから持ってくるかという話になります。自分の1日の消費カロリーは
                  <Link href="/calorie-calculator" className="text-orange-500 font-bold hover:text-orange-600 underline">
                    カロリー計算機
                  </Link>
                  で確認できます。
                </p>
              </div>
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
              <ul className="space-y-1">
                <li>・アルコールは1gあたり7kcal。糖質ゼロでもカロリーは残る（ビールの7割はアルコール由来）</li>
                <li>・毎晩ビール2本で月8,400kcal＝脂肪1.1kg分。飲む枠をどこかから持ってくる必要がある</li>
                <li>・飲むならトレ後3〜4時間空けてから。オフ日に寄せるのがいちばん影響が小さい</li>
                <li>・選ぶなら蒸留酒（ハイボール・焼酎）。同じ酔いでカロリーが半分以下になる</li>
                <li>・禁酒しなくても成果は出る。実際、私は毎晩飲みながら12kg落としました</li>
              </ul>
              <p className="mt-3">
                大事なのは「やめるか続けるか」ではなく、飲む前提で1日の総量を組めるかどうかです。摂取カロリーの枠は
                <Link href="/calorie-calculator" className="text-orange-500 font-bold hover:text-orange-600 underline">
                  カロリー計算機
                </Link>
                で、削るべきは何かは
                <Link href="/column/diet-rebound-muscle" className="text-orange-500 font-bold hover:text-orange-600 underline">
                  食事制限だけでリバウンドする理由
                </Link>
                を参考にしてください（タンパク質だけは削らないことです）。サクトレで自分のライフスタイルに合ったメニューを作成しましょう。
              </p>
            </section>
          </div>
        </div>

        <ShareButtons url="https://sakutore.jp/column/alcohol" title="筋トレとお酒の付き合い方" />
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

        <AuthorBox />

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
