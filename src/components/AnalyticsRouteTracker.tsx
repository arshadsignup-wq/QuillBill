import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { trackPageView } from '../lib/analytics';

/**
 * Sends a page_view on every client-side navigation. Without this the SPA would
 * only ever report the first URL a visitor landed on, which makes every
 * landing-page and guide report useless.
 */
export default function AnalyticsRouteTracker() {
  const { pathname } = useLocation();
  // The tag in index.html already reported the landing URL, so counting the
  // first route here too would double every session's opening page_view.
  const isLandingRoute = useRef(true);

  useEffect(() => {
    if (isLandingRoute.current) {
      isLandingRoute.current = false;
      return;
    }

    // useSEO sets document.title in its own effect; defer a frame so the title
    // reported to GA matches the page the visitor actually navigated to.
    const id = requestAnimationFrame(() => trackPageView(pathname));
    return () => cancelAnimationFrame(id);
  }, [pathname]);

  return null;
}
