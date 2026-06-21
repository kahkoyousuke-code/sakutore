import Link from "next/link";
import ShareButtons from "@/components/ShareButtons";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "プロテインの選び方ガイド - サクトレ",
  description:
    "ホエイ・カゼイン・ソイの違いや特徴、飲むタイミング、自分に合ったプロテインの選び方をわかりやすく解説します。",
  path: "/column/protein-guide",
});

export default function ProteinGuidePage() {
  return (
    <main className="min-h-screen flex flex-col items-center px-4 py-8">
      <div className="max-w-md w-full animate-slideUp">
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <p className="text-xs text-orange-500 font-bold mb-2">コラム</p>
          <h1 className="text-xl font-bold text-gray-800 mb-6">
            プロテインの選び方ガイド
          </h1>

          <div className="space-y-6 text-sm text-gray-700 leading-relaxed">
            <section>
              <p>
                「プロテインを飲みたいけれど種類が多すぎてどれを選べばいいかわからない」——そんな声をよく聞きます。ドラッグストアやネット通販には数えきれないほどのプロテイン商品が並んでいますが、自分の目的や生活習慣に合ったものを選ぶことが大切です。この記事では、プロテインの主な種類と特徴、効果的な飲み方、そして選び方のポイントをわかりやすく解説します。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                プロテインの種類と特徴
              </h2>
              <p>
                プロテインには大きく分けて動物性と植物性があり、それぞれ異なる特徴を持っています。
              </p>

              <h3 className="font-bold text-gray-800 mt-4 mb-2">
                ホエイプロテイン
              </h3>
              <div className="bg-gray-50 rounded-xl p-4">
                <p className="text-gray-600">
                  牛乳からチーズを作る際に分離される乳清（ホエイ）から作られるタンパク質です。プロテインの中で最も広く使われており、以下の特徴があります。
                </p>
                <ul className="mt-2 space-y-1 text-gray-600">
                  <li>・消化・吸収が速い（30分〜1時間程度）</li>
                  <li>・必須アミノ酸をバランスよく含む</li>
                  <li>・特に分岐鎖アミノ酸（BCAA）が豊富で筋肉合成に優れる</li>
                  <li>・トレーニング直後の摂取に最適</li>
                  <li>・種類が多く、味のバリエーションも豊富</li>
                  <li>・乳糖不耐症の方は注意が必要（WPIタイプなら乳糖が少ない）</li>
                </ul>
              </div>
              <p className="mt-3">
                ホエイプロテインにはさらに「WPC（ホエイプロテインコンセントレート）」と「WPI（ホエイプロテインアイソレート）」の2種類があります。WPCはコストパフォーマンスが高く、WPIは乳糖が少なくタンパク質純度が高いため、お腹が弱い方にはWPIがおすすめです。
              </p>

              <h3 className="font-bold text-gray-800 mt-4 mb-2">
                カゼインプロテイン
              </h3>
              <div className="bg-gray-50 rounded-xl p-4">
                <p className="text-gray-600">
                  牛乳に含まれるタンパク質の約80%を占めるのがカゼインです。ホエイとは対照的に、消化・吸収がゆっくりという特徴があります。
                </p>
                <ul className="mt-2 space-y-1 text-gray-600">
                  <li>・消化・吸収が遅い（数時間かけてゆっくり吸収）</li>
                  <li>・長時間にわたってアミノ酸を血中に供給し続ける</li>
                  <li>・就寝前の摂取に最適（睡眠中の筋肉分解を防ぐ）</li>
                  <li>・腹持ちが良く、食事の代わりとしても使いやすい</li>
                  <li>・ホエイより価格がやや高め</li>
                </ul>
              </div>

              <h3 className="font-bold text-gray-800 mt-4 mb-2">
                ソイプロテイン
              </h3>
              <div className="bg-gray-50 rounded-xl p-4">
                <p className="text-gray-600">
                  大豆から作られる植物性のプロテインです。動物性タンパク質を避けたい方や乳製品アレルギーの方に人気があります。
                </p>
                <ul className="mt-2 space-y-1 text-gray-600">
                  <li>・動物性タンパク質不使用（ヴィーガン・ベジタリアン対応）</li>
                  <li>・イソフラボンを含み、女性ホルモン様の作用がある</li>
                  <li>・消化吸収速度はカゼインとホエイの中間程度</li>
                  <li>・コレステロールゼロ、脂質が少ない</li>
                  <li>・必須アミノ酸のバランスはホエイよりやや劣る</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                飲むタイミング
              </h2>
              <p>
                プロテインの効果を最大化するには、飲むタイミングが重要です。
              </p>

              <div className="space-y-3 mt-3">
                <div className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">▸</span>
                  <div>
                    <p className="font-bold">トレーニング後（最重要）</p>
                    <p className="mt-1 text-gray-600">
                      筋トレ後30分〜2時間以内は「アナボリックウィンドウ」と呼ばれ、筋肉合成が最も活発な時間帯です。ホエイプロテインをトレーニング後すぐに飲むのが最も効果的です。
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">▸</span>
                  <div>
                    <p className="font-bold">起床直後</p>
                    <p className="mt-1 text-gray-600">
                      睡眠中は約8時間タンパク質を摂取していないため、体はアミノ酸不足の状態です。朝食でプロテインを補給することで、睡眠中に行われた筋肉分解からの回復を早められます。
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">▸</span>
                  <div>
                    <p className="font-bold">就寝前</p>
                    <p className="mt-1 text-gray-600">
                      カゼインプロテインを就寝30〜60分前に飲むと、睡眠中にゆっくりとアミノ酸が供給され、筋肉の修復と成長をサポートします。
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">▸</span>
                  <div>
                    <p className="font-bold">食事の補助として</p>
                    <p className="mt-1 text-gray-600">
                      食事だけで必要なタンパク質量（体重1kgあたり1.6〜2.2g）を確保するのが難しい場合、食事の合間や間食として活用しましょう。
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                自分に合うプロテインの選び方
              </h2>

              <h3 className="font-bold text-gray-800 mt-4 mb-2">
                目的別おすすめ
              </h3>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">▸</span>
                  <p>
                    <span className="font-bold">筋肉をつけたい・パフォーマンスを上げたい</span>：ホエイプロテイン（WPC or WPI）がベスト。トレーニング後すぐに飲める吸収の速さが魅力。
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">▸</span>
                  <p>
                    <span className="font-bold">夜間の筋肉分解を防ぎたい</span>：カゼインプロテインを就寝前に。ホエイと組み合わせて使うのがベスト。
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">▸</span>
                  <p>
                    <span className="font-bold">乳製品アレルギー・ヴィーガンの方</span>：ソイプロテインまたはエンドウ豆プロテイン（ピープロテイン）を選びましょう。
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">▸</span>
                  <p>
                    <span className="font-bold">お腹が弱い・乳糖不耐症の方</span>：WPI（ホエイプロテインアイソレート）を選ぶと乳糖が少なく安心です。
                  </p>
                </div>
              </div>

              <h3 className="font-bold text-gray-800 mt-4 mb-2">
                商品を選ぶ際にチェックすべき点
              </h3>
              <div className="bg-gray-50 rounded-xl p-4 mt-2">
                <ul className="space-y-2 text-gray-600">
                  <li>
                    <span className="font-bold text-gray-800">タンパク質含有率</span>：1食あたりのタンパク質量が20g以上あるものを選ぼう。含有率が低いと余分な糖質・脂質も摂ってしまいます。
                  </li>
                  <li>
                    <span className="font-bold text-gray-800">不必要な添加物が少ない</span>：人工甘味料や着色料が気になる方は成分表示を確認しましょう。
                  </li>
                  <li>
                    <span className="font-bold text-gray-800">味と続けやすさ</span>：毎日飲むものなので、自分が好きな味を選ぶことも重要です。初めての方はプレーン・チョコ・バニラなど定番フレーバーから試してみましょう。
                  </li>
                  <li>
                    <span className="font-bold text-gray-800">コストパフォーマンス</span>：1食あたりのコストを計算して選びましょう。国内メーカーより海外ブランドの方がコスパが良い場合も多いです。
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                まとめ
              </h2>
              <p>
                プロテインの種類は大きくホエイ・カゼイン・ソイの3種類。筋肉をつけたい方には吸収の速いホエイプロテインがおすすめで、特にトレーニング後すぐに飲むのが効果的です。就寝前にはカゼインを組み合わせると、24時間筋肉の修復をサポートできます。
              </p>
              <p className="mt-2">
                プロテインはあくまで食事の補助です。まずは食事でタンパク質をしっかり摂ることを基本とし、足りない分をプロテインで補うという考え方で活用してください。サクトレでトレーニングメニューを作成し、食事・栄養と合わせて理想の体を目指しましょう。
              </p>
            </section>
          </div>
        </div>

        <ShareButtons url="https://sakutore.vercel.app/column/protein-guide" title="プロテインの選び方ガイド" />
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
