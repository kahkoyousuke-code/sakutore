import Link from "next/link";
import ShareButtons from "@/components/ShareButtons";
import { pageMetadata } from "@/lib/metadata";
import AuthorBox from "@/components/AuthorBox";
import {
  LAT_PULLDOWN_TO_PULLUP_RATIO,
  formatReps,
  latPulldownTarget,
  pullupLoadRow,
  pullupRepRows,
  womenPullupRepRows,
} from "@/lib/bodyweightStandards";
import { FAT_KCAL_PER_KG, formatKcal, kcalForFatKg } from "@/lib/fatConversion";

export const metadata = pageMetadata({
  title: "懸垂が1回もできない人の練習法｜段階の踏み方とかかる期間 - サクトレ",
  description:
    "懸垂は体重の100%を引く種目です。体重70kgなら70kgのラットプルダウンと同じ。できないのが普通なので、ぶら下がり→斜め懸垂→ネガティブ→バンド補助と負荷を下げた段階を踏みます。移行の条件つきの練習表と、体重別のラットプルダウン目標重量を載せました。",
  path: "/column/pullup-progression",
});

// 体重別に「懸垂1回」の目標になるラットプルダウンの重量。
const BODY_WEIGHTS = [50, 60, 70, 80, 90];

// 懸垂に届くまでの段階。負荷を下げた種目から順に上げていく。
const STEPS = [
  {
    step: "1",
    name: "ぶら下がり",
    goal: "30秒",
    detail: "まず握力と肩が体重に耐えられるかを作る。肩をすくめない",
  },
  {
    step: "2",
    name: "斜め懸垂",
    goal: "10回×3セット",
    detail: "低い鉄棒やテーブルの下で。体を倒すほど重くなる",
  },
  {
    step: "3",
    name: "ネガティブ",
    goal: "5秒×5回",
    detail: "ジャンプで上まで行き、下ろすのに5秒かける。ここが一番効く",
  },
  {
    step: "4",
    name: "バンド補助",
    goal: "5回×3セット",
    detail: "太いゴムバンドを足にかけて軽くする。薄いバンドへ替えて負荷を戻す",
  },
  {
    step: "5",
    name: "懸垂",
    goal: "1回",
    detail: "反動なしで、あごがバーを越えれば1回",
  },
];

// 各段階にかかる期間の目安（週2回、背中の日を作れた場合）。
const PERIOD_ROWS = [
  { from: "ぶら下がり30秒まで", period: "2〜3週間" },
  { from: "斜め懸垂10回まで", period: "3〜4週間" },
  { from: "ネガティブ5回まで", period: "3〜4週間" },
  { from: "懸垂1回まで", period: "さらに3〜4週間" },
];

