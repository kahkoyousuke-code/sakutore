import Link from "next/link";
import ShareButtons from "@/components/ShareButtons";
import { pageMetadata } from "@/lib/metadata";
import AuthorBox from "@/components/AuthorBox";
import {
  DUMBBELL_LEVELS,
  dumbbellExercises,
  dumbbellRatio,
  dumbbellWeight,
  formatDumbbell,
  heaviestNeeded,
} from "@/lib/dumbbellStandards";
import {
  formatLoadWeight,
  loadWeight,
  pushupLoad,
} from "@/lib/bodyweightStandards";

export const metadata = pageMetadata({
  title: "ダンベルは何kgを買えばいい？体重別・種目別の目安一覧 - サクトレ",
  description:
    "必要な重さは種目で3倍以上違います。体重70kgの男性ならサイドレイズは片手4kg、ワンハンドロウは31.5kg。種目別・男女別の目安を体重比から計算した表と、固定式か可変式かの選び方、買う前に知っておきたい「胸は腕立てのほうが重い」話まで解説します。",
  path: "/column/dumbbell-weight",
});

// 表の例に使う体格。男女それぞれ1人に固定して、数字の前提をぶらさない。
const MALE_WEIGHT = 70;
const FEMALE_WEIGHT = 55;

// 固定式と可変式の比較。値段は2026年時点の一般的な価格帯。
const TYPE_ROWS = [
  {
    type: "固定式（1個1重量）",
    price: "1kgあたり300〜600円",
    good: "安い・すぐ持てる・壊れない",
    bad: "重さを変えるには買い足すしかない",
  },
  {
    type: "可変式（ダイヤル・ピン）",
    price: "2個で2〜5万円",
    good: "1組で軽い重さから重い重さまで使える",
    bad: "高い・落とすと壊れる・切り替えに数秒かかる",
  },
  {
    type: "可変式（プレート差し替え）",
    price: "2個で1〜2万円",
    good: "安く重さを増やせる。プレートを買い足せる",
    bad: "付け替えが手間・収納場所を取る",
  },
];

