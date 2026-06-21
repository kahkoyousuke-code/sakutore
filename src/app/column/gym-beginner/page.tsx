import Link from "next/link";
import ShareButtons from "@/components/ShareButtons";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "ジム初心者が最初にやるべきマシン5選 - サクトレ",
  description:
    "ジムデビューしたばかりの方に向けて、初心者が使いやすいマシン5選を紹介。使い方のポイントと避けるべきNG行動も解説します。",
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
                      「重い方がかっこいい」「周りに負けたくない」という気持ちで重量を上げすぎるのは危険です。フォームが崩れ、狙った筋肉に効かないだけでなく、関節や腱を痛めます。最初は10〜15回ギリギリできる重量から始めましょう。
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
                まとめ
              </h2>
              <p>
                ジム初心者は、まずレッグプレス・ラットプルダウン・チェストプレス・ショルダープレス・シーテッドロウの5種目から始めるのがおすすめです。これらは軌道が固定されていて使いやすく、全身の主要な筋肉をまんべんなく鍛えられます。
              </p>
              <p className="mt-2">
                最初の数回は軽い重量でフォームを覚えることに集中し、正しい動きを身につけてから少しずつ重量を上げていきましょう。サクトレで自分のレベルに合ったメニューを作れば、ジムで何をすべきかが明確になります。
              </p>
            </section>
          </div>
        </div>

        <ShareButtons url="https://sakutore.vercel.app/column/gym-beginner" title="ジム初心者が最初にやるべきマシン5選" />
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
