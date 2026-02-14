export interface ChestVideo {
  id: string;
  title: string;
  youtuber: string;
  category: "ベンチプレス" | "ダンベル" | "自重" | "フォーム解説";
  level: "初心者" | "中級者" | "上級者";
  equipment: "バーベル" | "ダンベル" | "自重" | "マシン";
  youtubeUrl: string;
  thumbnail?: string;
  advice: string; // 洋佑さんからのアドバイス
}

export const chestVideos: ChestVideo[] = [
  {
    id: "sho-bench-beginner",
    title: "【初心者】正しいベンチプレス講座",
    youtuber: "Sho Fitness",
    category: "ベンチプレス",
    level: "初心者",
    equipment: "バーベル",
    youtubeUrl: "https://www.youtube.com/watch?v=example1",
    advice: "科学的根拠に基づいた解説で、フォームの基礎から重量設定まで網羅されています。初心者は必ず見てほしい動画です!",
  },
  {
    id: "goldsgym-bench",
    title: "ゴールドジム公式・ベンチプレス解説",
    youtuber: "ゴールドジム",
    category: "ベンチプレス",
    level: "初心者",
    equipment: "バーベル",
    youtubeUrl: "https://www.youtube.com/watch?v=example2",
    advice: "プロボディビルダーによる解説で、安全面の注意点もしっかり学べます。特に肩を痛めないためのポイントが参考になります。",
  },
  {
    id: "sho-dumbbell-press",
    title: "ダンベルプレスの正しいやり方",
    youtuber: "Sho Fitness",
    category: "ダンベル",
    level: "初心者",
    equipment: "ダンベル",
    youtubeUrl: "https://www.youtube.com/watch?v=example3",
    advice: "肩甲骨の使い方が本当にわかりやすいです。可動域を広く取れるダンベルプレスは、ベンチプレスと組み合わせると効果的!",
  },
  {
    id: "yokokawa-dumbbell-fly",
    title: "【ダンベルフライ】日本王者のガチトレ",
    youtuber: "横川尚隆",
    category: "ダンベル",
    level: "中級者",
    equipment: "ダンベル",
    youtubeUrl: "https://www.youtube.com/watch?v=example4",
    advice: "トップビルダーの実践的テクニックが学べます。可動域の取り方と、胸にしっかり効かせる感覚を掴みましょう。",
  },
  {
    id: "kinniku-pushup",
    title: "なかやまきんに君の正しい腕立て伏せ",
    youtuber: "なかやまきんに君",
    category: "自重",
    level: "初心者",
    equipment: "自重",
    youtubeUrl: "https://www.youtube.com/watch?v=example5",
    advice: "超わかりやすい!よくある間違いを丁寧に指摘してくれます。自重トレでも正しいフォームなら十分効きます。",
  },
  {
    id: "ufit-chest-8",
    title: "胸板を厚くする自重トレ8種【3分】",
    youtuber: "uFit 林ケイスケ",
    category: "自重",
    level: "初心者",
    equipment: "自重",
    youtubeUrl: "https://www.youtube.com/watch?v=example6",
    advice: "バリエーション豊富で飽きません。動画を見ながら一緒にやれるので、自宅トレに最適です!",
  },
  {
    id: "sho-incline",
    title: "インクラインベンチプレスの角度設定",
    youtuber: "Sho Fitness",
    category: "ベンチプレス",
    level: "中級者",
    equipment: "バーベル",
    youtubeUrl: "https://www.youtube.com/watch?v=example7",
    advice: "大胸筋上部を狙うなら30-45度の角度設定が重要。フラットベンチプレスと組み合わせてバランス良く鍛えましょう。",
  },
  {
    id: "metron-3min",
    title: "【3分間】短時間胸トレ",
    youtuber: "メトロンブログ",
    category: "自重",
    level: "初心者",
    equipment: "自重",
    youtubeUrl: "https://www.youtube.com/watch?v=example8",
    advice: "忙しい日でもこれならできる!短時間でも追い込めます。週5回ジムに通う私も、時間がない日はこういうトレーニングをします。",
  },
  {
    id: "jin-bench-100kg",
    title: "ぷろたんとベンチプレス100kg挑戦",
    youtuber: "JIN",
    category: "フォーム解説",
    level: "中級者",
    equipment: "バーベル",
    youtubeUrl: "https://www.youtube.com/watch?v=example9",
    advice: "重量を伸ばすコツが学べます。フィジーク選手のJINさんの解説は実践的で参考になります!",
  },
];
