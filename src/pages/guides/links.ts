/**
 * Link helpers for guide copy. Kept out of the component file so the parser
 * can be imported by non-component modules (and so Fast Refresh keeps working).
 */

/**
 * Hosts we are willing to pass link equity to. These are primary sources —
 * tax authorities, regulators, statute, standards bodies and style guides —
 * where an outbound link is a genuine citation and part of the page's E-E-A-T
 * story.
 *
 * Everything else off-site gets rel="nofollow". That is deliberate: we cite
 * competitors by name for accuracy, but there is no reason to hand ranking
 * signals to a page that is already outranking us.
 */
const FOLLOWED_HOSTS = [
  'irs.gov',
  'sba.gov',
  'ftc.gov',
  'sec.gov',
  'fca.org.uk',
  'gov.uk',
  'legislation.gov.uk',
  'europa.eu',
  'canada.ca',
  'ato.gov.au',
  'business.gov.au',
  'gst.gov.in',
  'incometax.gov.in',
  'iso.org',
  'schema.org',
  'w3.org',
  'developer.mozilla.org',
  'purdue.edu',
  'merriam-webster.com',
  'chicagomanualofstyle.org',
  'wikipedia.org',
  'wikiquote.org',
  'quoteinvestigator.com',
];

export function isFollowed(url: string): boolean {
  try {
    const host = new URL(url).hostname.replace(/^www\./, '');
    return FOLLOWED_HOSTS.some((h) => host === h || host.endsWith(`.${h}`));
  } catch {
    return false;
  }
}

/** rel value for an outbound link, by citation quality. */
export function relFor(url: string): string {
  return isFollowed(url) ? 'noopener noreferrer' : 'noopener noreferrer nofollow';
}

/**
 * [label](href) — non-greedy label, href stops at the first closing paren.
 * Built fresh per call rather than shared at module scope: a /g regex carries
 * lastIndex between calls, so a shared instance would skip matches whenever
 * two components parsed text in the same tick.
 */
const linkPattern = () => /\[([^\]]+)\]\(([^)]+)\)/g;

export type Segment =
  | { kind: 'text'; value: string }
  | { kind: 'link'; label: string; href: string; internal: boolean };

/** Splits guide copy into plain text and link segments. */
export function parseLinks(text: string): Segment[] {
  const re = linkPattern();
  const out: Segment[] = [];
  let cursor = 0;
  let match: RegExpExecArray | null;

  while ((match = re.exec(text)) !== null) {
    const [full, label, href] = match;
    if (match.index > cursor) out.push({ kind: 'text', value: text.slice(cursor, match.index) });
    out.push({ kind: 'link', label, href, internal: href.startsWith('/') });
    cursor = match.index + full.length;
  }
  if (cursor < text.length) out.push({ kind: 'text', value: text.slice(cursor) });
  return out;
}

/**
 * Strips link markup back to plain text. JSON-LD and meta descriptions must
 * carry the prose, not the brackets.
 */
export function plainText(text: string): string {
  return text.replace(linkPattern(), '$1');
}
