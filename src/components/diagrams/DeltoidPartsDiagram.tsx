export type DeltoidPart = {
  /** Short name, e.g. "前" / "横" / "後ろ". */
  name: string;
  /** What it does for the look, one short phrase. */
  role: string;
  /** Exercises that hit this part, drawn one per line. */
  exercises: string[];
  /** Drawn in the emphasis color (the part to prioritize). */
  main?: boolean;
};

type Props = {
  parts: DeltoidPart[];
};

const ORANGE_500 = "#f97316";
const ORANGE_300 = "#fdba74";
const ORANGE_50 = "#fff7ed";
const GRAY_700 = "#374151";
const GRAY_500 = "#6b7280";

const W = 360;
const PAD = 6;
const COL_GAP = 8;
const HEAD_H = 34;
const ROLE_H = 40;
const LINE_H = 20;
const BOTTOM_PAD = 10;

// Three columns, one per part of the shoulder (deltoid): which look it shapes
// and which exercises train it. The prioritized part is filled orange.
export default function DeltoidPartsDiagram({ parts }: Props) {
  const colW = (W - PAD * 2 - COL_GAP * (parts.length - 1)) / parts.length;
  const maxLines = Math.max(...parts.map((p) => p.exercises.length));
  const colH = HEAD_H + ROLE_H + maxLines * LINE_H + BOTTOM_PAD;
  const height = PAD * 2 + colH;

  return (
    <svg
      viewBox={`0 0 ${W} ${height}`}
      className="w-full h-auto"
      aria-hidden="true"
      style={{ fontFamily: '"Noto Sans JP", sans-serif' }}
    >
      {parts.map((p, i) => {
        const x = PAD + i * (colW + COL_GAP);
        const cx = x + colW / 2;
        return (
          <g key={p.name}>
            <rect
              x={x}
              y={PAD}
              width={colW}
              height={colH}
              rx={10}
              fill={p.main ? ORANGE_50 : "#ffffff"}
              stroke={p.main ? ORANGE_500 : ORANGE_300}
              strokeWidth={p.main ? 2 : 1.5}
            />
            <rect
              x={x}
              y={PAD}
              width={colW}
              height={HEAD_H}
              rx={10}
              fill={p.main ? ORANGE_500 : ORANGE_300}
            />
            <rect
              x={x}
              y={PAD + HEAD_H - 10}
              width={colW}
              height={10}
              fill={p.main ? ORANGE_500 : ORANGE_300}
            />
            <text
              x={cx}
              y={PAD + HEAD_H / 2}
              textAnchor="middle"
              dominantBaseline="central"
              fontSize={15}
              fontWeight={700}
              fill={p.main ? "#ffffff" : GRAY_700}
            >
              {p.name}
            </text>
            <text
              x={cx}
              y={PAD + HEAD_H + ROLE_H / 2}
              textAnchor="middle"
              dominantBaseline="central"
              fontSize={12}
              fontWeight={700}
              fill={p.main ? ORANGE_500 : GRAY_500}
            >
              {p.role}
            </text>
            {p.exercises.map((ex, j) => (
              <text
                key={ex}
                x={cx}
                y={PAD + HEAD_H + ROLE_H + j * LINE_H + LINE_H / 2}
                textAnchor="middle"
                dominantBaseline="central"
                fontSize={12}
                fill={GRAY_700}
              >
                {ex}
              </text>
            ))}
          </g>
        );
      })}
    </svg>
  );
}
