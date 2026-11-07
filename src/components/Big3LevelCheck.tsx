"use client";

import { useState } from "react";
import Link from "next/link";
import Big3ResultCard from "@/components/Big3ResultCard";
import {
  BODY_WEIGHT_RANGE,
  LIFT_MAX_KG,
  big3Query,
  big3ShareText,
  diagnoseBig3,
  type Big3Result,
} from "@/lib/big3Diagnosis";
import { LIFTS, type Gender, type LiftId } from "@/lib/strengthStandards";

const SITE_URL = "https://sakutore.jp";

const GENDERS: { id: Gender; label: string }[] = [
  { id: "male", label: "男性" },
  { id: "female", label: "女性" },
];

function track(method: string) {
  if (typeof window.gtag === "function") {
    window.gtag("event", "big3_share", { method });
  }
}

/**
 * "Enter your current lifts → get your level" check, with a share link whose
 * X card shows the result (/big3-result + /api/og/big3).
 */
export default function Big3LevelCheck() {
  const [gender, setGender] = useState<Gender>("male");
  const [bodyWeight, setBodyWeight] = useState("");
  const [lifts, setLifts] = useState<Record<LiftId, string>>({
    bench: "",
    squat: "",
    deadlift: "",
  });
  const [result, setResult] = useState<Big3Result | null>(null);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  const handleCheck = () => {
    const w = Number(bodyWeight);
    if (!bodyWeight || !Number.isFinite(w) || w < BODY_WEIGHT_RANGE.min || w > BODY_WEIGHT_RANGE.max) {
      setError(`体重は${BODY_WEIGHT_RANGE.min}〜${BODY_WEIGHT_RANGE.max}kgで入力してください`);
      return;
    }
    const kg = {} as Record<LiftId, number>;
    for (const lift of LIFTS) {
      const v = Number(lifts[lift.id]);
      if (lifts[lift.id] === "" || !Number.isFinite(v) || v < 0 || v > LIFT_MAX_KG) {
        setError(`${lift.label}の重量を0〜${LIFT_MAX_KG}kgで入力してください（やっていない種目は0）`);
        return;
      }
      kg[lift.id] = v;
    }
    setError("");
    setResult(diagnoseBig3({ gender, bodyWeight: w, ...kg }));
  };

  const shareUrl = result ? `${SITE_URL}/big3-result?${big3Query(result.input)}` : "";

  const shareX = () => {
    if (!result) return;
    track("x");
    window.open(
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(big3ShareText(result))}&url=${encodeURIComponent(shareUrl)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const copyLink = async () => {
    track("copy");
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.prompt("リンクをコピーしてください", shareUrl);
    }
  };

  return (
    <section id="big3-check" className="space-y-4 scroll-mt-4">
      <div className="bg-white rounded-2xl shadow-lg p-6 space-y-5">
        <div>
          <h2 className="font-bold text-orange-500">今の重量からレベルを判定する</h2>
          <p className="text-xs text-gray-500 mt-1">
            3種目の重量を入れると、体重比で今どのレベルにいるかが分かります。結果はXでシェアできます。
          </p>
        </div>

        <div className="grid grid-cols-2 gap-2">
          {GENDERS.map((g) => (
            <button
              key={g.id}
              onClick={() => {
                setGender(g.id);
                setResult(null);
              }}
              className={`py-2 rounded-xl text-sm font-bold transition-all duration-200 ${
                gender === g.id
                  ? "bg-orange-500 text-white shadow-md"
                  : "bg-gray-100 text-gray-600 hover:bg-orange-100"
              }`}
            >
              {g.label}
            </button>
          ))}
        </div>

        <div>
          <label className="text-sm font-bold text-gray-700 block mb-1">体重（kg）</label>
          <input
            type="number"
            inputMode="decimal"
            value={bodyWeight}
            onChange={(e) => setBodyWeight(e.target.value)}
            placeholder="例: 70"
            className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-lg focus:border-orange-400 outline-none transition-colors"
          />
        </div>

        <div className="grid grid-cols-3 gap-2">
          {LIFTS.map((lift) => (
            <div key={lift.id}>
              <label className="text-xs font-bold text-gray-700 block mb-1">{lift.label}</label>
              <input
                type="number"
                inputMode="decimal"
                value={lifts[lift.id]}
                onChange={(e) => setLifts({ ...lifts, [lift.id]: e.target.value })}
                placeholder="kg"
                className="w-full border-2 border-gray-200 rounded-xl px-2 py-3 text-base focus:border-orange-400 outline-none transition-colors"
              />
            </div>
          ))}
        </div>
        <p className="text-xs text-gray-400 -mt-2">
          1回だけ挙がる重さ（1RM）で入れてください。「80kgを5回」のように回数で覚えているなら
          <Link href="/rm-calculator" className="text-orange-600 font-bold underline">RM換算</Link>
          で1RMにしてからどうぞ。
        </p>

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <button
          onClick={handleCheck}
          className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-2xl text-lg transition-all duration-200 hover:shadow-lg"
        >
          レベルを判定する
        </button>
      </div>

      {result && (
        <>
          <Big3ResultCard result={result} />
          <div className="bg-white rounded-2xl shadow-lg p-4">
            <p className="text-center text-gray-500 text-sm mb-3 font-semibold">結果をシェア</p>
            <div className="flex gap-2">
              <button
                onClick={shareX}
                className="flex-[2] flex items-center justify-center gap-1.5 py-3 px-3 rounded-xl bg-black text-white font-bold text-sm hover:bg-gray-800 transition-colors"
              >
                <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.26 5.632zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                <span>Xでシェア</span>
              </button>
              <button
                onClick={copyLink}
                className="flex-1 py-3 px-3 rounded-xl bg-gray-100 text-gray-600 font-bold text-sm hover:bg-gray-200 transition-colors"
              >
                {copied ? <span className="text-green-600">✓ コピー済</span> : "リンク"}
              </button>
            </div>
          </div>
        </>
      )}
    </section>
  );
}
