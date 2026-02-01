import { NextRequest, NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic();

export async function POST(request: NextRequest) {
  try {
    const { answers } = await request.json();

    if (!Array.isArray(answers) || answers.length !== 6) {
      return NextResponse.json(
        { error: "回答データが不正です" },
        { status: 400 }
      );
    }

    const prompt = `あなたはプロのパーソナルトレーナーです。以下のユーザーの回答に基づいて、最適なトレーニングメニューをJSON形式で生成してください。

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
          "rest": "60秒"
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
- setsは数値、repsは文字列（"10回"や"30秒"など）、restは文字列（"60秒"など）で出力すること`;

    const message = await client.messages.create({
      model: "claude-sonnet-4-5-20250929",
      max_tokens: 2048,
      messages: [{ role: "user", content: prompt }],
    });

    const text =
      message.content[0].type === "text" ? message.content[0].text : "";

    // JSONブロックを抽出
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      return NextResponse.json(
        { error: "メニューの生成に失敗しました" },
        { status: 500 }
      );
    }

    const menu = JSON.parse(jsonMatch[0]);
    return NextResponse.json(menu);
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { error: "メニューの生成中にエラーが発生しました" },
      { status: 500 }
    );
  }
}
