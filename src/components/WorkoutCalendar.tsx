"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getWorkoutLog } from "@/lib/workoutLog";
import { getMenuHistory, type MenuHistoryEntry } from "@/lib/menuHistory";

function toLocalDateStr(date: Date): string {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}

const DAY_LABELS = ["日", "月", "火", "水", "木", "金", "土"];

export default function WorkoutCalendar() {
  const router = useRouter();
  const [log, setLog] = useState<Set<string>>(new Set());
  const [historyMap, setHistoryMap] = useState<Map<string, MenuHistoryEntry>>(new Map());
  const [year, setYear] = useState(0);
  const [month, setMonth] = useState(0);

  useEffect(() => {
    const now = new Date();
    setYear(now.getFullYear());
    setMonth(now.getMonth());
    setLog(new Set(getWorkoutLog()));
    const map = new Map<string, MenuHistoryEntry>();
    for (const entry of getMenuHistory()) {
      if (!map.has(entry.date)) map.set(entry.date, entry);
    }
    setHistoryMap(map);
  }, []);

  if (year === 0) return null;

  const today = toLocalDateStr(new Date());
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const prevMonth = () => {
    if (month === 0) { setYear(y => y - 1); setMonth(11); }
    else setMonth(m => m - 1);
  };
  const nextMonth = () => {
    if (month === 11) { setYear(y => y + 1); setMonth(0); }
    else setMonth(m => m + 1);
  };

  const cells: (number | null)[] = [
    ...Array(firstDay).fill(null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ];
  while (cells.length % 7 !== 0) cells.push(null);

  const workedDays = cells.filter((d): d is number => {
    if (!d) return false;
    const dateStr = `${year}-${String(month + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
    return log.has(dateStr);
  }).length;

  return (
    <div className="bg-white rounded-2xl shadow-lg p-4 w-full mt-4">
      <div className="flex items-center justify-between mb-3">
        <button onClick={prevMonth} className="text-gray-400 hover:text-orange-500 px-2 py-1 text-lg">‹</button>
        <div className="text-center">
          <p className="font-bold text-gray-700">{year}年{month + 1}月</p>
          {workedDays > 0 && (
            <p className="text-xs text-orange-500">{workedDays}日トレーニング済み</p>
          )}
        </div>
        <button onClick={nextMonth} className="text-gray-400 hover:text-orange-500 px-2 py-1 text-lg">›</button>
      </div>

      <div className="grid grid-cols-7 mb-1">
        {DAY_LABELS.map((d, i) => (
          <div key={d} className={`text-center text-xs font-semibold py-1 ${i === 0 ? "text-red-400" : i === 6 ? "text-blue-400" : "text-gray-400"}`}>
            {d}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-y-1">
        {cells.map((day, i) => {
          if (!day) return <div key={`empty-${i}`} />;
          const dateStr = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
          const isToday = dateStr === today;
          const worked = log.has(dateStr);
          const entry = historyMap.get(dateStr);
          const dayOfWeek = i % 7;

          const cell = (
            <div
              className={`flex items-center justify-center h-8 w-8 mx-auto rounded-full text-sm font-medium
                ${worked ? "bg-green-500 text-white" : ""}
                ${isToday && !worked ? "border-2 border-orange-400 text-orange-500 font-bold" : ""}
                ${!worked && !isToday ? (dayOfWeek === 0 ? "text-red-400" : dayOfWeek === 6 ? "text-blue-400" : "text-gray-700") : ""}
                ${worked && entry ? "cursor-pointer hover:bg-green-600 active:scale-95 transition-all" : ""}
              `}
            >
              {day}
            </div>
          );

          if (worked && entry) {
            return (
              <button
                key={dateStr}
                onClick={() => router.push(`/result?${entry.params}`)}
                className="flex items-center justify-center"
                title={entry.title}
              >
                {cell}
              </button>
            );
          }

          return <div key={dateStr}>{cell}</div>;
        })}
      </div>
    </div>
  );
}
