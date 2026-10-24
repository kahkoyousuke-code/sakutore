const ORANGE_500 = "#f97316";
const ORANGE_300 = "#fdba74";
const ORANGE_100 = "#ffedd5";
const GRAY_700 = "#374151";
const GRAY_500 = "#6b7280";

const W = 360;
const NODE_X = 24;
const NODE_W = 260;
const NODE_H = 50;
const GAP = 22;
const TOP = 8;

type Node = { title: string; sub?: string; emphasis?: boolean };

// Mechanisms are the ones the article lists (muscle loss, metabolic adaptation,
// appetite hormones) and its conclusion that regained weight is fat.
const NODES: Node[] = [
  { title: "① 食事制限だけで減量" },
  { title: "② 脂肪と一緒に筋肉も落ちる", sub: "筋肉の分解（異化）で基礎代謝が下がる" },
  { title: "③ 体が省エネに・食欲が増す", sub: "代謝適応／グレリン↑・レプチン↓" },
  { title: "④ 元の食事に戻す・食べすぎる" },
  { title: "⑤ 戻ってくるのは脂肪", sub: "同じ体重でも体脂肪率は前より高い", emphasis: true },
];

export default function ReboundLoopDiagram() {
  const nodeY = (i: number) => TOP + i * (NODE_H + GAP);
  const lastY = nodeY(NODES.length - 1);
  const loopX = 330;
  const loopTop = nodeY(0) + NODE_H / 2;
  const loopBottom = lastY + NODE_H / 2;
  const contrastY = lastY + NODE_H + 26;
  const contrastH = 62;
  const height = contrastY + contrastH + 6;

  return (
    <svg
      viewBox={`0 0 ${W} ${height}`}
      className="w-full h-auto"
      aria-hidden="true"
      style={{ fontFamily: '"Noto Sans JP", sans-serif' }}
    >
      {NODES.map((n, i) => {
        const y = nodeY(i);
        const cx = NODE_X + NODE_W / 2;
        const titleColor = n.emphasis ? "#ffffff" : GRAY_700;
        return (
          <g key={n.title}>
            <rect
              x={NODE_X}
              y={y}
              width={NODE_W}
              height={NODE_H}
              rx={8}
              fill={n.emphasis ? ORANGE_500 : ORANGE_100}
              stroke={n.emphasis ? ORANGE_500 : ORANGE_300}
              strokeWidth={1.5}
            />
            <text
              x={cx}
              y={n.sub ? y + 18 : y + NODE_H / 2}
              textAnchor="middle"
              dominantBaseline="central"
              fontSize={14}
              fontWeight={700}
              fill={titleColor}
            >
              {n.title}
            </text>
            {n.sub && (
              <text
                x={cx}
                y={y + 36}
                textAnchor="middle"
                dominantBaseline="central"
                fontSize={12}
                fill={n.emphasis ? "#ffffff" : GRAY_500}
              >
                {n.sub}
              </text>
            )}
            {i < NODES.length - 1 && (
              <path
                d={`M ${cx - 6} ${y + NODE_H + 5} L ${cx + 6} ${y + NODE_H + 5} L ${cx} ${y + NODE_H + GAP - 4} Z`}
                fill={GRAY_500}
              />
            )}
          </g>
        );
      })}

      {/* Loop back: ⑤ → ① (the diet starts again) */}
      <path
        d={`M ${NODE_X + NODE_W} ${loopBottom} H ${loopX} V ${loopTop} H ${NODE_X + NODE_W + 10}`}
        fill="none"
        stroke={GRAY_500}
        strokeWidth={2}
      />
      <path
        d={`M ${NODE_X + NODE_W + 2} ${loopTop} L ${NODE_X + NODE_W + 12} ${loopTop - 6} L ${NODE_X + NODE_W + 12} ${loopTop + 6} Z`}
        fill={GRAY_500}
      />
      <rect
        x={loopX - 26}
        y={(loopTop + loopBottom) / 2 - 12}
        width={52}
        height={24}
        rx={4}
        fill="#ffffff"
        stroke={GRAY_500}
        strokeWidth={1}
      />
      <text
        x={loopX}
        y={(loopTop + loopBottom) / 2}
        textAnchor="middle"
        dominantBaseline="central"
        fontSize={12}
        fontWeight={700}
        fill={GRAY_700}
      >
        くり返す
      </text>

      {/* Contrast: with strength training */}
      <rect
        x={NODE_X}
        y={contrastY}
        width={W - NODE_X * 2}
        height={contrastH}
        rx={8}
        fill="#ffffff"
        stroke={GRAY_500}
        strokeWidth={1.5}
        strokeDasharray="5 4"
      />
      <text
        x={W / 2}
        y={contrastY + 21}
        textAnchor="middle"
        dominantBaseline="central"
        fontSize={14}
        fontWeight={700}
        fill={GRAY_700}
      >
        筋トレを組み合わせると
      </text>
      <text
        x={W / 2}
        y={contrastY + 43}
        textAnchor="middle"
        dominantBaseline="central"
        fontSize={13}
        fill={GRAY_700}
      >
        ②で筋肉が残る → 落とした体重が戻りにくい
      </text>
    </svg>
  );
}
