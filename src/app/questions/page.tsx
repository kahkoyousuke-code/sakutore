"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { questions } from "@/lib/questions";
import StepIndicator from "@/components/StepIndicator";
import QuestionCard from "@/components/QuestionCard";

export default function QuestionsPage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>(
    Array(questions.length).fill("")
  );

  const handleAnswer = (answer: string) => {
    const newAnswers = [...answers];
    newAnswers[currentStep] = answer;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      const params = new URLSearchParams();
      answers.forEach((a, i) => params.set(`q${i}`, a));
      router.push(`/result?${params.toString()}`);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const isAnswered = answers[currentStep] !== "";

  return (
    <main className="min-h-screen flex flex-col items-center px-4 py-8">
      <div className="max-w-md w-full">
        <StepIndicator current={currentStep} total={questions.length} />

        <div key={currentStep} className="mb-8">
          <QuestionCard
            question={questions[currentStep]}
            answer={answers[currentStep]}
            onAnswer={handleAnswer}
          />
        </div>

        <div className="flex gap-3">
          {currentStep > 0 && (
            <button
              onClick={handleBack}
              className="flex-1 py-3 px-6 rounded-xl border-2 border-gray-300 text-gray-600 font-medium hover:bg-gray-50 transition-colors"
            >
              戻る
            </button>
          )}
          <button
            onClick={handleNext}
            disabled={!isAnswered}
            className={`flex-1 py-3 px-6 rounded-xl font-bold text-white transition-all duration-200 ${
              isAnswered
                ? "bg-orange-500 hover:bg-orange-600 hover:shadow-md"
                : "bg-gray-300 cursor-not-allowed"
            }`}
          >
            {currentStep < questions.length - 1 ? "次へ" : "今日のメニューを作る"}
          </button>
        </div>
      </div>
    </main>
  );
}
