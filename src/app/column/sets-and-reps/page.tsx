import Link from "next/link";
import ShareButtons from "@/components/ShareButtons";
import { pageMetadata } from "@/lib/metadata";
import AuthorBox from "@/components/AuthorBox";
import {
  SET_SCHEMES,
  SET_RESERVE_REPS,
  WEIGHT_STEP_KG,
  schemeWeight,
  estimate1RM,
} from "@/lib/strengthStandards";

// description の「＋2回」「2.5kg」は SET_RESERVE_REPS / WEIGHT_STEP_KG の値を直書きしている
// （seo.config.mjs が文字列リテラルとして読むため）。モジュール側を変えたらここも直すこと。
export const metadata = pageMetadata({
  title: "5×5・3×10の重量はどう決める？1RM別の早見表とセット数・回数の選び方 - サクトレ",
  description:
    "5×5は重量を伸ばしたい人、3×10は体を大きくしたい人向けです。重さは「決めた回数＋2回」で限界が来る重さ。1RM（1回だけ挙がる重さ）から5×5・3×8・3×10の重量が分かる早見表と、全セットできたら2.5kg上げる、重さの上げ方をまとめました。",
  path: "/column/sets-and-reps",
});

// 早見表の1RM（kg）。BIG3でよく出る帯を20kg刻みで並べる。
const ONE_RM_ROWS = [40, 60, 80, 100, 120, 140];

// 筆者が始めた頃のベンチ（/column/beginner-guide「60kgを2〜3回がやっと」の少ないほう）。
const AUTHOR_START = { weight: 60, reps: 2 };
// 筆者のベンチの自己ベスト（beginner-guide / big3-balance と同じ）。
const AUTHOR_BEST_BENCH = 120;

// プレートで作れる重さ（WEIGHT_STEP_KG 刻み）のうち、計算値以下でいちばん重いもの。
const toPlate = (kg: number) => Math.floor(kg / WEIGHT_STEP_KG) * WEIGHT_STEP_KG;

