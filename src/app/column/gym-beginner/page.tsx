import Link from "next/link";
import ShareButtons from "@/components/ShareButtons";
import { pageMetadata } from "@/lib/metadata";
import AuthorBox from "@/components/AuthorBox";

export const metadata = pageMetadata({
  title: "ジム初心者が最初にやるべきマシン5選｜回る順番つき - サクトレ",
  description:
    "初心者向けマシン5台を、回る順番と理由の表つきで解説（大きい筋肉から先、肩は最後）。使い方のポイントとNG行動、15年通ってわかったジム選びで唯一効いたことも紹介します。",
  path: "/column/gym-beginner",
});

export default function GymBeginnerPage() {
  return (
    <main className="min-h-screen flex flex-col items-center px-4 py-8">
      <div className="max-w-md w-full animate-slideUp">
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <p className="text-xs text-orange-500 font-bold mb-2">コラム</p>
          <h1 className="text-xl font-bold text-gray-800 mb-6">
            ジム初心者が最初にやるべきマシン5選
          </h1>

          <div className="space-y-6 text-sm text-gray-700 leading-relaxed">
            <section>
              <p>
                ジムに初めて入ったとき、ずらりと並んだマシンを前に「どれから使えばいいの？」と戸惑う方は多いものです。マシンは正しく使えば初心者でも安全かつ効果的に鍛えられますが、間違った使い方は怪我の原因になります。この記事では、ジム初心者が最初に取り組むべき5つのマシンと、効果的な使い方・NG行動を解説します。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                初心者におすすめのマシン5選
              </h2>

              <p>
                先に結論から。この5台を、この順番で回してください。順番には理由があります。
              </p>

              <div className="overflow-x-auto -mx-2 px-2 mt-3">
                <table className="w-full text-xs border-collapse">
                  <thead>
                    <tr className="bg-orange-50">
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
                        順
                      </th>
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
                        マシン
                      </th>
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
                        部位
                      </th>
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
                        この順番の理由
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-200 px-2 py-2 font-bold text-gray-700">1</td>
                      <td className="border border-gray-200 px-2 py-2 font-bold text-gray-700 whitespace-nowrap">レッグプレス</td>
                      <td className="border border-gray-200 px-2 py-2">脚全体</td>
                      <td className="border border-gray-200 px-2 py-2">体で一番大きい筋肉。元気なうちに終わらせる</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 px-2 py-2 font-bold text-gray-700">2</td>
                      <td className="border border-gray-200 px-2 py-2 font-bold text-gray-700 whitespace-nowrap">ラットプルダウン</td>
                      <td className="border border-gray-200 px-2 py-2">背中（広がり）</td>
                      <td className="border border-gray-200 px-2 py-2">上半身で最大の筋肉</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-2 py-2 font-bold text-gray-700">3</td>
                      <td className="border border-gray-200 px-2 py-2 font-bold text-gray-700 whitespace-nowrap">チェストプレス</td>
                      <td className="border border-gray-200 px-2 py-2">胸</td>
                      <td className="border border-gray-200 px-2 py-2">大きい筋肉。押す動作の主役</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 px-2 py-2 font-bold text-gray-700">4</td>
                      <td className="border border-gray-200 px-2 py-2 font-bold text-gray-700 whitespace-nowrap">シーテッドロウ</td>
                      <td className="border border-gray-200 px-2 py-2">背中（厚み）</td>
                      <td className="border border-gray-200 px-2 py-2">2と方向が違う。姿勢改善に効く</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-2 py-2 font-bold text-gray-700">5</td>
                      <td className="border border-gray-200 px-2 py-2 font-bold text-gray-700 whitespace-nowrap">ショルダープレス</td>
                      <td className="border border-gray-200 px-2 py-2">肩</td>
                      <td className="border border-gray-200 px-2 py-2">小さく怪我しやすいので最後</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="mt-3">
                原則は<strong className="text-gray-800">「大きい筋肉から先、小さい筋肉は後」</strong>です。肩を先に疲れさせると、そのあとのチェストプレスもラットプルダウンも力が入らなくなります。逆の順番でやっている人はかなり多いので、ここを直すだけで同じ時間の効果が変わります。
              </p>
              <p className="mt-2">
                2番と4番がどちらも背中なのは間違いではありません。<strong className="text-gray-800">ラットプルダウンは上から引く＝背中の広がり、シーテッドロウは水平に引く＝背中の厚み</strong>で、鍛わる方向が違います。背中は体の中で最も面積が大きいので、2種目入れる価値があります。
              </p>

              <h3 className="font-bold text-gray-800 mt-4 mb-2">
                1. レッグプレス（脚全体）
              </h3>
              <div className="border border-gray-100 rounded-xl p-4">
                <p className="text-gray-600">
                  シートに座り、プレートを足で押すマシンです。太もも（大腿四頭筋）・ハムストリングス・お尻（臀筋）をまとめて鍛えられます。スクワットと似た動作ですが、バランスを取る必要がなく、フォームが崩れにくいため初心者に最適です。
                </p>
                <p className="font-bold text-gray-800 mt-3 mb-1">使い方のポイント</p>
                <ul className="space-y-1 text-gray-600">
                  <li>・膝がつま先より内側に入らないようにする</li>
                  <li>・膝を完全に伸ばしきらず、少し曲げた状態で止める（関節への負担を防ぐ）</li>
                  <li>・腰が浮かないよう背中をシートに密着させる</li>
                  <li>・目安：10〜15回 × 3セット</li>
                </ul>
              </div>

              <h3 className="font-bold text-gray-800 mt-4 mb-2">
                2. ラットプルダウン（背中・広背筋）
              </h3>
              <div className="border border-gray-100 rounded-xl p-4">
                <p className="text-gray-600">
                  頭上のバーを胸に向かって引き下ろすマシンです。広背筋（背中の大きな筋肉）を鍛え、逆三角形のシルエット作りに効果的です。懸垂（チンニング）の入門版として、自分に合った重量から始められます。
                </p>
                <p className="font-bold text-gray-800 mt-3 mb-1">使い方のポイント</p>
                <ul className="space-y-1 text-gray-600">
                  <li>・バーは鎖骨〜胸のあたりに引き下ろす（首の後ろに引くのはNG）</li>
                  <li>・肘を脇腹に向かって下げるイメージで引く</li>
                  <li>・体を後ろに過度に倒さず、若干の後傾程度にとどめる</li>
                  <li>・目安：10〜12回 × 3セット</li>
                </ul>
              </div>

              <h3 className="font-bold text-gray-800 mt-4 mb-2">
                3. チェストプレス（胸・大胸筋）
              </h3>
              <div className="border border-gray-100 rounded-xl p-4">
                <p className="text-gray-600">
                  シートに座り、前方にハンドルを押し出すマシンです。大胸筋（胸の筋肉）と上腕三頭筋（二の腕）を鍛えます。ベンチプレスよりも軌道が固定されているため、フォームが崩れにくく安全に始められます。
                </p>
                <p className="font-bold text-gray-800 mt-3 mb-1">使い方のポイント</p>
                <ul className="space-y-1 text-gray-600">
                  <li>・シートの高さを調整し、グリップが胸の高さになるようにする</li>
                  <li>・肩甲骨を引き寄せ、胸を張った状態で行う</li>
                  <li>・肘を完全に伸ばしきらず、少し曲げた状態で止める</li>
                  <li>・目安：10〜12回 × 3セット</li>
                </ul>
              </div>

              <h3 className="font-bold text-gray-800 mt-4 mb-2">
                4. ショルダープレス（肩・三角筋）
              </h3>
              <div className="border border-gray-100 rounded-xl p-4">
                <p className="text-gray-600">
                  シートに座り、ハンドルを頭上に押し上げるマシンです。肩の丸みを作る三角筋と上腕三頭筋を鍛えます。肩は怪我をしやすい部位のため、最初は軽い重量から慎重に始めましょう。
                </p>
                <p className="font-bold text-gray-800 mt-3 mb-1">使い方のポイント</p>
                <ul className="space-y-1 text-gray-600">
                  <li>・肘の角度が90度になる位置からスタートする</li>
                  <li>・腕を完全に伸ばしきらず、肘を少し曲げた状態で止める</li>
                  <li>・背中が過度に反らないよう、腹筋を軽く締めて行う</li>
                  <li>・目安：10〜12回 × 3セット</li>
                </ul>
              </div>

              <h3 className="font-bold text-gray-800 mt-4 mb-2">
                5. シーテッドロウ（背中・僧帽筋）
              </h3>
              <div className="border border-gray-100 rounded-xl p-4">
                <p className="text-gray-600">
                  前方のハンドルを自分に向かって引き寄せるマシンです。ラットプルダウンが上から引くのに対し、こちらは水平方向に引く動作です。広背筋・僧帽筋・菱形筋など背中の厚みを作る筋肉を鍛えられます。
                </p>
                <p className="font-bold text-gray-800 mt-3 mb-1">使い方のポイント</p>
                <ul className="space-y-1 text-gray-600">
                  <li>・胸を張り、引き寄せた際に肩甲骨を背骨に向かって絞るイメージ</li>
                  <li>・体を後ろに倒す反動を使わず、背中の筋肉で引く</li>
                  <li>・引き寄せた位置で1〜2秒止めると効果が高まる</li>
                  <li>・目安：10〜12回 × 3セット</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                ジム初心者が避けるべきNG行動
              </h2>

              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">▸</span>
                  <div>
                    <p className="font-bold">重量を上げすぎる</p>
                    <p className="mt-1 text-gray-600">
                      「重い方がかっこいい」「周りに負けたくない」という気持ちで重量を上げすぎるのは危険です。フォームが崩れ、狙った筋肉に効かないだけでなく、関節や腱を痛めます。最初は10〜15回ギリギリできる重量から始めましょう。目安が知りたい方は
                      <Link href="/weight-checker" className="text-orange-600 font-bold underline">
                        適正重量診断
                      </Link>
                      で確認できます。
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">▸</span>
                  <div>
                    <p className="font-bold">反動を使う（チーティング）</p>
                    <p className="mt-1 text-gray-600">
                      体を揺らして勢いでバーを引いたり押したりするのはNG。ターゲットの筋肉に効かなくなるだけでなく、腰や肩を痛める原因になります。ゆっくりとコントロールしながら動かしましょう。
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">▸</span>
                  <div>
                    <p className="font-bold">マシンを長時間占有する</p>
                    <p className="mt-1 text-gray-600">
                      セットの合間に長時間スマホを見たり、次の人を待たせたりするのはマナー違反です。セット間の休憩は1〜2分を目安にし、混雑時は譲り合いを心がけましょう。
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">▸</span>
                  <div>
                    <p className="font-bold">ウォームアップをしない</p>
                    <p className="mt-1 text-gray-600">
                      いきなり重い重量から始めると筋肉や関節が温まっておらず、怪我のリスクが高まります。最初は軽い重量で10〜15回のウォームアップセットを1〜2セット行ってから本番セットに入りましょう。
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">▸</span>
                  <div>
                    <p className="font-bold">使用後のマシンを拭かない</p>
                    <p className="mt-1 text-gray-600">
                      汗が多い場合は、使用後にマシンをタオルや備え付けのシートで拭くのがジムのエチケットです。快適な空間を全員で守る意識を持ちましょう。
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                15年通ってわかった、ジム選びで唯一効いたこと
              </h2>
              <p>
                私は15年、月8,000円ほどの一般的なジムに通ってきました。設備の差でトレーニングの質が決まると思っていましたが、振り返るとそうではありませんでした。
              </p>
              <p className="mt-2">
                ベンチプレスが長く止まっていた時期があって、それを動かしたのは新しいマシンでも新しいメニューでもなく、<strong className="text-gray-800">ジムを変えて、補助と指導を受けられる環境に入ったこと</strong>でした。潰れる心配なく限界まで追い込めることと、フォームを外から見てもらえること。この2つは、ひとりでいくら通っても手に入りません。
              </p>
              <p className="mt-2">
                初心者のうちは、正直どのジムでも大きな差は出ません。マシンが5台揃っていれば十分です。ただ<strong className="text-gray-800">「見てもらえるかどうか」だけは、続けるほど効いてきます</strong>。見学のときに、スタッフがフォームを見てくれる時間があるかを聞いておくと後で効きます。費用感の比較は
                <Link href="/column/personal-gym-cost" className="text-orange-500 font-bold hover:text-orange-600 underline">
                  パーソナルジムの費用相場
                </Link>
                にまとめています。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                まとめ
              </h2>
              <ul className="space-y-1">
                <li>・レッグプレス→ラットプルダウン→チェストプレス→シーテッドロウ→ショルダープレスの順</li>
                <li>・原則は「大きい筋肉から先、小さい筋肉は後」。肩を先にやると全部が中途半端になる</li>
                <li>・背中が2種目あるのは、上から引く（広がり）と水平に引く（厚み）で別物だから</li>
                <li>・最初は軽い重量でフォームを覚える。重量はあとからいくらでも増やせる</li>
                <li>・設備より「見てもらえる環境かどうか」が長期では効く</li>
              </ul>
              <p className="mt-3">
                重量に迷ったら
                <Link href="/weight-checker" className="text-orange-500 font-bold hover:text-orange-600 underline">
                  適正重量チェッカー
                </Link>
                で目安を出せます。マシンに慣れてフリーウエイトに移りたくなったら
                <Link href="/column/beginner-guide" className="text-orange-500 font-bold hover:text-orange-600 underline">
                  初心者が最初にやるべき5つのこと
                </Link>
                へ。サクトレで自分に合ったメニューを作れば、ジムで何をすべきかが明確になります。
              </p>
            </section>
          </div>
        </div>

        <ShareButtons url="https://sakutore.jp/column/gym-beginner" title="ジム初心者が最初にやるべきマシン5選" />
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
