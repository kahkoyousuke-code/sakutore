export type SessionStep = {
  step: string;
  name: string;
  time: string;
};

const ORANGE_500 = "#f97316";
const ORANGE_300 = "#fdba74";
const GRAY_700 = "#374151";
const GRAY_500 = "#6b7280";

const W = 360;
const BOX_X = 20;
const BOX_W = 320;
const BOX_H = 40;
const GAP = 16;
const PAD = 4;

/** Steps whose time is not a fixed duration are drawn with a dashed border. */
const OPTIONAL_TIME = "任意";

type Props = {
  steps: SessionStep[];
  /** Step number to emphasize (the one that matters most). */
  highlightStep: string;
};

// Vertical step flow of one training session, top to bottom.
export default function SessionFlowDiagram({ steps, highlightStep }: Props) {
  const height = PAD * 2 + steps.length * BOX_H + (steps.length - 1) * GAP;

  return (
    <svg
      viewBox={`0 0 ${W} ${height}`}
      className="w-full h-auto"
      aria-hidden="true"
      style={{ fontFamily: '"Noto Sans JP", sans-serif' }}
    >
      {steps.map((s, i) => {
        const y = PAD + i * (BOX_H + GAP);
        const cy = y + BOX_H / 2;
        const isMain = s.step === highlightStep;
        const isOptional = s.time === OPTIONAL_TIME;
        const textColor = isMain ? "#ffffff" : GRAY_700;
        return (
          <g key={s.step}>
            <rect
              x={BOX_X}
              y={y}
              width={BOX_W}
              height={BOX_H}
              rx={8}
              fill={isMain ? ORANGE_500 : "#ffffff"}
              stroke={isMain ? ORANGE_500 : isOptional ? GRAY_500 : ORANGE_300}
              strokeWidth={1.5}
              strokeDasharray={isOptional ? "5 4" : undefined}
            />
            <circle
              cx={BOX_X + 22}
              cy={cy}
              r={12}
              fill={isMain ? "#ffffff" : ORANGE_300}
            />
            <text
              x={BOX_X + 22}
              y={cy}
              textAnchor="middle"
              dominantBaseline="central"
              fontSize={13}
              fontWeight={700}
              fill={isMain ? ORANGE_500 : GRAY_700}
            >
              {s.step}
            </text>
            <text
              x={BOX_X + 44}
              y={cy}
              dominantBaseline="central"
              fontSize={14}
              fontWeight={700}
              fill={textColor}
            >
              {s.name}
            </text>
            <text
              x={BOX_X + BOX_W - 12}
              y={cy}
              textAnchor="end"
              dominantBaseline="central"
              fontSize={13}
              fontWeight={isOptional ? 400 : 700}
              fill={isMain ? "#ffffff" : isOptional ? GRAY_500 : GRAY_700}
            >
              {s.time}
            </text>
            {i < steps.length - 1 && (
              <path
                d={`M ${W / 2 - 6} ${y + BOX_H + 5} L ${W / 2 + 6} ${y + BOX_H + 5} L ${W / 2} ${y + BOX_H + GAP - 4} Z`}
                fill={GRAY_500}
              />
            )}
          </g>
        );
      })}
    </svg>
  );
}
