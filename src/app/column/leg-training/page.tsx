import Link from "next/link";
import ShareButtons from "@/components/ShareButtons";
import { pageMetadata } from "@/lib/metadata";
import AuthorBox from "@/components/AuthorBox";
import DiagramFigure from "@/components/diagrams/DiagramFigure";
import DeltoidPartsDiagram from "@/components/diagrams/DeltoidPartsDiagram";
import { dayOrderFor } from "@/lib/dayOrder";
import {
  DUMBBELL_LEVELS,
  dumbbellWeight,
  formatDumbbell,
} from "@/lib/dumbbellStandards";
import {
  MEN_WEIGHTS,
  WOMEN_WEIGHTS,
  SET_SCHEMES,
  LEVEL_EXPERIENCE,
  squatRows,
  schemeWeight,
  targetWeight,
  type Gender,
} from "@/lib/strengthStandards";
import { findExerciseDetail } from "@/lib/exercises";
import { recoveryFor } from "@/lib/recoveryStandards";

export const metadata = pageMetadata({
  title: "脚トレのやり方｜脚の日のメニューと順番、スクワットとゴブレットスクワットの重さの目安 - サクトレ",
  description:
    "脚の日は、スクワットのような重い種目から始めて、太もも前・太もも裏とお尻・ふくらはぎの順に小さい種目へ進みます。ジムでの脚の日のメニューと順番、スクワットで組む重さの出し方、自宅でできるゴブレットスクワットの体重別の重さの目安をまとめました。",
  path: "/column/leg-training",
});

// 脚の3つの部分。図は DeltoidPartsDiagram（部分ごとの列の図）を使い回す。
// 種目名は図の箱に収まる長さのものだけにし、ルーマニアンデッドリフトは本文で扱う。
const PARTS = [
  { name: "太もも前", role: "立ち上がる力", exercises: ["スクワット", "レッグプレス", "ランジ"] },
  { name: "太もも裏・お尻", role: "股関節を伸ばす", exercises: ["レッグカール", "ヒップスラスト"], main: true },
  { name: "ふくらはぎ", role: "つま先で押す", exercises: ["カーフレイズ"] },
];

const GENDERS: { id: Gender; label: string; weights: number[] }[] = [
  { id: "male", label: "男性", weights: MEN_WEIGHTS },
  { id: "female", label: "女性", weights: WOMEN_WEIGHTS },
];

// スクワットで組む重さの例に使う体格とレベル。
const SAMPLE_BW = 70;

