import Link from "next/link";
import ShareButtons from "@/components/ShareButtons";
import { pageMetadata } from "@/lib/metadata";
import AuthorBox from "@/components/AuthorBox";
import {
  DUMBBELL_LEVELS,
  dumbbellWeight,
  formatDumbbell,
} from "@/lib/dumbbellStandards";
import { pullupSteps, pullupRepRows, formatReps } from "@/lib/bodyweightStandards";
import {
  MEN_WEIGHTS,
  WOMEN_WEIGHTS,
  SET_SCHEMES,
  SET_RESERVE_REPS,
  LEVEL_EXPERIENCE,
  estimate1RM,
  schemeWeight,
  type Gender,
} from "@/lib/strengthStandards";
import { findExerciseDetail } from "@/lib/exercises";
import { recoveryFor } from "@/lib/recoveryStandards";

export const metadata = pageMetadata({
  title: "自宅で背中を鍛える筋トレ｜ワンハンドロウは何kg？体重別の重さと器具なしの種目・回数 - サクトレ",
  description:
    "背中は「引く」相手がないと鍛えにくい部位です。家の中でできる床の背筋、公園の鉄棒でできる斜め懸垂、ダンベルのワンハンドロウ、ドア枠に付ける懸垂バーの順に、自宅でできる種目と回数、ワンハンドロウの体重別の重さの目安をまとめました。",
  path: "/column/home-back",
});

const GENDERS: { id: Gender; label: string; weights: number[] }[] = [
  { id: "male", label: "男性", weights: MEN_WEIGHTS },
  { id: "female", label: "女性", weights: WOMEN_WEIGHTS },
];

// 導入で先に答えを見せる体格（MEN_WEIGHTS の70kg）。
const SAMPLE_WEIGHT = 70;

const threeByTen = SET_SCHEMES.find((s) => s.label === "3×10")!;
const inclineRowStep = pullupSteps.find((s) => s.name === "斜め懸垂");
// ドア枠のバーは高い位置に付くので、腰の高さのバーが要る斜め懸垂は除く（最後の「懸垂」も目標なので除く）。
const doorBarSteps = pullupSteps.filter((s) => s.name !== "斜め懸垂" && s.name !== "懸垂");
const pullupRep = (level: "初心者" | "中級者") =>
  pullupRepRows.find((r) => r.level === level)?.reps ?? 0;

// 10回で限界の重さ（表の値）から、3×10で組む重さ（回数＋余裕で限界の重さ）に直す。
const threeByTenFrom10RM = (tenRepKg: number) =>
  schemeWeight(estimate1RM(tenRepKg, 10), threeByTen.reps);

