import Link from "next/link";
import ShareButtons from "@/components/ShareButtons";
import { pageMetadata } from "@/lib/metadata";
import AuthorBox from "@/components/AuthorBox";
import {
  LEVEL_EXPERIENCE,
  LEVEL_STEP_PERIOD,
  MEN_WEIGHTS,
  WOMEN_WEIGHTS,
  benchRows,
  formatRatio,
  womenBenchRows,
  type Row,
} from "@/lib/strengthStandards";

export const metadata = pageMetadata({
  title: "ベンチプレスの平均は何kg？体重別・トレ歴別・男女別の目安一覧 - サクトレ",
  description:
    "ベンチプレスの平均重量を体重50〜100kg別・レベル別の一覧表で解説。男女差・トレーニング歴別の目安・回数から1RMを出す換算表つき。筋トレ歴15年・フィジーク大会入賞の筆者が、60kg×2回から120kgまで伸ばした過程と「平均」という数字の落とし穴を書きます。",
  path: "/column/bench-press-average",
});

// Epley: 1RM = weight x (1 + reps / 30). Same formula as /rm-calculator and
// /column/strength-standards, including the 1-rep special case.
const GYM_WEIGHTS = [40, 50, 60, 70, 80, 90, 100];
const REP_COUNTS = [1, 3, 5, 8, 10, 12];
const oneRm = (weight: number, reps: number) =>
  Math.round(weight * (reps === 1 ? 1 : 1 + reps / 30));

/**
 * Body weight as rows, level as columns.
 * /column/strength-standards prints the same numbers the other way round
 * (level as rows), so the two pages answer two different questions:
 * "what does my level require" there, "where do I sit at my weight" here.
 */
