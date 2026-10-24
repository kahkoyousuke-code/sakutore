type Step = {
  step: string;
  name: string;
  goal: string;
};

type Props = {
  /** Stages from easiest to the goal. Pass the article's own data so the table and diagram stay in sync. */
  steps: Step[];
  /** Step number to tag as the most effective one (optional). */
  highlightStep?: string;
  highlightLabel?: string;
};

const VIEW_W = 360;
const PAD = 10;
const ROW_H = 38;
const ROW_GAP = 4;
const INDENT = 36;

// Staircase: step 1 is the widest bottom row, the final step is the narrow top row.
export default function PullupStepsStaircase({ steps, highlightStep, highlightLabel }: Props) {
  const count = steps.length;
  const viewH = PAD * 2 + count * ROW_H + (count - 1) * ROW_GAP;
  const fullW = VIEW_W - PAD * 2;

  return (
    <svg
      viewBox={`0 0 ${VIEW_W} ${viewH}`}
      className="w-full h-auto"
      style={{ fontFamily: '"Noto Sans JP", sans-serif' }}
      aria-hidden="true"
    >
      {/* Direction hint in the empty top-left corner */}
      <text x={PAD} y={PAD + 16} fontSize={12} fill="#6b7280">
        ↑ 負荷が上がる
      </text>
      <text x={PAD} y={PAD + 32} fontSize={12} fill="#6b7280">
        条件を満たしたら次へ
      </text>

      {steps.map((s, i) => {
        const isLast = i === count - 1;
        const x = PAD + i * INDENT;
        const y = PAD + (count - 1 - i) * (ROW_H + ROW_GAP);
        const w = fullW - i * INDENT;
        const textY = y + ROW_H / 2 + 5;
        const isHighlight = s.step === highlightStep;
        const nameLabel = `${s.step}. ${s.name}`;
        return (
          <g key={s.step}>
            <rect
              x={x}
              y={y}
              width={w}
              height={ROW_H}
              rx={6}
              fill={isLast ? "#f97316" : "#ffedd5"}
              stroke={isLast ? "#f97316" : "#fdba74"}
            />
            <text
              x={x + 10}
              y={textY}
              fontSize={14}
              fontWeight="bold"
              fill={isLast ? "#ffffff" : "#374151"}
            >
              {nameLabel}
            </text>
            {isHighlight && highlightLabel && (
              <g>
                <rect
                  x={x + 10 + nameLabel.length * 13 + 6}
                  y={y + 10}
                  width={highlightLabel.length * 12 + 10}
                  height={18}
                  rx={9}
                  fill="#ffffff"
                  stroke="#f97316"
                />
                <text
                  x={x + 10 + nameLabel.length * 13 + 11}
                  y={y + 23}
                  fontSize={12}
                  fontWeight="bold"
                  fill="#374151"
                >
                  {highlightLabel}
                </text>
              </g>
            )}
            <text
              x={x + w - 10}
              y={textY}
              fontSize={14}
              fontWeight="bold"
              textAnchor="end"
              fill={isLast ? "#ffffff" : "#374151"}
            >
              {s.goal}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
