import Link from "next/link";
import ShareButtons from "@/components/ShareButtons";
import GearPick from "@/components/GearPick";
import { pageMetadata } from "@/lib/metadata";
import AuthorBox from "@/components/AuthorBox";
import {
  MEN_WEIGHTS,
  deadliftRows,
  estimate1RM,
  formatRatio,
  levelForRatio,
  targetWeight,
  type Level,
} from "@/lib/strengthStandards";

export const metadata = pageMetadata({
  title: "デッドリフト◯kgはすごい？重量と回数で分かるレベル判定表 - サクトレ",
  description:
    "デッドリフト100kgがすごいかは体重で決まります。体重50kgなら中級者、60kgなら初心者、70kgではまだ初心者の手前です。60〜250kgのレベル判定表と、「90kgを5回」のような回数込みの記録から何レベルかを出す表つき。初心者・中級者の目標重量も体重ごとに載せています。",
  path: "/column/deadlift-weight-level",
});

// 検索で打ち込まれている重量帯。判定表の行になる。
const WEIGHTS = [60, 80, 100, 120, 140, 160, 180, 200, 250];

// 回数込みの表。Epley式は10回を超えると誤差が大きくなるので10回で止める。
const REP_WEIGHTS = [60, 70, 80, 90, 100, 120, 140];
const REPS = [1, 3, 5, 8, 10];

// いちばん検索されている「90kgを5回」を例として固定する。
const EXAMPLE = { weight: 90, reps: 5 };

// 筆者の実数字（他記事と揃えてある）。
const AUTHOR = { deadlift: 160, bodyWeight: 85 };

const levelClass = (level: Level | null) => {
  if (level === null) return "text-gray-400";
  if (level === "未経験" || level === "初心者") return "text-gray-600";
  return "font-bold text-orange-600";
};

const ratioOf = (level: Level) =>
  deadliftRows.find((r) => r.level === level)?.ratio ?? 0;

