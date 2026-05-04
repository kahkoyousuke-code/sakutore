import { NextRequest, NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic({ timeout: 25 * 1000, maxRetries: 0 });

const SYSTEM_PROMPT = `あなたはサクラ、明るくフレンドリーなパーソナルトレーナーAIです。ユーザーと自然な会話を通じてトレーニングメニューを作成します。

収集する情報：
1. 目的（筋肥大/ダイエット/健康維持/体力向上など）
2. 週の頻度（週何回）
3. 1回の時間（何分）
4. 経験レベル（初心者/中級者/上級者）
5. 重点部位（なければ全身OK）
6. 環境（ジム/自宅・ダンベルあり/自重のみ）

会話ルール：
- 敬語は使わず親しみやすい口調で（「〜だよ」「〜だね」「〜しよう！」）
- 一度に1〜2個の質問のみ
- ユーザーの回答に共感してから次の質問へ
- 全情報が揃うまでメニューを生成しない

選択肢の提示：
質問に自然な選択肢がある場合、メッセージの末尾に以下の形式で選択肢を追加（4個以内）：
<options>["選択肢1","選択肢2","選択肢3"]</options>
例）目的を聞く→["筋肥大","ダイエット","健康維持","体力向上"]
例）頻度を聞く→["週2回","週3回","週4回","週5回以上"]
例）時間を聞く→["30分以内","30〜60分","60〜90分","90分以上"]
例）経験を聞く→["初心者（〜半年）","中級者（半年〜2年）","上級者（2年以上）"]
例）環境を聞く→["ジム","自宅（ダンベルあり）","自宅（自重のみ）"]
部位や複数回答が必要な質問には選択肢を出さなくてOK

メニュー生成時：
励ます一言（2〜3文）を書いてから、直後に以下の形式で出力：
<menu>
{"title":"絵文字+タイトル","description":"メニュー特徴1〜2文","days":[{"day":"Day 1","label":"部位名","exercises":[{"name":"種目名","sets":3,"reps":"10回","rest":"90秒"}]}]}
</menu>

JSONルール：頻度に合わせて最大3日、各日4〜6種目、setsは数値・reps/restは文字列、環境の器具のみ使用`;

export async function POST(request: NextRequest) {
  try {
    const { messages } = await request.json();

    const response = await client.messages.create({
      model: "claude-haiku-4-5-20251001",
      max_tokens: 2048,
      system: SYSTEM_PROMPT,
      messages,
    });

    const text =
      response.content[0].type === "text" ? response.content[0].text : "";

    const menuMatch = text.match(/<menu>([\s\S]*?)<\/menu>/);
    if (menuMatch) {
      const jsonMatch = menuMatch[1].match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        try {
          const menu = JSON.parse(jsonMatch[0]);
          const message = text.replace(/<menu>[\s\S]*?<\/menu>/, "").trim();
          return NextResponse.json({ type: "menu", message, menu });
        } catch {
          // JSON parse failed — fall through to regular message
        }
      }
    }

    const optionsMatch = text.match(/<options>([\s\S]*?)<\/options>/);
    let options: string[] | undefined;
    if (optionsMatch) {
      try {
        options = JSON.parse(optionsMatch[1]);
      } catch {}
    }
    const content = text.replace(/<options>[\s\S]*?<\/options>/, "").trim();

    return NextResponse.json({ type: "message", content, options });
  } catch (error) {
    console.error("[chat]", error);
    return NextResponse.json(
      { error: "エラーが発生したよ。もう一度試してみて！" },
      { status: 500 }
    );
  }
}
