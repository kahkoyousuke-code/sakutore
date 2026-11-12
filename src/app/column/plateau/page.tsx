import Link from "next/link";
import ShareButtons from "@/components/ShareButtons";
import { pageMetadata } from "@/lib/metadata";
import AuthorBox from "@/components/AuthorBox";
import DiagramFigure from "@/components/diagrams/DiagramFigure";
import SessionFlowDiagram from "@/components/diagrams/SessionFlowDiagram";
import {
  LEVEL_EXPERIENCE,
  LEVEL_STEP_PERIOD,
  SET_RESERVE_REPS,
  benchRows,
  estimate1RM,
  levelsFor,
  targetWeight,
  type Level,
} from "@/lib/strengthStandards";

export const metadata = pageMetadata({
  title: "筋トレの停滞期の抜け方｜ベンチプレス・BIG3が伸びないときに確かめる6つの順番 - サクトレ",
  description:
    "ベンチプレスやスクワットの重量が伸びなくなったら、まず本当に止まっているのかを回数の記録で確かめます。上のレベルほど伸びがゆっくりになるのは普通です。そのうえで、睡眠・食事・頻度、フォーム、限界まで追い込める環境と、メニューの外側から順に見直し、重さや種目に手を入れるのは最後にする手順をまとめました。",
  path: "/column/plateau",
});

// 停滞したときに確かめる順番。右端は「何で確かめるか」。図と本文の両方がここを読む。
const CHECK_STEPS = [
  { step: "1", name: "本当に止まっているか", time: "記録" },
  { step: "2", name: "睡眠・食事・頻度", time: "生活" },
  { step: "3", name: "フォームと止まる場所", time: "動画" },
  { step: "4", name: "限界まで追い込める環境", time: "補助・ラック" },
  { step: "5", name: "重さを下げてやり直す", time: "記録" },
  { step: "6", name: "補助種目を足す", time: "動画" },
];

// 次のレベルまでの期間を見せるレベル（エリートは「次」がないので除く）。男性の段階を使う。
const PERIOD_LEVELS: Level[] = levelsFor("male").filter((lv) => LEVEL_STEP_PERIOD[lv] !== null);

// 「重さは同じでも回数が増えれば伸びている」の例。
const EXAMPLE = { weight: 60, reps: 8 };
// 「中級者から上級者までの差」を実感してもらう体格（ベンチプレス）。
const SAMPLE_BW = 70;

const ratioAt = (level: Level) => benchRows.find((r) => r.level === level)?.ratio ?? 0;

