import Link from "next/link";
import ShareButtons from "@/components/ShareButtons";
import { pageMetadata } from "@/lib/metadata";
import AuthorBox from "@/components/AuthorBox";
import DiagramFigure from "@/components/diagrams/DiagramFigure";
import DeltoidPartsDiagram from "@/components/diagrams/DeltoidPartsDiagram";
import {
  DUMBBELL_LEVELS,
  dumbbellWeight,
  formatDumbbell,
} from "@/lib/dumbbellStandards";
import {
  MEN_WEIGHTS,
  WOMEN_WEIGHTS,
  SET_SCHEMES,
  SET_RESERVE_REPS,
  WEIGHT_STEP_KG,
  LEVEL_EXPERIENCE,
  type Gender,
} from "@/lib/strengthStandards";
import { findExerciseDetail } from "@/lib/exercises";
import { recoveryFor } from "@/lib/recoveryStandards";

export const metadata = pageMetadata({
  title: "ショルダープレス・サイドレイズは何kg？体重別の重さの目安と、肩を大きくする肩トレメニュー - サクトレ",
  description:
    "肩の前側はベンチプレスやショルダープレスでもう使われています。肩幅を広く見せるのは横、厚みを出すのは後ろ。サイドレイズとリアレイズを優先する組み方と、ショルダープレス・サイドレイズの重さを体重別・男女別にまとめました。",
  path: "/column/shoulder-training",
});

// 肩（三角筋）の3つの部分。図と表の両方がここを読む。
const PARTS = [
  {
    name: "前",
    role: "押す種目で使う",
    exercises: ["ベンチプレス", "ショルダープレス"],
  },
  {
    name: "横",
    role: "肩の幅をつくる",
    exercises: ["サイドレイズ", "ショルダープレス"],
    main: true,
  },
  {
    name: "後ろ",
    role: "横から見た厚み",
    exercises: ["リアレイズ", "フェイスプル"],
  },
];

// 重さの表に使う種目（dumbbellStandards.ts の id）。
const WEIGHT_EXERCISES = [
  { id: "shoulder", name: "ダンベルショルダープレス（片手）" },
  { id: "lateral", name: "サイドレイズ（片手）" },
] as const;

const GENDERS: { id: Gender; label: string; weights: number[] }[] = [
  { id: "male", label: "男性", weights: MEN_WEIGHTS },
  { id: "female", label: "女性", weights: WOMEN_WEIGHTS },
];

// 導入で先に答えを見せる体格（MEN_WEIGHTS の70kg）。
const SAMPLE_WEIGHT = 70;

