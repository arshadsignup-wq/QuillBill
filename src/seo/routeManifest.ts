import type { SEOOptions } from '../hooks/useSEO';
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
}

/**
 * Every indexable route, with the exact metadata that must appear in the
 * served HTML. The prerenderer writes these tags into each route's static
 * file and the sitemap generator reads the same list, so the two can't drift.
 */
export const routes: RouteEntry[] = [
  {
    path: '/',
    canonical: '/',
    title: 'Free Invoice & Quotation Generator',
    description:
      'Create professional invoices, quotations and proposals free. No sign-up, no watermarks, no login. 15 templates, instant PDF export, fully private.',
    jsonLd: [organizationSchema(), websiteSchema(), webApplicationSchema()],
    changefreq: 'weekly',
    priority: 1.0,
  },

  // Primary commercial landing pages
  {
    path: '/invoice-generator',
    ...invoiceConfig.seo,
    jsonLd: landingJsonLd(invoiceConfig),
    changefreq: 'weekly',
    priority: 0.9,
  },
  {
    path: '/quotation-generator',
    ...quotationConfig.seo,
    jsonLd: landingJsonLd(quotationConfig),
    changefreq: 'weekly',
    priority: 0.9,
  },
  {
    path: '/proposal-generator',
    ...proposalConfig.seo,
    jsonLd: landingJsonLd(proposalConfig),
    changefreq: 'weekly',
    priority: 0.9,
  },

  // Template galleries
  {
    path: '/invoice-templates',
    ...invoiceTemplatesConfig.seo,
    jsonLd: galleryJsonLd(invoiceTemplatesConfig),
    changefreq: 'weekly',
    priority: 0.9,
  },
  {
    path: '/quotation-templates',
    ...quotationTemplatesConfig.seo,
    jsonLd: galleryJsonLd(quotationTemplatesConfig),
    changefreq: 'weekly',
    priority: 0.8,
  },
  {
    path: '/proposal-templates',
    ...proposalTemplatesConfig.seo,
    jsonLd: galleryJsonLd(proposalTemplatesConfig),
    changefreq: 'weekly',
    priority: 0.8,
  },

  // Guides hub + every guide, generated from the same list the hub renders
  {
    path: '/guides',
    ...guidesHubSeo,
    jsonLd: guidesHubJsonLd(),
    changefreq: 'weekly',
    priority: 0.8,
  },
  ...guideConfigs.map((g) => ({
    path: `/${g.slug}`,
    ...g.seo,
    jsonLd: guideJsonLd(g),
    changefreq: 'monthly',
    priority: 0.7,
  })),

  // Supporting / trust pages
  {
    path: '/faq',
    canonical: '/faq',
    title: 'Frequently Asked Questions',
    description:
      'Common questions about QuillBill, the free invoice generator with no login, no watermarks, and complete data privacy.',
    jsonLd: [
      breadcrumbSchema([
        { name: 'Home', path: '/' },
        { name: 'FAQ', path: '/faq' },
      ]),
      faqSchema(siteFaqs),
    ],
    changefreq: 'monthly',
    priority: 0.7,
  },
  {
    path: '/about',
    canonical: '/about',
    title: 'About',
    description:
      'Learn about QuillBill, a free, open-source, privacy-first invoice and quotation generator with no sign-up required.',
    jsonLd: [organizationSchema()],
    changefreq: 'monthly',
    priority: 0.6,
  },
  {
    path: '/contact',
    canonical: '/contact',
    title: 'Contact',
    description: 'Get in touch with QuillBill. Report bugs, request features, or send us a message.',
    changefreq: 'monthly',
    priority: 0.5,
  },
  {
    path: '/privacy',
    canonical: '/privacy',
    title: 'Privacy Policy',
    description:
      'QuillBill privacy policy. No data collection and no tracking. Everything runs entirely inside your own browser.',
    changefreq: 'yearly',
    priority: 0.3,
  },
  {
    path: '/terms',
    canonical: '/terms',
    title: 'Terms of Service',
    description:
      'QuillBill terms of service. Free to use, no warranty, your documents belong to you.',
    changefreq: 'yearly',
    priority: 0.3,
  },
  {
    path: '/disclaimer',
    canonical: '/disclaimer',
    title: 'Disclaimer',
    description:
      'QuillBill disclaimer. No warranties, use at your own risk. Read the full legal disclaimer for the free invoice generator.',
    changefreq: 'yearly',
    priority: 0.3,
  },
  {
    path: '/dmca',
    canonical: '/dmca',
    title: 'DMCA Policy',
    description:
      'QuillBill DMCA policy. How to report copyright infringement and submit a takedown notice to us.',
    changefreq: 'yearly',
    priority: 0.3,
  },

  // Rendered as a static file so the SPA fallback can serve a real 404 body,
  // but deliberately kept out of the sitemap and marked noindex.
  {
    path: '/404',
    title: 'Page Not Found',
    description: 'The page you are looking for does not exist.',
    noindex: true,
    sitemap: false,
  },
];

export function routeFor(path: string): RouteEntry | undefined {
  return routes.find((r) => r.path === path);
}

/** Indexable routes only, for sitemap.xml. */
export const sitemapRoutes = routes.filter((r) => r.sitemap !== false && !r.noindex);