export default function SetsAndRepsPage() {
  const [fiveByFive, threeByEight, threeByTen] = SET_SCHEMES;
  const authorOneRM = estimate1RM(AUTHOR_START.weight, AUTHOR_START.reps);
  const authorFive = schemeWeight(authorOneRM, fiveByFive.reps);
  const authorSteps = Math.floor((AUTHOR_BEST_BENCH - authorOneRM) / WEIGHT_STEP_KG);

  return (
    <main className="min-h-screen flex flex-col items-center px-4 py-8">
      <div className="max-w-md md:max-w-2xl w-full animate-slideUp">
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <p className="text-xs text-orange-500 font-bold mb-2">コラム</p>
          <h1 className="text-xl font-bold text-gray-800 mb-6">
            5×5・3×10の重量はどう決める？1RM別の早見表とセット数・回数の選び方
          </h1>

          <div className="space-y-6 text-sm text-gray-700 leading-relaxed">
            <section>
              <p>
                「5×5（5x5）」は5回を5セット、「3×10」は10回を3セットという意味です。どちらが正解ということはなく、<span className="font-bold">目的で選びます</span>。重量を伸ばしたいなら5×5、体を大きくしたいなら3×10が向いています。
              </p>
              <p className="mt-2">
                とはいえ、5×5でも筋肉はつきますし、3×10でも重量は伸びます。違うのは<span className="font-bold">どちらに寄せるか</span>で、間をとった3×8もあります。迷いやすいのは型（何回×何セットにするかの組み方）より、重さの決め方のほうです。この記事では、型の選び方、1RM（1回だけ挙がる重さ）から重さを出す早見表、重さを上げるタイミングの順に説明します。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                型の選び方
              </h2>
              <div className="overflow-x-auto -mx-2 px-2 mt-3">
                <table className="w-full text-xs border-collapse">
                  <thead>
                    <tr className="bg-orange-50">
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
                        型
                      </th>
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700">
                        向いている目的
                      </th>
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
                        重さ（1RM比）
                      </th>
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
                        休憩
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {SET_SCHEMES.map((s) => (
                      <tr key={s.label}>
                        <td className="border border-gray-200 px-2 py-2 font-bold text-gray-800 whitespace-nowrap">
                          {s.label}
                          <span className="block text-[10px] font-normal text-gray-400">
                            {s.reps}回×{s.sets}セット
                          </span>
                        </td>
                        <td className="border border-gray-200 px-2 py-2 text-gray-600">
                          {s.purpose}
                        </td>
                        <td className="border border-gray-200 px-2 py-2 text-gray-700 whitespace-nowrap">
                          約{Math.round(schemeWeight(100, s.reps))}%
                        </td>
                        <td className="border border-gray-200 px-2 py-2 text-gray-700 whitespace-nowrap">
                          {s.rest}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-3">
                回数と休憩は
                <Link href="/column/beginner-guide" className="text-orange-600 font-bold underline">
                  筋トレ初心者が最初にやるべき5つのこと
                </Link>
                の目的別の表と同じ考え方です。5回は「筋力を上げる」範囲、8〜10回は「筋肉を大きくする」範囲に入ります。
              </p>
              <p className="mt-2">
                ただし、5×5の重さは初心者記事の表の「筋力を上げる」行（1RMの85%以上）より軽くなります。1RMの85%前後は、<span className="font-bold">5回がほぼ限界になる重さ</span>です。この重さで5回を5セットそろえるのは難しいので、5×5ではもう少し軽くします。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                重さは「決めた回数＋{SET_RESERVE_REPS}回」で限界が来る重さ
              </h2>
              <p>
                重さの決め方は1つだけです。<span className="font-bold">1セット目の最後に、あと{SET_RESERVE_REPS}回できる余裕が残る重さ</span>を選びます。5×5なら「{fiveByFive.reps + SET_RESERVE_REPS}回で限界が来る重さ」、3×10なら「{threeByTen.reps + SET_RESERVE_REPS}回で限界が来る重さ」です。
              </p>
              <p className="mt-2">
                後半のセットで疲れがたまって余裕が減り、最後のセットがぎりぎりになるのはちょうどいい状態です。1セット目から限界まで挙げると、2セット目以降で回数が落ちて、決めた回数をそろえられません。余裕を残すのは、<span className="font-bold">全セット同じ重さ・同じ回数でやり切るため</span>です。
              </p>
              <p className="mt-3">
                1RMが分かっていれば、次の表で目安の重さが分かります。
              </p>
              <div className="overflow-x-auto -mx-2 px-2 mt-3">
                <table className="w-full text-xs border-collapse">
                  <thead>
                    <tr className="bg-orange-50">
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
                        1RM
                      </th>
                      {SET_SCHEMES.map((s) => (
                        <th
                          key={s.label}
                          className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap"
                        >
                          {s.label}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {ONE_RM_ROWS.map((rm) => (
                      <tr key={rm}>
                        <td className="border border-gray-200 px-2 py-2 font-bold text-gray-800 whitespace-nowrap">
                          {rm}kg
                        </td>
                        {SET_SCHEMES.map((s) => (
                          <td
                            key={s.label}
                            className="border border-gray-200 px-2 py-2 text-gray-700 whitespace-nowrap"
                          >
                            {schemeWeight(rm, s.reps)}kg
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <ul className="mt-2 space-y-1 text-xs text-gray-500">
                <li>
                  ※ 1RM ÷（1 ＋（回数＋{SET_RESERVE_REPS}）÷ 30）で計算しています。
                  <Link href="/rm-calculator" className="text-orange-600 font-bold underline">
                    RM計算機
                  </Link>
                  の換算表でいえば、{fiveByFive.label}は{fiveByFive.reps + SET_RESERVE_REPS}RM（{fiveByFive.reps + SET_RESERVE_REPS}回で限界が来る重さ）、{threeByEight.label}は{threeByEight.reps + SET_RESERVE_REPS}RM、{threeByTen.label}は{threeByTen.reps + SET_RESERVE_REPS}RMの行の重さです。換算表の重さは「その回数で限界が来る重さ」なので、何セットもそろえる型では、回数に{SET_RESERVE_REPS}を足した行を使います。
                </li>
                <li>
                  ※ 表は計算上の目安です。とくに{threeByTen.label}や、スクワット・デッドリフトでは重めに出やすいので、1セット目で余裕が{SET_RESERVE_REPS}回残らなかったら重さを下げてください。実際に組むときは、表の重さを超えない範囲で、プレートで作れるいちばん重い重さにします。
                </li>
              </ul>
              <p className="mt-3">
                1RMをわざわざ測る必要はありません。<span className="font-bold">1回だけの最大挑戦は、ケガをしやすい挙げ方</span>です。「◯kgを◯回」挙げた記録があれば、RM計算機で1RMに換算できます。記録もないなら、軽めの重さで1セットやってみて、あと{SET_RESERVE_REPS}回できる余裕が残ったかどうかで判断してください。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                重さを上げるタイミング
              </h2>
              <p>
                <span className="font-bold">全セットで決めた回数ができたら、次のトレーニングで{WEIGHT_STEP_KG}kg（バーの片側{WEIGHT_STEP_KG / 2}kgずつ）上げます。</span>1セットでも回数が届かなかったら、次も同じ重さです。この「全セットそろったら上げる」というルールを守ると、上げるのが早すぎて挙がらなくなることも、遅すぎて伸びが止まることも減ります。
              </p>
              <p className="mt-2">
                回数に数えるのは、<span className="font-bold">深さやバーの通り道がいつもと同じフォームでできた回だけ</span>です。フォームが崩れて挙げた回は数えません。ベンチプレスとスクワットは、セーフティバーを正しい高さに合わせるか、補助者（そばでバーを支えてくれる人）についてもらってから行ってください（高さの決め方は
                <Link href="/column/power-rack" className="text-orange-600 font-bold underline">
                  パワーラックの使い方
                </Link>
                ）。回数が届かない日は、途中でバーを挙げきれず、下から動けなくなりやすい日でもあります。
              </p>
              <ul className="mt-3 space-y-2">
                <li>
                  ▸ <span className="font-bold">{fiveByFive.label}</span>：{fiveByFive.sets}セットとも{fiveByFive.reps}回できたら{WEIGHT_STEP_KG}kg上げます
                </li>
                <li>
                  ▸ <span className="font-bold">{threeByTen.label}</span>：{WEIGHT_STEP_KG}kg上げると10回が続かないことが多いので、上げた重さでは8回×3セットから始めます。全セットそろったら次は9回、その次は10回と1回ずつ増やし、10回×3セットがそろったら、また{WEIGHT_STEP_KG}kg上げます
                </li>
              </ul>
              <p className="mt-3">
                始めたばかりのうちは、ほぼ毎回上げられることが多いです。続けるうちに全セットそろう日の間隔が空いていき、数週間に1回のペースになるのが普通です。初心者記事の「2〜4週間ごとに少しずつ重量を増やす」は、この段階の目安です。<span className="font-bold">上げるタイミングは日数ではなく「全セットそろったか」で決めてください。</span>
              </p>
              <p className="mt-2">
                同じ重さで何度か続けて回数が届かないなら、重さを少し下げてやり直します。それでも伸びないなら、型より休養・食事・フォームを見直してみてください。挙げる途中でバーが止まる位置に合わせて、補助種目（BIG3を伸ばすために足す種目）を足す方法は
                <Link href="/column/big3-accessory" className="text-orange-600 font-bold underline">
                  BIG3の補助種目の選び方
                </Link>
                にあります。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                1回のトレーニングでの組み合わせ方
              </h2>
              <p>
                1つの型で全部の種目をやる必要はありません。よくある組み方は、<span className="font-bold">最初の重い種目を{fiveByFive.label}、2種目目以降（ラットプルダウンなど）や補助種目を{threeByTen.label}</span>にする方法です。重い種目は疲れていないうちに行って重さを伸ばし、軽い種目で回数をこなします。
              </p>
              <p className="mt-2">
                デッドリフトは腰への負担が大きいので、{fiveByFive.sets}セットではなく1〜3セットに減らしてもかまいません。
              </p>
              <p className="mt-2">
                {fiveByFive.label}は1種目で{fiveByFive.sets}セットあるので、週2回やればその種目だけで週{fiveByFive.sets * 2}セットになります。その部位の1週間のセット数が、
                <Link href="/column/frequency" className="text-orange-600 font-bold underline">
                  週に何回筋トレすればいい？
                </Link>
                の表（目的別の1部位あたり週セット数）に収まるか確かめてください。種目を並べる順番は
                <Link href="/column/training-order" className="text-orange-600 font-bold underline">
                  筋トレの順番
                </Link>
                にあります。
              </p>
            </section>

            <section className="bg-orange-50 border border-orange-100 rounded-xl p-4">
              <p className="font-bold text-orange-600 mb-2">
                筆者（筋トレ歴15年・フィジーク大会入賞）の場合
              </p>
              <p className="text-xs leading-relaxed">
                私が始めた頃、ベンチプレスは{AUTHOR_START.weight}kgを{AUTHOR_START.reps}〜3回がやっとでした。{AUTHOR_START.weight}kgを{AUTHOR_START.reps}回として計算すると1RMは約{authorOneRM}kgで、{fiveByFive.label}なら{authorFive}kg（実際に組むなら{toPlate(authorFive)}kg）、{threeByTen.label}なら{schemeWeight(authorOneRM, threeByTen.reps)}kgが目安になります。<span className="font-bold">最初のメインのセットは、見栄を張りたくなる重さよりずっと軽い</span>はずです。
                <br />
                <br />
                今の自己ベストはベンチプレス{AUTHOR_BEST_BENCH}kgで、始めた頃の推定1RM約{authorOneRM}kgから15年かかっています。その差を{WEIGHT_STEP_KG}kgずつで割れば{authorSteps}回ちょっと上げただけの計算ですが、全セットそろう日の間隔はだんだん空いていくので、そのぶん時間がかかります。<span className="font-bold">上がらない期間があるのは普通で、少しずつの積み重ねで届く距離</span>です。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                よくある質問
              </h2>
              <h3 className="font-bold text-gray-800 mt-5 mb-2">
                初心者はどちらから始めればいいですか？
              </h3>
              <p>
                {threeByTen.label}から始めるのがおすすめです。初心者記事で書いているとおり、最初は10〜15回くらいのほうがフォームが崩れにくいためです。フォームが毎回安定するようになってから、メインの種目を{fiveByFive.label}に移してください。
              </p>
              <h3 className="font-bold text-gray-800 mt-5 mb-2">
                ウォームアップのセットも数えますか？
              </h3>
              <p>
                数えません。{fiveByFive.label}の{fiveByFive.sets}セットに数えるのは、決めた重さで行うセットだけです。その前に軽い重さから段階的に上げるウォームアップのセットは別に行います。やり方は
                <Link href="/column/training-order" className="text-orange-600 font-bold underline">
                  筋トレの順番
                </Link>
                の「最初の1種目は、いきなり本番の重量から入らない」の項にあります。
              </p>
              <h3 className="font-bold text-gray-800 mt-5 mb-2">
                {fiveByFive.label}は時間がかかりすぎませんか？
              </h3>
              <p>
                5回の型はセット間の休憩が{fiveByFive.rest}と長めなので、1種目に時間がかかります。時間がない日は、<span className="font-bold">メインの1種目だけ{fiveByFive.label}にして、ほかの種目を減らす</span>ほうが、全種目のセット数を削るより重さの伸びを保ちやすくなります。
              </p>
              <h3 className="font-bold text-gray-800 mt-5 mb-2">
                {WEIGHT_STEP_KG}kgずつ上げられないときは？
              </h3>
              <p>
                ダンベル種目やショルダープレスのように扱う重さが軽い種目は、{WEIGHT_STEP_KG}kgでも上げ幅が大きすぎることがあります。その場合は、重さを変えずに回数を1回ずつ増やし、決めた回数より{SET_RESERVE_REPS}回多くできるようになってから上げてください。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                まとめ
              </h2>
              <ul className="space-y-2">
                <li>
                  ▸ 重量を伸ばしたいなら<span className="font-bold">{fiveByFive.label}</span>、体を大きくしたいなら<span className="font-bold">{threeByTen.label}</span>。どちらでも筋肉はつき、違うのはどちらに寄せるか
                </li>
                <li>
                  ▸ 重さは<span className="font-bold">「決めた回数＋{SET_RESERVE_REPS}回」で限界が来る重さ</span>。全セット同じ重さでやり切る
                </li>
                <li>
                  ▸ <span className="font-bold">全セットできたら次回{WEIGHT_STEP_KG}kg上げる</span>。1セットでも届かなければ同じ重さ。崩れた回は数えない
                </li>
                <li>
                  ▸ ベンチプレスとスクワットは、セーフティバーを設置するか、補助者についてもらってから
                </li>
                <li>
                  ▸ 初心者は{threeByTen.label}から。フォームが安定してから{fiveByFive.label}へ
                </li>
              </ul>
            </section>
          </div>
        </div>

        <ShareButtons
          url="https://sakutore.jp/column/sets-and-reps"
          title="5×5・3×10の重量はどう決める？1RM別の早見表とセット数・回数の選び方"
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
