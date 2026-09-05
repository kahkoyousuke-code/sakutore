import Link from "next/link";
import ShareButtons from "@/components/ShareButtons";
import { pageMetadata } from "@/lib/metadata";
import AuthorBox from "@/components/AuthorBox";
import {
  MEN_WEIGHTS,
  WOMEN_WEIGHTS,
  benchRows,
  deadliftRows,
  formatRatio,
  squatRows,
  totalRows,
  womenBenchRows,
  womenDeadliftRows,
  womenSquatRows,
  type Row,
} from "@/lib/strengthStandards";

export const metadata = pageMetadata({
  title: "BIG3の重量目安一覧｜ベンチプレス・スクワット・デッドリフトの体重別早見表 - サクトレ",
  description:
    "ビッグ3（ベンチプレス・スクワット・デッドリフト）の重量目安を体重50〜100kg別・レベル別の早見表で解説。BIG3合計の目安と1RM換算表つき。筋トレ歴15年・フィジーク大会入賞の筆者が、自身の実重量（60kg→120/120/160kg）と目安表とのズレまで公開します。",
  path: "/column/strength-standards",
});

// Epley: 1RM = weight x (1 + reps / 30). Same formula as /rm-calculator,
// including its special case: a 1-rep max is the weight itself.
const REP_COUNTS = [1, 2, 3, 4, 5, 6, 8, 10, 12, 15];
const repFactor = (reps: number) => (reps === 1 ? 1 : 1 + reps / 30);

