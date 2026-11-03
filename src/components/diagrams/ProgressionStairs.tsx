type Props = {
  /** Reps per set right after the weight goes up, e.g. 8. */
  startReps: number;
  /** Reps per set to reach before adding weight, e.g. 10. */
  goalReps: number;
  sets: number;
  /** Weight added once every set reaches goalReps, e.g. 2.5. */
  stepKg: number;
};

const GRAY_700 = "#374151";
const GRAY_500 = "#6b7280";
const ORANGE_200 = "#fed7aa";
const ORANGE_500 = "#f97316";
const ORANGE_600 = "#ea580c";

const VIEW_W = 360;
const LEFT = 12;
const BASE_Y = 196;
const RISE = 30;

// Staircase for "add a rep each time, then add weight". Each step is one
// session where every set reached the target; a missed set means staying put.
export default function ProgressionStairs({ startReps, goalReps, sets, stepKg }: Props) {
  const steps: { weight: string; reps: number; up: boolean }[] = [];
  for (let r = startReps; r <= goalReps; r++) steps.push({ weight: "今の重さ", reps: r, up: false });
  steps.push({ weight: `＋${stepKg}kg`, reps: startReps, up: true });

  const stepW = (VIEW_W - LEFT * 2) / steps.length;
  const topFor = (i: number) => BASE_Y - RISE * (i + 1) - 22;

  return (
    <svg
      viewBox={`0 0 ${VIEW_W} 250`}
      className="w-full h-auto"
      style={{ fontFamily: '"Noto Sans JP", sans-serif' }}
      aria-hidden="true"
    >
      <defs>
        <marker id="stairs-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M0,0 L10,5 L0,10 z" fill={ORANGE_600} />
        </marker>
      </defs>

      {steps.map((s, i) => {
        const x = LEFT + i * stepW;
        const top = topFor(i);
        return (
          <g key={i}>
            <rect
              x={x + 2}
              y={top}
              width={stepW - 4}
              height={BASE_Y - top}
              rx={4}
              fill={s.up ? ORANGE_500 : ORANGE_200}
            />
            <text
              x={x + stepW / 2}
              y={top + 20}
              fontSize={13}
              fontWeight="bold"
              textAnchor="middle"
              fill={s.up ? "#fff" : GRAY_700}
            >
              {s.weight}
            </text>
            <text
              x={x + stepW / 2}
              y={top + 38}
              fontSize={13}
              textAnchor="middle"
              fill={s.up ? "#fff" : GRAY_700}
            >
              {s.reps}回×{sets}
            </text>
            {i > 0 && (
              <path
                d={`M${x - stepW / 2 + 8},${topFor(i - 1) - 8} Q${x},${top - 22} ${x + stepW / 2 - 14},${top - 6}`}
                fill="none"
                stroke={ORANGE_600}
                strokeWidth={2}
                markerEnd="url(#stairs-arrow)"
              />
            )}
          </g>
        );
      })}

      <text x={LEFT} y={BASE_Y + 22} fontSize={12} fill={GRAY_700}>
        ↗ 全セットで回数がそろったら、次回は1段上がる
      </text>
      <text x={LEFT} y={BASE_Y + 42} fontSize={12} fill={GRAY_500}>
        1セットでも届かなければ、次回も同じ段のまま
      </text>
    </svg>
  );
}
