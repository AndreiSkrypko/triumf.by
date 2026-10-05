import sharp from "sharp";
import { readdirSync, statSync, unlinkSync, existsSync } from "node:fs";
import { dirname, join, extname, basename } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const assetsDir = join(root, "src", "assets");
const publicDir = join(root, "public");

const WEBP_QUALITY = 82;

/** @type {Record<string, { maxWidth: number }>} */
const maxWidthByFile = {
  "hero.jpg": { maxWidth: 1920 },
};

async function jpgToWebp(inputPath, outputPath, maxWidth) {
  const image = sharp(inputPath).rotate();
  const meta = await image.metadata();
  const width = meta.width ?? maxWidth;
  const pipeline = width > maxWidth ? image.resize(maxWidth, undefined, { withoutEnlargement: true }) : image;
  await pipeline.webp({ quality: WEBP_QUALITY, effort: 4 }).toFile(outputPath);
}

async function pngLogoToWebp(inputPath, outputPath, size) {
  await sharp(inputPath)
    .rotate()
    .resize(size, size, { fit: "cover", position: "centre" })
    .webp({ quality: 85, effort: 4 })
    .toFile(outputPath);
}

function shouldConvert(sourcePath, targetPath) {
  if (!existsSync(targetPath)) return true;
  return statSync(sourcePath).mtimeMs > statSync(targetPath).mtimeMs;
}

const jpgFiles = readdirSync(assetsDir).filter((name) => extname(name).toLowerCase() === ".jpg");

for (const file of jpgFiles) {
  const input = join(assetsDir, file);
  const output = join(assetsDir, `${basename(file, ".jpg")}.webp`);
  const { maxWidth } = maxWidthByFile[file] ?? { maxWidth: 1280 };

  if (!shouldConvert(input, output)) {
    console.log(`Skip (up to date): ${file} → ${basename(output)}`);
    continue;
  }

  await jpgToWebp(input, output, maxWidth);
  const inStat = statSync(input);
  const outStat = statSync(output);
  const saved = ((1 - outStat.size / inStat.size) * 100).toFixed(0);
  console.log(`Converted ${file} → ${basename(output)} (${(inStat.size / 1024).toFixed(0)} KB → ${(outStat.size / 1024).toFixed(0)} KB, −${saved}%)`);
}

const logoSource = join(root, "scripts", "brand-logo-source.png");
const logoWebp = join(publicDir, "logo.webp");
if (existsSync(logoSource)) {
  if (shouldConvert(logoSource, logoWebp)) {
    await pngLogoToWebp(logoSource, logoWebp, 192);
    console.log(`Wrote public/logo.webp from scripts/brand-logo-source.png`);
  } else {
    console.log("Skip (up to date): public/logo.webp");
  }
} else {
  console.warn("Missing scripts/brand-logo-source.png — skip logo.webp");
}

/** Remove legacy JPEGs from assets after WebP exists (sources stay in git history). */
for (const file of jpgFiles) {
  const webp = join(assetsDir, `${basename(file, ".jpg")}.webp`);
  const jpg = join(assetsDir, file);
  if (existsSync(webp) && existsSync(jpg)) {
    unlinkSync(jpg);
    console.log(`Removed source ${file} (WebP in repo)`);
  }
}

console.log("Image optimization done.");
