export type QuestionType = "choice" | "text" | "multiselect";

export interface Question {
  id: number;
  text: string;
  type: QuestionType;
  options?: string[];
  placeholder?: string;
}

export const questions: Question[] = [
  {
    id: 1,
    text: "トレーニングの目的は？",
    type: "choice",
    options: ["筋肥大", "ダイエット", "健康維持", "スポーツパフォーマンス向上"],
  },
  {
    id: 2,
    text: "週に何回トレーニングできる？",
    type: "choice",
    options: ["2回", "3回", "4回", "5回以上"],
  },
  {
    id: 3,
    text: "1回のトレーニング時間は？",
    type: "choice",
    options: ["30分以内", "30〜60分", "60〜90分", "90分以上"],
  },
  {
    id: 4,
    text: "トレーニング経験は？",
    type: "choice",
    options: ["初心者（〜半年）", "中級者（半年〜2年）", "上級者（2年以上）"],
  },
  {
    id: 5,
    text: "特に鍛えたい部位は？（複数選択可）",
    type: "multiselect",
    options: [
      "胸",
      "肩",
      "腕（二頭筋）",
      "腕（三頭筋）",
      "背中（広背筋）",
      "背中（僧帽筋）",
      "腹筋",
      "腰（脊柱起立筋）",
      "お尻",
      "脚（前もも）",
      "脚（裏もも）",
      "特にこだわりなし（全体的に鍛えたい）",
    ],
  },
  {
    id: 6,
    text: "トレーニング環境は？",
    type: "choice",
    options: ["ジム（マシン＋フリーウェイト）", "自宅（ダンベルあり）", "自宅（自重のみ）"],
  },
];