export default function PullupProgressionPage() {
  // 体重の例。持ち上げる重さの話をするときの基準として1人に固定する。
  const exampleWeight = 70;
  const lossExample = 5;

  return (
    <main className="min-h-screen flex flex-col items-center px-4 py-8">
      <div className="max-w-md w-full animate-slideUp">
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <p className="text-xs text-orange-500 font-bold mb-2">コラム</p>
          <h1 className="text-xl font-bold text-gray-800 mb-6">
            懸垂が1回もできない人の練習法｜段階の踏み方とかかる期間
          </h1>

          <div className="space-y-6 text-sm text-gray-700 leading-relaxed">
            <section>
              <p>
                最初に、これだけは知っておいてください。<span className="font-bold">懸垂は、体重の{Math.round(pullupLoadRow.ratio * 100)}%を引く種目です。</span>
              </p>
              <p className="mt-2">
                体重{exampleWeight}kgの人がぶら下がった時点で、<span className="font-bold">{exampleWeight}kgのラットプルダウンを引こうとしている</span>のと同じことをしています。ジムでいきなり{exampleWeight}kgのマシンに座る人はいませんよね。<span className="font-bold">できないのが普通です。</span>
              </p>
              <p className="mt-2">
                なので、やることは「毎日バーにぶら下がって頑張る」ではありません。<span className="font-bold">負荷を下げた種目から順に上げていく</span>だけです。順番と、次に進む条件を先に出します。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                懸垂1回までの5段階
              </h2>
              <div className="overflow-x-auto -mx-2 px-2 mt-3">
                <table className="w-full text-xs border-collapse">
                  <thead>
                    <tr className="bg-orange-50">
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700">
                        段階
                      </th>
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
                        次に進む条件
                      </th>
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700">
                        やり方
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {STEPS.map((row) => (
                      <tr key={row.step}>
                        <td className="border border-gray-200 px-2 py-2 font-bold text-gray-800 whitespace-nowrap">
                          {row.step}. {row.name}
                        </td>
                        <td className="border border-gray-200 px-2 py-2 font-bold text-orange-600 whitespace-nowrap">
                          {row.goal}
                        </td>
                        <td className="border border-gray-200 px-2 py-2 text-gray-600">
                          {row.detail}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-3">
                この中で一番効くのは<span className="font-bold">3のネガティブ</span>です。上げる力がなくても、<span className="font-bold">下ろす動きは上げる動きより強い力を出せます。</span>ジャンプで上まで行って、5秒かけてゆっくり下ろす。これを繰り返すだけで、引くための筋肉に体重{exampleWeight}kg分の刺激が入ります。
              </p>
              <p className="mt-2">
                逆に<span className="font-bold">やっても伸びないのが「1回もできない懸垂を毎日試すこと」</span>です。ぶら下がって力むだけでは負荷が足りず、握力だけが疲れて終わります。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                ジムがあるなら、ラットプルダウンで現在地が分かる
              </h2>
              <p>
                懸垂と同じ「上から引く」動きをマシンでやるのがラットプルダウンです。ここで扱える重量から、懸垂に届きそうかが逆算できます。目安は<span className="font-bold">体重の{Math.round(LAT_PULLDOWN_TO_PULLUP_RATIO * 100)}%を8〜10回</span>です。
              </p>
              <div className="overflow-x-auto -mx-2 px-2 mt-3">
                <table className="w-full text-xs border-collapse">
                  <thead>
                    <tr className="bg-orange-50">
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
                        体重
                      </th>
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
                        懸垂で引く重さ
                      </th>
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700">
                        ラットプルダウンの目標（8〜10回）
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {BODY_WEIGHTS.map((weight) => (
                      <tr key={weight}>
                        <td className="border border-gray-200 px-2 py-2 font-bold text-gray-800 whitespace-nowrap">
                          {weight}kg
                        </td>
                        <td className="border border-gray-200 px-2 py-2 text-gray-700 whitespace-nowrap">
                          {weight}kg
                        </td>
                        <td className="border border-gray-200 px-2 py-2 font-bold text-orange-600 whitespace-nowrap">
                          {latPulldownTarget(weight)}kg
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-3 text-xs text-gray-500">
                ※ 公的な基準ではなくサクトレの目安です。マシンの構造で体感は変わるので、絶対値ではなく「前回より上がっているか」を見てください。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                どのくらいで1回できるようになるか
              </h2>
              <div className="overflow-x-auto -mx-2 px-2 mt-3">
                <table className="w-full text-xs border-collapse">
                  <thead>
                    <tr className="bg-orange-50">
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700">
                        区間
                      </th>
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
                        期間の目安
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {PERIOD_ROWS.map((row) => (
                      <tr key={row.from}>
                        <td className="border border-gray-200 px-2 py-2 text-gray-700">
                          {row.from}
                        </td>
                        <td className="border border-gray-200 px-2 py-2 font-bold text-gray-800 whitespace-nowrap">
                          {row.period}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-3">
                合計すると<span className="font-bold">2〜3ヶ月</span>です。週2回、背中を引く日を作れた場合の目安で、体重が重い人はもう少しかかります。1回できてからの伸びは速く、
                <span className="font-bold">
                  初心者{formatReps(pullupRepRows.find((r) => r.level === "初心者")?.reps ?? 3)}・
                  中級者{formatReps(pullupRepRows.find((r) => r.level === "中級者")?.reps ?? 10)}
                </span>
                が次の目印になります（
                <Link href="/column/pushup-pullup-average" className="text-orange-600 font-bold underline">
                  懸垂は何回できれば普通？
                </Link>
                ）。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                体重を落とすのも「練習」のうち
              </h2>
              <p>
                懸垂には、他の種目にない特徴があります。<span className="font-bold">体重が増えると、種目そのものが重くなる</span>ことです。ベンチプレスは体重が増えても100kgは100kgですが、懸垂は体重がそのまま負荷になります。
              </p>
              <p className="mt-2">
                つまり<span className="font-bold">{lossExample}kg減らせば、引く重さが{lossExample}kg軽くなります。</span>筋力を{lossExample}kg分伸ばすより、脂肪を{lossExample}kg落とすほうが速い人は珍しくありません。必要な収支は
                {formatKcal(kcalForFatKg(lossExample))}kcal（体脂肪1kg＝{formatKcal(FAT_KCAL_PER_KG)}kcal）で、1日300kcalの赤字なら約
                {Math.round((kcalForFatKg(lossExample) / 300 / 30) * 10) / 10}ヶ月です。
              </p>
              <p className="mt-2">
                ただし<span className="font-bold">落とし方を間違えると逆効果</span>です。食事制限だけで落とすと筋肉も減り、引く力まで落ちます（
                <Link href="/column/diet-rebound-muscle" className="text-orange-600 font-bold underline">
                  食事制限だけでリバウンドする理由
                </Link>
                ）。落とすペースの目安は
                <Link href="/column/abs-body-fat" className="text-orange-600 font-bold underline">
                  体脂肪率の記事
                </Link>
                にまとめています。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                女性の場合
              </h2>
              <p>
                女性は<span className="font-bold">上半身を引く力で男性と最も差が出ます</span>。サクトレの目安でも、女性は初心者
                {formatReps(womenPullupRepRows[0].reps)}・中級者
                {formatReps(womenPullupRepRows[1].reps)}としています。<span className="font-bold">0回が普通の位置</span>だということです。
              </p>
              <p className="mt-2">
                なので女性の場合は、いきなり懸垂1回を目標にしなくて構いません。<span className="font-bold">斜め懸垂10回を目標にして、そこで止めても背中は十分に育ちます。</span>そのうえで挑戦したくなったら、上の段階表の3（ネガティブ）から入ってください。
              </p>
            </section>

            <section className="bg-orange-50 border border-orange-100 rounded-xl p-4">
              <p className="font-bold text-orange-600 mb-2">
                筆者（筋トレ歴15年）の場合
              </p>
              <p className="text-xs leading-relaxed">
                私は体重90kg超から始めたので、<span className="font-bold">当時は懸垂が1回もできませんでした。</span>90kgを引く種目だったのだから当然です。
                <br />
                <br />
                正直に書くと、できるようになった一番の要因は<span className="font-bold">背中が強くなったことと、体重が78kgまで落ちたことの両方</span>でした。12kg減るというのは、懸垂で言えば<span className="font-bold">12kgの重りを外した</span>のと同じです。「できないのは根性が足りないからだ」と思っていた時期がありましたが、実際には引く重さの問題でした。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                よくある質問
              </h2>
              <h3 className="font-bold text-gray-800 mt-5 mb-2">
                毎日やってもいいですか？
              </h3>
              <p>
                背中は大きい筋肉なので、<span className="font-bold">中2〜3日</span>あけてください。ぶら下がり（1の段階）だけは毎日でも構いません。回復の目安は
                <Link href="/column/muscle-soreness" className="text-orange-600 font-bold underline">
                  筋肉痛の記事
                </Link>
                の部位別の表を見てください。
              </p>
              <h3 className="font-bold text-gray-800 mt-5 mb-2">
                順手と逆手、どちらが簡単ですか？
              </h3>
              <p>
                <span className="font-bold">逆手（手のひらが自分側）のほうが簡単です。</span>二頭筋が強く参加するためで、1回目を達成する目的なら逆手から入って問題ありません。背中に効かせたいなら順手です。
              </p>
              <h3 className="font-bold text-gray-800 mt-5 mb-2">
                斜め懸垂はどこでやればいいですか？
              </h3>
              <p>
                公園の低い鉄棒か、ジムのスミスマシンのバーを腰の高さに設定して行います。自宅なら丈夫なテーブルの下に潜って端を握る方法もあります。<span className="font-bold">体を倒すほど重くなる</span>ので、角度で負荷を調整してください。
              </p>
              <h3 className="font-bold text-gray-800 mt-5 mb-2">
                握力が先に限界になります。
              </h3>
              <p>
                その場合はパワーグリップを使ってください。背中を追い込む前に手が離れるのは、よくある足止めです。ネガティブの段階から使って構いません。
              </p>
              <h3 className="font-bold text-gray-800 mt-5 mb-2">
                自宅にバーがない場合は？
              </h3>
              <p>
                ドア枠に取り付けるタイプの懸垂バーがありますが、<span className="font-bold">枠の強度によっては危険</span>です。設置に不安があるなら、斜め懸垂とダンベルのロウで代用できます（
                <Link href="/column/dumbbell-weight" className="text-orange-600 font-bold underline">
                  ダンベルは何kgを買えばいい？
                </Link>
                ）。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                まとめ
              </h2>
              <ul className="space-y-2">
                <li>
                  ▸ 懸垂は<span className="font-bold">体重の{Math.round(pullupLoadRow.ratio * 100)}%を引く種目</span>。1回もできないのは普通の位置
                </li>
                <li>
                  ▸ 練習はぶら下がり →斜め懸垂 →<span className="font-bold">ネガティブ</span>→バンド補助の順。条件を満たしたら次へ
                </li>
                <li>
                  ▸ ジムがあるなら<span className="font-bold">ラットプルダウンで体重の{Math.round(LAT_PULLDOWN_TO_PULLUP_RATIO * 100)}%を8〜10回</span>が目印（体重{exampleWeight}kgなら{latPulldownTarget(exampleWeight)}kg）
                </li>
                <li>
                  ▸ 週2回で<span className="font-bold">2〜3ヶ月</span>が目安。1回できてからの伸びは速い
                </li>
                <li>
                  ▸ <span className="font-bold">体重を落とすのも練習のうち</span>。{lossExample}kg減れば引く重さも{lossExample}kg減る
                </li>
              </ul>
              <p className="mt-2">
                背中を引く日をどう組むかは
                <Link href="/column/split-routine" className="text-orange-600 font-bold underline">
                  分割法の早見表
                </Link>
                に、背中を鍛える意味は
                <Link href="/column/back-benefits" className="text-orange-600 font-bold underline">
                  背中を鍛えるべき3つの理由
                </Link>
                にまとめています。
              </p>
            </section>
          </div>
        </div>

        <ShareButtons
          url="https://sakutore.jp/column/pullup-progression"
          title="懸垂が1回もできない人の練習法｜段階の踏み方とかかる期間"
        />
        <Link
          href="/gear"
          className="block bg-orange-50 hover:bg-orange-100 rounded-2xl p-4 mb-6 border-2 border-orange-200 transition-colors"
        >
          <div className="flex items-center gap-3">
            <span className="text-2xl flex-shrink-0">🏋️</span>
            <div>
              <p className="font-bold text-orange-600 text-sm">運営者厳選のおすすめギア</p>
              <p className="text-xs text-gray-500 mt-0.5">握力で止まらないためのパワーグリップを見る →</p>
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
