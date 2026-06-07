import Link from "next/link";

export const metadata = {
  title: "背中を鍛えるべき3つの理由 - サクトレ",
  description:
    "背中の筋肉を鍛えることで得られる姿勢改善・腰痛予防・見た目の変化を詳しく解説。背中トレのメリットとおすすめ種目を紹介します。",
};

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
                    <span className="font-bold">ダンベルロウ</span>：片手でダンベルを持ち、腰を曲げて引き上げます。広背筋に強い刺激を与えられます。
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
                まとめ
              </h2>
              <p>
                背中を鍛えることで得られる効果は「姿勢の改善」「腰痛の予防・改善」「見た目の大きな変化」の3つです。背中は自分では直接見えない部位のため後回しにされがちですが、実は日常生活の質と見た目の両方に影響する最重要部位の一つです。
              </p>
              <p className="mt-2">
                サクトレでは、背中を含む全身をバランスよく鍛えるメニューを自動で作成します。「背中を重点的に鍛えたい」という方は、ぜひメニュー作成で部位を指定してみてください。
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
