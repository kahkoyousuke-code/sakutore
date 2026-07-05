import Link from "next/link";
import ShareButtons from "@/components/ShareButtons";
import { pageMetadata } from "@/lib/metadata";
import AuthorBox from "@/components/AuthorBox";
import RizapCta from "@/components/RizapCta";

export const metadata = pageMetadata({
  title: "40代女性が筋トレで痩せにくい理由と対策 - サクトレ",
  description:
    "40代以降のホルモン変化・基礎代謝低下の仕組みと、それに合わせた効果的なトレーニング・食事法を解説。週5で続けてきた経験から具体的な対策を紹介します。",
  path: "/column/women-40s-training",
});

export default function Women40sTrainingPage() {
  return (
    <main className="min-h-screen flex flex-col items-center px-4 py-8">
      <div className="max-w-md w-full animate-slideUp">
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <p className="text-xs text-orange-500 font-bold mb-2">コラム</p>
          <h1 className="text-xl font-bold text-gray-800 mb-6">
            40代女性が筋トレで痩せにくい理由と対策
          </h1>

          <div className="space-y-6 text-sm text-gray-700 leading-relaxed">
            <section>
              <p className="text-gray-500 italic border-l-2 border-orange-300 pl-3 mb-3">
                40代でも週5でトレーニングを続けている経験から、年齢による体の変化と具体的な対策を解説します。
              </p>
              <p>
                「40代に入ってから急に太りやすくなった」「同じ食事・運動量なのに体重が落ちなくなった」——40代女性からよく聞かれる悩みです。これは意志や努力の問題ではなく、体の内側で起きているホルモン変化や代謝の変化が原因です。この記事では、40代女性の体で何が起きているのかを解説し、それに対応した効果的なトレーニング・食事法を紹介します。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                40代女性の体に起きていること
              </h2>

              <h3 className="font-bold text-gray-800 mt-4 mb-2">
                エストロゲンの減少
              </h3>
              <p>
                40代に入ると卵巣機能が低下し始め、女性ホルモン「エストロゲン」の分泌量が徐々に減少します。エストロゲンは脂肪代謝・骨密度・筋肉量の維持に重要な役割を担っているため、その減少は体組成に大きな影響を与えます。
              </p>
              <p className="mt-2">
                特に、エストロゲンが減少すると「皮下脂肪（皮膚の下につく脂肪）」が「内臓脂肪（お腹周りにつく脂肪）」に変わりやすくなります。これが40代以降に「お腹まわりだけが太くなる」「体型が変わった」と感じる主な原因です。
              </p>

              <h3 className="font-bold text-gray-800 mt-4 mb-2">
                筋肉量の加速的な低下
              </h3>
              <p>
                筋肉量は30代から少しずつ低下し始めますが、40代ではその速度が加速します。特にエストロゲンには筋肉量の維持を助ける働きがあるため、その減少によって筋肉が失われやすくなります。
              </p>
              <p className="mt-2">
                何も対策をしなければ、40代以降は1年に約1〜2%の筋肉量が失われていきます。筋肉量の低下は基礎代謝の低下に直結するため、同じ食事量でも太りやすくなる悪循環が生まれます。
              </p>

              <h3 className="font-bold text-gray-800 mt-4 mb-2">
                基礎代謝の低下
              </h3>
              <p>
                基礎代謝は20代をピークに低下し続け、40代では20代と比べて1日100〜200kcal程度低くなっていることが多いです。20代と同じ食生活を続けると、年齢を重ねるほど体重が増えやすくなるのはこのためです。
              </p>

              <div className="bg-gray-50 rounded-xl p-4 mt-3">
                <p className="font-bold text-gray-800 mb-2">40代女性の体の変化まとめ</p>
                <ul className="space-y-1 text-gray-600">
                  <li>・エストロゲン減少→内臓脂肪がつきやすくなる</li>
                  <li>・筋肉量低下（年1〜2%）→基礎代謝が落ちる</li>
                  <li>・代謝低下→同じ食事量でも太りやすくなる</li>
                  <li>・骨密度低下→骨粗しょう症リスクが高まる</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                40代女性に効果的なトレーニング法
              </h2>

              <h3 className="font-bold text-gray-800 mt-4 mb-2">
                筋トレを中心に据える
              </h3>
              <p>
                40代女性にとって最も重要なのは「筋肉量を維持・増加させること」です。筋肉があれば基礎代謝が上がり、脂肪が燃えやすい体を維持できます。有酸素運動だけでは筋肉量の低下を食い止めることはできません。週2〜3回の筋トレを習慣化しましょう。
              </p>

              <h3 className="font-bold text-gray-800 mt-4 mb-2">
                大筋群を動かす複合種目を優先する
              </h3>
              <p>
                時間効率よく代謝を上げるには、複数の筋肉を同時に動かす「複合種目」が最も効果的です。
              </p>

              <div className="bg-gray-50 rounded-xl p-4 mt-3">
                <p className="font-bold text-gray-800 mb-2">40代女性におすすめの種目</p>
                <ul className="space-y-1 text-gray-600">
                  <li>・スクワット：下半身の大きな筋肉全体を鍛える</li>
                  <li>・デッドリフト（軽めの重量で）：背中・臀部・ハムストリングスを鍛える</li>
                  <li>・グルートブリッジ：内臓脂肪が気になるお腹周りの引き締めに効果的</li>
                  <li>・ダンベルロウ：背中を鍛えて姿勢を改善する</li>
                  <li>・プランク：体幹を強化してウエストを引き締める</li>
                </ul>
              </div>

              <h3 className="font-bold text-gray-800 mt-4 mb-2">
                週2〜3回から始めて回復を重視する
              </h3>
              <p>
                40代以降は回復力が低下するため、週2〜3回から始めて体の反応を見ながら調整することが重要です。「やる気があるから毎日やろう」という考え方は逆効果になることがあります。十分な休息を挟むことで、筋肉の修復と成長が促進されます。
              </p>

              <h3 className="font-bold text-gray-800 mt-4 mb-2">
                ウォームアップとクールダウンを丁寧に
              </h3>
              <p>
                40代以降は関節や筋肉の柔軟性が低下します。トレーニング前後のウォームアップ・クールダウンを5〜10分しっかり行うことで、怪我のリスクを大幅に下げられます。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                40代女性に最適な食事法
              </h2>

              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">▸</span>
                  <p>
                    <span className="font-bold">タンパク質を増やす</span>：筋肉の合成には十分なタンパク質が必要です。40代では若い頃より多めに摂ることが推奨されており、体重1kgあたり1.6〜2.0gを目安にしましょう。鶏むね肉・魚・大豆製品・卵などを毎食取り入れることが重要です。
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">▸</span>
                  <p>
                    <span className="font-bold">カルシウムとビタミンDを意識する</span>：エストロゲン減少による骨密度低下を防ぐために、カルシウム（乳製品・小魚・大豆）とビタミンD（鮭・きのこ・日光浴）を積極的に摂取しましょう。
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">▸</span>
                  <p>
                    <span className="font-bold">精製糖質と超加工食品を減らす</span>：内臓脂肪の蓄積を防ぐには、血糖値を急上昇させる精製糖質（白砂糖・白米・白パンの過剰摂取）や超加工食品を控えることが効果的です。完全に断つ必要はありませんが、量を意識しましょう。
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">▸</span>
                  <p>
                    <span className="font-bold">食事を抜かない</span>：代謝が低下している40代では、食事を抜くと筋肉が分解されやすくなります。3食バランスよく食べることが、筋肉量を守りながら痩せるための基本です。
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                まとめ
              </h2>
              <p>
                40代女性が痩せにくくなる原因は、エストロゲンの減少・筋肉量の低下・基礎代謝の低下という体の変化にあります。これは避けられない変化ですが、適切な筋トレと食事管理によって十分に対策できます。
              </p>
              <p className="mt-2">
                大切なのは「なぜ痩せにくいのか」を正しく理解した上で、適切なアプローチを選ぶことです。40代以降こそ、筋トレが最も重要な投資になります。サクトレではいくつかの質問に答えるだけで、40代の体に合ったメニューを提案しています。ぜひ始めてみてください。
              </p>
            </section>
          </div>
        </div>

        <RizapCta lead="40代の体は変化が出るまで時間がかかるぶん、正しいやり方で迷わず続けられるかが分かれ道です。" />

        <ShareButtons url="https://sakutore.jp/column/women-40s-training" title="40代女性が筋トレで痩せにくい理由と対策" />
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
