import Link from "next/link";
import ShareButtons from "@/components/ShareButtons";
import { pageMetadata } from "@/lib/metadata";
import AuthorBox from "@/components/AuthorBox";
import DiagramFigure from "@/components/diagrams/DiagramFigure";
import SessionFlowDiagram from "@/components/diagrams/SessionFlowDiagram";
import { SET_SCHEMES } from "@/lib/strengthStandards";
import {
  SET_MINUTES,
  SESSION_FLOW,
  SESSION_FLOW_TOTAL,
  TIME_PLANS,
  blockMinutes,
  exerciseMinutes,
  flowTime,
  planMinutes,
  type PlanBlock,
} from "@/lib/sessionPlan";

export const metadata = pageMetadata({
  title: "筋トレ1回は何分やればいい？30分・45分・60分の組み方と、時間がない日に削る順番 - サクトレ",
  description:
    "筋トレ1回の時間は「セット数×（1セットの時間＋休憩）」で決まります。5×5・3×8・3×10で1種目に何分かかるかの表と、30分・45分・60分の組み方、時間がない日に削る順番（ストレッチとアップは残す）をまとめました。",
  path: "/column/workout-time",
});

const range = (m: { min: number; max: number }) => (m.min === m.max ? `${m.min}分` : `${m.min}〜${m.max}分`);

const blockText = (b: PlanBlock) => ("fixed" in b ? b.name : `${b.name}（${b.scheme}を${b.exercises}種目）`);

