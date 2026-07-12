import Link from "next/link";
import ShareButtons from "@/components/ShareButtons";
import { pageMetadata } from "@/lib/metadata";
import AuthorBox from "@/components/AuthorBox";

export const metadata = pageMetadata({
  title: "BIG3の重量目安一覧｜ベンチプレス・スクワット・デッドリフトの体重別早見表 - サクトレ",
  description:
    "ベンチプレス・スクワット・デッドリフトの重量目安を体重別・レベル別の一覧表で解説。さらに筋トレ歴15年・フィジーク大会入賞の筆者が、自身のBIG3の実重量（60kg→120/120/160kg）と目安表とのズレまで公開します。",
  path: "/column/strength-standards",
});

type Row = {
  level: string;
  ratio: string;
  w60: string;
  w70: string;
  w80: string;
  note: string;
};

const benchRows: Row[] = [
  { level: "未経験", ratio: "0.5", w60: "30kg", w70: "35kg", w80: "40kg", note: "はじめてバーベルを握る段階" },
  { level: "初心者", ratio: "0.75", w60: "45kg", w70: "53kg", w80: "60kg", note: "数ヶ月続ければ届く" },
  { level: "中級者", ratio: "1.0", w60: "60kg", w70: "70kg", w80: "80kg", note: "体重と同じ重さ。最初の大きな壁" },
  { level: "上級者", ratio: "1.25", w60: "75kg", w70: "88kg", w80: "100kg", note: "ジムで一目置かれるライン" },
  { level: "エリート", ratio: "1.5", w60: "90kg", w70: "105kg", w80: "120kg", note: "競技志向の領域" },
];

const squatRows: Row[] = [
  { level: "未経験", ratio: "0.75", w60: "45kg", w70: "53kg", w80: "60kg", note: "フォーム習得が最優先" },
  { level: "初心者", ratio: "1.25", w60: "75kg", w70: "88kg", w80: "100kg", note: "体重の1.25倍" },
  { level: "中級者", ratio: "1.5", w60: "90kg", w70: "105kg", w80: "120kg", note: "下半身が「使える」ラインに" },
  { level: "上級者", ratio: "2.0", w60: "120kg", w70: "140kg", w80: "160kg", note: "体重の2倍。到達者は少数" },
  { level: "エリート", ratio: "2.5", w60: "150kg", w70: "175kg", w80: "200kg", note: "競技志向の領域" },
];

const deadliftRows: Row[] = [
  { level: "未経験", ratio: "1.0", w60: "60kg", w70: "70kg", w80: "80kg", note: "背中を丸めないことが全て" },
  { level: "初心者", ratio: "1.5", w60: "90kg", w70: "105kg", w80: "120kg", note: "BIG3で最も伸びが速い" },
  { level: "中級者", ratio: "2.0", w60: "120kg", w70: "140kg", w80: "160kg", note: "体重の2倍" },
  { level: "上級者", ratio: "2.5", w60: "150kg", w70: "175kg", w80: "200kg", note: "ベルトとグリップが必須に" },
  { level: "エリート", ratio: "3.0", w60: "180kg", w70: "210kg", w80: "240kg", note: "競技志向の領域" },
];

const womenRows = [
  { level: "初心者", bench: "体重×0.4", squat: "体重×0.75", deadlift: "体重×1.0" },
  { level: "中級者", bench: "体重×0.6", squat: "体重×1.1", deadlift: "体重×1.3" },
  { level: "上級者", bench: "体重×0.8", squat: "体重×1.5", deadlift: "体重×1.8" },
];

