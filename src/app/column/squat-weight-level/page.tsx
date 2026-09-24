import Link from "next/link";
import ShareButtons from "@/components/ShareButtons";
import { pageMetadata } from "@/lib/metadata";
import AuthorBox from "@/components/AuthorBox";
import {
  LEVEL_STEP_PERIOD,
  MEN_WEIGHTS,
  formatRatio,
  levelForRatio,
  squatRows,
  benchRows,
  targetWeight,
  type Level,
} from "@/lib/strengthStandards";

export const metadata = pageMetadata({
  title: "スクワット◯kgはすごい？体重別のレベル早見表（60〜200kg） - サクトレ",
  description:
    "スクワット140kgがすごいかどうかは体重で変わります。体重60kgなら上級者、体重100kgなら初心者です。60〜200kgが体重別に何レベルかの逆引き表と、次のレベルまであと何kgかを掲載。深さ（パラレル）の条件を揃えたうえで、自分の現在地を確認できます。",
  path: "/column/squat-weight-level",
});

// 検索で実際に打ち込まれている重量帯。表の行になる。
const WEIGHTS = [60, 80, 100, 120, 140, 160, 180, 200];

// 「140kgはどうなのか」を文章で答えるときの基準値。
const FOCUS_WEIGHT = 140;

// 筆者の実数字（他記事と揃えてある）。
const AUTHOR_SQUAT = 120;
const AUTHOR_BENCH = 120;
const AUTHOR_BODY_WEIGHT = 85;

const levelClass = (level: Level | null) => {
  if (level === null) return "text-gray-400";
  if (level === "未経験" || level === "初心者") return "text-gray-600";
  return "font-bold text-orange-600";
};

