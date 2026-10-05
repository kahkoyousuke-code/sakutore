import Link from "next/link";
import ShareButtons from "@/components/ShareButtons";
import GearPick from "@/components/GearPick";
import { pageMetadata } from "@/lib/metadata";
import AuthorBox from "@/components/AuthorBox";
import {
  LEVEL_STEP_PERIOD,
  MEN_WEIGHTS,
  deadliftRows,
  estimate1RM,
  formatRatio,
  levelForRatio,
  targetWeight,
  type Level,
} from "@/lib/strengthStandards";

// description は seo.config.mjs が文字列リテラルとして読むので、ここだけは
// 判定結果を文章で書いている。deadliftRows を変えたら合わせて見直すこと。
export const metadata = pageMetadata({
  title: "デッドリフト◯kgはすごい？重量と回数で分かるレベル判定表 - サクトレ",
  description:
    "デッドリフト100kgがすごいかどうかは体重で決まります。体重50kgなら中級者、70kgならまだ「未経験」の欄。60〜250kgのレベル判定表、「90kgを5回なら1RM約105kg」のように回数込みの記録から判定できる換算表、体重別の初心者・中級者の目標重量を載せています。",
  path: "/column/deadlift-weight-level",
});

// 検索で打ち込まれている重量帯。判定表の行になる。
const WEIGHTS = [60, 70, 80, 90, 100, 120, 140, 160, 180, 200, 250];

// 冒頭で答える重量。
const FOCUS = 100;

// 回数込みの表。Epley式は10回を超えると誤差が大きくなるので10回で止める。
const REP_WEIGHTS = [60, 70, 80, 90, 100, 120, 140];
const REPS = [1, 3, 5, 8, 10];

// いちばん検索されている「90kgを5回」を例として固定する。
const EXAMPLE = { weight: 90, reps: 5 };

// 筆者の実数字（他記事と揃えてある）。160kgは体重80kg台の頃の記録で、
// 正確な体重は残っていないので、ここでは85kgとして計算し本文でもそう断る。
const AUTHOR = { deadlift: 160, bodyWeight: 85, bodyWeightLow: 80 };

const levelClass = (level: Level | null) => {
  if (level === null) return "text-gray-400";
  if (level === "未経験" || level === "初心者") return "text-gray-600";
  return "font-bold text-orange-600";
};

const ratioOf = (level: Level) =>
  deadliftRows.find((r) => r.level === level)?.ratio ?? 0;

