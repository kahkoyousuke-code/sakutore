// Side-view schematic of a power rack: where the hooks and safety bars go
// for the squat and the bench press. No numbers (cm) on purpose — the article
// says heights depend on body size and must be checked with an empty bar.

const GRAY_700 = "#374151";
const GRAY_500 = "#6b7280";
const GRAY_200 = "#e5e7eb";
const ORANGE_500 = "#f97316";
const ORANGE_300 = "#fdba74";

const VIEW_W = 360;
const VIEW_H = 280;
const FLOOR_Y = 240;
const TOP_Y = 34;
const FONT = { fontFamily: '"Noto Sans JP", sans-serif' };

function Upright({ x }: { x: number }) {
  const holes = [];
  for (let y = TOP_Y + 10; y < FLOOR_Y - 6; y += 12) {
    holes.push(<circle key={y} cx={x + 3} cy={y} r={1.3} fill={GRAY_500} />);
  }
  return (
    <g>
      <rect x={x} y={TOP_Y} width={6} height={FLOOR_Y - TOP_Y} fill={GRAY_200} stroke={GRAY_500} />
      {holes}
    </g>
  );
}

// J-hook sticking out to the left of the front upright (inner face at x).
function Hook({ x, y }: { x: number; y: number }) {
  return (
    <path
      d={`M ${x} ${y} L ${x - 14} ${y} L ${x - 14} ${y - 8} L ${x - 10} ${y - 8} L ${x - 10} ${y - 4} L ${x} ${y - 4} Z`}
      fill={ORANGE_300}
      stroke={GRAY_700}
      strokeWidth={1}
    />
  );
}

function SafetyBar({ x1, x2, y }: { x1: number; x2: number; y: number }) {
  return <rect x={x1} y={y} width={x2 - x1} height={6} rx={2} fill={ORANGE_500} />;
}

function Bar({ cx, cy, dashed = false }: { cx: number; cy: number; dashed?: boolean }) {
  return dashed ? (
    <circle cx={cx} cy={cy} r={6} fill="#ffffff" stroke={GRAY_700} strokeWidth={1.5} strokeDasharray="3 2" />
  ) : (
    <circle cx={cx} cy={cy} r={6} fill={GRAY_700} />
  );
}

function Label({ x, y, title, lines }: { x: number; y: number; title: string; lines: string[] }) {
  return (
    <text x={x} y={y} fontSize={13} fill={GRAY_700} style={FONT}>
      <tspan x={x} fontWeight="bold">
        {title}
      </tspan>
      {lines.map((line) => (
        <tspan key={line} x={x} dy={17}>
          {line}
        </tspan>
      ))}
    </text>
  );
}

function Leader({ x1, y1, x2, y2 }: { x1: number; y1: number; x2: number; y2: number }) {
  return <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={GRAY_500} strokeWidth={1} />;
}

function Legend() {
  return (
    <g>
      <Bar cx={22} cy={262} />
      <text x={32} y={267} fontSize={12} fill={GRAY_500} style={FONT}>
        バー
      </text>
      <Bar cx={76} cy={262} dashed />
      <text x={86} y={267} fontSize={12} fill={GRAY_500} style={FONT}>
        いちばん低い位置のバー
      </text>
    </g>
  );
}

const personStroke = { stroke: GRAY_500, strokeWidth: 5, strokeLinecap: "round" as const, fill: "none" };

export function PowerRackSquat() {
  const backX = 24;
  const frontX = 176; // left edge of the front upright
  const hookY = 120;
  const safetyY = 156;
  return (
    <svg viewBox={`0 0 ${VIEW_W} ${VIEW_H}`} className="w-full h-auto" style={FONT} aria-hidden="true">
      <text x={10} y={20} fontSize={14} fontWeight="bold" fill={GRAY_700}>
        スクワット
      </text>
      <line x1={8} y1={FLOOR_Y} x2={190} y2={FLOOR_Y} stroke={GRAY_500} />
      <Upright x={backX} />
      <Upright x={frontX} />

      {/* Person standing between the uprights, facing the front upright */}
      <circle cx={108} cy={86} r={11} fill={GRAY_500} />
      <path d="M 104 98 L 104 160" {...personStroke} />
      <path d="M 104 160 L 112 200 L 106 236 L 118 236" {...personStroke} />
      <path d="M 104 108 L 96 124 L 95 108" {...personStroke} strokeWidth={4} />
      <Bar cx={97} cy={104} />

      {/* Lowest bar position in the squat, then the safety bar just below it */}
      <Bar cx={80} cy={146} dashed />
      <SafetyBar x1={backX + 6} x2={frontX} y={safetyY} />
      <Hook x={frontX} y={hookY} />

      <Leader x1={182} y1={hookY - 4} x2={196} y2={hookY - 4} />
      <Label x={200} y={hookY - 14} title="フック" lines={["胸の真ん中〜", "脇の下の高さ"]} />
      <Leader x1={182} y1={safetyY + 3} x2={196} y2={safetyY + 3} />
      <Label x={200} y={safetyY + 8} title="セーフティバー" lines={["いちばん深く", "しゃがんだ時の", "バーより数cm下"]} />

      <Legend />
    </svg>
  );
}

export function PowerRackBench() {
  const backX = 18;
  const frontX = 176;
  const hookY = 128;
  const safetyY = 186;
  return (
    <svg viewBox={`0 0 ${VIEW_W} ${VIEW_H}`} className="w-full h-auto" style={FONT} aria-hidden="true">
      <text x={10} y={20} fontSize={14} fontWeight="bold" fill={GRAY_700}>
        ベンチプレス
      </text>
      <line x1={8} y1={FLOOR_Y} x2={190} y2={FLOOR_Y} stroke={GRAY_500} />
      <Upright x={backX} />
      <Upright x={frontX} />

      {/* Bench */}
      <rect x={58} y={198} width={112} height={8} rx={2} fill={GRAY_200} stroke={GRAY_500} />
      <line x1={72} y1={206} x2={72} y2={FLOOR_Y} stroke={GRAY_500} strokeWidth={3} />
      <line x1={158} y1={206} x2={158} y2={FLOOR_Y} stroke={GRAY_500} strokeWidth={3} />

      {/* Person lying on the bench, head toward the front upright */}
      <circle cx={162} cy={186} r={10} fill={GRAY_500} />
      <path d="M 148 192 L 96 192" {...personStroke} />
      <path d="M 96 192 L 70 176 L 56 236 L 44 236" {...personStroke} />
      <path d="M 146 190 L 168 126" {...personStroke} strokeWidth={4} />
      <Bar cx={170} cy={hookY - 10} />

      {/* Bar touching the chest, then the safety bar slightly below it */}
      <Bar cx={140} cy={176} dashed />
      <SafetyBar x1={backX + 6} x2={frontX} y={safetyY} />
      <Hook x={frontX} y={hookY} />

      <Leader x1={182} y1={hookY - 4} x2={196} y2={hookY - 4} />
      <Label x={200} y={hookY} title="フック" lines={["肘をほぼ伸ばした", "まま外せる高さ"]} />
      <Leader x1={182} y1={safetyY + 3} x2={196} y2={safetyY + 3} />
      <Label x={200} y={safetyY + 8} title="セーフティバー" lines={["胸に付けたバーより", "少し下"]} />

      <Legend />
    </svg>
  );
}

export default function PowerRackHeights() {
  return (
    <div className="grid gap-3 md:grid-cols-2">
      <div className="rounded-lg bg-white p-1">
        <PowerRackSquat />
      </div>
      <div className="rounded-lg bg-white p-1">
        <PowerRackBench />
      </div>
    </div>
  );
}
