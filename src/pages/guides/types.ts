import type { FAQItem } from '../landing/landingData';

export interface GuideSection {
  heading: string;
  body: string[];
  /** Optional checklist rendered under the prose. */
  list?: string[];
  /** Optional comparison table: [header row, ...body rows]. */
  table?: { head: string[]; rows: string[][] };
}

export interface GuideConfig {
  slug: string;
  seo: { title: string; description: string; canonical: string };
  h1: string;
  intro: string;
  /**
   * Explicit dates rather than build time — a dateModified that bumps on every
   * deploy is a freshness signal Google discounts, and it's simply untrue.
   */
  published: string;
  updated: string;
  /** Short cluster label shown on the hub and in the article eyebrow. */
  cluster: 'Invoicing' | 'Getting paid' | 'Quotations' | 'Proposals';
  /** One-line summary used on the /guides hub. */
  summary: string;
  /** Scannable answer box directly under the intro. */
  keyTakeaways?: string[];
  /** When set, a HowTo schema is emitted from these steps. */
  howTo?: { name: string; description: string; steps: { title: string; description: string }[] };
  sections: GuideSection[];
  faqs: FAQItem[];
  ctaHeading: string;
  ctaText: string;
  ctaLink: string;
  crossLinks: { title: string; description: string; href: string }[];
}