export default function SquatWeightLevelPage() {
  const beginner = squatRows.find((r) => r.level === "初心者");
  const middle = squatRows.find((r) => r.level === "中級者");
  const beginnerRatio = beginner ? beginner.ratio : 1.25;
  const middleRatio = middle ? middle.ratio : 1.5;
  const benchMiddle = benchRows.find((r) => r.level === "中級者");
  const benchMiddleRatio = benchMiddle ? benchMiddle.ratio : 1.0;
  const authorRatio = AUTHOR_SQUAT / AUTHOR_BODY_WEIGHT;

  return (
    <main className="min-h-screen flex flex-col items-center px-4 py-8">
      <div className="max-w-md w-full animate-slideUp">
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <p className="text-xs text-orange-500 font-bold mb-2">コラム</p>
          <h1 className="text-xl font-bold text-gray-800 mb-6">
            スクワット◯kgはすごい？体重別のレベル早見表（60〜200kg）
          </h1>

          <div className="space-y-6 text-sm text-gray-700 leading-relaxed">
            <section>
              <p>
                「スクワット{FOCUS_WEIGHT}kg」がすごいのかどうかは、<span className="font-bold">その数字だけでは決まりません。</span>体重
                {MEN_WEIGHTS[1]}kgの人の{FOCUS_WEIGHT}kgと、体重
                {MEN_WEIGHTS[MEN_WEIGHTS.length - 1]}kgの人の{FOCUS_WEIGHT}kgは、まったく別の意味を持ちます。
              </p>
              <p className="mt-2">
                スクワットの目安は<span className="font-bold">体重の何倍を挙げられるか</span>で決まるからです。先に表を出します。<span className="font-bold">行が挙げた重量、列が体重</span>です。自分の交点を探してください。
              </p>
              <p className="mt-2 text-xs text-gray-500">
                ※ 条件をそろえます。<span className="font-bold">バーベルを担ぐバックスクワット・太ももが床と平行（パラレル）・1回だけ挙がる重量（1RM）</span>の数字です。ハーフやスミスマシン、レッグプレスの数字は持ち込まないでください（
                <Link href="/column/squat-average" className="text-orange-600 font-bold underline">
                  深さで数字がどれだけ変わるか
                </Link>
                ）。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                スクワットの重量×体重別レベル早見表
              </h2>
              <div className="overflow-x-auto -mx-2 px-2 mt-3">
                <table className="w-full text-xs border-collapse">
                  <thead>
                    <tr className="bg-orange-50">
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
                        挙げた重量
                      </th>
                      {MEN_WEIGHTS.map((bw) => (
                        <th
                          key={bw}
                          className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap"
                        >
                          {bw}kg
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {WEIGHTS.map((weight) => (
                      <tr key={weight}>
                        <td className="border border-gray-200 px-2 py-2 font-bold text-gray-800 whitespace-nowrap">
                          {weight}kg
                        </td>
                        {MEN_WEIGHTS.map((bw) => {
                          const level = levelForRatio(squatRows, weight / bw);
                          return (
                            <td
                              key={bw}
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
                ※ 「—」は未経験の目安（体重×{formatRatio(squatRows[0].ratio)}）に届いていない位置です。始めたばかりなら当然そこからです。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                スクワット{FOCUS_WEIGHT}kgは、どのくらいなのか
              </h2>
              <p>
                いちばん検索されている数字なので、文章でも答えておきます。{FOCUS_WEIGHT}kgを体重別に見ると、こうなります。
              </p>
              <ul className="mt-2 space-y-1">
                {[60, 70, 80, 90, 100].map((bw) => {
                  const level = levelForRatio(squatRows, FOCUS_WEIGHT / bw);
                  return (
                    <li key={bw}>
                      ▸ 体重{bw}kg → 体重比
                      <span className="font-bold">×{(FOCUS_WEIGHT / bw).toFixed(2)}</span>
                      で<span className="font-bold">{level ?? "未経験の手前"}</span>
                    </li>
                  );
                })}
              </ul>
              <p className="mt-3">
                つまり<span className="font-bold">同じ{FOCUS_WEIGHT}kgでも、体重が軽い人ほど価値が高い</span>という評価になります。体重を増やせば扱える重量は増えるのが普通なので、重い人にはそのぶん高い数字が求められる、ということです。
              </p>
              <p className="mt-2">
                なお、ジムで見かける「{FOCUS_WEIGHT}kgを挙げている人」の多くは体重70〜85kgあたりです。その体重帯では
                <span className="font-bold">上級者〜中級者の上のほう</span>にあたり、<span className="font-bold">続けていれば届く範囲</span>ではあります。数年単位ですが、特別な才能が要る数字ではありません。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                「60kg・80kgで十分ですか」への答え
              </h2>
              <p>
                これもよく検索されています。答えは<span className="font-bold">目的によります</span>が、位置だけははっきりしています。
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
                        体重70kgなら
                      </th>
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
                        次まで
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {squatRows.map((row) => (
                      <tr key={row.level}>
                        <td className="border border-gray-200 px-2 py-2 font-bold text-gray-800 whitespace-nowrap">
                          {row.level}
                        </td>
                        <td className="border border-gray-200 px-2 py-2 text-gray-700 whitespace-nowrap">
                          ×{formatRatio(row.ratio)}
                        </td>
                        <td className="border border-gray-200 px-2 py-2 text-gray-700 whitespace-nowrap">
                          {targetWeight(70, row.ratio)}kg
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
                体重70kgの人にとって、<span className="font-bold">60kgは未経験の範囲、80kgでもまだ初心者（×{formatRatio(beginnerRatio)}＝
                {targetWeight(70, beginnerRatio)}kg）に届きません。</span>ただしこれは「足りない」という意味ではありません。
              </p>
              <p className="mt-2">
                健康のため・脚の形を変えるためなら、<span className="font-bold">60〜80kgを正しい深さで続けているほうが、雑な120kgより価値があります。</span>数字を追う必要があるのは、数字を目的にしている場合だけです。お尻や脚の見た目が目的なら、重量より動きの質と種目の選び方のほうが効きます（
                <Link href="/column/hip-training" className="text-orange-600 font-bold underline">
                  お尻を鍛える筋トレ
                </Link>
                ）。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                ベンチプレスとの比率で、偏りが分かる
              </h2>
              <p>
                スクワットの数字が妥当かどうかは、<span className="font-bold">ベンチプレスと比べる</span>とよく分かります。目安の比率では、中級者のスクワットは体重×{formatRatio(middleRatio)}、ベンチは体重×{formatRatio(benchMiddleRatio)}。つまり
                <span className="font-bold">スクワットはベンチの1.5倍前後</span>になるのが普通です。
              </p>
              <p className="mt-2">
                ここから外れている場合、外れ方に意味があります。スクワットがベンチの1.2倍以下なら<span className="font-bold">下半身が遅れている</span>、2倍以上なら<span className="font-bold">上半身が遅れている</span>と読めます。3種目のバランスは
                <Link href="/column/big3-total" className="text-orange-600 font-bold underline">
                  BIG3合計◯kgはどのレベル？
                </Link>
                で合計から見る方法もあります。
              </p>
            </section>

            <section className="bg-orange-50 border border-orange-100 rounded-xl p-4">
              <p className="font-bold text-orange-600 mb-2">
                筆者（筋トレ歴15年・フィジーク大会入賞）は{AUTHOR_SQUAT}kgで止まっている
              </p>
              <p className="text-xs leading-relaxed">
                私のスクワットの自己ベストは<span className="font-bold">{AUTHOR_SQUAT}kg</span>。体重
                {AUTHOR_BODY_WEIGHT}kg前後の頃の数字なので体重比は約
                {authorRatio.toFixed(2)}で、上の表では
                <span className="font-bold">{levelForRatio(squatRows, authorRatio) ?? "—"}</span>
                の欄です。15年やってこの位置なので、正直に言えば<span className="font-bold">自慢できる数字ではありません</span>。
                <br />
                <br />
                しかもベンチプレスも同じ{AUTHOR_BENCH}kgで、さきほどの「スクワットはベンチの1.5倍」から大きく外れています。本来なら
                {Math.round(AUTHOR_BENCH * 1.5)}kg前後あっていい計算です。理由ははっきりしていて、フィジーク志向で上半身を優先したこと、そして<span className="font-bold">スクワットは潰れたときの逃げ場を自分で用意しないと限界に触れられない</span>種目だからです。セーフティバーの高さを合わせる手間を惜しむと、そこで頭打ちになります。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                よくある質問
              </h2>
              <h3 className="font-bold text-gray-800 mt-5 mb-2">
                ハーフスクワットの重量で見ていいですか？
              </h3>
              <p>
                だめです。<span className="font-bold">深さが浅いほど重い重量が挙がります。</span>同じ人でもハーフとパラレルで数十kg変わるので、この表に持ち込むと自分の位置を見誤ります。基準はパラレルです。
              </p>
              <h3 className="font-bold text-gray-800 mt-5 mb-2">
                スミスマシンやレッグプレスの数字は使えますか？
              </h3>
              <p>
                使えません。スミスマシンは軌道が固定されているぶんバランスを取る必要がなく、レッグプレスは体重を支えない姿勢で押します。<span className="font-bold">どちらもフリーウェイトより重い数字が出ます。</span>
              </p>
              <h3 className="font-bold text-gray-800 mt-5 mb-2">
                1回の限界（1RM）を測るのが怖いのですが。
              </h3>
              <p>
                測らなくて構いません。<span className="font-bold">10回できる重量から換算できます。</span>
                <Link href="/rm-calculator" className="text-orange-600 font-bold underline">
                  1RM換算ツール
                </Link>
                に回数と重量を入れてください。スクワットで限界に挑戦するのは、セーフティバーの設定ができている環境だけにしてください。
              </p>
              <h3 className="font-bold text-gray-800 mt-5 mb-2">
                女性の場合はどう見ればいいですか？
              </h3>
              <p>
                この表は男性の体重比です。女性は体重比の目安が別で、中級者で体重×1.1、上級者で×1.5（男性の中級者と同じ比率）になります。
                <Link href="/weight-checker" className="text-orange-600 font-bold underline">
                  重量チェッカー
                </Link>
                で男女別に出せます。
              </p>
              <h3 className="font-bold text-gray-800 mt-5 mb-2">
                体重を増やせばレベルが下がるということですか？
              </h3>
              <p>
                表の上ではそうなります。ただし体重が増えれば扱える重量も上がるので、<span className="font-bold">増量しながら重量が伸びていれば位置は維持されます。</span>減量中に重量だけ維持できた場合は、体重比が上がるぶん位置が上がります。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                まとめ
              </h2>
              <ul className="space-y-2">
                <li>
                  ▸ スクワットの評価は<span className="font-bold">体重比</span>。同じ{FOCUS_WEIGHT}kgでも体重で意味が変わる
                </li>
                <li>
                  ▸ 覚えるのは2つ。<span className="font-bold">体重×{formatRatio(beginnerRatio)}で初心者、×{formatRatio(middleRatio)}で中級者</span>
                </li>
                <li>
                  ▸ 比べる前に<span className="font-bold">深さをパラレルに固定する</span>。ハーフ・スミス・レッグプレスの数字は別物
                </li>
                <li>
                  ▸ <span className="font-bold">スクワットはベンチの1.5倍前後</span>が目安。外れ方で弱点が分かる
                </li>
                <li>
                  ▸ 60〜80kgでも、目的が健康や見た目なら<span className="font-bold">それで足りている</span>
                </li>
              </ul>
              <p className="mt-2">
                体重別・レベル別の全体像は
                <Link href="/column/squat-average" className="text-orange-600 font-bold underline">
                  スクワットの平均は何kg？
                </Link>
                に、BIG3全体の位置づけは
                <Link href="/column/strength-standards" className="text-orange-600 font-bold underline">
                  BIG3の重量目安一覧
                </Link>
                にまとめています。
              </p>
            </section>
          </div>
        </div>

        <ShareButtons
          url="https://sakutore.jp/column/squat-weight-level"
          title="スクワット◯kgはすごい？体重別のレベル早見表（60〜200kg）"
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