export default function DumbbellWeightPage() {
  const standardPushup = pushupLoad("standard");
  const pushupLoadKg = loadWeight(MALE_WEIGHT, standardPushup.ratio);
  const maleMax = heaviestNeeded(MALE_WEIGHT, "male");
  const femaleMax = heaviestNeeded(FEMALE_WEIGHT, "female");
  const lateralBeginner = dumbbellWeight(MALE_WEIGHT, "lateral", "male", "初心者");
  const rowIntermediate = dumbbellWeight(MALE_WEIGHT, "row", "male", "中級者");

  const renderTable = (gender: "male" | "female", bodyWeight: number) => (
    <div className="overflow-x-auto -mx-2 px-2 mt-3">
      <table className="w-full text-xs border-collapse">
        <thead>
          <tr className="bg-orange-50">
            <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700">
              種目
            </th>
            <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
              体重比
            </th>
            {DUMBBELL_LEVELS.map((level) => (
              <th
                key={level}
                className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap"
              >
                {level}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {dumbbellExercises.map((exercise) => (
            <tr key={exercise.id}>
              <td className="border border-gray-200 px-2 py-2 text-gray-700">
                {exercise.name}
                {exercise.bothHands ? (
                  <span className="block text-[10px] text-gray-400">1個を両手で</span>
                ) : null}
              </td>
              <td className="border border-gray-200 px-2 py-2 text-gray-600 whitespace-nowrap">
                ×{dumbbellRatio(exercise.id, gender, "中級者").toFixed(2)}
              </td>
              {DUMBBELL_LEVELS.map((level) => (
                <td
                  key={level}
                  className="border border-gray-200 px-2 py-2 font-bold text-gray-800 whitespace-nowrap"
                >
                  {formatDumbbell(dumbbellWeight(bodyWeight, exercise.id, gender, level))}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <main className="min-h-screen flex flex-col items-center px-4 py-8">
      <div className="max-w-md w-full animate-slideUp">
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <p className="text-xs text-orange-500 font-bold mb-2">コラム</p>
          <h1 className="text-xl font-bold text-gray-800 mb-6">
            ダンベルは何kgを買えばいい？体重別・種目別の目安一覧
          </h1>

          <div className="space-y-6 text-sm text-gray-700 leading-relaxed">
            <section>
              <p>
                この質問に「◯kgです」と1つの数字で答えている記事は、たいてい間違っています。<span className="font-bold">必要な重さは種目によって3倍以上違う</span>からです。
              </p>
              <p className="mt-2">
                体重{MALE_WEIGHT}kgの男性なら、サイドレイズは片手
                {formatDumbbell(lateralBeginner)}、ワンハンドロウは中級者で片手
                {formatDumbbell(rowIntermediate)}。<span className="font-bold">同じ人の同じ日のトレーニングで、この差があります。</span>
              </p>
              <p className="mt-2">
                なので結論はこうなります。<span className="font-bold">1つの重さを買うのではなく、幅を買う。</span>男性なら片手
                {formatDumbbell(maleMax)}前後まで伸ばせるもの、女性なら片手
                {formatDumbbell(femaleMax)}前後まで伸ばせるものを選べば、中級者になるまで買い替えずに済みます。まず種目別の目安を見てください。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                種目別の目安（男性・体重{MALE_WEIGHT}kgの場合）
              </h2>
              <p>
                条件をそろえます。すべて<span className="font-bold">フォームを崩さず10回できる重さ</span>で、断りがなければ<span className="font-bold">片手1個</span>の重さです。1回だけ挙がる重さではありません。
              </p>
              {renderTable("male", MALE_WEIGHT)}
              <p className="mt-3 text-xs text-gray-500">
                ※ 体重比の列は中級者の値です。自分の体重を掛ければそのまま目安になります（例：体重80kgならワンハンドロウは 80 × {dumbbellRatio("row", "male", "中級者").toFixed(2)} ＝ {formatDumbbell(dumbbellWeight(80, "row", "male", "中級者"))}）。
              </p>
              <p className="mt-3">
                ダンベルプレスの数字だけは、
                <Link href="/column/strength-standards" className="text-orange-600 font-bold underline">
                  BIG3の重量目安
                </Link>
                のベンチプレスの体重比から計算しています。サイト内でベンチとダンベルの目安が食い違わないようにするためです。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                種目別の目安（女性・体重{FEMALE_WEIGHT}kgの場合）
              </h2>
              {renderTable("female", FEMALE_WEIGHT)}
              <p className="mt-3">
                女性の場合、<span className="font-bold">最初に買うなら片手
                {formatDumbbell(femaleMax)}まで対応できれば十分</span>です。1kg刻みで細かく調整できるもののほうが、10kgまで一気に伸ばせるものより実用的です。上半身の種目は1kg増えるだけで回数が変わります。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                サイドレイズが軽いのは、間違いではない
              </h2>
              <p>
                表を見て「サイドレイズが軽すぎる」と感じた人がいるはずです。これで合っています。
              </p>
              <p className="mt-2">
                サイドレイズは肩の横の筋肉だけを、てこの長い姿勢で動かす種目です。<span className="font-bold">ベンチプレスを120kg挙げる人でも、サイドレイズは片手10kg前後</span>で組みます。重くすると体を振って持ち上げることになり、狙った筋肉から負荷が逃げます。
              </p>
              <p className="mt-2">
                つまり<span className="font-bold">「軽いダンベルは初心者用」ではありません</span>。軽い重さでしか成立しない種目があるだけです。ここを誤解して2kgのダンベルを捨ててしまう人がいますが、サイドレイズやリアレイズでは何年やってもその近辺を使います。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                固定式か、可変式か
              </h2>
              <div className="overflow-x-auto -mx-2 px-2 mt-3">
                <table className="w-full text-xs border-collapse">
                  <thead>
                    <tr className="bg-orange-50">
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700">
                        種類
                      </th>
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
                        値段の目安
                      </th>
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700">
                        いいところ
                      </th>
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700">
                        弱点
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {TYPE_ROWS.map((row) => (
                      <tr key={row.type}>
                        <td className="border border-gray-200 px-2 py-2 font-bold text-gray-800">
                          {row.type}
                        </td>
                        <td className="border border-gray-200 px-2 py-2 text-gray-700 whitespace-nowrap">
                          {row.price}
                        </td>
                        <td className="border border-gray-200 px-2 py-2 text-gray-600">
                          {row.good}
                        </td>
                        <td className="border border-gray-200 px-2 py-2 text-gray-600">
                          {row.bad}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-3">
                <span className="font-bold">はっきり言うと、固定式を1セットだけ買うのはおすすめしません。</span>上の表のとおり、必要な重さは種目ごとに違い、しかも半年もすれば変わります。5kgのダンベルを2個買った人は、次にカールが10回できるようになった時点で買い足すことになります。
              </p>
              <p className="mt-2">
                買うなら<span className="font-bold">可変式で、片手
                {formatDumbbell(maleMax)}（女性なら{formatDumbbell(femaleMax)}）まで伸ばせるもの</span>。市販の可変式は24kgと32kgあたりが区切りになっているので、男性が上の表を最後まで使いたいなら32kgクラスです。予算を優先して24kgクラスにするなら、
                <span className="font-bold">先に足りなくなるのはワンハンドロウとゴブレットスクワットの2種目だけ</span>だと分かったうえで選べます。プレート差し替え式なら、最初は軽いプレートだけ買って後から足す手もあります。
              </p>
              <p className="mt-2">
                ただし可変式には弱点があります。<span className="font-bold">落とすと壊れます。</span>限界まで追い込んで手から落とす使い方をする種目（重いプレス系）では、この点が本当にリスクです。床を守るマットも一緒に用意してください。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                買う前に：胸は、腕立てのほうが重い
              </h2>
              <p>
                これは知らずに買う人が多い話です。<span className="font-bold">標準的な腕立て伏せで手にかかる荷重は、体重の約
                {Math.round(standardPushup.ratio * 100)}%。</span>体重{MALE_WEIGHT}kgの人なら
                {formatLoadWeight(standardPushup, MALE_WEIGHT)}に相当します。
              </p>
              <p className="mt-2">
                一方、片手20kgのダンベルを2個持ってプレスをしても合計40kg。つまり<span className="font-bold">体重{MALE_WEIGHT}kgの人にとっては、腕立て伏せ（約{pushupLoadKg}kg相当）のほうが重い</span>わけです。
              </p>
              <p className="mt-2">
                胸だけが目的なら、ダンベルを買う前に足を台に乗せたデクラインの腕立てまでやってみてください。負荷の一覧は
                <Link href="/column/chest-home" className="text-orange-600 font-bold underline">
                  自宅でできる胸トレ完全ガイド
                </Link>
                に、自重の回数の目安は
                <Link href="/column/pushup-pullup-average" className="text-orange-600 font-bold underline">
                  腕立て・懸垂は何回できれば普通？
                </Link>
                にまとめています。
              </p>
              <p className="mt-2">
                逆に<span className="font-bold">ダンベルでしか作れないのは、背中と肩と腕</span>です。自重では背中を引く動きがほとんど作れません（懸垂ができる環境があるなら別です）。買う理由はここにあります。
              </p>
            </section>

            <section className="bg-orange-50 border border-orange-100 rounded-xl p-4">
              <p className="font-bold text-orange-600 mb-2">
                筆者（筋トレ歴15年）の立場
              </p>
              <p className="text-xs leading-relaxed">
                先に正直に書いておくと、<span className="font-bold">私は15年ずっとジム派で、自宅用のダンベルを買ったことがありません。</span>なのでこの記事に「この商品を使っています」という話は出てきません。書けるのは、ジムで毎週いろいろな重さを持ってきた側から見た「どの種目にどれだけ要るか」です。
                <br />
                <br />
                その立場から1つだけ言うなら、<span className="font-bold">見るべきは最大重量ではなく「刻みと幅」です。</span>上の表のとおり、軽い側は思ったより軽く（サイドレイズは片手
                {formatDumbbell(lateralBeginner)}）、重い側は思ったより重い（ワンハンドロウは中級者で
                {formatDumbbell(rowIntermediate)}）。1つの重さで全部をまかなえる買い方は、最初から存在しません。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                よくある質問
              </h2>
              <h3 className="font-bold text-gray-800 mt-5 mb-2">
                1個だけ買えばいいですか？
              </h3>
              <p>
                2個です。ワンハンドロウのように片手ずつやる種目もありますが、プレスやショルダープレスは左右同時に持ちます。<span className="font-bold">1個だと組めない種目のほうが多い</span>です。
              </p>
              <h3 className="font-bold text-gray-800 mt-5 mb-2">
                まったくの初心者は何kgから始めればいいですか？
              </h3>
              <p>
                上の表の「初心者」の列が目安です。ただし最初の1回は<span className="font-bold">表より軽い重さでフォームを覚えてください</span>。重さを決めるのは、10回やって2〜3回余裕が残るかどうかです（
                <Link href="/column/beginner-guide" className="text-orange-600 font-bold underline">
                  初心者が最初にやるべき5つのこと
                </Link>
                ）。
              </p>
              <h3 className="font-bold text-gray-800 mt-5 mb-2">
                ダンベルだけで体は変わりますか？
              </h3>
              <p>
                変わります。ただし<span className="font-bold">脚だけは早い段階で足りなくなります。</span>ゴブレットスクワットは片手ではなく1個を両手で持つ種目なので、上の表でも重さが頭打ちになります。脚は自重の種目（ブルガリアンスクワットなど）で回数と可動域を増やすほうが現実的です。
              </p>
              <h3 className="font-bold text-gray-800 mt-5 mb-2">
                重さを上げるタイミングは？
              </h3>
              <p>
                <span className="font-bold">決めた回数を全セットで達成できた次の回</span>です。10回3セットが目標なら、3セット目まで10回できた日の次から重くします。可変式なら2.5kg刻み、軽い種目なら1kg刻みで十分です。
              </p>
              <h3 className="font-bold text-gray-800 mt-5 mb-2">
                マンションでも大丈夫ですか？
              </h3>
              <p>
                床に置く音が問題になります。<span className="font-bold">厚めのマットは必須</span>で、そのうえで「床に落とさない種目」を選んでください。寝て行うプレス系より、立って行うショルダープレスやカール、ロウのほうが安全です。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                まとめ
              </h2>
              <ul className="space-y-2">
                <li>
                  ▸ 必要な重さは<span className="font-bold">種目で3倍以上違う</span>。1つの数字で答えられる質問ではない
                </li>
                <li>
                  ▸ 体重{MALE_WEIGHT}kgの男性なら片手
                  <span className="font-bold">{formatDumbbell(maleMax)}</span>まで、女性（体重
                  {FEMALE_WEIGHT}kg）なら<span className="font-bold">{formatDumbbell(femaleMax)}</span>まで伸ばせれば中級者まで持つ
                </li>
                <li>
                  ▸ 固定式を1セットだけ買うと<span className="font-bold">数ヶ月で足りなくなる</span>。買うなら幅のあるもの
                </li>
                <li>
                  ▸ <span className="font-bold">サイドレイズが軽いのは正常</span>。軽い重さでしか成立しない種目がある
                </li>
                <li>
                  ▸ 胸は<span className="font-bold">腕立て（体重の約{Math.round(standardPushup.ratio * 100)}%）のほうが重い</span>。買う価値が高いのは背中・肩・腕
                </li>
              </ul>
              <p className="mt-2">
                重さが決まったら、あとは今日やる種目を決めるだけです。自宅・ダンベルありの条件で質問に答えれば、その日の1回分のメニューが出てきます。
              </p>
            </section>
          </div>
        </div>

        <ShareButtons
          url="https://sakutore.jp/column/dumbbell-weight"
          title="ダンベルは何kgを買えばいい？体重別・種目別の目安一覧"
        />
        <Link
          href="/gear"
          className="block bg-orange-50 hover:bg-orange-100 rounded-2xl p-4 mb-6 border-2 border-orange-200 transition-colors"
        >
          <div className="flex items-center gap-3">
            <span className="text-2xl flex-shrink-0">🏋️</span>
            <div>
              <p className="font-bold text-orange-600 text-sm">運営者厳選のおすすめギア</p>
              <p className="text-xs text-gray-500 mt-0.5">プロテイン・ベルト・グリップを見る →</p>
            </div>
          </div>
        </Link>

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
