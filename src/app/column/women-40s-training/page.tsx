import Link from "next/link";
import ShareButtons from "@/components/ShareButtons";
import { pageMetadata } from "@/lib/metadata";
import AuthorBox from "@/components/AuthorBox";
import RizapCta from "@/components/RizapCta";

export const metadata = pageMetadata({
  title: "40代女性が筋トレで痩せにくい理由と対策｜種目表つき - サクトレ",
  description:
    "エストロゲン減少・筋肉量低下・基礎代謝低下という3つの変化を整理し、40代から始めるための種目表（自宅代替つき）を掲載。40代で週5回トレーニングしている運営者が、年齢に合わせた組み直し方を解説します。",
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
                先に断っておくと、私は男性です。40代で週5回トレーニングを続けている当事者ではありますが、エストロゲンの変化を体感として語ることはできません。この記事で書けるのは、数字の部分と、年齢が上がったときにトレーニングをどう組み直すかの部分です。体調そのものの変化については医師や専門家に相談してください。
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

              <div className="overflow-x-auto -mx-2 px-2 mt-3">
                <table className="w-full text-xs border-collapse">
                  <thead>
                    <tr className="bg-orange-50">
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
                        起きる変化
                      </th>
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
                        体で何が起きるか
                      </th>
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
                        筋トレで変えられるか
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-200 px-2 py-2 font-bold text-gray-700 whitespace-nowrap">エストロゲン減少</td>
                      <td className="border border-gray-200 px-2 py-2">皮下脂肪より内臓脂肪がつきやすくなる</td>
                      <td className="border border-gray-200 px-2 py-2">ホルモン自体は変えられない</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 px-2 py-2 font-bold text-gray-700 whitespace-nowrap">筋肉量の低下</td>
                      <td className="border border-gray-200 px-2 py-2">年1〜2%ずつ減る</td>
                      <td className="border border-gray-200 px-2 py-2"><strong>変えられる（最重要）</strong></td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-2 py-2 font-bold text-gray-700 whitespace-nowrap">基礎代謝の低下</td>
                      <td className="border border-gray-200 px-2 py-2">20代比で1日100〜200kcal低い</td>
                      <td className="border border-gray-200 px-2 py-2">一部だけ。過度な期待は禁物</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 px-2 py-2 font-bold text-gray-700 whitespace-nowrap">骨密度の低下</td>
                      <td className="border border-gray-200 px-2 py-2">骨粗しょう症リスクが上がる</td>
                      <td className="border border-gray-200 px-2 py-2"><strong>変えられる</strong>（荷重刺激が有効）</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="mt-3">
                この表で大事なのは<strong className="text-gray-800">「変えられる」と書いた2行に集中すること</strong>です。エストロゲンの減少は止められませんし、基礎代謝も筋トレで劇的には戻りません（
                <Link href="/column/metabolism" className="text-orange-500 font-bold hover:text-orange-600 underline">
                  筋トレで痩せる仕組み
                </Link>
                で計算していますが、筋肉1kgが増やす代謝は1日13kcal程度です）。一方で、筋肉量と骨密度は明確に自分でコントロールできます。<strong className="text-gray-800">「痩せる」より先に「減っていくものを止める」ほうが、40代では現実的で効果も確実</strong>です。
              </p>
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

              <div className="overflow-x-auto -mx-2 px-2 mt-3">
                <table className="w-full text-xs border-collapse">
                  <thead>
                    <tr className="bg-orange-50">
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
                        種目
                      </th>
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
                        鍛える場所
                      </th>
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
                        自宅でやるなら
                      </th>
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
                        目安
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-200 px-2 py-2 font-bold text-gray-700 whitespace-nowrap">スクワット</td>
                      <td className="border border-gray-200 px-2 py-2">太もも・お尻</td>
                      <td className="border border-gray-200 px-2 py-2">ゴブレットスクワット</td>
                      <td className="border border-gray-200 px-2 py-2">10〜15回×2〜3</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 px-2 py-2 font-bold text-gray-700 whitespace-nowrap">ルーマニアン<br />デッドリフト</td>
                      <td className="border border-gray-200 px-2 py-2">お尻・もも裏・背中下部</td>
                      <td className="border border-gray-200 px-2 py-2">ヒップスラスト</td>
                      <td className="border border-gray-200 px-2 py-2">10〜12回×2〜3</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-2 py-2 font-bold text-gray-700 whitespace-nowrap">ワンハンドロウ</td>
                      <td className="border border-gray-200 px-2 py-2">背中（姿勢改善）</td>
                      <td className="border border-gray-200 px-2 py-2">インバーテッドロウ</td>
                      <td className="border border-gray-200 px-2 py-2">10〜12回×2〜3</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 px-2 py-2 font-bold text-gray-700 whitespace-nowrap">ヒップスラスト</td>
                      <td className="border border-gray-200 px-2 py-2">お尻</td>
                      <td className="border border-gray-200 px-2 py-2">床でそのまま可</td>
                      <td className="border border-gray-200 px-2 py-2">12〜15回×2〜3</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-2 py-2 font-bold text-gray-700 whitespace-nowrap">プランク</td>
                      <td className="border border-gray-200 px-2 py-2">体幹</td>
                      <td className="border border-gray-200 px-2 py-2">床でそのまま可</td>
                      <td className="border border-gray-200 px-2 py-2">20〜40秒×2〜3</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                ※種目名はサクトレのメニュー生成で使っている名称に合わせています。
                <Link href="/questions" className="text-orange-500 font-bold hover:text-orange-600 underline">
                  5つの質問
                </Link>
                に答えると、この中から今日やるべき組み合わせが出ます。
              </p>
              <p className="mt-3">
                いわゆる腹筋種目を入れていないのは意図的です。<strong className="text-gray-800">お腹の脂肪はお腹を動かしても落ちません</strong>（部分痩せは起きません）。ウエストに効かせたいなら、大きい筋肉を使う上の4種目のほうが結果的に近道です。重量の決め方は
                <Link href="/weight-checker" className="text-orange-500 font-bold hover:text-orange-600 underline">
                  適正重量チェッカー
                </Link>
                を使ってください。
              </p>

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
              <ul className="space-y-1">
                <li>・痩せにくさの原因は意志ではなく、エストロゲン減少・筋肉量低下・基礎代謝低下という体の変化</li>
                <li>・このうち筋トレで確実に変えられるのは「筋肉量」と「骨密度」の2つ。ここに集中する</li>
                <li>・代謝アップへの期待は控えめに。筋肉1kgで1日13kcal程度しか増えない</li>
                <li>・腹筋種目より、大きい筋肉を使う複合種目のほうがウエストには近道</li>
                <li>・週2〜3回から。40代は回復に時間がかかるので、詰め込むより間隔を守る</li>
              </ul>
              <p className="mt-3">
                「痩せる」より先に「減っていくものを止める」。40代以降はこの順番で考えるほうが、結果も気持ちも続きます。年代共通の始め方は
                <Link href="/column/over40" className="text-orange-500 font-bold hover:text-orange-600 underline">
                  40代からの筋トレ入門
                </Link>
                に、休息の取り方は
                <Link href="/column/rest" className="text-orange-500 font-bold hover:text-orange-600 underline">
                  筋肉を育てる休息の重要性
                </Link>
                にまとめています。サクトレでは5つの質問に答えるだけで、今日やるメニューを提案します。
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