export default function WorkoutTimePage() {
  const steps = SESSION_FLOW.map((r) => ({ ...r, time: flowTime(r.minutes) }));
  const fiveByFive = exerciseMinutes("5×5");

  return (
    <main className="min-h-screen flex flex-col items-center px-4 py-8">
      <div className="max-w-md md:max-w-2xl w-full animate-slideUp">
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <p className="text-xs text-orange-500 font-bold mb-2">コラム</p>
          <h1 className="text-xl md:text-2xl font-bold text-gray-800 mb-6">
            筋トレ1回は何分やればいい？30分・45分・60分の組み方と、時間がない日に削る順番
          </h1>

          <div className="space-y-6 text-sm md:text-base text-gray-700 leading-relaxed">
            <section>
              <p>
                筋トレは1回何分やればいいのか。答えは「何を何セットやるか」で決まります。逆に言えば、使える時間が決まっていれば、そこに収まるメニューを組めます。
              </p>
              <p className="mt-2">
                この記事では、1種目にかかる時間の出し方、サクトレで一通りやる{SESSION_FLOW_TOTAL}分の配分、30分・45分しかない日の組み方、時間がない日に削る順番を説明します。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base md:text-lg mb-3">
                時間の出し方：セット数×（1セットの時間＋休憩）
              </h2>
              <p>
                1種目にかかる時間は、<span className="font-bold">セット数×（1セットの時間＋セット間の休憩）</span>で出せます。1セットは、重さの付け替えと動作を含めて約{SET_MINUTES}分で数えます。休憩は、セットの型ごとの目安（
                <Link href="/column/sets-and-reps" className="text-orange-600 font-bold underline">
                  5×5・3×10の重量はどう決める？
                </Link>
                と同じ値）を使います。
              </p>
              <div className="overflow-x-auto -mx-2 px-2 mt-3">
                <table className="w-full text-xs md:text-sm border-collapse">
                  <thead>
                    <tr className="bg-orange-50">
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">型</th>
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">休憩</th>
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">1種目の時間</th>
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700">向いている目的</th>
                    </tr>
                  </thead>
                  <tbody>
                    {SET_SCHEMES.map((s) => (
                      <tr key={s.label}>
                        <td className="border border-gray-200 px-2 py-2 font-bold text-gray-800 whitespace-nowrap">{s.label}</td>
                        <td className="border border-gray-200 px-2 py-2 text-gray-700 whitespace-nowrap">{s.rest}</td>
                        <td className="border border-gray-200 px-2 py-2 text-gray-700 whitespace-nowrap">
                          {range(exerciseMinutes(s.label))}
                        </td>
                        <td className="border border-gray-200 px-2 py-2 text-gray-600">{s.purpose}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-3">
                見てのとおり、<span className="font-bold">時間を食うのは5×5</span>です。休憩が長いぶん、1種目で{range(fiveByFive)}かかります。3×8や3×10なら、同じ時間で3種目ほどこなせます。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base md:text-lg mb-3">
                一通りやるなら{SESSION_FLOW_TOTAL}分
              </h2>
              <p>
                ストレッチからアップセット、メイン種目、補助種目、腹筋まで一通りやると、{SESSION_FLOW_TOTAL}分ほどです。配分は
                <Link href="/column/training-order" className="text-orange-600 font-bold underline">
                  筋トレの順番
                </Link>
                と同じです。
              </p>
              <DiagramFigure
                title={`${SESSION_FLOW_TOTAL}分の配分。いちばん長いのはメインと補助の種目`}
                label={`1回のトレーニングの流れ。${steps.map((r) => `${r.step}. ${r.name}（${r.time}）`).join("、")}。`}
                caption="右端は時間の目安です。点線の有酸素は任意で、やるなら筋トレの後です。"
              >
                <SessionFlowDiagram steps={steps} highlightStep="3" />
              </DiagramFigure>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base md:text-lg mb-3">
                30分・45分・60分の組み方
              </h2>
              <p>
                使える時間ごとの組み方です。時間は、休憩を短い側でとった場合と長い側でとった場合の幅で出しています。
              </p>
              {TIME_PLANS.map((plan) => (
                <div key={plan.label} className="mt-4">
                  <p className="font-bold text-gray-800 mb-2">
                    {plan.label}の日（合計 {range(planMinutes(plan.blocks))}）
                  </p>
                  <div className="overflow-x-auto -mx-2 px-2">
                    <table className="w-full text-xs md:text-sm border-collapse">
                      <tbody>
                        {plan.blocks.map((b, i) => (
                          <tr key={`${b.name}-${i}`}>
                            <td className="border border-gray-200 px-2 py-2 text-gray-800">{blockText(b)}</td>
                            <td className="border border-gray-200 px-2 py-2 text-gray-700 whitespace-nowrap w-24">
                              {range(blockMinutes(b))}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}
              <p className="mt-3 text-xs text-gray-500">
                ※ 合計が使える時間を超えそうなら、休憩を短い側に寄せてください。それでも収まらない日は、次の「削る順番」で減らします。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base md:text-lg mb-3">
                時間がない日に削る順番
              </h2>
              <ol className="space-y-2">
                <li>
                  1. <span className="font-bold">有酸素</span>：筋トレの日に時間が足りないなら、まずここから。有酸素は別の日に回せます
                </li>
                <li>
                  2. <span className="font-bold">補助種目の数と腹筋</span>：補助種目を1種目に減らし、腹筋は別の日に回します
                </li>
                <li>
                  3. <span className="font-bold">メイン種目の型</span>：それでも収まらない日は、メインを5×5から3×8に替えます。休憩が短くなるぶん、時間が大きく浮きます
                </li>
              </ol>
              <p className="mt-3">
                メインの5×5をいちばん最後まで残すのは、時間がない日でも<span className="font-bold">メイン種目の重さを伸ばし続けるため</span>です。全部の種目のセット数を少しずつ削るより、メインを守ってほかを減らすほうが、重さの伸びを保ちやすくなります（
                <Link href="/column/sets-and-reps" className="text-orange-600 font-bold underline">
                  5×5・3×10の重量はどう決める？
                </Link>
                のよくある質問と同じ考え方です）。
              </p>
              <p className="mt-2">
                反対に、<span className="font-bold">動的ストレッチとアップセットは削りません</span>。合わせても10分ほどで、けがの予防に直結する部分だからです。アップセットの重さと回数は
                <Link href="/column/warmup-sets" className="text-orange-600 font-bold underline">
                  アップセットの重量と回数
                </Link>
                にあります。
              </p>
            </section>

            <section className="bg-orange-50 border border-orange-100 rounded-xl p-4">
              <p className="font-bold text-orange-600 mb-2">
                筆者（筋トレ歴15年・フィジーク大会入賞）の場合
              </p>
              <p className="text-xs leading-relaxed">
                私は40代で週5回トレーニングしています。年齢を重ねるほど、ウォームアップを削ったときのリスクは大きくなると感じていて、関節の違和感を放っておくと、数週間から数ヶ月トレーニングできなくなりかねません。
                <br />
                <br />
                だから、時間がない日は種目の数を減らしてでもウォームアップは残す、という優先順位にしています。この記事の「削る順番」でストレッチとアップセットを最後まで残しているのも、同じ理由です。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base md:text-lg mb-3">
                よくある質問
              </h2>
              <h3 className="font-bold text-gray-800 mt-5 mb-2">
                長くやるほど効果がありますか？
              </h3>
              <p>
                時間そのものより、メイン種目の重さや回数が伸びているかどうかが大事です。1回を長くするより、週の回数で量を確保するほうが続けやすくなります。週に何回やるかは
                <Link href="/column/frequency" className="text-orange-600 font-bold underline">
                  週に何回筋トレすればいい？
                </Link>
                にあります。
              </p>
              <h3 className="font-bold text-gray-800 mt-5 mb-2">
                予定より時間がかかってしまいます。
              </h3>
              <p>
                多くの場合、原因は休憩です。セット間にスマホを見ていると、休憩が目安より長くなりがちです。タイマーを使って、型ごとの休憩の長いほうを超えないようにしてください。
              </p>
              <h3 className="font-bold text-gray-800 mt-5 mb-2">
                自宅でやるときも同じですか？
              </h3>
              <p>
                考え方は同じです。自宅の自重やダンベルの種目は3×10で組むことが多いので、1種目あたりの時間は表の3×10の欄が目安になります。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base md:text-lg mb-3">
                まとめ
              </h2>
              <ul className="space-y-2">
                <li>
                  ▸ 時間は<span className="font-bold">セット数×（1セットの時間＋休憩）</span>で出す。時間を食うのは5×5
                </li>
                <li>▸ 一通りやるなら{SESSION_FLOW_TOTAL}分。30分・45分の日は、上の組み方で収める</li>
                <li>
                  ▸ 削る順番は<span className="font-bold">有酸素 → 補助種目の数と腹筋 → メインの型</span>
                </li>
                <li>▸ 動的ストレッチとアップセットは削らない</li>
              </ul>
              <p className="mt-3">
                サクトレのメニュー作成でも、最初の質問で1回に使える時間を選べます。
              </p>
            </section>
          </div>
        </div>

        <ShareButtons
          url="https://sakutore.jp/column/workout-time"
          title="筋トレ1回は何分やればいい？30分・45分・60分の組み方と、時間がない日に削る順番"
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
