import Link from "next/link";
import ShareButtons from "@/components/ShareButtons";
import { pageMetadata } from "@/lib/metadata";
import AuthorBox from "@/components/AuthorBox";
import {
  LEVEL_STEP_PERIOD,
  MEN_WEIGHTS,
  formatRatio,
  levelForRatio,
  targetWeight,
  totalRows,
  benchRows,
  squatRows,
  deadliftRows,
  type Level,
} from "@/lib/strengthStandards";

export const metadata = pageMetadata({
  title: "BIG3合計◯kgはどのレベル？体重別の早見表（250〜700kg） - サクトレ",
  description:
    "BIG3合計は、同じ数字でも体重で意味が変わります。合計400kgは体重60kgなら上級者、体重100kgなら初心者です。合計250〜700kgが体重別に何レベルかの逆引き表と、次のレベルまであと何kg必要かを載せました。筋トレ歴15年・フィジーク大会入賞の筆者の実合計400kgの内訳つき。",
  path: "/column/big3-total",
});

// 検索されやすい合計値。一覧の行になる。
const TOTALS = [250, 300, 350, 400, 450, 500, 600, 700];

// 内訳の例に使う合計値と体重。中級者の比率で割り付ける。
const EXAMPLE_TOTAL = 450;
const EXAMPLE_WEIGHT = 100;

// 筆者の実数字（他記事と揃えてある）。
const AUTHOR_LIFTS = { bench: 120, squat: 120, deadlift: 160 };
const AUTHOR_TOTAL =
  AUTHOR_LIFTS.bench + AUTHOR_LIFTS.squat + AUTHOR_LIFTS.deadlift;
const AUTHOR_WEIGHT = 85;

// レベルごとの色分け。中級者から上を強調して、現在地が目で追えるようにする。
const levelClass = (level: Level | null) => {
  if (level === null) return "text-gray-400";
  if (level === "未経験" || level === "初心者") return "text-gray-600";
  return "font-bold text-orange-600";
};

