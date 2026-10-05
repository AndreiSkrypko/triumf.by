import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

process.env.VITE_SITE_URL ??= process.env.SITE_URL ?? "https://triumf.by";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const outPath = join(root, "public", "sitemap.xml");

const { getPrerenderPaths, getSiteOrigin, SEO_PAGES } = await import("../src/lib/seo.ts");

const siteUrl = getSiteOrigin();
const paths = getPrerenderPaths();
const lastmod = new Date().toISOString().slice(0, 10);

const urls = paths
  .map((path) => {
    const loc = path === "/" ? `${siteUrl}/` : `${siteUrl}${path}`;
    const priority = path === "/" ? "1.0" : path.startsWith("/services/") ? "0.8" : "0.6";
    const changefreq = path === "/" ? "weekly" : "monthly";
    return `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
  })
  .join("\n");

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

writeFileSync(outPath, xml, "utf8");
console.log(`Wrote ${outPath} (${paths.length} URLs, base ${siteUrl})`);

const robotsPath = join(root, "public", "robots.txt");
const robots = readFileSync(robotsPath, "utf8");
const sitemapLine = `Sitemap: ${siteUrl}/sitemap.xml`;
const updatedRobots = robots.includes("Sitemap:")
  ? robots.replace(/^Sitemap:.*$/m, sitemapLine)
  : `${robots.trimEnd()}\n\n${sitemapLine}\n`;
writeFileSync(robotsPath, updatedRobots, "utf8");
console.log(`Updated ${robotsPath}`);
