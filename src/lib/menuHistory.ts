import type { TrainingMenu } from "./mockResult";

const STORAGE_KEY = "sakutore_menu_history";
const MAX_HISTORY = 10;

export type MenuHistoryEntry = {
  id: string;
  date: string;
  params: string;
  title: string;
  menu?: TrainingMenu;
};

function makeId(): string {
  if (typeof crypto !== "undefined" && crypto.randomUUID) {
    return crypto.randomUUID();
  }
  return `${Date.now()}-${Math.random().toString(36).slice(2)}`;
}

export function getMenuHistory(): MenuHistoryEntry[] {
  if (typeof window === "undefined") return [];
  try {
    const raw: MenuHistoryEntry[] = JSON.parse(
      localStorage.getItem(STORAGE_KEY) || "[]"
    );
    // 旧データ（id 無し）にも id を補完して後方互換を保つ
    return raw.map((e) => (e.id ? e : { ...e, id: makeId() }));
  } catch {
    return [];
  }
}

export function getMenuHistoryEntry(id: string): MenuHistoryEntry | null {
  return getMenuHistory().find((e) => e.id === id) ?? null;
}

export function saveMenuHistory(
  params: string,
  title: string,
  menu?: TrainingMenu
): void {
  if (typeof window === "undefined") return;
  const today = new Date();
  const date = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;
  const history = getMenuHistory().filter((e) => e.params !== params);
  const updated = [{ id: makeId(), date, params, title, menu }, ...history].slice(
    0,
    MAX_HISTORY
  );
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
}
