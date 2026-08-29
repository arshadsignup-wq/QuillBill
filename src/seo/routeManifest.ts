import type { SEOOptions } from '../hooks/useSEO';
import { pageMeta } from './pageMeta';
import { invoiceConfig, quotationConfig, proposalConfig } from '../pages/landing/landingData';
import {
  invoiceTemplatesConfig,
  quotationTemplatesConfig,
  proposalTemplatesConfig,
} from '../pages/templates/templateData';
import { guideConfigs } from '../pages/guides/guideData';
import { guidesHubSeo } from '../pages/guides/hubMeta';
import { siteFaqs } from '../pages/faqData';
import { landingJsonLd, galleryJsonLd, guideJsonLd, guidesHubJsonLd } from './pageSchemas';
import {
  organizationSchema,
  websiteSchema,
  webApplicationSchema,
  faqSchema,
  breadcrumbSchema,
} from './schema';

export interface RouteEntry extends SEOOptions {
  path: string;
  /** Sitemap hints. Omit `sitemap: false` routes from sitemap.xml. */
  sitemap?: boolean;
  changefreq?: string;
  priority?: number;
  /**
   * ISO date this page's content last actually changed.
   *
   * Every URL used to carry the build date, so a deploy that touched one guide
   * told Google all 60 pages had changed. A lastmod that moves without the
   * content moving is a signal Google learns to ignore, which costs you the
   * recrawl you wanted on the page that did change. Guides take their own
   * `updated` field; everything else is set here and bumped when edited.
   */
  lastmod?: string;
}

/**
 * Last substantive edit to the pages that are not guides. Bump the entry when
 * you change that page's copy — not when you deploy.
 */
const PAGE_UPDATED = {
  home: '2026-08-30',
  landing: '2026-08-30',
  templates: '2026-08-30',
  guidesHub: '2026-08-30',
  legal: '2026-08-06',
  about: '2026-08-30',
} as const;

/**
 * Every indexable route, with the exact metadata that must appear in the
 * served HTML. The prerenderer writes these tags into each route's static
 * file and the sitemap generator reads the same list, so the two can't drift.
 */
export const routes: RouteEntry[] = [
  {
    path: '/',
    ...pageMeta['/'],
    jsonLd: [organizationSchema(), websiteSchema(), webApplicationSchema()],
    changefreq: 'weekly',
    priority: 1.0,
    lastmod: PAGE_UPDATED.home,
  },

  // Primary commercial landing pages
  {
    path: '/invoice-generator',
    ...invoiceConfig.seo,
    jsonLd: landingJsonLd(invoiceConfig),
    changefreq: 'weekly',
    priority: 0.9,
    lastmod: PAGE_UPDATED.landing,
  },
  {
    path: '/quotation-generator',
    ...quotationConfig.seo,
    jsonLd: landingJsonLd(quotationConfig),
    changefreq: 'weekly',
    priority: 0.9,
    lastmod: PAGE_UPDATED.landing,
  },
  {
    path: '/proposal-generator',
    ...proposalConfig.seo,
    jsonLd: landingJsonLd(proposalConfig),
    changefreq: 'weekly',
    priority: 0.9,
    lastmod: PAGE_UPDATED.landing,
  },

  // Template galleries
  {
    path: '/invoice-templates',
    ...invoiceTemplatesConfig.seo,
    jsonLd: galleryJsonLd(invoiceTemplatesConfig),
    changefreq: 'weekly',
    priority: 0.9,
    lastmod: PAGE_UPDATED.templates,
  },
  {
    path: '/quotation-templates',
    ...quotationTemplatesConfig.seo,
    jsonLd: galleryJsonLd(quotationTemplatesConfig),
    changefreq: 'weekly',
    priority: 0.8,
    lastmod: PAGE_UPDATED.templates,
  },
  {
    path: '/proposal-templates',
    ...proposalTemplatesConfig.seo,
    jsonLd: galleryJsonLd(proposalTemplatesConfig),
    changefreq: 'weekly',
    priority: 0.8,
    lastmod: PAGE_UPDATED.templates,
  },

  // Guides hub + every guide, generated from the same list the hub renders
  {
    path: '/guides',
    ...guidesHubSeo,
    jsonLd: guidesHubJsonLd(),
    changefreq: 'weekly',
    priority: 0.8,
    lastmod: PAGE_UPDATED.guidesHub,
  },
  ...guideConfigs.map((g) => ({
    path: `/${g.slug}`,
    ...g.seo,
    jsonLd: guideJsonLd(g),
    changefreq: 'monthly',
    priority: 0.7,
    lastmod: g.updated,
  })),

  // Supporting / trust pages
  {
    path: '/faq',
    ...pageMeta['/faq'],
    jsonLd: [
      breadcrumbSchema([
        { name: 'Home', path: '/' },
        { name: 'FAQ', path: '/faq' },
      ]),
      faqSchema(siteFaqs),
    ],
    changefreq: 'monthly',
    priority: 0.7,
    lastmod: PAGE_UPDATED.about,
  },
  {
    path: '/about',
    ...pageMeta['/about'],
    jsonLd: [organizationSchema()],
    changefreq: 'monthly',
    priority: 0.6,
    lastmod: PAGE_UPDATED.about,
  },
  {
    path: '/contact',
    ...pageMeta['/contact'],
    changefreq: 'monthly',
    priority: 0.5,
    lastmod: PAGE_UPDATED.about,
  },
  {
    path: '/privacy',
    ...pageMeta['/privacy'],
    changefreq: 'yearly',
    priority: 0.3,
    lastmod: PAGE_UPDATED.legal,
  },
  {
    path: '/terms',
    ...pageMeta['/terms'],
    changefreq: 'yearly',
    priority: 0.3,
    lastmod: PAGE_UPDATED.legal,
  },
  {
    path: '/disclaimer',
    ...pageMeta['/disclaimer'],
    changefreq: 'yearly',
    priority: 0.3,
    lastmod: PAGE_UPDATED.legal,
  },
  {
    path: '/dmca',
    ...pageMeta['/dmca'],
    changefreq: 'yearly',
    priority: 0.3,
    lastmod: PAGE_UPDATED.legal,
  },

  // Shells that /view/:payload and /edit/:payload rewrite onto. Without them
  // those URLs matched no file, fell through to 404.html and were served with a
  // 404 status, so every shared link unfurled as "Page Not Found" even though
  // React recovered and drew the document. Both are noindex and out of the
  // sitemap: the payload in the path is the user's document.
  {
    path: '/view',
    title: 'Shared Document',
    description:
      'A QuillBill invoice, quotation or proposal shared by link. The document is encoded in the URL and never touches a server.',
    noindex: true,
    sitemap: false,
  },
  {
    path: '/edit',
    title: 'Edit Shared Document',
    description:
      'Open a shared QuillBill document for editing. The document is encoded in the URL and never touches a server.',
    noindex: true,
    sitemap: false,
  },

  // Rendered as a static file so the SPA fallback can serve a real 404 body,
  // but deliberately kept out of the sitemap and marked noindex.
  {
    path: '/404',
    title: 'Page Not Found',
    description:
      'The page you are looking for does not exist or the link may have expired. Return to QuillBill to create a free invoice, quotation or proposal.',
    noindex: true,
    sitemap: false,
  },
];

export function routeFor(path: string): RouteEntry | undefined {
  return routes.find((r) => r.path === path);
}

/** Indexable routes only, for sitemap.xml. */
export const sitemapRoutes = routes.filter((r) => r.sitemap !== false && !r.noindex);
