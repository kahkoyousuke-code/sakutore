"use client";

import { useState } from "react";
import Link from "next/link";

type Gender = "male" | "female";
type LevelId = "beginner" | "novice" | "intermediate" | "advanced";

const GENDERS = [
  { id: "male" as Gender, label: "男性", icon: "♂" },
  { id: "female" as Gender, label: "女性", icon: "♀" },
];

const LEVELS = [
  { id: "beginner" as LevelId, label: "初心者", desc: "6ヶ月未満" },
  { id: "novice" as LevelId, label: "初級", desc: "6ヶ月〜2年" },
  { id: "intermediate" as LevelId, label: "中級", desc: "2〜5年" },
  { id: "advanced" as LevelId, label: "上級", desc: "5年以上" },
];

const LEVEL_INDEX: Record<LevelId, number> = {
  beginner: 0,
  novice: 1,
  intermediate: 2,
  advanced: 3,
};

const MULTIPLIERS: Record<Gender, Record<string, number[]>> = {
  male: {
    bench: [0.5, 0.75, 1.0, 1.25],
    squat: [0.75, 1.0, 1.25, 1.5],
    deadlift: [1.0, 1.25, 1.5, 1.75],
  },
  female: {
    bench: [0.3, 0.45, 0.6, 0.75],
    squat: [0.45, 0.6, 0.75, 0.9],
    deadlift: [0.6, 0.75, 0.9, 1.05],
  },
};

const EXERCISES = [
  { id: "bench", label: "ベンチプレス", icon: "🏋️" },
  { id: "squat", label: "スクワット", icon: "🦵" },
  { id: "deadlift", label: "デッドリフト", icon: "💪" },
] as const;

type ExerciseResult = {
  id: string;
  label: string;
  icon: string;
  current: number;
  nextLabel: string | null;
  next: number | null;
  diff: number | null;
};

type CheckResult = {
  exercises: ExerciseResult[];
  levelLabel: string;
};

function calcWeights(bodyWeight: number, gender: Gender, level: LevelId): CheckResult {
  const idx = LEVEL_INDEX[level];
  const levelLabel = LEVELS[idx].label;
  const exercises: ExerciseResult[] = EXERCISES.map((ex) => {
    const mults = MULTIPLIERS[gender][ex.id];
    const current = Math.round(bodyWeight * mults[idx] * 10) / 10;
    if (idx < LEVELS.length - 1) {
      const next = Math.round(bodyWeight * mults[idx + 1] * 10) / 10;
      return {
        id: ex.id,
        label: ex.label,
        icon: ex.icon,
        current,
        nextLabel: LEVELS[idx + 1].label,
        next,
        diff: Math.round((next - current) * 10) / 10,
      };
    }
    return { id: ex.id, label: ex.label, icon: ex.icon, current, nextLabel: null, next: null, diff: null };
  });
  return { exercises, levelLabel };
}

