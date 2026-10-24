// Order of visible change after starting strength training:
// inside the body (nerves -> muscle) moves first, the look changes later.
// Period labels are passed in from the article so they stay in one place.

type Props = {
  /** Period label for each of the 4 visible steps (①〜④). Use "\n" to break a line. */
  periods: [string, string, string, string];
};

const STEPS = ["重量が上がる", "触ると硬い", "鏡で気づく", "他人が気づく"];
const MARKS = ["①", "②", "③", "④"];

const COL_X = [12, 98, 184, 270];
const COL_W = 78;

export default function EffectTimelineDiagram({ periods }: Props) {
  return (
    <svg
      viewBox="0 0 360 228"
      className="w-full h-auto"
      fontFamily='"Noto Sans JP", sans-serif'
      aria-hidden="true"
    >
      <defs>
        <marker
          id="effect-timeline-arrow"
          viewBox="0 0 10 10"
          refX="9"
          refY="5"
          markerWidth="6"
          markerHeight="6"
          orient="auto"
        >
          <path d="M0 0 L10 5 L0 10 z" fill="#6b7280" />
        </marker>
      </defs>

      {/* time axis */}
      {periods.map((p, i) =>
        p.split("\n").map((line, j) => (
          <text
            key={`${i}-${j}`}
            x={COL_X[i] + COL_W / 2}
            y={14 + j * 15}
            textAnchor="middle"
            fontSize="12"
            fontWeight="bold"
            fill="#374151"
          >
            {line}
          </text>
        )),
      )}
      <line
        x1="12"
        y1="40"
        x2="346"
        y2="40"
        stroke="#6b7280"
        strokeWidth="1.5"
        markerEnd="url(#effect-timeline-arrow)"
      />

      {/* lane 1: inside the body */}
      <text x="12" y="60" fontSize="12" fill="#6b7280">
        体の中で起きていること
      </text>
      <rect x={COL_X[0]} y="68" width={COL_W} height="30" rx="6" fill="#fdba74" />
      <text
        x={COL_X[0] + COL_W / 2}
        y="88"
        textAnchor="middle"
        fontSize="12"
        fontWeight="bold"
        fill="#374151"
      >
        神経が適応
      </text>
      <rect
        x={COL_X[1]}
        y="68"
        width={COL_X[3] + COL_W - COL_X[1]}
        height="30"
        rx="6"
        fill="#ffedd5"
        stroke="#fdba74"
      />
      <text
        x={(COL_X[1] + COL_X[3] + COL_W) / 2}
        y="88"
        textAnchor="middle"
        fontSize="12"
        fontWeight="bold"
        fill="#374151"
      >
        筋肉そのものが増え始める
      </text>

      {/* lane 2: what you can see */}
      <text x="12" y="122" fontSize="12" fill="#6b7280">
        自分で確認できること
      </text>
      {STEPS.map((label, i) => {
        const visible = i >= 2;
        return (
          <g key={label}>
            <rect
              x={COL_X[i]}
              y="130"
              width={COL_W}
              height="54"
              rx="8"
              fill={visible ? "#ffedd5" : "#ffffff"}
              stroke={visible ? "#f97316" : "#e5e7eb"}
              strokeWidth={visible ? 2 : 1.5}
            />
            <text
              x={COL_X[i] + COL_W / 2}
              y="152"
              textAnchor="middle"
              fontSize="14"
              fontWeight="bold"
              fill={visible ? "#f97316" : "#6b7280"}
            >
              {MARKS[i]}
            </text>
            <text
              x={COL_X[i] + COL_W / 2}
              y="172"
              textAnchor="middle"
              fontSize="12"
              fontWeight="bold"
              fill="#374151"
            >
              {label}
            </text>
          </g>
        );
      })}

      {/* boundary: the look starts to change from ③ */}
      <line
        x1="180"
        y1="110"
        x2="180"
        y2="222"
        stroke="#f97316"
        strokeWidth="1.5"
        strokeDasharray="4 3"
      />

      {/* brackets */}
      <path d="M14 194 V200 H174 V194" fill="none" stroke="#6b7280" strokeWidth="1.2" />
      <text x="94" y="218" textAnchor="middle" fontSize="12" fill="#6b7280">
        見た目は変わらない
      </text>
      <path d="M186 194 V200 H346 V194" fill="none" stroke="#f97316" strokeWidth="1.5" />
      <text
        x="266"
        y="218"
        textAnchor="middle"
        fontSize="12"
        fontWeight="bold"
        fill="#f97316"
      >
        見た目が動き出す
      </text>
    </svg>
  );
}
