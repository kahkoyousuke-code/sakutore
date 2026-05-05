"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const STORAGE_KEYS = [
  "sakutore_menu_history",
  "sakutore_workout_log",
  "sakutore_saved_menu",
  "sakutore_saved_params",
  "sakutore_chat_menu",
  "sakutore_training_memo",
];

export default function ResetDataButton() {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const handleReset = () => {
    STORAGE_KEYS.forEach((key) => localStorage.removeItem(key));
    setOpen(false);
    router.refresh();
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="mt-4 text-xs text-gray-300 hover:text-gray-400 transition-colors"
      >
        すべてのデータをリセット
      </button>

      {open && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-6">
          <div className="bg-white rounded-2xl p-6 w-full max-w-sm shadow-xl">
            <p className="font-bold text-gray-800 text-lg mb-2">データをリセットしますか？</p>
            <p className="text-sm text-gray-500 mb-6">
              トレーニング履歴・メニュー履歴・記録メモがすべて削除されます。この操作は取り消せません。
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setOpen(false)}
                className="flex-1 py-3 rounded-xl border-2 border-gray-200 text-gray-500 font-bold hover:bg-gray-50 transition-colors"
              >
                キャンセル
              </button>
              <button
                onClick={handleReset}
                className="flex-1 py-3 rounded-xl bg-red-500 text-white font-bold hover:bg-red-600 transition-colors"
              >
                リセットする
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
