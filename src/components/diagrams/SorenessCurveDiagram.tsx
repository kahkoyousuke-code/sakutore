import { SORENESS_LONG_HOURS, sorenessPhases } from "@/lib/recoveryStandards";

// Delayed-onset muscle soreness over time: low right after training,
// peaks later, then fades. Phase boundaries come from recoveryStandards.ts.

type Phase = { start: number; end: number | null; isPeak: boolean };

// Parse "6〜24時間", "直後〜6時間", "72時間以降" into hour ranges.
const phases: Phase[] = sorenessPhases.map((p) => {
  const nums = (p.timing.match(/\d+/g) ?? []).map(Number);
  const isPeak = p.state.includes("ピーク");
  if (nums.length >= 2) return { start: nums[0], end: nums[1], isPeak };
  if (p.timing.includes("以降")) return { start: nums[0] ?? 0, end: null, isPeak };
  return { start: 0, end: nums[0] ?? 0, isPeak };
});

const peak = phases.find((p) => p.isPeak) ?? phases[2];
const peakStart = peak.start;
const peakEnd = peak.end ?? peak.start + 24;
const peakMid = (peakStart + peakEnd) / 2;

const MAX_H = SORENESS_LONG_HOURS + 24;
const X0 = 16;
const X1 = 328;
const Y_TOP = 60;
const Y_BASE = 176;

const xOf = (h: number) => X0 + ((X1 - X0) * h) / MAX_H;
const yOf = (v: number) => Y_BASE - (Y_BASE - Y_TOP) * v;

// Shape only (relative intensity 0..1); the hours are the module's.
const firstEnd = phases[0].end ?? 6;
const shape: [number, number][] = [
  [0, 0.04],
  [firstEnd, 0.14],
  [peakStart, 0.75],
  [peakMid, 1],
  [peakEnd, 0.75],
  [SORENESS_LONG_HOURS, 0.12],
  [MAX_H, 0.03],
];
const points = shape.map(([h, v]): [number, number] => [xOf(h), yOf(v)]);

// Catmull-Rom -> cubic Bezier for a smooth curve through the points.
function smoothPath(pts: [number, number][]): string {
  let d = `M${pts[0][0].toFixed(1)} ${pts[0][1].toFixed(1)}`;
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[i - 1] ?? pts[i];
    const p1 = pts[i];
    const p2 = pts[i + 1];
    const p3 = pts[i + 2] ?? p2;
    const c1x = p1[0] + (p2[0] - p0[0]) / 6;
    const c1y = Math.min(Y_BASE, p1[1] + (p2[1] - p0[1]) / 6);
    const c2x = p2[0] - (p3[0] - p1[0]) / 6;
    const c2y = Math.min(Y_BASE, p2[1] - (p3[1] - p1[1]) / 6);
    d += ` C${c1x.toFixed(1)} ${c1y.toFixed(1)} ${c2x.toFixed(1)} ${c2y.toFixed(1)} ${p2[0].toFixed(1)} ${p2[1].toFixed(1)}`;
  }
  return d;
}

const curve = smoothPath(points);
const ticks = Array.from(
  new Set(phases.flatMap((p) => (p.end === null ? [p.start] : [p.start, p.end]))),
).sort((a, b) => a - b);

export default function SorenessCurveDiagram() {
  const longX = xOf(SORENESS_LONG_HOURS);
  return (
    <svg
      viewBox="0 32 360 190"
      className="w-full h-auto"
      fontFamily='"Noto Sans JP", sans-serif'
      aria-hidden="true"
    >
      {/* peak band */}
      <rect
        x={xOf(peakStart)}
        y={Y_TOP - 4}
        width={xOf(peakEnd) - xOf(peakStart)}
        height={Y_BASE - Y_TOP + 4}
        fill="#ffedd5"
      />
      <text
        x={xOf(peakMid)}
        y={Y_TOP - 12}
        textAnchor="middle"
        fontSize="12"
        fontWeight="bold"
        fill="#f97316"
      >
        {sorenessPhases[phases.indexOf(peak)].state}
      </text>

      {/* axes */}
      <text x={X0} y={Y_TOP - 12} fontSize="12" fill="#6b7280">
        痛み
      </text>
      <line x1={X0} y1={Y_TOP - 4} x2={X0} y2={Y_BASE} stroke="#6b7280" strokeWidth="1.2" />
      <line x1={X0} y1={Y_BASE} x2={X1} y2={Y_BASE} stroke="#6b7280" strokeWidth="1.2" />

      {/* threshold: still sore after this = too much volume */}
      <line
        x1={longX}
        y1={Y_TOP - 4}
        x2={longX}
        y2={Y_BASE}
        stroke="#6b7280"
        strokeWidth="1.2"
        strokeDasharray="4 3"
      />
      <text x={longX + 6} y={Y_TOP + 10} fontSize="12" fontWeight="bold" fill="#374151">
        {SORENESS_LONG_HOURS}時間以降
      </text>
      <text x={longX + 6} y={Y_TOP + 28} fontSize="12" fill="#374151">
        ほぼ消える
      </text>
      <text x={longX + 6} y={Y_TOP + 46} fontSize="12" fill="#6b7280">
        残れば量が多すぎ
      </text>

      {/* curve */}
      <path d={curve} fill="none" stroke="#f97316" strokeWidth="3" strokeLinecap="round" />

      {/* ticks */}
      {ticks.map((h) => (
        <g key={h}>
          <line x1={xOf(h)} y1={Y_BASE} x2={xOf(h)} y2={Y_BASE + 4} stroke="#6b7280" />
          <text
            x={xOf(h)}
            y={Y_BASE + 18}
            textAnchor="middle"
            fontSize="12"
            fill="#374151"
          >
            {h === 0 ? "直後" : h}
          </text>
        </g>
      ))}
      <text
        x={(X0 + X1) / 2}
        y={Y_BASE + 40}
        textAnchor="middle"
        fontSize="12"
        fill="#6b7280"
      >
        トレーニング後の経過（時間）
      </text>
    </svg>
  );
}
