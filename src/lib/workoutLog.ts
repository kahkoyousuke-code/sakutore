const STORAGE_KEY = "sakutore_workout_log";

function toLocalDateStr(date: Date): string {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}

export function getWorkoutLog(): string[] {
  if (typeof window === "undefined") return [];
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
  } catch {
    return [];
  }
}

export function recordWorkout(): void {
  const today = toLocalDateStr(new Date());
  const log = getWorkoutLog();
  if (!log.includes(today)) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify([...log, today]));
  }
}

export function hasWorkedOutToday(): boolean {
  const today = toLocalDateStr(new Date());
  return getWorkoutLog().includes(today);
}

export function getStreak(): number {
  const log = getWorkoutLog();
  if (log.length === 0) return 0;

  const today = toLocalDateStr(new Date());
  const yesterday = toLocalDateStr(new Date(Date.now() - 86400000));
  const sorted = Array.from(new Set(log)).sort().reverse();

  if (sorted[0] !== today && sorted[0] !== yesterday) return 0;

  let streak = 0;
  let current = new Date(sorted[0]);
  for (const dateStr of sorted) {
    if (dateStr === toLocalDateStr(current)) {
      streak++;
      current = new Date(current.getTime() - 86400000);
    } else {
      break;
    }
  }
  return streak;
}
