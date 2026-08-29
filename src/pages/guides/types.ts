import type { FAQItem } from '../landing/landingData';
import type { CalculatorKey } from './calculators';

export interface GuideSection {
  heading: string;
  /** Paragraphs. Inline links may be written as [label](/internal or https://…). */
  body: string[];
  /** Optional checklist rendered under the prose. Supports the same link markup. */
  list?: string[];
  /** Optional comparison table: [header row, ...body rows]. */
  table?: { head: string[]; rows: string[][] };
}

/**
 * A question people actually search, answered directly.
 *
 * Rendered as a real <h2> with the answer as visible body copy, deliberately
 * NOT inside the FAQ accordion. Google deprecated FAQ rich results on
 * 2026-05-07, so FAQPage markup no longer earns the dropdown snippets it used
 * to. People Also Ask, featured snippets and AI Overviews are still won the
 * old-fashioned way: a question-shaped heading with a self-contained answer
 * underneath it.
 *
 * Keep `answer` in the 40–60 word range. That is the length Google actually
 * lifts for a paragraph snippet; longer answers get truncated mid-sentence.
 */
export interface GuideAnswer {
  question: string;
  answer: string;
  /** Optional supporting detail, shown under the snippet-length answer. */
  detail?: string;
}

/** An outbound citation, listed under the article for E-E-A-T. */
export interface GuideSource {
  label: string;
  /** Who published it — shown so the citation is checkable at a glance. */
  publisher: string;
  url: string;
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
  cluster:
    | 'Invoicing'
    | 'Getting paid'
    | 'Quotations'
    | 'Proposals'
    | 'Tools'
    | 'Writing'
    | 'By country'
    | 'By profession'
    | 'Calculators';
  /** One-line summary used on the /guides hub. */
  summary: string;
  /**
   * Renders an interactive calculator directly under the intro. The page is
   * still a guide — the tool answers the query on arrival and the prose below
   * explains the arithmetic instead of hiding it.
   */
  calculator?: CalculatorKey;
  /** Scannable answer box directly under the intro. */
  keyTakeaways?: string[];
  /** When set, a HowTo schema is emitted from these steps. */
  howTo?: { name: string; description: string; steps: { title: string; description: string }[] };
  sections: GuideSection[];
  /**
   * Directly answered search questions, rendered as question-shaped headings
   * after the main sections. Heading text should match how people actually
   * type the query, not how an editor would phrase it.
   */
  answers?: GuideAnswer[];
  /** Heading for the answers block. Defaults to a generic one. */
  answersHeading?: string;
  /** Primary sources cited by the article, rendered under the FAQs. */
  sources?: GuideSource[];
  faqs: FAQItem[];
  ctaHeading: string;
  ctaText: string;
  ctaLink: string;
  crossLinks: { title: string; description: string; href: string }[];
}
