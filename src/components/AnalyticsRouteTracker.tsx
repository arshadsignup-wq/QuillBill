import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { initAnalytics, trackPageView } from '../lib/analytics';

/**
 * Sends a page_view on every client-side navigation. Without this the SPA would
 * only ever report the first URL a visitor landed on, which makes every
 * landing-page and guide report useless.
 */
export default function AnalyticsRouteTracker() {
  const { pathname } = useLocation();

  useEffect(() => {
    initAnalytics();
  }, []);

  useEffect(() => {
    // useSEO sets document.title in its own effect; defer a frame so the title
    // reported to GA matches the page the visitor actually landed on.
    const id = requestAnimationFrame(() => trackPageView(pathname));
    return () => cancelAnimationFrame(id);
  }, [pathname]);

  return null;
}
