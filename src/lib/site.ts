/**
 * Single source of truth for the site's canonical origin.
 *
 * IMPORTANT: this must match the host the server actually serves on.
 * quill-bill.com issues a redirect to www.quill-bill.com, so every canonical,
 * og:url, sitemap entry and JSON-LD URL must use the www host. Pointing a
 * canonical at a URL that redirects makes Google discard the canonical signal.
 */
export const SITE_ORIGIN = 'https://www.quill-bill.com';

export const SITE_NAME = 'QuillBill';

/** Absolute URL for a site-relative path. */
export function absoluteUrl(path: string): string {
  if (!path.startsWith('/')) path = `/${path}`;
  // Keep the root as "/" but strip trailing slashes elsewhere so canonicals
  // never collide with their own trailing-slash variant.
  const clean = path === '/' ? '/' : path.replace(/\/+$/, '');
  return `${SITE_ORIGIN}${clean}`;
}

export const OG_IMAGE = `${SITE_ORIGIN}/og-image.png`;
