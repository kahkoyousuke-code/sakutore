import { headlineLevel, levelText, type Big3Result } from "@/lib/big3Diagnosis";

/**
 * Result of the BIG3 level diagnosis. Shared by the tool (/weight-checker)
 * and the share page (/big3-result) so both show the same thing.
 */
export default function Big3ResultCard({ result }: { result: Big3Result }) {
  const { gender, bodyWeight } = result.input;
  const head = headlineLevel(result);
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <p className="text-xs text-gray-400 mb-3">
        体重 {bodyWeight}kg・{gender === "male" ? "男性" : "女性"}基準
      </p>

      <div className="rounded-xl bg-orange-500 text-white p-4 text-center mb-4">
        <p className="text-xs text-orange-100">BIG3合計</p>
        <p className="text-3xl font-bold">
          {result.total}
          <span className="text-base font-semibold ml-1">kg</span>
        </p>
        <p className="text-sm text-orange-100">体重の{result.totalRatio}倍</p>
        {head && <p className="text-xl font-bold mt-1">{head}</p>}
      </div>

      <div className="space-y-2">
        {result.lifts.map((lift) => (
          <div
            key={lift.id}
            className="flex items-center gap-2 rounded-xl border border-orange-100 bg-orange-50 px-4 py-3"
          >
            <span className="font-bold text-gray-800 text-sm">{lift.label}</span>
            <span className="text-xs text-gray-400">
              {lift.kg}kg・体重×{lift.ratio}
            </span>
            <span className="ml-auto font-bold text-orange-500 text-sm">
              {levelText(lift.level, gender)}
            </span>
          </div>
        ))}
      </div>

      {!result.hasTotalStandard && (
        <p className="text-xs text-gray-400 mt-3">
          ※ 女性はBIG3合計の基準を置いていないので、レベルは種目別に判定しています。
        </p>
      )}
    </div>
  );
}