function LiftTable({ rows, weights }: { rows: Row[]; weights: number[] }) {
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
            {weights.map((w) => (
              <th
                key={w}
                className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap"
              >
                {w}kg
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.level}>
              <td className="border border-gray-200 px-2 py-2 font-bold text-gray-800 whitespace-nowrap">
                {row.level}
              </td>
              <td className="border border-gray-200 px-2 py-2 text-gray-500 whitespace-nowrap">
                ×{formatRatio(row.ratio)}
              </td>
              {weights.map((w) => (
                <td
                  key={w}
                  className="border border-gray-200 px-2 py-2 text-gray-700 whitespace-nowrap"
                >
                  {Math.round(w * row.ratio)}kg
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function LevelLegend({ rows }: { rows: Row[] }) {
  return (
    <ul className="mt-3 space-y-1 text-xs text-gray-500">
      {rows.map((row) => (
        <li key={row.level}>
          <span className="font-bold text-gray-700">{row.level}（体重×{formatRatio(row.ratio)}）</span>
          ：{row.note}
        </li>
      ))}
    </ul>
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
                重量の評価は「体重の何倍か」で見るのが世界共通のやり方です。体重60kgの人の80kgと、体重90kgの人の80kgは、まったく意味が違うからです。この記事では、BIG3（ビッグ3＝ベンチプレス・スクワット・デッドリフト）の目安を体重別・レベル別の一覧表（早見表）にまとめました。自分の現在地を確認してから読み進めてください。
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
                1RM換算表：今の重量×回数から最大重量を出す
              </h2>
              <p>
                表と自分を比べる前に、まず1RMを求めます。使うのは<span className="font-bold">Epley式</span>で、計算は「今の重量 ×（1 + 回数 ÷ 30）」だけです。下の倍率を掛けるだけでも同じ数字が出ます。
              </p>
              <div className="overflow-x-auto -mx-2 px-2 mt-3">
                <table className="w-full text-xs border-collapse">
                  <thead>
                    <tr className="bg-orange-50">
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
                        挙がる回数
                      </th>
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
                        倍率
                      </th>
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
                        60kgなら
                      </th>
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
                        80kgなら
                      </th>
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
                        100kgなら
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {REP_COUNTS.map((reps) => {
                      const factor = repFactor(reps);
                      return (
                        <tr key={reps}>
                          <td className="border border-gray-200 px-2 py-2 font-bold text-gray-800 whitespace-nowrap">
                            {reps}回
                          </td>
                          <td className="border border-gray-200 px-2 py-2 text-gray-500 whitespace-nowrap">
                            ×{factor.toFixed(2)}
                          </td>
                          {[60, 80, 100].map((w) => (
                            <td
                              key={w}
                              className="border border-gray-200 px-2 py-2 text-gray-700 whitespace-nowrap"
                            >
                              {Math.round(w * factor)}kg
                            </td>
                          ))}
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              <p className="mt-3 text-xs text-gray-500">
                例：ベンチプレス80kgが8回挙がるなら 80 × 1.27 ＝ <span className="font-bold">約101kg</span>が1RM。体重70kgの人なら体重比1.4倍で、「上級者」（×1.25）を超えて「エリート」（×1.5）が見えてくる位置です。
              </p>
              <p className="mt-2 text-xs text-gray-500">
                ※ 回数が増えるほど誤差は大きくなります。<span className="font-bold">6回以下</span>で計算するのが最も正確で、15回を超える重量から逆算した数字はあまり当てになりません。任意の重量・回数は
                <Link href="/rm-calculator" className="text-orange-600 font-bold underline">
                  RM計算機
                </Link>
                で計算できます。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                ベンチプレスの重量目安（男性）
              </h2>
              <p>
                上半身の代表種目。BIG3の中では最も伸びが遅く、体重の1.0倍（＝自分の体重と同じ重さ）が最初の大きな壁になります。
              </p>
              <LiftTable rows={benchRows} weights={MEN_WEIGHTS} />
              <LevelLegend rows={benchRows} />
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
              <LiftTable rows={squatRows} weights={MEN_WEIGHTS} />
              <LevelLegend rows={squatRows} />
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
              <LiftTable rows={deadliftRows} weights={MEN_WEIGHTS} />
              <LevelLegend rows={deadliftRows} />
              <p className="mt-3 text-xs text-gray-500">
                ※ 数字が伸びやすいぶん、フォームが崩れたまま重量だけ増えて腰を痛める事故が最も多い種目でもあります。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                BIG3合計（トータル）の目安
              </h2>
              <p>
                3種目の1RMを足した数字を「BIG3合計」「BIG3トータル」と呼びます。種目ごとの得意・不得意がならされるので、全体の力量を1つの数字で見たいときに便利です。
              </p>
              <LiftTable rows={totalRows} weights={MEN_WEIGHTS} />
              <LevelLegend rows={totalRows} />
              <p className="mt-3 text-xs text-gray-500">
                ※ 各種目の目安をそのまま足した値です。<span className="font-bold">合計が体重の4.5倍で中級者</span>、と覚えておくと現在地を把握しやすくなります。
              </p>
              <p className="mt-2 text-xs text-gray-500">
                ただし合計は<span className="font-bold">内訳を隠します</span>。筆者のように1種目だけ突出していても合計は伸びるので、弱点を探すときは必ず種目ごとの表に戻ってください。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                女性の重量目安
              </h2>
              <p>
                女性は男性に比べて上半身の筋量が少なく、下半身との差が大きい傾向があります。そのためベンチプレスの比率は低め、下半身種目は男性に近い比率になります。
              </p>
              <h3 className="font-bold text-gray-800 mt-5 mb-2">ベンチプレス（女性）</h3>
              <LiftTable rows={womenBenchRows} weights={WOMEN_WEIGHTS} />
              <LevelLegend rows={womenBenchRows} />

              <h3 className="font-bold text-gray-800 mt-5 mb-2">スクワット（女性）</h3>
              <LiftTable rows={womenSquatRows} weights={WOMEN_WEIGHTS} />
              <LevelLegend rows={womenSquatRows} />

              <h3 className="font-bold text-gray-800 mt-5 mb-2">デッドリフト（女性）</h3>
              <LiftTable rows={womenDeadliftRows} weights={WOMEN_WEIGHTS} />
              <LevelLegend rows={womenDeadliftRows} />

              <p className="mt-4 text-xs text-gray-500">
                ※ ベンチプレスのバーベルは、シャフトだけで20kgあります。体重50kgの女性にとっては<span className="font-bold">シャフト単体が体重×0.4＝すでに初心者の目安</span>なので、最初はスミスマシンやダンベルから始めて問題ありません。数字が出ないのは筋力不足ではなく、器具の下限がそこにあるためです。
              </p>
              <p className="mt-2 text-xs text-gray-500">
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
              <p className="mt-3">
                この3つを足すとBIG3合計は<span className="font-bold">400kg</span>。体重80kg台なので体重比は4.5〜5.0倍で、合計表では「中級者（×4.5）」をぎりぎり超えたあたりに入ります。<span className="font-bold">合計だけ見れば平均以上に見える</span>わけですが、次に書くとおり内訳はかなり歪んでいます。合計という数字の限界がそのまま出ている例なので、自分の数字と見比べてみてください。
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
              <ul className="space-y-2">
                <li>
                  ▸ 中級者の目安は<span className="font-bold">ベンチ×1.0／スクワット×1.5／デッドリフト×2.0</span>、BIG3合計なら<span className="font-bold">体重×4.5</span>。多くの人が最初に目指す到達点です。
                </li>
                <li>
                  ▸ 比べる前に<span className="font-bold">1RMに換算する</span>。今の重量 ×（1 + 回数 ÷ 30）で出ます。6回以下で計算すると誤差が小さくなります。
                </li>
                <li>
                  ▸ <span className="font-bold">合計は内訳を隠します</span>。筆者は合計400kg（体重比4.5〜5.0倍）で中級者を超えていますが、スクワット単体では中級者に届いていません。
                </li>
                <li>
                  ▸ 表の役割は優劣をつけることではなく、<span className="font-bold">現在地を知って次の一歩を決めること</span>。全項目を埋めなくても目的は達成できます。
                </li>
              </ul>
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
