type Depth = {
  name: string;
  /** "◎" / "△" / "×": whether the number can be compared with the tables. */
  compare: string;
  /** The depth the article's tables are based on. */
  standard?: boolean;
};

type Props = {
  /** Shallowest first. Drawn with the poses below, in the same order. */
  depths: Depth[];
};

const GRAY_700 = "#374151";
const GRAY_500 = "#6b7280";
const GRAY_300 = "#d1d5db";
const ORANGE_600 = "#ea580c";

// Pose angles in degrees: shin lean from vertical, thigh angle above horizontal
// (negative = hip below the knee), torso lean from vertical. Drawing only.
const POSES = [
  { shin: 8, thigh: 62, torso: 14 },
  { shin: 20, thigh: 32, torso: 26 },
  { shin: 28, thigh: 0, torso: 36 },
  { shin: 34, thigh: -22, torso: 32 },
];

const SHIN = 44;
const THIGH = 44;
const TORSO = 52;
const HEAD_R = 8;
const PANEL_W = 90;
const FLOOR_Y = 168;
const rad = (deg: number) => (deg * Math.PI) / 180;

// Side view of four squat depths. The dashed line at knee height shows how far
// the hip goes relative to the knee; "parallel" is where the thigh is level.
export default function SquatDepthFigures({ depths }: Props) {
  return (
    <svg
      viewBox="0 0 360 228"
      className="w-full h-auto"
      style={{ fontFamily: '"Noto Sans JP", sans-serif' }}
      aria-hidden="true"
    >
      <line x1={4} y1={FLOOR_Y} x2={356} y2={FLOOR_Y} stroke={GRAY_300} strokeWidth={2} />
      {depths.map((d, i) => {
        const pose = POSES[Math.min(i, POSES.length - 1)];
        const ankle = { x: i * PANEL_W + 58, y: FLOOR_Y - 2 };
        const knee = {
          x: ankle.x + SHIN * Math.sin(rad(pose.shin)),
          y: ankle.y - SHIN * Math.cos(rad(pose.shin)),
        };
        const hip = {
          x: knee.x - THIGH * Math.cos(rad(pose.thigh)),
          y: knee.y - THIGH * Math.sin(rad(pose.thigh)),
        };
        const shoulder = {
          x: hip.x + TORSO * Math.sin(rad(pose.torso)),
          y: hip.y - TORSO * Math.cos(rad(pose.torso)),
        };
        const head = {
          x: shoulder.x + (HEAD_R + 3) * Math.sin(rad(pose.torso)),
          y: shoulder.y - (HEAD_R + 3) * Math.cos(rad(pose.torso)),
        };
        const color = GRAY_700;
        const left = i * PANEL_W;
        return (
          <g key={d.name}>
            {d.standard && (
              <rect x={left + 3} y={8} width={PANEL_W - 6} height={214} rx={8} fill="#fff7ed" />
            )}
            {/* Knee-height reference line */}
            <line
              x1={left + 8}
              y1={knee.y}
              x2={left + PANEL_W - 8}
              y2={knee.y}
              stroke={GRAY_500}
              strokeDasharray="3 3"
            />
            {/* Foot, shin, thigh, torso */}
            <line x1={ankle.x - 4} y1={ankle.y} x2={ankle.x + 14} y2={ankle.y} stroke={color} strokeWidth={4} strokeLinecap="round" />
            <polyline
              points={`${ankle.x},${ankle.y} ${knee.x},${knee.y} ${hip.x},${hip.y} ${shoulder.x},${shoulder.y}`}
              fill="none"
              stroke={color}
              strokeWidth={5}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx={head.x} cy={head.y} r={HEAD_R} fill={color} />
            {/* Bar on the upper back */}
            <circle cx={shoulder.x - 3} cy={shoulder.y + 2} r={4.5} fill="#fff" stroke={GRAY_700} strokeWidth={2} />
            <circle cx={hip.x} cy={hip.y} r={3.5} fill={ORANGE_600} />

            <text
              x={left + PANEL_W / 2}
              y={FLOOR_Y + 20}
              fontSize={13}
              fontWeight="bold"
              textAnchor="middle"
              fill={d.standard ? ORANGE_600 : GRAY_700}
            >
              {d.name}
            </text>
            <text
              x={left + PANEL_W / 2}
              y={FLOOR_Y + 40}
              fontSize={13}
              fontWeight="bold"
              textAnchor="middle"
              fill={GRAY_700}
            >
              比較 {d.compare}
            </text>
            {d.standard && (
              <text x={left + PANEL_W / 2} y={24} fontSize={12} fontWeight="bold" textAnchor="middle" fill={ORANGE_600}>
                表の基準
              </text>
            )}
          </g>
        );
      })}
    </svg>
  );
}
