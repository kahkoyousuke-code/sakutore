import { NextRequest, NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic({ timeout: 10 * 1000, maxRetries: 0 });

function buildPrompt(answers: string[]): string {
  return `JSONのみ出力。トレーニングメニューを作成。
条件:目的${answers[0]}/頻度${answers[1]}/時間${answers[2]}/経験${answers[3]}/重点部位${answers[4]}(これらを重点的にメニューに含める)/環境${answers[5]}
形式:{"title":"絵文字+名前","description":"短い説明","days":[{"day":"Day 1","label":"部位","exercises":[{"name":"種目","sets":3,"reps":"10回","rest":"60秒"}]}]}
最大3日,各日3種目,${answers[5]}の器具のみ,setsは数値,reps/restは文字列`;
}

async function callClaude(prompt: string) {
  const message = await client.messages.create({
    model: "claude-haiku-4-5-20251001",
    max_tokens: 1024,
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
    const { answers } = await request.json();

    if (!Array.isArray(answers) || answers.length !== 6) {
      return NextResponse.json(
        { error: "回答データが不正です" },
        { status: 400 }
      );
    }

    const prompt = buildPrompt(answers);

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
