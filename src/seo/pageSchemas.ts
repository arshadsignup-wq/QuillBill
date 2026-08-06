import {
  faqSchema,
  breadcrumbSchema,
  howToSchema,
  itemListSchema,
  webApplicationSchema,
  articleSchema,
} from './schema';
import { absoluteUrl } from '../lib/site';
import { guideConfigs } from '../pages/guides/guideData';
import type { LandingPageConfig } from '../pages/landing/landingData';
import type { TemplateGalleryConfig } from '../pages/templates/templateData';
import type { GuideConfig } from '../pages/guides/types';

/**
 * JSON-LD builders live here rather than beside their components so the route
 * manifest can import them without pulling a React component into the
 * prerenderer's module graph.
 */

const modeNoun = (mode: LandingPageConfig['mode']) =>
  mode === 'invoice' ? 'invoice' : mode === 'quote' ? 'quotation' : 'proposal';

export function landingJsonLd(config: LandingPageConfig) {
  return [
    breadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: config.hero.h1, path: config.seo.canonical },
    ]),
    webApplicationSchema(),
    howToSchema(
      `How to create a ${modeNoun(config.mode)} with QuillBill`,
      config.hero.subtitle,
      config.steps
    ),
    faqSchema(config.faqs),
  ];
}

export function galleryJsonLd(config: TemplateGalleryConfig) {
  return [
    breadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: config.h1, path: config.seo.canonical },
    ]),
    itemListSchema(
      config.h1,
      config.templates.map((t) => ({
        name: `${t.label} ${config.docLabel} template`,
        description: t.style,
      }))
    ),
    faqSchema(config.faqs),
  ];
}

export function guideJsonLd(config: GuideConfig) {
  const nodes: object[] = [
    breadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'Guides', path: '/guides' },
      { name: config.h1, path: config.seo.canonical },
    ]),
    articleSchema({
      headline: config.h1,
      description: config.seo.description,
      path: config.seo.canonical,
      published: config.published,
      updated: config.updated,
      section: config.cluster,
    }),
  ];
  if (config.howTo) {
    nodes.push(howToSchema(config.howTo.name, config.howTo.description, config.howTo.steps));
  }
  nodes.push(faqSchema(config.faqs));
  return nodes;
}

/** Hub page: breadcrumb plus an ItemList of every guide, for the cluster signal. */
export function guidesHubJsonLd() {
  return [
    breadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'Guides', path: '/guides' },
    ]),
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Invoicing and quotation guides',
      numberOfItems: guideConfigs.length,
      itemListElement: guideConfigs.map((g, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: g.h1,
        url: absoluteUrl(g.seo.canonical),
      })),
    },
  ];
}