export default function DeadliftWeightLevelPage() {
  const exampleMax = estimate1RM(EXAMPLE.weight, EXAMPLE.reps);
  const beginner = ratioOf("初心者");
  const middle = ratioOf("中級者");
  const authorRatio = AUTHOR.deadlift / AUTHOR.bodyWeight;

  return (
    <main className="min-h-screen flex flex-col items-center px-4 py-8">
      <div className="max-w-md w-full animate-slideUp">
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <p className="text-xs text-orange-500 font-bold mb-2">コラム</p>
          <h1 className="text-xl font-bold text-gray-800 mb-6">
            デッドリフト◯kgはすごい？重量と回数で分かるレベル判定表
          </h1>

          <div className="space-y-6 text-sm text-gray-700 leading-relaxed">
            <section>
              <p>
                「デッドリフト100kg」がすごいかどうかは、<span className="font-bold">体重を聞かないと答えられません。</span>体重50kgの人なら中級者、体重70kgの人ならまだ初心者の手前です。同じ100kgでも、持ち上げている本人の大きさで意味が変わります。
              </p>
              <p className="mt-2">
                この記事では、<span className="font-bold">手元の数字から自分のレベルを引く</span>ことだけに絞ります。挙げた重量で引く表と、「90kgを5回」のような回数込みの記録で引く表の2つを用意しました。
              </p>
              <p className="mt-2 text-xs text-gray-500">
                ※ 条件をそろえます。<span className="font-bold">床から引くコンベンショナル（足幅は腰幅）・1回だけ挙がる重量（1RM）</span>での判定です。スモウやトラップバーは同じ人でも数字が上がるので、この表には持ち込まないでください（
                <Link href="/column/deadlift-average" className="text-orange-600 font-bold underline">
                  フォームで数字がどれだけ変わるか
                </Link>
                ）。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                挙げた重量から引くレベル判定表
              </h2>
              <p>
                <span className="font-bold">行が挙げた重量、列が体重</span>です。自分の交点を探してください。
              </p>
              <div className="overflow-x-auto -mx-2 px-2 mt-3">
                <table className="w-full text-xs border-collapse">
                  <thead>
                    <tr className="bg-orange-50">
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
                        重量
                      </th>
                      {MEN_WEIGHTS.map((bw) => (
                        <th
                          key={bw}
                          className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap"
                        >
                          体重{bw}
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
                          const level = levelForRatio(deadliftRows, weight / bw);
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
                ※ 「—」は未経験の目安（体重×{formatRatio(deadliftRows[0].ratio)}）にまだ届いていない位置です。始めたばかりなら当然そこからです。
              </p>
              <p className="mt-3">
                判定は「体重の何倍を引けたか」で決めています。境目は<span className="font-bold">初心者が体重×{formatRatio(beginner)}、中級者が体重×{formatRatio(middle)}</span>です。デッドリフトは3種目でいちばん重い重量を扱えるので、ベンチプレスやスクワットより境目の数字が大きくなります。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                「{EXAMPLE.weight}kgを{EXAMPLE.reps}回」のような記録から引く
              </h2>
              <p>
                1回だけの限界に挑戦している人は多くありません。ふだんの記録は「◯kgを◯回」のはずです。その記録を<span className="font-bold">1回だけ挙がる重量（1RM）に直してから</span>上の表に当てます。直した値がこちらです。
              </p>
              <div className="overflow-x-auto -mx-2 px-2 mt-3">
                <table className="w-full text-xs border-collapse">
                  <thead>
                    <tr className="bg-orange-50">
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
                        重量＼回数
                      </th>
                      {REPS.map((reps) => (
                        <th
                          key={reps}
                          className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap"
                        >
                          {reps}回
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {REP_WEIGHTS.map((weight) => (
                      <tr key={weight}>
                        <td className="border border-gray-200 px-2 py-2 font-bold text-gray-800 whitespace-nowrap">
                          {weight}kg
                        </td>
                        {REPS.map((reps) => (
                          <td
                            key={reps}
                            className={`border border-gray-200 px-2 py-2 whitespace-nowrap ${
                              weight === EXAMPLE.weight && reps === EXAMPLE.reps
                                ? "font-bold text-orange-600 bg-orange-50"
                                : "text-gray-700"
                            }`}
                          >
                            {estimate1RM(weight, reps)}kg
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-3 text-xs text-gray-500">
                ※ Epley式（1RM＝重量×(1＋回数÷30)）で推定しています。
                <Link href="/rm-calculator" className="text-orange-600 font-bold underline">
                  1RM換算ツール
                </Link>
                と同じ式です。10回を超える記録は誤差が大きくなるので載せていません。
              </p>
              <p className="mt-3">
                たとえば<span className="font-bold">
                  {EXAMPLE.weight}kgを{EXAMPLE.reps}回なら、1RMは約{exampleMax}kg
                </span>
                です。これを体重別に判定すると、こうなります。
              </p>
              <ul className="mt-2 space-y-1">
                {[50, 60, 70, 80].map((bw) => {
                  const level = levelForRatio(deadliftRows, exampleMax / bw);
                  return (
                    <li key={bw}>
                      ▸ 体重{bw}kg → 体重比×{(exampleMax / bw).toFixed(2)}で
                      <span className="font-bold">{level ?? "未経験の手前"}</span>
                    </li>
                  );
                })}
              </ul>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                初心者・中級者の目標は何kgか
              </h2>
              <p>
                逆に「次はどこを目指せばいいか」を知りたい人向けに、境目の重量を体重ごとに並べます。
              </p>
              <div className="overflow-x-auto -mx-2 px-2 mt-3">
                <table className="w-full text-xs border-collapse">
                  <thead>
                    <tr className="bg-orange-50">
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
                        体重
                      </th>
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
                        初心者（×{formatRatio(beginner)}）
                      </th>
                      <th className="border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap">
                        中級者（×{formatRatio(middle)}）
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {MEN_WEIGHTS.map((bw) => (
                      <tr key={bw}>
                        <td className="border border-gray-200 px-2 py-2 font-bold text-gray-800 whitespace-nowrap">
                          {bw}kg
                        </td>
                        <td className="border border-gray-200 px-2 py-2 text-gray-700 whitespace-nowrap">
                          {targetWeight(bw, beginner)}kg
                        </td>
                        <td className="border border-gray-200 px-2 py-2 font-bold text-orange-600 whitespace-nowrap">
                          {targetWeight(bw, middle)}kg
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-3">
                デッドリフトは<span className="font-bold">BIG3でいちばん伸びが速い</span>種目です。始めて半年ほどで初心者の欄（体重×{formatRatio(beginner)}）に届く人は珍しくありません。中級者（体重×{formatRatio(middle)}）は、ここからが本番という位置です。
              </p>
              <p className="mt-2">
                始めたばかりの人は、表の数字を追う前に<span className="font-bold">背中が丸まらない重量</span>で動きを覚えてください。軽いプレートは直径が小さく、バーが低い位置から始まるぶん不利になるという落とし穴もあります（
                <Link href="/column/deadlift-average" className="text-orange-600 font-bold underline">
                  デッドリフトの平均は何kg？
                </Link>
                で詳しく書いています）。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                握力とベルトで止まっていないか
              </h2>
              <p>
                重量が伸びてくると、<span className="font-bold">背中より先に手が離れる</span>段階が来ます。このとき判定表の数字は、背中の力ではなく握力の数字になっています。
              </p>
              <p className="mt-2">
                パワーグリップやストラップを使った記録は、ズルではありません。自分の中で「使う／使わない」を固定して記録していれば、伸びたかどうかは正しく比べられます。腰まわりを固めるベルトも同じ考え方です。
              </p>
              <GearPick
                placement="deadlift-weight-level-grip-belt"
                lead="筆者が使っているのはALLOUTのパワーグリップとベルトです。握力で止まっているなら、グリップから揃えるのが先です。"
                productIds={["alloutPowerGrip", "alloutNylonBelt"]}
              />
            </section>

            <section className="bg-orange-50 border border-orange-100 rounded-xl p-4">
              <p className="font-bold text-orange-600 mb-2">
                筆者（筋トレ歴15年・フィジーク大会入賞）の{AUTHOR.deadlift}kg
              </p>
              <p className="text-xs leading-relaxed">
                私のデッドリフトの自己ベストは<span className="font-bold">{AUTHOR.deadlift}kg</span>。体重
                {AUTHOR.bodyWeight}kg前後の頃の数字なので体重比は約{authorRatio.toFixed(2)}で、判定表では
                <span className="font-bold">{levelForRatio(deadliftRows, authorRatio) ?? "—"}</span>
                の欄、中級者（×{formatRatio(middle)}）のあと少し手前です。
                <br />
                <br />
                フィジーク志向で下半身の最大重量は追ってこなかったので、正直に言えば狙って出した数字ではありません。それでもここまで来たのは、<span className="font-bold">背中を鍛えていればデッドリフトは勝手についてくる</span>種目だからだと思っています。ベンチプレスやスクワットと比べて、「何もしていないのに伸びた」と感じやすい種目です。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                よくある質問
              </h2>
              <h3 className="font-bold text-gray-800 mt-5 mb-2">
                デッドリフトは体重の何倍が目安ですか？
              </h3>
              <p>
                初心者で<span className="font-bold">体重×{formatRatio(beginner)}</span>、中級者で<span className="font-bold">体重×{formatRatio(middle)}</span>です。上級者はその上の×{formatRatio(ratioOf("上級者"))}。BIG3の中ではいちばん大きな倍率になります。3種目の比率の関係は
                <Link href="/column/big3-balance" className="text-orange-600 font-bold underline">
                  BIG3のバランス診断
                </Link>
                にまとめました。
              </p>
              <h3 className="font-bold text-gray-800 mt-5 mb-2">
                スモウやトラップバーの記録で判定していいですか？
              </h3>
              <p>
                だめです。<span className="font-bold">同じ人でもフォームによって数字が上がる</span>ので、この表で判定すると位置を高く見積もってしまいます。床から引くコンベンショナルの数字で当ててください。
              </p>
              <h3 className="font-bold text-gray-800 mt-5 mb-2">
                ラックプル（膝の高さから引く）の重量は？
              </h3>
              <p>
                別の種目として扱ってください。可動域が半分ほどになるぶん、床から引くより大幅に重い数字が出ます。
              </p>
              <h3 className="font-bold text-gray-800 mt-5 mb-2">
                翌日に腰が痛いのですが、続けていいですか？
              </h3>
              <p>
                背中やお尻、もも裏の筋肉痛なら普通です。<span className="font-bold">腰の一点が刺すように痛む・しびれる</span>場合は筋肉痛ではないので、いったん止めてください。判断の目安は
                <Link href="/column/muscle-soreness" className="text-orange-600 font-bold underline">
                  筋肉痛でも筋トレしていい？
                </Link>
                にあります。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-orange-500 text-base mb-3">
                まとめ
              </h2>
              <ul className="space-y-2">
                <li>
                  ▸ デッドリフトの評価は<span className="font-bold">体重の何倍か</span>。同じ100kgでも体重で意味が変わる
                </li>
                <li>
                  ▸ 境目は<span className="font-bold">初心者が体重×{formatRatio(beginner)}、中級者が×{formatRatio(middle)}</span>
                </li>
                <li>
                  ▸ 「◯kgを◯回」の記録は<span className="font-bold">1RMに直してから</span>判定する（{EXAMPLE.weight}kg×{EXAMPLE.reps}回なら約{exampleMax}kg）
                </li>
                <li>
                  ▸ <span className="font-bold">スモウ・トラップバー・ラックプルの数字は持ち込まない</span>
                </li>
                <li>
                  ▸ 伸びが止まったら、背中より先に<span className="font-bold">握力で止まっていないか</span>を疑う
                </li>
              </ul>
              <p className="mt-2">
                BIG3全体での位置は
                <Link href="/column/strength-standards" className="text-orange-600 font-bold underline">
                  BIG3の体重別早見表
                </Link>
                、3種目の合計から引くなら
                <Link href="/column/big3-total" className="text-orange-600 font-bold underline">
                  BIG3合計◯kgはどのレベル？
                </Link>
                へ。
              </p>
            </section>
          </div>
        </div>

        <ShareButtons
          url="https://sakutore.jp/column/deadlift-weight-level"
          title="デッドリフト◯kgはすごい？重量と回数で分かるレベル判定表"
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
