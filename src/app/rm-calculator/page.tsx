"use client";

import { useState } from "react";
import Link from "next/link";

type CalcResult = {
  oneRM: number;
  table: { rm: number; weight: number }[];
};

const EXERCISES = [
  { id: "bench", label: "ベンチプレス", icon: "🏋️" },
  { id: "squat", label: "スクワット", icon: "🦵" },
  { id: "deadlift", label: "デッドリフト", icon: "💪" },
] as const;

function calcEpley(weight: number, reps: number): CalcResult {
  const oneRM = reps === 1 ? weight : weight * (1 + reps / 30);
  const table = Array.from({ length: 14 }, (_, i) => {
    const n = i + 2;
    return { rm: n, weight: Math.round((oneRM / (1 + n / 30)) * 10) / 10 };
  });
  return { oneRM: Math.round(oneRM * 10) / 10, table };
}

function getZone(rm: number): { label: string; rowClass: string } {
  if (rm <= 3) return { label: "最大筋力向上", rowClass: "bg-red-50 text-red-700" };
  if (rm <= 6) return { label: "筋力・筋肥大", rowClass: "bg-orange-50 text-orange-700" };
  if (rm <= 12) return { label: "筋肥大メイン", rowClass: "bg-yellow-50 text-yellow-700" };
  return { label: "筋持久力", rowClass: "bg-green-50 text-green-700" };
}

