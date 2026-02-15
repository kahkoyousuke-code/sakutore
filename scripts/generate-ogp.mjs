import { createCanvas, loadImage, registerFont } from "canvas";
import { writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = join(__dirname, "..");

const WIDTH = 1200;
const HEIGHT = 630;

async function generateOGP() {
  const canvas = createCanvas(WIDTH, HEIGHT);
  const ctx = canvas.getContext("2d");

  // Background gradient (orange theme)
  const gradient = ctx.createLinearGradient(0, 0, WIDTH, HEIGHT);
  gradient.addColorStop(0, "#FF8C00"); // dark orange
  gradient.addColorStop(0.5, "#FF6B00");
  gradient.addColorStop(1, "#F97316"); // orange-500
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, WIDTH, HEIGHT);

  // Decorative circles for dynamic background
  ctx.globalAlpha = 0.1;
  ctx.fillStyle = "#FFFFFF";
  ctx.beginPath();
  ctx.arc(150, 500, 200, 0, Math.PI * 2);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(1050, 100, 250, 0, Math.PI * 2);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(900, 550, 150, 0, Math.PI * 2);
  ctx.fill();
  ctx.globalAlpha = 1;

  // White card area
  const cardX = 60;
  const cardY = 50;
  const cardW = WIDTH - 120;
  const cardH = HEIGHT - 100;
  const radius = 24;

  ctx.fillStyle = "rgba(255, 255, 255, 0.95)";
  ctx.beginPath();
  ctx.moveTo(cardX + radius, cardY);
  ctx.lineTo(cardX + cardW - radius, cardY);
  ctx.quadraticCurveTo(cardX + cardW, cardY, cardX + cardW, cardY + radius);
  ctx.lineTo(cardX + cardW, cardY + cardH - radius);
  ctx.quadraticCurveTo(
    cardX + cardW,
    cardY + cardH,
    cardX + cardW - radius,
    cardY + cardH
  );
  ctx.lineTo(cardX + radius, cardY + cardH);
  ctx.quadraticCurveTo(cardX, cardY + cardH, cardX, cardY + cardH - radius);
  ctx.lineTo(cardX, cardY + radius);
  ctx.quadraticCurveTo(cardX, cardY, cardX + radius, cardY);
  ctx.closePath();
  ctx.fill();

  // Load sakura character image
  try {
    const sakuraImg = await loadImage(join(rootDir, "public", "sakura.png"));
    const imgSize = 280;
    const imgX = 780;
    const imgY = 140;
    ctx.drawImage(sakuraImg, imgX, imgY, imgSize, imgSize);
  } catch (e) {
    console.log("Could not load sakura.png, continuing without it:", e.message);
  }

  // Logo text "サクトレ"
  ctx.fillStyle = "#F97316";
  ctx.font = "bold 80px 'Yu Gothic', 'Hiragino Sans', 'Meiryo', sans-serif";
  ctx.textBaseline = "top";
  ctx.fillText("サクトレ", 120, 100);

  // Orange accent line under logo
  ctx.fillStyle = "#F97316";
  ctx.fillRect(120, 195, 200, 5);

  // Catchcopy
  ctx.fillStyle = "#333333";
  ctx.font = "bold 36px 'Yu Gothic', 'Hiragino Sans', 'Meiryo', sans-serif";

  const line1 = "AIがあなた専用の";
  const line2 = "筋トレメニューを作成";
  ctx.fillText(line1, 120, 240);
  ctx.fillText(line2, 120, 290);

  // Sub description
  ctx.fillStyle = "#666666";
  ctx.font = "24px 'Yu Gothic', 'Hiragino Sans', 'Meiryo', sans-serif";
  ctx.fillText("6つの質問に答えるだけで", 120, 370);
  ctx.fillText("あなたにぴったりのメニューを", 120, 405);
  ctx.fillText("サクッと作成！", 120, 440);

  // Bottom tag
  ctx.fillStyle = "#F97316";
  const tagY = 490;
  const tagH = 40;
  const tagW = 200;
  const tagR = 20;
  ctx.beginPath();
  ctx.moveTo(120 + tagR, tagY);
  ctx.lineTo(120 + tagW - tagR, tagY);
  ctx.quadraticCurveTo(120 + tagW, tagY, 120 + tagW, tagY + tagR);
  ctx.lineTo(120 + tagW, tagY + tagH - tagR);
  ctx.quadraticCurveTo(
    120 + tagW,
    tagY + tagH,
    120 + tagW - tagR,
    tagY + tagH
  );
  ctx.lineTo(120 + tagR, tagY + tagH);
  ctx.quadraticCurveTo(120, tagY + tagH, 120, tagY + tagH - tagR);
  ctx.lineTo(120, tagY + tagR);
  ctx.quadraticCurveTo(120, tagY, 120 + tagR, tagY);
  ctx.closePath();
  ctx.fill();

  ctx.fillStyle = "#FFFFFF";
  ctx.font = "bold 20px 'Yu Gothic', 'Hiragino Sans', 'Meiryo', sans-serif";
  ctx.textBaseline = "middle";
  ctx.fillText("無料で使える！", 140, tagY + tagH / 2);

  // Output
  const buffer = canvas.toBuffer("image/png");
  const outputPath = join(rootDir, "public", "ogp.png");
  writeFileSync(outputPath, buffer);
  console.log(`OGP image generated: ${outputPath}`);
  console.log(`Size: ${buffer.length} bytes`);
}

generateOGP().catch(console.error);
