export type RampSet = {
  /** Weight label shown above the bar, e.g. "40kg". */
  kg: number;
  reps: number;
  /** Short label under the bar, e.g. "バーだけ" or "本番". */
  label: string;
  main?: boolean;
};

const ORANGE_500 = "#f97316";
const ORANGE_200 = "#fed7aa";
const GRAY_700 = "#374151";
const GRAY_500 = "#6b7280";

const W = 360;
const LEFT = 16;
const BASE_Y = 200;
const TOP_Y = 52;
const GAP = 14;

// Bars that rise from the empty bar to the working weight. Height is proportional
// to the weight, so the jump between sets is visible at a glance.
export default function WarmupRamp({ sets }: { sets: RampSet[] }) {
  const maxKg = Math.max(...sets.map((s) => s.kg));
  const barW = (W - LEFT * 2 - GAP * (sets.length - 1)) / sets.length;
  const heightFor = (kg: number) => ((BASE_Y - TOP_Y) * kg) / maxKg;

  return (
    <svg
      viewBox={`0 0 ${W} 250`}
      className="w-full h-auto"
      aria-hidden="true"
      style={{ fontFamily: '"Noto Sans JP", sans-serif' }}
    >
      <line x1={LEFT - 4} y1={BASE_Y} x2={W - LEFT + 4} y2={BASE_Y} stroke={GRAY_500} strokeWidth={1.5} />
      {sets.map((s, i) => {
        const x = LEFT + i * (barW + GAP);
        const h = heightFor(s.kg);
        const y = BASE_Y - h;
        const cx = x + barW / 2;
        return (
          <g key={`${s.kg}-${i}`}>
            <rect
              x={x}
              y={y}
              width={barW}
              height={h}
              rx={6}
              fill={s.main ? ORANGE_500 : ORANGE_200}
            />
            <text x={cx} y={y - 22} textAnchor="middle" fontSize={15} fontWeight={700} fill={GRAY_700}>
              {s.kg}kg
            </text>
            <text x={cx} y={y - 6} textAnchor="middle" fontSize={13} fill={GRAY_700}>
              {s.reps}回
            </text>
            <text
              x={cx}
              y={BASE_Y + 22}
              textAnchor="middle"
              fontSize={13}
              fontWeight={s.main ? 700 : 400}
              fill={s.main ? ORANGE_500 : GRAY_700}
            >
              {s.label}
            </text>
          </g>
        );
      })}
      <text x={W / 2} y={BASE_Y + 44} textAnchor="middle" fontSize={12} fill={GRAY_500}>
        左から順に行う（棒の高さは重さ）
      </text>
    </svg>
  );
}
