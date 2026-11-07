import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";
import {
  diagnoseBig3,
  headlineLevel,
  levelText,
  parseBig3Params,
} from "@/lib/big3Diagnosis";

export const runtime = "edge";

// Fetch only the glyphs we draw. Google Fonts splits Noto Sans JP into many
// unicode-range files, so taking the first url() would miss most kanji.
async function loadFont(text: string): Promise<ArrayBuffer | null> {
  try {
    const css = await fetch(
      `https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@700&text=${encodeURIComponent(text)}`,
      { headers: { "User-Agent": "Mozilla/5.0" } }
    ).then((r) => r.text());
    const url = css.match(/src: url\((.+?)\)/)?.[1];
    return url ? await fetch(url).then((r) => r.arrayBuffer()) : null;
  } catch {
    return null;
  }
}

export async function GET(req: NextRequest) {
  const input = parseBig3Params(req.nextUrl.searchParams);
  const result = input ? diagnoseBig3(input) : null;

  const title = "BIG3レベル診断";
  const head = result ? headlineLevel(result) : null;
  const subline = result
    ? `体重${result.input.bodyWeight}kg・${result.input.gender === "male" ? "男性" : "女性"}基準`
    : "3種目の重量から今のレベルを判定";
  const rows = result
    ? result.lifts.map((l) => ({
        label: l.label,
        kg: `${l.kg}kg`,
        level: levelText(l.level, result.input.gender),
      }))
    : [];
  const totalLine = result ? `BIG3合計 ${result.total}kg` : "";
  const ratioLine = result ? `体重の${result.totalRatio}倍` : "";
  const womenNote = "レベルは種目別に判定";

  const allText = [
    "🌸サクトレ",
    title,
    head ?? "",
    subline,
    totalLine,
    ratioLine,
    womenNote,
    "あなたも診断 sakutore.jp",
    ...rows.flatMap((r) => [r.label, r.kg, r.level]),
  ].join("");
  const font = await loadFont(allText);

  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          background: "linear-gradient(135deg, #fff7ed 0%, #fed7aa 55%, #fdba74 100%)",
          display: "flex",
          flexDirection: "column",
          padding: "48px 72px",
          fontFamily: font ? "NotoSansJP" : "sans-serif",
          color: "#1f2937",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ fontSize: 30, fontWeight: 700, color: "#f97316" }}>🌸サクトレ</div>
          <div style={{ fontSize: 30, fontWeight: 700, color: "#9a3412" }}>{title}</div>
        </div>

        <div style={{ display: "flex", flex: 1, marginTop: 24, gap: 40 }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              background: "#f97316",
              color: "white",
              borderRadius: 32,
              width: 470,
              padding: "24px",
            }}
          >
            <div style={{ display: "flex", fontSize: 28 }}>{subline}</div>
            {result && (
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: 16 }}>
                <div style={{ display: "flex", fontSize: 44 }}>{totalLine}</div>
                <div style={{ display: "flex", fontSize: 30, color: "#ffedd5" }}>{ratioLine}</div>
              </div>
            )}
            {head && (
              <div style={{ display: "flex", fontSize: head.length > 4 ? 60 : 88, fontWeight: 700, marginTop: 8 }}>
                {head}
              </div>
            )}
            {result && !head && (
              <div style={{ display: "flex", fontSize: 26, color: "#ffedd5", marginTop: 24 }}>{womenNote}</div>
            )}
          </div>

          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", flex: 1, gap: 20 }}>
            {rows.map((r) => (
              <div
                key={r.label}
                style={{
                  display: "flex",
                  alignItems: "center",
                  background: "white",
                  borderRadius: 24,
                  padding: "18px 28px",
                  boxShadow: "0 6px 24px rgba(0,0,0,0.06)",
                }}
              >
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <div style={{ display: "flex", fontSize: 28 }}>{r.label}</div>
                  <div style={{ display: "flex", fontSize: 30, color: "#6b7280" }}>{r.kg}</div>
                </div>
                <div style={{ display: "flex", fontSize: 40, color: "#f97316", marginLeft: "auto", whiteSpace: "nowrap" }}>
                  {r.level}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "flex-end", fontSize: 28, color: "#9a3412", marginTop: 20 }}>
          あなたも診断 sakutore.jp
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      ...(font ? { fonts: [{ name: "NotoSansJP", data: font, style: "normal" as const, weight: 700 as const }] } : {}),
    }
  );
}
