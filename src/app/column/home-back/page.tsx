import Link from "next/link";
import ShareButtons from "@/components/ShareButtons";
import { pageMetadata } from "@/lib/metadata";
import AuthorBox from "@/components/AuthorBox";
import {
  DUMBBELL_LEVELS,
  dumbbellWeight,
  formatDumbbell,
} from "@/lib/dumbbellStandards";
import { pullupSteps } from "@/lib/bodyweightStandards";
import {
  MEN_WEIGHTS,
  WOMEN_WEIGHTS,
  SET_SCHEMES,
  SET_RESERVE_REPS,
  LEVEL_EXPERIENCE,
  type Gender,
} from "@/lib/strengthStandards";
import { findExerciseDetail } from "@/lib/exercises";
import { recoveryFor } from "@/lib/recoveryStandards";

export const metadata = pageMetadata({
  title: "自宅で背中を鍛える筋トレ｜器具なし・ダンベルでできる種目と回数、ワンハンドロウは何kg - サクトレ",
  description:
    "背中は「引く」相手がないと鍛えにくい部位です。器具なしの斜め懸垂・床で行う背筋、ダンベル1つのワンハンドロウ、ドアに付ける懸垂バーの3段階で、自宅でできる種目と回数、ワンハンドロウの体重別の重さの目安をまとめました。",
  path: "/column/home-back",
});

// 自宅でそろう道具ごとの種目。回数の型は SET_SCHEMES、斜め懸垂の目標は pullupSteps から読む。
const INCLINE_ROW_STEP = pullupSteps.find((s) => s.name === "斜め懸垂");

const GENDERS: { id: Gender; label: string; weights: number[] }[] = [
  { id: "male", label: "男性", weights: MEN_WEIGHTS },
  { id: "female", label: "女性", weights: WOMEN_WEIGHTS },
];

// 導入で先に答えを見せる体格（MEN_WEIGHTS の70kg）。
const SAMPLE_WEIGHT = 70;

