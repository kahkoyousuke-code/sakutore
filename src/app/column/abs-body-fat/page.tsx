import Link from "next/link";
import ShareButtons from "@/components/ShareButtons";
import RizapCta from "@/components/RizapCta";
import { pageMetadata } from "@/lib/metadata";
import AuthorBox from "@/components/AuthorBox";
import {
  FAT_KCAL_PER_KG,
  daysToLoseFat,
  fatLossToReachPercent,
  formatKcal,
  kcalForFatKg,
} from "@/lib/fatConversion";

export const metadata = pageMetadata({
  title: "腹筋が割れる体脂肪率は何%？男女別の見え方と必要な減量の計算 - サクトレ",
  description:
    "腹筋は腹筋運動では割れません。割れて見えるかは体脂肪率で決まります。男女別の見え方の目安表と、体重70kg・体脂肪率20%の人が12%に届くまで脂肪6.4kg＝約5ヶ月という計算つき。90kg→78kgを達成した筆者が解説します。",
  path: "/column/abs-body-fat",
});

// 例示に使う体格。計算はすべてこの1人で統一して、話がぶれないようにする。
const EXAMPLE_WEIGHT = 70;
const EXAMPLE_PERCENT = 20;
// 食事だけで無理なく作れる赤字としてよく使われる水準。
const DAILY_DEFICIT = 300;

// 体脂肪率ごとの見え方。数字は見た目の目安であって、健康の基準ではない。
const MEN_LOOK = [
  { percent: "25%以上", look: "腹筋の輪郭は出ない", note: "まずここから下げる段階" },
  { percent: "20%前後", look: "立つとお腹が少し出る", note: "日本人男性に多い水準" },
  { percent: "15%前後", look: "上の2つがうっすら見える", note: "服を着ると分からない" },
  { percent: "12%前後", look: "4つに割れて見える", note: "「割れた」と言われる入口" },
  { percent: "10%前後", look: "6つ見える", note: "食事の管理が前提になる" },
  { percent: "8%以下", look: "血管が浮く", note: "競技者が試合前だけ作る状態" },
];

const WOMEN_LOOK = [
  { percent: "30%以上", look: "腹筋の輪郭は出ない", note: "" },
  { percent: "25%前後", look: "お腹は平ら寄り", note: "健康的に見える範囲" },
  { percent: "22%前後", look: "縦線がうっすら出る", note: "" },
  { percent: "20%前後", look: "上の2つが見える", note: "" },
  { percent: "18%前後", look: "割れて見える", note: "維持には管理が要る" },
  { percent: "15%以下", look: "競技者の水準", note: "月経が止まるリスクがある" },
];

// 体重70kg・体脂肪率20%の人が各目標に届くまでの理論値。
const TARGETS = [18, 15, 12, 10];