export default function DeadliftWeightLevelPage() {
  const exampleMax = estimate1RM(EXAMPLE.weight, EXAMPLE.reps);
  const beginner = ratioOf("初心者");
  const middle = ratioOf("中級者");
  const authorRatio = AUTHOR.deadlift / AUTHOR.bodyWeight;
  const authorToMiddle = targetWeight(AUTHOR.bodyWeight, middle) - AUTHOR.deadlift;

  return (
    <main className="min-h-screen flex flex-col items-center px-4 py-8">
      <div className="max-w-md w-full animate-slideUp">
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <p className="text-xs text-orange-500 font-bold mb-2">コラム</p>
          <h1 className="text-xl font-bold text-gray-800 mb-6">
            デッドリフト◯kgはすごい？重量と回数で分かるレベル判定表
          </h1>

          <div className="space-y-6 text-sm text-gray-700 leading-relaxed">
            <section>
              <p>
                「デッドリフト{FOCUS}kg」がすごいかどうかは、<span className="font-bold">体重を聞かないと答えられません。</span>体重50kgの人なら
                <span className="font-bold">{levelForRatio(deadliftRows, FOCUS / 50) ?? "—"}</span>、体重70kgの人ならまだ
                <span className="font-bold">「{levelForRatio(deadliftRows, FOCUS / 70) ?? "—"}」</span>の欄（5段階のいちばん下）です。同じ{FOCUS}kgでも、挙げる人の体重によって意味が変わります。
              </p>
              <p className="mt-2">
                この記事では、<span className="font-bold">手元の数字から自分のレベルを調べる</span>ことに絞ります。挙げた重量から判定する方法と、「{EXAMPLE.weight}kgを{EXAMPLE.reps}回」のような回数込みの記録から判定する方法の2つを用意しました。
              </p>
              <p className="mt-2 text-xs text-gray-500">
                ※ 条件をそろえます。<span className="font-bold">床から引くコンベンショナル（足幅は腰幅）・1回だけ挙がる重量（1RM）</span>での判定です。スモウやトラップバーは引く距離や重心の位置が変わり、数字がずれます（多くは上ぶれします）。この表には持ち込まないでください（
                <Link href="/column/deadlift-average" className="text-orange-600 font-bold underline">
                  どのフォームの数字なら比べられるか
                </Link>
                ）。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                挙げた重量で分かるレベル判定表
              </h2>
              <p>
                <span className="font-bold">行が挙げた重量、列が体重</span>です。自分の交点を探してください。
              </p>
              <div className="overflow-x-auto -mx-2 px-2 mt-3">
                <table className="w-full text-xs border-collapse">
                  <thead>
                    <tr className="bg-orange-50">
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
                        挙げた重量
                      </th>
                      {MEN_WEIGHTS.map((bw) => (
                        <th
                          key={bw}
                          className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap"
                        >
                          体重{bw}kg
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {WEIGHTS.map((weight) => (
                      <tr key={weight}>
                        <td className="border border-gray-200 px-2 py-2 font-bold text-gray-800 whitespace-nowrap">
                          {weight}kg
                        </td>
                        {MEN_WEIGHTS.map((bw) => {
                          const level = levelForRatio(deadliftRows, weight / bw);
                          return (
                            <td
                              key={bw}
                              className={`border border-gray-200 px-2 py-2 whitespace-nowrap ${levelClass(level)}`}
                            >
                              {level ?? "—"}
                            </td>
                          );
                        })}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-3 text-xs text-gray-500">
                ※ 「未経験」は経験がないという意味ではなく、5段階のいちばん下（体重×{formatRatio(deadliftRows[0].ratio)}〜{formatRatio(beginner)}）の欄です。「—」はその未経験の目安（体重×{formatRatio(deadliftRows[0].ratio)}）にまだ届いていない位置です。
              </p>
              <p className="mt-3">
                判定は「体重の何倍を引けたか」で決めています。境目は<span className="font-bold">初心者が体重×{formatRatio(beginner)}、中級者が体重×{formatRatio(middle)}</span>です。デッドリフトはBIG3の中でいちばん重量を扱える種目なので、ベンチプレスやスクワットより境目の倍率が高くなります。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                「{EXAMPLE.weight}kgを{EXAMPLE.reps}回」のような記録から判定する
              </h2>
              <p>
                1回だけの限界に挑戦している人は多くありません。ふだんの記録は「◯kgを◯回」のはずです。その記録を、まず<span className="font-bold">1回だけ挙がる重量（1RM）に換算します</span>。換算表がこちらです。
              </p>
              <div className="overflow-x-auto -mx-2 px-2 mt-3">
                <table className="w-full text-xs border-collapse">
                  <thead>
                    <tr className="bg-orange-50">
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
                        重量＼回数
                      </th>
                      {REPS.map((reps) => (
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
                    {REP_WEIGHTS.map((weight) => (
                      <tr key={weight}>
                        <td className="border border-gray-200 px-2 py-2 font-bold text-gray-800 whitespace-nowrap">
                          {weight}kg
                        </td>
                        {REPS.map((reps) => (
                          <td
                            key={reps}
                            className={`border border-gray-200 px-2 py-2 whitespace-nowrap ${
                              weight === EXAMPLE.weight && reps === EXAMPLE.reps
                                ? "font-bold text-orange-600 bg-orange-50"
                                : "text-gray-700"
                            }`}
                          >
                            {estimate1RM(weight, reps)}kg
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-3 text-xs text-gray-500">
                ※ Epley式（1RM＝重量×(1＋回数÷30)）で推定しています。
                <Link href="/rm-calculator" className="text-orange-600 font-bold underline">
                  1RM換算ツール
                </Link>
                と同じ式・同じ丸め方です。10回を超える記録は誤差が大きくなるので載せていません。デッドリフトは回数が増えるほど、背中や脚より先に握力が尽きたり、フォームが崩れたりするので、<span className="font-bold">5回以下の記録から換算するほうが実態に近くなります</span>。
              </p>
              <p className="mt-3">
                換算した1RMは、すぐ下の「初心者・中級者の目標は何kgか」の表で<span className="font-bold">自分の体重の行と比べてください</span>。最初の判定表の行と行の間の重量になっても、この表ならそのまま比べられます。
              </p>
              <p className="mt-2">
                たとえば<span className="font-bold">
                  {EXAMPLE.weight}kgを{EXAMPLE.reps}回なら、1RMは約{exampleMax}kg
                </span>
                です。これを体重別に判定すると、こうなります。
              </p>
              <ul className="mt-2 space-y-1">
                {[50, 60, 70, 80].map((bw) => {
                  const level = levelForRatio(deadliftRows, exampleMax / bw);
                  return (
                    <li key={bw}>
                      ▸ 体重{bw}kg → 体重比{(exampleMax / bw).toFixed(2)}で
                      <span className="font-bold">{level ?? "未経験の目安に届く前"}</span>
                    </li>
                  );
                })}
              </ul>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                初心者・中級者の目標は何kgか
              </h2>
              <p>
                デッドリフトの初心者ラインは<span className="font-bold">体重×{formatRatio(beginner)}</span>、中級者ラインは<span className="font-bold">体重×{formatRatio(middle)}</span>です。体重60kgなら{targetWeight(60, beginner)}kgと{targetWeight(60, middle)}kg、体重70kgなら{targetWeight(70, beginner)}kgと{targetWeight(70, middle)}kg。ほかの体重はこちらです。
              </p>
              <div className="overflow-x-auto -mx-2 px-2 mt-3">
                <table className="w-full text-xs border-collapse">
                  <thead>
                    <tr className="bg-orange-50">
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
                        体重
                      </th>
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
                        初心者（×{formatRatio(beginner)}）
                      </th>
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
                        中級者（×{formatRatio(middle)}）
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {MEN_WEIGHTS.map((bw) => (
                      <tr key={bw}>
                        <td className="border border-gray-200 px-2 py-2 font-bold text-gray-800 whitespace-nowrap">
                          {bw}kg
                        </td>
                        <td className="border border-gray-200 px-2 py-2 text-gray-700 whitespace-nowrap">
                          {targetWeight(bw, beginner)}kg
                        </td>
                        <td className="border border-gray-200 px-2 py-2 font-bold text-orange-600 whitespace-nowrap">
                          {targetWeight(bw, middle)}kg
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-3">
                トレーニングを始めてから{LEVEL_STEP_PERIOD["未経験"]}で初心者の欄に届く人は珍しくありません。ただし初心者から中級者までは<span className="font-bold">{LEVEL_STEP_PERIOD["初心者"]}</span>が目安で、最初ほど速くは進みません。
              </p>
              <p className="mt-2">
                始めたばかりの人は、表の数字を追う前に<span className="font-bold">背中が丸まらない重量</span>で動きを覚えてください。軽いプレートは直径が小さいため、バーが低い位置からのスタートになり、そのぶん不利になるという落とし穴もあります（
                <Link href="/column/deadlift-average" className="text-orange-600 font-bold underline">
                  デッドリフトの平均は何kg？
                </Link>
                で詳しく書いています）。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                ストラップ・ベルトを使った記録で判定していい？
              </h2>
              <p>
                <span className="font-bold">判定に使って構いません。</span>ストラップやパワーグリップは、引く距離もフォームも変えずに、先に限界が来る握力を補うだけです。スモウやトラップバーと違って、<span className="font-bold">背中と脚の力をそのまま測れます</span>。ただし「使う／使わない」はどちらかに固定して記録してください。混ぜると、伸びたのか道具が変わっただけなのか分からなくなります。
              </p>
              <p className="mt-2">
                ベルトは、体重×{formatRatio(beginner)}を超えて初心者の欄に入ったあたりで検討すれば十分です。
              </p>
              <GearPick
                placement="deadlift-weight-level-grip-belt"
                lead={`握力で先に止まるならパワーグリップ、体重×${formatRatio(beginner)}を超えたらベルト、の順でそろえるのが目安です。`}
                productIds={["alloutPowerGrip", "alloutNylonBelt"]}
              />
            </section>

            <section className="bg-orange-50 border border-orange-100 rounded-xl p-4">
              <p className="font-bold text-orange-600 mb-2">
                筆者（筋トレ歴15年・フィジーク大会入賞）の{AUTHOR.deadlift}kgは何レベルか
              </p>
              <p className="text-xs leading-relaxed">
                私のデッドリフトの自己ベストは<span className="font-bold">{AUTHOR.deadlift}kg</span>。体重80kg台の頃の記録で正確な体重は残っていないため、ここでは体重{AUTHOR.bodyWeight}kgとして計算します。体重比は約{authorRatio.toFixed(2)}で、判定は
                <span className="font-bold">{levelForRatio(deadliftRows, authorRatio) ?? "—"}の欄の上のほう</span>
                。中級者（×{formatRatio(middle)}＝{targetWeight(AUTHOR.bodyWeight, middle)}kg）まで
                <span className="font-bold">あと{authorToMiddle}kg</span>です。
                <br />
                <br />
                ちなみに同じ{AUTHOR.deadlift}kgでも、体重{AUTHOR.bodyWeightLow}kgで計算すると
                <span className="font-bold">
                  {levelForRatio(deadliftRows, AUTHOR.deadlift / AUTHOR.bodyWeightLow) ?? "—"}
                </span>
                の境目にちょうど乗ります。<span className="font-bold">体重が5kg違うだけで判定が1段変わる位置</span>にいる、ということです。自分のレベルを判定するときも、挙げた重量は記録したときの体重で割ってください。今の体重で割ると、減量や増量のぶんだけ判定がずれます。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                よくある質問
              </h2>
              <h3 className="font-bold text-gray-800 mt-5 mb-2">
                デッドリフトは体重の何倍が目安ですか？
              </h3>
              <p>
                初心者で<span className="font-bold">体重×{formatRatio(beginner)}</span>、中級者で<span className="font-bold">体重×{formatRatio(middle)}</span>です。上級者は体重×{formatRatio(ratioOf("上級者"))}です。BIG3の中ではいちばん大きな倍率になります。3種目の比率の関係は
                <Link href="/column/big3-balance" className="text-orange-600 font-bold underline">
                  BIG3のバランス診断
                </Link>
                にまとめました。
              </p>
              <h3 className="font-bold text-gray-800 mt-5 mb-2">
                スモウやトラップバーの記録で判定していいですか？
              </h3>
              <p>
                だめです。<span className="font-bold">引く距離や重心の位置が変わるので、この表に当てはめると自分の位置を見誤ります。</span>トラップバーはたいていの人が重く引けますし、スモウも体格によっては大きく上ぶれします。床から引くコンベンショナルの数字を当てはめてください。
              </p>
              <h3 className="font-bold text-gray-800 mt-5 mb-2">
                ラックプル（膝の高さから引く）の重量で判定していいですか？
              </h3>
              <p>
                別の種目として扱ってください。床から膝までのいちばんきつい範囲を飛ばすぶん、床から引くより大幅に重い数字が出ます。
              </p>
              <h3 className="font-bold text-gray-800 mt-5 mb-2">
                翌日に腰が痛いのですが、続けていいですか？
              </h3>
              <p>
                <span className="font-bold">腰の一点が刺すように痛む・しびれる</span>場合は、いったん止めてください。<span className="font-bold">しびれが脚に広がるときや、痛みが数日たっても治まらないときは、整形外科で診てもらってください。</span>筋肉痛との見分け方は
                <Link href="/column/muscle-soreness" className="text-orange-600 font-bold underline">
                  筋肉痛でも筋トレしていい？
                </Link>
                にあります。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                まとめ
              </h2>
              <ul className="space-y-2">
                <li>
                  ▸ デッドリフトの評価は<span className="font-bold">体重の何倍か</span>。同じ{FOCUS}kgでも体重で意味が変わる
                </li>
                <li>
                  ▸ 境目は<span className="font-bold">初心者が体重×{formatRatio(beginner)}、中級者が×{formatRatio(middle)}</span>
                </li>
                <li>
                  ▸ 「◯kgを◯回」の記録は<span className="font-bold">1RMに換算してから</span>判定する（{EXAMPLE.weight}kgを{EXAMPLE.reps}回なら約{exampleMax}kg）
                </li>
                <li>
                  ▸ <span className="font-bold">スモウ・トラップバー・ラックプルの数字は持ち込まない</span>。ストラップとベルトは使ってよい
                </li>
                <li>
                  ▸ 判定には<span className="font-bold">記録したときの体重</span>を使う
                </li>
              </ul>
              <p className="mt-2">
                BIG3全体での位置は
                <Link href="/column/strength-standards" className="text-orange-600 font-bold underline">
                  BIG3の体重別早見表
                </Link>
                、3種目の合計から調べるなら
                <Link href="/column/big3-total" className="text-orange-600 font-bold underline">
                  BIG3合計◯kgはどのレベル？
                </Link>
                へ。体重を入れてBIG3の目標重量を一度に出すなら
                <Link href="/weight-checker" className="text-orange-600 font-bold underline">
                  適正重量診断
                </Link>
                が早いです。
              </p>
            </section>
          </div>
        </div>

        <ShareButtons
          url="https://sakutore.jp/column/deadlift-weight-level"
          title="デッドリフト◯kgはすごい？重量と回数で分かるレベル判定表"
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
