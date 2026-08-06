/**
 * GA4, loaded only when a measurement ID is configured.
 *
 * The ID comes from VITE_GA_MEASUREMENT_ID rather than being hardcoded, so it
 * can be set in the Vercel project environment without a code change. With no
 * ID set — local dev, previews, or before the property exists — every function
 * here is a no-op and no third-party script is requested at all.
 */

const MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID as string | undefined;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export const analyticsEnabled = Boolean(MEASUREMENT_ID);

let loaded = false;

/** Injects gtag.js once. Safe to call repeatedly. */
export function initAnalytics() {
  if (!MEASUREMENT_ID || loaded || typeof window === 'undefined') return;
  loaded = true;

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  const gtag: (...args: unknown[]) => void = function gtag(...args) {
    window.dataLayer!.push(args);
  };
  window.gtag = gtag;

  gtag('js', new Date());
  gtag('config', MEASUREMENT_ID, {
    // The router sends page_view manually on navigation, so the automatic one
    // would double-count the first load.
    send_page_view: false,
    // Nothing typed into the editor is ever sent. Only the path is reported,
    // and /edit and /view paths carry document data, so they are excluded in
    // trackPageView below.
    anonymize_ip: true,
  });
}

/** Document payloads live in the path on these routes — never report them. */
function isPrivatePath(path: string) {
  return path.startsWith('/edit/') || path.startsWith('/view/');
}

export function trackPageView(path: string, title?: string) {
  if (!MEASUREMENT_ID || typeof window === 'undefined' || !window.gtag) return;
  if (isPrivatePath(path)) return;

  window.gtag('event', 'page_view', {
    page_path: path,
    page_title: title ?? document.title,
    page_location: `${window.location.origin}${path}`,
  });
}

export function trackEvent(name: string, params?: Record<string, unknown>) {
  if (!MEASUREMENT_ID || typeof window === 'undefined' || !window.gtag) return;
  window.gtag('event', name, params ?? {});
}
