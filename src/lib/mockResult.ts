export interface Exercise {
  name: string;
  sets: number;
  reps: string;
  rest: string;
}

export interface DayMenu {
  day: string;
  label: string;
  exercises: Exercise[];
}

export interface TrainingMenu {
  title: string;
  description: string;
  days: DayMenu[];
}

const gymHypertrophyMenu: TrainingMenu = {
  title: "筋肥大プログラム 💪",
  description: "ジムのマシンとフリーウェイトを活用した筋肥大メニューです。",
  days: [
    {
      day: "Day 1",
      label: "胸・三頭筋",
      exercises: [
        { name: "ベンチプレス", sets: 4, reps: "8〜10回", rest: "90秒" },
        { name: "インクラインダンベルプレス", sets: 3, reps: "10〜12回", rest: "60秒" },
        { name: "ケーブルフライ", sets: 3, reps: "12〜15回", rest: "60秒" },
        { name: "トライセプスプッシュダウン", sets: 3, reps: "10〜12回", rest: "60秒" },
      ],
    },
    {
      day: "Day 2",
      label: "背中・二頭筋",
      exercises: [
        { name: "デッドリフト", sets: 4, reps: "6〜8回", rest: "120秒" },
        { name: "ラットプルダウン", sets: 3, reps: "10〜12回", rest: "60秒" },
        { name: "シーテッドロウ", sets: 3, reps: "10〜12回", rest: "60秒" },
        { name: "バーベルカール", sets: 3, reps: "10〜12回", rest: "60秒" },
      ],
    },
    {
      day: "Day 3",
      label: "脚・肩",
      exercises: [
        { name: "スクワット", sets: 4, reps: "8〜10回", rest: "120秒" },
        { name: "レッグプレス", sets: 3, reps: "10〜12回", rest: "90秒" },
        { name: "レッグカール", sets: 3, reps: "12〜15回", rest: "60秒" },
        { name: "サイドレイズ", sets: 3, reps: "12〜15回", rest: "60秒" },
      ],
    },
  ],
};

const gymDietMenu: TrainingMenu = {
  title: "脂肪燃焼プログラム 🔥",
  description: "有酸素と筋トレを組み合わせたダイエット向けメニューです。",
  days: [
    {
      day: "Day 1",
      label: "上半身＋有酸素",
      exercises: [
        { name: "ダンベルプレス", sets: 3, reps: "12〜15回", rest: "45秒" },
        { name: "ラットプルダウン", sets: 3, reps: "12〜15回", rest: "45秒" },
        { name: "サイドレイズ", sets: 3, reps: "15回", rest: "30秒" },
        { name: "トレッドミル（傾斜ウォーク）", sets: 1, reps: "20分", rest: "—" },
      ],
    },
    {
      day: "Day 2",
      label: "下半身＋有酸素",
      exercises: [
        { name: "ゴブレットスクワット", sets: 3, reps: "12〜15回", rest: "45秒" },
        { name: "ルーマニアンデッドリフト", sets: 3, reps: "12〜15回", rest: "45秒" },
        { name: "レッグプレス", sets: 3, reps: "15回", rest: "45秒" },
        { name: "エアロバイク", sets: 1, reps: "20分", rest: "—" },
      ],
    },
    {
      day: "Day 3",
      label: "全身サーキット",
      exercises: [
        { name: "バーピー", sets: 3, reps: "10回", rest: "30秒" },
        { name: "ケトルベルスイング", sets: 3, reps: "15回", rest: "30秒" },
        { name: "マウンテンクライマー", sets: 3, reps: "20回", rest: "30秒" },
        { name: "プランク", sets: 3, reps: "45秒", rest: "30秒" },
      ],
    },
  ],
};

const homeBodyweightMenu: TrainingMenu = {
  title: "自重トレーニングプログラム 🏠",
  description: "器具なしで自宅でできる自重メニューです。",
  days: [
    {
      day: "Day 1",
      label: "上半身",
      exercises: [
        { name: "プッシュアップ", sets: 4, reps: "15〜20回", rest: "60秒" },
        { name: "ダイヤモンドプッシュアップ", sets: 3, reps: "10〜15回", rest: "60秒" },
        { name: "パイクプッシュアップ", sets: 3, reps: "10〜12回", rest: "60秒" },
        { name: "プランク", sets: 3, reps: "45秒", rest: "30秒" },
      ],
    },
    {
      day: "Day 2",
      label: "下半身",
      exercises: [
        { name: "スクワット", sets: 4, reps: "20回", rest: "60秒" },
        { name: "ブルガリアンスクワット", sets: 3, reps: "各12回", rest: "60秒" },
        { name: "カーフレイズ", sets: 3, reps: "20回", rest: "30秒" },
        { name: "ヒップスラスト（自重）", sets: 3, reps: "15回", rest: "45秒" },
      ],
    },
    {
      day: "Day 3",
      label: "全身",
      exercises: [
        { name: "バーピー", sets: 3, reps: "10回", rest: "45秒" },
        { name: "ランジ", sets: 3, reps: "各12回", rest: "45秒" },
        { name: "腕立て伏せ（ワイド）", sets: 3, reps: "15回", rest: "45秒" },
        { name: "マウンテンクライマー", sets: 3, reps: "20回", rest: "30秒" },
      ],
    },
  ],
};

