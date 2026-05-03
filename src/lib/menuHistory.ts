const STORAGE_KEY = "sakutore_menu_history";
const MAX_HISTORY = 10;

export type MenuHistoryEntry = {
  date: string;
  params: string;
  title: string;
};

export function getMenuHistory(): MenuHistoryEntry[] {
  if (typeof window === "undefined") return [];
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
  } catch {
    return [];
  }
}

export function saveMenuHistory(params: string, title: string): void {
  if (typeof window === "undefined") return;
  const today = new Date();
  const date = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;
  const history = getMenuHistory().filter((e) => e.params !== params);
  const updated = [{ date, params, title }, ...history].slice(0, MAX_HISTORY);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
}