export default function LegTrainingPage() {
  const legDay = dayOrderFor("脚の日");
  const [fiveByFive, threeByEight, threeByTen] = [
    SET_SCHEMES.find((s) => s.label === "5×5")!,
    SET_SCHEMES.find((s) => s.label === "3×8")!,
    SET_SCHEMES.find((s) => s.label === "3×10")!,
  ];
  const squatMid = squatRows.find((r) => r.level === "中級者")!;
  const sample1RM = targetWeight(SAMPLE_BW, squatMid.ratio);
  const large = recoveryFor("large");
  const rdl = findExerciseDetail("ルーマニアンデッドリフト");
  const bulgarian = findExerciseDetail("ブルガリアンスクワット");

  return (
    <main className="min-h-screen flex flex-col items-center px-4 py-8">
      <div className="max-w-md md:max-w-2xl w-full animate-slideUp">
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <p className="text-xs text-orange-500 font-bold mb-2">コラム</p>
          <h1 className="text-xl md:text-2xl font-bold text-gray-800 mb-6">
            脚トレのやり方｜脚の日のメニューと順番、スクワットとゴブレットスクワットの重さの目安
          </h1>

          <div className="space-y-6 text-sm md:text-base text-gray-700 leading-relaxed">
            <section>
              <p>
                脚は体の中でいちばん大きな筋肉が集まっている部位です。そのぶん1回の疲れも大きく、何をどの順番でやるかで、その日にできる量が変わります。
              </p>
              <p className="mt-2">
                この記事では、脚の3つの部分と鍛える種目、ジムでの脚の日の順番、スクワットで組む重さの出し方、自宅でできる種目と重さの目安の順に説明します。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base md:text-lg mb-3">
                脚の3つの部分と鍛える種目
              </h2>
              <DiagramFigure
                title="スクワットだけでは太もも裏とお尻が足りなくなりやすい"
                label={`脚の3つの部分。${PARTS.map((p) => `${p.name}は${p.role}、主な種目は${p.exercises.join("と")}`).join("。")}。`}
                caption="スクワットは太もも前とお尻の両方に効きます。太もも裏は、スクワットだけでは使い切れないので別に足します。"
              >
                <DeltoidPartsDiagram parts={PARTS} />
              </DiagramFigure>
              <p className="mt-3">
                見落とされやすいのが<span className="font-bold">太もも裏</span>です。スクワットやレッグプレスは太もも前が中心になりやすいので、太もも裏はルーマニアンデッドリフトやレッグカールで別に鍛えます。お尻を中心に鍛えたいときの選び方は
                <Link href="/column/hip-training" className="text-orange-600 font-bold underline">
                  お尻を鍛える筋トレ
                </Link>
                にあります。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base md:text-lg mb-3">
                ジムでの脚の日のメニューと順番
              </h2>
              <p className="font-bold text-gray-800">{legDay.order}</p>
              <p className="mt-2">
                <Link href="/column/training-order" className="text-orange-600 font-bold underline">
                  筋トレの順番
                </Link>
                と同じ、「重い種目から、小さい種目へ」の並びです。全部やる必要はありません。時間がない日は、スクワットと太もも裏の種目を1つずつで十分です。
              </p>
              <ul className="mt-3 space-y-2">
                <li>
                  ▸ <span className="font-bold">スクワット</span>：{fiveByFive.label}か{threeByEight.label}で重さを伸ばす
                </li>
                <li>
                  ▸ <span className="font-bold">レッグプレス・ルーマニアンデッドリフト</span>：{threeByEight.label}〜{threeByTen.label}
                </li>
                <li>
                  ▸ <span className="font-bold">レッグエクステンション・レッグカール・カーフレイズ</span>：{threeByTen.label}で、重さより効かせることを優先
                </li>
              </ul>
              {rdl && (
                <p className="mt-3">
                  ルーマニアンデッドリフトは太もも裏に効く代わりに、腰を丸めると腰を痛めやすい種目です。{rdl.formTips}。
                </p>
              )}
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base md:text-lg mb-3">
                スクワットで組む重さの出し方
              </h2>
              <p>
                組む重さは、1RM（1回だけ挙げられる重さ）から出します。たとえば体重{SAMPLE_BW}kgの男性で中級者の目安（体重×{squatMid.ratio}）なら、1RMは{sample1RM}kgです。ここから{fiveByFive.label}なら約{schemeWeight(sample1RM, fiveByFive.reps)}kg、{threeByEight.label}なら約{schemeWeight(sample1RM, threeByEight.reps)}kgが目安になります。
              </p>
              <p className="mt-2">
                自分の体重とレベルでの1RMの目安は
                <Link href="/column/squat-weight-level" className="text-orange-600 font-bold underline">
                  スクワット◯kgはすごい？
                </Link>
                で、セットの重さの決め方は
                <Link href="/column/sets-and-reps" className="text-orange-600 font-bold underline">
                  5×5・3×10の重量の決め方
                </Link>
                で確かめられます。
              </p>
              <p className="mt-2">
                <span className="font-bold">重いスクワットは、セーフティバーを正しい高さに合わせてから</span>行ってください。高さの決め方は
                <Link href="/column/power-rack" className="text-orange-600 font-bold underline">
                  パワーラックの使い方
                </Link>
                にあります。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base md:text-lg mb-3">
                自宅でやるなら：ゴブレットスクワットとブルガリアンスクワット
              </h2>
              <p>
                バーベルがなくても、ダンベル1個を胸の前で両手に持つ<span className="font-bold">ゴブレットスクワット</span>で始められます。重さの目安は、1個を両手で持って10回できる重さです。
              </p>
              {GENDERS.map((g) => (
                <div key={g.id} className="mt-3">
                  <p className="font-bold text-gray-800 mb-2">{g.label}（ダンベル1個・10回できる重さ）</p>
                  <div className="overflow-x-auto -mx-2 px-2">
                    <table className="w-full text-xs md:text-sm border-collapse">
                      <thead>
                        <tr className="bg-orange-50">
                          <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
                            体重
                          </th>
                          {DUMBBELL_LEVELS.map((lv) => (
                            <th
                              key={lv}
                              className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap"
                            >
                              {lv}
                              <span className="block text-[10px] font-normal text-gray-400">
                                筋トレ歴{LEVEL_EXPERIENCE[lv]}
                              </span>
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {g.weights.map((bw) => (
                          <tr key={bw}>
                            <td className="border border-gray-200 px-2 py-2 font-bold text-gray-800 whitespace-nowrap">
                              {bw}kg
                            </td>
                            {DUMBBELL_LEVELS.map((lv) => (
                              <td
                                key={lv}
                                className="border border-gray-200 px-2 py-2 text-gray-700 whitespace-nowrap"
                              >
                                {formatDumbbell(dumbbellWeight(bw, "goblet", g.id, lv))}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}
              <p className="mt-2 text-xs text-gray-500">
                ※ 数字は
                <Link href="/column/dumbbell-weight" className="text-orange-600 font-bold underline">
                  ダンベルは何kgを買えばいい？
                </Link>
                の表と同じ基準です。公的な平均の統計はなく、サクトレの基準として体重比で出しています。
              </p>
              <p className="mt-3">
                ゴブレットスクワットは、脚が強くなるとすぐに物足りなくなります。そうなったら、片脚ずつ行う<span className="font-bold">ブルガリアンスクワット</span>に移ると、同じダンベルでも重く感じられます。
                {bulgarian && <>注意点は「{bulgarian.formTips}」です。</>}
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base md:text-lg mb-3">
                週に何回やるか
              </h2>
              <p>
                脚は「{large.part}」のグループに入り、回復の目安は{large.hours}、次に同じ部位を鍛えるまでの間隔は{large.interval}です。曜日の組み方は
                <Link href="/column/split-routine" className="text-orange-600 font-bold underline">
                  分割法の早見表
                </Link>
                にあります。脚トレの翌日に強い筋肉痛が出たときの考え方は
                <Link href="/column/muscle-soreness" className="text-orange-600 font-bold underline">
                  筋肉痛でも筋トレしていい？
                </Link>
                を見てください。
              </p>
            </section>

            <section className="bg-orange-50 border border-orange-100 rounded-xl p-4">
              <p className="font-bold text-orange-600 mb-2">
                筆者（筋トレ歴15年・フィジーク大会入賞）の場合
              </p>
              <p className="text-xs leading-relaxed">
                正直に書くと、私は脚トレを後回しにしてきた側です。フィジーク志向で上半身を優先してきたので、スクワットはベンチプレスと同じ120kgで止まっています。
                <Link href="/column/power-rack" className="text-orange-600 font-bold underline">
                  パワーラックの使い方
                </Link>
                にも書いたとおり、スクワットはセーフティバーの高さを自分で合わせておかないと限界まで追い込めない種目で、私のスクワットが止まっている理由も、正直に言えばそこだと思っています。
                <br />
                <br />
                だからこそ、これから脚トレを始める人には、<span className="font-bold">最初にセーフティバーの高さを決めてしまう</span>ことをおすすめします。準備が済んでいれば、脚の日は思ったより気楽に始められます。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base md:text-lg mb-3">
                よくある質問
              </h2>
              <h3 className="font-bold text-gray-800 mt-5 mb-2">
                脚トレをすると脚が太くなりませんか？
              </h3>
              <p>
                筋トレを始めてすぐに見た目が大きく太くなることは、まずありません。始めた直後に脚が張るのは、多くの場合むくみです。理由は
                <Link href="/column/women-muscle-slim" className="text-orange-600 font-bold underline">
                  女性が筋トレしても太くならない理由
                </Link>
                にまとめています。
              </p>
              <h3 className="font-bold text-gray-800 mt-5 mb-2">
                走っていれば、脚トレはしなくていいですか？
              </h3>
              <p>
                走ることは心肺や持久力には効きますが、重さを扱う筋トレとは脚にかかる負荷の種類が違います。脚の筋肉を大きく、強くしたいなら、脚トレは別に入れてください。
              </p>
              <h3 className="font-bold text-gray-800 mt-5 mb-2">
                スクワットで膝が痛くなります。
              </h3>
              <p>
                痛みが出る動きはその日は中止してください。重さを落としても痛む、痛みが続くといったときは、整形外科を受診してください。しゃがむと膝が内側に入るなら、筋力より足首などの硬さが原因のことも多いです。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base md:text-lg mb-3">
                まとめ
              </h2>
              <ul className="space-y-2">
                <li>
                  ▸ 脚は<span className="font-bold">太もも前・太もも裏とお尻・ふくらはぎ</span>の3つ。太もも裏は別に鍛える
                </li>
                <li>
                  ▸ 脚の日は<span className="font-bold">スクワットから始めて、小さい種目へ</span>
                </li>
                <li>
                  ▸ スクワットの重さは1RMから出す。重いセットはセーフティバーを合わせてから
                </li>
                <li>
                  ▸ 自宅ならゴブレットスクワット。物足りなくなったらブルガリアンスクワットへ
                </li>
                <li>
                  ▸ 脚は大きい筋肉なので、次の脚の日まで{large.interval}あける
                </li>
              </ul>
            </section>
          </div>
        </div>

        <ShareButtons
          url="https://sakutore.jp/column/leg-training"
          title="脚トレのやり方｜脚の日のメニューと順番、スクワットとゴブレットスクワットの重さの目安"
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
