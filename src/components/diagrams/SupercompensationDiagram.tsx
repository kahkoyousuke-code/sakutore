import { recoveryFor } from "@/lib/recoveryStandards";

// Supercompensation: training -> micro-damage drops the level -> repair ->
// ends up slightly above the starting level. Training again during the dip
// means the repair cannot catch up. Hours come from recoveryStandards.ts.

const BASE_Y = 120;
const CURVE =
  "M24 120 L40 120 C60 120 75 172 100 172 C130 172 150 135 175 120 C200 105 220 74 245 74 C270 74 290 78 316 82";

export default function SupercompensationDiagram() {
  const { hours } = recoveryFor("large");
  return (
    <svg
      viewBox="0 36 360 204"
      className="w-full h-auto"
      fontFamily='"Noto Sans JP", sans-serif'
      aria-hidden="true"
    >
      <defs>
        <clipPath id="supercomp-below">
          <rect x="0" y={BASE_Y} width="360" height="120" />
        </clipPath>
        <clipPath id="supercomp-above">
          <rect x="0" y="0" width="360" height={BASE_Y} />
        </clipPath>
      </defs>

      {/* fills: dip (damage) and gain (supercompensation) */}
      <path d={`${CURVE} L316 ${BASE_Y} Z`} fill="#e5e7eb" clipPath="url(#supercomp-below)" />
      <path d={`${CURVE} L316 ${BASE_Y} Z`} fill="#ffedd5" clipPath="url(#supercomp-above)" />

      {/* baseline */}
      <line
        x1="16"
        y1={BASE_Y}
        x2="348"
        y2={BASE_Y}
        stroke="#6b7280"
        strokeWidth="1.2"
        strokeDasharray="4 3"
      />
      <text x="348" y={BASE_Y + 18} textAnchor="end" fontSize="12" fill="#6b7280">
        元のレベル
      </text>

      {/* too early: training again during the dip */}
      <line x1="130" y1="78" x2="130" y2="166" stroke="#374151" strokeWidth="1.2" strokeDasharray="2 3" />
      <text x="124" y="54" textAnchor="end" fontSize="12" fill="#374151">
        ここで鍛えると
      </text>
      <text x="124" y="70" textAnchor="end" fontSize="12" fontWeight="bold" fill="#374151">
        修復が追いつかない
      </text>

      {/* curve */}
      <path d={CURVE} fill="none" stroke="#f97316" strokeWidth="3" strokeLinecap="round" />

      {/* training point */}
      <circle cx="40" cy={BASE_Y} r="5" fill="#374151" />
      <text x="20" y={BASE_Y - 12} fontSize="12" fontWeight="bold" fill="#374151">
        トレーニング
      </text>

      {/* dip label */}
      <text x="100" y="192" textAnchor="middle" fontSize="12" fill="#374151">
        微細な損傷→修復
      </text>

      {/* supercompensation peak */}
      <circle cx="245" cy="74" r="5" fill="#f97316" />
      <text x="245" y="56" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#f97316">
        超回復（元より強く）
      </text>

      {/* timing bracket */}
      <path d="M40 204 V210 H245 V204" fill="none" stroke="#6b7280" strokeWidth="1.2" />
      <text x="142" y="228" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#374151">
        超回復まで {hours}
      </text>
    </svg>
  );
}