export default function ShoulderTrainingPage() {
  const [, threeByEight, threeByTen] = SET_SCHEMES;
  const lateral = findExerciseDetail("サイドレイズ");
  const small = recoveryFor("small");
  const sample = (id: "shoulder" | "lateral") =>
    DUMBBELL_LEVELS.map((lv) => formatDumbbell(dumbbellWeight(SAMPLE_WEIGHT, id, "male", lv))).join("〜");

  return (
    <main className="min-h-screen flex flex-col items-center px-4 py-8">
      <div className="max-w-md md:max-w-2xl w-full animate-slideUp">
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <p className="text-xs text-orange-500 font-bold mb-2">コラム</p>
          <h1 className="text-xl md:text-2xl font-bold text-gray-800 mb-6">
            ショルダープレス・サイドレイズは何kg？体重別の重さの目安と、肩を大きくする肩トレメニュー
          </h1>

          <div className="space-y-6 text-sm md:text-base text-gray-700 leading-relaxed">
            <section>
              <p>
                肩の筋肉（三角筋）は、<span className="font-bold">前・横・後ろの3つの部分</span>に分かれています。肩を大きく見せたいなら、優先するのは前ではなく<span className="font-bold">横と後ろ</span>です。
              </p>
              <p className="mt-2">
                前の部分は、ベンチプレスやショルダープレスのような押す種目で毎回使われています。胸の日をきちんとやっている人なら、前はもうかなり使われています。前だけを狙う種目（フロントレイズ）を足す必要は、まずありません。足りなくなりやすいのは、押す種目では届きにくい横と、目に入らないぶん忘れられやすい後ろです。
              </p>
              <p className="mt-2">
                重さの目安を先に書くと、体重{SAMPLE_WEIGHT}kgの男性なら、ダンベルショルダープレスは片手{sample("shoulder")}、サイドレイズは片手{sample("lateral")}です（下に体重別・男女別の表があります）。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base md:text-lg mb-3">
                肩の3つの部分と、鍛える種目
              </h2>
              <DiagramFigure
                title="肩幅を広く見せるのは「横」"
                label={`肩の筋肉の3つの部分。${PARTS.map((p) => `${p.name}は${p.role}、主な種目は${p.exercises.join("と")}`).join("。")}。優先するのは横。`}
                caption="ショルダープレスは前と横の両方に効きます。後ろは背中の日のロウでも使われますが、肩の種目として狙うならリアレイズやフェイスプルを足します。"
              >
                <DeltoidPartsDiagram parts={PARTS} />
              </DiagramFigure>
              <p className="mt-3">
                横は、正面から見た肩の張り出しをつくり、<span className="font-bold">肩幅を広く見せる</span>部分です（骨格の幅そのものは筋トレでは変わりません）。後ろはいちばん忘れられやすく、前ばかり育つと、横から見た肩の丸みが前に偏って見えやすくなります。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base md:text-lg mb-3">
                肩の日の組み方
              </h2>
              <ul className="space-y-2">
                <li>
                  ▸ <span className="font-bold">1種目目：ショルダープレス</span>。前と横の両方に効く、肩でいちばん重さを扱える種目。{threeByEight.label}（{threeByEight.reps}回×{threeByEight.sets}セット）くらいで重さを伸ばす
                </li>
                <li>
                  ▸ <span className="font-bold">2種目目：サイドレイズ</span>。肩幅をつくる横の種目。{threeByTen.label}（{threeByTen.reps}回×{threeByTen.sets}セット）で、重さより効かせることを優先する
                </li>
                <li>
                  ▸ <span className="font-bold">3種目目：リアレイズかフェイスプル</span>。後ろの種目。{threeByTen.label}で、サイドレイズと同じくらいか、それより軽い重さで丁寧に
                </li>
              </ul>
              <p className="mt-3">
                重さと回数の決め方は
                <Link href="/column/sets-and-reps" className="text-orange-600 font-bold underline">
                  5×5・3×10の重量の決め方
                </Link>
                と同じです。サイドレイズのように軽い種目は{WEIGHT_STEP_KG}kgずつだと上げ幅が大きすぎるので、同じ記事のよくある質問のとおり、回数を1回ずつ増やしてから上げてください。肩の横を特に伸ばしたいなら、
                <Link href="/column/training-order" className="text-orange-600 font-bold underline">
                  筋トレの順番
                </Link>
                の「原則を破っていい場合」のとおり、サイドレイズを先にやっても構いません。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base md:text-lg mb-3">
                ショルダープレス・サイドレイズは何kg？体重別の目安
              </h2>
              <p>
                ダンベルの片手の重さで、フォームを崩さず10回できる重さの目安です。ショルダープレスやサイドレイズに公的な平均の統計はないので、ここではジムでよく見る重さをもとにした体重比で出しています。初心者は筋トレ歴{LEVEL_EXPERIENCE["初心者"]}、中級者は{LEVEL_EXPERIENCE["中級者"]}が目安です。
              </p>
              {GENDERS.map((g) => (
                <div key={g.id} className="mt-3">
                  <p className="font-bold text-gray-800 mb-2">{g.label}</p>
                  <div className="overflow-x-auto -mx-2 px-2">
                    <table className="w-full text-xs md:text-sm border-collapse">
                      <thead>
                        <tr className="bg-orange-50">
                          <th
                            rowSpan={2}
                            className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap"
                          >
                            体重
                          </th>
                          {WEIGHT_EXERCISES.map((ex) => (
                            <th
                              key={ex.id}
                              colSpan={DUMBBELL_LEVELS.length}
                              className="border border-gray-200 px-2 py-2 text-center font-bold text-gray-700 whitespace-nowrap"
                            >
                              {ex.name}
                            </th>
                          ))}
                        </tr>
                        <tr className="bg-orange-50">
                          {WEIGHT_EXERCISES.flatMap((ex) =>
                            DUMBBELL_LEVELS.map((lv) => (
                              <th
                                key={`${ex.id}-${lv}`}
                                className="border border-gray-200 px-2 py-1 text-center font-bold text-gray-600 whitespace-nowrap"
                              >
                                {lv}
                              </th>
                            ))
                          )}
                        </tr>
                      </thead>
                      <tbody>
                        {g.weights.map((bw) => (
                          <tr key={bw}>
                            <td className="border border-gray-200 px-2 py-2 font-bold text-gray-800 whitespace-nowrap">
                              {bw}kg
                            </td>
                            {WEIGHT_EXERCISES.flatMap((ex) =>
                              DUMBBELL_LEVELS.map((lv) => (
                                <td
                                  key={`${ex.id}-${lv}`}
                                  className="border border-gray-200 px-2 py-2 text-center text-gray-700 whitespace-nowrap"
                                >
                                  {formatDumbbell(dumbbellWeight(bw, ex.id, g.id, lv))}
                                </td>
                              ))
                            )}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}
              <p className="mt-2 text-xs text-gray-500">
                ※ ショルダープレスは座って行う前提です。マシンは機種によって表示の重さが違うので、この表は当てはまりません。ジムにない重さは、軽いほうを選んでください。数字は
                <Link href="/column/dumbbell-weight" className="text-orange-600 font-bold underline">
                  ダンベルは何kgを買えばいい？
                </Link>
                の表と同じ基準から出しています。
              </p>
              <p className="mt-3">
                サイドレイズがショルダープレスよりずっと軽いのは正常です。<span className="font-bold">重くすると体を振って持ち上げることになり、肩の横から負荷が逃げます</span>。
              </p>
              <p className="mt-2">
                表の重さは<span className="font-bold">10回で限界が来る重さ</span>です。ショルダープレスを{threeByEight.label}で組むなら、表の重さがそのまま使えます（{threeByEight.reps}回＋{SET_RESERVE_REPS}回の余裕）。サイドレイズを{threeByTen.label}で組むなら、表より一段軽くして、1セット目の10回目で「あと{SET_RESERVE_REPS}回できる」余裕が残る重さにしてください。
              </p>
            </section>

            {lateral && (
              <section>
                <h2 className="font-bold text-orange-500 text-base md:text-lg mb-3">
                  サイドレイズを肩の横に効かせるコツ
                </h2>
                <ul className="space-y-2">
                  {lateral.muscleTips.map((tip) => (
                    <li key={tip}>▸ {tip}</li>
                  ))}
                </ul>
                <p className="mt-3">
                  首の付け根（僧帽筋）が先に疲れるなら、肩がすくんでいます。上の1つめのとおり、肩を下げてから挙げてください。手の甲は真上か、親指側がほんの少し上を向く向きで。小指を大きく上にひねると、肩の前が詰まって痛めやすくなります。
                </p>
              </section>
            )}

            <section className="bg-orange-50 border border-orange-100 rounded-xl p-4">
              <p className="font-bold text-orange-600 mb-2">
                筆者（筋トレ歴15年・フィジーク大会入賞）の場合
              </p>
              <p className="text-xs leading-relaxed">
                フィジークは上半身の見た目で評価される競技です。私はフィジーク志向で上半身を優先してきたので、
                <Link href="/column/training-order" className="text-orange-600 font-bold underline">
                  筋トレの順番
                </Link>
                にも書いた「弱点を先頭に置く」例外を、ずっと使ってきました。
                <br />
                <br />
                肩でそれをやるなら、先頭に置く候補はサイドレイズです。前の部分は胸の日にもう使っているので、フロントレイズのように前だけを狙う種目は足さなくて構いません。<span className="font-bold">肩の日は「横と後ろの日」</span>と考えると、種目を選ぶときに迷いません。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base md:text-lg mb-3">
                よくある質問
              </h2>
              <h3 className="font-bold text-gray-800 mt-5 mb-2">
                肩トレは週に何回やればいいですか？
              </h3>
              <p>
                週1〜2回が目安です。肩は{small.part}に入り、回復の目安は{small.hours}、次に同じ部位をやるまで{small.interval}です。ただし{small.note}。胸の日の翌日に肩の日を入れると、前の部分が回復しきっていないことがあります。組み方は
                <Link href="/column/split-routine" className="text-orange-600 font-bold underline">
                  分割法の早見表
                </Link>
                を、1週間の回数の考え方は
                <Link href="/column/frequency" className="text-orange-600 font-bold underline">
                  週に何回筋トレすればいい？
                </Link>
                を見てください。
              </p>
              <h3 className="font-bold text-gray-800 mt-5 mb-2">
                ショルダープレスはバーベルとダンベル、どちらがいいですか？
              </h3>
              <p>
                どちらでも構いません。バーベルは重さを伸ばしやすく、ダンベルは左右を別々に動かすぶん、手の位置を肩に合わせやすい利点があります。肩に違和感が出やすい人は、ダンベルのほうが動かし方を調整しやすいです。
              </p>
              <h3 className="font-bold text-gray-800 mt-5 mb-2">
                肩トレで肩が痛くなります。
              </h3>
              <p>
                動かすと鋭く痛む、セット中に痛みが強くなるときは、その日は肩の種目を中止してください。違和感程度なら、重さを下げる・下ろす深さを浅くする・サイドレイズを肩の高さより上げない、で様子を見ます。痛みが数日続く、夜に痛んで目が覚める、腕が上がらない、しびれるといった場合は、整形外科を受診してください。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base md:text-lg mb-3">
                まとめ
              </h2>
              <ul className="space-y-2">
                <li>
                  ▸ 肩は<span className="font-bold">前・横・後ろ</span>の3つ。前は押す種目でもう使われている
                </li>
                <li>
                  ▸ 肩幅を広く見せるのは<span className="font-bold">横</span>、横から見た厚みは<span className="font-bold">後ろ</span>
                </li>
                <li>
                  ▸ 肩の日は、ショルダープレス → サイドレイズ → リアレイズかフェイスプル
                </li>
                <li>
                  ▸ サイドレイズは<span className="font-bold">軽いのが正常</span>。表より一段軽く、反動なしで10回×3セットそろう重さで
                </li>
              </ul>
              <p className="mt-3">
                腕の裏（三頭筋）も、押す種目で一緒に使われる部位です。腕を太くしたい人は
                <Link href="/column/arm-training" className="text-orange-600 font-bold underline">
                  腕を太くする筋トレ
                </Link>
                もあわせてどうぞ。
              </p>
            </section>
          </div>
        </div>

        <ShareButtons
          url="https://sakutore.jp/column/shoulder-training"
          title="ショルダープレス・サイドレイズは何kg？体重別の重さの目安と、肩を大きくする肩トレメニュー"
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
