import { useEffect } from 'react';

interface SEOOptions {
  title: string;
  description: string;
  canonical?: string;
  noindex?: boolean;
}

const BASE_URL = 'https://quill-bill.com';
const SUFFIX = ' — QuillBill';

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

export function useSEO({ title, description, canonical, noindex }: SEOOptions) {
  useEffect(() => {
    const fullTitle = title.includes('QuillBill') ? title : title + SUFFIX;
    document.title = fullTitle;

    setMetaTag('description', description);
    setMetaTag('robots', noindex ? 'noindex, nofollow' : 'index, follow');

    // Open Graph
    setMetaTag('og:title', fullTitle, 'property');
    setMetaTag('og:description', description, 'property');

    // Twitter
    setMetaTag('twitter:title', fullTitle);
    setMetaTag('twitter:description', description);

    // Canonical
    const canonicalUrl = canonical ? `${BASE_URL}${canonical}` : null;
    setCanonical(canonicalUrl);
    if (canonicalUrl) {
      setMetaTag('og:url', canonicalUrl, 'property');
    }
  }, [title, description, canonical, noindex]);
}
