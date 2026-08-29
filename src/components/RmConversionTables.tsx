import Link from "next/link";
import { GuideCard, GuideNote } from "@/components/GuideCard";

/**
 * /rm-calculator に静的に出力する換算表。
 *
 * ツール本体は "use client" で、換算表は「計算する」を押すまで描画されない。
 * つまり検索エンジンが読むHTMLには表が1つも存在しない状態だった。
 * 「rm 換算 表」「ベンチプレス 換算」で探している人に表を返すため、
 * 入力なしでも読める表をサーバーコンポーネントとして置く。
 *
 * /column/strength-standards の換算表とは向きを変えてある。
 * あちらは「使用重量×回数 → 1RM」（順方向）、こちらは「1RM → 各RMの重量」（逆方向）。
 */

// Epley: 1RM = weight x (1 + reps / 30).
// Reversed: weight = 1RM / (1 + reps / 30).
// 1 rep is the 1RM itself, so it is not run through the formula
// (matches the reps === 1 special case in /rm-calculator).
const epleyRatio = (reps: number) => (reps === 1 ? 1 : 1 / (1 + reps / 30));

// Brzycki: 1RM = weight x 36 / (37 - reps).
const brzycki1RM = (weight: number, reps: number) => (weight * 36) / (37 - reps);
const epley1RM = (weight: number, reps: number) =>
  reps === 1 ? weight : weight * (1 + reps / 30);

const ALL_REPS = Array.from({ length: 15 }, (_, i) => i + 1);
const KEY_REPS = [1, 3, 5, 8, 10, 12, 15];
const BASE_1RM = [40, 60, 80, 100, 120, 140];
const COMPARE_REPS = [1, 3, 5, 8, 10, 12, 15];
const COMPARE_WEIGHT = 80;

function zoneOf(reps: number) {
  if (reps <= 3) return "最大筋力";
  if (reps <= 6) return "筋力・筋肥大";
  if (reps <= 12) return "筋肥大";
  return "筋持久力";
}

const th =
  "border border-gray-200 px-2 py-2 text-left font-bold text-gray-700 whitespace-nowrap";
const td = "border border-gray-200 px-2 py-2 text-gray-700 whitespace-nowrap";
const tdHead =
  "border border-gray-200 px-2 py-2 font-bold text-gray-800 whitespace-nowrap";

