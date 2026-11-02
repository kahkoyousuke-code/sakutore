import Link from "next/link";
import ShareButtons from "@/components/ShareButtons";
import { pageMetadata } from "@/lib/metadata";
import AuthorBox from "@/components/AuthorBox";
import DiagramFigure from "@/components/diagrams/DiagramFigure";
import Big3RatioBars from "@/components/diagrams/Big3RatioBars";
import {
  benchRows,
  squatRows,
  deadliftRows,
  womenBenchRows,
  womenSquatRows,
  womenDeadliftRows,
  WOMEN_WEIGHTS,
  LEVEL_EXPERIENCE,
  formatRatio,
  type Level,
  type Row,
} from "@/lib/strengthStandards";

// description の「体重55kgで中級者ならベンチ33kg・スクワット61kg・デッドリフト72kg」は
// SAMPLE_WEIGHT × women*Rows の中級者の比率（整数丸め）を直書きしている
// （seo.config.mjs が文字列リテラルとして読むため）。モジュール側を変えたらここも直すこと。
export const metadata = pageMetadata({
  title: "女性のBIG3平均は何kg？体重別（45〜65kg）の目安早見表 - サクトレ",
  description:
    "女性のBIG3に公的な平均の統計はありません。体重と筋トレ歴で見るのが正確です。体重55kgで中級者ならベンチ33kg・スクワット61kg・デッドリフト72kgが目安。45〜65kgの体重別に、初心者・中級者・上級者の3種目の重さを1枚の表にまとめました。",
  path: "/column/women-big3",
});

// 導入で答えを先に見せる体格。strength-standards の「女性（体重55kg）」と同じ。
const SAMPLE_WEIGHT = 55;

// 女性の目安は初心者〜上級者の3段階（strengthStandards.ts の women*Rows に合わせる）。
const LIFTS: { label: string; women: Row[]; men: Row[] }[] = [
  { label: "ベンチプレス", women: womenBenchRows, men: benchRows },
  { label: "スクワット", women: womenSquatRows, men: squatRows },
  { label: "デッドリフト", women: womenDeadliftRows, men: deadliftRows },
];

const LEVELS: Level[] = womenBenchRows.map((r) => r.level);

const ratioAt = (rows: Row[], level: Level) => rows.find((r) => r.level === level)?.ratio ?? 0;

// strength-standards の女性の表（LiftTable）と同じ整数丸めにして、数字をそろえる。
const kgAt = (bodyWeight: number, ratio: number) => Math.round(bodyWeight * ratio);

// 男女差を比べる基準のレベル。3種目とも男女の表にある中級者で比べる。
const COMPARE_LEVEL: Level = "中級者";

