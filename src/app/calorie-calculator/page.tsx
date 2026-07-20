"use client";

import { useState } from "react";
import Link from "next/link";
import ShareButtons from "@/components/ShareButtons";

const EXERCISES = [
  { id: "bench", label: "ベンチプレス", icon: "🏋️", mets: 6.0 },
  { id: "squat", label: "スクワット", icon: "🦵", mets: 5.0 },
  { id: "deadlift", label: "デッドリフト", icon: "💪", mets: 6.0 },
  { id: "pullup", label: "懸垂", icon: "🔝", mets: 8.0 },
  { id: "pushup", label: "腕立て伏せ", icon: "🤸", mets: 3.8 },
  { id: "running", label: "ランニング", icon: "🏃", mets: 8.0 },
  { id: "jumprope", label: "縄跳び", icon: "⭕", mets: 10.0 },
  { id: "cycling", label: "自転車", icon: "🚴", mets: 6.0 },
] as const;

type ExerciseId = (typeof EXERCISES)[number]["id"];

type CalcResult = {
  calories: number;
  fatGrams: number;
  exerciseLabel: string;
};

function calcCalories(weightKg: number, exerciseId: ExerciseId, minutes: number): CalcResult {
  const ex = EXERCISES.find((e) => e.id === exerciseId)!;
  const hours = minutes / 60;
  const calories = Math.round(ex.mets * weightKg * hours * 10) / 10;
  const fatGrams = Math.round((calories / 7) * 10) / 10;
  return { calories, fatGrams, exerciseLabel: ex.label };
}

