type Lift = {
  name: string;
  /** Level the marker falls in, worked out by the page from the shared module. */
  landing: string;
  /** Level thresholds in kg for one body weight, lowest level first. */
  levels: { level: string; kg: number }[];
};

type Props = {
  lifts: Lift[];
  /** The weight drawn as a vertical line across every lift, e.g. 100. */
  markerKg: number;
};

const GRAY_700 = "#374151";
const GRAY_500 = "#6b7280";
const GRAY_200 = "#e5e7eb";
// Lightest to darkest, one per level. Below the first level stays gray.
const LEVEL_COLORS = ["#fed7aa", "#fdba74", "#fb923c", "#f97316", "#c2410c"];

const VIEW_W = 360;
const BAR_X = 84;
const BAR_W = 262;
const BAR_H = 22;
const ROW_H = 58;
const TOP = 44;

// One horizontal scale per lift, split into level bands. A single kg line
// crosses all of them, so the same number lands on a different level per lift.
export default function LiftLevelScale({ lifts, markerKg }: Props) {
  // Each bar stops one level-gap past its top level, so the top band is not
  // stretched to the edge of the chart.
  const barEnd = (lift: Lift) => {
    const kgs = lift.levels.map((v) => v.kg);
    const last = kgs[kgs.length - 1];
    const gap = kgs.length > 1 ? last - kgs[kgs.length - 2] : last * 0.2;
    return last + gap;
  };
  const maxKg = Math.ceil((Math.max(...lifts.map(barEnd)) * 1.02) / 10) * 10;
  const xFor = (kg: number) => BAR_X + (kg / maxKg) * BAR_W;
  const levelNames = lifts[0]?.levels.map((v) => v.level) ?? [];
  const viewH = TOP + lifts.length * ROW_H + 26;
  const markerX = xFor(markerKg);

  return (
    <svg
      viewBox={`0 0 ${VIEW_W} ${viewH}`}
      className="w-full h-auto"
      style={{ fontFamily: '"Noto Sans JP", sans-serif' }}
      aria-hidden="true"
    >
      {/* Legend */}
      {levelNames.map((name, i) => {
        const x = 10 + i * 70;
        return (
          <g key={name}>
            <rect x={x} y={6} width={14} height={14} rx={2} fill={LEVEL_COLORS[i]} />
            <text x={x + 18} y={18} fontSize={12} fill={GRAY_700}>
              {name}
            </text>
          </g>
        );
      })}

      {lifts.map((lift, li) => {
        const y = TOP + li * ROW_H;
        return (
          <g key={lift.name}>
            <text x={10} y={y + 16} fontSize={12} fontWeight="bold" fill={GRAY_700}>
              {lift.name}
            </text>
            <rect x={BAR_X} y={y} width={xFor(barEnd(lift)) - BAR_X} height={BAR_H} rx={3} fill={GRAY_200} />
            {lift.levels.map((v, i) => {
              const end = i + 1 < lift.levels.length ? lift.levels[i + 1].kg : barEnd(lift);
              return (
                <rect
                  key={v.level}
                  x={xFor(v.kg)}
                  y={y}
                  width={xFor(end) - xFor(v.kg)}
                  height={BAR_H}
                  fill={LEVEL_COLORS[i]}
                />
              );
            })}
            <text
              x={markerX + 6}
              y={y + BAR_H + 16}
              fontSize={12}
              fontWeight="bold"
              fill={GRAY_700}
            >
              → {lift.landing}
            </text>
          </g>
        );
      })}

      {/* The kg line shared by all lifts */}
      <line
        x1={markerX}
        y1={TOP - 8}
        x2={markerX}
        y2={TOP + lifts.length * ROW_H - 10}
        stroke={GRAY_700}
        strokeWidth={2}
      />
      <text x={markerX} y={viewH - 6} fontSize={13} fontWeight="bold" textAnchor="middle" fill={GRAY_700}>
        {markerKg}kg
      </text>
      <text x={BAR_X} y={viewH - 6} fontSize={12} textAnchor="middle" fill={GRAY_500}>
        0
      </text>
      <text x={BAR_X + BAR_W} y={viewH - 6} fontSize={12} textAnchor="end" fill={GRAY_500}>
        {maxKg}kg
      </text>
    </svg>
  );
}