const homeDumbbellMenu: TrainingMenu = {
  title: "ダンベルトレーニングプログラム 🏋️",
  description: "自宅のダンベルを活用した効率的なメニューです。",
  days: [
    {
      day: "Day 1",
      label: "胸・肩・三頭",
      exercises: [
        { name: "ダンベルプレス", sets: 4, reps: "10〜12回", rest: "60秒" },
        { name: "ダンベルフライ", sets: 3, reps: "12〜15回", rest: "60秒" },
        { name: "ショルダープレス", sets: 3, reps: "10〜12回", rest: "60秒" },
        { name: "キックバック", sets: 3, reps: "12回", rest: "45秒" },
      ],
    },
    {
      day: "Day 2",
      label: "背中・二頭",
      exercises: [
        { name: "ダンベルロウ", sets: 4, reps: "10〜12回", rest: "60秒" },
        { name: "ダンベルデッドリフト", sets: 3, reps: "10回", rest: "90秒" },
        { name: "ハンマーカール", sets: 3, reps: "12回", rest: "45秒" },
        { name: "コンセントレーションカール", sets: 3, reps: "10回", rest: "45秒" },
      ],
    },
    {
      day: "Day 3",
      label: "脚・腹筋",
      exercises: [
        { name: "ゴブレットスクワット", sets: 4, reps: "12回", rest: "60秒" },
        { name: "ダンベルランジ", sets: 3, reps: "各10回", rest: "60秒" },
        { name: "ダンベルカーフレイズ", sets: 3, reps: "15回", rest: "30秒" },
        { name: "ダンベルクランチ", sets: 3, reps: "15回", rest: "45秒" },
      ],
    },
  ],
};

const healthMenu: TrainingMenu = {
  title: "健康維持プログラム 🌿",
  description: "無理なく続けられる健康維持向けメニューです。",
  days: [
    {
      day: "Day 1",
      label: "全身（軽め）",
      exercises: [
        { name: "スクワット（自重）", sets: 3, reps: "15回", rest: "60秒" },
        { name: "プッシュアップ（膝つき可）", sets: 3, reps: "10〜15回", rest: "60秒" },
        { name: "プランク", sets: 3, reps: "30秒", rest: "45秒" },
        { name: "ストレッチ", sets: 1, reps: "10分", rest: "—" },
      ],
    },
    {
      day: "Day 2",
      label: "有酸素＋体幹",
      exercises: [
        { name: "ウォーキング or ジョギング", sets: 1, reps: "30分", rest: "—" },
        { name: "サイドプランク", sets: 2, reps: "各20秒", rest: "30秒" },
        { name: "ヒップリフト", sets: 3, reps: "15回", rest: "45秒" },
        { name: "ストレッチ", sets: 1, reps: "10分", rest: "—" },
      ],
    },
  ],
};

const sportsMenu: TrainingMenu = {
  title: "スポーツパフォーマンス向上プログラム ⚡",
  description: "爆発力とアジリティを高めるメニューです。",
  days: [
    {
      day: "Day 1",
      label: "パワー",
      exercises: [
        { name: "パワークリーン", sets: 4, reps: "5回", rest: "120秒" },
        { name: "ジャンプスクワット", sets: 4, reps: "8回", rest: "90秒" },
        { name: "ボックスジャンプ", sets: 3, reps: "8回", rest: "90秒" },
        { name: "メディシンボールスロー", sets: 3, reps: "10回", rest: "60秒" },
      ],
    },
    {
      day: "Day 2",
      label: "筋力",
      exercises: [
        { name: "スクワット", sets: 4, reps: "5〜6回", rest: "120秒" },
        { name: "ベンチプレス", sets: 4, reps: "5〜6回", rest: "120秒" },
        { name: "デッドリフト", sets: 3, reps: "5回", rest: "120秒" },
        { name: "懸垂", sets: 3, reps: "8回", rest: "90秒" },
      ],
    },
    {
      day: "Day 3",
      label: "アジリティ＋持久力",
      exercises: [
        { name: "ラダードリル", sets: 3, reps: "30秒", rest: "30秒" },
        { name: "スプリント（30m）", sets: 6, reps: "1本", rest: "60秒" },
        { name: "バーピー", sets: 3, reps: "12回", rest: "45秒" },
        { name: "プランク", sets: 3, reps: "60秒", rest: "30秒" },
      ],
    },
  ],
};

export function getTrainingMenu(answers: string[]): TrainingMenu {
  const purpose = answers[0] || "";
  const environment = answers[5] || "";

  // 目的と環境の組み合わせでメニューを決定
  if (purpose === "健康維持") {
    return healthMenu;
  }

  if (purpose === "スポーツパフォーマンス向上") {
    return sportsMenu;
  }

  if (environment === "自宅（自重のみ）") {
    return homeBodyweightMenu;
  }

  if (environment === "自宅（ダンベルあり）") {
    return homeDumbbellMenu;
  }

  if (purpose === "ダイエット") {
    return gymDietMenu;
  }

  return gymHypertrophyMenu;
}