function LiftTable({ rows }: { rows: Row[] }) {
  return (
    <div className="overflow-x-auto -mx-2 px-2 mt-3">
      <table className="w-full text-xs border-collapse">
        <thead>
          <tr className="bg-orange-50">
            <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
              レベル
            </th>
            <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
              体重比
            </th>
            <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
              60kg
            </th>
            <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
              70kg
            </th>
            <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
              80kg
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.level}>
              <td className="border border-gray-200 px-2 py-2 font-bold text-gray-800 whitespace-nowrap">
                {row.level}
              </td>
              <td className="border border-gray-200 px-2 py-2 text-gray-500 whitespace-nowrap">
                ×{row.ratio}
              </td>
              <td className="border border-gray-200 px-2 py-2 text-gray-700 whitespace-nowrap">
                {row.w60}
              </td>
              <td className="border border-gray-200 px-2 py-2 text-gray-700 whitespace-nowrap">
                {row.w70}
              </td>
              <td className="border border-gray-200 px-2 py-2 text-gray-700 whitespace-nowrap">
                {row.w80}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function StrengthStandardsPage() {
  return (
    <main className="min-h-screen flex flex-col items-center px-4 py-8">
      <div className="max-w-md w-full animate-slideUp">
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <p className="text-xs text-orange-500 font-bold mb-2">コラム</p>
          <h1 className="text-xl font-bold text-gray-800 mb-6">
            BIG3の重量目安一覧｜ベンチプレス・スクワット・デッドリフトは体重の何倍が普通？
          </h1>

          <div className="space-y-6 text-sm text-gray-700 leading-relaxed">
            <section>
              <p>
                「ベンチプレス60kgって、上のほうなのか下のほうなのか」。ジムでバーベルを触りはじめると、必ずこの疑問にぶつかります。周りの人の重量は目に入るのに、自分がどのあたりにいるのかだけがわからない。
              </p>
              <p className="mt-2">
                重量の評価は「体重の何倍か」で見るのが世界共通のやり方です。体重60kgの人の80kgと、体重90kgの人の80kgは、まったく意味が違うからです。この記事では、BIG3（ベンチプレス・スクワット・デッドリフト）の目安を体重別・レベル別の一覧表にまとめました。自分の現在地を確認してから読み進めてください。
              </p>
            </section>

            <section className="bg-orange-50 border border-orange-100 rounded-xl p-4">
              <p className="font-bold text-orange-600 mb-1">先に知っておくこと</p>
              <p className="text-xs">
                以下の表はすべて<span className="font-bold">1RM（1回だけ挙げられる最大重量）</span>を基準にしています。普段10回挙げている重量とは別物なので、比べる前に自分の1RMを把握してください。実際に1回の限界に挑戦するのは危険なので、
                <Link href="/rm-calculator" className="text-orange-600 font-bold underline">
                  RM計算機
                </Link>
                で「今の重量 × 回数」から換算するのが安全で正確です。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                ベンチプレスの重量目安（男性）
              </h2>
              <p>
                上半身の代表種目。BIG3の中では最も伸びが遅く、体重の1.0倍（＝自分の体重と同じ重さ）が最初の大きな壁になります。
              </p>
              <LiftTable rows={benchRows} />
              <p className="mt-3 text-xs text-gray-500">
                ※ 体重60kgの人が60kgを挙げれば「中級者」。多くの人がこの手前で長く足踏みします。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                スクワットの重量目安（男性）
              </h2>
              <p>
                下半身とお尻・体幹をまとめて使う種目。扱える重量はベンチプレスよりずっと大きく、目安も1段階上になります。
              </p>
              <LiftTable rows={squatRows} />
              <p className="mt-3 text-xs text-gray-500">
                ※ 深さ（しゃがみの深さ）で数字は大きく変わります。太ももが床と平行になるまでしゃがんだ重量で比べてください。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                デッドリフトの重量目安（男性）
              </h2>
              <p>
                全身で最も重い重量を扱える種目。伸びが速いので、始めたばかりの人でも数字が伸びる実感を得やすいのが特徴です。
              </p>
              <LiftTable rows={deadliftRows} />
              <p className="mt-3 text-xs text-gray-500">
                ※ 数字が伸びやすいぶん、フォームが崩れたまま重量だけ増えて腰を痛める事故が最も多い種目でもあります。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                女性の重量目安
              </h2>
              <p>
                女性は男性に比べて上半身の筋量が少なく、下半身との差が大きい傾向があります。そのためベンチプレスの比率は低め、下半身種目は男性に近い比率になります。
              </p>
              <div className="overflow-x-auto -mx-2 px-2 mt-3">
                <table className="w-full text-xs border-collapse">
                  <thead>
                    <tr className="bg-orange-50">
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
                        レベル
                      </th>
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
                        ベンチ
                      </th>
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
                        スクワット
                      </th>
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
                        デッドリフト
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {womenRows.map((row) => (
                      <tr key={row.level}>
                        <td className="border border-gray-200 px-2 py-2 font-bold text-gray-800 whitespace-nowrap">
                          {row.level}
                        </td>
                        <td className="border border-gray-200 px-2 py-2 text-gray-700 whitespace-nowrap">
                          {row.bench}
                        </td>
                        <td className="border border-gray-200 px-2 py-2 text-gray-700 whitespace-nowrap">
                          {row.squat}
                        </td>
                        <td className="border border-gray-200 px-2 py-2 text-gray-700 whitespace-nowrap">
                          {row.deadlift}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-3 text-xs text-gray-500">
                ※ 重い重量を扱っても体は太くなりません。理由は
                <Link href="/column/women-muscle-slim" className="text-orange-600 font-bold underline">
                  女性が筋トレしても太くならない理由
                </Link>
                で解説しています。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                筆者の実データ：15年でこう動いた
              </h2>
              <p>
                ここまでは一般的な目安の話です。参考までに、筆者自身（筋トレ歴15年・フィジーク大会入賞）の数字を出しておきます。表と見比べると、きれいに当てはまらないことがわかるはずです。
              </p>

              <div className="overflow-x-auto -mx-2 px-2 mt-3">
                <table className="w-full text-xs border-collapse">
                  <thead>
                    <tr className="bg-orange-50">
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
                        種目
                      </th>
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
                        始めた頃
                      </th>
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
                        自己ベスト
                      </th>
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
                        体重比
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-200 px-2 py-2 font-bold text-gray-800 whitespace-nowrap">
                        ベンチプレス
                      </td>
                      <td className="border border-gray-200 px-2 py-2 text-gray-700 whitespace-nowrap">
                        60kg×2〜3回
                      </td>
                      <td className="border border-gray-200 px-2 py-2 text-gray-700 font-bold whitespace-nowrap">
                        120kg
                      </td>
                      <td className="border border-gray-200 px-2 py-2 text-gray-500 whitespace-nowrap">
                        約×1.4
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-2 py-2 font-bold text-gray-800 whitespace-nowrap">
                        スクワット
                      </td>
                      <td className="border border-gray-200 px-2 py-2 text-gray-700 whitespace-nowrap">
                        60kg前後
                      </td>
                      <td className="border border-gray-200 px-2 py-2 text-gray-700 font-bold whitespace-nowrap">
                        120kg
                      </td>
                      <td className="border border-gray-200 px-2 py-2 text-gray-500 whitespace-nowrap">
                        約×1.4
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-2 py-2 font-bold text-gray-800 whitespace-nowrap">
                        デッドリフト
                      </td>
                      <td className="border border-gray-200 px-2 py-2 text-gray-700 whitespace-nowrap">
                        60kg前後
                      </td>
                      <td className="border border-gray-200 px-2 py-2 text-gray-700 font-bold whitespace-nowrap">
                        160kg
                      </td>
                      <td className="border border-gray-200 px-2 py-2 text-gray-500 whitespace-nowrap">
                        約×1.9
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-3 text-xs text-gray-500">
                ※ 自己ベストは体重80kg台の頃の数字。体重比はその前提での概算です。
              </p>

              <h3 className="font-bold text-gray-800 mt-5 mb-2">
                スタートは3種目とも60kgだった
              </h3>
              <p>
                始めた頃はベンチプレスが60kgで2〜3回。1RMに換算すると65kg程度です。スクワットもデッドリフトも、だいたい同じくらいの重量から始めています。つまり<span className="font-bold">3種目とも横並びのスタート</span>でした。表の上では「ベンチは初心者、スクワットとデッドリフトは未経験」という、ちぐはぐな位置です。最初はこれが普通です。
              </p>

              <h3 className="font-bold text-gray-800 mt-5 mb-2">
                目安表とズレた部分：スクワットが伸びなかった
              </h3>
              <p>
                注目してほしいのは、<span className="font-bold">ベンチプレスとスクワットが同じ120kgで止まっている</span>ことです。一般的な目安ではスクワットはベンチの1.5倍前後になるはずで、本来なら180kgあってもおかしくありません。
              </p>
              <p className="mt-2">
                体重比で見ると、ベンチプレスは約1.4倍で表の「上級者」を超えているのに、スクワットは約1.4倍で「初心者〜中級者」の間。デッドリフトも約1.9倍で「中級者」です。<span className="font-bold">BIG3のバランスとしては、明らかに上半身に偏っています。</span>
              </p>
              <p className="mt-2">
                これは失敗ではなく、目的の違いです。フィジークは上半身の見た目で評価される競技なので、下半身の最大重量を追う必要がありませんでした。<span className="font-bold">目安表の全項目を埋めなくても、目的は達成できる</span>。これが15年やってみて一番言いたいことです。表の低い行が残っていることを、恥じる必要はまったくありません。
              </p>

              <h3 className="font-bold text-gray-800 mt-5 mb-2">
                ベンチが伸びた理由は「環境を変えたこと」だった
              </h3>
              <p>
                ベンチプレスが大きく伸びたきっかけは、新しいメニューでもサプリでもなく、<span className="font-bold">ジムを変えたこと</span>でした。移った先で補助についてもらえるようになり、フォームの指導も受けられた。それだけで数字が動きました。
              </p>
              <p className="mt-2">
                理由は単純で、<span className="font-bold">補助者がいないと、人は限界の手前で止めてしまう</span>からです。潰れたら戻せないという恐怖があるうちは、本当の限界には触れられません。独学で停滞しているなら、種目やメニューを変える前に、まず「見てもらえる環境」を疑ってみてください。器具や知識より、人が効きます。
              </p>

              <h3 className="font-bold text-gray-800 mt-5 mb-2">
                そして今は、BIG3をあまりやっていない
              </h3>
              <p>
                正直に書きますが、現在はBIG3を主軸にしていません。目的が「重量を伸ばすこと」から離れれば、BIG3は数ある手段のひとつに戻ります。重量はあくまで<span className="font-bold">進んでいるかを確認するための計器</span>であって、計器の針を上げること自体が目的になった時期は、たぶん一番遠回りをしていました。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                この表を鵜呑みにしてはいけない3つの理由
              </h2>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">▸</span>
                  <p>
                    <span className="font-bold">体格で有利不利がある</span>
                    ：腕が長い人はベンチプレスでバーベルを動かす距離が長くなり、同じ筋力でも数字が出にくくなります。デッドリフトは逆に腕が長いほど有利です。骨格の違いは努力では埋まりません。
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">▸</span>
                  <p>
                    <span className="font-bold">フォームが同じ前提の数字</span>
                    ：反動を使ったり、しゃがみが浅かったりすれば、重量はいくらでも増やせます。フォームを崩して表の1段上に行っても、筋肉は1gも増えません。
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">▸</span>
                  <p>
                    <span className="font-bold">見た目とは別の指標</span>
                    ：重量が伸びることと、体が変わることはイコールではありません。ボディメイクが目的なら、重量は「進んでいるかを確認するための計器」であって、目的そのものではありません。
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                1つ上のレベルに行くための考え方
              </h2>
              <p>
                重量を伸ばす原則は「漸進性過負荷」ひとつだけです。前回より少しだけ重く、あるいは同じ重さで1回でも多く挙げる。これを積み重ねる以外に方法はありません。
              </p>
              <p className="mt-2">
                実務的には、<span className="font-bold">設定した回数を全セットこなせたら次回2.5kg増やす</span>というルールで十分です。上半身は伸びが遅いので、1.25kgのマイクロプレートを使うとさらに詰まりにくくなります。
              </p>
              <p className="mt-2">
                今の自分が何kg×何回でトレーニングすべきかは、
                <Link href="/weight-checker" className="text-orange-600 font-bold underline">
                  適正重量チェッカー
                </Link>
                で目的別（筋力アップ／筋肥大／引き締め）に確認できます。頻度の決め方は
                <Link href="/column/frequency" className="text-orange-600 font-bold underline">
                  週に何回筋トレすればいい？
                </Link>
                を参考にしてください。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                まとめ
              </h2>
              <p>
                ベンチプレスは体重×1.0、スクワットは×1.5、デッドリフトは×2.0。これが中級者の目安であり、多くの人が最初に目指す到達点です。ただし表の役割は、優劣をつけることではなく<span className="font-bold">現在地を知って次の一歩を決めること</span>にあります。
              </p>
              <p className="mt-2">
                まずは今の重量から1RMを換算し、自分がどの行にいるかを確認してみてください。次の行までの距離が具体的な数字で見えた瞬間、トレーニングは「なんとなく」から「計画」に変わります。
              </p>
            </section>
          </div>

          <Link
            href="/rm-calculator"
            className="block bg-orange-500 hover:bg-orange-600 rounded-xl p-4 mt-6 transition-colors"
          >
            <p className="font-bold text-white text-sm">
              🧮 自分の1RMを計算する
            </p>
            <p className="text-xs text-orange-50 mt-0.5">
              今の重量と回数を入れるだけ。表のどこにいるかがすぐわかります →
            </p>
          </Link>
        </div>

        <ShareButtons
          url="https://sakutore.jp/column/strength-standards"
          title="BIG3の重量目安一覧｜ベンチプレス・スクワット・デッドリフトは体重の何倍が普通？"
        />
        <Link
          href="/gear"
          className="block bg-orange-50 hover:bg-orange-100 rounded-2xl p-4 mb-6 border-2 border-orange-200 transition-colors"
        >
          <div className="flex items-center gap-3">
            <span className="text-2xl flex-shrink-0">🏋️</span>
            <div>
              <p className="font-bold text-orange-600 text-sm">運営者厳選のおすすめギア</p>
              <p className="text-xs text-gray-500 mt-0.5">高重量で必須になるベルト・グリップを見る →</p>
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
