import Link from "next/link";
import ShareButtons from "@/components/ShareButtons";
import { pageMetadata } from "@/lib/metadata";
import AuthorBox from "@/components/AuthorBox";

export const metadata = pageMetadata({
  title: "背中を鍛えるべき3つの理由｜引く方向で鍛わる場所が変わる - サクトレ",
  description:
    "背中の5つの筋肉と、それぞれに効く動き・種目を一覧表で整理。上から引くと広がり、手前に引くと厚みができます。姿勢改善・腰痛予防・見た目の3つの効果と、筆者のデッドリフト体重比1.9倍の実データつき。",
  path: "/column/back-benefits",
});

export default function BackBenefitsPage() {
  return (
    <main className="min-h-screen flex flex-col items-center px-4 py-8">
      <div className="max-w-md w-full animate-slideUp">
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <p className="text-xs text-orange-500 font-bold mb-2">コラム</p>
          <h1 className="text-xl font-bold text-gray-800 mb-6">
            背中を鍛えるべき3つの理由
          </h1>

          <div className="space-y-6 text-sm text-gray-700 leading-relaxed">
            <section>
              <p>
                筋トレを始めると、胸・腕・お腹など「見える部位」を優先しがちです。しかし、背中の筋肉（広背筋・脊柱起立筋・僧帽筋など）を鍛えることは、見た目の改善だけでなく、姿勢の改善や腰痛予防など日常生活の質を上げる効果も大きいのです。この記事では、背中を鍛えるべき3つの理由と、具体的なトレーニング方法を解説します。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                まず「背中」を分解する
              </h2>
              <p>
                背中トレがわかりにくいのは、背中が1つの筋肉ではないからです。胸なら「胸を張って押す」で済みますが、背中は<strong className="text-gray-800">引く方向によって鍛わる場所がまるごと変わります</strong>。まずここを整理しておくと、以降の話が一気に通ります。
              </p>

              <div className="overflow-x-auto -mx-2 px-2 mt-3">
                <table className="w-full text-xs border-collapse">
                  <thead>
                    <tr className="bg-orange-50">
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
                        筋肉
                      </th>
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
                        場所
                      </th>
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
                        効かせる動き
                      </th>
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
                        主な種目
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-200 px-2 py-2 font-bold text-gray-700 whitespace-nowrap">広背筋</td>
                      <td className="border border-gray-200 px-2 py-2">脇の下〜腰</td>
                      <td className="border border-gray-200 px-2 py-2">上から下に引く</td>
                      <td className="border border-gray-200 px-2 py-2">ラットプルダウン／懸垂</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 px-2 py-2 font-bold text-gray-700 whitespace-nowrap">僧帽筋</td>
                      <td className="border border-gray-200 px-2 py-2">首〜肩〜背中中央</td>
                      <td className="border border-gray-200 px-2 py-2">手前に引く／すくめる</td>
                      <td className="border border-gray-200 px-2 py-2">シーテッドロウ／シュラッグ</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-2 py-2 font-bold text-gray-700 whitespace-nowrap">菱形筋</td>
                      <td className="border border-gray-200 px-2 py-2">左右の肩甲骨の間</td>
                      <td className="border border-gray-200 px-2 py-2">肩甲骨を内側に寄せる</td>
                      <td className="border border-gray-200 px-2 py-2">フェイスプル／ワンハンドロウ</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 px-2 py-2 font-bold text-gray-700 whitespace-nowrap">脊柱起立筋</td>
                      <td className="border border-gray-200 px-2 py-2">背骨に沿って縦</td>
                      <td className="border border-gray-200 px-2 py-2">上体を起こす／支える</td>
                      <td className="border border-gray-200 px-2 py-2">デッドリフト／バックエクステンション</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-2 py-2 font-bold text-gray-700 whitespace-nowrap">多裂筋</td>
                      <td className="border border-gray-200 px-2 py-2">背骨の深層</td>
                      <td className="border border-gray-200 px-2 py-2">姿勢を保って耐える</td>
                      <td className="border border-gray-200 px-2 py-2">バードドッグ／プランク</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                ※種目名はサクトレのメニュー生成で使っている名称に合わせています。
              </p>

              <p className="mt-3">
                ポイントは上2行です。<strong className="text-gray-800">上から引くと「広がり」、手前に引くと「厚み」</strong>ができます。背中トレを1種目しかやっていない人は、たいていどちらか片方だけをやっています。逆三角形になりたいのに水平の種目しかしていない、あるいは姿勢を直したいのに懸垂だけ、というパターンです。<strong className="text-gray-800">背中は最低2種目、方向を変えて入れる</strong>のが基本になります。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                理由1：姿勢が劇的に改善される
              </h2>
              <p>
                現代人の多くは、デスクワークやスマートフォンの使用によって「猫背」や「巻き肩」になりやすい環境に置かれています。この姿勢の崩れの大きな原因の一つが、背中の筋肉の弱さです。
              </p>

              <h3 className="font-bold text-gray-800 mt-4 mb-2">
                なぜ背中が姿勢を決めるのか
              </h3>
              <p>
                背中には「脊柱起立筋」と呼ばれる、背骨に沿って縦に走る筋肉群があります。この筋肉が弱くなると背骨を支える力が失われ、背中が丸まりやすくなります。また、「僧帽筋」や「菱形筋」が弱いと肩が前に引っ張られ、巻き肩の原因になります。
              </p>
              <p className="mt-2">
                背中の筋肉を鍛えることでこれらの筋肉が強化され、自然と背筋が伸びた姿勢を保てるようになります。姿勢が改善されると、肩こりや首こりの軽減、呼吸が深くなるといった副次的なメリットも得られます。
              </p>

              <h3 className="font-bold text-gray-800 mt-4 mb-2">
                姿勢改善に効果的な種目
              </h3>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">▸</span>
                  <p>
                    <span className="font-bold">バックエクステンション</span>：床にうつぶせになり、上半身をゆっくり持ち上げます。脊柱起立筋を直接鍛えられます。
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">▸</span>
                  <p>
                    <span className="font-bold">フェイスプル（チューブ使用）</span>：チューブやケーブルを使って顔に向かって引く動作。僧帽筋と菱形筋を鍛え、巻き肩を改善します。
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">▸</span>
                  <p>
                    <span className="font-bold">スーパーマン（自体重）</span>：うつぶせで両手両足を同時に持ち上げます。器具なしで脊柱起立筋を鍛えられます。
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                理由2：腰痛を予防・改善できる
              </h2>
              <p>
                日本人の約80%が一生に一度は腰痛を経験するとも言われています。腰痛の原因は多様ですが、「背中・体幹の筋肉の弱さ」が大きな要因の一つです。
              </p>

              <h3 className="font-bold text-gray-800 mt-4 mb-2">
                背中の筋肉が腰を守るメカニズム
              </h3>
              <p>
                腰（腰椎）は、上半身の重さを支える非常に負担の大きな部位です。この腰椎を支えているのが、背中の深層にある「多裂筋」や「脊柱起立筋」といった筋肉です。これらの筋肉が弱いと腰椎への負担が増し、椎間板や靭帯にダメージが蓄積します。
              </p>
              <p className="mt-2">
                背中の筋肉を鍛えることで腰椎周囲のサポート力が高まり、日常動作（立つ・座る・物を持つなど）での腰への負担が軽減します。慢性的な腰痛を抱えている方の多くが、背中トレを取り入れることで症状が改善されたと報告しています。
              </p>

              <div className="bg-gray-50 rounded-xl p-4 mt-3">
                <p className="font-bold text-gray-800 mb-2">
                  腰痛予防に特に重要な筋肉
                </p>
                <ul className="space-y-1 text-gray-600">
                  <li>・脊柱起立筋：背骨を縦に支える柱の役割</li>
                  <li>・多裂筋：椎間板を安定させる深層筋</li>
                  <li>・広背筋：上半身の重さを分散する大きな筋肉</li>
                  <li>・腹横筋（腹筋）：背中とセットで体幹を支える</li>
                </ul>
              </div>

              <p className="mt-3">
                ただし、すでに腰痛がある場合は、無理な負荷をかけると悪化する恐れがあります。急性の腰痛時は安静を優先し、慢性腰痛の改善には医師や理学療法士に相談しながら行いましょう。
              </p>

              <h3 className="font-bold text-gray-800 mt-4 mb-2">
                腰痛予防に効果的な種目
              </h3>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">▸</span>
                  <p>
                    <span className="font-bold">デッドリフト（正しいフォームで）</span>：全身の筋肉を使い、脊柱起立筋を強力に鍛えます。フォームが最重要なので、軽い重量から始めましょう。
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">▸</span>
                  <p>
                    <span className="font-bold">バードドッグ</span>：四つん這いになり、対角線上の腕と脚を同時に伸ばします。多裂筋と腹横筋を鍛える安全な種目。
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">▸</span>
                  <p>
                    <span className="font-bold">プランク</span>：体幹全体を鍛え、腰椎を支える筋肉を強化します。腰に優しく安全に行える種目。
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                理由3：見た目が大きく変わる
              </h2>
              <p>
                背中は「逆三角形の体」を作るうえで最も重要な部位です。広背筋（脇の下から腰にかけて広がる大きな筋肉）が発達すると、肩幅が広く見え、ウエストが引き締まって見える逆三角形のシルエットが完成します。
              </p>

              <h3 className="font-bold text-gray-800 mt-4 mb-2">
                背中が与える印象の変化
              </h3>
              <p>
                正面から見たときに最も目立つのは胸や腕ですが、後ろ姿や横のシルエットを決定づけるのは背中です。背中が発達していると、服を着ていても「鍛えている人」というオーラが出ます。特にTシャツやスーツの着こなしが変わるため、見た目の印象が大きく向上します。
              </p>
              <p className="mt-2">
                また、背中の筋肉は体の中でも特に大きな筋肉群（広背筋・僧帽筋・脊柱起立筋など）であるため、鍛えることで基礎代謝が上がりやすく、体脂肪の燃焼にも効果的です。
              </p>

              <h3 className="font-bold text-gray-800 mt-4 mb-2">
                見た目を変える効果的な種目
              </h3>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">▸</span>
                  <p>
                    <span className="font-bold">懸垂（チンニング）</span>：広背筋を鍛える最強の種目。できない方はアシストを使ったり、斜め懸垂（インバーテッドロウ）から始めましょう。
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">▸</span>
                  <p>
                    <span className="font-bold">ワンハンドロウ</span>：片手でダンベルを持ち、ベンチに手をついて引き上げます。広背筋に強い刺激を与えられます。
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">▸</span>
                  <p>
                    <span className="font-bold">ラットプルダウン（ジム）</span>：バーを頭の前に引き下ろします。懸垂より負荷の調節がしやすく、初心者にも取り組みやすい。
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                私のBIG3で、いちばん強いのは背中でした
              </h2>
              <p>
                自分の数字を出しておきます。自己ベストはベンチプレス120kg・スクワット120kg・デッドリフト160kg。体重80kg台の頃なので、体重比にすると約1.4倍・1.4倍・<strong className="text-gray-800">1.9倍</strong>です。
              </p>
              <p className="mt-2">
                3種目のうちデッドリフトだけが突出しています。これは私が背中を熱心にやったからというより、<strong className="text-gray-800">背中まわりが体で最も大きな筋肉群なので、そもそも強い重量を扱える</strong>からです。裏を返すと、背中を飛ばしている人は体の中で一番大きな伸びしろを丸ごと放置していることになります。
              </p>
              <p className="mt-2">
                自分の数字が目安のどのあたりかは
                <Link href="/column/strength-standards" className="text-orange-500 font-bold hover:text-orange-600 underline">
                  BIG3の重量目安表
                </Link>
                で確認できます。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                まとめ
              </h2>
              <ul className="space-y-1">
                <li>・背中は1つの筋肉ではない。上から引くと「広がり」、手前に引くと「厚み」</li>
                <li>・だから背中は最低2種目、方向を変えて入れる</li>
                <li>・効果は姿勢改善・腰痛予防・見た目の3つ。日常生活の質にも直結する</li>
                <li>・すでに腰痛がある場合は自己判断で負荷をかけず、医師や理学療法士に相談する</li>
                <li>・体で最も大きい筋肉群なので、飛ばすと伸びしろを丸ごと放置することになる</li>
              </ul>
              <p className="mt-3">
                サクトレでは背中を含む全身をバランスよく鍛えるメニューを自動で作成します。重量の目安は
                <Link href="/weight-checker" className="text-orange-500 font-bold hover:text-orange-600 underline">
                  適正重量チェッカー
                </Link>
                、ジムのマシンから始めるなら
                <Link href="/column/gym-beginner" className="text-orange-500 font-bold hover:text-orange-600 underline">
                  ジム初心者が最初にやるべきマシン5選
                </Link>
                を参考にしてください。
              </p>
            </section>
          </div>
        </div>

        <ShareButtons url="https://sakutore.jp/column/back-benefits" title="背中を鍛えるべき3つの理由" />
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
