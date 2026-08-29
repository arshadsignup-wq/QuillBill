/**
 * SEO audit over the prerendered output in dist/.
 *
 * Run after `npm run build`:  npm run audit:seo
 *
 * Checks, per indexable route:
 *   - title present, unique, <= 60 chars (HTML entities decoded first, so
 *     "&amp;" counts as the one character it renders as)
 *   - meta description present, unique, 70-160 chars
 *   - canonical present on anything not noindex
 *   - exactly one <h1>
 *   - >= 300 words of body copy
 *   - every internal link resolves to a route that exists
 *   - no orphans: every indexable route has inbound internal links
 *
 * It also prints the follow/nofollow status of every outbound link, so a
 * citation to a tax authority passing equity and a competitor link correctly
 * nofollowed are both visible at a glance.
 *
 * Two site-wide bugs this caught that manual review had missed: a <noscript>
 * block giving all 40 pages a second <h1> plus duplicated homepage copy, and
 * static JSON-LD hardcoding the non-www host (which redirects) onto every
 * page. Worth running before any release that touches the shell.
 */

import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const DIST = process.argv[2] || 'dist';

function walk(dir, acc = []) {
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) walk(p, acc);
    else if (e.name.endsWith('.html')) acc.push(p);
  }
  return acc;
}

const decode = (t) => t.replace(/&amp;/g,'&').replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&nbsp;/g,' ');
let files = walk(DIST);
// prerenderer emits both /x.html and /x/index.html for the same route
const dirForms = new Set(files.filter((f) => f.endsWith('/index.html')).map((f) => f.slice(0, -'/index.html'.length) + '.html'));
files = files.filter((f) => !dirForms.has(f));
const pages = [];

