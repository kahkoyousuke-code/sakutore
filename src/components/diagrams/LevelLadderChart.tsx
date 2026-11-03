type Series = {
  /** Short lift name shown in the legend, e.g. "ベンチ". */
  name: string;
  /** Body-weight ratio at each level, same order as `levels`. */
  ratios: number[];
  /** Value text per level, formatted by the page (e.g. "×1.25"). */
  labels: string[];
  color: string;
  dashed?: boolean;
};

type Props = {
  /** Levels from lowest to highest, with the training period each one roughly takes. */
  levels: { level: string; experience: string }[];
  series: Series[];
  /** Level drawn with a highlight band and value labels. */
  focusLevel: string;
};

const GRAY_700 = "#374151";
const GRAY_500 = "#6b7280";
const GRAY_200 = "#e5e7eb";
const ORANGE_100 = "#ffedd5";

const VIEW_W = 360;
const PLOT_LEFT = 34;
const COL_W = 64;
const PLOT_TOP = 40;
const PLOT_BOTTOM = 210;

// Line chart: x = level, y = body-weight ratio. Each step adds a similar ratio,
// but the training period under each level gets longer; the three lifts sit at
// different heights.
export default function LevelLadderChart({ levels, series, focusLevel }: Props) {
  const maxRatio = Math.ceil(Math.max(...series.flatMap((s) => s.ratios)));
  const xFor = (i: number) => PLOT_LEFT + COL_W / 2 + i * COL_W;
  const yFor = (r: number) => PLOT_BOTTOM - (r / maxRatio) * (PLOT_BOTTOM - PLOT_TOP);
  const focusIdx = levels.findIndex((l) => l.level === focusLevel);
  const ticks = Array.from({ length: maxRatio + 1 }, (_, i) => i);
  const viewH = PLOT_BOTTOM + 44;

  return (
    <svg
      viewBox={`0 0 ${VIEW_W} ${viewH}`}
      className="w-full h-auto"
      style={{ fontFamily: '"Noto Sans JP", sans-serif' }}
      aria-hidden="true"
    >
      {/* Legend */}
      {series.map((s, i) => {
        const x = PLOT_LEFT + i * 100;
        return (
          <g key={s.name}>
            <line
              x1={x}
              y1={14}
              x2={x + 22}
              y2={14}
              stroke={s.color}
              strokeWidth={3}
              strokeDasharray={s.dashed ? "5 3" : undefined}
            />
            <text x={x + 28} y={18} fontSize={12} fill={GRAY_700}>
              {s.name}
            </text>
          </g>
        );
      })}

      {/* Highlight band for the focus level */}
      {focusIdx >= 0 && (
        <rect
          x={xFor(focusIdx) - COL_W / 2 + 2}
          y={PLOT_TOP - 8}
          width={COL_W - 4}
          height={PLOT_BOTTOM - PLOT_TOP + 8}
          rx={6}
          fill={ORANGE_100}
        />
      )}

      {/* Y grid */}
      {ticks.map((t) => (
        <g key={t}>
          <line x1={PLOT_LEFT} y1={yFor(t)} x2={VIEW_W - 6} y2={yFor(t)} stroke={GRAY_200} />
          <text x={PLOT_LEFT - 6} y={yFor(t) + 4} fontSize={12} textAnchor="end" fill={GRAY_500}>
            ×{t}
          </text>
        </g>
      ))}

      {/* Lines and dots */}
      {series.map((s) => (
        <g key={s.name}>
          <polyline
            points={s.ratios.map((r, i) => `${xFor(i)},${yFor(r)}`).join(" ")}
            fill="none"
            stroke={s.color}
            strokeWidth={2.5}
            strokeDasharray={s.dashed ? "5 3" : undefined}
          />
          {s.ratios.map((r, i) => (
            <circle key={i} cx={xFor(i)} cy={yFor(r)} r={3.5} fill={s.color} />
          ))}
          {focusIdx >= 0 && (
            <text
              x={xFor(focusIdx) + 7}
              y={yFor(s.ratios[focusIdx]) + 4}
              fontSize={12}
              fontWeight="bold"
              fill={GRAY_700}
              stroke="#fff"
              strokeWidth={3}
              paintOrder="stroke"
            >
              {s.labels[focusIdx]}
            </text>
          )}
        </g>
      ))}

      {/* X labels: level name and typical training period */}
      {levels.map((l, i) => (
        <g key={l.level}>
          <text
            x={xFor(i)}
            y={PLOT_BOTTOM + 18}
            fontSize={12}
            fontWeight="bold"
            textAnchor="middle"
            fill={i === focusIdx ? "#ea580c" : GRAY_700}
          >
            {l.level}
          </text>
          <text x={xFor(i)} y={PLOT_BOTTOM + 34} fontSize={12} textAnchor="middle" fill={GRAY_500}>
            {l.experience}
          </text>
        </g>
      ))}
    </svg>
  );
}