export default function CalorieCalculatorPage() {
  const [exercise, setExercise] = useState<ExerciseId>("bench");
  const [weight, setWeight] = useState("");
  const [minutes, setMinutes] = useState("");
  const [result, setResult] = useState<CalcResult | null>(null);
  const [error, setError] = useState("");

  const handleCalc = () => {
    const w = parseFloat(weight);
    const m = parseInt(minutes, 10);
    if (!weight || !minutes || isNaN(w) || isNaN(m) || w <= 0 || m <= 0) {
      setError("体重と時間を正しく入力してください");
      return;
    }
    if (w > 300) {
      setError("体重は300kg以下で入力してください");
      return;
    }
    if (m > 300) {
      setError("時間は300分以下で入力してください");
      return;
    }
    setError("");
    setResult(calcCalories(w, exercise, m));
  };

  const sakumeshiUrl = process.env.NEXT_PUBLIC_SAKUMESHI_URL ?? "https://sakumeshi.app/";

  return (
    <main className="min-h-screen flex flex-col items-center px-4 py-8">
      <div className="max-w-md w-full animate-slideUp space-y-4">

        <div className="text-center mb-2">
          <h1 className="text-2xl font-bold text-gray-800">カロリー消費計算ツール</h1>
          <p className="text-gray-500 text-sm mt-1">METs値を使った消費カロリー計算</p>
        </div>

        <div className="bg-orange-50 rounded-2xl p-4 text-sm text-gray-700 leading-relaxed">
          <p className="font-bold text-orange-600 mb-1">METsとは？</p>
          <p>
            METs（Metabolic Equivalents）は運動強度を表す指標で、安静時の何倍のエネルギーを使うかを示します。
            METsが高いほど運動強度が高く、同じ時間でより多くのカロリーを消費します。
            計算式：<span className="font-bold">METs × 体重(kg) × 時間(h)</span>
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 space-y-5">
          <div>
            <label className="text-sm font-bold text-gray-700 block mb-1">
              体重（kg）
            </label>
            <input
              type="number"
              inputMode="decimal"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder="例: 65"
              className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-lg focus:border-orange-400 outline-none transition-colors"
            />
          </div>

          <div>
            <p className="text-sm font-bold text-gray-700 mb-2">種目を選ぶ</p>
            <div className="grid grid-cols-2 gap-2">
              {EXERCISES.map((ex) => (
                <button
                  key={ex.id}
                  onClick={() => setExercise(ex.id)}
                  className={`py-3 px-2 rounded-xl text-sm font-bold transition-all duration-200 text-left flex items-center gap-2 ${
                    exercise === ex.id
                      ? "bg-orange-500 text-white shadow-md"
                      : "bg-gray-100 text-gray-600 hover:bg-orange-100"
                  }`}
                >
                  <span className="text-lg">{ex.icon}</span>
                  <span>{ex.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="text-sm font-bold text-gray-700 block mb-1">
              トレーニング時間（分）
            </label>
            <input
              type="number"
              inputMode="numeric"
              value={minutes}
              onChange={(e) => setMinutes(e.target.value)}
              placeholder="例: 30"
              min={1}
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
              <p className="text-sm text-gray-500 mb-1">{result.exerciseLabel} {minutes}分の消費カロリー</p>
              <p className="text-5xl font-bold text-orange-500 my-2">
                {result.calories}
                <span className="text-2xl ml-1 font-semibold">kcal</span>
              </p>
              <p className="text-sm text-gray-500 mt-3">
                脂肪に換算すると約
                <span className="font-bold text-orange-400 text-lg mx-1">{result.fatGrams}g</span>
                分に相当します
              </p>
              <p className="text-xs text-gray-400 mt-1">（1g脂肪 = 7kcal換算）</p>
            </div>

            <a
              href={sakumeshiUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full bg-orange-50 hover:bg-orange-100 text-orange-600 font-bold py-4 px-8 rounded-2xl text-base border-2 border-orange-300 transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>🍚</span>
              <span>消費カロリーを食事で管理 → サクメシ</span>
            </a>
          </>
        )}

        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="font-bold text-orange-500 mb-4">効率よくカロリーを消費するコツ</h2>
          <div className="space-y-3 text-sm">
            {([
              {
                icon: "🔥",
                title: "筋トレ＋有酸素の組み合わせ",
                desc: "筋トレで筋肉量を増やすと基礎代謝が上がり、日常のカロリー消費が増えます。有酸素運動と組み合わせることで、脂肪燃焼効果を最大化できます。",
                color: "bg-red-50 border-red-100",
                text: "text-red-700",
              },
              {
                icon: "⏰",
                title: "HIIT（高強度インターバル）",
                desc: "短時間で高強度の運動を繰り返すHIITは、運動後も代謝が上がり続ける「アフターバーン効果」が得られます。縄跳びやスプリントなどで実践できます。",
                color: "bg-orange-50 border-orange-100",
                text: "text-orange-700",
              },
              {
                icon: "🥩",
                title: "タンパク質を増やす",
                desc: "タンパク質は消化に多くのエネルギーが必要（食事誘発性熱産生）。筋肉の合成にも不可欠なので、カロリー制限中でもしっかり摂りましょう。",
                color: "bg-yellow-50 border-yellow-100",
                text: "text-yellow-700",
              },
              {
                icon: "😴",
                title: "睡眠・回復を大切に",
                desc: "睡眠不足はホルモンバランスを崩し、食欲増進や代謝低下につながります。十分な睡眠と休息が脂肪燃焼の土台になります。",
                color: "bg-green-50 border-green-100",
                text: "text-green-700",
              },
            ] as const).map(({ icon, title, desc, color, text }) => (
              <div key={title} className={`rounded-xl p-4 border ${color}`}>
                <div className="flex items-center gap-2 mb-1">
                  <span>{icon}</span>
                  <span className={`font-bold ${text}`}>{title}</span>
                </div>
                <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="font-bold text-orange-500 mb-3">各種目のMETs値</h2>
          <div className="overflow-hidden rounded-xl border border-gray-100">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 text-gray-500 text-xs">
                  <th className="py-2 px-3 text-left font-semibold">種目</th>
                  <th className="py-2 px-3 text-right font-semibold">METs</th>
                  <th className="py-2 px-3 text-right font-semibold">強度</th>
                </tr>
              </thead>
              <tbody>
                {EXERCISES.map((ex) => (
                  <tr key={ex.id} className="border-t border-gray-100">
                    <td className="py-2.5 px-3 font-bold">
                      {ex.icon} {ex.label}
                    </td>
                    <td className="py-2.5 px-3 text-right font-bold text-orange-500">{ex.mets}</td>
                    <td className="py-2.5 px-3 text-right text-xs text-gray-500">
                      {ex.mets >= 9 ? "非常に高い" : ex.mets >= 7 ? "高い" : ex.mets >= 5 ? "中程度" : "低〜中"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <ShareButtons url="https://sakutore.jp/calorie-calculator" title="筋トレカロリー消費計算ツール" />

        <div className="text-center space-y-3 pb-4">
          <Link
            href="/questions"
            className="inline-block w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
          >
            トレーニングメニューを作る
          </Link>
          <Link
            href="/rm-calculator"
            className="inline-block w-full bg-white hover:bg-gray-50 text-orange-500 font-bold py-4 px-8 rounded-2xl border-2 border-orange-500 transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
          >
            RM換算計算ツールを使う
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
