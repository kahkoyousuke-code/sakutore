"use client";

interface StepIndicatorProps {
  current: number;
  total: number;
}

export default function StepIndicator({ current, total }: StepIndicatorProps) {
  return (
    <div className="flex items-center gap-2 w-full mb-8">
      {Array.from({ length: total }, (_, i) => (
        <div key={i} className="flex-1 flex flex-col items-center gap-1">
          <div
            className={`h-2 w-full rounded-full transition-all duration-300 ${
              i < current
                ? "bg-orange-500"
                : i === current
                ? "bg-orange-400 animate-pulse"
                : "bg-gray-200"
            }`}
          />
        </div>
      ))}
      <span className="text-sm text-gray-500 whitespace-nowrap ml-2">
        {current + 1} / {total}
      </span>
    </div>
  );
}
