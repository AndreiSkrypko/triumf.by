import sharp from "sharp";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const publicDir = join(dirname(fileURLToPath(import.meta.url)), "..", "public");
const src = join(publicDir, "image.png");

const sizes = [
  ["favicon.png", 32],
  ["favicon-192.png", 192],
  ["apple-touch-icon.png", 180],
];

for (const [name, size] of sizes) {
  await sharp(src)
    .resize(size, size, { fit: "cover", position: "centre" })
    .png({ compressionLevel: 9 })
    .toFile(join(publicDir, name));
}

console.log("Favicons generated from image.png");
