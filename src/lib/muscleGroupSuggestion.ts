import type { DayMenu, TrainingMenu } from "./mockResult";

const MUSCLE_MAP: Record<string, string> = {
  // 胸
  "ベンチプレス": "胸",
  "インクラインダンベルプレス": "胸",
  "インクラインベンチプレス": "胸",
  "ケーブルフライ": "胸",
  "ケーブルクロスオーバー": "胸",
  "ダンベルフライ": "胸",
  "ダンベルプレス": "胸",
  "プッシュアップ": "胸",
  "ダイヤモンドプッシュアップ": "胸",
  "腕立て伏せ（ワイド）": "胸",
  "プッシュアップ（膝つき可）": "胸",
  // 背中
  "デッドリフト": "背中",
  "ラットプルダウン": "背中",
  "シーテッドロウ": "背中",
  "ダンベルロウ": "背中",
  "ダンベルデッドリフト": "背中",
  "ルーマニアンデッドリフト": "背中",
  "懸垂": "背中",
  // 脚
  "スクワット": "脚",
  "スクワット（自重）": "脚",
  "レッグプレス": "脚",
  "レッグカール": "脚",
  "ゴブレットスクワット": "脚",
  "ブルガリアンスクワット": "脚",
  "カーフレイズ": "脚",
  "ヒップスラスト（自重）": "脚",
  "ダンベルランジ": "脚",
  "ランジ": "脚",
  "ジャンプスクワット": "脚",
  "ダンベルカーフレイズ": "脚",
  "ボックスジャンプ": "脚",
  "ヒップリフト": "脚",
  // 肩
  "サイドレイズ": "肩",
  "ショルダープレス": "肩",
  "パイクプッシュアップ": "肩",
  // 腕
  "バーベルカール": "腕",
  "ハンマーカール": "腕",
  "コンセントレーションカール": "腕",
  "トライセプスプッシュダウン": "腕",
  "キックバック": "腕",
  // 腹筋
  "プランク": "腹筋",
  "サイドプランク": "腹筋",
  "マウンテンクライマー": "腹筋",
  "ダンベルクランチ": "腹筋",
};

export type RecoveryStatus = "ready" | "almost" | "recovering" | "unknown";

export interface MuscleGroupInfo {
  group: string;
  daysSince: number | null;
  status: RecoveryStatus;
}

export interface NextDaySuggestion {
  day: DayMenu;
  dayNumber: number;
  totalDays: number;
  menuTitle: string;
}

function getMemoStore(): Record<string, unknown> {
  if (typeof window === "undefined") return {};
  try {
    return JSON.parse(localStorage.getItem("sakutore_training_memo") || "{}");
  } catch {
    return {};
  }
}

function getLastTrainedDates(): Record<string, string> {
  const store = getMemoStore();
  const lastDates: Record<string, string> = {};
  for (const key of Object.keys(store)) {
    const sep = key.indexOf("_");
    if (sep === -1) continue;
    const date = key.substring(0, sep);
    const exercise = key.substring(sep + 1);
    const group = MUSCLE_MAP[exercise];
    if (!group) continue;
    if (!lastDates[group] || date > lastDates[group]) lastDates[group] = date;
  }
  return lastDates;
}

function daysSince(dateStr: string): number {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const [y, m, d] = dateStr.split("-").map(Number);
  const then = new Date(y, m - 1, d);
  return Math.floor((today.getTime() - then.getTime()) / 86400000);
}

function toStatus(days: number | null): RecoveryStatus {
  if (days === null) return "unknown";
  if (days >= 2) return "ready";
  if (days === 1) return "almost";
  return "recovering";
}

const ALL_GROUPS = ["胸", "背中", "脚", "肩", "腕", "腹筋"];

export function getMuscleGroupStatuses(): MuscleGroupInfo[] {
  const lastDates = getLastTrainedDates();
  return ALL_GROUPS.map((group) => {
    const lastDate = lastDates[group] ?? null;
    const days = lastDate ? daysSince(lastDate) : null;
    return { group, daysSince: days, status: toStatus(days) };
  });
}

export function getNextDaySuggestion(): NextDaySuggestion | null {
  if (typeof window === "undefined") return null;
  try {
    const menuStr = localStorage.getItem("sakutore_chat_menu");
    if (!menuStr) return null;
    const menu: TrainingMenu = JSON.parse(menuStr);
    if (!menu.days || menu.days.length === 0) return null;

    const store = getMemoStore();
    const memoKeys = Object.keys(store);

    let latestDayIndex = -1;
    let latestDate = "";

    for (let i = 0; i < menu.days.length; i++) {
      for (const exercise of menu.days[i].exercises) {
        for (const key of memoKeys) {
          const sep = key.indexOf("_");
          if (sep === -1) continue;
          const date = key.substring(0, sep);
          const name = key.substring(sep + 1);
          if (name === exercise.name && date > latestDate) {
            latestDate = date;
            latestDayIndex = i;
          }
        }
      }
    }

    const nextIndex = latestDayIndex === -1 ? 0 : (latestDayIndex + 1) % menu.days.length;
    return {
      day: menu.days[nextIndex],
      dayNumber: nextIndex + 1,
      totalDays: menu.days.length,
      menuTitle: menu.title,
    };
  } catch {
    return null;
  }
}
