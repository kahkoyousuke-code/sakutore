export interface Video {
  id: string;
  title: string;
  youtuber: string;
  level: "初心者" | "中級者" | "上級者";
  equipment: string;
  youtubeUrl: string;
  advice: string;
}

export type FilterType = "all" | "初心者" | "中級者" | string;

export function youtubeSearch(query: string): string {
  return `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`;
}