export default function PlateauPage() {
  const levels = levelsFor("male");
  const nextOf = (lv: Level) => levels[levels.indexOf(lv) + 1];
  const benchGap =
    targetWeight(SAMPLE_BW, ratioAt("上級者")) - targetWeight(SAMPLE_BW, ratioAt("中級者"));

  return (
    <main className="min-h-screen flex flex-col items-center px-4 py-8">
      <div className="max-w-md md:max-w-2xl w-full animate-slideUp">
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <p className="text-xs text-orange-500 font-bold mb-2">コラム</p>
          <h1 className="text-xl md:text-2xl font-bold text-gray-800 mb-6">
            筋トレの停滞期の抜け方｜ベンチプレス・BIG3が伸びないときに確かめる6つの順番
          </h1>

          <div className="space-y-6 text-sm md:text-base text-gray-700 leading-relaxed">
            <section>
              <p>
                ベンチプレスやスクワットの重量が、しばらく伸びなくなる。筋トレを続けていれば、誰にでも来る時期です。ただし、<span className="font-bold">メニューや種目を変えるのは、いちばん最後</span>にしてください。
              </p>
              <p className="mt-2">
                先に確かめることがあります。まず、本当に止まっているのか。止まっているなら、<span className="font-bold">メニューの外側から順に</span>原因をつぶします。睡眠・食事・頻度、フォーム、追い込める環境。重さや種目に手を入れるのはその後です。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base md:text-lg mb-3">
                確かめる順番
              </h2>
              <DiagramFigure
                title="上から順に。種目を変えるのは最後"
                label={`停滞したときに確かめる順番。${CHECK_STEPS.map((s) => `${s.step}. ${s.name}`).join("、")}。`}
                caption="右端は、何で確かめるかです。4の環境は、筆者が停滞を抜けた決め手でもあります。"
              >
                <SessionFlowDiagram steps={CHECK_STEPS} highlightStep="4" />
              </DiagramFigure>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base md:text-lg mb-3">
                1. 本当に止まっているか
              </h2>
              <p>
                始めたばかりの頃は、毎週のように重量が上がります。その感覚のまま続けると、伸びがゆっくりになっただけで「止まった」と感じがちです。ですが、<span className="font-bold">上のレベルほど伸びがゆっくりになるのは普通</span>です。サクトレの目安では、次のレベルまでにかかる期間はこう変わります。
              </p>
              <div className="overflow-x-auto -mx-2 px-2 mt-3">
                <table className="w-full text-xs md:text-sm border-collapse">
                  <thead>
                    <tr className="bg-orange-50">
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
                        今のレベル
                      </th>
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
                        筋トレ歴の目安
                      </th>
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700">
                        次のレベルまで
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {PERIOD_LEVELS.map((lv) => (
                      <tr key={lv}>
                        <td className="border border-gray-200 px-2 py-2 font-bold text-gray-800 whitespace-nowrap">
                          {lv}
                        </td>
                        <td className="border border-gray-200 px-2 py-2 text-gray-700 whitespace-nowrap">
                          {LEVEL_EXPERIENCE[lv]}
                        </td>
                        <td className="border border-gray-200 px-2 py-2 text-gray-700">
                          {nextOf(lv)}まで{LEVEL_STEP_PERIOD[lv]}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-2 text-xs text-gray-500">
                ※ 男性の目安です。女性の場合は
                <Link href="/column/women-big3" className="text-orange-600 font-bold underline">
                  女性のBIG3平均は何kg？
                </Link>
                を見てください。
              </p>
              <p className="mt-3">
                たとえば体重{SAMPLE_BW}kgの男性のベンチプレスなら、中級者から上級者までの差は{benchGap}kgです。これを{LEVEL_STEP_PERIOD["中級者"]}かけて進むので、1ヶ月単位では、ほとんど動いていないように見えても不思議ではありません。自分のレベルは
                <Link href="/weight-checker" className="text-orange-600 font-bold underline">
                  適正重量チェッカー
                </Link>
                で確かめられます。
              </p>
              <p className="mt-2">
                判断は、気分ではなく記録で行います。見るのは重さだけでなく<span className="font-bold">回数</span>です。
              </p>
              <ul className="mt-2 space-y-2">
                <li>
                  ▸ <span className="font-bold">重さは同じでも、回数が1回でも増えている</span> → 止まっていません。たとえば{EXAMPLE.weight}kg×{EXAMPLE.reps}回が{EXAMPLE.reps + 1}回になれば、
                  <Link href="/rm-calculator" className="text-orange-600 font-bold underline">
                    RM計算機
                  </Link>
                  で換算した1RM（1回だけ挙げられる重さ）は{estimate1RM(EXAMPLE.weight, EXAMPLE.reps)}kg→{estimate1RM(EXAMPLE.weight, EXAMPLE.reps + 1)}kgに上がっています
                </li>
                <li>
                  ▸ <span className="font-bold">同じ重さで、決めた回数に届かない日が数週間続き、回数も増えていない</span> → 止まっています。2へ進みます
                </li>
                <li>
                  ▸ <span className="font-bold">同じ重さで、前より回数が落ちてきた</span> → 止まったのではなく、疲れがたまっているサインかもしれません（
                  <Link href="/column/rest" className="text-orange-600 font-bold underline">
                    筋肉を育てる休息の重要性
                  </Link>
                  ）。5の「重さを下げてやり直す」を先に試してください
                </li>
              </ul>
              <p className="mt-2">
                重さを上げるタイミングは
                <Link href="/column/sets-and-reps" className="text-orange-600 font-bold underline">
                  5×5・3×10の重量の決め方
                </Link>
                にあります。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base md:text-lg mb-3">
                2. 睡眠・食事・頻度
              </h2>
              <p>
                お金がかからず、見落としやすいのがここです。睡眠が削れている時期や、体重が減っている時期は、重量も伸びにくくなります。<span className="font-bold">特に減量中は、伸びにくいのが普通です。</span>伸ばすより、重さを保てていれば十分と考えてください。
              </p>
              <ul className="mt-2 space-y-2">
                <li>
                  ▸ 睡眠時間が短くなっていないか →
                  <Link href="/column/sleep" className="text-orange-600 font-bold underline">
                    筋トレと睡眠の関係
                  </Link>
                </li>
                <li>
                  ▸ タンパク質と食事の量が足りているか、体重が減っていないか →
                  <Link href="/column/protein" className="text-orange-600 font-bold underline">
                    必要なタンパク質の量
                  </Link>
                </li>
                <li>
                  ▸ その種目をやる頻度が合っているか。週1回しかやっていないなら、
                  <Link href="/column/bench-press-average" className="text-orange-600 font-bold underline">
                    ベンチプレスの平均
                  </Link>
                  で挙げた優先順位のとおり、週2回に増やしてみてください。一方で、伸びないからといって筋トレする日をどんどん増やすのは逆効果になりやすいです（
                  <Link href="/column/frequency" className="text-orange-600 font-bold underline">
                    週に何回筋トレすればいい？
                  </Link>
                  ）
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base md:text-lg mb-3">
                3. フォームと止まる場所
              </h2>
              <p>
                <span className="font-bold">ベンチプレスとスクワットは、撮る前にセーフティバーを正しい高さに合わせるか、補助者についてもらってください。</span>
              </p>
              <p className="mt-2">
                重いセットを横から動画で撮り、1回目と最後の回を比べてください。深さやバーの通り道が回ごとに違うなら、筋力より先に、フォームの問題を疑ってください。止まる場所を知るために限界まで粘る必要はありません。フォームが安定しているなら、バーがどこで遅くなるか・止まるかが次の手がかりになります（6で使います）。動作中に関節が痛むなら、その種目は中止し、痛みが続くなら整形外科を受診してください。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base md:text-lg mb-3">
                4. 限界まで追い込める環境
              </h2>
              <p>
                ここも見落とされやすいところです。<span className="font-bold">挙げきれずに潰れたときの逃げ場がないと、人は無意識に限界の手前で止めてしまいがちです</span>。ベンチプレスは補助者についてもらうか、ラックの中でセーフティバーを使います。スクワットはセーフティバーを正しい高さに合わせます。逃げ場があれば、最後のセットのぎりぎりの1回を、怖がらずに挙げにいけます。
              </p>
              <p className="mt-2">
                ここでいう「追い込む」は、毎セット潰れるまでやることではありません。1セット目は余裕を{SET_RESERVE_REPS}回残す重さで組む、という決め方は
                <Link href="/column/sets-and-reps" className="text-orange-600 font-bold underline">
                  5×5・3×10の重量の決め方
                </Link>
                で紹介したとおりで、変わりません。変えるのは、最後のセットで怖くて止めていた1回だけです。<span className="font-bold">セーフティバーも補助者もない台で、限界近くのセットはしないでください。</span>
              </p>
              <p className="mt-2">
                セーフティバーの高さの決め方は
                <Link href="/column/power-rack" className="text-orange-600 font-bold underline">
                  パワーラックの使い方
                </Link>
                にあります。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base md:text-lg mb-3">
                5. 重さを下げてやり直す
              </h2>
              <p>
                1〜4を確かめても重量が動かないなら、疲れがたまっていることがあります。<span className="font-bold">重さを少し下げて、全セットで決めた回数ができる重さからやり直します</span>。その重さで全セットできたら、また少しずつ上げていきます。同じ重さで潰れ続けるより、少し戻して積み直すほうが、フォームも崩れにくくなります。
              </p>
              <p className="mt-2">
                止まる前に予防として入れる軽い週が「デロード」、止まってからやり直すのがこの5です。デロードについては
                <Link href="/column/motivation" className="text-orange-600 font-bold underline">
                  筋トレのモチベーション維持法
                </Link>
                でも触れています。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base md:text-lg mb-3">
                6. 補助種目を足す
              </h2>
              <p>
                ここで初めて、種目に手を入れます。新しい種目を次々に試すのではなく、<span className="font-bold">3で見つけた止まる場所に合う補助種目を1〜2種目</span>足します。選び方は
                <Link href="/column/big3-accessory" className="text-orange-600 font-bold underline">
                  BIG3の補助種目の選び方
                </Link>
                にまとめています。BIG3のうちどれが遅れているかは
                <Link href="/column/big3-balance" className="text-orange-600 font-bold underline">
                  BIG3のバランス診断
                </Link>
                で確かめられます。
              </p>
              <p className="mt-2">
                筋トレを始めて間もなく、1の表でまだ初心者以下なら、補助種目を足さなくても1〜5で十分なことがほとんどです。
              </p>
            </section>

            <section className="bg-orange-50 border border-orange-100 rounded-xl p-4">
              <p className="font-bold text-orange-600 mb-2">
                筆者（筋トレ歴15年・フィジーク大会入賞）の場合
              </p>
              <p className="text-xs leading-relaxed">
                <Link href="/column/10years" className="text-orange-600 font-bold underline">
                  10年筋トレを続けてわかったこと
                </Link>
                にも書いたとおり、私にもベンチプレスが長く止まっていた時期があります。停滞するたびに種目や分割を組み替えていましたが、それだけで伸びたことはほとんどありませんでした。
                <br />
                <br />
                停滞を抜けた決め手は、ジムを変えたことでした。補助についてもらえるようになり、フォームも見てもらえるようになりました。この記事で種目を変えるのを最後にして、4の環境を強調しているのは、その経験からです。指導を受ける費用感は
                <Link href="/column/personal-gym-cost" className="text-orange-600 font-bold underline">
                  パーソナルジムの費用相場
                </Link>
                に書いています。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base md:text-lg mb-3">
                よくある質問
              </h2>
              <h3 className="font-bold text-gray-800 mt-5 mb-2">
                メニューを変えると、刺激が新しくなって伸びませんか？
              </h3>
              <p>
                変えた直後は、数字が伸びることがあります。ただ、それは筋力が伸びたのではなく、新しい動きに慣れただけのこともあります。<span className="font-bold">1〜5を確かめないまま種目を変えると、原因がわからないまま次の停滞が来ます</span>。飽きて続かないなら入れ替えてかまいません。重量を伸ばすのが目的なら、種目を変えるのは最後にしてください。
              </p>
              <h3 className="font-bold text-gray-800 mt-5 mb-2">
                サプリを足せば停滞を抜けられますか？
              </h3>
              <p>
                睡眠と食事が整っていない時期に足しても、体感できる差は出にくいです。足すとしても、2の土台が整ってからにしてください。
              </p>
              <h3 className="font-bold text-gray-800 mt-5 mb-2">
                見た目は変わっているのに重量が伸びません。
              </h3>
              <p>
                減量中なら普通です。体重が減ると、扱える重さも伸びにくくなります。重量を保てているなら、筋肉を残せているサインのひとつです。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base md:text-lg mb-3">
                まとめ
              </h2>
              <ul className="space-y-2">
                <li>
                  ▸ まず<span className="font-bold">本当に止まっているか</span>を回数の記録で確かめる。上のレベルほど伸びがゆっくりなのは普通。回数が落ちてきたなら疲れのサイン
                </li>
                <li>
                  ▸ 次に<span className="font-bold">睡眠・食事・頻度</span>。減量中は伸びにくいのが普通
                </li>
                <li>
                  ▸ セーフティバーか補助者を用意してからフォームと止まる場所を動画で見る。<span className="font-bold">限界まで追い込める環境</span>を作る
                </li>
                <li>
                  ▸ それでも伸びなければ、重さを少し下げてやり直す
                </li>
                <li>
                  ▸ 種目を変えるのは最後。止まる場所に合う補助種目を1〜2種目
                </li>
              </ul>
            </section>
          </div>
        </div>

        <ShareButtons
          url="https://sakutore.jp/column/plateau"
          title="筋トレの停滞期の抜け方｜ベンチプレス・BIG3が伸びないときに確かめる6つの順番"
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
