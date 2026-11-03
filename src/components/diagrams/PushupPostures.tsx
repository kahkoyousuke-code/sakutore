import type { PushupId } from "@/lib/bodyweightStandards";

type Posture = {
  id: PushupId;
  name: string;
  /** Load as text, e.g. "約64%". */
  load: string;
  /** Load in kg for the example body weight, e.g. "約45kg". */
  loadKg: string;
};

type Props = {
  /** Lightest first; drawn left-to-right, top-to-bottom. */
  postures: Posture[];
};

const GRAY_700 = "#374151";
const GRAY_500 = "#6b7280";
const GRAY_300 = "#d1d5db";
const ORANGE_500 = "#f97316";
const ORANGE_600 = "#ea580c";

const PANEL_W = 176;
const PANEL_H = 112;
const FLOOR = 100;
const BOX_H = 24;

// Body geometry per variant, in panel coordinates. Drawing only, no data.
const SHAPES: Record<PushupId, { hand: number; foot: number; knee?: boolean }> = {
  knee: { hand: 0, foot: 0, knee: true },
  incline: { hand: BOX_H, foot: 0 },
  standard: { hand: 0, foot: 0 },
  decline: { hand: 0, foot: BOX_H },
};

// Side view of four push-up variants, lightest to heaviest. The higher the
// feet relative to the hands, the more of the body weight goes onto the hands.
export default function PushupPostures({ postures }: Props) {
  const rows = Math.ceil(postures.length / 2);
  return (
    <svg
      viewBox={`0 0 360 ${rows * PANEL_H + 4}`}
      className="w-full h-auto"
      style={{ fontFamily: '"Noto Sans JP", sans-serif' }}
      aria-hidden="true"
    >
      {postures.map((p, i) => {
        const ox = (i % 2) * (PANEL_W + 8);
        const oy = Math.floor(i / 2) * PANEL_H;
        const shape = SHAPES[p.id];
        const handX = ox + 132;
        const handY = oy + FLOOR - shape.hand;
        const shoulder = { x: handX, y: handY - 32 };
        const footX = ox + 22;
        const footY = oy + FLOOR - shape.foot - 3;
        const kneeX = ox + 62;
        const bodyEnd = shape.knee ? { x: kneeX, y: oy + FLOOR - 4 } : { x: footX, y: footY };
        // Head sits on the extension of the body line beyond the shoulder.
        const dx = shoulder.x - bodyEnd.x;
        const dy = shoulder.y - bodyEnd.y;
        const len = Math.hypot(dx, dy);
        const head = { x: shoulder.x + (dx / len) * 13, y: shoulder.y + (dy / len) * 13 };
        const heavy = i === postures.length - 1;
        const color = heavy ? ORANGE_500 : GRAY_700;
        return (
          <g key={p.id}>
            <rect x={ox + 1} y={oy + 2} width={PANEL_W - 2} height={PANEL_H - 8} rx={8} fill="#fff" stroke={GRAY_300} />
            <text x={ox + 10} y={oy + 20} fontSize={13} fontWeight="bold" fill={GRAY_700}>
              {p.name}
            </text>
            <text x={ox + PANEL_W - 10} y={oy + 20} fontSize={14} fontWeight="bold" textAnchor="end" fill={ORANGE_600}>
              {p.load}
            </text>
            <text x={ox + 10} y={oy + 36} fontSize={12} fill={GRAY_500}>
              {p.loadKg}
            </text>

            <line x1={ox + 8} y1={oy + FLOOR} x2={ox + PANEL_W - 8} y2={oy + FLOOR} stroke={GRAY_300} strokeWidth={2} />
            {shape.hand > 0 && (
              <rect x={handX - 16} y={oy + FLOOR - BOX_H} width={32} height={BOX_H} fill={GRAY_300} />
            )}
            {shape.foot > 0 && (
              <rect x={footX - 14} y={oy + FLOOR - BOX_H} width={30} height={BOX_H} fill={GRAY_300} />
            )}

            {/* Arm */}
            <line x1={handX} y1={handY} x2={shoulder.x} y2={shoulder.y} stroke={color} strokeWidth={4} strokeLinecap="round" />
            {/* Body line */}
            <line x1={shoulder.x} y1={shoulder.y} x2={bodyEnd.x} y2={bodyEnd.y} stroke={color} strokeWidth={5} strokeLinecap="round" />
            {/* Shin on the floor for the knee variant */}
            {shape.knee && (
              <line x1={kneeX} y1={oy + FLOOR - 4} x2={footX} y2={oy + FLOOR - 4} stroke={color} strokeWidth={4} strokeLinecap="round" />
            )}
            <circle cx={head.x} cy={head.y} r={7} fill={color} />
          </g>
        );
      })}
    </svg>
  );
}