export default function WomenBig3Page() {
  const benchW = ratioAt(womenBenchRows, COMPARE_LEVEL);
  const squatW = ratioAt(womenSquatRows, COMPARE_LEVEL);
  const deadW = ratioAt(womenDeadliftRows, COMPARE_LEVEL);
  const benchM = ratioAt(benchRows, COMPARE_LEVEL);
  const squatM = ratioAt(squatRows, COMPARE_LEVEL);
  const deadM = ratioAt(deadliftRows, COMPARE_LEVEL);

  return (
    <main className="min-h-screen flex flex-col items-center px-4 py-8">
      <div className="max-w-md md:max-w-2xl w-full animate-slideUp">
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <p className="text-xs text-orange-500 font-bold mb-2">コラム</p>
          <h1 className="text-xl md:text-2xl font-bold text-gray-800 mb-6">
            女性のBIG3平均は何kg？体重別（45〜65kg）の目安早見表
          </h1>

          <div className="space-y-6 text-sm md:text-base text-gray-700 leading-relaxed">
            <section>
              <p>
                女性のベンチプレス・スクワット・デッドリフト（BIG3）に、<span className="font-bold">公的な「平均」の統計はありません</span>。ネットで見かける「女性の平均は◯kg」は、筋トレ未経験の人を少し測った1点の数字であることが多く、続けている人の目安にはなりません。よく見る「女性のベンチプレス平均は約20kg」も、筋トレ未経験の学生を数十人測った数字がもとになっていると紹介されています。下の表で言えば、初心者の入口にあたる数字です。
              </p>
              <p className="mt-2">
                正確に比べるなら、<span className="font-bold">体重と筋トレ歴</span>で見ます。先に答えを書くと、体重{SAMPLE_WEIGHT}kgの女性が筋トレ歴{LEVEL_EXPERIENCE[COMPARE_LEVEL]}の中級者なら、ベンチプレス{kgAt(SAMPLE_WEIGHT, benchW)}kg・スクワット{kgAt(SAMPLE_WEIGHT, squatW)}kg・デッドリフト{kgAt(SAMPLE_WEIGHT, deadW)}kgが目安です。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base md:text-lg mb-3">
                女性のベンチプレス・スクワット・デッドリフト 体重別早見表
              </h2>
              <p>
                1回だけ挙げられる最大の重さ（1RM）の目安です。自分の体重に近い行と、筋トレ歴に近いレベルを見てください。
              </p>
              <p className="mt-2">
                表の「初心者」は筋トレ歴{LEVEL_EXPERIENCE["初心者"]}の目安です。<span className="font-bold">始めて数ヶ月で届いていなくても普通</span>なので、比べるのは半年ほど続けてからで十分です。
              </p>
              {LEVELS.map((level) => (
                <div key={level} className="mt-4">
                  <p className="font-bold text-gray-800 mb-2">
                    {level}
                    <span className="ml-2 text-xs font-normal text-gray-500">
                      筋トレ歴 {LEVEL_EXPERIENCE[level]}が目安
                    </span>
                  </p>
                  <div className="overflow-x-auto -mx-2 px-2">
                    <table className="w-full text-xs md:text-sm border-collapse">
                      <thead>
                        <tr className="bg-orange-50">
                          <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
                            体重
                          </th>
                          {LIFTS.map((lift) => (
                            <th
                              key={lift.label}
                              className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap"
                            >
                              {lift.label}
                              <span className="block text-[10px] font-normal text-gray-400">
                                体重×{formatRatio(ratioAt(lift.women, level))}
                              </span>
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {WOMEN_WEIGHTS.map((bw) => (
                          <tr key={bw} className={bw === SAMPLE_WEIGHT ? "bg-orange-50/40" : undefined}>
                            <td className="border border-gray-200 px-2 py-2 font-bold text-gray-800 whitespace-nowrap">
                              {bw}kg
                            </td>
                            {LIFTS.map((lift) => (
                              <td
                                key={lift.label}
                                className="border border-gray-200 px-2 py-2 text-gray-700 whitespace-nowrap"
                              >
                                {kgAt(bw, ratioAt(lift.women, level))}kg
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}
              <p className="mt-3 text-xs text-gray-500">
                ※ 数字は
                <Link href="/column/strength-standards" className="text-orange-600 font-bold underline">
                  BIG3の重量目安一覧
                </Link>
                の女性の表と同じ基準です。表の体重の間にいる人は近いほうの行で、プレートで作れない重さは近い重さで読み替えてください。表にない体重の人は、見出しの「体重×◯」に自分の体重を掛けるか、
                <Link href="/weight-checker" className="text-orange-600 font-bold underline">
                  適正重量チェッカー
                </Link>
                で女性を選んでください（チェッカーは0.1kg単位で出るので、表と0.5kgずれることがあります）。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base md:text-lg mb-3">
                女性はベンチプレスの男女差が大きく、下半身は差が小さい
              </h2>
              <p>
                同じ中級者で比べると、女性の目安は男性のおよそ、ベンチプレス{Math.round((benchW / benchM) * 100)}%・スクワット{Math.round((squatW / squatM) * 100)}%・デッドリフト{Math.round((deadW / deadM) * 100)}%です。<span className="font-bold">上半身の筋量は男女差が大きく、下半身は上半身ほど差が開かない</span>傾向があるためです。
              </p>
              <DiagramFigure
                title="ベンチを1としたときの比率（中級者）"
                label={`ベンチプレスを1としたときの比率。女性はスクワット${(squatW / benchW).toFixed(1)}、デッドリフト${(deadW / benchW).toFixed(1)}。男性はスクワット${(squatM / benchM).toFixed(1)}、デッドリフト${(deadM / benchM).toFixed(1)}。`}
                caption="中級者の体重比から計算。女性は下半身の比率が男性より大きくなります。"
              >
                <Big3RatioBars
                  groups={[
                    { label: "女性", squat: squatW / benchW, deadlift: deadW / benchW, main: true },
                    { label: "男性", squat: squatM / benchM, deadlift: deadM / benchM },
                  ]}
                />
              </DiagramFigure>
              <p className="mt-3">
                つまり、<span className="font-bold">女性のベンチプレスの数字が男性より低く出るのは普通</span>です。男性の表で見て低くても、才能がないわけではありません。逆にデッドリフトは、女性が最初に自分の体重と同じ重さに届きやすい種目です。初心者の目安がもう体重×{formatRatio(ratioAt(womenDeadliftRows, "初心者"))}（体重50kgなら{kgAt(50, ratioAt(womenDeadliftRows, "初心者"))}kg）あります。
              </p>
              <p className="mt-2">
                3種目のバランスの見方は
                <Link href="/column/big3-balance" className="text-orange-600 font-bold underline">
                  BIG3のバランス診断
                </Link>
                にあります。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base md:text-lg mb-3">
                始めたばかりの人が知っておきたいこと
              </h2>
              <ul className="space-y-2">
                <li>
                  ▸ <span className="font-bold">バーベルは、バーだけで20kgある</span>：ベンチプレスの初心者の目安は体重×{formatRatio(ratioAt(womenBenchRows, "初心者"))}なので、体重50kgならバーだけで目安に届きます。「バーしか挙がらない」と落ち込む必要はありません。バーが重いと感じたら、ジムにある軽いバーやスミスマシン、ダンベルから始めて問題ありません
                </li>
                <li>
                  ▸ <span className="font-bold">スクワットは、バーだけでは初心者の目安に届かない</span>：初心者の目安は体重×{formatRatio(ratioAt(womenSquatRows, "初心者"))}。まずは自分の体重で深くしゃがめるようになってから重さを足します。初心者の目安は半年以上続けた人の数字なので、最初の数ヶ月は届かなくて当然です
                </li>
                <li>
                  ▸ <span className="font-bold">1RMを測る必要はない</span>：「◯kgを◯回」の記録があれば換算できます。限界の1回を試すのはフォームが崩れやすく、けがのリスクが高い挙げ方です。換算には10回以内の記録を使ってください
                </li>
                <li>
                  ▸ <span className="font-bold">デッドリフトは背中を丸めないことが最優先</span>：重さを足すのは、軽い重さで背中をまっすぐ保てるようになってから。フォームは
                  <Link href="/column/deadlift-average" className="text-orange-600 font-bold underline">
                    デッドリフトの平均は何kg？
                  </Link>
                  にあります
                </li>
              </ul>
              <p className="mt-3">
                回数から1RMに直すには
                <Link href="/rm-calculator" className="text-orange-600 font-bold underline">
                  RM計算機
                </Link>
                を、普段のセットの重さの決め方は
                <Link href="/column/sets-and-reps" className="text-orange-600 font-bold underline">
                  5×5・3×10の重量の決め方
                </Link>
                を使ってください。
              </p>
            </section>

            <section className="bg-orange-50 border border-orange-100 rounded-xl p-4">
              <p className="font-bold text-orange-600 mb-2">
                筆者（筋トレ歴15年・フィジーク大会入賞）の立場
              </p>
              <p className="text-xs leading-relaxed">
                先に断っておくと、私は男性なので、女性としてBIG3に取り組んだ実体験は書けません。この記事で書けるのは、サクトレがBIG3の目安に使っている体重比の基準を、女性の体重の範囲で並べ直した数字です。統計の平均ではなく、続けている人がその期間で届きやすい重さを体重比にした、サクトレの基準です。
                <br />
                <br />
                それでも1つだけ言えるのは、<span className="font-bold">「女性の平均は◯kg」という1つの数字と比べて落ち込む必要はない</span>ということです。体重が10kg違えば、同じレベルでも目安の重さは変わります。比べる相手は、自分の体重と筋トレ歴に合った行だけです。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base md:text-lg mb-3">
                よくある質問
              </h2>
              <h3 className="font-bold text-gray-800 mt-5 mb-2">
                女性でBIG3は何kgからすごいですか？
              </h3>
              <p>
                表の<span className="font-bold">上級者（筋トレ歴{LEVEL_EXPERIENCE["上級者"]}が目安）</span>に届いていれば、続けている女性の中でも多くない水準です。体重{SAMPLE_WEIGHT}kgならベンチプレス{kgAt(SAMPLE_WEIGHT, ratioAt(womenBenchRows, "上級者"))}kg・スクワット{kgAt(SAMPLE_WEIGHT, ratioAt(womenSquatRows, "上級者"))}kg・デッドリフト{kgAt(SAMPLE_WEIGHT, ratioAt(womenDeadliftRows, "上級者"))}kgです。
              </p>
              <h3 className="font-bold text-gray-800 mt-5 mb-2">
                女性のスクワットは何キロから？
              </h3>
              <p>
                体重{SAMPLE_WEIGHT}kgなら、初心者{kgAt(SAMPLE_WEIGHT, ratioAt(womenSquatRows, "初心者"))}kg・中級者{kgAt(SAMPLE_WEIGHT, ratioAt(womenSquatRows, "中級者"))}kg・上級者{kgAt(SAMPLE_WEIGHT, ratioAt(womenSquatRows, "上級者"))}kgが目安です。スクワットは3種目の中で男女差がいちばん小さく、上級者の体重×{formatRatio(ratioAt(womenSquatRows, "上級者"))}は、男性の中級者と同じ比率です。
              </p>
              <h3 className="font-bold text-gray-800 mt-5 mb-2">
                3種目を足した合計の目安はありますか？
              </h3>
              <p>
                この記事と、合計からレベルを引く
                <Link href="/column/big3-total" className="text-orange-600 font-bold underline">
                  BIG3合計◯kgはどのレベル？
                </Link>
                では、女性の合計の目安は置いていません。女性は種目ごとに男性との差が違う（ベンチプレスで最も差が出て、スクワットでは差が小さい）ので、合計でまとめると実態からずれるからです。種目ごとに表で見てください。
              </p>
              <h3 className="font-bold text-gray-800 mt-5 mb-2">
                重いものを持つと、体が太くなりませんか？
              </h3>
              <p>
                重さを扱っても、短期間で見た目が大きく太くなることはまずありません。始めた直後に脚が張るのは、多くがむくみです。理由は
                <Link href="/column/women-muscle-slim" className="text-orange-600 font-bold underline">
                  女性が筋トレしても太くならない理由
                </Link>
                で説明しています。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base md:text-lg mb-3">
                まとめ
              </h2>
              <ul className="space-y-2">
                <li>
                  ▸ 女性のBIG3に公的な平均の統計はない。<span className="font-bold">体重と筋トレ歴</span>で見る
                </li>
                <li>
                  ▸ 体重{SAMPLE_WEIGHT}kgの中級者なら、ベンチ{kgAt(SAMPLE_WEIGHT, benchW)}kg・スクワット{kgAt(SAMPLE_WEIGHT, squatW)}kg・デッドリフト{kgAt(SAMPLE_WEIGHT, deadW)}kgが目安
                </li>
                <li>
                  ▸ ベンチプレスは男女差が最も大きく、数字が低めに出るのが普通。下半身は差が小さい
                </li>
                <li>
                  ▸ 合計ではなく、<span className="font-bold">種目ごと</span>に見る
                </li>
              </ul>
              <p className="mt-3">
                種目ごとの詳しい目安やフォームは
                <Link href="/column/bench-press-average" className="text-orange-600 font-bold underline">
                  ベンチプレス
                </Link>
                ・
                <Link href="/column/squat-average" className="text-orange-600 font-bold underline">
                  スクワット
                </Link>
                ・
                <Link href="/column/deadlift-average" className="text-orange-600 font-bold underline">
                  デッドリフト
                </Link>
                の平均の記事にあります。
              </p>
            </section>
          </div>
        </div>

        <ShareButtons
          url="https://sakutore.jp/column/women-big3"
          title="女性のBIG3平均は何kg？体重別（45〜65kg）の目安早見表"
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
