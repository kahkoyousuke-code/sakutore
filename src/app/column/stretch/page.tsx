import Link from "next/link";
import ShareButtons from "@/components/ShareButtons";
import { pageMetadata } from "@/lib/metadata";
import AuthorBox from "@/components/AuthorBox";

export const metadata = pageMetadata({
  title: "筋トレ前後のストレッチ｜前に静的ストレッチをしてはいけない理由 - サクトレ",
  description:
    "動的と静的の違いを比較表で整理。直前の長い静的ストレッチは筋力を一時的に下げます。前後それぞれのメニューと、ストレッチにまつわる3つの誤解を解説します。",
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
              <div className="overflow-x-auto -mx-2 px-2 mt-3">
                <table className="w-full text-xs border-collapse">
                  <thead>
                    <tr className="bg-orange-50">
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">

                      </th>
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
                        動的ストレッチ
                      </th>
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
                        静的ストレッチ
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-200 px-2 py-2 font-bold text-gray-700 whitespace-nowrap">やり方</td>
                      <td className="border border-gray-200 px-2 py-2">動かしながら伸ばす</td>
                      <td className="border border-gray-200 px-2 py-2">止めた姿勢で伸ばす</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 px-2 py-2 font-bold text-gray-700 whitespace-nowrap">タイミング</td>
                      <td className="border border-gray-200 px-2 py-2">筋トレ前</td>
                      <td className="border border-gray-200 px-2 py-2">筋トレ後・入浴後</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-2 py-2 font-bold text-gray-700 whitespace-nowrap">1部位の目安</td>
                      <td className="border border-gray-200 px-2 py-2">10〜15回</td>
                      <td className="border border-gray-200 px-2 py-2">20〜30秒</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 px-2 py-2 font-bold text-gray-700 whitespace-nowrap">直後の筋力</td>
                      <td className="border border-gray-200 px-2 py-2">維持〜向上</td>
                      <td className="border border-gray-200 px-2 py-2"><strong>一時的に低下する</strong></td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-2 py-2 font-bold text-gray-700 whitespace-nowrap">主な狙い</td>
                      <td className="border border-gray-200 px-2 py-2">可動域・筋温を上げる</td>
                      <td className="border border-gray-200 px-2 py-2">柔軟性を伸ばす</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="mt-3">
                注目してほしいのは4行目です。<strong className="text-gray-800">静的ストレッチを筋トレの直前に長くやると、そのあとの筋力が一時的に落ちることがわかっています</strong>。特に1部位を60秒以上伸ばした場合に顕著だと報告されています。「トレーニング前は念入りに伸ばすもの」と思っている人が多いのですが、少なくとも高重量を扱う直前には向きません。
              </p>
              <p className="mt-2">
                「ストレッチをサボると怪我をする」のではなく、<strong className="text-gray-800">前にやるものと後にやるものが違う</strong>だけです。前は動的、後は静的。これだけ覚えておけば十分です。
              </p>
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
                よくある3つの誤解
              </h2>
              <p>
                ストレッチは「やっておけば間違いない」と思われがちですが、実際には効果が誤解されている部分があります。
              </p>

              <div className="overflow-x-auto -mx-2 px-2 mt-3">
                <table className="w-full text-xs border-collapse">
                  <thead>
                    <tr className="bg-orange-50">
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
                        よく言われること
                      </th>
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
                        実際のところ
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-200 px-2 py-2">トレ前に念入りに伸ばすほど怪我をしにくい</td>
                      <td className="border border-gray-200 px-2 py-2">直前の長い静的ストレッチは筋力を一時的に下げる。前は動的にする</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 px-2 py-2">ストレッチをすれば筋肉痛を防げる</td>
                      <td className="border border-gray-200 px-2 py-2">軽減効果はごくわずかという報告が多い。期待しすぎない</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-2 py-2">体が硬いと筋トレを始められない</td>
                      <td className="border border-gray-200 px-2 py-2">必要な可動域は種目ごとに違う。硬くてもできる種目から始めればいい</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="mt-3">
                では静的ストレッチは無駄なのかというと、そうではありません。<strong className="text-gray-800">柔軟性そのものを伸ばす効果は確かにあります</strong>。ただしそれは「筋肉痛予防」ではなく「可動域を広げてフォームを作りやすくする」という別の効果です。狙いを取り違えなければ十分に価値があります。
              </p>
              <p className="mt-2">
                私は40代で週5回トレーニングしていますが、年齢が上がるほどウォームアップを削ったときのリスクは上がります。関節の違和感は放置すると数週間から数ヶ月の離脱に直結するので、<strong className="text-gray-800">時間がない日は種目数を減らしてでもウォームアップは残す</strong>という順番にしています。回復の判断基準は
                <Link href="/column/rest" className="text-orange-500 font-bold hover:text-orange-600 underline">
                  休息の重要性
                </Link>
                にまとめています。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                まとめ
              </h2>
              <ul className="space-y-1">
                <li>・前は動的（動かしながら10〜15回）、後は静的（止めて20〜30秒）</li>
                <li>・高重量の直前に長い静的ストレッチをすると、筋力が一時的に落ちる</li>
                <li>・静的ストレッチの価値は筋肉痛予防ではなく、柔軟性と可動域のほう</li>
                <li>・体が硬くても始められる。硬さは始めない理由にならない</li>
                <li>・時間がない日は、種目を削ってでもウォームアップは残す</li>
              </ul>
              <p className="mt-3">
                ストレッチを含めたトータルの時間を考えてメニューを組みたいときは、サクトレで所要時間に合わせたメニューを作成できます。フォームが固まるまでの重量設定は
                <Link href="/weight-checker" className="text-orange-500 font-bold hover:text-orange-600 underline">
                  適正重量チェッカー
                </Link>
                を使ってください。
              </p>
            </section>
          </div>
        </div>

        <ShareButtons url="https://sakutore.jp/column/stretch" title="筋トレ前後のストレッチの効果とやり方" />
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
