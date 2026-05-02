"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function SavedMenuButton() {
  const [savedParams, setSavedParams] = useState<string | null>(null);

  useEffect(() => {
    setSavedParams(localStorage.getItem("sakutore_saved_params"));
  }, []);

  if (!savedParams) return null;

  return (
    <Link
      href={`/result?${savedParams}`}
      className="inline-flex items-center justify-center gap-2 w-full bg-white hover:bg-orange-50 text-orange-500 font-bold py-4 px-8 rounded-2xl text-lg border-2 border-orange-400 transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 mt-4"
    >
      <span>📋</span>
      <span>前回のメニューを見る</span>
    </Link>
  );
}