for (const f of files) {
  const html = readFileSync(f, 'utf8');
  const route = '/' + f.slice(DIST.length + 1).replace(/index\.html$/, '').replace(/\.html$/, '').replace(/\/$/, '');
  const title = decode((html.match(/<title>([^<]*)<\/title>/) || [])[1] || '');
  const desc = decode((html.match(/<meta name="description" content="([^"]*)"/) || [])[1] || '');
  const canonical = (html.match(/<link rel="canonical" href="([^"]*)"/) || [])[1] || '';
  const robots = (html.match(/<meta name="robots" content="([^"]*)"/) || [])[1] || '';
  const h1s = [...html.matchAll(/<h1[^>]*>(.*?)<\/h1>/gs)].map((m) => m[1].replace(/<[^>]+>/g, '').trim());
  const h2s = [...html.matchAll(/<h2[^>]*>(.*?)<\/h2>/gs)].map((m) => m[1].replace(/<[^>]+>/g, '').trim());
  // body text word count, excluding scripts/styles
  const body = html
    .replace(/<script[\s\S]*?<\/script>/g, ' ')
    .replace(/<style[\s\S]*?<\/style>/g, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  const words = body ? body.split(' ').length : 0;
  const internal = [...html.matchAll(/href="(\/[^"#]*)"/g)].map((m) => m[1]);
  const external = [...html.matchAll(/<a[^>]*href="(https?:\/\/[^"]+)"[^>]*>/g)].map((m) => m[1]);
  const nofollow = [...html.matchAll(/<a[^>]*rel="[^"]*nofollow[^"]*"[^>]*href="(https?:\/\/[^"]+)"|<a[^>]*href="(https?:\/\/[^"]+)"[^>]*rel="[^"]*nofollow[^"]*"/g)]
    .map((m) => m[1] || m[2]);
  const jsonLdTypes = [...html.matchAll(/"@type"\s*:\s*"([^"]+)"/g)].map((m) => m[1]);
  pages.push({ route, file: f, title, desc, canonical, robots, h1s, h2s, words, internal, external, nofollow, jsonLdTypes });
}

const problems = [];
const P = (sev, route, msg) => problems.push({ sev, route, msg });

// route set for link validation
const routeSet = new Set(pages.map((p) => p.route === '' ? '/' : p.route));
routeSet.add('/');

const seenTitle = new Map();
const seenDesc = new Map();
const inbound = new Map();

for (const p of pages) {
  const r = p.route || '/';
  if (!p.title) P('ERR', r, 'missing <title>');
  if (p.title.length > 60) P('WARN', r, `title ${p.title.length} chars (>60 truncates): "${p.title}"`);
  if (!p.desc) P('ERR', r, 'missing meta description');
  if (p.desc.length > 160) P('WARN', r, `description ${p.desc.length} chars (>160 truncates)`);
  if (p.desc.length && p.desc.length < 70) P('WARN', r, `description only ${p.desc.length} chars`);
  if (!p.canonical && !p.robots.includes('noindex')) P('ERR', r, 'missing canonical');
  if (p.h1s.length === 0) P('ERR', r, 'no <h1>');
  if (p.h1s.length > 1) P('ERR', r, `${p.h1s.length} <h1> tags`);
  if (p.words < 300 && !p.robots.includes('noindex')) P('WARN', r, `thin: ${p.words} words`);

  if (p.title) {
    if (seenTitle.has(p.title)) P('ERR', r, `duplicate title with ${seenTitle.get(p.title)}`);
    else seenTitle.set(p.title, r);
  }
  if (p.desc) {
    if (seenDesc.has(p.desc)) P('ERR', r, `duplicate description with ${seenDesc.get(p.desc)}`);
    else seenDesc.set(p.desc, r);
  }

  for (const link of p.internal) {
    const bare = link.split("?")[0];
    const target = bare === '' ? '/' : bare.replace(/\/$/, '') || '/';
    // A link can legitimately point at a static file rather than a route —
    // the downloadable .docx and .xlsx templates, for one. Resolve those
    // against the build output instead of exempting the paths by name, so a
    // link to a file that was never generated is still caught.
    const isFile = /\.[a-z0-9]{2,5}$/i.test(target) && existsSync(join(DIST, target));
    if (!routeSet.has(target) && !target.startsWith('/assets') && !isFile) {
      P('ERR', r, `internal link to neither a route nor a file in the build: ${link}`);
    }
    if (target !== r) inbound.set(target, (inbound.get(target) || 0) + 1);
  }
}

// orphans
for (const p of pages) {
  const r = p.route || '/';
  if (p.robots.includes('noindex')) continue;
  if (!inbound.get(r)) P('ERR', r, 'ORPHAN — no internal links point here');
  else if (inbound.get(r) < 3 && r !== '/') P('WARN', r, `only ${inbound.get(r)} inbound internal links`);
}

console.log(`\nPages audited: ${pages.length}\n`);
console.log('Route                                  Words  Title  Desc  In   H2s  JSON-LD');
console.log('─'.repeat(96));
for (const p of [...pages].sort((a, b) => (a.route || '/').localeCompare(b.route || '/'))) {
  const r = p.route || '/';
  console.log(
    r.padEnd(38) +
      String(p.words).padStart(5) +
      String(p.title.length).padStart(7) +
      String(p.desc.length).padStart(6) +
      String(inbound.get(r) || 0).padStart(5) +
      String(p.h2s.length).padStart(5) +
      '  ' + [...new Set(p.jsonLdTypes)].join(',')
  );
}

const errs = problems.filter((p) => p.sev === 'ERR');
const warns = problems.filter((p) => p.sev === 'WARN');
console.log(`\n\n===== ${errs.length} ERRORS =====`);
for (const p of errs) console.log(`  [${p.route}] ${p.msg}`);
console.log(`\n===== ${warns.length} WARNINGS =====`);
for (const p of warns) console.log(`  [${p.route}] ${p.msg}`);

// external link report
console.log('\n===== EXTERNAL LINKS =====');
const ext = new Map();
for (const p of pages) for (const e of p.external) ext.set(e, (ext.get(e) || 0) + 1);
const nof = new Set(pages.flatMap((p) => p.nofollow));
for (const [url, n] of [...ext].sort()) {
  console.log(`  ${nof.has(url) ? 'nofollow' : 'FOLLOW  '}  ${url} (${n})`);
}
