const STORAGE_KEY = "sakutore_training_memo";

export type SetRecord = { weight: string; reps: string };
export type MemoEntry = { sets: SetRecord[] };
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

export function saveMemo(exerciseName: string, sets: SetRecord[]): void {
  try {
    const store: MemoStore = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
    store[todayKey(exerciseName)] = { sets };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
  } catch {}
}

export function parseSetsCount(setsVal: string | number | null | undefined): number {
  if (typeof setsVal === "number") return Math.max(1, setsVal);
  if (!setsVal) return 1;
  const match = String(setsVal).match(/\d+/);
  return match ? Math.max(1, parseInt(match[0])) : 1;
}
