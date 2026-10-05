import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

process.env.VITE_SITE_URL ??= process.env.SITE_URL ?? "https://triumf.by";

const seo = await import("../src/lib/seo.ts");
const { buildHead, getPrerenderPaths, getSiteOrigin, SEO_PAGES, SITE } = seo;
type SeoPath = seo.SeoPath;

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const distDir = join(root, "dist");
const templatePath = join(distDir, "index.html");
const shellPath = join(distDir, "index.template.html");

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function metaToHtml(meta: Record<string, string>) {
  if ("title" in meta) {
    return `<title>${escapeHtml(meta.title)}</title>`;
  }
  if ("property" in meta) {
    return `<meta property="${escapeHtml(meta.property)}" content="${escapeHtml(meta.content)}" />`;
  }
  if ("name" in meta) {
    return `<meta name="${escapeHtml(meta.name)}" content="${escapeHtml(meta.content)}" />`;
  }
  return "";
}

function headExtrasForPath(path: SeoPath) {
  const { meta, links, scripts } = buildHead(path);
  const lines = [
    ...meta.map(metaToHtml),
    ...links.map((link) => `<link rel="${escapeHtml(link.rel)}" href="${escapeHtml(link.href)}" />`),
    ...scripts.map((script) => `<script type="${escapeHtml(script.type)}">${script.children}</script>`),
  ];
  return lines.join("\n    ");
}

function injectHead(template: string, path: SeoPath) {
  const extras = headExtrasForPath(path);
  let html = template.replace(/<title>[\s\S]*?<\/title>\s*/gi, "");
  html = html.replace(/<meta\s+name="description"[\s\S]*?>\s*/gi, "");
  return html.replace("</head>", `    ${extras}\n  </head>`);
}

function outputPathForRoute(path: SeoPath) {
  if (path === "/") return join(distDir, "index.html");
  return join(distDir, path.slice(1), "index.html");
}

const viteIndex = readFileSync(templatePath, "utf8");
const viteShellIsFresh = !viteIndex.includes("application/ld+json");

if (viteShellIsFresh) {
  writeFileSync(shellPath, viteIndex, "utf8");
} else if (!existsSync(shellPath)) {
  throw new Error("dist/index.html already prerendered and index.template.html is missing — run vite build first");
}

const template = readFileSync(shellPath, "utf8");
const origin = getSiteOrigin();

for (const path of getPrerenderPaths()) {
  const html = injectHead(template, path);
  const out = outputPathForRoute(path);
  mkdirSync(dirname(out), { recursive: true });
  writeFileSync(out, html, "utf8");
  console.log(`Prerendered ${SEO_PAGES[path].path} → ${out.replace(root + "\\", "").replace(root + "/", "")}`);
}

console.log(`Prerender complete (${getPrerenderPaths().length} pages, ${origin}, og:${SITE.ogImagePath})`);
