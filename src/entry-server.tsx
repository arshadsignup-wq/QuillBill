import { renderToStaticMarkup } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import { ToastProvider } from './components/ui/ToastProvider';
import AppRoutes from './routes';
import EditorPage from './pages/EditorPage';
import ViewPage from './pages/ViewPage';

export { routes, sitemapRoutes } from './seo/routeManifest';
export { SITE_ORIGIN, absoluteUrl, OG_IMAGE } from './lib/site';
export { fullTitleFor } from './hooks/useSEO';

/**
 * Renders a route to static HTML for the build-time prerenderer.
 *
 * Only the markup is produced here — head tags come from the route manifest so
 * the prerenderer never has to run effects to discover them.
 */
export function renderRoute(url: string): string {
  return renderToStaticMarkup(
    <ToastProvider>
      <StaticRouter location={url}>
        <AppRoutes editor={EditorPage} viewer={ViewPage} />
      </StaticRouter>
    </ToastProvider>
  );
}
