import Link from "next/link";
import ShareButtons from "@/components/ShareButtons";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "筋トレ前後のストレッチの効果とやり方 - サクトレ",
  description:
    "筋トレ前後のストレッチの重要性と具体的なやり方を解説。動的ストレッチと静的ストレッチの違い、効果的なメニューを紹介します。",
  path: "/column/stretch",
});

export default function StretchPage() {
  return (
    <main className="min-h-screen flex flex-col items-center px-4 py-8">
      <div className="max-w-md w-full animate-slideUp">
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <p className="text-xs text-orange-500 font-bold mb-2">コラム</p>
          <h1 className="text-xl font-bold text-gray-800 mb-6">
            筋トレ前後のストレッチの効果とやり方
          </h1>

          <div className="space-y-6 text-sm text-gray-700 leading-relaxed">
            <section>
              <p>
                筋トレの効果を高め、怪我を予防するために欠かせないのがストレッチです。しかし、「筋トレ前と後でどんなストレッチをすればいいの？」「そもそもストレッチって本当に必要？」と疑問に思う方も多いのではないでしょうか。この記事では、筋トレ前後のストレッチの効果と具体的なやり方を解説します。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                2種類のストレッチを使い分ける
              </h2>
              <p>
                ストレッチには大きく分けて「動的ストレッチ（ダイナミックストレッチ）」と「静的ストレッチ（スタティックストレッチ）」の2種類があります。それぞれ効果と適したタイミングが異なるため、正しく使い分けることが重要です。
              </p>
              <div className="bg-gray-50 rounded-xl p-4 mt-3">
                <p className="font-bold text-gray-800 mb-2">動的ストレッチ</p>
                <p className="text-gray-600">
                  体を動かしながら筋肉を伸ばすストレッチ。関節の可動域を広げ、筋温を上げる効果があります。筋トレ前に最適です。
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-4 mt-3">
                <p className="font-bold text-gray-800 mb-2">静的ストレッチ</p>
                <p className="text-gray-600">
                  一定のポーズで筋肉をじっくり伸ばすストレッチ。柔軟性の向上や筋肉の緊張をほぐす効果があります。筋トレ後に最適です。
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                筋トレ前：動的ストレッチ
              </h2>
              <p>
                筋トレ前には動的ストレッチを行いましょう。体を動かしながら筋肉を温めることで、トレーニングのパフォーマンスが向上し、怪我のリスクを下げられます。
              </p>

              <h3 className="font-bold text-gray-800 mt-4 mb-2">
                動的ストレッチの効果
              </h3>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">▸</span>
                  <p>筋温が上がり、筋肉が動きやすくなる</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">▸</span>
                  <p>関節の可動域が広がり、正しいフォームで動ける</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">▸</span>
                  <p>心拍数が徐々に上がり、体がトレーニングモードに入る</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">▸</span>
                  <p>神経系が活性化し、筋力を発揮しやすくなる</p>
                </div>
              </div>

              <h3 className="font-bold text-gray-800 mt-4 mb-2">
                おすすめの動的ストレッチメニュー（5分）
              </h3>
              <div className="space-y-3 mt-2">
                <div className="border border-gray-100 rounded-xl p-3">
                  <p className="font-bold text-gray-800">1. アームサークル</p>
                  <p className="text-gray-500 mt-1">
                    両腕を大きく前後に回します。前回し10回、後ろ回し10回で肩周りをほぐします。
                  </p>
                </div>
                <div className="border border-gray-100 rounded-xl p-3">
                  <p className="font-bold text-gray-800">2. レッグスイング</p>
                  <p className="text-gray-500 mt-1">
                    壁に手をついて立ち、片脚を前後に大きく振ります。左右各10回ずつ行い、股関節の可動域を広げます。
                  </p>
                </div>
                <div className="border border-gray-100 rounded-xl p-3">
                  <p className="font-bold text-gray-800">3. トランクツイスト</p>
                  <p className="text-gray-500 mt-1">
                    足を肩幅に開いて立ち、上半身を左右にひねります。腕を水平に広げて10〜15回繰り返し、体幹をほぐします。
                  </p>
                </div>
                <div className="border border-gray-100 rounded-xl p-3">
                  <p className="font-bold text-gray-800">
                    4. ウォーキングランジ
                  </p>
                  <p className="text-gray-500 mt-1">
                    大きく一歩前に踏み出してランジの姿勢を取り、交互に歩きます。左右合わせて10歩で下半身全体を活性化します。
                  </p>
                </div>
                <div className="border border-gray-100 rounded-xl p-3">
                  <p className="font-bold text-gray-800">5. バットキック</p>
                  <p className="text-gray-500 mt-1">
                    その場で軽くジョグしながら、かかとをお尻に近づけるように蹴り上げます。20回行い、太もも前面を温めます。
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                筋トレ後：静的ストレッチ
              </h2>
              <p>
                筋トレ後には静的ストレッチを行いましょう。トレーニングで緊張した筋肉をゆっくり伸ばすことで、回復を促進し、翌日の筋肉痛を軽減できます。
              </p>

              <h3 className="font-bold text-gray-800 mt-4 mb-2">
                静的ストレッチの効果
              </h3>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">▸</span>
                  <p>筋肉の緊張をほぐし、リラックスさせる</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">▸</span>
                  <p>血流を促進し、老廃物の排出を助ける</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">▸</span>
                  <p>柔軟性を向上させ、怪我のリスクを減らす</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">▸</span>
                  <p>筋肉痛を軽減する効果が期待できる</p>
                </div>
              </div>

              <h3 className="font-bold text-gray-800 mt-4 mb-2">
                おすすめの静的ストレッチメニュー（5〜10分）
              </h3>
              <div className="space-y-3 mt-2">
                <div className="border border-gray-100 rounded-xl p-3">
                  <p className="font-bold text-gray-800">
                    1. 胸のストレッチ
                  </p>
                  <p className="text-gray-500 mt-1">
                    壁に手をつき、体を反対側にひねって胸を開きます。左右各20〜30秒キープします。
                  </p>
                </div>
                <div className="border border-gray-100 rounded-xl p-3">
                  <p className="font-bold text-gray-800">
                    2. 肩・背中のストレッチ
                  </p>
                  <p className="text-gray-500 mt-1">
                    片腕を胸の前に伸ばし、もう一方の腕で手前に引き寄せます。左右各20〜30秒で肩と背中をほぐします。
                  </p>
                </div>
                <div className="border border-gray-100 rounded-xl p-3">
                  <p className="font-bold text-gray-800">
                    3. 太もも前面のストレッチ
                  </p>
                  <p className="text-gray-500 mt-1">
                    片足を後ろに曲げてつかみ、かかとをお尻に近づけます。壁に手をついてバランスを取り、左右各20〜30秒行います。
                  </p>
                </div>
                <div className="border border-gray-100 rounded-xl p-3">
                  <p className="font-bold text-gray-800">
                    4. 太もも裏面のストレッチ
                  </p>
                  <p className="text-gray-500 mt-1">
                    床に座り、片脚を伸ばしてつま先に向かって上体を倒します。無理のない範囲で左右各20〜30秒キープします。
                  </p>
                </div>
                <div className="border border-gray-100 rounded-xl p-3">
                  <p className="font-bold text-gray-800">
                    5. お尻のストレッチ
                  </p>
                  <p className="text-gray-500 mt-1">
                    仰向けに寝て、片膝を反対側の胸に向かって引き寄せます。左右各20〜30秒で臀部をしっかり伸ばします。
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                まとめ
              </h2>
              <p>
                筋トレの効果を最大化し、怪我を予防するためには、トレーニング前の動的ストレッチとトレーニング後の静的ストレッチが重要です。それぞれ5〜10分程度で十分なので、トレーニングの一部として習慣化しましょう。
              </p>
              <p className="mt-2">
                ストレッチを含めたトータルのトレーニング時間を考慮して、サクトレであなたに合ったメニューを作成してみてください。
              </p>
            </section>
          </div>
        </div>

        <ShareButtons url="https://sakutore.vercel.app/column/stretch" title="筋トレ前後のストレッチの効果とやり方" />
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
