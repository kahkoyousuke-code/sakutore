"use client";

import { Question } from "@/lib/questions";

interface QuestionCardProps {
  question: Question;
  answer: string;
  onAnswer: (answer: string) => void;
}

export default function QuestionCard({
  question,
  answer,
  onAnswer,
}: QuestionCardProps) {
  return (
    <div className="animate-fadeIn">
      <h2 className="text-xl font-bold text-gray-800 mb-6 text-center">
        {question.text}
      </h2>

      {question.type === "choice" && question.options && (
        <div className="flex flex-col gap-3">
          {question.options.map((option) => (
            <button
              key={option}
              onClick={() => onAnswer(option)}
              className={`w-full px-4 py-3 rounded-xl text-left transition-all duration-200 border-2 ${
                answer === option
                  ? "border-orange-500 bg-orange-50 text-orange-700 font-semibold shadow-md"
                  : "border-gray-200 bg-white text-gray-700 hover:border-orange-300 hover:bg-orange-50/50"
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      )}

      {question.type === "multiselect" && question.options && (
        <div className="flex flex-col gap-2">
          {question.options.map((option) => {
            const selected = answer.split(",").filter(Boolean);
            const isSelected = selected.includes(option);
            const isExclusive = option === "特にこだわりなし（全体的に鍛えたい）";

            return (
              <button
                key={option}
                onClick={() => {
                  if (isExclusive) {
                    onAnswer(isSelected ? "" : option);
                  } else {
                    const withoutExclusive = selected.filter(
                      (s) => s !== "特にこだわりなし（全体的に鍛えたい）"
                    );
                    const next = isSelected
                      ? withoutExclusive.filter((s) => s !== option)
                      : [...withoutExclusive, option];
                    onAnswer(next.join(","));
                  }
                }}
                className={`w-full px-4 py-3 rounded-xl text-left transition-all duration-200 border-2 flex items-center gap-3 ${
                  isSelected
                    ? "border-orange-500 bg-orange-50 text-orange-700 font-semibold shadow-md"
                    : "border-gray-200 bg-white text-gray-700 hover:border-orange-300 hover:bg-orange-50/50"
                }`}
              >
                <span
                  className={`w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0 ${
                    isSelected
                      ? "border-orange-500 bg-orange-500"
                      : "border-gray-300"
                  }`}
                >
                  {isSelected && (
                    <svg
                      className="w-3 h-3 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  )}
                </span>
                {option}
              </button>
            );
          })}
        </div>
      )}

      {question.type === "text" && (
        <textarea
          value={answer}
          onChange={(e) => onAnswer(e.target.value)}
          placeholder={question.placeholder || "自由に入力してください"}
          className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:outline-none resize-none h-32 transition-colors"
        />
      )}
    </div>
  );
}
