import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";
import {
  diagnoseBig3,
  headlineLevel,
  levelText,
  parseBig3Params,
} from "@/lib/big3Diagnosis";

export const runtime = "edge";

// The font ships with the route: a Noto Sans JP Bold subset holding only the
// glyphs this card can draw (fixed labels, level names, ASCII). Fetching fonts
// or emoji at request time made the first render slow enough that X gave up
// and showed the card without an image.
// If you add new Japanese text to the card, regenerate the subset with those
// characters included, or they render as blank boxes.
const fontData = fetch(new URL("./NotoSansJP-Bold-subset.ttf", import.meta.url)).then((r) =>
  r.arrayBuffer()
);

export async function GET(req: NextRequest) {
  const input = parseBig3Params(req.nextUrl.searchParams);
  const result = input ? diagnoseBig3(input) : null;

  const title = "BIG3レベル診断";
  const head = result ? headlineLevel(result) : null;
  const subline = result
    ? `体重${result.input.bodyWeight}kg・${result.input.gender === "male" ? "男性" : "女性"}基準`
    : "重量からレベルを判定";
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

  const font = await fontData;

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
          fontFamily: "NotoSansJP",
          color: "#1f2937",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ fontSize: 30, fontWeight: 700, color: "#f97316" }}>サクトレ</div>
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
      fonts: [{ name: "NotoSansJP", data: font, style: "normal", weight: 700 }],
    }
  );
}
