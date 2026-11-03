type Meal = {
  timing: string;
  grams: number;
};

type Props = {
  meals: Meal[];
  /** Daily target in grams, drawn as a vertical line. */
  targetGrams: number;
  /** Meal left out in the second bar to show the gap, e.g. "朝". */
  skippedTiming: string;
};

const GRAY_700 = "#374151";
const GRAY_500 = "#6b7280";
const GRAY_200 = "#e5e7eb";
const SEGMENT_COLORS = ["#fdba74", "#fb923c", "#fed7aa", "#f97316"];

const VIEW_W = 360;
const LABEL_W = 70;
const BAR_X = 10 + LABEL_W;
const BAR_W = 250;
const BAR_H = 34;

// Two stacked bars against the daily target: the full day, and the same day
// with one meal skipped. The gap to the target line is the point.
export default function ProteinDayBar({ meals, targetGrams, skippedTiming }: Props) {
  const total = meals.reduce((sum, m) => sum + m.grams, 0);
  const scaleMax = Math.max(total, targetGrams) * 1.06;
  const w = (g: number) => (g / scaleMax) * BAR_W;
  const targetX = BAR_X + w(targetGrams);
  const rows = [
    { label: `${meals.length}食とも`, meals },
    { label: `${skippedTiming}を抜く`, meals: meals.filter((m) => m.timing !== skippedTiming) },
  ];

  return (
    <svg
      viewBox={`0 0 ${VIEW_W} 170`}
      className="w-full h-auto"
      style={{ fontFamily: '"Noto Sans JP", sans-serif' }}
      aria-hidden="true"
    >
      {rows.map((row, ri) => {
        const y = 30 + ri * 64;
        let x = BAR_X;
        const sum = row.meals.reduce((s, m) => s + m.grams, 0);
        return (
          <g key={row.label}>
            <text x={10} y={y + 22} fontSize={13} fontWeight="bold" fill={GRAY_700}>
              {row.label}
            </text>
            <rect x={BAR_X} y={y} width={BAR_W} height={BAR_H} rx={3} fill={GRAY_200} />
            {row.meals.map((m) => {
              const colorIdx = meals.findIndex((orig) => orig.timing === m.timing);
              const segX = x;
              x += w(m.grams);
              return (
                <g key={m.timing}>
                  <rect x={segX} y={y} width={w(m.grams)} height={BAR_H} fill={SEGMENT_COLORS[colorIdx % SEGMENT_COLORS.length]} stroke="#fff" />
                  <text x={segX + w(m.grams) / 2} y={y + 15} fontSize={12} fontWeight="bold" textAnchor="middle" fill={GRAY_700}>
                    {m.timing}
                  </text>
                  <text x={segX + w(m.grams) / 2} y={y + 29} fontSize={12} textAnchor="middle" fill={GRAY_700}>
                    {m.grams}g
                  </text>
                </g>
              );
            })}
            <text x={BAR_X} y={y + BAR_H + 16} fontSize={12} fill={GRAY_500}>
              合計 約{sum}g
              {ri > 0 && sum < targetGrams ? `（目標まであと${targetGrams - sum}g）` : ""}
            </text>
          </g>
        );
      })}

      <line x1={targetX} y1={18} x2={targetX} y2={166} stroke={GRAY_700} strokeWidth={2} strokeDasharray="5 3" />
      <text x={targetX} y={13} fontSize={12} fontWeight="bold" textAnchor="middle" fill={GRAY_700}>
        目標{targetGrams}g
      </text>
    </svg>
  );
}
