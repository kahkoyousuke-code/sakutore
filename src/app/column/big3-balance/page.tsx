import Link from "next/link";
import ShareButtons from "@/components/ShareButtons";
import { pageMetadata } from "@/lib/metadata";
import AuthorBox from "@/components/AuthorBox";
import {
  benchRows,
  squatRows,
  deadliftRows,
  womenBenchRows,
  womenSquatRows,
  womenDeadliftRows,
  formatRatio,
  levelForRatio,
  type Level,
  type Row,
} from "@/lib/strengthStandards";

export const metadata = pageMetadata({
  title: "BIG3のバランス診断｜ベンチ1に対しスクワット1.5・デッド2.0 - サクトレ",
  description:
    "3種目を横に並べると弱点が分かります。目安の比率はベンチ1：スクワット1.5：デッドリフト2.0。ベンチ100kgならスクワット150kg・デッド200kgが釣り合う位置です。比率から外れた種目の見つけ方と、合計を伸ばすならどこから手を付けるかを、女性の比率（1：1.8：2.2）つきで解説します。",
  path: "/column/big3-balance",
});

// 比率の基準に使うレベル。3種目でいちばん人が多い帯。
const BASE_LEVEL: Level = "中級者";

// ベンチプレスの実重量から、釣り合うスクワット・デッドを出す例。
const BENCH_WEIGHTS = [60, 80, 100, 120, 140];

// 診断例に使う体格。筆者とは別に、読者がなぞる用の1人を固定する。
const SAMPLE_WEIGHT = 70;
const SAMPLE_LIFTS = { bench: 90, squat: 100, deadlift: 140 };

// 筆者の実数字（他記事と揃えてある）。
const AUTHOR = { bench: 120, squat: 120, deadlift: 160, bodyWeight: 85 };

const ratioAt = (rows: Row[], level: Level) =>
  rows.find((r) => r.level === level)?.ratio ?? 0;

