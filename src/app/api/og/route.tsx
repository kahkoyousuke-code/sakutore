import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const purpose = searchParams.get("purpose") || "";
  const parts = searchParams.get("parts") || "";

  let fontData: ArrayBuffer | null = null;
  try {
    const css = await fetch(
      "https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@700&display=swap",
      { headers: { "User-Agent": "Mozilla/5.0" } }
    ).then((r) => r.text());
    const url = css.match(/url\((https:\/\/[^)]+)\)/)?.[1];
    if (url) fontData = await fetch(url).then((r) => r.arrayBuffer());
  } catch {}

  const partsLabel = parts ? parts.split(",").join("・") : null;

  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          background: "linear-gradient(135deg, #fff7ed 0%, #fed7aa 50%, #fdba74 100%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: fontData ? "NotoSansJP" : "sans-serif",
          padding: "60px 80px",
        }}
      >
        <div style={{ fontSize: 28, fontWeight: 700, color: "#f97316", marginBottom: 24 }}>
          🌸 サクトレ
        </div>

        <div
          style={{
            fontSize: 52,
            fontWeight: 900,
            color: "#1f2937",
            textAlign: "center",
            marginBottom: 36,
            lineHeight: 1.4,
          }}
        >
          AIがあなた専用の
          <br />
          筋トレメニューを作成！
        </div>

        <div
          style={{
            background: "white",
            borderRadius: 24,
            padding: "28px 56px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 14,
            boxShadow: "0 8px 32px rgba(0,0,0,0.08)",
            minWidth: 560,
          }}
        >
          {purpose && (
            <div
              style={{
                background: "#f97316",
                color: "white",
                borderRadius: 40,
                padding: "10px 32px",
                fontSize: 30,
                fontWeight: 700,
              }}
            >
              {purpose}
            </div>
          )}
          {partsLabel && (
            <div style={{ fontSize: 24, color: "#6b7280", fontWeight: 500 }}>
              重点部位：{partsLabel}
            </div>
          )}
          <div style={{ fontSize: 20, color: "#9ca3af", marginTop: 4 }}>
            質問に答えて今日のメニューをサクッと作成・完全無料
          </div>
        </div>

        <div style={{ fontSize: 22, color: "#f97316", marginTop: 36, fontWeight: 600 }}>
          sakutore.vercel.app
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      ...(fontData
        ? { fonts: [{ name: "NotoSansJP", data: fontData, style: "normal" as const }] }
        : {}),
    }
  );
}
