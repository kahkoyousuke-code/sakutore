"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  getMuscleGroupStatuses,
  getNextDaySuggestion,
  type MuscleGroupInfo,
  type NextDaySuggestion,
} from "@/lib/muscleGroupSuggestion";

const STATUS_CONFIG: Record<string, { label: string; bg: string; text: string; dot: string }> = {
  ready:     { label: "準備OK",  bg: "bg-green-100",  text: "text-green-700",  dot: "bg-green-500" },
  almost:    { label: "もうすぐ", bg: "bg-yellow-100", text: "text-yellow-700", dot: "bg-yellow-400" },
  recovering:{ label: "回復中",  bg: "bg-red-100",    text: "text-red-600",    dot: "bg-red-400"   },
  unknown:   { label: "未記録",  bg: "bg-gray-100",   text: "text-gray-400",   dot: "bg-gray-300"  },
};

export default function TodaySuggestion() {
  const [groups, setGroups] = useState<MuscleGroupInfo[]>([]);
  const [nextDay, setNextDay] = useState<NextDaySuggestion | null>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setGroups(getMuscleGroupStatuses());
    setNextDay(getNextDaySuggestion());
    setLoaded(true);
  }, []);

  if (!loaded) return null;

  const hasRecoveryData = groups.some((g) => g.status !== "unknown");
  if (!nextDay && !hasRecoveryData) return null;

  return (
    <div className="w-full mt-4 space-y-3">
      {nextDay && (
        <div className="bg-orange-50 border-2 border-orange-200 rounded-2xl p-4 text-left">
          <p className="text-xs font-bold text-orange-400 mb-1">今日のおすすめ</p>
          <p className="text-base font-bold text-gray-800">
            {nextDay.day.day}：{nextDay.day.label}
          </p>
          <p className="text-xs text-gray-500 mb-3 truncate">{nextDay.menuTitle}</p>
          <div className="space-y-1 mb-3">
            {nextDay.day.exercises.map((ex) => (
              <div key={ex.name} className="flex items-center gap-2 text-sm text-gray-700">
                <span className="text-orange-400 flex-shrink-0">•</span>
                <span className="truncate">{ex.name}</span>
                <span className="text-gray-400 text-xs flex-shrink-0">
                  {ex.sets}セット × {ex.reps}
                </span>
              </div>
            ))}
          </div>
          <Link
            href="/result?source=chat"
            className="inline-block w-full text-center bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-xl text-sm transition-colors"
          >
            このメニューでトレーニングする
          </Link>
        </div>
      )}

      {hasRecoveryData && (
        <div className="bg-white rounded-2xl shadow-lg p-4">
          <p className="text-xs font-bold text-gray-500 mb-3">部位の回復状況</p>
          <div className="grid grid-cols-3 gap-2">
            {groups.map((g) => {
              const cfg = STATUS_CONFIG[g.status];
              return (
                <div
                  key={g.group}
                  className={`${cfg.bg} rounded-xl px-2 py-2 flex flex-col items-center gap-1`}
                >
                  <span className="text-sm font-bold text-gray-700">{g.group}</span>
                  <div className="flex items-center gap-1">
                    <span className={`w-2 h-2 rounded-full flex-shrink-0 ${cfg.dot}`} />
                    <span className={`text-xs font-medium ${cfg.text}`}>{cfg.label}</span>
                  </div>
                  {g.daysSince !== null && (
                    <span className="text-xs text-gray-400">
                      {g.daysSince === 0 ? "本日" : `${g.daysSince}日前`}
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