export default function WeightCheckerPage() {
  const [gender, setGender] = useState<Gender>("male");
  const [height, setHeight] = useState("");
  const [bodyWeight, setBodyWeight] = useState("");
  const [level, setLevel] = useState<LevelId>("beginner");
  const [result, setResult] = useState<CheckResult | null>(null);
  const [error, setError] = useState("");

  const handleCheck = () => {
    const w = parseFloat(bodyWeight);
    const h = parseFloat(height);
    if (!bodyWeight || isNaN(w) || w <= 0) {
      setError("体重を正しく入力してください");
      return;
    }
    if (height && (isNaN(h) || h <= 0)) {
      setError("身長を正しく入力してください");
      return;
    }
    if (w > 300) {
      setError("体重は300kg以下で入力してください");
      return;
    }
    setError("");
    setResult(calcWeights(w, gender, level));
  };

  return (
    <main className="min-h-screen flex flex-col items-center px-4 py-8">
      <div className="max-w-md w-full animate-slideUp space-y-4">

        <div className="text-center mb-2">
          <h1 className="text-2xl font-bold text-gray-800">筋トレ適正重量診断</h1>
          <p className="text-gray-500 text-sm mt-1">ビッグ3の目標重量を体重比で算出</p>
        </div>

        <div className="bg-orange-50 rounded-2xl p-4 text-sm text-gray-700 leading-relaxed">
          <p className="font-bold text-orange-600 mb-1">適正重量とは？</p>
          <p>
            体重比による目標重量は、世界中のトレーニーのデータをもとにした一般的な指標です。
            「自分の体重の○倍を挙げられれば○級」という基準で、現在地の確認やレベルアップの目標設定に役立ちます。
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 space-y-5">
          <div>
            <p className="text-sm font-bold text-gray-700 mb-2">性別</p>
            <div className="grid grid-cols-2 gap-2">
              {GENDERS.map((g) => (
                <button
                  key={g.id}
                  onClick={() => setGender(g.id)}
                  className={`py-3 px-2 rounded-xl text-sm font-bold transition-all duration-200 ${
                    gender === g.id
                      ? "bg-orange-500 text-white shadow-md"
                      : "bg-gray-100 text-gray-600 hover:bg-orange-100"
                  }`}
                >
                  <div className="text-xl mb-1">{g.icon}</div>
                  {g.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="text-sm font-bold text-gray-700 block mb-1">
              身長（cm）<span className="font-normal text-gray-400 ml-1">任意</span>
            </label>
            <input
              type="number"
              inputMode="decimal"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              placeholder="例: 170"
              className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-lg focus:border-orange-400 outline-none transition-colors"
            />
          </div>

          <div>
            <label className="text-sm font-bold text-gray-700 block mb-1">
              体重（kg）
            </label>
            <input
              type="number"
              inputMode="decimal"
              value={bodyWeight}
              onChange={(e) => setBodyWeight(e.target.value)}
              placeholder="例: 70"
              className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-lg focus:border-orange-400 outline-none transition-colors"
            />
          </div>

          <div>
            <p className="text-sm font-bold text-gray-700 mb-2">トレーニング経験</p>
            <div className="grid grid-cols-2 gap-2">
              {LEVELS.map((lv) => (
                <button
                  key={lv.id}
                  onClick={() => setLevel(lv.id)}
                  className={`py-3 px-2 rounded-xl text-sm font-bold transition-all duration-200 ${
                    level === lv.id
                      ? "bg-orange-500 text-white shadow-md"
                      : "bg-gray-100 text-gray-600 hover:bg-orange-100"
                  }`}
                >
                  <div className="font-bold">{lv.label}</div>
                  <div className={`text-xs mt-0.5 ${level === lv.id ? "text-orange-100" : "text-gray-400"}`}>
                    {lv.desc}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            onClick={handleCheck}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-2xl text-lg transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
          >
            診断する
          </button>
        </div>

        {result && (
          <>
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="font-bold text-orange-500 mb-1">
                {result.levelLabel}レベルの目標重量
              </h2>
              <p className="text-xs text-gray-400 mb-4">
                体重 {bodyWeight}kg・{gender === "male" ? "男性" : "女性"}基準
              </p>
              <div className="space-y-3">
                {result.exercises.map((ex) => (
                  <div key={ex.id} className="rounded-xl border border-orange-100 bg-orange-50 p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xl">{ex.icon}</span>
                      <span className="font-bold text-gray-800">{ex.label}</span>
                    </div>
                    <div className="flex items-end gap-2">
                      <span className="text-3xl font-bold text-orange-500">{ex.current}</span>
                      <span className="text-base font-semibold text-gray-500 mb-0.5">kg</span>
                    </div>
                    {ex.next !== null && ex.diff !== null && ex.nextLabel !== null && (
                      <p className="text-xs text-gray-500 mt-2">
                        <span className="font-bold text-orange-400">{ex.nextLabel}</span>
                        {" まであと "}
                        <span className="font-bold text-orange-500">{ex.diff}kg</span>
                        {`（目標 ${ex.next}kg）`}
                      </p>
                    )}
                    {ex.next === null && (
                      <p className="text-xs text-orange-400 mt-2 font-bold">最高レベルに到達！</p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <Link
              href="/questions"
              className="inline-block w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-2xl text-lg text-center transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
            >
              この重量でトレーニングメニューを作る
            </Link>
          </>
        )}

        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="font-bold text-orange-500 mb-4">レベルアップの目安期間</h2>
          <div className="space-y-3 text-sm">
            {([
              {
                from: "初心者 → 初級",
                period: "約6ヶ月〜1年",
                color: "bg-green-50 border-green-100",
                text: "text-green-700",
                desc: "週2〜3回のトレーニングで基本フォームを習得し、重量が順調に伸びる時期。正しいフォームの定着が最優先。",
              },
              {
                from: "初級 → 中級",
                period: "約1〜2年",
                color: "bg-yellow-50 border-yellow-100",
                text: "text-yellow-700",
                desc: "週3〜4回でプログレッシブオーバーロードを意識。重量の伸びが緩やかになるが、一貫したトレーニングで着実に向上。",
              },
              {
                from: "中級 → 上級",
                period: "約3〜5年以上",
                color: "bg-orange-50 border-orange-100",
                text: "text-orange-700",
                desc: "週4〜5回以上の高頻度トレーニングと、食事・睡眠の徹底管理が必要。到達できるのはごく一部のトレーニーのみ。",
              },
            ] as const).map(({ from, period, color, text, desc }) => (
              <div key={from} className={`rounded-xl p-4 border ${color}`}>
                <div className="flex items-center gap-2 mb-1">
                  <span className={`font-bold ${text}`}>{from}</span>
                  <span className={`text-xs font-bold ${text} ml-auto`}>{period}</span>
                </div>
                <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="font-bold text-orange-500 mb-4">体重比の考え方</h2>
          <div className="space-y-3 text-sm text-gray-700 leading-relaxed">
            <p>
              「体重の○倍」は、体格の差をある程度吸味した公平な指標です。体重70kgの人がベンチプレス70kgを上げると「体重比1倍」で中級とみなされます。
            </p>
            <p>
              女性の目標は男性の約60%に設定されています。これは筋肉量や上半身の筋力差を反映した国際的なスタンダードで、決してハードルが低いわけではありません。
            </p>
            <p className="text-xs text-gray-400">
              ※ あくまで一般的な目安です。体型・骨格・競技経験などにより個人差があります。
            </p>
          </div>
        </div>

        <div className="text-center space-y-3 pb-4">
          <Link
            href="/questions"
            className="inline-block w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
          >
            メニューを作る
          </Link>
          <Link
            href="/rm-calculator"
            className="inline-block w-full bg-white hover:bg-gray-50 text-orange-500 font-bold py-4 px-8 rounded-2xl border-2 border-orange-500 transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
          >
            RM換算計算ツールを使う
          </Link>
          <Link
            href="/calorie-calculator"
            className="inline-block w-full bg-white hover:bg-gray-50 text-orange-500 font-bold py-4 px-8 rounded-2xl border-2 border-orange-500 transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
          >
            カロリー消費計算ツールを使う
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
