/**
 * GA4 helpers.
 *
 * The tag itself is loaded from index.html, which means it is baked into the
 * static HTML of every prerendered route and fires before React mounts. This
 * module only layers the SPA-navigation page_views and custom events on top.
 * If the tag never loaded — blocked by an extension, or a non-production host —
 * window.gtag is absent and every function here is a no-op.
 */

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export const MEASUREMENT_ID = 'G-YHPYZQ885T';

/** Document payloads live in the path on these routes — never report them. */
function isPrivatePath(path: string) {
  return path.startsWith('/edit/') || path.startsWith('/view/');
}

export function trackPageView(path: string, title?: string) {
  if (typeof window === 'undefined' || !window.gtag) return;
  if (isPrivatePath(path)) return;

  window.gtag('event', 'page_view', {
    page_path: path,
    page_title: title ?? document.title,
    page_location: `${window.location.origin}${path}`,
  });
}

export function trackEvent(name: string, params?: Record<string, unknown>) {
  if (typeof window === 'undefined' || !window.gtag) return;
  window.gtag('event', name, params ?? {});
}
