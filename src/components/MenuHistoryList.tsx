"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getMenuHistory, type MenuHistoryEntry } from "@/lib/menuHistory";

function formatDate(dateStr: string): string {
  const [y, m, d] = dateStr.split("-");
  return `${m}/${d}`;
}

export default function MenuHistoryList() {
  const [history, setHistory] = useState<MenuHistoryEntry[]>([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setHistory(getMenuHistory());
  }, []);

  if (history.length === 0) return null;

  const displayed = open ? history : history.slice(0, 3);

  return (
    <div className="w-full mt-4">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center justify-between w-full px-4 py-2 text-sm font-semibold text-gray-500 hover:text-orange-500 transition-colors"
      >
        <span>📁 過去のメニュー履歴</span>
        <svg
          className={`w-4 h-4 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        {displayed.map((entry, i) => (
          <Link
            key={entry.params}
            href={`/result?${entry.params}`}
            className={`flex items-center justify-between px-4 py-3 hover:bg-orange-50 transition-colors ${
              i < displayed.length - 1 ? "border-b border-gray-100" : ""
            }`}
          >
            <div className="flex items-center gap-3 min-w-0">
              <span className="text-xs font-bold text-orange-400 flex-shrink-0 w-10">
                {formatDate(entry.date)}
              </span>
              <span className="text-sm text-gray-700 truncate">{entry.title}</span>
            </div>
            <svg
              className="w-4 h-4 text-gray-300 flex-shrink-0 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        ))}

        {history.length > 3 && (
          <button
            onClick={() => setOpen((v) => !v)}
            className="w-full py-2 text-xs text-orange-400 hover:text-orange-600 font-semibold transition-colors border-t border-gray-100"
          >
            {open ? "閉じる" : `さらに${history.length - 3}件を見る`}
          </button>
        )}
      </div>
    </div>
  );
}
