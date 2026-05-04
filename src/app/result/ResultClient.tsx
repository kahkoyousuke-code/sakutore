"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { TrainingMenu } from "@/lib/mockResult";
import { findExerciseDetail } from "@/lib/exercises";
import { recordWorkout } from "@/lib/workoutLog";
import { saveMenuHistory } from "@/lib/menuHistory";
import { getMemo, saveMemo, parseSetsCount, type SetRecord } from "@/lib/trainingMemo";

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

function parseRestSeconds(rest: string): number {
  let seconds = 0;
  const minMatch = rest.match(/(\d+)分/);
  const secMatch = rest.match(/(\d+)秒/);
  if (minMatch) seconds += parseInt(minMatch[1]) * 60;
  if (secMatch) seconds += parseInt(secMatch[1]);
  return seconds;
}

function playBeep() {
  try {
    const ctx = new AudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.frequency.value = 880;
    gain.gain.setValueAtTime(0.3, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.8);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.8);
  } catch {}
}

function ExerciseCard({
  exercise,
}: {
  exercise: TrainingMenu["days"][number]["exercises"][number];
}) {
  const [open, setOpen] = useState(false);
  const [timerState, setTimerState] = useState<"idle" | "running" | "done">("idle");
  const [timeLeft, setTimeLeft] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const detail = findExerciseDetail(exercise.name);
  const totalSeconds = parseRestSeconds(exercise.rest);

  const [memoOpen, setMemoOpen] = useState(false);
  const [setRecords, setSetRecords] = useState<SetRecord[]>([]);
  const [savedMemo, setSavedMemo] = useState<SetRecord[] | null>(null);

  useEffect(() => {
    const memo = getMemo(exercise.name);
    const sets = memo?.sets;
    setSavedMemo(Array.isArray(sets) && sets.length > 0 ? sets : null);
  }, [exercise.name]);

  const handleOpenMemo = () => {
    const memo = getMemo(exercise.name);
    if (memo?.sets?.length) {
      setSetRecords(memo.sets);
    } else {
      const count = parseSetsCount(exercise.sets);
      setSetRecords(Array.from({ length: count }, () => ({ weight: "", reps: "" })));
    }
    setMemoOpen(true);
  };

  const handleSaveMemo = () => {
    const filled = setRecords.filter((s) => s.weight || s.reps);
    if (filled.length === 0) return;
    saveMemo(exercise.name, setRecords);
    setSavedMemo(setRecords);
    setMemoOpen(false);
  };

  const updateSet = (i: number, field: keyof SetRecord, value: string) => {
    setSetRecords((prev) => prev.map((s, idx) => idx === i ? { ...s, [field]: value } : s));
  };

  useEffect(() => {
    if (timerState !== "running") return;
    intervalRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(intervalRef.current!);
          setTimerState("done");
          playBeep();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [timerState]);

  useEffect(() => {
    if (timerState !== "done") return;
    const t = setTimeout(() => setTimerState("idle"), 3000);
    return () => clearTimeout(t);
  }, [timerState]);

  const handleTimerClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (timerState === "idle") {
      setTimeLeft(totalSeconds);
      setTimerState("running");
    } else {
      if (intervalRef.current) clearInterval(intervalRef.current);
      setTimerState("idle");
      setTimeLeft(0);
    }
  };

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return m > 0 ? `${m}:${s.toString().padStart(2, "0")}` : `${s}秒`;
  };

  return (
    <div className="bg-orange-50 rounded-xl overflow-hidden">
      <div className="flex items-center justify-between px-4 py-3">
        <button
          onClick={() => detail && setOpen(!open)}
          className={`flex items-center gap-2 flex-1 text-left min-w-0 ${detail ? "cursor-pointer" : "cursor-default"}`}
        >
          {detail && (
            <svg
              className={`w-4 h-4 text-orange-400 flex-shrink-0 transition-transform duration-200 ${open ? "rotate-90" : ""}`}
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
          )}
          <span className="font-medium text-gray-800 text-sm break-words">
            {exercise.name}
          </span>
        </button>
        <div className="flex items-center gap-2 text-xs text-gray-500 flex-shrink-0 ml-2">
          <span>
            {exercise.sets}×{exercise.reps}
          </span>
          {totalSeconds > 0 ? (
            <button
              onClick={handleTimerClick}
              className={`transition-all duration-200 text-xs leading-none py-1 px-2 rounded-full font-semibold ${
                timerState === "idle"
                  ? "text-orange-500 bg-orange-100 hover:bg-orange-200"
                  : timerState === "running"
                  ? "text-white bg-orange-500 tabular-nums"
                  : "text-white bg-green-500"
              }`}
            >
              {timerState === "idle"
                ? `▶ 休${exercise.rest}`
                : timerState === "running"
                ? formatTime(timeLeft)
                : "✓ 完了！"}
            </button>
          ) : (
            <span className="text-orange-400">休{exercise.rest}</span>
          )}
        </div>
      </div>

      {timerState === "running" && totalSeconds > 0 && (
        <div className="h-1 bg-orange-100">
          <div
            className="h-1 bg-orange-500 transition-all duration-1000 ease-linear"
            style={{ width: `${(timeLeft / totalSeconds) * 100}%` }}
          />
        </div>
      )}

      {open && detail && (
        <div className="px-4 pb-3 space-y-3 text-xs text-gray-600 border-t border-orange-100 pt-3 mx-2">
          <div>
            <p className="font-semibold text-gray-700 mb-1">📋 やり方</p>
            <ol className="list-decimal list-inside space-y-0.5 ml-1">
              {detail.howTo.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
          </div>
          <div>
            <p className="font-semibold text-gray-700 mb-1">🛡️ フォームの注意点</p>
            <p className="ml-1">{detail.formTips}</p>
          </div>
          <div>
            <p className="font-semibold text-gray-700 mb-1">🎯 効かせるコツ</p>
            <p className="ml-1">{detail.muscleTips}</p>
          </div>
          <a
            href={`https://www.youtube.com/results?search_query=${encodeURIComponent(exercise.name + " やり方")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-orange-500 font-semibold hover:text-orange-600 transition-colors mt-1"
          >
            📺 動画で見る
          </a>
        </div>
      )}

      <div className="border-t border-orange-100 mx-2">
        {!memoOpen ? (
          <button
            onClick={handleOpenMemo}
            className="flex items-center justify-between w-full px-2 py-2 text-xs text-gray-400 hover:text-orange-500 transition-colors"
          >
            {Array.isArray(savedMemo) && savedMemo.length > 0 ? (
              <span className="text-green-600 font-semibold truncate">
                ✓ {savedMemo.map((s, i) => (s.weight || s.reps) ? `S${i + 1}:${s.weight ? s.weight + "kg" : "-"}×${s.reps ? s.reps + "回" : "-"}` : null).filter(Boolean).join(" ")}
              </span>
            ) : (
              <span>📝 実績を記録する</span>
            )}
            <svg className="w-3 h-3 flex-shrink-0 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536M9 13l6.586-6.586a2 2 0 112.828 2.828L11.828 15.828a2 2 0 01-1.414.586H9v-2a2 2 0 01.586-1.414z" />
            </svg>
          </button>
        ) : (
          <div className="px-2 py-3 space-y-2">
            <p className="text-xs font-semibold text-gray-500">今日の実績</p>
            {setRecords.map((s, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className="text-xs text-gray-400 w-8 flex-shrink-0">S{i + 1}</span>
                <div className="flex items-center gap-1 flex-1">
                  <input
                    type="number"
                    inputMode="decimal"
                    placeholder="重量"
                    value={s.weight}
                    onChange={(e) => updateSet(i, "weight", e.target.value)}
                    className="w-full border border-gray-200 rounded-lg px-2 py-1.5 text-sm text-center focus:outline-none focus:border-orange-400"
                  />
                  <span className="text-xs text-gray-400 flex-shrink-0">kg</span>
                </div>
                <div className="flex items-center gap-1 flex-1">
                  <input
                    type="number"
                    inputMode="numeric"
                    placeholder="回数"
                    value={s.reps}
                    onChange={(e) => updateSet(i, "reps", e.target.value)}
                    className="w-full border border-gray-200 rounded-lg px-2 py-1.5 text-sm text-center focus:outline-none focus:border-orange-400"
                  />
                  <span className="text-xs text-gray-400 flex-shrink-0">回</span>
                </div>
                {setRecords.length > 1 && (
                  <button
                    onClick={() => setSetRecords((prev) => prev.filter((_, idx) => idx !== i))}
                    className="text-gray-300 hover:text-red-400 transition-colors flex-shrink-0"
                  >
                    ✕
                  </button>
                )}
              </div>
            ))}
            <button
              onClick={() => setSetRecords((prev) => [...prev, { weight: "", reps: "" }])}
              className="text-xs text-orange-400 hover:text-orange-600 font-semibold transition-colors"
            >
              ＋ セットを追加
            </button>
            <div className="flex gap-2 pt-1">
              <button
                onClick={handleSaveMemo}
                className="flex-1 py-2 rounded-lg bg-orange-500 text-white text-xs font-bold hover:bg-orange-600 transition-colors"
              >
                保存
              </button>
              <button
                onClick={() => setMemoOpen(false)}
                className="flex-1 py-2 rounded-lg border border-gray-200 text-gray-400 text-xs hover:bg-gray-50 transition-colors"
              >
                キャンセル
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function ResultClient() {
  const searchParams = useSearchParams();
  const [menu, setMenu] = useState<TrainingMenu | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [downloading, setDownloading] = useState(false);
  const [completed, setCompleted] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const fetchMenu = useCallback(async () => {
    setError(null);
    setMenu(null);

    const answers: string[] = [];
    for (let i = 0; i < 6; i++) {
      answers.push(searchParams.get(`q${i}`) || "");
    }

    const currentParams = searchParams.toString();
    const savedParams = localStorage.getItem("sakutore_saved_params");
    const savedMenuStr = localStorage.getItem("sakutore_saved_menu");
    if (savedParams === currentParams && savedMenuStr) {
      try {
        setMenu(JSON.parse(savedMenuStr));
        return;
      } catch {}
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
      localStorage.setItem("sakutore_saved_menu", JSON.stringify(data));
      localStorage.setItem("sakutore_saved_params", currentParams);
      saveMenuHistory(currentParams, data.title);
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

  const exerciseNames = menu.days
    .flatMap((d) => d.exercises.map((e) => e.name))
    .slice(0, 3)
    .join("・");

  const shareUrl = "https://sakutore.vercel.app";

  const handleShareX = () => {
    const text = `AIが私の筋トレメニューを作ってくれた💪\n今日のメニュー：${exerciseNames}\n#サクトレ #筋トレ #AIトレーニング\n${shareUrl}`;
    window.open(
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const handleShareLine = () => {
    const text = `AIが私の筋トレメニューを作ってくれた💪\n今日のメニュー：${exerciseNames}\n#サクトレ #筋トレ #AIトレーニング\n${shareUrl}`;
    window.open(
      `https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const handleDownloadImage = async () => {
    if (!cardRef.current) return;
    setDownloading(true);
    try {
      const html2canvas = (await import("html2canvas")).default;
      const canvas = await html2canvas(cardRef.current, {
        backgroundColor: "#fff7ed",
        scale: 2,
        useCORS: true,
      });
      const link = document.createElement("a");
      link.download = "saktore-menu.png";
      link.href = canvas.toDataURL("image/png");
      link.click();
    } catch {
      alert("画像の生成に失敗しました。");
    } finally {
      setDownloading(false);
    }
  };

  return (
    <div className="max-w-md w-full animate-slideUp">
      <p className="text-center text-gray-500 mb-6">
        あなたにぴったりのメニュー
      </p>

      <div ref={cardRef} className="bg-white rounded-2xl shadow-lg p-6 mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-2">{menu.title}</h2>
        {searchParams.get("q4") &&
          searchParams.get("q4") !== "特にこだわりなし（全体的に鍛えたい）" && (
            <p className="text-orange-600 text-xs font-semibold mb-2">
              重点部位：
              {searchParams.get("q4")!.split(",").join("、")}
            </p>
          )}
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

        <p className="text-center text-orange-400 text-xs mt-6 font-semibold">
          サクトレ｜sakutore.vercel.app
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-4 mb-4">
        {completed ? (
          <div className="text-center py-2">
            <p className="text-3xl mb-1">🎉</p>
            <p className="text-green-600 font-bold text-lg">今日のトレーニング完了！</p>
            <p className="text-gray-400 text-sm mt-1">お疲れ様でした！</p>
          </div>
        ) : (
          <button
            onClick={() => {
              recordWorkout();
              setCompleted(true);
            }}
            className="w-full py-4 rounded-xl bg-green-500 hover:bg-green-600 text-white font-bold text-lg transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
          >
            💪 今日のトレーニング完了！
          </button>
        )}
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-4 mb-4">
        <p className="text-center text-gray-500 text-sm mb-3 font-semibold">シェアする</p>
        <div className="flex gap-2">
          <button
            onClick={handleShareX}
            className="flex-1 flex items-center justify-center gap-1.5 py-3 px-3 rounded-xl bg-black text-white font-bold text-sm hover:bg-gray-800 transition-colors"
          >
            <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.26 5.632zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
            <span>X</span>
          </button>

          <button
            onClick={handleShareLine}
            className="flex-1 flex items-center justify-center gap-1.5 py-3 px-3 rounded-xl bg-[#06C755] text-white font-bold text-sm hover:bg-[#05a847] transition-colors"
          >
            <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
            </svg>
            <span>LINE</span>
          </button>

          <button
            onClick={handleDownloadImage}
            disabled={downloading}
            className="flex-1 flex items-center justify-center gap-1.5 py-3 px-3 rounded-xl bg-blue-500 text-white font-bold text-sm hover:bg-blue-600 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {downloading ? (
              <svg className="w-4 h-4 animate-spin flex-shrink-0" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
              </svg>
            ) : (
              <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            )}
            <span>{downloading ? "生成中" : "画像"}</span>
          </button>
        </div>
      </div>

      <div className="flex gap-3 mb-4">
        <Link
          href="/questions"
          className="flex-1 py-3 px-6 rounded-xl border-2 border-orange-500 text-orange-500 font-bold text-center hover:bg-orange-50 transition-colors"
        >
          もう一度作る
        </Link>
      </div>

      <a
        href={process.env.NEXT_PUBLIC_SAKUMESHI_URL ?? "https://sakumeshi.vercel.app/"}
        target="_blank"
        rel="noopener noreferrer"
        className="block mt-4 py-4 px-6 rounded-2xl bg-orange-50 border-2 border-orange-300 text-center hover:bg-orange-100 transition-all duration-200 hover:shadow-md hover:-translate-y-0.5"
      >
        <p className="text-orange-600 font-bold text-base">
          🍚 食事メニューも一緒に作ろう！
        </p>
        <p className="text-orange-500 text-sm mt-0.5">→ サクメシ</p>
      </a>

      <div className="mt-4 rounded-2xl overflow-hidden shadow-lg border-2 border-purple-400 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="bg-purple-500 px-4 py-2 text-center">
          <p className="text-white text-xs font-bold tracking-wide">🧴 トレーニングと一緒にサプリも最適化しよう</p>
        </div>
        <div className="px-6 py-5 text-center">
          <p className="text-gray-800 font-bold text-base mb-1">
            あなたに合ったサプリをAIが無料診断
          </p>
          <p className="text-gray-500 text-sm mb-4">
            目的・体質・ライフスタイルに合わせて最適なサプリをご提案
          </p>
          <a
            href="https://sakusuppu.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full py-4 px-6 rounded-xl bg-purple-500 text-white font-bold text-sm hover:bg-purple-600 transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 active:translate-y-0"
          >
            サクサプで診断してみる →
          </a>
        </div>
      </div>

      <div className="mt-6 rounded-2xl overflow-hidden shadow-lg border-2 border-red-400 bg-gradient-to-br from-red-50 to-orange-50">
        <div className="bg-red-500 px-4 py-2 text-center">
          <p className="text-white text-xs font-bold tracking-wide">💪 本格的に鍛えたい方へ</p>
        </div>
        <div className="px-6 py-5 text-center">
          <p className="text-gray-800 font-bold text-base mb-1">
            プロのサポートで確実に結果を出したい方へ
          </p>
          <p className="text-gray-500 text-sm mb-1">
            専属トレーナーがマンツーマンで指導
          </p>
          <p className="text-red-500 font-semibold text-sm mb-4">
            🎁 無料カウンセリング実施中！
          </p>
          <a
            href="https://px.a8.net/svt/ejp?a8mat=2NIA6D+5B45YQ+3D3Q+62MDE"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full py-4 px-6 rounded-xl bg-red-500 text-white font-bold text-sm hover:bg-red-600 transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 active:translate-y-0"
          >
            ライザップの無料カウンセリングを予約する →
          </a>
          <p className="text-gray-400 text-xs mt-3">※ 本リンクはアフィリエイトリンクです</p>
        </div>
      </div>
    </div>
  );
}
