import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "女性が筋トレしても「太くならない」理由を解説 - サクトレ",
  description:
    "筋トレで体が大きくなるという誤解を解消し、女性こそ筋トレすべき理由を解説。ホルモンの違いやデータをもとに詳しく説明します。",
  path: "/column/women-muscle-slim",
});

export default function WomenMuscleSlimPage() {
  return (
    <main className="min-h-screen flex flex-col items-center px-4 py-8">
      <div className="max-w-md w-full animate-slideUp">
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <p className="text-xs text-orange-500 font-bold mb-2">コラム</p>
          <h1 className="text-xl font-bold text-gray-800 mb-6">
            女性が筋トレしても「太くならない」理由を解説
          </h1>

          <div className="space-y-6 text-sm text-gray-700 leading-relaxed">
            <section>
              <p className="text-gray-500 italic border-l-2 border-orange-300 pl-3 mb-3">
                10年以上トレーニングを続けてきた経験上、女性から「筋トレしたら太くなりそうで怖い」という声をよく聞きます。データと経験をもとにその誤解を解説します。
              </p>
              <p>
                「筋トレをしたら筋肉がついて体が大きくなってしまうのでは？」——これは多くの女性が筋トレを始める際に抱く不安の一つです。結論から言うと、一般的な女性が筋トレをしても、ボディビルダーのような大きな筋肉がつくことはほぼありません。この記事では、その理由をホルモンや生理学的な観点から解説し、女性こそ積極的に筋トレすべき理由をお伝えします。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                女性の筋肉が大きくなりにくい理由
              </h2>
              <p>
                男性と女性の筋肉の発達に大きな違いをもたらしているのは、主に「テストステロン（男性ホルモン）」の量です。テストステロンは筋タンパク合成を促進し、筋肥大に直接関わるホルモンです。
              </p>

              <h3 className="font-bold text-gray-800 mt-4 mb-2">
                テストステロン量の圧倒的な差
              </h3>
              <p>
                男性のテストステロン分泌量は女性の約10〜20倍とも言われています。このホルモンがあるからこそ、男性は筋トレによって筋肉が大きく発達しやすいのです。女性にもテストステロンは存在しますが、その量は男性と比べて非常に少ないため、筋肉がボリュームアップしにくい体質になっています。
              </p>
              <p className="mt-2">
                プロのフィメールボディビルダーが大きな筋肉を持っているのは、長年にわたる徹底的な高強度トレーニングと、場合によっては特別な栄養管理や薬物使用によるものです。一般的な女性が週2〜4回の筋トレをするだけで、そのような体型になることはまずありえません。
              </p>

              <h3 className="font-bold text-gray-800 mt-4 mb-2">
                エストロゲンの働き
              </h3>
              <p>
                女性ホルモンであるエストロゲンには、脂肪を皮下に蓄える働きがあります。これは女性の体が妊娠や出産に備えるための生理的な仕組みです。この特性から、女性の体は男性に比べて「筋肉よりも脂肪がつきやすい」傾向にあります。逆に言えば、筋肉だけが肥大して「ムキムキ」になるという状態は、女性には起こりにくいのです。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                筋トレで体が引き締まる仕組み
              </h2>
              <p>
                「筋トレで太くなる」という誤解の一因に、「体重が増えた＝太った」という思い込みがあります。しかし、脂肪と筋肉は同じ重さでも体積が大きく異なります。
              </p>

              <div className="bg-gray-50 rounded-xl p-4 mt-3">
                <p className="font-bold text-gray-800 mb-2">脂肪と筋肉の体積比較</p>
                <ul className="space-y-1 text-gray-600">
                  <li>・脂肪1kg：約1,100〜1,200ml（1Lペットボトル以上）</li>
                  <li>・筋肉1kg：約900ml（脂肪より約20〜30%小さい）</li>
                </ul>
              </div>

              <p className="mt-3">
                つまり、脂肪が1kg減って筋肉が1kg増えたとすると、体重は変わらなくても体積は小さくなります。「体重は変わらないのに服のサイズが下がった」という現象は、まさにこのメカニズムによるものです。
              </p>

              <h3 className="font-bold text-gray-800 mt-4 mb-2">
                基礎代謝が上がり痩せやすい体に
              </h3>
              <p>
                筋肉は安静時でもエネルギーを消費する組織です。筋肉量が増えると基礎代謝（何もしなくても消費するカロリー）が上がり、脂肪が燃えやすい体質になります。有酸素運動だけではなかなか落ちなかった体脂肪も、筋トレで筋肉量を増やすことで落としやすくなります。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                女性が筋トレで得られる具体的なメリット
              </h2>

              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">▸</span>
                  <p>
                    <span className="font-bold">ウエストが細くなる</span>：腹筋や体幹を鍛えることでウエストが引き締まり、くびれが生まれやすくなります。
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">▸</span>
                  <p>
                    <span className="font-bold">ヒップが上がる</span>：お尻の筋肉（大臀筋）を鍛えることで、垂れ下がりを改善し、丸みのあるヒップラインをつくれます。
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">▸</span>
                  <p>
                    <span className="font-bold">姿勢が改善する</span>：背中や体幹の筋肉が鍛えられることで猫背が改善し、スタイルがよく見えるようになります。
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">▸</span>
                  <p>
                    <span className="font-bold">骨密度が上がる</span>：適切な負荷をかけることで骨が刺激を受け、骨密度が向上します。特に女性は閉経後に骨密度が低下しやすいため、若いうちからの筋トレが将来の骨粗しょう症予防につながります。
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">▸</span>
                  <p>
                    <span className="font-bold">生理不順の改善</span>：適度な運動は血行を促進し、ホルモンバランスの安定に寄与することがあります。ただし、過度な運動は逆効果になる場合もあるため、適切な強度を保つことが重要です。
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                女性におすすめのトレーニング種目
              </h2>
              <p>
                「引き締め」を目的とする女性には、大きな筋肉を使う複合種目が特におすすめです。
              </p>

              <div className="bg-gray-50 rounded-xl p-4 mt-3">
                <p className="font-bold text-gray-800 mb-2">引き締めに効果的な種目</p>
                <ul className="space-y-1 text-gray-600">
                  <li>・スクワット：太もも・お尻・体幹を同時に鍛えられる</li>
                  <li>・ヒップリフト／グルートブリッジ：お尻を集中的に鍛えられる</li>
                  <li>・ランジ：脚全体のシェイプアップに効果的</li>
                  <li>・プランク：体幹を鍛えてウエストを引き締める</li>
                  <li>・ダンベルショルダープレス：肩を鍛えてくびれを際立たせる</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                まとめ
              </h2>
              <p>
                女性が筋トレで「太くなる」という心配はほぼ不要です。ホルモンの違いから、一般的なトレーニングでは女性の体が大きくなることはありません。むしろ、筋トレは体を引き締め、代謝を上げ、姿勢を改善するなど、多くのメリットをもたらします。
              </p>
              <p className="mt-2">
                「細くなりたい」「引き締めたい」という目標がある方こそ、筋トレを取り入れることをおすすめします。サクトレではいくつかの質問に答えるだけで、あなたの目標に合ったメニューを提案しています。ぜひ試してみてください。
              </p>
            </section>
          </div>
        </div>

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