export default function HomeBackPage() {
  const row = findExerciseDetail("ワンハンドロウ");
  const inverted = findExerciseDetail("インバーテッドロウ");
  const backExt = findExerciseDetail("バックエクステンション");
  const large = recoveryFor("large");
  const sampleRows = DUMBBELL_LEVELS.map((lv) => dumbbellWeight(SAMPLE_WEIGHT, "row", "male", lv));
  const sampleRow = sampleRows.map(formatDumbbell).join("〜");

  const TOOLS = [
    {
      tool: "家の中（器具なし）",
      exercises: "床で行う背筋",
      reps: `${threeByTen.label}（${threeByTen.reps}回×${threeByTen.sets}セット）`,
    },
    {
      tool: "公園の低い鉄棒",
      exercises: "斜め懸垂",
      reps: inclineRowStep ? `${inclineRowStep.goal}を目標に` : threeByTen.label,
    },
    {
      tool: "ダンベル（1個でもできる）",
      exercises: "ワンハンドロウ",
      reps: `片手ずつ${threeByTen.label}（下の表の重さより少し軽く）`,
    },
    {
      tool: "懸垂バー（ドア枠に付けるもの）",
      exercises: "懸垂・ぶら下がり・ネガティブ",
      reps: `できる段階から。1回もできなければ${pullupSteps.length}段階の練習から`,
    },
  ];

  return (
    <main className="min-h-screen flex flex-col items-center px-4 py-8">
      <div className="max-w-md md:max-w-2xl w-full animate-slideUp">
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <p className="text-xs text-orange-500 font-bold mb-2">コラム</p>
          <h1 className="text-xl md:text-2xl font-bold text-gray-800 mb-6">
            自宅で背中を鍛える筋トレ｜ワンハンドロウは何kg？体重別の重さと器具なしの種目・回数
          </h1>

          <div className="space-y-6 text-sm md:text-base text-gray-700 leading-relaxed">
            <section>
              <p>
                背中は、自宅でいちばん鍛えにくい部位です。胸は床を押す腕立て伏せで鍛えられますが、背中は<span className="font-bold">何かを「引く」動き</span>でないと鍛えられず、引く相手が家の中にはなかなかないからです。
              </p>
              <p className="mt-2">
                この記事では、家の中・公園の鉄棒・ダンベル・懸垂バーの順に、自宅でできる種目と回数をまとめます。重さの目安を先に書くと、体重{SAMPLE_WEIGHT}kgの男性なら、ワンハンドロウは片手{sampleRow}です（10回で限界が来る重さ。初心者〜中級者の目安で、下に体重別・男女別の表があります）。背中を鍛える理由や、引く方向で効く場所が変わる話は
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
                        場所・道具
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
                上の段ほど手軽で、下の段ほど重さを上げていける余地が大きくなります。床で行う背筋は背中の下のほうの種目で、「引く」種目の代わりにはならないので、できれば斜め懸垂・ダンベル・懸垂バーのどれか1つと組み合わせてください。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base md:text-lg mb-3">
                家の中：床で行う背筋
              </h2>
              <p>
                うつ伏せになり、腕を前に伸ばして、上体と脚を床から少しだけ浮かせて1秒止める種目です。鍛えられるのは<span className="font-bold">背骨に沿った筋肉（とくに腰まわり）とお尻</span>で、懸垂やロウのような「引く」種目の代わりにはなりません。
              </p>
              <ul className="mt-2 space-y-2">
                <li>
                  ▸ 最初は上体だけ、または右手と左脚のように片側ずつ浮かせる形から始める
                </li>
                <li>
                  ▸ 反らせるほど効くわけではない。床から少し浮かせた位置で止める
                </li>
                {backExt && <li>▸ {backExt.formTips}</li>}
              </ul>
              <p className="mt-3">
                <span className="font-bold">腰に痛みがある人・反らすと痛む人は行わないでください。</span>代わりに、四つん這いで対角の手と脚を伸ばすバードドッグ（
                <Link href="/column/back-benefits" className="text-orange-600 font-bold underline">
                  背中を鍛えるべき3つの理由
                </Link>
                で紹介）にします。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base md:text-lg mb-3">
                公園の鉄棒：斜め懸垂
              </h2>
              <p>
                <span className="font-bold">斜め懸垂</span>は、腰〜胸の高さのバーの下に潜り、体を斜めにして胸をバーに引き寄せる種目です。足を遠くに置くほど重く、膝を曲げると軽くなります。
              </p>
              {inverted && (
                <ul className="mt-2 space-y-2">
                  {inverted.howTo
                    .filter((step) => !step.includes("潜り"))
                    .map((step) => (
                      <li key={step}>▸ {step}</li>
                    ))}
                  <li>▸ {inverted.formTips}</li>
                </ul>
              )}
              <p className="mt-3">
                <span className="font-bold">家の中で斜め懸垂をするのはおすすめしません。</span>テーブルは端を引くと手前に傾いて倒れることがあり、ほうきや物干し竿を椅子に渡す方法は、棒が折れたり椅子が滑ったりします。公園の低い鉄棒を使ってください。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base md:text-lg mb-3">
                ダンベル：ワンハンドロウは何kg？
              </h2>
              <p>
                ダンベルがあるなら、背中の種目はワンハンドロウが中心になります。1個でもできます。右手で引くなら、<span className="font-bold">左手と左膝をベンチか、キャスターのない頑丈な椅子に乗せ</span>、右手でダンベルを持って腰に向かって引きます。
              </p>
              {GENDERS.map((g) => (
                <div key={g.id} className="mt-3">
                  <p className="font-bold text-gray-800 mb-2">{g.label}（片手・10回で限界が来る重さ）</p>
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
                の表と同じ基準です。公的な平均の統計はなく、サクトレの基準として体重比で出しています。手持ちのダンベルで作れない重さは、表の重さを超えない範囲でいちばん重いものにしてください。
              </p>
              <p className="mt-3">
                <span className="font-bold">筋トレを始めたばかりなら、表の「初心者」の列（筋トレ歴{LEVEL_EXPERIENCE["初心者"]}）より軽い重さから</span>始めて、背中を丸めずに引けるようになってから上げてください。
              </p>
              <p className="mt-2">
                表の重さは、フォームを崩さずに10回で限界が来る重さです。{threeByTen.label}で組むなら、それより少し軽い{threeByTen.reps + SET_RESERVE_REPS}回で限界が来る重さを使います。体重{SAMPLE_WEIGHT}kgの男性なら、初心者で約{threeByTenFrom10RM(sampleRows[0])}kg、中級者で約{threeByTenFrom10RM(sampleRows[1])}kgです（考え方は
                <Link href="/column/sets-and-reps" className="text-orange-600 font-bold underline">
                  5×5・3×10の重量の決め方
                </Link>
                と同じ）。
              </p>
              <p className="mt-2">
                サクトレのダンベルの目安（6種目）の中では、ワンハンドロウがいちばん重さが要ります。これから可変式のダンベルを買うなら、ワンハンドロウの重さまで届くものを選ぶと、ほかの種目にも足ります。ただし体重が重い男性の中級者の値は、市販の可変式でも届かないことがあります。その場合は回数を増やすか、下ろす動きをゆっくりにして補ってください。
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
                ドア枠に付ける懸垂バーがあれば、自宅でできる中では背中をいちばん強く鍛えられる懸垂ができます。1回もできなくても、{doorBarSteps.map((s) => s.name).join("・")}と段階を踏めば、バーは無駄になりません。懸垂ができるようになったら、反動なしで{formatReps(pullupRep("初心者"))}が初心者、{formatReps(pullupRep("中級者"))}が中級者の目印です。段階の進め方は
                <Link href="/column/pullup-progression" className="text-orange-600 font-bold underline">
                  懸垂が1回もできない人の練習法
                </Link>
                にまとめています。
              </p>
              <p className="mt-2">
                斜め懸垂とワンハンドロウは、どちらも手前に引く種目です。<span className="font-bold">上から引く動きまで入れられるのは懸垂バーだけ</span>なので、背中の広がりまで狙うならバーを足す理由になります。
              </p>
              <p className="mt-2">
                ドア枠の懸垂バーは、取り付けられるドア枠の幅と、耐えられる体重が製品ごとに決まっていて、ドア枠の強さによっては付けられないこともあります。<span className="font-bold">説明書の条件を守り、使う前に毎回しっかり固定されているか確かめてください。</span>最初は足が床に着く高さで体重をかけ、ずれないか確かめてから使います。ネガティブはジャンプせず、踏み台で上まで上がってから下ろしてください。反動をつける・飛びつく・勢いよく落ちる動きは、バーが外れる原因になります。ドア枠に合わない場合は、床に置く自立式の懸垂スタンドという選択肢もあります。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base md:text-lg mb-3">
                週に何回やるか
              </h2>
              <p>
                背中は{large.part}に入り、回復の目安は{large.hours}、次に同じ部位をやるまでの間隔は{large.interval}です。つまり背中は週2回が目安です。自宅なら、胸（押す日）と背中（引く日）を別の日にして、それぞれ{large.interval}あけてください（例：月・木に胸、火・金に背中）。曜日の組み方は
                <Link href="/column/split-routine" className="text-orange-600 font-bold underline">
                  分割法の早見表
                </Link>
                に、胸の自宅トレは
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
                私も体重90kg超から始めた頃は、懸垂が1回もできませんでした。だからこそ、<span className="font-bold">背中は「引く相手」を用意して、自分に合った軽さから始めれば自宅でも十分に鍛えられる</span>と考えています。器具なしで続けて物足りなくなったら、それが道具を足すタイミングです。
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
                ドア枠が合うなら懸垂バー、合わないなら可変式のダンベル（2個1組）です。ワンハンドロウは1個でもできますが、プレスなど背中以外の種目には2個要ります。ダンベルの選び方は
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
                  ▸ 背中は<span className="font-bold">「引く」相手</span>がないと鍛えにくい。家の中・公園の鉄棒・ダンベル・懸垂バーの順に考える
                </li>
                <li>
                  ▸ 家の中でできるのは床で行う背筋。斜め懸垂は家具ではなく公園の鉄棒で
                </li>
                <li>
                  ▸ ダンベルならワンハンドロウ。体重{SAMPLE_WEIGHT}kgの男性で片手{sampleRow}（10回で限界の重さ）が目安。始めたばかりならもっと軽く
                </li>
                <li>
                  ▸ 懸垂バーは1回できなくても、段階を踏めば使える。反動や飛びつきは外れる原因
                </li>
                <li>
                  ▸ 背中は週2回。胸の日と別にして、{large.interval}あける
                </li>
              </ul>
            </section>
          </div>
        </div>

        <ShareButtons
          url="https://sakutore.jp/column/home-back"
          title="自宅で背中を鍛える筋トレ｜ワンハンドロウは何kg？体重別の重さと器具なしの種目・回数"
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