export default function RMCalculatorPage() {
  const [exercise, setExercise] = useState<string>("bench");
  const [weight, setWeight] = useState("");
  const [reps, setReps] = useState("");
  const [result, setResult] = useState<CalcResult | null>(null);
  const [error, setError] = useState("");

  const handleCalc = () => {
    const w = parseFloat(weight);
    const r = parseInt(reps, 10);
    if (!weight || !reps || isNaN(w) || isNaN(r) || w <= 0 || r <= 0) {
      setError("重量と回数を正しく入力してください");
      return;
    }
    if (r > 30) {
      setError("回数は30回以下で入力してください");
      return;
    }
    setError("");
    setResult(calcEpley(w, r));
  };

  const exerciseLabel = EXERCISES.find((e) => e.id === exercise)?.label ?? "";

  return (
    <main className="min-h-screen flex flex-col items-center px-4 py-8">
      <div className="max-w-md w-full animate-slideUp space-y-4">

        <div className="text-center mb-2">
          <h1 className="text-2xl font-bold text-gray-800">RM換算計算ツール</h1>
          <p className="text-gray-500 text-sm mt-1">ビッグ3対応・Epley式</p>
        </div>

        <div className="bg-orange-50 rounded-2xl p-4 text-sm text-gray-700 leading-relaxed">
          <p className="font-bold text-orange-600 mb-1">RMとは？</p>
          <p>
            RM（Repetition Maximum）とは、ある重量で最大何回挙上できるかを示す指標です。
            1RMは1回しか持ち上げられない最大重量のこと。
            トレーニング強度を設定する基準として広く活用されます。
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 space-y-5">
          <div>
            <p className="text-sm font-bold text-gray-700 mb-2">種目を選ぶ</p>
            <div className="grid grid-cols-3 gap-2">
              {EXERCISES.map((ex) => (
                <button
                  key={ex.id}
                  onClick={() => setExercise(ex.id)}
                  className={`py-3 px-2 rounded-xl text-sm font-bold transition-all duration-200 ${
                    exercise === ex.id
                      ? "bg-orange-500 text-white shadow-md"
                      : "bg-gray-100 text-gray-600 hover:bg-orange-100"
                  }`}
                >
                  <div className="text-xl mb-1">{ex.icon}</div>
                  {ex.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="text-sm font-bold text-gray-700 block mb-1">
              使用重量（kg）
            </label>
            <input
              type="number"
              inputMode="decimal"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder="例: 80"
              className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-lg focus:border-orange-400 outline-none transition-colors"
            />
          </div>

          <div>
            <label className="text-sm font-bold text-gray-700 block mb-1">
              実施回数（回）
            </label>
            <input
              type="number"
              inputMode="numeric"
              value={reps}
              onChange={(e) => setReps(e.target.value)}
              placeholder="例: 8"
              min={1}
              max={30}
              className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-lg focus:border-orange-400 outline-none transition-colors"
            />
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            onClick={handleCalc}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-2xl text-lg transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
          >
            計算する
          </button>
        </div>

        {result && (
          <>
            <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
              <p className="text-sm text-gray-500 mb-1">{exerciseLabel} の推定1RM</p>
              <p className="text-5xl font-bold text-orange-500 my-2">
                {result.oneRM}
                <span className="text-2xl ml-1 font-semibold">kg</span>
              </p>
              <p className="text-xs text-gray-400">Epley式による推定値</p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="font-bold text-orange-500 mb-3">RM換算表（2〜15RM）</h2>
              <div className="overflow-hidden rounded-xl border border-gray-100">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-gray-50 text-gray-500 text-xs">
                      <th className="py-2 px-3 text-left font-semibold">RM</th>
                      <th className="py-2 px-3 text-right font-semibold">重量（kg）</th>
                      <th className="py-2 px-3 text-right font-semibold">目的の目安</th>
                    </tr>
                  </thead>
                  <tbody>
                    {result.table.map(({ rm, weight: w }) => {
                      const zone = getZone(rm);
                      return (
                        <tr key={rm} className={`border-t border-gray-100 ${zone.rowClass}`}>
                          <td className="py-2.5 px-3 font-bold">{rm}RM</td>
                          <td className="py-2.5 px-3 text-right font-bold text-base">{w}</td>
                          <td className="py-2.5 px-3 text-right text-xs">{zone.label}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>

            <Link
              href="/chat"
              className="inline-block w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-2xl text-lg text-center transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
            >
              この重量でメニューを作る
            </Link>
          </>
        )}

        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="font-bold text-orange-500 mb-4">換算表の使い方（強度の目安）</h2>
          <div className="space-y-3 text-sm">
            {([
              {
                range: "1〜3RM",
                goal: "最大筋力向上",
                color: "bg-red-50 border-red-100",
                text: "text-red-700",
                desc: "ほぼ最大重量を扱う神経系トレーニング。パワーリフターや競技者向け。",
              },
              {
                range: "4〜6RM",
                goal: "筋力・筋肥大",
                color: "bg-orange-50 border-orange-100",
                text: "text-orange-700",
                desc: "筋力と筋肥大を同時に狙えるゾーン。中〜上級者に人気のレンジ。",
              },
              {
                range: "8〜12RM",
                goal: "筋肥大メイン",
                color: "bg-yellow-50 border-yellow-100",
                text: "text-yellow-700",
                desc: "筋肥大に最も効果的とされる定番レンジ。初〜中級者にもおすすめ。",
              },
              {
                range: "15RM以上",
                goal: "筋持久力",
                color: "bg-green-50 border-green-100",
                text: "text-green-700",
                desc: "軽重量で多回数。筋持久力の向上や初心者のフォーム習得に向いています。",
              },
            ] as const).map(({ range, goal, color, text, desc }) => (
              <div key={range} className={`rounded-xl p-4 border ${color}`}>
                <div className="flex items-center gap-2 mb-1">
                  <span className={`font-bold ${text}`}>{range}</span>
                  <span className={`text-xs font-bold ${text}`}>— {goal}</span>
                </div>
                <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center space-y-3 pb-4">
          <Link
            href="/chat"
            className="inline-block w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
          >
            メニューを作る
          </Link>
          <Link
            href="/weight-checker"
            className="inline-block w-full bg-white hover:bg-gray-50 text-orange-500 font-bold py-4 px-8 rounded-2xl border-2 border-orange-500 transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
          >
            筋トレ適正重量診断を使う
          </Link>
          <Link
            href="/"
            className="inline-block text-orange-500 font-bold hover:text-orange-600 transition-colors text-sm"
          >
            トップに戻る
          </Link>
        </div>
      </div>
    </main>
  );
}
