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
