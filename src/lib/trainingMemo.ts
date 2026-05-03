const STORAGE_KEY = "sakutore_training_memo";

type MemoEntry = { weight: string; reps: string };
type MemoStore = Record<string, MemoEntry>;

function todayKey(exerciseName: string): string {
  const d = new Date();
  const date = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
  return `${date}_${exerciseName}`;
}

export function getMemo(exerciseName: string): MemoEntry | null {
  if (typeof window === "undefined") return null;
  try {
    const store: MemoStore = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
    return store[todayKey(exerciseName)] ?? null;
  } catch {
    return null;
  }
}

export function saveMemo(exerciseName: string, weight: string, reps: string): void {
  try {
    const store: MemoStore = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
    store[todayKey(exerciseName)] = { weight, reps };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
  } catch {}
}