export default function Big3TotalPage() {
  const middle = totalRows.find((r) => r.level === "中級者");
  const middleRatio = middle ? middle.ratio : 4.5;

  return (
    <main className="min-h-screen flex flex-col items-center px-4 py-8">
      <div className="max-w-md w-full animate-slideUp">
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <p className="text-xs text-orange-500 font-bold mb-2">コラム</p>
          <h1 className="text-xl font-bold text-gray-800 mb-6">
            BIG3合計◯kgはどのレベル？体重別の早見表（250〜700kg）
          </h1>

          <div className="space-y-6 text-sm text-gray-700 leading-relaxed">
            <section>
              <p>
                「BIG3合計400kg」がすごいのかどうかは、<span className="font-bold">その数字だけでは決まりません。</span>
              </p>
              <p className="mt-2">
                同じ400kgでも、<span className="font-bold">体重60kgの人なら上級者、体重100kgの人なら初心者</span>です。持ち上げる重さが同じでも、持ち上げている本人の大きさが違うからです。だから合計を見るときは、必ず体重で割ります。
              </p>
              <p className="mt-2">
                まず表で自分の位置を確認してください。<span className="font-bold">行が合計重量、列が体重</span>です。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                BIG3合計×体重別のレベル早見表
              </h2>
              <div className="overflow-x-auto -mx-2 px-2 mt-3">
                <table className="w-full text-xs border-collapse">
                  <thead>
                    <tr className="bg-orange-50">
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
                        合計
                      </th>
                      {MEN_WEIGHTS.map((weight) => (
                        <th
                          key={weight}
                          className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap"
                        >
                          {weight}kg
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {TOTALS.map((total) => (
                      <tr key={total}>
                        <td className="border border-gray-200 px-2 py-2 font-bold text-gray-800 whitespace-nowrap">
                          {total}kg
                        </td>
                        {MEN_WEIGHTS.map((weight) => {
                          const level = levelForRatio(totalRows, total / weight);
                          return (
                            <td
                              key={weight}
                              className={`border border-gray-200 px-2 py-2 whitespace-nowrap ${levelClass(level)}`}
                            >
                              {level ?? "—"}
                            </td>
                          );
                        })}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-3 text-xs text-gray-500">
                ※ 「—」は未経験の目安（体重×{formatRatio(totalRows[0].ratio)}）にまだ届いていない位置です。始めたばかりなら当然そこから始まります。
              </p>
              <p className="mt-3">
                表の見方でひとつだけ注意です。<span className="font-bold">横に読むと、同じ合計でも右に行くほどレベルが下がります。</span>体重が増えれば扱える重量も増えるのが普通なので、体重の重い人ほど高い合計を求められる、ということです。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                レベルの定義（体重の何倍か）
              </h2>
              <p>
                上の表は、次の体重比で判定しています。<span className="font-bold">合計が体重の{formatRatio(middleRatio)}倍で中級者</span>、と覚えておくと暗算できます。
              </p>
              <div className="overflow-x-auto -mx-2 px-2 mt-3">
                <table className="w-full text-xs border-collapse">
                  <thead>
                    <tr className="bg-orange-50">
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
                        レベル
                      </th>
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
                        体重比
                      </th>
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
                        体重{EXAMPLE_WEIGHT}kgなら
                      </th>
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
                        次まで
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {totalRows.map((row) => (
                      <tr key={row.level}>
                        <td className="border border-gray-200 px-2 py-2 font-bold text-gray-800 whitespace-nowrap">
                          {row.level}
                        </td>
                        <td className="border border-gray-200 px-2 py-2 text-gray-700 whitespace-nowrap">
                          ×{formatRatio(row.ratio)}
                        </td>
                        <td className="border border-gray-200 px-2 py-2 text-gray-700 whitespace-nowrap">
                          {targetWeight(EXAMPLE_WEIGHT, row.ratio)}kg
                        </td>
                        <td className="border border-gray-200 px-2 py-2 text-gray-600 whitespace-nowrap">
                          {LEVEL_STEP_PERIOD[row.level] ?? "—"}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-3">
                「次まで」は、そのレベルから1つ上に上がるまでにかかる期間の目安です。<span className="font-bold">中級者から上級者は3〜5年</span>。合計で言えば体重
                {EXAMPLE_WEIGHT}kgの人が{targetWeight(EXAMPLE_WEIGHT, middleRatio)}kgから
                {targetWeight(EXAMPLE_WEIGHT, 5.75)}kgへ、
                <span className="font-bold">
                  {Math.round(targetWeight(EXAMPLE_WEIGHT, 5.75) - targetWeight(EXAMPLE_WEIGHT, middleRatio))}kg
                </span>
                積み増す作業になります。年単位になるのが普通です。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                合計{EXAMPLE_TOTAL}kgの「普通の内訳」
              </h2>
              <p>
                合計が同じでも、内訳は人によって違います。ただし<span className="font-bold">バランスが取れている場合の目安</span>はあります。中級者の比率（ベンチ×1.0／スクワット×1.5／デッドリフト×2.0）で合計
                {EXAMPLE_TOTAL}kgを割り付けると、こうなります。
              </p>
              <div className="overflow-x-auto -mx-2 px-2 mt-3">
                <table className="w-full text-xs border-collapse">
                  <thead>
                    <tr className="bg-orange-50">
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
                        種目
                      </th>
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
                        比率
                      </th>
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
                        合計{EXAMPLE_TOTAL}kgなら
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { name: "ベンチプレス", rows: benchRows },
                      { name: "スクワット", rows: squatRows },
                      { name: "デッドリフト", rows: deadliftRows },
                    ].map(({ name, rows }) => {
                      const ratio =
                        rows.find((r) => r.level === "中級者")?.ratio ?? 0;
                      return (
                        <tr key={name}>
                          <td className="border border-gray-200 px-2 py-2 font-bold text-gray-800 whitespace-nowrap">
                            {name}
                          </td>
                          <td className="border border-gray-200 px-2 py-2 text-gray-700 whitespace-nowrap">
                            ×{formatRatio(ratio)}
                          </td>
                          <td className="border border-gray-200 px-2 py-2 font-bold text-gray-800 whitespace-nowrap">
                            {Math.round((EXAMPLE_TOTAL * ratio) / middleRatio)}kg
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              <p className="mt-3">
                自分の内訳をこの比率と見比べると、<span className="font-bold">どの種目が足を引っ張っているか</span>が分かります。合計を伸ばしたいなら、得意種目をさらに伸ばすより、この表から一番離れている種目を上げるほうが速いです。
              </p>
            </section>

            <section className="bg-orange-50 border border-orange-100 rounded-xl p-4">
              <p className="font-bold text-orange-600 mb-2">
                筆者（筋トレ歴15年・フィジーク大会入賞）の合計{AUTHOR_TOTAL}kg
              </p>
              <p className="text-xs leading-relaxed">
                私の自己ベストはベンチ{AUTHOR_LIFTS.bench}kg・スクワット
                {AUTHOR_LIFTS.squat}kg・デッドリフト{AUTHOR_LIFTS.deadlift}kg、合計
                <span className="font-bold">{AUTHOR_TOTAL}kg</span>です。体重
                {AUTHOR_WEIGHT}kg前後の頃の数字なので、体重比は約
                {(AUTHOR_TOTAL / AUTHOR_WEIGHT).toFixed(1)}倍。上の表で言えば
                <span className="font-bold">
                  {levelForRatio(totalRows, AUTHOR_TOTAL / AUTHOR_WEIGHT) ?? "—"}
                </span>
                の位置です。
                <br />
                <br />
                ただし内訳は上の「普通の内訳」から大きく外れています。<span className="font-bold">ベンチとスクワットが同じ{AUTHOR_LIFTS.squat}kg</span>で、本来ならスクワットはベンチの1.5倍ほしいところです。フィジーク志向で上半身を優先してきた結果で、<span className="font-bold">合計はその歪みを隠してしまいます</span>。合計が伸びて喜んでいるときほど、種目別の表に戻ったほうがいいです（
                <Link href="/column/strength-standards" className="text-orange-600 font-bold underline">
                  BIG3の重量目安一覧
                </Link>
                ）。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                よくある質問
              </h2>
              <h3 className="font-bold text-gray-800 mt-5 mb-2">
                合計はどうやって数えますか？1日で3種目やる必要がありますか？
              </h3>
              <p>
                <span className="font-bold">別の日の記録を足して構いません。</span>この表は「今のあなたの力量」を見るためのものなので、同じ時期の自己ベストなら足して問題ありません。1回しか挙がらない重量（1RM）が分からない場合は、
                <Link href="/rm-calculator" className="text-orange-600 font-bold underline">
                  1RM換算ツール
                </Link>
                で回数から出せます。
              </p>
              <h3 className="font-bold text-gray-800 mt-5 mb-2">
                ベルトやリストラップを使った重量で数えていいですか？
              </h3>
              <p>
                自分の中で<span className="font-bold">基準を固定していれば構いません。</span>ただし比べる相手がいるときは条件を揃えてください。競技の記録はベルト有りが普通ですが、素手の数字と混ぜると、伸びているのか装備が変わっただけなのか分からなくなります。
              </p>
              <h3 className="font-bold text-gray-800 mt-5 mb-2">
                デッドリフトのフォームで合計が変わりませんか？
              </h3>
              <p>
                変わります。スモウやトラップバーは同じ人でも数字が上がりやすく、プレートの直径でも可動域が変わります。ここを揃えないと合計の比較は成立しません（
                <Link href="/column/deadlift-average" className="text-orange-600 font-bold underline">
                  デッドリフトの平均は何kg？
                </Link>
                ）。スクワットの深さも同じ問題を持っています（
                <Link href="/column/squat-average" className="text-orange-600 font-bold underline">
                  スクワットの平均は何kg？
                </Link>
                ）。
              </p>
              <h3 className="font-bold text-gray-800 mt-5 mb-2">
                女性の合計の目安はありますか？
              </h3>
              <p>
                この表は男性の体重比です。女性は種目ごとに男性との差が違う（ベンチで最も差が出て、デッドリフトでは差が小さい）ので、<span className="font-bold">合計でまとめると実態からずれます。</span>女性は種目別の表を見てください（
                <Link href="/weight-checker" className="text-orange-600 font-bold underline">
                  重量チェッカー
                </Link>
                で男女別に出せます）。
              </p>
              <h3 className="font-bold text-gray-800 mt-5 mb-2">
                合計を最短で伸ばすには、どの種目をやるべきですか？
              </h3>
              <p>
                <span className="font-bold">デッドリフト</span>です。3種目の中で最も重い重量を扱えるぶん、同じ割合の伸びでも合計への上乗せが大きくなります。始めて半年ほどで体重の1.5倍に届く人も珍しくありません。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                まとめ
              </h2>
              <ul className="space-y-2">
                <li>
                  ▸ 合計は<span className="font-bold">体重で割ってはじめて意味を持つ</span>。同じ400kgでも体重60kgと100kgでは別のレベル
                </li>
                <li>
                  ▸ 覚えるのは1つだけ。<span className="font-bold">合計が体重の{formatRatio(middleRatio)}倍で中級者</span>
                </li>
                <li>
                  ▸ 中級者から上級者は<span className="font-bold">{LEVEL_STEP_PERIOD["中級者"]}</span>。合計で数十kgの積み増しになる
                </li>
                <li>
                  ▸ <span className="font-bold">合計は内訳を隠す。</span>伸ばすなら「普通の内訳」から一番離れている種目から
                </li>
                <li>
                  ▸ 比べるときは<span className="font-bold">深さ・フォーム・装備の条件を揃える</span>
                </li>
              </ul>
              <p className="mt-2">
                種目ごとの現在地は
                <Link href="/column/strength-standards" className="text-orange-600 font-bold underline">
                  BIG3の重量目安一覧
                </Link>
                に、体重を入れて目標重量を出すなら
                <Link href="/weight-checker" className="text-orange-600 font-bold underline">
                  重量チェッカー
                </Link>
                が早いです。
              </p>
            </section>
          </div>
        </div>

        <ShareButtons
          url="https://sakutore.jp/column/big3-total"
          title="BIG3合計◯kgはどのレベル？体重別の早見表（250〜700kg）"
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
