import Link from "next/link";
import ShareButtons from "@/components/ShareButtons";
import { pageMetadata } from "@/lib/metadata";
import AuthorBox from "@/components/AuthorBox";
import DiagramFigure from "@/components/diagrams/DiagramFigure";
import DeltoidPartsDiagram from "@/components/diagrams/DeltoidPartsDiagram";
import { dayOrderFor } from "@/lib/dayOrder";
import { DUMBBELL_LEVELS, dumbbellWeight, formatDumbbell } from "@/lib/dumbbellStandards";
import {
  MEN_WEIGHTS,
  WOMEN_WEIGHTS,
  SET_SCHEMES,
  SET_RESERVE_REPS,
  LEVEL_EXPERIENCE,
  benchRows,
  schemeWeight,
  targetWeight,
  toPlate,
  type Gender,
} from "@/lib/strengthStandards";
import { findExerciseDetail } from "@/lib/exercises";
import { recoveryFor } from "@/lib/recoveryStandards";

export const metadata = pageMetadata({
  title: "ジムでの胸トレメニューと順番｜ベンチプレス以外の種目と、ダンベルプレスで組む重さ - サクトレ",
  description:
    "胸の日は、ベンチプレスから始めて、インクラインダンベルプレス、ダンベルフライ、ケーブルクロスオーバーの順に軽い種目へ進みます。胸の上部・全体・下部を鍛える種目、ベンチプレスで組む重さの出し方、ダンベルプレスの体重別の重さの目安、マシンを使うときのポイントをまとめました。",
  path: "/column/chest-training",
});

// 胸の3つの部分。図は DeltoidPartsDiagram（部分ごとの列の図）を使い回す。
// 図の箱に収まるよう、インクラインベンチプレス・インクラインダンベルプレスは「インクライン系」とまとめる。
const PARTS = [
  { name: "胸の上部", role: "斜め上へ押す", exercises: ["インクライン系"] },
  {
    name: "胸全体",
    role: "前へ押す・寄せる",
    exercises: ["ベンチプレス", "ダンベルプレス", "チェストプレス", "フライ系"],
    main: true,
  },
  { name: "胸の下部", role: "斜め下へ押す", exercises: ["ディップス"] },
];

const GENDERS: { id: Gender; label: string; weights: number[] }[] = [
  { id: "male", label: "男性", weights: MEN_WEIGHTS },
  { id: "female", label: "女性", weights: WOMEN_WEIGHTS },
];

// ベンチプレスで組む重さの例に使う体重（kg）。男性・中級者の目安から1RMを出す。
const SAMPLE_BW = 70;

const fiveByFive = SET_SCHEMES.find((s) => s.label === "5×5")!;
const threeByEight = SET_SCHEMES.find((s) => s.label === "3×8")!;
const threeByTen = SET_SCHEMES.find((s) => s.label === "3×10")!;

// 胸の日のメニュー表。並びは dayOrder.ts の「胸の日」と同じ。
const MENU = [
  { name: "ベンチプレス", scheme: `${fiveByFive.label}か${threeByEight.label}`, rest: fiveByFive.rest },
  { name: "インクラインダンベルプレス", scheme: threeByEight.label, rest: threeByEight.rest },
  { name: "ダンベルフライ", scheme: threeByTen.label, rest: threeByTen.rest },
  { name: "ケーブルクロスオーバー", scheme: threeByTen.label, rest: threeByTen.rest },
];

