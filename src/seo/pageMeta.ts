import type { SEOOptions } from '../hooks/useSEO';

/**
 * Title, description and canonical for the fixed pages.
 *
 * These used to live only in routeManifest.ts, and every static page imported
 * `routeFor` from there to read its own metadata. That single import pulled the
 * manifest — and through it all 45 guide configs, ~600KB of prose — into the
 * main bundle. Splitting the plain metadata out breaks that chain: the manifest
 * still owns JSON-LD, sitemap priorities and the guide routes, but it is now
 * only reachable from the build-time prerender entry.
 *
 * routeManifest builds its entries for these paths from this map, so there is
 * still exactly one source of truth per page.
 */
export const pageMeta = {
  '/': {
    canonical: '/',
    title: 'Free Invoice & Quotation Generator',
    description:
      'Create professional invoices, quotations and proposals free. No sign-up, no watermarks, no login. 15 templates, instant PDF export, fully private.',
  },
  '/faq': {
    canonical: '/faq',
    title: 'Frequently Asked Questions',
    description:
      'Common questions about QuillBill, the free invoice generator with no login, no watermarks, and complete data privacy.',
  },
  '/about': {
    canonical: '/about',
    title: 'About',
    description:
      'Learn about QuillBill, a free, open-source, privacy-first invoice and quotation generator with no sign-up required.',
  },
  '/contact': {
    canonical: '/contact',
    title: 'Contact',
    description: 'Get in touch with QuillBill. Report bugs, request features, or send us a message.',
  },
  '/privacy': {
    canonical: '/privacy',
    title: 'Privacy Policy',
    description:
      'QuillBill privacy policy. Your document data never leaves your browser. What we do and do not collect, explained plainly.',
  },
  '/terms': {
    canonical: '/terms',
    title: 'Terms of Service',
    description:
      'QuillBill terms of service. Free to use, no warranty, your documents belong to you.',
  },
  '/disclaimer': {
    canonical: '/disclaimer',
    title: 'Disclaimer',
    description:
      'QuillBill disclaimer. No warranties, use at your own risk. Read the full legal disclaimer for the free invoice generator.',
  },
  '/dmca': {
    canonical: '/dmca',
    title: 'DMCA Policy',
    description:
      'QuillBill DMCA policy. How to report copyright infringement and submit a takedown notice to us.',
  },
} as const satisfies Record<string, SEOOptions & { canonical: string }>;

export type StaticPagePath = keyof typeof pageMeta;

export function pageMetaFor(path: StaticPagePath) {
  return pageMeta[path];
}