export default function AbsBodyFatPage() {
  return (
    <main className="min-h-screen flex flex-col items-center px-4 py-8">
      <div className="max-w-md w-full animate-slideUp">
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <p className="text-xs text-orange-500 font-bold mb-2">コラム</p>
          <h1 className="text-xl font-bold text-gray-800 mb-6">
            腹筋が割れる体脂肪率は何%？男女別の見え方と必要な減量の計算
          </h1>

          <div className="space-y-6 text-sm text-gray-700 leading-relaxed">
            <section>
              <p>
                先に、いちばん大事なことを書きます。<span className="font-bold">腹筋は、腹筋運動では割れません。</span>
              </p>
              <p className="mt-2">
                割れているかどうかは、筋肉があるかないかの話ではないからです。腹直筋はもともと縦と横の腱で区切られていて、<span className="font-bold">誰のお腹でも最初から割れています</span>。見えないのは、その上に脂肪が乗っているからです。
              </p>
              <p className="mt-2">
                つまり「腹筋を割る」作業の中身は、<span className="font-bold">体脂肪率を下げること</span>。そして体脂肪率を下げるのは、腹筋運動ではなく食事です。この記事では、何%で見え始めるのかと、そこまで<span className="font-bold">何kg落とせばいいのか</span>を計算して出します。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                体脂肪率ごとの見え方（男性）
              </h2>
              <div className="overflow-x-auto -mx-2 px-2 mt-3">
                <table className="w-full text-xs border-collapse">
                  <thead>
                    <tr className="bg-orange-50">
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
                        体脂肪率
                      </th>
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700">
                        見え方
                      </th>
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700">
                        補足
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {MEN_LOOK.map((row) => (
                      <tr key={row.percent}>
                        <td className="border border-gray-200 px-2 py-2 font-bold text-gray-800 whitespace-nowrap">
                          {row.percent}
                        </td>
                        <td className="border border-gray-200 px-2 py-2 text-gray-700">
                          {row.look}
                        </td>
                        <td className="border border-gray-200 px-2 py-2 text-gray-600">
                          {row.note}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-3">
                男性の目標は<span className="font-bold">12%前後</span>だと考えてください。ここが「割れて見える」の入口です。10%を切ると6つ見えますが、その水準は<span className="font-bold">食事を管理し続けないと維持できません</span>。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                体脂肪率ごとの見え方（女性）
              </h2>
              <p>
                女性は同じ見え方になる体脂肪率が<span className="font-bold">男性より8〜10%高い</span>ところにあります。胸やお尻、皮下に脂肪が付く仕組みが違うためで、体質や努力の差ではありません。
              </p>
              <div className="overflow-x-auto -mx-2 px-2 mt-3">
                <table className="w-full text-xs border-collapse">
                  <thead>
                    <tr className="bg-orange-50">
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
                        体脂肪率
                      </th>
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700">
                        見え方
                      </th>
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700">
                        補足
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {WOMEN_LOOK.map((row) => (
                      <tr key={row.percent}>
                        <td className="border border-gray-200 px-2 py-2 font-bold text-gray-800 whitespace-nowrap">
                          {row.percent}
                        </td>
                        <td className="border border-gray-200 px-2 py-2 text-gray-700">
                          {row.look}
                        </td>
                        <td className="border border-gray-200 px-2 py-2 text-gray-600">
                          {row.note || "—"}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-3">
                そして女性には、はっきり線を引いておくべき下限があります。<span className="font-bold">体脂肪率が15%を下回るとホルモンの分泌が乱れ、月経が止まることがあります。</span>体を動かすのに最低限必要な脂肪（必須脂肪）は男性で3〜5%、女性では8〜12%あると言われていて、<span className="font-bold">女性の「割れた腹筋」は、この下限のすぐ近く</span>にあります。
              </p>
              <p className="mt-2">
                目指すこと自体は否定しませんが、<span className="font-bold">通年で維持するものではありません</span>。競技者も試合前だけ作ります。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                そこまで何kg落とせばいいのか（計算）
              </h2>
              <p>
                ここからが本題です。<span className="font-bold">体重{EXAMPLE_WEIGHT}kg・体脂肪率{EXAMPLE_PERCENT}%</span>の人を例に計算します。この人の脂肪は{EXAMPLE_WEIGHT * EXAMPLE_PERCENT / 100}kg、<span className="font-bold">脂肪以外（筋肉・骨・水分）は{EXAMPLE_WEIGHT - (EXAMPLE_WEIGHT * EXAMPLE_PERCENT) / 100}kg</span>です。
              </p>
              <p className="mt-2">
                筋肉を落とさず脂肪だけを減らすと、この{EXAMPLE_WEIGHT - (EXAMPLE_WEIGHT * EXAMPLE_PERCENT) / 100}kgは変わりません。すると目標の体脂肪率ごとに、落とすべき脂肪の量が一意に決まります。
              </p>
              <div className="overflow-x-auto -mx-2 px-2 mt-3">
                <table className="w-full text-xs border-collapse">
                  <thead>
                    <tr className="bg-orange-50">
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
                        目標
                      </th>
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
                        落とす脂肪
                      </th>
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
                        必要なkcal
                      </th>
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
                        1日{DAILY_DEFICIT}kcal減で
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {TARGETS.map((target) => {
                      const loss = fatLossToReachPercent(
                        EXAMPLE_WEIGHT,
                        EXAMPLE_PERCENT,
                        target
                      );
                      return (
                        <tr key={target}>
                          <td className="border border-gray-200 px-2 py-2 font-bold text-gray-800 whitespace-nowrap">
                            {target}%
                          </td>
                          <td className="border border-gray-200 px-2 py-2 font-bold text-gray-800 whitespace-nowrap">
                            {loss}kg
                          </td>
                          <td className="border border-gray-200 px-2 py-2 text-gray-700 whitespace-nowrap">
                            {formatKcal(kcalForFatKg(loss))}kcal
                          </td>
                          <td className="border border-gray-200 px-2 py-2 text-gray-600 whitespace-nowrap">
                            約{daysToLoseFat(loss, DAILY_DEFICIT)}日
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              <p className="mt-3 text-xs text-gray-500">
                ※ 体脂肪1kg＝約{formatKcal(FAT_KCAL_PER_KG)}kcalで換算。落ちるのが全部脂肪だという前提の理論値なので、実際はもう少しかかります。
              </p>
              <p className="mt-3">
                <span className="font-bold">
                  {EXAMPLE_PERCENT}%から12%まで、落とす脂肪は
                  {fatLossToReachPercent(EXAMPLE_WEIGHT, EXAMPLE_PERCENT, 12)}kg。
                  1日{DAILY_DEFICIT}kcalの赤字なら約
                  {Math.round(
                    daysToLoseFat(
                      fatLossToReachPercent(EXAMPLE_WEIGHT, EXAMPLE_PERCENT, 12),
                      DAILY_DEFICIT
                    ) / 30
                  )}
                  ヶ月です。
                </span>
                腹筋が割れるまでにかかる時間は、根性の量ではなく、この引き算で決まります。
              </p>
              <p className="mt-2">
                逆に言えば、<span className="font-bold">体脂肪率を1%下げるだけでも1kg近い脂肪</span>（この体格なら
                {fatLossToReachPercent(EXAMPLE_WEIGHT, EXAMPLE_PERCENT, EXAMPLE_PERCENT - 1)}kg）
                を落とす必要があります。体組成計の数字が1週間で動かないのは普通のことです。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                腹筋運動を1000回しても割れない理由
              </h2>
              <p>
                「お腹の脂肪を落としたいから腹筋運動をする」は、残念ながら理屈が通っていません。<span className="font-bold">使った部位の脂肪が優先して落ちる（部分痩せ）という現象は確認されていない</span>からです。脂肪は全身から均等に落ちていき、どこから先に落ちるかは体質で決まります。
              </p>
              <p className="mt-2">
                消費カロリーで見るともっとはっきりします。腹筋運動を10分やって消えるカロリーは、せいぜいおにぎり半分ぶんです。上の表で必要だった
                {formatKcal(
                  kcalForFatKg(fatLossToReachPercent(EXAMPLE_WEIGHT, EXAMPLE_PERCENT, 12))
                )}
                kcalを腹筋運動だけで作るのは、現実的ではありません。
              </p>
              <p className="mt-2">
                自分の運動が何kcalになるかは
                <Link href="/calorie-calculator" className="text-orange-600 font-bold underline">
                  消費カロリー計算機
                </Link>
                で確認できます。数字を見ると、<span className="font-bold">運動で減らすより食事で作るほうが早い</span>のがすぐ分かるはずです。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                では腹筋のトレーニングは不要なのか
              </h2>
              <p>
                必要です。ただし<span className="font-bold">役割が違います</span>。
              </p>
              <p className="mt-2">
                脂肪が減って腹筋が見えてきたとき、<span className="font-bold">その腹筋に厚みがあるかどうかで見え方が変わります</span>。薄いまま体脂肪だけ落とすと、割れてはいるけれど平坦、という状態になります。腹筋運動は「脂肪を減らす作業」ではなく「見えたときの形を作る作業」です。
              </p>
              <p className="mt-2">
                そして<span className="font-bold">筋トレ全体は、落とした体重を戻さないために効きます</span>。食事制限だけで落とすと筋肉も一緒に減り、戻りやすい体になります。仕組みは
                <Link href="/column/diet-rebound-muscle" className="text-orange-600 font-bold underline">
                  リバウンドする理由と筋トレの関係
                </Link>
                に、代謝の実際の数字は
                <Link href="/column/metabolism" className="text-orange-600 font-bold underline">
                  筋トレで痩せる仕組み
                </Link>
                に書きました。
              </p>
            </section>

            <section className="bg-orange-50 border border-orange-100 rounded-xl p-4">
              <p className="font-bold text-orange-600 mb-2">
                筆者（筋トレ歴15年）の場合
              </p>
              <p className="text-xs leading-relaxed">
                私は体重90kg超から78kgまで、約1年で12kg落としました。1ヶ月あたり1kgのペースです。この記事の計算で言えば、1日あたり約
                {Math.round(kcalForFatKg(12) / 365)}kcalの赤字を1年続けた計算になります。
                <br />
                <br />
                正直に書くと、腹筋が見えるようになった時期に<span className="font-bold">腹筋運動を特別増やした記憶はありません</span>。やったのは食事の管理と、落とした体重を筋肉で支えることだけでした。大会に出るときの仕上げは別として、日常で「割れて見える」段階までは、ほぼ食事で決まります。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                体組成計の数字は、絶対値を信じない
              </h2>
              <p>
                家庭用の体組成計は、体に微弱な電流を流して脂肪の量を推定しています。脂肪は電気を通しにくく、筋肉や水分は通しやすい——その差から計算する仕組みです。
              </p>
              <p className="mt-2">
                つまり<span className="font-bold">体の水分量で数字が動きます</span>。起きた直後と入浴後、食事の前後で数%変わることも珍しくありません。
              </p>
              <p className="mt-2">
                なので使い方はこうです。<span className="font-bold">絶対値ではなく変化を見る。</span>測るのは毎回同じ条件（朝起きてトイレのあと、食事の前）で、日々の上下は無視して1〜2週間の平均で判断してください。20%が19%になったかどうかより、1ヶ月の平均が下向きかどうかのほうが正しい情報です。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                よくある質問
              </h2>
              <h3 className="font-bold text-gray-800 mt-5 mb-2">
                体脂肪率20%ですが腹筋が見えません。異常ですか？
              </h3>
              <p>
                正常です。男性で割れて見え始めるのは12%前後なので、20%で見えないのは当たり前です。見えないことではなく、<span className="font-bold">1ヶ月前より下がっているか</span>を見てください。
              </p>
              <h3 className="font-bold text-gray-800 mt-5 mb-2">
                お腹だけ落としたいのですが。
              </h3>
              <p>
                その方法はありません。脂肪は全身から落ち、お腹は<span className="font-bold">最後に落ちる場所</span>であることが多いです。お腹が変わり始めたときには、腕や顔はとっくに変わっています。
              </p>
              <h3 className="font-bold text-gray-800 mt-5 mb-2">
                どのくらいのペースで落とすのが安全ですか？
              </h3>
              <p>
                月に体重の2〜4%（体重{EXAMPLE_WEIGHT}kgなら1.4〜2.8kg）までが目安です。これ以上速いと筋肉が落ち、戻りやすくなります。1日{DAILY_DEFICIT}kcalの赤字は月{Math.round((DAILY_DEFICIT * 30) / FAT_KCAL_PER_KG * 10) / 10}kgほどのペースなので、ちょうどこの範囲に収まります。
              </p>
              <h3 className="font-bold text-gray-800 mt-5 mb-2">
                効果が見えるまでどのくらいかかりますか？
              </h3>
              <p>
                上の表のとおり、割れて見えるまでは月単位です。体の変化が出る順番は
                <Link href="/column/effect-timeline" className="text-orange-600 font-bold underline">
                  筋トレの効果はいつから出る？
                </Link>
                にまとめています。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                まとめ
              </h2>
              <ul className="space-y-2">
                <li>
                  ▸ 腹筋は<span className="font-bold">最初から割れている</span>。見えないのは上の脂肪のせい。
                </li>
                <li>
                  ▸ 見え始めるのは<span className="font-bold">男性12%前後・女性18%前後</span>。女性は男性より8〜10%高い位置。
                </li>
                <li>
                  ▸ 体重{EXAMPLE_WEIGHT}kg・{EXAMPLE_PERCENT}%の人が12%に届くには脂肪
                  {fatLossToReachPercent(EXAMPLE_WEIGHT, EXAMPLE_PERCENT, 12)}kg、
                  1日{DAILY_DEFICIT}kcalの赤字で
                  <span className="font-bold">
                    約
                    {Math.round(
                      daysToLoseFat(
                        fatLossToReachPercent(EXAMPLE_WEIGHT, EXAMPLE_PERCENT, 12),
                        DAILY_DEFICIT
                      ) / 30
                    )}
                    ヶ月
                  </span>
                  。
                </li>
                <li>
                  ▸ <span className="font-bold">部分痩せは起きない。</span>腹筋運動の役割は、見えたときの厚みを作ること。
                </li>
                <li>
                  ▸ 女性の15%以下は<span className="font-bold">月経が止まるリスクの領域</span>。通年で維持するものではない。
                </li>
              </ul>
              <p className="mt-2">
                やることは、腹筋運動の回数を増やすことではなく、赤字を作り続けることと、落とした体を筋肉で支えることです。今日のメニューは質問に答えれば出てくるので、続ける側に体力を使ってください。
              </p>
            </section>
          </div>
        </div>

        <RizapCta lead="体脂肪を落とす期間は、やることがはっきりしているぶん孤独です。食事の管理だけ人に任せる、という選択もあります。" />

        <ShareButtons
          url="https://sakutore.jp/column/abs-body-fat"
          title="腹筋が割れる体脂肪率は何%？男女別の見え方と必要な減量の計算"
        />
        <Link
          href="/gear"
          className="block bg-orange-50 hover:bg-orange-100 rounded-2xl p-4 mb-6 border-2 border-orange-200 transition-colors"
        >
          <div className="flex items-center gap-3">
            <span className="text-2xl flex-shrink-0">🏋️</span>
            <div>
              <p className="font-bold text-orange-600 text-sm">運営者厳選のおすすめギア</p>
              <p className="text-xs text-gray-500 mt-0.5">減量期を支えるプロテインを見る →</p>
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
