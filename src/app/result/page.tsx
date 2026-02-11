"use client";

import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { TrainingMenu } from "@/lib/mockResult";

const LOADING_TIPS = [
  "筋肉は休息中に成長します💪",
  "タンパク質は体重×1.5〜2gが目安！",
  "継続は力なり！まずは2週間続けてみよう",
  "トレーニング前のウォームアップを忘れずに🔥",
  "睡眠は最高のサプリメント💤",
  "水分補給はパフォーマンスに直結します💧",
  "正しいフォームは効果を2倍にする",
  "筋トレ後30分以内の栄養補給が効果的🍗",
];

function LoadingScreen() {
  const [tipIndex, setTipIndex] = useState(() =>
    Math.floor(Math.random() * LOADING_TIPS.length)
  );
  const [fade, setFade] = useState(true);
  const [progress, setProgress] = useState(0);

  const cycleTip = useCallback(() => {
    setFade(false);
    setTimeout(() => {
      setTipIndex((prev) => (prev + 1) % LOADING_TIPS.length);
      setFade(true);
    }, 300);
  }, []);

  useEffect(() => {
    const tipTimer = setInterval(cycleTip, 3500);
    return () => clearInterval(tipTimer);
  }, [cycleTip]);

  useEffect(() => {
    const progressTimer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 90) return prev;
        return prev + Math.random() * 8 + 2;
      });
    }, 500);
    return () => clearInterval(progressTimer);
  }, []);

  return (
    <div className="max-w-md w-full text-center mt-8 animate-slideUp">
      <div className="bg-white rounded-2xl shadow-lg p-8 mb-6">
        <Image
          src="/sakura.png"
          alt="サクラ"
          width={120}
          height={120}
          className="mx-auto mb-6 animate-bounce"
        />

        <p className="text-gray-700 font-semibold mb-6">
          サクラがあなた専用のメニューを作成中...
        </p>

        <div className="w-full bg-orange-100 rounded-full h-2 mb-6 overflow-hidden">
          <div
            className="bg-orange-500 h-2 rounded-full transition-all duration-500 ease-out"
            style={{ width: `${Math.min(progress, 90)}%` }}
          />
        </div>

        <div className="h-12 flex items-center justify-center">
          <p
            className={`text-sm text-gray-500 transition-opacity duration-300 ${fade ? "opacity-100" : "opacity-0"}`}
          >
            {LOADING_TIPS[tipIndex]}
          </p>
        </div>
      </div>
    </div>
  );
}

function ExerciseCard({
  exercise,
}: {
  exercise: TrainingMenu["days"][number]["exercises"][number];
}) {
  return (
    <div className="bg-orange-50 rounded-xl px-4 py-3">
      <div className="flex items-center justify-between">
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
    </div>
  );
}

function ResultContent() {
  const searchParams = useSearchParams();
  const [menu, setMenu] = useState<TrainingMenu | null>(null);
  const [error, setError] = useState<string | null>(null);

  const fetchMenu = useCallback(async () => {
    setError(null);
    setMenu(null);

    const answers: string[] = [];
    for (let i = 0; i < 6; i++) {
      answers.push(searchParams.get(`q${i}`) || "");
    }

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 30000);

    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ answers }),
        signal: controller.signal,
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "メニューの生成に失敗しました。");
        return;
      }

      setMenu(data);
    } catch (err) {
      if (err instanceof DOMException && err.name === "AbortError") {
        setError("通信がタイムアウトしました。通信環境を確認してもう一度お試しください。");
      } else {
        setError("通信エラーが発生しました。通信環境を確認してもう一度お試しください。");
      }
    } finally {
      clearTimeout(timeoutId);
    }
  }, [searchParams]);

  useEffect(() => {
    fetchMenu();
  }, [fetchMenu]);

  if (error) {
    return (
      <div className="max-w-md w-full animate-slideUp text-center">
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-6">
          <Image
            src="/sakura.png"
            alt="サクラ"
            width={80}
            height={80}
            className="mx-auto mb-4"
          />
          <p className="text-red-500 font-semibold mb-2">メニューを作成できませんでした</p>
          <p className="text-gray-500 text-sm mb-6">{error}</p>
          <div className="flex gap-3">
            <button
              onClick={fetchMenu}
              className="flex-1 py-3 px-6 rounded-xl bg-orange-500 text-white font-bold hover:bg-orange-600 transition-colors"
            >
              もう一度試す
            </button>
            <Link
              href="/questions"
              className="flex-1 py-3 px-6 rounded-xl border-2 border-orange-500 text-orange-500 font-bold text-center hover:bg-orange-50 transition-colors"
            >
              質問に戻る
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (!menu) {
    return <LoadingScreen />;
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
