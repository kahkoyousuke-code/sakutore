import { NextRequest, NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic({ timeout: 20 * 1000, maxRetries: 0 });

interface RecoveryInfo {
  group: string;
  daysSince: number | null;
  status?: string;
}

function exerciseCount(time: string): string {
  if (time.includes("30分")) return "4";
  if (time.includes("60分")) return "5〜6";
  return "6〜7";
}

function recoveryLine(recovery?: RecoveryInfo[]): string {
  if (!Array.isArray(recovery) || recovery.length === 0) return "";
  const parts = recovery.map((r) => {
    if (r.daysSince === null) return `${r.group}=未実施`;
    if (r.daysSince === 0) return `${r.group}=本日実施済み`;
    return `${r.group}=${r.daysSince}日前`;
  });
  return `\n部位別の回復状況:${parts.join(" / ")}`;
}

function buildPrompt(answers: string[], recovery?: RecoveryInfo[]): string {
  const count = exerciseCount(answers[1]);
  const focus = answers[3];
  const hasFocus = focus && focus !== "特にこだわりなし（全体的に鍛えたい）";
  const focusNote = hasFocus
    ? `${focus}を中心に`
    : "回復状況をふまえて鍛える部位を選ぶ";

  const repRange = answers[0].includes("筋肥大")
    ? "6〜12rep"
    : answers[0].includes("ダイエット")
    ? "12〜20rep"
    : answers[0].includes("健康")
    ? "10〜15rep"
    : "8〜15rep";

  const experienceNote = answers[2].includes("初心者")
    ? "基本的なコンパウンド種目・マシン種目中心で安全・習得しやすい種目を選ぶ"
    : answers[2].includes("上級者")
    ? "バリエーション種目や高強度テクニックも活用可"
    : "標準的な種目で構成";

  const recoveryRule =
    Array.isArray(recovery) && recovery.length > 0
      ? "\n- 回復済み(2日以上空いている/未実施)の部位を優先し、本日や前日に実施した部位は避ける"
      : "";

  return `今日のトレーニング1回分だけをJSONのみで出力。説明文不要。

目的:${answers[0]} / 時間:${answers[1]} / 経験:${answers[2]} / 重点:${focusNote} / 環境:${answers[4]}${recoveryLine(recovery)}

設計ルール:
- 本日1回分のみ。鍛える部位は1〜2部位に絞る(例:胸+三頭、背中+二頭、脚、肩+腕など)
- ${count}種目(コンパウンド中心+アイソレーション)
- レップ数:${repRange}
- 種目選択:${experienceNote}
- ${answers[4]}の器具のみ使用${recoveryRule}

出力形式:{"title":"絵文字+今日のメニュー名","description":"今日のメニューの狙いを1〜2文","days":[{"day":"本日のメニュー","label":"鍛える部位","exercises":[{"name":"種目名","sets":3,"reps":"10回","rest":"90秒"}]}]}
daysは必ず1要素のみ。setsは数値、reps/restは文字列`;
}

async function callClaude(prompt: string) {
  const message = await client.messages.create({
    model: "claude-haiku-4-5-20251001",
    max_tokens: 2048,
    system:
      "あなたはプロのパーソナルトレーナーです。利用者の条件に合わせた、科学的根拠のある効果的なトレーニングメニューをJSON形式で出力します。",
    messages: [{ role: "user", content: prompt }],
  });

  const text =
    message.content[0].type === "text" ? message.content[0].text : "";

  if (message.stop_reason !== "end_turn") {
    throw new Error(
      `レスポンスが途中で切れました (stop_reason: ${message.stop_reason})`
    );
  }

  const jsonMatch = text.match(/\{[\s\S]*\}/);
  if (!jsonMatch) {
    throw new Error("レスポンスからJSONを抽出できませんでした");
  }

  return JSON.parse(jsonMatch[0]);
}

function classifyError(error: unknown): { message: string; status: number } {
  if (error instanceof Anthropic.APIConnectionError) {
    return { message: "AIサービスに接続できませんでした。通信環境を確認してください。", status: 503 };
  }
  if (error instanceof Anthropic.RateLimitError) {
    return { message: "リクエストが集中しています。しばらく待ってからお試しください。", status: 429 };
  }
  if (error instanceof Anthropic.APIError) {
    return { message: "AIサービスで一時的なエラーが発生しました。しばらく待ってからお試しください。", status: 502 };
  }
  if (error instanceof SyntaxError) {
    return { message: "メニューデータの解析に失敗しました。もう一度お試しください。", status: 500 };
  }
  if (error instanceof Error && error.message.includes("途中で切れました")) {
    return { message: "メニューの生成が途中で終了しました。もう一度お試しください。", status: 500 };
  }
  return { message: "メニューの生成中にエラーが発生しました。もう一度お試しください。", status: 500 };
}

export async function POST(request: NextRequest) {
  try {
    const { answers, recovery } = await request.json();

    if (!Array.isArray(answers) || answers.length !== 5) {
      return NextResponse.json(
        { error: "回答データが不正です" },
        { status: 400 }
      );
    }

    const prompt = buildPrompt(answers, recovery);

    // 1回目の試行
    try {
      const menu = await callClaude(prompt);
      return NextResponse.json(menu);
    } catch (firstError) {
      console.warn("[generate] 1回目の試行に失敗。リトライします:", firstError);

      // 自動リトライ（1回）
      try {
        const menu = await callClaude(prompt);
        console.info("[generate] リトライ成功");
        return NextResponse.json(menu);
      } catch (retryError) {
        console.error("[generate] リトライも失敗:", retryError);
        const { message, status } = classifyError(retryError);
        return NextResponse.json({ error: message }, { status });
      }
    }
  } catch (error) {
    console.error("[generate] リクエスト処理エラー:", error);
    return NextResponse.json(
      { error: "リクエストの処理中にエラーが発生しました。" },
      { status: 500 }
    );
  }
}
