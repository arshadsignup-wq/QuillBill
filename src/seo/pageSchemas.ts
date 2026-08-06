import { faqSchema, breadcrumbSchema, howToSchema, itemListSchema, webApplicationSchema } from './schema';
import type { LandingPageConfig } from '../pages/landing/landingData';
import type { TemplateGalleryConfig } from '../pages/templates/templateData';
import type { GuideConfig } from '../pages/guides/guideData';

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
      { name: config.h1, path: config.seo.canonical },
    ]),
  ];
  if (config.howTo) {
    nodes.push(howToSchema(config.howTo.name, config.howTo.description, config.howTo.steps));
  }
  nodes.push(faqSchema(config.faqs));
  return nodes;
}