export default function ChestTrainingPage() {
  const chestDay = dayOrderFor("胸の日");
  const benchMid = benchRows.find((r) => r.level === "中級者")!;
  const sample1RM = targetWeight(SAMPLE_BW, benchMid.ratio);
  const five = schemeWeight(sample1RM, fiveByFive.reps);
  const eight = schemeWeight(sample1RM, threeByEight.reps);
  const large = recoveryFor("large");
  const bench = findExerciseDetail("ベンチプレス");
  const fly = findExerciseDetail("ダンベルフライ");
  const chestPress = findExerciseDetail("チェストプレス");
  const dips = findExerciseDetail("ディップス");

  return (
    <main className="min-h-screen flex flex-col items-center px-4 py-8">
      <div className="max-w-md md:max-w-2xl w-full animate-slideUp">
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <p className="text-xs text-orange-500 font-bold mb-2">コラム</p>
          <h1 className="text-xl md:text-2xl font-bold text-gray-800 mb-6">
            ジムでの胸トレメニューと順番｜ベンチプレス以外の種目と、ダンベルプレスで組む重さ
          </h1>

          <div className="space-y-6 text-sm md:text-base text-gray-700 leading-relaxed">
            <section>
              <p>
                ジムで胸を鍛えるなら、中心はベンチプレスです。ただ、ベンチプレスだけでは胸の上の部分が鍛え足りなくなりやすく、ダンベルやマシンの種目を組み合わせると、胸全体をまんべんなく鍛えられます。
              </p>
              <p className="mt-2">
                この記事では、胸の3つの部分と種目、胸の日のメニューと順番、ベンチプレスとダンベルプレスで組む重さ、マシンを使うときのポイント、週に何回やるかの順に説明します。自宅で鍛える場合は「
                <Link href="/column/chest-home" className="text-orange-600 font-bold underline">
                  自宅でできる胸トレ
                </Link>
                」を見てください。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base md:text-lg mb-3">
                胸の3つの部分と鍛える種目
              </h2>
              <DiagramFigure
                title="ベンチプレスは胸全体。上部は斜め上へ押す種目で足す"
                label={`胸の3つの部分。${PARTS.map((p) => `${p.name}は${p.role}動き、主な種目は${p.exercises.join("・")}`).join("。")}。インクライン系はインクラインベンチプレスとインクラインダンベルプレス。`}
                caption="インクライン系＝ベンチの背もたれを斜めに起こして行うインクラインベンチプレス・インクラインダンベルプレス。フライ系＝ダンベルフライ・ケーブルクロスオーバー・ペックフライ。"
              >
                <DeltoidPartsDiagram parts={PARTS} />
              </DiagramFigure>
              <p className="mt-3">
                ベンチプレスは胸全体に効きますが、胸の上の部分（鎖骨の下あたり）は、ベンチの背もたれを斜めに起こして<span className="font-bold">斜め上へ押す種目</span>で鍛えると狙いやすくなります。胸の下の部分は、体を少し前に倒して行うディップスが向いています。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base md:text-lg mb-3">
                胸の日のメニューと順番
              </h2>
              <p className="font-bold text-gray-800">{chestDay.order}</p>
              <div className="overflow-x-auto -mx-2 px-2 mt-3">
                <table className="w-full text-xs md:text-sm border-collapse">
                  <thead>
                    <tr className="bg-orange-50">
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700">種目</th>
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">セット×回数</th>
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">休憩</th>
                    </tr>
                  </thead>
                  <tbody>
                    {MENU.map((m) => (
                      <tr key={m.name}>
                        <td className="border border-gray-200 px-2 py-2 font-bold text-gray-800">{m.name}</td>
                        <td className="border border-gray-200 px-2 py-2 text-gray-700 whitespace-nowrap">{m.scheme}</td>
                        <td className="border border-gray-200 px-2 py-2 text-gray-700 whitespace-nowrap">{m.rest}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-3">
                「
                <Link href="/column/training-order" className="text-orange-600 font-bold underline">
                  筋トレの順番
                </Link>
                」と同じ、重い種目から軽い種目への並びです。全部やる必要はありません。初めての人や時間がない日は、<span className="font-bold">ベンチプレスとインクラインダンベルプレスの2種目</span>からで十分です。1回に何分かかるかは「
                <Link href="/column/workout-time" className="text-orange-600 font-bold underline">
                  筋トレ1回は何分やればいい？
                </Link>
                」で計算できます。
              </p>
              {fly && (
                <p className="mt-3">
                  ダンベルフライは、重さを追う種目ではありません。ポイントは「{fly.formTips}」です。腕を開いたところで胸が伸びるのを感じられる重さにしてください。重くしすぎると肘が曲がり、肩を痛めやすくなります。
                </p>
              )}
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base md:text-lg mb-3">
                ベンチプレスで組む重さ
              </h2>
              <p>
                組む重さは、自分の1RM（1回だけ挙げられる最大の重さ）から出します。「◯kgを◯回」の記録を「
                <Link href="/rm-calculator" className="text-orange-600 font-bold underline">
                  RM計算機
                </Link>
                」で換算すれば分かります。目安は「決めた回数より{SET_RESERVE_REPS}回多くやったところで限界が来る重さ」です。
              </p>
              <p className="mt-2">
                たとえば1RMが{sample1RM}kg（体重{SAMPLE_BW}kgの男性・中級者の目安と同じ）なら、{fiveByFive.label}は約{five}kgで、プレートで組むと{toPlate(five)}kgです。{threeByEight.label}なら約{eight}kg（プレートで組むと{toPlate(eight)}kg）です。
              </p>
              {bench && <p className="mt-2">フォームのポイントは「{bench.formTips}」です。</p>}
              <p className="mt-2">
                重いセットは、セーフティバーを胸より少し下の高さに合わせてから行ってください（「
                <Link href="/column/power-rack" className="text-orange-600 font-bold underline">
                  パワーラックの使い方
                </Link>
                」）。体重とレベルごとの1RMの目安は「
                <Link href="/column/bench-press-average" className="text-orange-600 font-bold underline">
                  ベンチプレスの平均は何kg？
                </Link>
                」にあります。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base md:text-lg mb-3">
                ダンベルプレスで組む重さ
              </h2>
              <p>
                インクラインダンベルプレスやダンベルフライの重さを決める前に、まず平らなベンチでのダンベルプレスで、自分が扱える重さを知っておくと基準になります。目安は、片手1個で10回で限界が来る重さです。
              </p>
              {GENDERS.map((g) => (
                <div key={g.id} className="mt-3">
                  <p className="font-bold text-gray-800 mb-2">{g.label}（片手1個・10回で限界が来る重さ）</p>
                  <div className="overflow-x-auto -mx-2 px-2">
                    <table className="w-full text-xs md:text-sm border-collapse">
                      <thead>
                        <tr className="bg-orange-50">
                          <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">体重</th>
                          {DUMBBELL_LEVELS.map((lv) => (
                            <th key={lv} className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
                              {lv}
                              <span className="block text-[10px] font-normal text-gray-400">筋トレ歴{LEVEL_EXPERIENCE[lv]}</span>
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {g.weights.map((bw) => (
                          <tr key={bw}>
                            <td className="border border-gray-200 px-2 py-2 font-bold text-gray-800 whitespace-nowrap">{bw}kg</td>
                            {DUMBBELL_LEVELS.map((lv) => (
                              <td key={lv} className="border border-gray-200 px-2 py-2 text-gray-700 whitespace-nowrap">
                                {formatDumbbell(dumbbellWeight(bw, "press", g.id, lv))}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}
              <ul className="mt-2 space-y-1 text-xs text-gray-500">
                <li>
                  ※ ベンチプレスの目安から計算した値で、「
                  <Link href="/column/dumbbell-weight" className="text-orange-600 font-bold underline">
                    ダンベルは何kgを買えばいい？
                  </Link>
                  」の表と同じ基準です。今の重さが何レベルかは「
                  <Link href="/column/dumbbell-press-level" className="text-orange-600 font-bold underline">
                    ダンベルプレス◯kgはどのレベル？
                  </Link>
                  」で逆に引けます。
                </li>
                <li>
                  ※ {threeByEight.label}や{threeByTen.label}のように同じ重さで何セットも続けるときは、表より一段軽いダンベルで始めてください。
                </li>
              </ul>
              <p className="mt-3">
                インクラインダンベルプレスは、平らなベンチより扱える重さが下がります。表の重さから一段か二段軽いダンベルで始め、10回で限界が来る重さを探してください。ダンベルフライは、さらに軽い重さで行います。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base md:text-lg mb-3">
                マシンを使うとき
              </h2>
              <p>
                チェストプレスやペックフライのマシンは、動く道筋が決まっているので、フォームを覚える前の人や、補助者がいない日に重さを追い込みたいときに向いています。潰れてもバーが体に落ちてこないのも利点です。
                {chestPress && <>チェストプレスのポイントは「{chestPress.formTips}」です。</>}
              </p>
              <p className="mt-2">
                マシンの重さの表示は、機種によって同じ数字でも重さの感じ方が違います。ほかのマシンやダンベルの重さと比べず、そのマシンで決めた回数ができる重さを探してください。
              </p>
              {dips && (
                <p className="mt-2">
                  胸の下の部分を狙うディップスは、自分の体重がそのまま重さになる種目です。ポイントは「{dips.formTips}」です。肩に痛みが出る人は無理に行わず、ほかの種目に替えてください。
                </p>
              )}
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base md:text-lg mb-3">
                週に何回やるか
              </h2>
              <p>
                胸は「{large.part}」のグループに入り、回復の目安は{large.hours}、次に同じ部位を鍛えるまでの間隔は{large.interval}です。つまり胸の日は、多くても週2回までにします。曜日の組み方は「
                <Link href="/column/split-routine" className="text-orange-600 font-bold underline">
                  分割法の早見表
                </Link>
                」で紹介しています。
              </p>
            </section>

            <section className="bg-orange-50 border border-orange-100 rounded-xl p-4">
              <p className="font-bold text-orange-600 mb-2">
                筆者（筋トレ歴15年・フィジーク大会入賞）の場合
              </p>
              <p className="text-xs leading-relaxed">
                私は、重さを追うのはバーベル、胸を伸ばして効かせるのはダンベル、と役割を分けてきました。ダンベルは左右が独立しているぶん可動域を広く取れますが、重い重さで潰れたときに逃げ場がありません。
                <br />
                <br />
                だから胸の日も、ベンチプレスで重さを伸ばし、そのあとのダンベルの種目は、胸が伸びるのを感じられる重さで丁寧に行う、という組み方がおすすめです。種目ごとに役割を決めておくと、全部の種目で重さを競って疲れきる、ということがなくなります。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base md:text-lg mb-3">
                よくある質問
              </h2>
              <h3 className="font-bold text-gray-800 mt-5 mb-2">
                ベンチプレスだけでは足りませんか？
              </h3>
              <p>
                ベンチプレスだけでも胸は鍛えられます。ただ、胸の上の部分は鍛え足りなくなりやすいので、時間があればインクラインダンベルプレスを1種目足すのがおすすめです。
              </p>
              <h3 className="font-bold text-gray-800 mt-5 mb-2">
                ベンチプレスをすると肩が痛くなります。
              </h3>
              <p>
                痛みが出たら、その日はその種目を中止してください。肩がすくんで前に出ていると、肩を痛めやすくなります。まず重さを落として、肩甲骨を寄せて下げたまま押せているかを確かめてください。痛みが続くときは、整形外科を受診してください。
              </p>
              <h3 className="font-bold text-gray-800 mt-5 mb-2">
                ダンベルとマシン、どちらがいいですか？
              </h3>
              <p>
                どちらでも胸は鍛えられます。ダンベルは可動域を広く取れ、マシンは一人でも安全に追い込めます。初めはマシンで動きを覚え、慣れてきたらダンベルを足す、という順番でもかまいません。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base md:text-lg mb-3">まとめ</h2>
              <ul className="space-y-2">
                <li>
                  ▸ 胸は「上部」「全体」「下部」の3つ。ベンチプレスに加えて、<span className="font-bold">上部はインクライン系</span>で足す
                </li>
                <li>▸ 胸の日はベンチプレスから始めて、軽い種目へ。初めてなら2種目から</li>
                <li>▸ ベンチプレスは自分の1RMから組む。重いセットはセーフティバーを合わせてから</li>
                <li>▸ ダンベルプレスの重さは表で確かめる。インクラインやフライはそれより軽く</li>
                <li>▸ 胸の日は{large.interval}あけて、週2回まで</li>
              </ul>
            </section>
          </div>
        </div>

        <ShareButtons
          url="https://sakutore.jp/column/chest-training"
          title="ジムでの胸トレメニューと順番｜ベンチプレス以外の種目と、ダンベルプレスで組む重さ"
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
            <Link href="/column" className="text-orange-500 font-bold hover:text-orange-600 transition-colors text-sm">
              コラム一覧に戻る
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