export default function HomeBackPage() {
  const threeByTen = SET_SCHEMES[2];
  const row = findExerciseDetail("ワンハンドロウ");
  const inverted = findExerciseDetail("インバーテッドロウ");
  const large = recoveryFor("large");
  const sampleRow = DUMBBELL_LEVELS.map((lv) =>
    formatDumbbell(dumbbellWeight(SAMPLE_WEIGHT, "row", "male", lv))
  ).join("〜");

  const TOOLS = [
    {
      tool: "器具なし",
      exercises: "斜め懸垂・床で行う背筋（うつ伏せで上体を起こす）",
      reps: INCLINE_ROW_STEP ? `斜め懸垂は${INCLINE_ROW_STEP.goal}を目標に` : `${threeByTen.label}`,
    },
    {
      tool: "ダンベル1つ",
      exercises: "ワンハンドロウ",
      reps: `片手ずつ${threeByTen.label}（${threeByTen.reps}回×${threeByTen.sets}セット）`,
    },
    {
      tool: "懸垂バー（ドア枠に付けるもの）",
      exercises: "懸垂・ぶら下がり・ネガティブ",
      reps: "できる段階から。1回もできなければ5段階の練習から",
    },
  ];

  return (
    <main className="min-h-screen flex flex-col items-center px-4 py-8">
      <div className="max-w-md md:max-w-2xl w-full animate-slideUp">
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <p className="text-xs text-orange-500 font-bold mb-2">コラム</p>
          <h1 className="text-xl md:text-2xl font-bold text-gray-800 mb-6">
            自宅で背中を鍛える筋トレ｜器具なし・ダンベルでできる種目と回数、ワンハンドロウは何kg
          </h1>

          <div className="space-y-6 text-sm md:text-base text-gray-700 leading-relaxed">
            <section>
              <p>
                背中は、自宅でいちばん鍛えにくい部位です。胸は床を押す腕立て伏せで鍛えられますが、背中は<span className="font-bold">何かを「引く」動き</span>でないと鍛えられず、引く相手が家の中にはなかなかないからです。
              </p>
              <p className="mt-2">
                この記事では、器具なし・ダンベル1つ・懸垂バーの3段階で、自宅でできる種目と回数をまとめます。重さの目安を先に書くと、体重{SAMPLE_WEIGHT}kgの男性なら、ワンハンドロウは片手{sampleRow}です（初心者〜中級者の目安。下に体重別・男女別の表があります）。背中を鍛える理由や、引く方向で効く場所が変わる話は
                <Link href="/column/back-benefits" className="text-orange-600 font-bold underline">
                  背中を鍛えるべき3つの理由
                </Link>
                にあります。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base md:text-lg mb-3">
                道具ごとにできる種目と回数
              </h2>
              <div className="overflow-x-auto -mx-2 px-2 mt-3">
                <table className="w-full text-xs md:text-sm border-collapse">
                  <thead>
                    <tr className="bg-orange-50">
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
                        道具
                      </th>
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700">
                        種目
                      </th>
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700">
                        回数の目安
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {TOOLS.map((t) => (
                      <tr key={t.tool}>
                        <td className="border border-gray-200 px-2 py-2 font-bold text-gray-800">
                          {t.tool}
                        </td>
                        <td className="border border-gray-200 px-2 py-2 text-gray-700">{t.exercises}</td>
                        <td className="border border-gray-200 px-2 py-2 text-gray-600">{t.reps}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-3">
                上の段ほど手軽で、下の段ほど背中にしっかり重さが乗ります。器具なしで物足りなくなったら、ダンベルか懸垂バーのどちらかを足してください。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base md:text-lg mb-3">
                器具なし：斜め懸垂と床で行う背筋
              </h2>
              <p>
                <span className="font-bold">斜め懸垂</span>は、腰〜胸の高さのバーの下に潜り、体を斜めにして胸をバーに引き寄せる種目です。足を遠くに置くほど重く、膝を曲げると軽くなります。
              </p>
              {inverted && (
                <ul className="mt-2 space-y-2">
                  {inverted.howTo.slice(1).map((step) => (
                    <li key={step}>▸ {step}</li>
                  ))}
                  <li>▸ {inverted.formTips}</li>
                </ul>
              )}
              <p className="mt-3">
                <span className="font-bold">家具で代用するときは、安全を最優先にしてください。</span>テーブルの縁やほうきを椅子に渡す方法は、体重がかかると倒れたり折れたりします。体重をかけても動かない頑丈なものがなければ、公園の低い鉄棒を使うほうが安全です。
              </p>
              <p className="mt-3">
                <span className="font-bold">床で行う背筋</span>は、うつ伏せになり、腕を前に伸ばして上体と脚を少しだけ浮かせる種目です。背中の下のほう（腰まわり）を鍛えます。反らせるほど効くわけではないので、床から少し浮かせた位置で止めてください。腰に痛みがある日はやめます。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base md:text-lg mb-3">
                ダンベル1つ：ワンハンドロウは何kg？
              </h2>
              <p>
                ダンベルが1つあるなら、背中の種目はワンハンドロウが中心になります。片手と同じ側の膝をベンチや椅子に乗せ、反対の手でダンベルを持って引く種目です。
              </p>
              {GENDERS.map((g) => (
                <div key={g.id} className="mt-3">
                  <p className="font-bold text-gray-800 mb-2">{g.label}（片手・10回できる重さ）</p>
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
                                {formatDumbbell(dumbbellWeight(bw, "row", g.id, lv))}
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
                表の重さは<span className="font-bold">10回で限界が来る重さ</span>です。{threeByTen.label}で組むなら、表より一段軽くして、1セット目の10回目で「あと{SET_RESERVE_REPS}回できる」余裕が残る重さにしてください（
                <Link href="/column/sets-and-reps" className="text-orange-600 font-bold underline">
                  5×5・3×10の重量の決め方
                </Link>
                と同じ考え方です）。
              </p>
              <p className="mt-3">
                ワンハンドロウは、自宅のダンベル種目の中でいちばん重さが要る種目です。<span className="font-bold">これから可変式のダンベルを買うなら、ワンハンドロウの重さまで届くもの</span>を選ぶと、ほかの種目にも足ります。
              </p>
              {row && (
                <>
                  <p className="mt-3 font-bold text-gray-800">背中に効かせるコツ</p>
                  <ul className="mt-2 space-y-2">
                    {row.muscleTips.map((tip) => (
                      <li key={tip}>▸ {tip}</li>
                    ))}
                  </ul>
                  <p className="mt-2">{row.formTips}。</p>
                </>
              )}
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base md:text-lg mb-3">
                懸垂バー：1回できなくても使える
              </h2>
              <p>
                ドア枠に付ける懸垂バーがあれば、背中をいちばん強く鍛えられる懸垂ができます。1回もできなくても、ぶら下がり・斜め懸垂・ネガティブ（下ろすときだけゆっくり）と段階を踏めば、バーは無駄になりません。段階の進め方は
                <Link href="/column/pullup-progression" className="text-orange-600 font-bold underline">
                  懸垂が1回もできない人の練習法
                </Link>
                にまとめています。
              </p>
              <p className="mt-2">
                ドア枠の懸垂バーは、取り付けられるドア枠の幅と、耐えられる体重が製品ごとに決まっています。<span className="font-bold">説明書の条件を守り、使う前に毎回しっかり固定されているか確かめてください。</span>
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base md:text-lg mb-3">
                週に何回やるか
              </h2>
              <p>
                背中は{large.part}に入り、回復の目安は{large.hours}、次に同じ部位をやるまでの間隔は{large.interval}です。自宅なら、胸の日（腕立て伏せ）と背中の日を交互に置くと組みやすくなります。胸の自宅トレは
                <Link href="/column/chest-home" className="text-orange-600 font-bold underline">
                  自宅でできる胸トレ完全ガイド
                </Link>
                にあります。
              </p>
            </section>

            <section className="bg-orange-50 border border-orange-100 rounded-xl p-4">
              <p className="font-bold text-orange-600 mb-2">
                筆者（筋トレ歴15年）の立場
              </p>
              <p className="text-xs leading-relaxed">
                正直に書いておくと、ダンベルの記事にも書いたとおり、私は15年ずっとジム派で、自宅用のダンベルを買ったことがありません。この記事で書けるのは、ジムで背中を鍛えてきた側から見た「自宅でどの動きを再現できるか」と、サクトレの基準での重さの目安です。
                <br />
                <br />
                その立場から1つ言えるのは、<span className="font-bold">背中は「引く相手」さえ用意できれば、自宅でも十分に鍛えられる</span>ということです。器具なしで続けて物足りなくなったら、それが道具を足すタイミングです。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base md:text-lg mb-3">
                よくある質問
              </h2>
              <h3 className="font-bold text-gray-800 mt-5 mb-2">
                背中に効いている感じがしません。
              </h3>
              <p>
                腕で引いていることが多いです。手でダンベルやバーを引こうとせず、<span className="font-bold">肘を後ろに引いて、肩甲骨を背骨に寄せる</span>意識に変えてください。軽い重さで動きを覚えてから、重さを戻します。
              </p>
              <h3 className="font-bold text-gray-800 mt-5 mb-2">
                タオルを引っ張る筋トレは効きますか？
              </h3>
              <p>
                タオルの両端を持って引き合う方法は、道具がなくてもすぐにできるのが利点です。ただし、自分で力を出すぶんだけの負荷なので、どれだけ効いているかが分かりにくく、重さを少しずつ上げることもできません。始めるきっかけとしては使えますが、続けるなら斜め懸垂やダンベルに移るのがおすすめです。
              </p>
              <h3 className="font-bold text-gray-800 mt-5 mb-2">
                1つだけ道具を買うなら、何がいいですか？
              </h3>
              <p>
                ドア枠が合うなら懸垂バー、合わないなら可変式のダンベルです。懸垂バーは背中に、ダンベルは背中以外の種目にも使えます。ダンベルの選び方は
                <Link href="/column/dumbbell-weight" className="text-orange-600 font-bold underline">
                  ダンベルは何kgを買えばいい？
                </Link>
                にあります。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base md:text-lg mb-3">
                まとめ
              </h2>
              <ul className="space-y-2">
                <li>
                  ▸ 背中は<span className="font-bold">「引く」相手</span>がないと鍛えにくい。器具なし・ダンベル・懸垂バーの3段階で考える
                </li>
                <li>
                  ▸ 器具なしは斜め懸垂と床で行う背筋。家具で代用するなら、体重をかけても動かない頑丈なものだけ
                </li>
                <li>
                  ▸ ダンベルならワンハンドロウ。体重{SAMPLE_WEIGHT}kgの男性で片手{sampleRow}が目安
                </li>
                <li>
                  ▸ 懸垂バーは1回できなくても、段階を踏めば使える
                </li>
              </ul>
            </section>
          </div>
        </div>

        <ShareButtons
          url="https://sakutore.jp/column/home-back"
          title="自宅で背中を鍛える筋トレ｜器具なし・ダンベルでできる種目と回数、ワンハンドロウは何kg"
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
