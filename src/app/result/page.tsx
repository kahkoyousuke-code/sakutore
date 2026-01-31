"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import Link from "next/link";
import { getTrainingMenu } from "@/lib/mockResult";

function ResultContent() {
  const searchParams = useSearchParams();

  const answers: string[] = [];
  for (let i = 0; i < 6; i++) {
    answers.push(searchParams.get(`q${i}`) || "");
  }

  const menu = getTrainingMenu(answers);

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
                  <div
                    key={i}
                    className="flex items-center justify-between bg-orange-50 rounded-xl px-4 py-3"
                  >
                    <span className="font-medium text-gray-800 text-sm">
                      {exercise.name}
                    </span>
                    <div className="flex items-center gap-3 text-xs text-gray-500">
                      <span>
                        {exercise.sets}×{exercise.reps}
                      </span>
                      <span className="text-orange-400">休{exercise.rest}</span>
                    </div>
                  </div>
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
