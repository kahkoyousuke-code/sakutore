type Item = {
  item: string;
  /** Hours before bed when this should stop (or be finished). Range = [from, to]. */
  fromHours: number;
  toHours: number;
};

type Props = {
  items: Item[];
};

const GRAY_700 = "#374151";
const GRAY_500 = "#6b7280";
const GRAY_200 = "#e5e7eb";
const ORANGE_200 = "#fed7aa";
const ORANGE_500 = "#f97316";

const VIEW_W = 360;
const LABEL_W = 92;
const AXIS_X = 10 + LABEL_W;
const AXIS_W = 240;
const ROW_H = 26;
const TOP = 30;

// Timeline counting down to bedtime. Each row is shaded from the moment the
// habit should stop until bed, so the longest bar is the one to stop first.
export default function BedtimeCountdown({ items }: Props) {
  const maxHours = Math.max(...items.map((i) => i.fromHours));
  const xFor = (h: number) => AXIS_X + ((maxHours - h) / maxHours) * AXIS_W;
  const viewH = TOP + items.length * ROW_H + 8;
  const ticks = Array.from({ length: maxHours + 1 }, (_, i) => maxHours - i);

  return (
    <svg
      viewBox={`0 0 ${VIEW_W} ${viewH}`}
      className="w-full h-auto"
      style={{ fontFamily: '"Noto Sans JP", sans-serif' }}
      aria-hidden="true"
    >
      {ticks.map((h) => (
        <g key={h}>
          <line x1={xFor(h)} y1={TOP - 6} x2={xFor(h)} y2={viewH - 4} stroke={h === 0 ? GRAY_700 : GRAY_200} strokeWidth={h === 0 ? 2 : 1} />
          <text x={xFor(h)} y={TOP - 12} fontSize={12} textAnchor="middle" fill={h === 0 ? GRAY_700 : GRAY_500} fontWeight={h === 0 ? "bold" : undefined}>
            {h === 0 ? "就寝" : `${h}h前`}
          </text>
        </g>
      ))}

      {items.map((it, i) => {
        const y = TOP + i * ROW_H + 4;
        const solidStart = xFor(it.toHours);
        const fuzzyStart = xFor(it.fromHours);
        const end = xFor(0);
        return (
          <g key={it.item}>
            <text x={10} y={y + 13} fontSize={12} fontWeight="bold" fill={GRAY_700}>
              {it.item}
            </text>
            {/* Range of "somewhere in here" */}
            {it.fromHours > it.toHours && (
              <rect x={fuzzyStart} y={y} width={solidStart - fuzzyStart} height={18} fill={ORANGE_200} />
            )}
            {end > solidStart ? (
              <rect x={solidStart} y={y} width={end - solidStart} height={18} rx={2} fill={ORANGE_500} />
            ) : (
              <circle cx={end} cy={y + 9} r={6} fill={ORANGE_500} />
            )}
          </g>
        );
      })}
    </svg>
  );
}
