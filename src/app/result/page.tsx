"use client";

import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import Link from "next/link";
import { TrainingMenu } from "@/lib/mockResult";

function ExerciseCard({
  exercise,
}: {
  exercise: TrainingMenu["days"][number]["exercises"][number];
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-orange-50 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-4 py-3 text-left"
      >
        <div className="flex items-center gap-2">
          <svg
            className={`w-4 h-4 text-orange-400 transition-transform duration-200 ${open ? "rotate-90" : ""}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
          <span className="font-medium text-gray-800 text-sm">
            {exercise.name}
          </span>
        </div>
        <div className="flex items-center gap-3 text-xs text-gray-500">
          <span>
            {exercise.sets}×{exercise.reps}
          </span>
          <span className="text-orange-400">休{exercise.rest}</span>
        </div>
      </button>

      {open && (
        <div className="px-4 pb-3 space-y-2 text-xs text-gray-600 border-t border-orange-100 pt-2 mx-2">
          {exercise.howTo && (
            <div>
              <span className="font-semibold text-gray-700">📋 やり方：</span>
              <span className="ml-1">{exercise.howTo}</span>
            </div>
          )}
          {exercise.formTips && (
            <div>
              <span className="font-semibold text-gray-700">🛡️ フォーム：</span>
              <span className="ml-1">{exercise.formTips}</span>
            </div>
          )}
          {exercise.muscleTips && (
            <div>
              <span className="font-semibold text-gray-700">🎯 効かせるコツ：</span>
              <span className="ml-1">{exercise.muscleTips}</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function ResultContent() {
  const searchParams = useSearchParams();
  const [menu, setMenu] = useState<TrainingMenu | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const answers: string[] = [];
    for (let i = 0; i < 6; i++) {
      answers.push(searchParams.get(`q${i}`) || "");
    }

    async function fetchMenu() {
      try {
        const res = await fetch("/api/generate", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ answers }),
        });

        if (!res.ok) {
          throw new Error("メニューの生成に失敗しました");
        }

        const data = await res.json();
        setMenu(data);
      } catch {
        setError("メニューの生成に失敗しました。もう一度お試しください。");
      }
    }

    fetchMenu();
  }, [searchParams]);

  if (error) {
    return (
      <div className="max-w-md w-full animate-slideUp text-center">
        <h1 className="text-2xl font-bold text-orange-500 mb-4">サクトレ</h1>
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <p className="text-red-500 mb-4">{error}</p>
          <Link
            href="/questions"
            className="inline-block py-3 px-6 rounded-xl bg-orange-500 text-white font-bold hover:bg-orange-600 transition-colors"
          >
            もう一度作る
          </Link>
        </div>
      </div>
    );
  }

  if (!menu) {
    return (
      <div className="max-w-md w-full text-center mt-20">
        <h1 className="text-2xl font-bold text-orange-500 mb-6">サクトレ</h1>
        <div className="inline-block w-10 h-10 border-4 border-orange-200 border-t-orange-500 rounded-full animate-spin mb-4" />
        <p className="text-gray-500">AIがメニューを生成中...</p>
      </div>
    );
  }

  const handleShare = () => {
    const text = `${menu.title}\n${menu.description}\n\nサクトレで作成しました！`;
    if (navigator.share) {
      navigator.share({ title: "サクトレ", text });
    } else {
      navigator.clipboard.writeText(text);
      alert("クリップボードにコピーしました！");
    }
  };

  return (
    <div className="max-w-md w-full animate-slideUp">
      <h1 className="text-2xl font-bold text-orange-500 text-center mb-2">
        サクトレ
      </h1>
      <p className="text-center text-gray-500 mb-6">
        あなたにぴったりのメニュー
      </p>

      <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-2">{menu.title}</h2>
        <p className="text-gray-500 text-sm mb-6">{menu.description}</p>

        <div className="space-y-6">
          {menu.days.map((day) => (
            <div key={day.day}>
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  {day.day}
                </span>
                <span className="font-semibold text-gray-700">{day.label}</span>
              </div>

              <div className="space-y-2">
                {day.exercises.map((exercise, i) => (
                  <ExerciseCard key={i} exercise={exercise} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-3">
        <Link
          href="/questions"
          className="flex-1 py-3 px-6 rounded-xl border-2 border-orange-500 text-orange-500 font-bold text-center hover:bg-orange-50 transition-colors"
        >
          もう一度作る
        </Link>
        <button
          onClick={handleShare}
          className="flex-1 py-3 px-6 rounded-xl bg-orange-500 text-white font-bold hover:bg-orange-600 transition-colors"
        >
          シェア
        </button>
      </div>
    </div>
  );
}

export default function ResultPage() {
  return (
    <main className="min-h-screen flex flex-col items-center px-4 py-8">
      <Suspense
        fallback={
          <div className="text-center text-gray-400 mt-20">読み込み中...</div>
        }
      >
        <ResultContent />
      </Suspense>
    </main>
  );
}
