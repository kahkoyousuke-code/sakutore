"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getStreak } from "@/lib/workoutLog";

export default function SavedMenuButton() {
  const [savedParams, setSavedParams] = useState<string | null>(null);
  const [streak, setStreak] = useState(0);

  useEffect(() => {
    setSavedParams(localStorage.getItem("sakutore_saved_params"));
    setStreak(getStreak());
  }, []);

  if (!savedParams) return null;

  return (
    <div className="w-full mt-4">
      {streak > 0 && (
        <p className="text-center text-orange-500 font-bold mb-2">
          🔥 {streak}日連続トレーニング中！
        </p>
      )}
      <Link
        href={`/result?${savedParams}`}
        className="inline-flex items-center justify-center gap-2 w-full bg-white hover:bg-orange-50 text-orange-500 font-bold py-4 px-8 rounded-2xl text-lg border-2 border-orange-400 transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
      >
        <span>📋</span>
        <span>前回のメニューを見る</span>
      </Link>
    </div>
  );
}
