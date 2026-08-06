import { SITE_ORIGIN, SITE_NAME, absoluteUrl, OG_IMAGE } from '../lib/site';
import type { FAQItem } from '../pages/landing/landingData';

/** Stable @id for the publishing organization, referenced from other nodes. */
export const ORG_ID = `${SITE_ORIGIN}/#organization`;
export const SITE_ID = `${SITE_ORIGIN}/#website`;

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': ORG_ID,
    name: SITE_NAME,
    url: SITE_ORIGIN,
    logo: {
      '@type': 'ImageObject',
      url: `${SITE_ORIGIN}/apple-touch-icon.png`,
    },
    description:
      'QuillBill is a free, privacy-first invoice, quotation and proposal generator that runs entirely in your browser.',
  };
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': SITE_ID,
    name: SITE_NAME,
    url: SITE_ORIGIN,
    publisher: { '@id': ORG_ID },
  };
}

export function webApplicationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: SITE_NAME,
    url: SITE_ORIGIN,
    description:
      'Free, no-login, no-watermark invoice, quotation and proposal generator with PDF export and shareable links.',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Any',
    browserRequirements: 'Requires JavaScript. Works in any modern browser.',
    image: OG_IMAGE,
    publisher: { '@id': ORG_ID },
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    featureList: [
      'Invoice generation',
      'Quotation generation',
      'Proposal creation',
      '15 professional templates',
      'PDF export',
      'Shareable links',
      'No sign-up required',
      'Privacy-first, no data collection',
    ],
  };
}

export function faqSchema(faqs: FAQItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export interface Crumb {
  name: string;
  path: string;
}

export function breadcrumbSchema(crumbs: Crumb[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: absoluteUrl(c.path),
    })),
  };
}

export interface HowToStep {
  title: string;
  description: string;
}

export function howToSchema(name: string, description: string, steps: HowToStep[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name,
    description,
    totalTime: 'PT3M',
    estimatedCost: { '@type': 'MonetaryAmount', currency: 'USD', value: '0' },
    step: steps.map((s, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: s.title,
      text: s.description,
    })),
  };
}

export interface ArticleMeta {
  headline: string;
  description: string;
  path: string;
  published: string;
  updated: string;
  section: string;
}

/**
 * Article schema for the guides. datePublished/dateModified come from explicit
 * fields on each guide rather than the build clock — a dateModified that bumps
 * on every deploy is both untrue and a freshness signal Google discounts.
 */
export function articleSchema(meta: ArticleMeta) {
  const url = absoluteUrl(meta.path);
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${url}#article`,
    headline: meta.headline,
    description: meta.description,
    articleSection: meta.section,
    inLanguage: 'en',
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    url,
    image: OG_IMAGE,
    datePublished: meta.published,
    dateModified: meta.updated,
    author: { '@id': ORG_ID },
    publisher: { '@id': ORG_ID },
  };
}

/** ItemList schema for template gallery pages. */
export function itemListSchema(name: string, items: { name: string; description: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name,
    numberOfItems: items.length,
    itemListElement: items.map((t, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: t.name,
      description: t.description,
    })),
  };
}
