const { createCanvas, loadImage } = require("canvas");
const fs = require("fs");
const path = require("path");

async function createIcon(size) {
  const img = await loadImage(path.join(__dirname, "../public/sakura.png"));
  const canvas = createCanvas(size, size);
  const ctx = canvas.getContext("2d");
  ctx.drawImage(img, 0, 0, size, size);
  const buffer = canvas.toBuffer("image/png");
  fs.writeFileSync(path.join(__dirname, `../public/icon-${size}.png`), buffer);
  console.log(`icon-${size}.png created`);
}

(async () => {
  await createIcon(192);
  await createIcon(512);
})();
