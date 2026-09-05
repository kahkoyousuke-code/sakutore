"use client";

import { useState } from "react";
import Link from "next/link";
import ShareButtons from "@/components/ShareButtons";
import WeightCheckerGuide from "@/components/guides/WeightCheckerGuide";
import WeightCheckerTables from "@/components/WeightCheckerTables";
import {
  LEVEL_EXPERIENCE,
  LEVEL_STEP_PERIOD,
  LIFTS,
  formatRatio,
  levelsFor,
  rowsFor,
  targetWeight,
  type Gender,
  type Level,
} from "@/lib/strengthStandards";

const GENDERS: { id: Gender; label: string; icon: string }[] = [
  { id: "male", label: "男性", icon: "♂" },
  { id: "female", label: "女性", icon: "♀" },
];

type ExerciseResult = {
  id: string;
  label: string;
  icon: string;
  ratio: number;
  note: string;
  current: number;
  nextLabel: Level | null;
  next: number | null;
  diff: number | null;
};

type CheckResult = {
  exercises: ExerciseResult[];
  levelLabel: Level;
  stepPeriod: string | null;
  total: number;
};

function calcWeights(bodyWeight: number, gender: Gender, level: Level): CheckResult {
  const levels = levelsFor(gender);
  const idx = levels.indexOf(level);
  const exercises: ExerciseResult[] = LIFTS.map((lift) => {
    const rows = rowsFor(gender, lift.id);
    const row = rows[idx];
    const current = targetWeight(bodyWeight, row.ratio);
    const nextRow = rows[idx + 1];
    if (!nextRow) {
      return {
        id: lift.id,
        label: lift.label,
        icon: lift.icon,
        ratio: row.ratio,
        note: row.note,
        current,
        nextLabel: null,
        next: null,
        diff: null,
      };
    }
    const next = targetWeight(bodyWeight, nextRow.ratio);
    return {
      id: lift.id,
      label: lift.label,
      icon: lift.icon,
      ratio: row.ratio,
      note: row.note,
      current,
      nextLabel: nextRow.level,
      next,
      diff: Math.round((next - current) * 10) / 10,
    };
  });
  const total = Math.round(exercises.reduce((sum, ex) => sum + ex.current, 0) * 10) / 10;
  // 女性は上級者が最上位なので、そこで「次のレベルまでの期間」を出さない。
  const isTopLevel = idx === levels.length - 1;
  return {
    exercises,
    levelLabel: level,
    stepPeriod: isTopLevel ? null : LEVEL_STEP_PERIOD[level],
    total,
  };
}

export default function WeightCheckerPage() {
  const [gender, setGender] = useState<Gender>("male");
  const [height, setHeight] = useState("");
  const [bodyWeight, setBodyWeight] = useState("");
  const [level, setLevel] = useState<Level>("初心者");
  const [result, setResult] = useState<CheckResult | null>(null);
  const [error, setError] = useState("");

  const levels = levelsFor(gender);

  // 女性の基準は初心者〜上級者の3段階しかないので、性別を切り替えたときに
  // 未経験・エリートが選ばれたまま残らないようにする。
  const handleGenderChange = (next: Gender) => {
    setGender(next);
    if (!levelsFor(next).includes(level)) {
      setLevel("初心者");
    }
    setResult(null);
  };

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
                  onClick={() => handleGenderChange(g.id)}
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
              {levels.map((lv) => (
                <button
                  key={lv}
                  onClick={() => setLevel(lv)}
                  className={`py-3 px-2 rounded-xl text-sm font-bold transition-all duration-200 ${
                    level === lv
                      ? "bg-orange-500 text-white shadow-md"
                      : "bg-gray-100 text-gray-600 hover:bg-orange-100"
                  }`}
                >
                  <div className="font-bold">{lv}</div>
                  <div className={`text-xs mt-0.5 ${level === lv ? "text-orange-100" : "text-gray-400"}`}>
                    {LEVEL_EXPERIENCE[lv]}
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
                {result.levelLabel}の目標重量
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
                      <span className="text-xs text-gray-400 ml-auto">
                        体重×{formatRatio(ex.ratio)}
                      </span>
                    </div>
                    <div className="flex items-end gap-2">
                      <span className="text-3xl font-bold text-orange-500">{ex.current}</span>
                      <span className="text-base font-semibold text-gray-500 mb-0.5">kg</span>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">{ex.note}</p>
                    {ex.next !== null && ex.diff !== null && ex.nextLabel !== null && (
                      <p className="text-xs text-gray-500 mt-2">
                        <span className="font-bold text-orange-400">{ex.nextLabel}</span>
                        {" まであと "}
                        <span className="font-bold text-orange-500">{ex.diff}kg</span>
                        {`（目標 ${ex.next}kg）`}
                      </p>
                    )}
                    {ex.next === null && (
                      <p className="text-xs text-orange-400 mt-2 font-bold">
                        この表で示せる一番上のレベルです
                      </p>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-4 rounded-xl border border-gray-100 bg-gray-50 p-4">
                <div className="flex items-baseline gap-2">
                  <span className="font-bold text-gray-800 text-sm">BIG3合計</span>
                  <span className="text-2xl font-bold text-orange-500 ml-auto">
                    {result.total}
                  </span>
                  <span className="text-sm font-semibold text-gray-500">kg</span>
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  3種目の目標を単純に足した数字です。合計は内訳を隠すので、
                  1種目だけ大きく遅れていないかは上の3つで確認してください。
                </p>
              </div>

              {result.stepPeriod && (
                <p className="text-xs text-gray-400 mt-3">
                  ※ このレベルから次のレベルまでは、一般的に{result.stepPeriod}かかります。
                </p>
              )}
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
          <h2 className="font-bold text-orange-500 mb-4">体重比の考え方</h2>
          <div className="space-y-3 text-sm text-gray-700 leading-relaxed">
            <p>
              「体重の○倍」は、体格の差をある程度吸収した公平な指標です。体重70kgの人がベンチプレス70kgを上げると「体重比1倍」で中級者とみなされます。
            </p>
            <p>
              女性の目標は男性より低く設定されていますが、
              <strong>一律に何%というわけではありません</strong>。
              中級者どうしで比べると、ベンチプレスは男性の60%、デッドリフトは65%、スクワットは73%です。
              上半身の押す力ほど差が大きく、下半身ほど差が小さいという実態を反映しています。
              低いほうの数字だけを見てハードルが低いと考えると足をすくわれます。
            </p>
            <p className="text-xs text-gray-400">
              ※ あくまで一般的な目安です。体型・骨格・競技経験などにより個人差があります。
            </p>
          </div>
        </div>

        <WeightCheckerTables />

        <WeightCheckerGuide />

        <ShareButtons url="https://sakutore.jp/weight-checker" title="筋トレ適正重量診断｜ビッグ3の目標重量を判定" />

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
