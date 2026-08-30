import {
  faqSchema,
  breadcrumbSchema,
  howToSchema,
  itemListSchema,
  webApplicationSchema,
  articleSchema,
  personSchema,
} from './schema';
import { absoluteUrl } from '../lib/site';
import { guideIndex } from '../pages/guides/guideIndex';
import type { LandingPageConfig } from '../pages/landing/landingData';
import type { TemplateGalleryConfig } from '../pages/templates/templateData';
import type { GuideConfig } from '../pages/guides/types';
import { modeSpec } from '../constants/documentModes';

/**
 * JSON-LD builders live here rather than beside their components so the route
 * manifest can import them without pulling a React component into the
 * prerenderer's module graph.
 */

const modeNoun = (mode: LandingPageConfig['mode']) => modeSpec(mode).noun;

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
    // The article's author is referenced by @id, so the Person node has to be
    // in the graph on the same page or the reference dangles.
    personSchema(),
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
      numberOfItems: guideIndex.length,
      itemListElement: guideIndex.map((g, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: g.title,
        url: absoluteUrl(`/${g.slug}`),
      })),
    },
  ];
}
