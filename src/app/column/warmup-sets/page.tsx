import Link from "next/link";
import ShareButtons from "@/components/ShareButtons";
import { pageMetadata } from "@/lib/metadata";
import AuthorBox from "@/components/AuthorBox";
import DiagramFigure from "@/components/diagrams/DiagramFigure";
import WarmupRamp from "@/components/diagrams/WarmupRamp";
import { BAR_KG, SET_SCHEMES, WARMUP_STEPS, warmupSets } from "@/lib/strengthStandards";

export const metadata = pageMetadata({
  title: "アップセットの重量と回数｜ベンチプレス・スクワット・デッドリフトのウォームアップは何kgから？早見表つき - サクトレ",
  description:
    "アップセットは「バーだけ10回 → 本番の半分で5回 → 本番の4分の3で3回 → 本番」の3段で上げます。本番の重さ別（40〜140kg）の早見表、デッドリフトでの例外、2種目目以降のアップ、アップで疲れないコツまでまとめました。",
  path: "/column/warmup-sets",
});

// 図の例。/column/training-order の例（本番80kg）と同じ重さにしている。
const SAMPLE_WORK_KG = 80;
// 図の本番の回数。5×5 の回数（/column/sets-and-reps と同じ）。
const SAMPLE_WORK_REPS = SET_SCHEMES.find((s) => s.label === "5×5")!.reps;

// 早見表に並べる本番の重さ（kg）。
const WORK_WEIGHTS = [40, 50, 60, 80, 100, 120, 140];

const half = WARMUP_STEPS.find((s) => s.pct === 0.5)!;
const threeQuarter = WARMUP_STEPS.find((s) => s.pct === 0.75)!;
const barStep = WARMUP_STEPS.find((s) => s.pct === 0)!;

// 早見表の列見出し。WARMUP_STEPS の段の順。
const COL_LABELS = WARMUP_STEPS.map((s) => s.label);

// 早見表の列。WARMUP_STEPS の段ごとに、その本番の重さで何kgになるか（飛ばす段は null）。
const rowFor = (work: number) => {
  const sets = warmupSets(work);
  return WARMUP_STEPS.map((_, i) => sets.find((s) => s.step === i) ?? null);
};

