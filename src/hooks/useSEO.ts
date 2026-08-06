import { useEffect } from 'react';
import { absoluteUrl, OG_IMAGE } from '../lib/site';

export interface SEOOptions {
  title: string;
  description: string;
  canonical?: string;
  noindex?: boolean;
  /** JSON-LD graph nodes to publish for this page. */
  jsonLd?: object[];
}

const SUFFIX = ' | QuillBill';

/** Google truncates titles around this width, so never exceed it. */
const MAX_TITLE = 60;

/** Marks nodes this hook owns so it can clean up without touching static tags. */
const MANAGED = 'data-seo-managed';

function setMetaTag(property: string, content: string, attr: 'name' | 'property' = 'name') {
  const selector = `meta[${attr}="${property}"]`;
  let el = document.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, property);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setCanonical(href: string | null) {
  let el = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (href) {
    if (!el) {
      el = document.createElement('link');
      el.setAttribute('rel', 'canonical');
      document.head.appendChild(el);
    }
    el.setAttribute('href', href);
  } else if (el) {
    el.remove();
  }
}

/**
 * Appends the brand suffix only when it still fits inside the SERP title
 * budget. Blindly appending it pushed several titles past 70 characters, so
 * Google truncated the part that actually carried the keyword.
 */
export function fullTitleFor(title: string) {
  if (title.includes('QuillBill')) return title;
  return title.length + SUFFIX.length <= MAX_TITLE ? title + SUFFIX : title;
}

export function useSEO({ title, description, canonical, noindex, jsonLd }: SEOOptions) {
  useEffect(() => {
    const fullTitle = fullTitleFor(title);
    document.title = fullTitle;

    setMetaTag('description', description);
    setMetaTag('robots', noindex ? 'noindex, nofollow' : 'index, follow');

    // Open Graph
    setMetaTag('og:title', fullTitle, 'property');
    setMetaTag('og:description', description, 'property');
    setMetaTag('og:image', OG_IMAGE, 'property');
    setMetaTag('og:image:width', '1200', 'property');
    setMetaTag('og:image:height', '630', 'property');

    // Twitter
    setMetaTag('twitter:card', 'summary_large_image');
    setMetaTag('twitter:title', fullTitle);
    setMetaTag('twitter:description', description);
    setMetaTag('twitter:image', OG_IMAGE);

    // Canonical
    const canonicalUrl = canonical ? absoluteUrl(canonical) : null;
    setCanonical(canonicalUrl);
    if (canonicalUrl) {
      setMetaTag('og:url', canonicalUrl, 'property');
    }
  }, [title, description, canonical, noindex]);

  useEffect(() => {
    if (!jsonLd || jsonLd.length === 0) return;

    // Remove any structured data the prerenderer or a previous route left behind
    // so client-side navigation never stacks duplicate schema blocks.
    const stale = document.querySelectorAll(
      `script[type="application/ld+json"][${MANAGED}], script[type="application/ld+json"][data-prerendered]`
    );
    stale.forEach((n) => n.remove());

    const added = jsonLd.map((node) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute(MANAGED, '');
      script.textContent = JSON.stringify(node);
      document.head.appendChild(script);
      return script;
    });

    return () => {
      added.forEach((s) => s.remove());
    };
  }, [jsonLd]);
}
