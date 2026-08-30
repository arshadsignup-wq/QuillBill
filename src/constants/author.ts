import { SITE_ORIGIN } from '../lib/site';

/**
 * Who is behind the site.
 *
 * The guides were published under an anonymous Organization author, which is
 * the weakest position available for pages describing tax rules across nine
 * jurisdictions — Google leans hard on demonstrable expertise for anything
 * money-adjacent, and an unnamed entity has none to demonstrate.
 *
 * `bio` deliberately claims no professional credential. Claiming one that
 * cannot be substantiated is worse than claiming none. What it does instead is
 * state how the guides are sourced, which is true, checkable against the
 * citations on every country page, and a stronger signal than a vague assertion
 * of expertise would be.
 */
export const AUTHOR = {
  name: 'Arshad Hossain',
  url: `${SITE_ORIGIN}/about`,
  id: `${SITE_ORIGIN}/#author`,
  role: 'Builder and maintainer',
  bio: 'QuillBill is built and maintained by one person. The guides are researched from primary sources — tax authority guidance and published regulations — and every rule they state is cited so you can check it yourself.',
  disclaimer:
    'They are not tax or legal advice. Where a rule is jurisdiction-specific, the guide points you at the authority rather than paraphrasing it and hoping.',
} as const;

export function personSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': AUTHOR.id,
    name: AUTHOR.name,
    url: AUTHOR.url,
  };
}
