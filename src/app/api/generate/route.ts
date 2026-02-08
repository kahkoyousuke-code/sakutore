import { NextRequest, NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic({ timeout: 60 * 1000 });

function buildPrompt(answers: string[]): string {
  return `あなたはプロのパーソナルトレーナーです。以下のユーザーの回答に基づいて、最適なトレーニングメニューをJSON形式で生成してください。

## ユーザーの回答
1. トレーニングの目的: ${answers[0]}
2. 週のトレーニング回数: ${answers[1]}
3. 1回のトレーニング時間: ${answers[2]}
4. トレーニング経験: ${answers[3]}
5. 特に鍛えたい部位: ${answers[4]}
6. トレーニング環境: ${answers[5]}

## 出力形式
以下のJSON形式で出力してください。JSONのみを出力し、他のテキストは一切含めないでください。

{
  "title": "メニュータイトル（絵文字1つ付き）",
  "description": "メニューの簡潔な説明（1〜2文）",
  "days": [
    {
      "day": "Day 1",
      "label": "その日のテーマ",
      "exercises": [
        {
          "name": "種目名",
          "sets": 3,
          "reps": "10回",
          "rest": "60秒",
          "howTo": "簡潔な手順（2〜3ステップ）",
          "formTips": "怪我を防ぐためのフォームのポイント（1〜2文）",
          "muscleTips": "筋肉に効かせるための意識・コツ（1〜2文）"
        }
      ]
    }
  ]
}

## ルール
- 日本語で出力すること
- ユーザーの回答すべてを考慮してメニューを作ること
- 週のトレーニング回数に合わせてdaysの数を決めること（例：週3回なら3日分）
- トレーニング時間に収まるように種目数を調整すること
- 経験レベルに応じて種目の難易度・重量設定を変えること
- 鍛えたい部位を重点的に含めること
- トレーニング環境で使える器具に限定すること
- 各日に3〜5種目を含めること
- setsは数値、repsは文字列（"10回"や"30秒"など）、restは文字列（"60秒"など）で出力すること
- howToは簡潔な手順を2〜3ステップで書くこと
- formTipsは怪我を防ぐためのフォームの注意点を1〜2文で書くこと
- muscleTipsは対象筋肉に効かせるための意識やコツを1〜2文で書くこと`;
}

async function callClaude(prompt: string) {
  const message = await client.messages.create({
    model: "claude-sonnet-4-5-20250929",
    max_tokens: 8192,
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
