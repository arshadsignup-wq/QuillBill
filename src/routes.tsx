import { lazy, type ComponentType } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

/**
 * The editor and viewer pull in the whole document engine: 15 invoice
 * templates, 15 proposal templates, the editor panels and the print portal.
 * Statically importing them meant every text guide shipped that code too.
 * They are lazy so content pages only download what they render.
 *
 * Note: no <Suspense> boundary here on purpose. App.tsx provides one for the
 * browser, while the prerenderer renders without one so it can catch the
 * thrown promise, await the chunk and re-render — giving real static HTML
 * instead of a suspense fallback.
 */
const LazyEditorPage = lazy(() => import('./pages/EditorPage'));
const LazyViewPage = lazy(() => import('./pages/ViewPage'));

interface AppRoutesProps {
  /**
   * The prerenderer passes the real components here. renderToStaticMarkup is
   * synchronous, so a lazy component would suspend and emit an empty page
   * instead of the homepage markup.
   */
  editor?: ComponentType;
  viewer?: ComponentType;
  /**
   * Likewise for the guides: the prerenderer hands over the fully loaded
   * configs so every guide still renders to real static HTML, while the
   * browser gets the lazy per-cluster version.
   */
  guides?: Record<string, GuideConfig>;
}
import NotFoundPage from './pages/NotFoundPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import DisclaimerPage from './pages/DisclaimerPage';
import FAQPage from './pages/FAQPage';
import DMCAPage from './pages/DMCAPage';
import LandingPage from './pages/landing/LandingPage';
import { invoiceConfig, quotationConfig, proposalConfig } from './pages/landing/landingData';
import TemplateGalleryPage from './pages/templates/TemplateGalleryPage';
import {
  invoiceTemplatesConfig,
  quotationTemplatesConfig,
  proposalTemplatesConfig,
} from './pages/templates/templateData';
import GuidePage from './pages/guides/GuidePage';
import GuidesHubPage from './pages/guides/GuidesHubPage';
import { guideSlugs, guideLoaders } from './pages/guides/guideIndex';
import type { GuideConfig } from './pages/guides/types';

/**
 * One lazy component per guide, each resolving to its cluster module.
 *
 * Built once at module scope rather than inside render: lazy() called during a
 * render returns a new component type every pass, which remounts the subtree on
 * every state change.
 */
const lazyGuides: Record<string, ComponentType> = Object.fromEntries(
  guideSlugs.map((slug) => [
    slug,
    lazy(async () => {
      const config = await guideLoaders[slug]();
      return { default: () => <GuidePage config={config} /> };
    }),
  ]),
);

/**
 * Route table shared by the browser entry (App.tsx) and the prerender entry
 * (entry-server.tsx), so the static HTML and the client render the same tree.
 */
export default function AppRoutes({ editor, viewer, guides }: AppRoutesProps = {}) {
  const EditorPage = editor ?? LazyEditorPage;
  const ViewPage = viewer ?? LazyViewPage;

  return (
    <Routes>
      <Route path="/" element={<EditorPage />} />
      <Route path="/edit/:payload" element={<EditorPage />} />
      <Route path="/view/:payload" element={<ViewPage />} />
      {/* Prerendered shells the share-link rewrites resolve to. */}
      <Route path="/edit" element={<EditorPage />} />
      <Route path="/view" element={<ViewPage />} />
      <Route path="/privacy" element={<PrivacyPage />} />
      <Route path="/terms" element={<TermsPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/disclaimer" element={<DisclaimerPage />} />
      <Route path="/faq" element={<FAQPage />} />
      <Route path="/dmca" element={<DMCAPage />} />

      <Route path="/invoice-generator" element={<LandingPage config={invoiceConfig} />} />
      <Route path="/quotation-generator" element={<LandingPage config={quotationConfig} />} />
      <Route path="/proposal-generator" element={<LandingPage config={proposalConfig} />} />

      <Route path="/invoice-templates" element={<TemplateGalleryPage config={invoiceTemplatesConfig} />} />
      <Route path="/quotation-templates" element={<TemplateGalleryPage config={quotationTemplatesConfig} />} />
      <Route path="/proposal-templates" element={<TemplateGalleryPage config={proposalTemplatesConfig} />} />

      <Route path="/guides" element={<GuidesHubPage />} />
      {guideSlugs.map((slug) => {
        const Eager = guides?.[slug];
        const Guide = lazyGuides[slug];
        return (
          <Route
            key={slug}
            path={`/${slug}`}
            element={Eager ? <GuidePage config={Eager} /> : <Guide />}
          />
        );
      })}

      <Route path="/404" element={<NotFoundPage />} />
      <Route path="*" element={<Navigate to="/404" replace />} />
    </Routes>
  );
}
