/**
 * Q&A audit over the guide source files.
 *
 * Run any time:  npm run audit:qa
 *
 * Checks:
 *   - no question appears twice, on one page or across pages. A question
 *     answered in two places competes with itself; each needs one canonical
 *     owner. See keyword-map.md for the ownership table.
 *   - answers in the `answers` blocks stay in the 35-65 word snippet band.
 *     That is the length Google lifts for a paragraph snippet; longer gets
 *     truncated mid-sentence and shorter rarely gets chosen.
 *   - near-duplicate questions across pages, by token overlap.
 *
 * Jurisdiction scoping: "what is reverse charge on a GST invoice" and the UAE
 * and EU equivalents share almost every token but target different searches
 * and have genuinely different answers. SCOPES below prevents those being
 * flagged. Add to it when a new jurisdiction or profession cluster is added,
 * or the audit will produce false positives instead of findings.
 */

import { readFileSync, readdirSync } from 'node:fs';

const src = 'src/pages/guides';
const files = readdirSync(src).filter((f) => f.endsWith('.ts'));

// crude but sufficient: pull question/answer string pairs in source order
const entries = [];
for (const f of files) {
  const text = readFileSync(`${src}/${f}`, 'utf8');
  const re = /question:\s*(?:'((?:[^'\\]|\\.)*)'|"((?:[^"\\]|\\.)*)")\s*,\s*\n\s*answer:\s*\n?\s*(?:'((?:[^'\\]|\\.)*)'|"((?:[^"\\]|\\.)*)")/g;
  let m;
  while ((m = re.exec(text)) !== null) {
    const q = (m[1] ?? m[2]).replace(/\\'/g, "'").replace(/\\"/g, '"');
    const a = (m[3] ?? m[4]).replace(/\\'/g, "'").replace(/\\"/g, '"');
    // which slug is this inside? nearest preceding slug:
    const before = text.slice(0, m.index);
    const slugs = [...before.matchAll(/slug:\s*'([^']+)'/g)];
    const slug = slugs.length ? slugs[slugs.length - 1][1] : '(landing)';
    // is it in an `answers:` array or a `faqs:` array?
    const lastAnswers = before.lastIndexOf('answers: [');
    const lastFaqs = before.lastIndexOf('faqs: [');
    const block = lastAnswers > lastFaqs ? 'answers' : 'faqs';
    entries.push({ file: f, slug, block, q, a, words: a.split(/\s+/).length });
  }
}

const answers = entries.filter((e) => e.block === 'answers');
const faqs = entries.filter((e) => e.block === 'faqs');

console.log(`Q&A entries: ${entries.length}  (answers: ${answers.length}, faqs: ${faqs.length})\n`);

// per-page counts
const byPage = new Map();
for (const e of entries) {
  if (!byPage.has(e.slug)) byPage.set(e.slug, { answers: 0, faqs: 0 });
  byPage.get(e.slug)[e.block]++;
}
console.log('Page                                  answers  faqs  total');
console.log('─'.repeat(64));
for (const [slug, c] of [...byPage].sort()) {
  console.log(
    slug.padEnd(38) + String(c.answers).padStart(7) + String(c.faqs).padStart(6) + String(c.answers + c.faqs).padStart(7)
  );
}

const problems = [];

// 1. duplicate questions anywhere
const norm = (q) => q.toLowerCase().replace(/[^a-z0-9 ]/g, '').replace(/\s+/g, ' ').trim();
const seen = new Map();
for (const e of entries) {
  const k = norm(e.q);
  if (seen.has(k)) {
    const p = seen.get(k);
    problems.push(`DUPLICATE QUESTION: "${e.q}"\n     ${p.slug} [${p.block}]  vs  ${e.slug} [${e.block}]`);
  } else seen.set(k, e);
}

// 2. snippet length on the answers block (40-60 target, flag outside 25-75)
for (const e of answers) {
  if (e.words > 75) problems.push(`LONG ANSWER (${e.words}w) [${e.slug}] "${e.q}"`);
  if (e.words < 25) problems.push(`SHORT ANSWER (${e.words}w) [${e.slug}] "${e.q}"`);
}

// 3. near-duplicate questions (token overlap) across different pages
const toks = (q) => new Set(norm(q).split(' ').filter((w) => w.length > 3));
// A question scoped to a jurisdiction or identifier is not competing with the
// same-shaped question scoped to a different one: "reverse charge on a GST
// invoice" and "reverse charge on a UAE invoice" target different searches and
// have genuinely different answers. Only flag them when the scope matches.
const SCOPES = ['india','gst','gstin','uae','emirates','trn','philippines','bir','nigeria','firs','naira','eu','vies','intracommunity','european','freelance','photographer','tutor','consultant','developer','designer','trades','contractor'];
const scopeOf = (q) => SCOPES.filter((s) => norm(q).includes(s)).join('|');
for (let i = 0; i < entries.length; i++) {
  for (let j = i + 1; j < entries.length; j++) {
    if (entries[i].slug === entries[j].slug) continue;
    const a = toks(entries[i].q), b = toks(entries[j].q);
    if (a.size < 3 || b.size < 3) continue;
    let inter = 0;
    for (const x of a) if (b.has(x)) inter++;
    const jac = inter / (a.size + b.size - inter);
    if (jac >= 0.8 && scopeOf(entries[i].q) === scopeOf(entries[j].q)) {
      problems.push(
        `NEAR-DUPLICATE (${(jac * 100).toFixed(0)}%): "${entries[i].q}" [${entries[i].slug}]\n     vs "${entries[j].q}" [${entries[j].slug}]`
      );
    }
  }
}

const wc = answers.map((e) => e.words);
if (wc.length) {
  const avg = (wc.reduce((s, n) => s + n, 0) / wc.length).toFixed(1);
  const inRange = wc.filter((n) => n >= 35 && n <= 65).length;
  console.log(`\nAnswer length: avg ${avg}w, ${inRange}/${wc.length} in the 35-65w snippet band`);
}

console.log(`\n===== ${problems.length} PROBLEMS =====`);
for (const p of problems) console.log('  ' + p);
