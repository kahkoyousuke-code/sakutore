const { createCanvas } = require("canvas");
const fs = require("fs");
const path = require("path");

function drawMobileScreenshot() {
  const w = 390, h = 844;
  const canvas = createCanvas(w, h);
  const ctx = canvas.getContext("2d");

  // 背景
  ctx.fillStyle = "#fff7ed";
  ctx.fillRect(0, 0, w, h);

  // ヘッダー
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, w, 60);
  ctx.fillStyle = "#f97316";
  ctx.font = "bold 20px sans-serif";
  ctx.textAlign = "center";
  ctx.fillText("🌸 サクトレ", w / 2, 38);

  // メインタイトル
  ctx.fillStyle = "#1f2937";
  ctx.font = "bold 26px sans-serif";
  ctx.textAlign = "center";
  ctx.fillText("AIがあなた専用の", w / 2, 160);
  ctx.fillText("筋トレメニューを作成！", w / 2, 196);

  ctx.fillStyle = "#6b7280";
  ctx.font = "14px sans-serif";
  ctx.fillText("6つの質問に答えるだけ・完全無料", w / 2, 230);

  // ボタン
  ctx.fillStyle = "#f97316";
  roundRect(ctx, 40, 270, 310, 56, 28);
  ctx.fillStyle = "#ffffff";
  ctx.font = "bold 18px sans-serif";
  ctx.fillText("メニューを作成する", w / 2, 306);

  // カード
  const cards = ["目的を選択", "トレーニング頻度", "使える器具", "重点部位", "体力レベル", "時間"];
  cards.forEach((text, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const x = 24 + col * 175;
    const y = 370 + row * 80;
    ctx.fillStyle = "#ffffff";
    roundRect(ctx, x, y, 155, 60, 12);
    ctx.fillStyle = "#374151";
    ctx.font = "13px sans-serif";
    ctx.textAlign = "center";
    ctx.fillText(text, x + 77, y + 36);
  });

  const buffer = canvas.toBuffer("image/png");
  fs.writeFileSync(path.join(__dirname, "../public/screenshot-mobile.png"), buffer);
  console.log("screenshot-mobile.png created (390x844)");
}

function roundRect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + r);
  ctx.lineTo(x + w, y + h - r);
  ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  ctx.lineTo(x + r, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
  ctx.fill();
}

drawMobileScreenshot();