export default function Big3BalancePage() {
  const benchBase = ratioAt(benchRows, BASE_LEVEL);
  const squatBase = ratioAt(squatRows, BASE_LEVEL);
  const deadBase = ratioAt(deadliftRows, BASE_LEVEL);
  const squatVsBench = squatBase / benchBase;
  const deadVsBench = deadBase / benchBase;

  const womenBench = ratioAt(womenBenchRows, BASE_LEVEL);
  const womenSquatVsBench = ratioAt(womenSquatRows, BASE_LEVEL) / womenBench;
  const womenDeadVsBench = ratioAt(womenDeadliftRows, BASE_LEVEL) / womenBench;

  // 各レベルで「ベンチを1としたときの」比率。幅があることを示すために全レベル出す。
  const relativeRows = benchRows.map((row) => ({
    level: row.level,
    squat: ratioAt(squatRows, row.level) / row.ratio,
    dead: ratioAt(deadliftRows, row.level) / row.ratio,
  }));

  const lifts = [
    { name: "ベンチプレス", rows: benchRows, weight: SAMPLE_LIFTS.bench, href: "/column/bench-press-average" },
    { name: "スクワット", rows: squatRows, weight: SAMPLE_LIFTS.squat, href: "/column/squat-average" },
    { name: "デッドリフト", rows: deadliftRows, weight: SAMPLE_LIFTS.deadlift, href: "/column/deadlift-average" },
  ];

  return (
    <main className="min-h-screen flex flex-col items-center px-4 py-8">
      <div className="max-w-md w-full animate-slideUp">
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <p className="text-xs text-orange-500 font-bold mb-2">コラム</p>
          <h1 className="text-xl font-bold text-gray-800 mb-6">
            BIG3のバランス診断｜ベンチ1に対しスクワット1.5・デッド2.0
          </h1>

          <div className="space-y-6 text-sm text-gray-700 leading-relaxed">
            <section>
              <p>
                BIG3を長く続けていると、3種目が同じペースで伸びないことに気づきます。<span className="font-bold">どれかが必ず遅れます。</span>
              </p>
              <p className="mt-2">
                その遅れている種目を見つけるのは簡単です。<span className="font-bold">3種目の比率</span>を見ればいい。目安では
                <span className="font-bold">
                  ベンチ1 : スクワット{squatVsBench.toFixed(1)} : デッドリフト{deadVsBench.toFixed(1)}
                </span>
                になります。ベンチ100kgなら、スクワット{Math.round(100 * squatVsBench)}kg・デッドリフト
                {Math.round(100 * deadVsBench)}kgで釣り合う、ということです。
              </p>
              <p className="mt-2">
                ここから外れている種目が弱点で、<span className="font-bold">合計を伸ばすときに最初に手を付ける場所</span>でもあります。体重別の目安（何kg挙げれば何レベルか）は
                <Link href="/column/strength-standards" className="text-orange-600 font-bold underline">
                  BIG3の体重別早見表
                </Link>
                にあるので、この記事では<span className="font-bold">3種目の関係</span>だけを扱います。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                目安の比率（ベンチを1としたとき）
              </h2>
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
                    {relativeRows.map((row) => (
                      <tr key={row.level}>
                        <td className="border border-gray-200 px-2 py-2 font-bold text-gray-800 whitespace-nowrap">
                          {row.level}
                        </td>
                        <td className="border border-gray-200 px-2 py-2 text-gray-600 whitespace-nowrap">
                          1
                        </td>
                        <td className="border border-gray-200 px-2 py-2 font-bold text-gray-800 whitespace-nowrap">
                          {row.squat.toFixed(2)}
                        </td>
                        <td className="border border-gray-200 px-2 py-2 font-bold text-gray-800 whitespace-nowrap">
                          {row.dead.toFixed(2)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-3">
                レベルが上がっても<span className="font-bold">この比率はほとんど変わりません。</span>デッドリフトはどのレベルでもベンチのちょうど
                {deadVsBench.toFixed(1)}倍、スクワットは1.5〜1.7倍の幅に収まります。つまり<span className="font-bold">比率は初心者でも上級者でも同じ物差しとして使えます</span>。
              </p>
              <p className="mt-2 text-xs text-gray-500">
                ※ 体重比（
                {`ベンチ×${formatRatio(benchBase)}／スクワット×${formatRatio(squatBase)}／デッドリフト×${formatRatio(deadBase)}`}
                ＝{BASE_LEVEL}）を種目間で割った値です。元の数字は
                <Link href="/column/strength-standards" className="text-orange-600 font-bold underline">
                  体重別早見表
                </Link>
                と同じものを使っています。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                ベンチが◯kgなら、あと2種目はいくらか
              </h2>
              <p>
                いちばん把握している人が多いベンチプレスを基準にした早見表です。<span className="font-bold">自分のベンチの行を見て、実際の数字と比べてください。</span>
              </p>
              <div className="overflow-x-auto -mx-2 px-2 mt-3">
                <table className="w-full text-xs border-collapse">
                  <thead>
                    <tr className="bg-orange-50">
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
                        ベンチ
                      </th>
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
                        釣り合うスクワット
                      </th>
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
                        釣り合うデッドリフト
                      </th>
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
                        合計
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {BENCH_WEIGHTS.map((bench) => {
                      const squat = Math.round(bench * squatVsBench);
                      const dead = Math.round(bench * deadVsBench);
                      return (
                        <tr key={bench}>
                          <td className="border border-gray-200 px-2 py-2 font-bold text-gray-800 whitespace-nowrap">
                            {bench}kg
                          </td>
                          <td className="border border-gray-200 px-2 py-2 text-gray-700 whitespace-nowrap">
                            {squat}kg
                          </td>
                          <td className="border border-gray-200 px-2 py-2 text-gray-700 whitespace-nowrap">
                            {dead}kg
                          </td>
                          <td className="border border-gray-200 px-2 py-2 font-bold text-orange-600 whitespace-nowrap">
                            {bench + squat + dead}kg
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              <p className="mt-3">
                右端の合計が、その比率で揃ったときの数字です。合計が体重の何倍で何レベルかは
                <Link href="/column/big3-total" className="text-orange-600 font-bold underline">
                  BIG3合計◯kgはどのレベル？
                </Link>
                で引けます。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                診断の手順（体重{SAMPLE_WEIGHT}kgの例）
              </h2>
              <p>
                比率で見るより確実なのは、<span className="font-bold">3種目のレベルを別々に判定して並べる</span>方法です。体重
                {SAMPLE_WEIGHT}kgで、ベンチ{SAMPLE_LIFTS.bench}kg・スクワット{SAMPLE_LIFTS.squat}kg・デッドリフト
                {SAMPLE_LIFTS.deadlift}kgの人を例にします。
              </p>
              <div className="overflow-x-auto -mx-2 px-2 mt-3">
                <table className="w-full text-xs border-collapse">
                  <thead>
                    <tr className="bg-orange-50">
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
                        種目
                      </th>
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
                        実重量
                      </th>
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
                        体重比
                      </th>
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
                        レベル
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {lifts.map((lift) => {
                      const ratio = lift.weight / SAMPLE_WEIGHT;
                      const level = levelForRatio(lift.rows, ratio);
                      return (
                        <tr key={lift.name}>
                          <td className="border border-gray-200 px-2 py-2 font-bold text-gray-800 whitespace-nowrap">
                            {lift.name}
                          </td>
                          <td className="border border-gray-200 px-2 py-2 text-gray-700 whitespace-nowrap">
                            {lift.weight}kg
                          </td>
                          <td className="border border-gray-200 px-2 py-2 text-gray-600 whitespace-nowrap">
                            ×{ratio.toFixed(2)}
                          </td>
                          <td className="border border-gray-200 px-2 py-2 font-bold text-orange-600 whitespace-nowrap">
                            {level ?? "—"}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              <p className="mt-3">
                この人はベンチが上級者、デッドリフトが中級者、スクワットが初心者です。<span className="font-bold">レベルがいちばん低い種目が弱点</span>なので、手を付けるのはスクワットです。
              </p>
              <p className="mt-2">
                比率でも同じ結論になります。ベンチ{SAMPLE_LIFTS.bench}kgに釣り合うのはスクワット
                {Math.round(SAMPLE_LIFTS.bench * squatVsBench)}kg・デッドリフト
                {Math.round(SAMPLE_LIFTS.bench * deadVsBench)}kg。実際は
                {SAMPLE_LIFTS.squat}kgと{SAMPLE_LIFTS.deadlift}kgで<span className="font-bold">どちらも足りていませんが、離れ方が大きいのはスクワット</span>です。
              </p>
              <p className="mt-2">
                自分の体重で同じ判定をするなら
                <Link href="/weight-checker" className="text-orange-600 font-bold underline">
                  適正重量チェッカー
                </Link>
                に3種目を入れるのが早いです。1回だけ挙がる重量が分からない場合は
                <Link href="/rm-calculator" className="text-orange-600 font-bold underline">
                  1RM換算ツール
                </Link>
                を先に通してください。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                合計を伸ばすなら、凹んでいる種目から
              </h2>
              <p>
                弱点が分かったら、次は「どこから伸ばすか」です。答えは<span className="font-bold">凹んでいる種目</span>です。理由が2つあります。
              </p>
              <p className="mt-2">
                1つめは<span className="font-bold">伸びしろの差</span>。得意種目は自己ベスト付近で止まりやすく、1kg増やすのに数ヶ月かかります。一方、放置していた種目は<span className="font-bold">フォームを覚えるだけで10kg単位で動く</span>ことがあります。
              </p>
              <p className="mt-2">
                2つめは<span className="font-bold">合計への効き方</span>。BIG3合計で見ると、いちばん重い重量を扱うデッドリフトが同じ割合の伸びでも上乗せが大きくなります。デッドリフトが凹んでいる人は、そこが最短の道です。
              </p>
              <p className="mt-2">
                ただし例外があります。<span className="font-bold">目的が競技ではなく見た目なら、比率を揃える必要はありません。</span>次に書くとおり、私自身がその例です。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                なぜその種目が凹むのか
              </h2>
              <ul className="space-y-2">
                <li>
                  ▸ <span className="font-bold">ベンチが凹む</span>：潰れたときに人の補助が要るため、限界に触りにくい。停滞したら補助してもらえる環境を作るのが先
                </li>
                <li>
                  ▸ <span className="font-bold">スクワットが凹む</span>：セーフティバーの高さを自分で合わせないと限界に挑めない。準備の手間を惜しむと頭打ちになる
                </li>
                <li>
                  ▸ <span className="font-bold">デッドリフトが凹む</span>：腰への不安とグリップで止まる。ベルトとパワーグリップで解決する部分が大きい
                </li>
              </ul>
              <p className="mt-3">
                どれも<span className="font-bold">才能ではなく環境と準備</span>の問題です。種目ごとの詳しい目安は
                <Link href="/column/squat-weight-level" className="text-orange-600 font-bold underline">
                  スクワット◯kgはすごい？
                </Link>
                や
                <Link href="/column/deadlift-weight-level" className="text-orange-600 font-bold underline">
                  デッドリフト◯kgはすごい？
                </Link>
                にあります。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                女性は比率が違う
              </h2>
              <p>
                同じ物差しを女性に当てると、ずれます。女性の目安から同じ計算をすると
                <span className="font-bold">
                  ベンチ1 : スクワット{womenSquatVsBench.toFixed(1)} : デッドリフト{womenDeadVsBench.toFixed(1)}
                </span>
                。男性より<span className="font-bold">下半身側の比率が高い</span>のが特徴です。
              </p>
              <p className="mt-2">
                上半身の筋量の差が大きく、下半身はそれほど差がないためです。<span className="font-bold">女性がベンチだけ伸びないのは普通のこと</span>で、弱点ではありません。女性の体重別の目安は
                <Link href="/weight-checker" className="text-orange-600 font-bold underline">
                  適正重量チェッカー
                </Link>
                で男女別に出せます。
              </p>
            </section>

            <section className="bg-orange-50 border border-orange-100 rounded-xl p-4">
              <p className="font-bold text-orange-600 mb-2">
                筆者（筋トレ歴15年・フィジーク大会入賞）のバランスは崩れている
              </p>
              <p className="text-xs leading-relaxed">
                私の自己ベストはベンチ{AUTHOR.bench}kg・スクワット{AUTHOR.squat}kg・デッドリフト
                {AUTHOR.deadlift}kg。ベンチを1とすると
                <span className="font-bold">
                  1 : {(AUTHOR.squat / AUTHOR.bench).toFixed(2)} : {(AUTHOR.deadlift / AUTHOR.bench).toFixed(2)}
                </span>
                です。目安の1 : {squatVsBench.toFixed(1)} : {deadVsBench.toFixed(1)} と比べると、
                <span className="font-bold">下半身が2種目とも足りていません。</span>釣り合う数字はスクワット
                {Math.round(AUTHOR.bench * squatVsBench)}kg・デッドリフト
                {Math.round(AUTHOR.bench * deadVsBench)}kgなので、かなりの差です。
                <br />
                <br />
                体重{AUTHOR.bodyWeight}kg前後での判定でも、ベンチは
                {levelForRatio(benchRows, AUTHOR.bench / AUTHOR.bodyWeight) ?? "—"}、スクワットは
                {levelForRatio(squatRows, AUTHOR.squat / AUTHOR.bodyWeight) ?? "—"}、デッドリフトは
                {levelForRatio(deadliftRows, AUTHOR.deadlift / AUTHOR.bodyWeight) ?? "—"}です。
                <span className="font-bold">これは失敗ではなく、フィジーク志向で上半身を優先した結果</span>です。合計を伸ばしたいなら下半身に手を付けるべきだと分かっていて、それをしていない。
                <span className="font-bold">目的が「合計」でないなら、比率が崩れていても問題ない</span>——ただし崩れていることは自分で把握しておくべきです。それを知らずに「全体的に強い」と思い込むのが一番まずいです。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                よくある質問
              </h2>
              <h3 className="font-bold text-gray-800 mt-5 mb-2">
                比率は必ず揃えるべきですか？
              </h3>
              <p>
                競技（パワーリフティング）なら合計で戦うので揃えるほど有利です。見た目が目的なら不要です。<span className="font-bold">揃えるかどうかは目的次第、ただし現状把握は全員やるべき</span>という順番になります。
              </p>
              <h3 className="font-bold text-gray-800 mt-5 mb-2">
                体重が変わったら比率も変わりますか？
              </h3>
              <p>
                種目間の比率は<span className="font-bold">体重に関係なく使えます</span>（ベンチ1に対する倍率なので約分されます）。変わるのは体重比のほう（何レベルか）です。
              </p>
              <h3 className="font-bold text-gray-800 mt-5 mb-2">
                スモウデッドやハーフスクワットで比べてもいいですか？
              </h3>
              <p>
                だめです。<span className="font-bold">フォームで数字が変わる種目どうしを比べると、比率の意味がなくなります。</span>パラレルのバックスクワット、床から引くコンベンショナルのデッドリフトで揃えてください。
              </p>
              <h3 className="font-bold text-gray-800 mt-5 mb-2">
                凹んでいる種目は、週何回やればいいですか？
              </h3>
              <p>
                頻度を増やすより<span className="font-bold">その種目をメニューの先頭に置く</span>ほうが効きます。疲れる前にやる、というだけで扱える重量が変わります（
                <Link href="/column/training-order" className="text-orange-600 font-bold underline">
                  筋トレの順番
                </Link>
                ）。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                まとめ
              </h2>
              <ul className="space-y-2">
                <li>
                  ▸ 目安は<span className="font-bold">ベンチ1 : スクワット{squatVsBench.toFixed(1)} : デッドリフト{deadVsBench.toFixed(1)}</span>。レベルが変わっても比率はほぼ同じ
                </li>
                <li>
                  ▸ 3種目の<span className="font-bold">レベルを別々に判定して並べる</span>と、いちばん低いものが弱点
                </li>
                <li>
                  ▸ 合計を伸ばすなら<span className="font-bold">凹んでいる種目から</span>。得意種目より動く量が大きい
                </li>
                <li>
                  ▸ 凹む原因は才能ではなく<span className="font-bold">環境と準備</span>（補助・セーフティ・ベルトとグリップ）
                </li>
                <li>
                  ▸ 女性は<span className="font-bold">1 : {womenSquatVsBench.toFixed(1)} : {womenDeadVsBench.toFixed(1)}</span>。ベンチだけ伸びないのは普通
                </li>
              </ul>
              <p className="mt-2">
                体重ごとの目標重量は
                <Link href="/column/strength-standards" className="text-orange-600 font-bold underline">
                  BIG3の体重別早見表
                </Link>
                、合計からの逆引きは
                <Link href="/column/big3-total" className="text-orange-600 font-bold underline">
                  BIG3合計◯kgはどのレベル？
                </Link>
                にあります。
              </p>
            </section>
          </div>
        </div>

        <ShareButtons
          url="https://sakutore.jp/column/big3-balance"
          title="BIG3のバランス診断｜ベンチ1に対しスクワット1.5・デッド2.0"
        />

        <AuthorBox />

        <div className="text-center space-y-3">
          <Link
            href="/questions"
            className="inline-block w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-2xl transition-all duration-200 hover:shadow-lg"
          >
            今日の分のメニューを作る
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
