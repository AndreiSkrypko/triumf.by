import sharp from "sharp";
import { existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const hero = join(root, "src", "assets", "hero.webp");
const out = join(root, "public", "og-image.webp");

if (!existsSync(hero)) {
  console.warn("Skip og-image: hero.webp not found");
  process.exit(0);
}

await sharp(hero)
  .resize(1200, 630, { fit: "cover", position: "centre" })
  .webp({ quality: 82, effort: 4 })
  .toFile(out);

console.log("Wrote public/og-image.webp (1200×630)");
