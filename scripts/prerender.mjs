/**
 * Build-time prerenderer.
 *
 * The site is a client-rendered SPA, so before this existed every route was
 * served the same index.html: the same <title>, the same description, and a
 * canonical pointing at the homepage. Search engines saw every page as a
 * duplicate of "/" with an empty <div id="root">.
 *
 * This script renders each route in the manifest to real HTML and writes it to
 * dist/<route>/index.html with that route's own title, description, canonical,
 * Open Graph tags and JSON-LD baked into the served markup.
 */
import { readFileSync, writeFileSync, mkdirSync, rmSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');
const distDir = join(root, 'dist');
const ssrDir = join(root, '.ssr-build');

const {
  renderRoute,
  routes,
  sitemapRoutes,
  absoluteUrl,
  OG_IMAGE,
  SITE_ORIGIN,
  fullTitleFor,
  guideModulePath,
} = await import(join(ssrDir, 'entry-server.js'));

/**
 * Guide prose is code-split per cluster, so a guide page would otherwise have
 * to discover its chunk only after the main bundle booted — one extra round
 * trip of blank content on exactly the pages that exist to be read. Vite's
 * manifest maps the source module to its built chunk, and each guide's HTML
 * preloads its own cluster so the chunk arrives alongside the app.
 */
let viteManifest = {};
try {
  viteManifest = JSON.parse(readFileSync(join(distDir, '.vite', 'manifest.json'), 'utf8'));
} catch {
  console.log('  note: no vite manifest, skipping guide modulepreload hints');
}

function preloadFor(routePath) {
  const source = guideModulePath?.[routePath.replace(/^\//, '')];
  const chunk = source && viteManifest[source];
  return chunk?.file ? `<link rel="modulepreload" href="/${chunk.file}" />` : '';
}

const template = readFileSync(join(distDir, 'index.html'), 'utf8');

const escapeAttr = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/** JSON-LD must not be able to break out of its <script> element. */
const safeJsonLd = (obj) =>
  JSON.stringify(obj).replace(/</g, '\\u003c').replace(/>/g, '\\u003e').replace(/&/g, '\\u0026');

function buildHead(route) {
  const title = fullTitleFor(route.title);
  const canonical = route.canonical ? absoluteUrl(route.canonical) : null;
  const robots = route.noindex ? 'noindex, nofollow' : 'index, follow';

  const tags = [
    `<title>${escapeAttr(title)}</title>`,
    `<meta name="description" content="${escapeAttr(route.description)}" />`,
    `<meta name="robots" content="${robots}" />`,
    canonical ? `<link rel="canonical" href="${escapeAttr(canonical)}" />` : '',
    `<meta property="og:type" content="website" />`,
    `<meta property="og:title" content="${escapeAttr(title)}" />`,
    `<meta property="og:description" content="${escapeAttr(route.description)}" />`,
    canonical ? `<meta property="og:url" content="${escapeAttr(canonical)}" />` : '',
    `<meta property="og:site_name" content="QuillBill" />`,
    `<meta property="og:image" content="${escapeAttr(OG_IMAGE)}" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${escapeAttr(title)}" />`,
    `<meta name="twitter:description" content="${escapeAttr(route.description)}" />`,
    `<meta name="twitter:image" content="${escapeAttr(OG_IMAGE)}" />`,
    preloadFor(route.path),
  ].filter(Boolean);

  for (const node of route.jsonLd ?? []) {
    tags.push(
      `<script type="application/ld+json" data-prerendered>${safeJsonLd(node)}</script>`
    );
  }

  return tags.join('\n    ');
}

/**
 * Strip the placeholder head tags from the built template so each route's own
 * tags are the only ones present. Leaves viewport, icons, fonts and the app script.
 */
function stripPlaceholders(html) {
  return html
    .replace(/<title>[\s\S]*?<\/title>\s*/i, '')
    .replace(/<meta\s+name="description"[^>]*>\s*/gi, '')
    .replace(/<meta\s+name="keywords"[^>]*>\s*/gi, '')
    .replace(/<meta\s+name="robots"[^>]*>\s*/gi, '')
    .replace(/<link\s+rel="canonical"[^>]*>\s*/gi, '')
    .replace(/<meta\s+property="og:[^"]*"[^>]*>\s*/gi, '')
    .replace(/<meta\s+name="twitter:[^"]*"[^>]*>\s*/gi, '')
    .replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>\s*/gi, '')
    .replace(/<!--\s*(Open Graph|Twitter Card|JSON-LD Structured Data)\s*-->\s*/gi, '');
}

const baseTemplate = stripPlaceholders(template);

let written = 0;
const failures = [];

for (const route of routes) {
  let body = '';
  try {
    body = renderRoute(route.path);
  } catch (err) {
    failures.push(`${route.path}: ${err.message}`);
  }

  const html = baseTemplate
    .replace('</head>', `  ${buildHead(route)}\n  </head>`)
    .replace('<div id="root"></div>', `<div id="root">${body}</div>`);

  const outPath =
    route.path === '/' ? join(distDir, 'index.html') : join(distDir, route.path, 'index.html');

  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, html, 'utf8');
  written += 1;

  // Vercel serves a top-level 404.html with a real 404 status for any path that
  // matches no file. Without it the SPA catch-all returned 200 + homepage HTML
  // for every bad URL, which Google logs as a soft 404 and wastes crawl budget.
  if (route.path === '/404') {
    writeFileSync(join(distDir, '404.html'), html, 'utf8');
  }

  const bodyKb = (Buffer.byteLength(body) / 1024).toFixed(1);
  console.log(`  prerendered ${route.path.padEnd(28)} ${bodyKb.padStart(6)} KB of markup`);
}

// --- sitemap.xml -------------------------------------------------------------
const today = new Date().toISOString().slice(0, 10);
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapRoutes
  .map(
    (r) => `  <url>
    <loc>${absoluteUrl(r.canonical ?? r.path)}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${r.changefreq ?? 'monthly'}</changefreq>
    <priority>${(r.priority ?? 0.5).toFixed(1)}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`;
writeFileSync(join(distDir, 'sitemap.xml'), sitemap, 'utf8');

// --- robots.txt --------------------------------------------------------------
const robots = `User-agent: *
Allow: /

# Shared and editable document URLs carry user data in the path — never index.
Disallow: /view/
Disallow: /edit/
Disallow: /404

Sitemap: ${SITE_ORIGIN}/sitemap.xml
`;
writeFileSync(join(distDir, 'robots.txt'), robots, 'utf8');

rmSync(ssrDir, { recursive: true, force: true });

console.log(`\n  ${written} routes prerendered, sitemap has ${sitemapRoutes.length} URLs`);
if (failures.length) {
  console.log(`\n  render warnings:\n    ${failures.join('\n    ')}`);
}