export default function RmConversionTables() {
  return (
    <>
      <GuideCard title="RM換算表：1RMに対する割合（早見表）">
        <p>
          計算機を使わずに暗算したいとき用の早見表です。
          <span className="font-bold">1RM（1回だけ挙げられる最大重量）に何%を掛ければ、その回数が限界の重量になるか</span>
          を並べてあります。上の計算機と同じEpley式から逆算した値です。
        </p>
        <div className="overflow-x-auto -mx-2 px-2">
          <table className="w-full text-xs border-collapse">
            <thead>
              <tr className="bg-orange-50">
                <th className={th}>回数（RM）</th>
                <th className={th}>1RMに対する割合</th>
                <th className={th}>掛ける係数</th>
                <th className={th}>主な目的</th>
              </tr>
            </thead>
            <tbody>
              {ALL_REPS.map((reps) => {
                const ratio = epleyRatio(reps);
                return (
                  <tr key={reps}>
                    <td className={tdHead}>{reps}RM</td>
                    <td className={td}>{(ratio * 100).toFixed(1)}%</td>
                    <td className={td}>×{ratio.toFixed(3)}</td>
                    <td className={`${td} text-gray-500`}>{zoneOf(reps)}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-500">
          読み方：1RMが100kgなら、10RM（10回が限界）の重量は 100 × 0.750 ＝ <span className="font-bold">75kg</span>。
          「筋肥大は8〜12回」と言われますが、重量に直すと1RMの71〜79%というかなり狭い幅です。
        </p>
      </GuideCard>

      <GuideCard title="1RM別・重量換算表（ベンチプレス／スクワット／デッドリフト共通）">
        <p>
          上の割合を実際のkgに直した表です。自分の1RMに近い列を縦に読むと、
          その日に組むべき重量がそのまま出ます。
          <span className="font-bold">式は種目で変わらない</span>ので、ベンチプレスでもスクワットでもデッドリフトでも同じ表を使えます。
        </p>
        <div className="overflow-x-auto -mx-2 px-2">
          <table className="w-full text-xs border-collapse">
            <thead>
              <tr className="bg-orange-50">
                <th className={th}>回数</th>
                {BASE_1RM.map((w) => (
                  <th key={w} className={th}>
                    1RM {w}kg
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {KEY_REPS.map((reps) => {
                const ratio = epleyRatio(reps);
                return (
                  <tr key={reps}>
                    <td className={tdHead}>{reps}RM</td>
                    {BASE_1RM.map((w) => (
                      <td key={w} className={td}>
                        {Math.round(w * ratio)}kg
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-500">
          表の重量はすべて<span className="font-bold">その回数が限界になる重さ</span>です。
          余力を残して組みたい場合は、1つ下の行（回数の多いほう）の重量を選ぶと扱いやすくなります。
          自分の1RMがこの6つの間にある場合は、ページ上部の計算機に実際の重量と回数を入れてください。
        </p>
      </GuideCard>

      <GuideCard title="Epley式とBrzycki式では、どれくらい数字が変わるか">
        <p>
          1RMの推定式は1つではありません。代表的なのがEpley式とBrzycki（ブジッキー）式で、
          このツールはEpley式を使っています。
          <span className="font-bold">同じ「80kg×○回」を両方の式に入れると、こうなります。</span>
        </p>
        <div className="overflow-x-auto -mx-2 px-2">
          <table className="w-full text-xs border-collapse">
            <thead>
              <tr className="bg-orange-50">
                <th className={th}>80kg × 回数</th>
                <th className={th}>Epley式</th>
                <th className={th}>Brzycki式</th>
                <th className={th}>差</th>
              </tr>
            </thead>
            <tbody>
              {COMPARE_REPS.map((reps) => {
                const e = epley1RM(COMPARE_WEIGHT, reps);
                const b = brzycki1RM(COMPARE_WEIGHT, reps);
                const diff = b - e;
                return (
                  <tr key={reps}>
                    <td className={tdHead}>{reps}回</td>
                    <td className={td}>{e.toFixed(1)}kg</td>
                    <td className={td}>{b.toFixed(1)}kg</td>
                    <td className={`${td} text-gray-500`}>
                      {Math.abs(diff) < 0.05
                        ? "±0kg"
                        : `${diff > 0 ? "+" : "−"}${Math.abs(diff).toFixed(1)}kg`}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <GuideNote>
          <p className="font-bold text-orange-600 mb-1">10回でぴったり一致する</p>
          <p>
            Epley式の係数は 1 + 10 ÷ 30 ＝ 1.333、Brzycki式は 36 ÷（37 − 10）＝ 1.333。
            <span className="font-bold">10回のときだけ2つの式は完全に同じ数字を返します。</span>
            そして2〜9回ではBrzyckiのほうが低く、11回以上ではBrzyckiのほうが高く出ます。
            15回では約11kgの差です。
          </p>
        </GuideNote>
        <p className="text-xs text-gray-500">
          式が違えば答えも違う、という事実のほうが大事です。
          推定1RMは「絶対値」ではなく、<span className="font-bold">同じ式で追いかけたときの変化</span>を見るための数字だと考えてください。
          途中で式を変えると、強くなったのか式が変わっただけなのか判別できなくなります。
        </p>
      </GuideCard>

      <GuideCard title="種目によって、この換算が当たる度合いは変わる">
        <p>
          式そのものは種目を区別しませんが、<span className="font-bold">実際の当たりやすさは種目ごとに違います</span>。
          限界の来かたが違うからです。
        </p>
        <div className="overflow-x-auto -mx-2 px-2">
          <table className="w-full text-xs border-collapse">
            <thead>
              <tr className="bg-orange-50">
                <th className={th}>種目</th>
                <th className={th}>推定の当たりやすさ</th>
                <th className={th}>理由</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={tdHead}>ベンチプレス</td>
                <td className={td}>高い</td>
                <td className={`${td} whitespace-normal`}>
                  挙がらなくなった時点がはっきりしていて、限界の回数を数えやすい。
                </td>
              </tr>
              <tr>
                <td className={tdHead}>スクワット</td>
                <td className={td}>やや低い</td>
                <td className={`${td} whitespace-normal`}>
                  回数が増えると筋力より先に呼吸・心肺がきつくなり、実力より少ない回数で止まりやすい。
                </td>
              </tr>
              <tr>
                <td className={tdHead}>デッドリフト</td>
                <td className={td}>低い</td>
                <td className={`${td} whitespace-normal`}>
                  高回数だと握力と腰が先に限界を迎える。回数からの逆算は特に外れやすい。
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-500">
          スクワットとデッドリフトは、<span className="font-bold">できるだけ少ない回数（3〜5回）</span>から換算したほうが実態に近づきます。
          出した1RMが自分の体格に対して上か下かを見たいときは、
          <Link
            href="/column/strength-standards"
            className="text-orange-500 font-bold hover:underline"
          >
            BIG3の重量目安を体重別・レベル別にまとめた一覧
          </Link>
          と突き合わせてください。
        </p>
      </GuideCard>
    </>
  );
}
