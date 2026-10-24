import { recoveryFor } from "@/lib/recoveryStandards";

export type SplitDay = {
  /** Weekday in Japanese, one of 月〜日. */
  day: string;
  /** Text shown in the cell (e.g. 全身A, 上, 押す). */
  label: string;
  /** Same group = same muscles. Used to compute the rest interval. */
  group: string;
};

export type SplitSchedule = {
  freq: string;
  split: string;
  days: SplitDay[];
};

const WEEKDAYS = ["月", "火", "水", "木", "金", "土", "日"];

// Cell styles per group order (1st, 2nd, 3rd group in the row). Labels carry the meaning too.
const GROUP_STYLES = [
  "bg-orange-500 text-white border-orange-500",
  "bg-orange-300 text-gray-800 border-orange-300",
  "bg-orange-100 text-gray-700 border-orange-300",
];

/** Rest days between sessions of the same group, assuming the week repeats. */
function restDays(days: SplitDay[], group: string): number[] {
  const idx = days
    .filter((d) => d.group === group)
    .map((d) => WEEKDAYS.indexOf(d.day))
    .sort((a, b) => a - b);
  return idx.map((cur, i) => {
    const next = i + 1 < idx.length ? idx[i + 1] : idx[0] + 7;
    return next - cur - 1;
  });
}

function formatRest(gaps: number[]): string {
  const min = Math.min(...gaps);
  const max = Math.max(...gaps);
  return min === max ? `中${min}日` : `中${min}〜${max}日`;
}

export default function SplitWeekCalendar({ schedules }: { schedules: SplitSchedule[] }) {
  const large = recoveryFor("large");
  const minRest = Math.min(
    ...schedules.flatMap((s) =>
      Array.from(new Set(s.days.map((d) => d.group))).flatMap((g) => restDays(s.days, g)),
    ),
  );

  return (
    <div>
      <div className="grid grid-cols-7 gap-1 text-center text-xs font-bold text-gray-500 mb-1">
        {WEEKDAYS.map((w) => (
          <div key={w}>{w}</div>
        ))}
      </div>

      <div className="space-y-3">
        {schedules.map((s) => {
          const groups = Array.from(new Set(s.days.map((d) => d.group)));
          return (
            <div key={s.freq}>
              <p className="text-xs font-bold text-gray-700 mb-1">
                {s.freq}｜{s.split}
              </p>
              <div className="grid grid-cols-7 gap-1">
                {WEEKDAYS.map((w) => {
                  const d = s.days.find((x) => x.day === w);
                  if (!d) {
                    return (
                      <div
                        key={w}
                        className="rounded-md border border-gray-200 bg-white py-2 text-center text-xs text-gray-500"
                      >
                        休
                      </div>
                    );
                  }
                  const style = GROUP_STYLES[groups.indexOf(d.group) % GROUP_STYLES.length];
                  return (
                    <div
                      key={w}
                      className={`rounded-md border py-2 text-center text-xs font-bold whitespace-nowrap ${style}`}
                    >
                      {d.label}
                    </div>
                  );
                })}
              </div>
              <p className="mt-1 text-xs text-gray-600">
                {groups.map((g) => `${g}：${formatRest(restDays(s.days, g))}`).join("　")}
              </p>
            </div>
          );
        })}
      </div>

      <p className="mt-3 rounded-md bg-white border border-orange-300 px-2 py-1.5 text-xs text-gray-700">
        どの組み方も、同じ部位の間は<span className="font-bold">中{minRest}日以上</span>あく
        （{large.part}の目安：{large.interval}）
      </p>
    </div>
  );
}