export default function WarmupSetsPage() {
  const sample = warmupSets(SAMPLE_WORK_KG);
  const ramp = [
    ...sample.map((s) => ({ kg: s.kg, reps: s.reps, label: s.bar ? "バーだけ" : "アップ" })),
    { kg: SAMPLE_WORK_KG, reps: SAMPLE_WORK_REPS, label: "本番", main: true },
  ];

  return (
    <main className="min-h-screen flex flex-col items-center px-4 py-8">
      <div className="max-w-md md:max-w-2xl w-full animate-slideUp">
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <p className="text-xs text-orange-500 font-bold mb-2">コラム</p>
          <h1 className="text-xl md:text-2xl font-bold text-gray-800 mb-6">
            アップセットの重量と回数｜ベンチプレス・スクワット・デッドリフトのウォームアップは何kgから？早見表つき
          </h1>

          <div className="space-y-6 text-sm md:text-base text-gray-700 leading-relaxed">
            <section>
              <p>
                ベンチプレスやスクワットで、いきなり本番のセット（その日に決めた重さで行うセット）の重さを持つと、力が出にくいうえに、けがもしやすくなります。本番の前に軽い重さから少しずつ上げていくセットを、<span className="font-bold">アップセット</span>（ウォームアップのセット。略してアップ）と呼びます。
              </p>
              <p className="mt-2">
                「何kgから始めて、何回やればいいのか」で迷う人は多いと思います。結論から書くと、<span className="font-bold">バーだけ（{BAR_KG}kg）から始めて、本番の半分、4分の3と3段で上げます</span>。この記事では、サクトレの基準として、本番の重さから計算できる決め方と早見表を紹介します。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base md:text-lg mb-3">
                決め方：本番の重さから3段で上げる
              </h2>
              <ol className="space-y-1">
                <li>
                  1. <span className="font-bold">バーだけ（{BAR_KG}kg）で{barStep.reps}回</span>：フォームを確かめる（{BAR_KG}kgはジムの長いバーの場合。軽いバーを使うときは、そのバーの重さで同じように）
                </li>
                <li>
                  2. <span className="font-bold">本番の半分の重さで{half.reps}回</span>
                </li>
                <li>
                  3. <span className="font-bold">本番の4分の3の重さで{threeQuarter.reps}回</span>
                </li>
                <li>4. 本番のセットへ</li>
              </ol>
              <p className="mt-3">
                ポイントは、<span className="font-bold">重くなるほど回数を減らす</span>ことです。アップセットの目的は、体を温めて動きを確かめることで、筋肉を疲れさせることではありません。本番の前に疲れてしまうと、本番で決めた回数をこなせなくなります。
              </p>
              <DiagramFigure
                title={`本番${SAMPLE_WORK_KG}kgなら、バーだけ → ${sample
                  .filter((s) => !s.bar)
                  .map((s) => `${s.kg}kg`)
                  .join(" → ")} → 本番`}
                label={`本番${SAMPLE_WORK_KG}kgの日のアップセット。${ramp.map((s) => `${s.label}（${s.kg}kg）を${s.reps}回`).join("、")}。`}
                caption={`※ 本番の回数（${ramp[ramp.length - 1].reps}回）は例です。本番の重さと回数は、自分で決めたものに置き換えてください。`}
              >
                <WarmupRamp sets={ramp} />
              </DiagramFigure>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base md:text-lg mb-3">
                本番の重さ別・アップセットの早見表
              </h2>
              <p>
                表の重さは、端数を切り捨てて、プレートで組める重さにしています。本番が軽い日は、一部の段を飛ばすので、アップセットの数が少なくなります。飛ばすのは、前のセット以下の重さ（バーの{BAR_KG}kgより軽いなど）になる段と、本番の重さに届いてしまう段です。
              </p>
              <div className="overflow-x-auto -mx-2 px-2 mt-3">
                <table className="w-full text-xs md:text-sm border-collapse">
                  <thead>
                    <tr className="bg-orange-50">
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
                        本番の重さ
                      </th>
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
                        {COL_LABELS[0]}
                      </th>
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
                        {COL_LABELS[1]}
                      </th>
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
                        {COL_LABELS[2]}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {WORK_WEIGHTS.map((w) => (
                      <tr key={w}>
                        <td className="border border-gray-200 px-2 py-2 font-bold text-gray-800 whitespace-nowrap">{w}kg</td>
                        {rowFor(w).map((s, i) => (
                          <td key={i} className="border border-gray-200 px-2 py-2 text-gray-700 whitespace-nowrap">
                            {s ? `${s.kg}kg×${s.reps}回` : "—"}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-2 text-xs text-gray-500">
                ※ 「—」は飛ばす段です。表にない重さは、本番の重さの半分と4分の3を計算して、組める重さに切り捨ててください。飛ばす段の決め方は上と同じです。本番が重い日に、4分の3から本番までの差が大きいと感じたら、そのあいだに回数をさらに減らした段を1つ足してもかまいません。
              </p>
              <p className="mt-3">
                本番の重さがまだ決まっていない場合は、「◯kgを◯回」の記録から
                <Link href="/rm-calculator" className="text-orange-600 font-bold underline">
                  RM計算機
                </Link>
                で1RM（1回だけ挙げられる最大の重さ）を出し、「
                <Link href="/column/sets-and-reps" className="text-orange-600 font-bold underline">
                  5×5・3×10の重量はどう決める？
                </Link>
                」で紹介している方法で決めてください。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base md:text-lg mb-3">
                種目ごとの注意
              </h2>
              <h3 className="font-bold text-gray-800 mt-4 mb-2">ベンチプレス・スクワット</h3>
              <p>
                表のとおりで大丈夫です。どちらも、<span className="font-bold">バーだけの1セット目で、セーフティバーの高さを確かめておく</span>と、本番で慌てません（
                <Link href="/column/power-rack" className="text-orange-600 font-bold underline">
                  パワーラックの使い方
                </Link>
                ）。
              </p>
              <h3 className="font-bold text-gray-800 mt-5 mb-2">デッドリフト</h3>
              <p>
                デッドリフトは、直径の大きいプレート（20kg）を付けていないと、床からのバーの高さが低くなり、本番と違う姿勢で引くことになります。そこでバーだけの段は、床から引かずに、立った姿勢から<span className="font-bold">すねの高さまで下ろして戻す動きに置き換えて、{barStep.reps}回</span>行います。背中を丸めずに、股関節から上体を前に倒す練習です。半分の段でも小さいプレートしか付けられないときは、床に置いたプレートの上にバーを載せて本番と同じ高さにそろえるか、大きいプレートを付けた重さから始めてください。
              </p>
              <h3 className="font-bold text-gray-800 mt-5 mb-2">2種目目以降</h3>
              <p>
                同じ部位の2種目目からは、すでに体が温まっています。表のように3段を踏む必要はなく、軽い重さで1〜2セット動きを確かめれば足りることが多いです。まだ使っていない部位の種目（全身の日にベンチプレスの後でスクワットをするときなど）に移るときは、その部位の1種目目と考えて、表のとおりに上げてください。並べ方は「
                <Link href="/column/training-order" className="text-orange-600 font-bold underline">
                  筋トレの順番
                </Link>
                」で紹介しています。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base md:text-lg mb-3">
                アップセットで疲れないためのコツ
              </h2>
              <ul className="space-y-2">
                <li>
                  ▸ <span className="font-bold">限界の回数までやらない</span>：アップセットは決めた回数で止めます。余裕があっても回数を増やしません
                </li>
                <li>
                  ▸ <span className="font-bold">アップセットのあいだの休みは短くてよい</span>：プレートを付け替えたら次へ。ただし、最後のアップセットと本番のあいだは、息が整うまで少し空けます
                </li>
                <li>
                  ▸ <span className="font-bold">ベルトを使う人も、巻くのは本番だけ</span>：アップセットではベルトを外して、自分でお腹に力を入れる練習にします（
                  <Link href="/column/lifting-belt" className="text-orange-600 font-bold underline">
                    トレーニングベルトはいつから必要？
                  </Link>
                  ）
                </li>
                <li>
                  ▸ <span className="font-bold">アップの前に関節を動かす</span>：バーを持つ前に、腕や脚を大きく回すなど、動かしながら行うストレッチをしておきます。座ってじっくり伸ばすストレッチは、トレーニングの後に回します（
                  <Link href="/column/stretch" className="text-orange-600 font-bold underline">
                    筋トレ前後のストレッチ
                  </Link>
                  ）
                </li>
              </ul>
            </section>

            <section className="bg-orange-50 border border-orange-100 rounded-xl p-4">
              <p className="font-bold text-orange-600 mb-2">
                筆者（筋トレ歴15年・フィジーク大会入賞）の場合
              </p>
              <p className="text-xs leading-relaxed">
                私は40代で週5回トレーニングしていますが、年齢を重ねるほど、ウォームアップを削ったときのリスクは大きくなると感じています。関節の違和感を放っておくと、数週間から数ヶ月トレーニングできなくなりかねません。
                <br />
                <br />
                だから、時間がない日は、種目の数を減らしてでもウォームアップは残す、という優先順位にしています。アップセットは数分で終わります。削って得られる時間より、けがで失う時間のほうがずっと長くなります。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base md:text-lg mb-3">
                よくある質問
              </h2>
              <h3 className="font-bold text-gray-800 mt-5 mb-2">
                アップセットも、セット数に数えますか？
              </h3>
              <p>
                数えません。5×5の5セットや3×10の3セットに数えるのは、決めた重さで行う本番のセットだけです（
                <Link href="/column/sets-and-reps" className="text-orange-600 font-bold underline">
                  5×5・3×10の重量はどう決める？
                </Link>
                ）。
              </p>
              <h3 className="font-bold text-gray-800 mt-5 mb-2">
                アップセットだけで疲れてしまいます。
              </h3>
              <p>
                回数を減らしてください。表の回数は上限の目安で、少なくしても動きの確認はできます。それでも疲れるなら、本番の重さが今の自分には重すぎる可能性があります。
              </p>
              <h3 className="font-bold text-gray-800 mt-5 mb-2">
                マシンでもアップは必要ですか？
              </h3>
              <p>
                その日の最初の種目や、まだ使っていない部位の種目なら必要です。ピンで選ぶ重さを、本番の半分くらい、4分の3くらいと順に上げ、回数は表と同じように減らしていきます。
              </p>
              <h3 className="font-bold text-gray-800 mt-5 mb-2">
                ダンベルの種目でもアップは必要ですか？
              </h3>
              <p>
                その日の最初の種目や、まだ使っていない部位の種目なら必要です。考え方は同じで、本番より軽いダンベルで、回数を少なめにしてから本番の重さに移ります。重さの目安は「
                <Link href="/column/dumbbell-weight" className="text-orange-600 font-bold underline">
                  ダンベルは何kgを買えばいい？
                </Link>
                」で紹介しています。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base md:text-lg mb-3">
                まとめ
              </h2>
              <ul className="space-y-2">
                <li>
                  ▸ アップセットは<span className="font-bold">バーだけ{barStep.reps}回 → 本番の半分で{half.reps}回 → 本番の4分の3で{threeQuarter.reps}回</span>
                </li>
                <li>▸ 重くなるほど回数を減らす。アップで疲れたら本末転倒</li>
                <li>▸ 本番が軽い日は、段を飛ばしてよい</li>
                <li>▸ デッドリフトのバーだけの段は、すねまで下ろす練習に置き換える</li>
                <li>▸ 同じ部位の2種目目は、軽い重さで1〜2セット確かめれば足りる</li>
                <li>▸ 時間がない日も、削るのは種目の数。アップは残す</li>
              </ul>
            </section>
          </div>
        </div>

        <ShareButtons
          url="https://sakutore.jp/column/warmup-sets"
          title="アップセットの重量と回数｜ベンチプレス・スクワット・デッドリフトのウォームアップは何kgから？早見表つき"
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
