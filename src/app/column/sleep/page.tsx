import Link from "next/link";
import ShareButtons from "@/components/ShareButtons";
import { pageMetadata } from "@/lib/metadata";
import AuthorBox from "@/components/AuthorBox";

export const metadata = pageMetadata({
  title: "筋トレと睡眠の関係 - サクトレ",
  description:
    "睡眠が筋肉の成長に与える影響、理想の睡眠時間、睡眠の質を上げるための具体的なコツをわかりやすく解説します。",
  path: "/column/sleep",
});

export default function SleepPage() {
  return (
    <main className="min-h-screen flex flex-col items-center px-4 py-8">
      <div className="max-w-md w-full animate-slideUp">
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <p className="text-xs text-orange-500 font-bold mb-2">コラム</p>
          <h1 className="text-xl font-bold text-gray-800 mb-6">
            筋トレと睡眠の関係
          </h1>

          <div className="space-y-6 text-sm text-gray-700 leading-relaxed">
            <section>
              <p>
                「筋トレはしているのに、なかなか筋肉がつかない」「疲れが抜けない」という悩みを抱えている方の中には、睡眠の質や量が不足していることが原因のケースが少なくありません。筋肉はトレーニング中ではなく、睡眠中に成長します。この記事では、睡眠が筋肉に与える影響、理想の睡眠時間、そして睡眠の質を高めるための実践的な方法を解説します。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                睡眠が筋肉に与える影響
              </h2>

              <h3 className="font-bold text-gray-800 mt-4 mb-2">
                成長ホルモンは睡眠中に分泌される
              </h3>
              <p>
                筋肉の修復と成長を促す最も重要なホルモンが「成長ホルモン」です。成長ホルモンは1日を通して少量ずつ分泌されていますが、その分泌量の約70〜80%が睡眠中、特に入眠後1〜3時間の「深い睡眠（ノンレム睡眠のステージ3・4）」の時間帯に集中しています。
              </p>
              <p className="mt-2">
                成長ホルモンには筋肉の合成を促進する働きと、脂肪を分解してエネルギーに変える働きがあります。つまり、十分な深い睡眠を取ることは、筋肥大とダイエットの両方に直接つながるのです。
              </p>

              <h3 className="font-bold text-gray-800 mt-4 mb-2">
                睡眠不足がトレーニングに与えるダメージ
              </h3>
              <p>
                睡眠が不足するとどのような悪影響が出るのでしょうか。研究によると、睡眠不足（1日5〜6時間未満）が続くと以下のような問題が起きることがわかっています。
              </p>
              <div className="bg-gray-50 rounded-xl p-4 mt-3">
                <ul className="space-y-2 text-gray-600">
                  <li>
                    <span className="font-bold text-gray-800">筋肉量の減少</span>：コルチゾール（ストレスホルモン）の分泌が増え、筋肉を分解する「カタボリック」な状態が続きます。
                  </li>
                  <li>
                    <span className="font-bold text-gray-800">筋力・パフォーマンスの低下</span>：反応速度・最大筋力・持久力がいずれも低下し、トレーニングの質が落ちます。
                  </li>
                  <li>
                    <span className="font-bold text-gray-800">回復の遅延</span>：微細な筋繊維の損傷が修復されないまま蓄積し、怪我のリスクが高まります。
                  </li>
                  <li>
                    <span className="font-bold text-gray-800">食欲の増加</span>：グレリン（食欲増進ホルモン）が増え、高カロリー食を求めやすくなるため、体脂肪が増えやすくなります。
                  </li>
                  <li>
                    <span className="font-bold text-gray-800">モチベーションの低下</span>：精神的な疲労感が増し、トレーニング自体を続けにくくなります。
                  </li>
                </ul>
              </div>

              <h3 className="font-bold text-gray-800 mt-4 mb-2">
                テストステロンにも影響する
              </h3>
              <p>
                筋肉の合成に欠かせない男性ホルモン「テストステロン」も、睡眠と深く関係しています。1週間の睡眠時間を5時間に制限した実験では、若い男性のテストステロン値が10〜15%低下したという報告があります。テストステロンが低下すると筋肉がつきにくくなるだけでなく、脂肪が増えやすくなります。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                筋トレをしている人の理想の睡眠時間
              </h2>
              <p>
                一般的な成人の推奨睡眠時間は7〜9時間とされていますが、定期的に筋トレをしている方にはそれ以上の睡眠が必要な場合もあります。
              </p>

              <div className="bg-gray-50 rounded-xl p-4 mt-3">
                <p className="font-bold text-gray-800 mb-2">レベル別の目安睡眠時間</p>
                <ul className="space-y-2 text-gray-600">
                  <li>
                    <span className="font-bold text-gray-800">週1〜2回の軽い筋トレ</span>：7〜8時間
                  </li>
                  <li>
                    <span className="font-bold text-gray-800">週3〜4回の中程度の筋トレ</span>：7.5〜8.5時間
                  </li>
                  <li>
                    <span className="font-bold text-gray-800">週5回以上のハードなトレーニング</span>：8〜9時間以上
                  </li>
                </ul>
              </div>

              <p className="mt-3">
                大切なのは「時間の長さ」だけでなく「睡眠の質」です。8時間眠っていても、途中で何度も目が覚めたり、深い睡眠が少なかったりすると、成長ホルモンの分泌が不十分になります。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                睡眠の質を上げるコツ
              </h2>

              <h3 className="font-bold text-gray-800 mt-4 mb-2">
                就寝・起床時間を固定する
              </h3>
              <p>
                体内時計（サーカディアンリズム）を整えることが睡眠の質向上に最も効果的です。毎日同じ時間に就寝・起床することで、自然と眠りやすく・起きやすくなります。週末だけ大きく生活リズムを崩すと「社会的時差ぼけ」が起き、平日の睡眠の質が落ちます。
              </p>

              <h3 className="font-bold text-gray-800 mt-4 mb-2">
                就寝1〜2時間前のブルーライトを避ける
              </h3>
              <p>
                スマートフォンやパソコン、テレビのブルーライトは、眠りを促すホルモン「メラトニン」の分泌を抑制します。就寝の1〜2時間前からは画面を見る時間を減らし、読書や軽いストレッチなど、リラックスできることに時間を使いましょう。
              </p>

              <h3 className="font-bold text-gray-800 mt-4 mb-2">
                寝室の環境を整える
              </h3>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">▸</span>
                  <p>
                    <span className="font-bold">温度</span>：快眠に最適な室温は18〜22度。体温が下がるにつれて眠気が来るため、やや涼しい環境が理想です。
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">▸</span>
                  <p>
                    <span className="font-bold">暗さ</span>：わずかな光でもメラトニン分泌が妨げられます。遮光カーテンやアイマスクを活用しましょう。
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">▸</span>
                  <p>
                    <span className="font-bold">静音性</span>：騒音が気になる場合は耳栓やホワイトノイズ（ファンの音や自然音）を使うと効果的です。
                  </p>
                </div>
              </div>

              <h3 className="font-bold text-gray-800 mt-4 mb-2">
                カフェインとアルコールを睡眠前に摂らない
              </h3>
              <p>
                カフェインの半減期は約5〜7時間です。午後2時以降のカフェイン摂取は睡眠の質に影響を与えます。コーヒー・緑茶・エナジードリンクの飲むタイミングに注意しましょう。
              </p>
              <p className="mt-2">
                また、アルコールは一時的に眠くなる作用がありますが、睡眠の後半で眠りが浅くなり、深い睡眠（ノンレム睡眠）が減ることがわかっています。お酒を飲む場合は就寝の3〜4時間前までに留めるのが理想です。
              </p>

              <h3 className="font-bold text-gray-800 mt-4 mb-2">
                トレーニングのタイミングを工夫する
              </h3>
              <p>
                激しいトレーニングは交感神経を刺激し、体温と心拍数を上昇させます。就寝直前のハードなトレーニングは眠りにつきにくくなることがあります。トレーニングは就寝の2〜3時間前までに終えるのが理想です。
              </p>
              <p className="mt-2">
                ただし、軽いストレッチやヨガであれば就寝前でも問題なく、むしろ副交感神経を優位にしてリラックス効果があります。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                まとめ
              </h2>
              <p>
                筋トレの成果は「トレーニング・栄養・睡眠」の3つが揃って初めて最大化されます。睡眠中に成長ホルモンが分泌され筋肉が修復・成長するため、睡眠はトレーニングと同じくらい重要な要素です。7〜9時間の睡眠時間を確保し、就寝環境とルーティンを整えることで、トレーニングの効果を大きく高められます。
              </p>
              <p className="mt-2">
                サクトレでは、あなたのトレーニング頻度に合わせた最適なメニューを作成します。トレーニングと睡眠・栄養の3本柱を整えて、理想の体に近づきましょう。
              </p>
            </section>
          </div>
        </div>

        <ShareButtons url="https://sakutore.jp/column/sleep" title="筋トレと睡眠の関係" />
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
