type Group = {
  /** Group heading, e.g. "男性" / "女性". */
  label: string;
  /** Squat and deadlift as multiples of the bench press (bench = 1). */
  squat: number;
  deadlift: number;
  /** Main group is drawn in the emphasis color, others in the lighter one. */
  main?: boolean;
};

type Props = {
  groups: Group[];
};

const GRAY_700 = "#374151";
const GRAY_500 = "#6b7280";
const GRAY_200 = "#e5e7eb";
const ORANGE_500 = "#f97316";
const ORANGE_300 = "#fdba74";

const VIEW_W = 360;
const LABEL_W = 84;
const BAR_X = 10 + LABEL_W;
const BAR_MAX_W = 220;
const BAR_H = 20;
const ROW_GAP = 8;
const GROUP_HEAD_H = 24;
const GROUP_GAP = 14;
const AXIS_H = 26;

// Horizontal bars: bench = 1, squat and deadlift shown as multiples of the bench.
export default function Big3RatioBars({ groups }: Props) {
  const maxValue = Math.max(2, ...groups.flatMap((g) => [g.squat, g.deadlift]));
  const scaleMax = Math.ceil(maxValue * 2) / 2 + 0.25;
  const xFor = (v: number) => BAR_X + (v / scaleMax) * BAR_MAX_W;

  const groupH = GROUP_HEAD_H + 3 * BAR_H + 2 * ROW_GAP;
  const viewH = 8 + groups.length * groupH + (groups.length - 1) * GROUP_GAP + AXIS_H;
  const chartBottom = viewH - AXIS_H;
  const ticks = Array.from({ length: Math.floor(scaleMax) + 1 }, (_, i) => i);

  return (
    <svg
      viewBox={`0 0 ${VIEW_W} ${viewH}`}
      className="w-full h-auto"
      style={{ fontFamily: '"Noto Sans JP", sans-serif' }}
      aria-hidden="true"
    >
      {/* Axis ticks; the line at 1 is the bench reference */}
      {ticks.map((t) => (
        <g key={t}>
          <line
            x1={xFor(t)}
            y1={8}
            x2={xFor(t)}
            y2={chartBottom}
            stroke={t === 1 ? GRAY_500 : GRAY_200}
            strokeDasharray={t === 1 ? "4 3" : undefined}
          />
          <text x={xFor(t)} y={chartBottom + 18} fontSize={12} textAnchor="middle" fill={GRAY_500}>
            {t === 1 ? "1（ベンチ）" : t}
          </text>
        </g>
      ))}

      {groups.map((g, gi) => {
        const top = 8 + gi * (groupH + GROUP_GAP);
        const fill = g.main ? ORANGE_500 : ORANGE_300;
        const rows = [
          { name: "ベンチ", value: 1, color: GRAY_200 },
          { name: "スクワット", value: g.squat, color: fill },
          { name: "デッドリフト", value: g.deadlift, color: fill },
        ];
        return (
          <g key={g.label}>
            <text x={10} y={top + 16} fontSize={13} fontWeight="bold" fill={GRAY_700}>
              {g.label}
            </text>
            {rows.map((r, ri) => {
              const y = top + GROUP_HEAD_H + ri * (BAR_H + ROW_GAP);
              const end = xFor(r.value);
              return (
                <g key={r.name}>
                  <text x={10} y={y + 15} fontSize={12} fill={GRAY_700}>
                    {r.name}
                  </text>
                  <rect
                    x={BAR_X}
                    y={y}
                    width={end - BAR_X}
                    height={BAR_H}
                    rx={3}
                    fill={r.color}
                    stroke={r.value === 1 ? GRAY_500 : "none"}
                  />
                  <text x={end + 6} y={y + 15} fontSize={13} fontWeight="bold" fill={GRAY_700}>
                    {r.value === 1 ? "1" : r.value.toFixed(1)}
                  </text>
                </g>
              );
            })}
          </g>
        );
      })}
    </svg>
  );
}
