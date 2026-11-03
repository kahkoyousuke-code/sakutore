type Row = {
  /** Body-fat percentage, e.g. 20. */
  percent: number;
  /** Fat to lose from the current state (0 for the current row). */
  lossKg: number;
};

type Props = {
  weightKg: number;
  /** Current body-fat percentage. Lean mass is derived from it and stays fixed. */
  currentPercent: number;
  rows: Row[];
};

const GRAY_700 = "#374151";
const GRAY_500 = "#6b7280";
const GRAY_300 = "#d1d5db";
const ORANGE_500 = "#f97316";

const VIEW_W = 360;
const LABEL_W = 58;
const BAR_X = 10 + LABEL_W;
const BAR_MAX_W = 196;
const BAR_H = 24;
const ROW_GAP = 12;
const TOP = 42;

const fmt = (kg: number) => (Math.round(kg * 10) / 10).toString();

// Stacked bars: lean mass (gray, constant) + fat (orange, shrinking).
// Shows that reaching a lower body-fat % means removing only the orange part.
export default function BodyCompositionBars({ weightKg, currentPercent, rows }: Props) {
  const fatNow = (weightKg * currentPercent) / 100;
  const lean = weightKg - fatNow;
  const scale = BAR_MAX_W / weightKg;
  const leanEnd = BAR_X + lean * scale;
  const viewH = TOP + rows.length * (BAR_H + ROW_GAP) + 4;

  return (
    <svg
      viewBox={`0 0 ${VIEW_W} ${viewH}`}
      className="w-full h-auto"
      style={{ fontFamily: '"Noto Sans JP", sans-serif' }}
      aria-hidden="true"
    >
      {/* Legend */}
      <rect x={10} y={8} width={14} height={14} rx={2} fill={GRAY_300} />
      <text x={28} y={20} fontSize={12} fill={GRAY_700}>
        脂肪以外 {fmt(lean)}kg（変わらない）
      </text>
      <rect x={220} y={8} width={14} height={14} rx={2} fill={ORANGE_500} />
      <text x={238} y={20} fontSize={12} fill={GRAY_700}>
        脂肪
      </text>

      {/* Lean mass boundary */}
      <line
        x1={leanEnd}
        y1={TOP - 8}
        x2={leanEnd}
        y2={viewH - 4}
        stroke={GRAY_500}
        strokeDasharray="3 3"
      />

      {rows.map((r, i) => {
        const y = TOP + i * (BAR_H + ROW_GAP);
        const fat = fatNow - r.lossKg;
        const isNow = r.lossKg === 0;
        return (
          <g key={r.percent}>
            <text x={10} y={y + 16} fontSize={13} fontWeight="bold" fill={GRAY_700}>
              {r.percent}%
            </text>
            <rect x={BAR_X} y={y} width={lean * scale} height={BAR_H} rx={3} fill={GRAY_300} />
            <rect x={leanEnd} y={y} width={fat * scale} height={BAR_H} fill={ORANGE_500} />
            <text x={leanEnd + fat * scale + 6} y={y + 11} fontSize={12} fontWeight="bold" fill={GRAY_700}>
              {fmt(lean + fat)}kg{isNow ? "（今）" : ""}
            </text>
            <text x={leanEnd + fat * scale + 6} y={y + 25} fontSize={12} fill={isNow ? GRAY_500 : "#ea580c"}>
              {isNow ? `脂肪${fmt(fat)}kg` : `脂肪−${fmt(r.lossKg)}kg`}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
