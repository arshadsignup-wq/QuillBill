import { renderToStaticMarkup } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import { ToastProvider } from './components/ui/ToastProvider';
import AppRoutes from './routes';
import EditorPage from './pages/EditorPage';
import ViewPage from './pages/ViewPage';
import { guideConfigs } from './pages/guides/guideData';
import GuidePage from './pages/guides/GuidePage';

export { routes, sitemapRoutes } from './seo/routeManifest';
export { SITE_ORIGIN, absoluteUrl, OG_IMAGE } from './lib/site';
export { fullTitleFor } from './hooks/useSEO';
export { guideModulePath } from './pages/guides/guideIndex';

/**
 * Renders a route to static HTML for the build-time prerenderer.
 *
 * Only the markup is produced here — head tags come from the route manifest so
 * the prerenderer never has to run effects to discover them.
 */
const eagerGuides = Object.fromEntries(
  guideConfigs.map((g) => [g.slug, <GuidePage key={g.slug} config={g} />]),
);

export function renderRoute(url: string): string {
  return renderToStaticMarkup(
    <ToastProvider>
      <StaticRouter location={url}>
        <AppRoutes editor={EditorPage} viewer={ViewPage} guides={eagerGuides} />
      </StaticRouter>
    </ToastProvider>
  );
}
