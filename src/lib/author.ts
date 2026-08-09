/**
 * 運営者（著者）情報の単一ソース。
 * E-E-A-T（経験・専門性・権威性・信頼性）を全ページで一貫して示すため、
 * 著者ボックス・about・gear など複数箇所でここを参照する。
 */
export const AUTHOR = {
  // 姉妹サービス（サクメシ・サクサプ）と note・X で共通のハンドル。
  // どこから辿っても同一人物だと分かるよう、変更するときは3サービス揃えること。
  name: "motsu",
  handle: "@MotMotsu",
  xUrl: "https://x.com/MotMotsu",
  noteUrl: "https://note.com/kahko",
  height: "173cm",
  // 実体験ベースの実績。具体的な数字ほど信頼性が高い。
  credentials: ["筋トレ歴15年", "フィジーク大会入賞", "90kg→78kg（−12kg）"],
  bioShort:
    "20代で体重90kg超の運動不足から一念発起。試行錯誤の末に大会入賞レベルまで体を変えた実体験をもとに発信しています。",
  aboutPath: "/about",
} as const;

/** JSON-LD の sameAs に渡す、同一人物であることを裏づける外部プロフィール。 */
export const AUTHOR_SAME_AS: string[] = [
  AUTHOR.xUrl,
  AUTHOR.noteUrl,
  "https://sakumeshi.app/about#author",
];