function BenchByWeightTable({
  rows,
  weights,
}: {
  rows: Row[];
  weights: number[];
}) {
  return (
    <div className="overflow-x-auto -mx-2 px-2 mt-3">
      <table className="w-full text-xs border-collapse">
        <thead>
          <tr className="bg-orange-50">
            <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
              体重
            </th>
            {rows.map((row) => (
              <th
                key={row.level}
                className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap"
              >
                {row.level}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr className="bg-gray-50">
            <td className="border border-gray-200 px-2 py-2 text-gray-500 whitespace-nowrap">
              体重比
            </td>
            {rows.map((row) => (
              <td
                key={row.level}
                className="border border-gray-200 px-2 py-2 text-gray-500 whitespace-nowrap"
              >
                ×{formatRatio(row.ratio)}
              </td>
            ))}
          </tr>
          {weights.map((w) => (
            <tr key={w}>
              <td className="border border-gray-200 px-2 py-2 font-bold text-gray-800 whitespace-nowrap">
                {w}kg
              </td>
              {rows.map((row) => (
                <td
                  key={row.level}
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

export default function BenchPressAveragePage() {
  return (
    <main className="min-h-screen flex flex-col items-center px-4 py-8">
      <div className="max-w-md w-full animate-slideUp">
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <p className="text-xs text-orange-500 font-bold mb-2">コラム</p>
          <h1 className="text-xl font-bold text-gray-800 mb-6">
            ベンチプレスの平均は何kg？体重別・トレ歴別の目安一覧
          </h1>

          <div className="space-y-6 text-sm text-gray-700 leading-relaxed">
            <section>
              <p>
                「ベンチプレスの平均って何kgなんだろう」。この検索をする人が本当に知りたいのは平均値そのものではなく、<span className="font-bold">自分は上のほうなのか、下のほうなのか</span>だと思います。
              </p>
              <p className="mt-2">
                先に結論を書きます。<span className="font-bold">ベンチプレスに「全国平均◯kg」と言える信頼できる統計はありません。</span>ネットで見かける「日本人男性の平均は40kg」といった数字は、ほとんどが出典のない引用の連鎖です。そもそも「ジムに通ったことがない人」まで含めた平均に、あなたが自分を比べる意味はありません。
              </p>
              <p className="mt-2">
                代わりに世界共通で使われているのが<span className="font-bold">体重比（体重の何倍を挙げられるか）</span>です。体重55kgの人の70kgと、体重90kgの人の70kgは、まったく意味が違うからです。この記事では体重別・トレーニング歴別・男女別の目安をすべて表にしました。自分の行を探してください。
              </p>
            </section>

            <section className="bg-orange-50 border border-orange-100 rounded-xl p-4">
              <p className="font-bold text-orange-600 mb-1">先に知っておくこと</p>
              <p className="text-xs">
                以下の表はすべて<span className="font-bold">1RM（1回だけ挙げられる最大重量）</span>です。「10回挙げられる重量」とは別物なので、比べる前に換算してください。実際に1回の限界に挑戦するのは危険なので、
                <Link href="/rm-calculator" className="text-orange-600 font-bold underline">
                  RM計算機
                </Link>
                を使うか、この記事の<span className="font-bold">換算表</span>を見るのが安全です。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                体重別・ベンチプレスの目安一覧（男性）
              </h2>
              <p>
                自分の体重の行を見てください。左から順に、<span className="font-bold">初めてバーベルを握る段階 → ジムに通い慣れた段階 → 一目置かれる段階</span>という並びです。
              </p>
              <BenchByWeightTable rows={benchRows} weights={MEN_WEIGHTS} />
              <ul className="mt-3 space-y-1 text-xs text-gray-500">
                {benchRows.map((row) => (
                  <li key={row.level}>
                    <span className="font-bold text-gray-700">
                      {row.level}（体重×{formatRatio(row.ratio)}）
                    </span>
                    ：{row.note}
                  </li>
                ))}
              </ul>
              <p className="mt-3">
                目安として使いやすいのは<span className="font-bold">「体重と同じ重さ（×1.0）が中級者」</span>という基準です。体重70kgならベンチ70kg。ここがベンチプレスで最初にぶつかる大きな壁で、ジムに通う人の多くが目標にするラインでもあります。
              </p>
              <p className="mt-2">
                逆に言えば、<span className="font-bold">体重の0.75倍（体重70kgなら約53kg）に届いていれば、もう「初心者」の枠</span>です。40kgや50kgで止まっていることを気にしている人は多いのですが、体重比で見ると思っているより悪くない位置にいることがよくあります。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                トレーニング歴別に見た場合の目安
              </h2>
              <p>
                「何年やったら何kg」を知りたい人向けに、体重70kgを例にして期間の目安を並べます。
              </p>
              <div className="overflow-x-auto -mx-2 px-2 mt-3">
                <table className="w-full text-xs border-collapse">
                  <thead>
                    <tr className="bg-orange-50">
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
                        レベル
                      </th>
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
                        トレ歴の目安
                      </th>
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
                        体重70kgなら
                      </th>
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
                        次のレベルまで
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {benchRows.map((row) => (
                      <tr key={row.level}>
                        <td className="border border-gray-200 px-2 py-2 font-bold text-gray-800 whitespace-nowrap">
                          {row.level}
                        </td>
                        <td className="border border-gray-200 px-2 py-2 text-gray-700 whitespace-nowrap">
                          {LEVEL_EXPERIENCE[row.level]}
                        </td>
                        <td className="border border-gray-200 px-2 py-2 text-gray-700 font-bold whitespace-nowrap">
                          {Math.round(70 * row.ratio)}kg
                        </td>
                        <td className="border border-gray-200 px-2 py-2 text-gray-500 whitespace-nowrap">
                          {LEVEL_STEP_PERIOD[row.level] ?? "—"}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-3">
                ここで気づいてほしいのは、<span className="font-bold">1レベル上がるのに必要な重量は毎回同じ（体重×0.25＝70kgの人なら+17.5kg）なのに、かかる期間だけが伸びていく</span>ことです。未経験から初心者までは半年〜1年、初心者から中級者は1〜2年、中級者から上級者は3〜5年。
              </p>
              <p className="mt-2">
                <span className="font-bold">同じ距離を進むのに時間がかかるようになるだけで、あなたのペースが落ちたわけではありません。</span>停滞していると感じたときに、まず思い出してほしい事実です。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                女性のベンチプレスの目安
              </h2>
              <p>
                女性の場合、目安は男性と同じ表では測れません。ベンチプレスは<span className="font-bold">BIG3の中で男女差が最も大きい種目</span>だからです。
              </p>
              <BenchByWeightTable rows={womenBenchRows} weights={WOMEN_WEIGHTS} />
              <ul className="mt-3 space-y-1 text-xs text-gray-500">
                {womenBenchRows.map((row) => (
                  <li key={row.level}>
                    <span className="font-bold text-gray-700">
                      {row.level}（体重×{formatRatio(row.ratio)}）
                    </span>
                    ：{row.note}
                  </li>
                ))}
              </ul>
              <p className="mt-3">
                同じレベル名で比べると、女性の体重比は男性の<span className="font-bold">約60%</span>です（中級者：男性×1.0に対し女性×0.6）。これは努力の差ではなく、上半身の筋量の付き方の差です。
              </p>
              <p className="mt-2">
                もうひとつ、女性が知っておくべき現実があります。<span className="font-bold">シャフト単体が20kg</span>あるので、体重50kgの女性にとってはバーだけで既に体重×0.4＝「初心者」の水準です。つまり<span className="font-bold">バーを10回挙げられる時点で、スタート地点はクリアしている</span>。ここを知らずに「バーしか挙がらない」と落ち込む人がとても多いので、最初に書いておきます。
              </p>
              <p className="mt-2">
                女性の筋トレ全般については
                <Link href="/column/women-muscle-slim" className="text-orange-600 font-bold underline">
                  女性が筋トレしても太くならない理由
                </Link>
                も合わせてどうぞ。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                年齢別の平均は、あえて出しません
              </h2>
              <p>
                「40代の平均」「50代の平均」を探している人も多いと思いますが、<span className="font-bold">年齢別の信頼できるベンチプレス統計は存在しません</span>。年代別の数字を出しているサイトはありますが、根拠が示されているものはほとんど見たことがありません。
              </p>
              <p className="mt-2">
                実務的には、<span className="font-bold">年齢で目標重量を下げるのではなく、到達までの期間を長く見る</span>ほうが実態に合います。40代・50代から始めても筋力は伸びます。ただし回復に時間がかかるので、週の頻度と睡眠の確保のほうが先に効いてきます。
              </p>
              <p className="mt-2">
                詳しくは
                <Link href="/column/over40" className="text-orange-600 font-bold underline">
                  40代からの筋トレ入門
                </Link>
                に書きました。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                今の重量から1RMを出す換算表
              </h2>
              <p>
                ここまでの表と比べるには、自分の1RMが必要です。「◯kgを◯回」から換算した推定値を表にしました。縦が今扱っている重量、横が挙がる回数です。
              </p>
              <div className="overflow-x-auto -mx-2 px-2 mt-3">
                <table className="w-full text-xs border-collapse">
                  <thead>
                    <tr className="bg-orange-50">
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
                        重量＼回数
                      </th>
                      {REP_COUNTS.map((reps) => (
                        <th
                          key={reps}
                          className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap"
                        >
                          {reps}回
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {GYM_WEIGHTS.map((w) => (
                      <tr key={w}>
                        <td className="border border-gray-200 px-2 py-2 font-bold text-gray-800 whitespace-nowrap">
                          {w}kg
                        </td>
                        {REP_COUNTS.map((reps) => (
                          <td
                            key={reps}
                            className="border border-gray-200 px-2 py-2 text-gray-700 whitespace-nowrap"
                          >
                            {oneRm(w, reps)}kg
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-3 text-xs text-gray-500">
                ※ 計算式は 1RM ＝ 重量 ×（1 + 回数 ÷ 30）。回数が多いほど誤差が大きくなるので、<span className="font-bold">6回以下</span>で計算するのが正確です。
              </p>
              <p className="mt-3">
                たとえば<span className="font-bold">60kgを10回</span>挙げられるなら1RMは約80kg。体重70kgの人なら体重比×1.14で、表の「初心者（×0.75）」をとうに超えて「中級者（×1.0）」も超えています。<span className="font-bold">10回挙がる重量だけを見て自分を低く見積もっている人は、本当に多いです。</span>
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                筆者の場合：60kg×2回から120kgまで
              </h2>
              <p>
                参考までに、筆者自身（筋トレ歴15年・フィジーク大会入賞）の数字を出しておきます。始めた頃のベンチプレスは<span className="font-bold">60kgで2〜3回</span>。1RMに換算すると65kg程度です。そこから自己ベストは<span className="font-bold">120kg</span>（体重80kg台なので体重比は約1.4倍）。
              </p>
              <p className="mt-2">
                この15年で一番効いた要因を正直に書くと、新しいメニューでもサプリでもなく、<span className="font-bold">ジムを変えたこと</span>でした。移った先で補助についてもらえるようになり、フォームも見てもらえた。それだけで数字が動きました。
              </p>
              <p className="mt-2">
                理由は単純で、<span className="font-bold">補助者がいないと、人は限界の手前で止めてしまう</span>からです。潰れたら戻せないという恐怖があるうちは、本当の限界には触れられません。独学で停滞しているなら、種目やメニューを変える前に「見てもらえる環境」を疑ってみてください。器具や知識より、人が効きます。
              </p>
              <p className="mt-2">
                なお、BIG3全体で見ると筆者はスクワットも同じ120kg（体重比×1.4）で、<span className="font-bold">上半身に明らかに偏っています</span>。3種目のバランスまで含めた話は
                <Link href="/column/strength-standards" className="text-orange-600 font-bold underline">
                  BIG3の重量目安一覧
                </Link>
                に書きました。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                平均を超えたいときの優先順位
              </h2>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">1</span>
                  <p>
                    <span className="font-bold">頻度を週2回に固定する。</span>ベンチプレスは伸びが遅い種目なので、週1回では刺激が足りません。
                    <Link href="/column/frequency" className="text-orange-600 font-bold underline">
                      週に何回筋トレすればいい？
                    </Link>
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">2</span>
                  <p>
                    <span className="font-bold">重量より先にフォームを固める。</span>肩甲骨を寄せて胸を張る、足で床を押す。ここが崩れたまま重量を足しても、伸びる前に肩を痛めます。
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">3</span>
                  <p>
                    <span className="font-bold">食べる量を確認する。</span>体重が増えていない時期は、ベンチプレスも基本的に伸びません。
                    <Link href="/column/protein" className="text-orange-600 font-bold underline">
                      タンパク質の必要量
                    </Link>
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">4</span>
                  <p>
                    <span className="font-bold">限界を見てもらえる環境を作る。</span>補助者か、パワーラックのセーフティ。これが最後にして最大の一手です。
                  </p>
                </div>
              </div>
              <p className="mt-3">
                自宅派の人は
                <Link href="/column/chest-home" className="text-orange-600 font-bold underline">
                  自宅でできる胸トレ
                </Link>
                も参考にしてください。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                よくある質問
              </h2>
              <h3 className="font-bold text-gray-800 mt-5 mb-2">
                ベンチプレス60kgは平均より上ですか？
              </h3>
              <p>
                体重によります。体重60kgなら×1.0で中級者、体重80kgなら×0.75で初心者の水準です。<span className="font-bold">同じ60kgでも評価は変わります。</span>ただしこれは1RMでの話なので、「60kgを10回」なら1RMは約80kgとして読んでください。
              </p>
              <h3 className="font-bold text-gray-800 mt-5 mb-2">
                初心者は何kgから始めればいいですか？
              </h3>
              <p>
                シャフト（20kg）だけで10回、フォームを崩さずにできるところからです。重量を足すのはその後で十分間に合います。
              </p>
              <h3 className="font-bold text-gray-800 mt-5 mb-2">
                体重100kgでベンチ100kgは普通ですか？
              </h3>
              <p>
                体重比×1.0なので中級者の水準です。数字だけ見ると大きいので「すごい」と言われがちですが、<span className="font-bold">体重で割ると位置は変わります</span>。この表を体重比で作っている理由がここにあります。
              </p>
              <h3 className="font-bold text-gray-800 mt-5 mb-2">
                自分のレベルをまとめて知りたい
              </h3>
              <p>
                体重とレベルを選ぶだけでBIG3の目標重量が出る
                <Link href="/weight-checker" className="text-orange-600 font-bold underline">
                  筋トレレベル診断
                </Link>
                を用意しています。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                まとめ
              </h2>
              <ul className="space-y-2">
                <li>
                  ▸ 出典のある「全国平均」は存在しない。比べるなら<span className="font-bold">体重比</span>で見る。
                </li>
                <li>
                  ▸ 男性は<span className="font-bold">体重×1.0が中級者</span>、×0.75で既に初心者の枠。女性はその約60%（中級者×0.6）。
                </li>
                <li>
                  ▸ 比べる前に<span className="font-bold">1RMへ換算する</span>。60kg×10回なら約80kg。低く見積もっている人が多い。
                </li>
                <li>
                  ▸ 1レベル上がる重量は毎回同じ（体重×0.25）で、<span className="font-bold">かかる期間だけが伸びる</span>。ペースが落ちたわけではない。
                </li>
              </ul>
              <p className="mt-2">
                まずは今の重量から1RMを換算して、自分の行を確認してみてください。次の行までの距離が数字で見えた瞬間、ベンチプレスは「なんとなく続けるもの」から「計画」に変わります。
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
          url="https://sakutore.jp/column/bench-press-average"
          title="ベンチプレスの平均は何kg？体重別・トレ歴別の目安一覧"
        />
        <Link
          href="/gear"
          className="block bg-orange-50 hover:bg-orange-100 rounded-2xl p-4 mb-6 border-2 border-orange-200 transition-colors"
        >
          <div className="flex items-center gap-3">
            <span className="text-2xl flex-shrink-0">🏋️</span>
            <div>
              <p className="font-bold text-orange-600 text-sm">運営者厳選のおすすめギア</p>
              <p className="text-xs text-gray-500 mt-0.5">高重量で必須になるベルト・リストラップを見る →</p>
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
