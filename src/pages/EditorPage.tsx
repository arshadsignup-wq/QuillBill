import { useEffect, useState } from 'react';
import { useParams, useSearchParams, Link } from 'react-router-dom';
import { InvoiceProvider } from '../context/InvoiceContext';
import { decodePayload } from '../lib/codec';
import { loadDraft } from '../lib/storage';
import { createDefaultInvoice } from '../constants/defaults';
import type { InvoiceData, DocumentMode, TemplateName } from '../types/invoice';
import { templateGalleryConfigs } from './templates/templateData';
import AppShell from '../components/layout/AppShell';
import SplitPane from '../components/layout/SplitPane';
import EditorPanel from '../components/editor/EditorPanel';
import PreviewPanel from '../components/preview/PreviewPanel';
import ActionBar from '../components/actions/ActionBar';
import MobilePreviewSheet from '../components/layout/MobilePreviewSheet';
import PrintPortal from '../components/preview/PrintPortal';
import HomeContent from './HomeContent';
import { useSEO } from '../hooks/useSEO';
import { routeFor } from '../seo/routeManifest';
import { Zap, Shield, Share2, Palette, X } from 'lucide-react';

const HERO_DISMISSED_KEY = 'quillbill-hero-dismissed';

function HeroBanner() {
  const [dismissed, setDismissed] = useState(() =>
    // Guarded so the banner also renders during build-time prerendering, which
    // is what puts the homepage h1 and copy into the served HTML.
    typeof window !== 'undefined' && sessionStorage.getItem(HERO_DISMISSED_KEY) === '1'
  );

  if (dismissed) return null;

  const handleDismiss = () => {
    sessionStorage.setItem(HERO_DISMISSED_KEY, '1');
    setDismissed(true);
  };

  return (
    <div className="no-print relative bg-gradient-to-r from-brand/5 to-blue-50 border-b border-brand/10 px-4 py-3 sm:px-6 sm:py-4">
      <button
        onClick={handleDismiss}
        className="absolute top-2 right-2 p-1 text-gray-400 hover:text-gray-600 transition-colors"
        aria-label="Dismiss"
      >
        <X size={16} />
      </button>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-base sm:text-lg font-bold text-gray-900">
          Free Invoice &amp; Quotation Generator
        </h1>
        <p className="text-xs sm:text-sm text-gray-600 mt-1 max-w-2xl">
          Create professional invoices, quotations, and proposals in seconds. No sign-up required,
          no watermarks, and your data never leaves your browser. Choose from 15 free templates and
          export a printable PDF instantly.
        </p>
        <nav aria-label="Guides and templates" className="flex flex-wrap gap-x-4 gap-y-1 mt-2 text-xs">
          <Link to="/invoice-generator" className="text-brand hover:underline">Invoice generator</Link>
          <Link to="/quotation-generator" className="text-brand hover:underline">Quotation generator</Link>
          <Link to="/proposal-generator" className="text-brand hover:underline">Proposal generator</Link>
          <Link to="/invoice-templates" className="text-brand hover:underline">Free invoice templates</Link>
          <Link to="/guides" className="text-brand hover:underline">Invoicing guides</Link>
        </nav>
        <div className="flex flex-wrap gap-2 mt-2">
          <span className="inline-flex items-center gap-1 rounded-full bg-white/80 border border-brand/15 px-2.5 py-0.5 text-xs text-gray-700">
            <Zap size={12} className="text-brand" /> Instant PDF export
          </span>
          <span className="inline-flex items-center gap-1 rounded-full bg-white/80 border border-brand/15 px-2.5 py-0.5 text-xs text-gray-700">
            <Shield size={12} className="text-brand" /> 100% private
          </span>
          <span className="inline-flex items-center gap-1 rounded-full bg-white/80 border border-brand/15 px-2.5 py-0.5 text-xs text-gray-700">
            <Palette size={12} className="text-brand" /> 15 templates
          </span>
          <span className="inline-flex items-center gap-1 rounded-full bg-white/80 border border-brand/15 px-2.5 py-0.5 text-xs text-gray-700">
            <Share2 size={12} className="text-brand" /> Shareable links
          </span>
        </div>
      </div>
    </div>
  );
}

function EditorContent({ showHomeContent }: { showHomeContent: boolean }) {
  const [previewOpen, setPreviewOpen] = useState(false);

  return (
    <>
      <AppShell actions={<ActionBar onPreview={() => setPreviewOpen(true)} />}>
        <div className="flex flex-col h-full">
          <HeroBanner />
          <div className="flex-1 overflow-hidden">
            <SplitPane
              left={<EditorPanel />}
              right={<PreviewPanel />}
            />
          </div>
        </div>
        <MobilePreviewSheet open={previewOpen} onClose={() => setPreviewOpen(false)} />
      </AppShell>
      {showHomeContent && <HomeContent />}
      <PrintPortal />
    </>
  );
}

const VALID_MODES: Record<string, DocumentMode> = {
  invoice: 'invoice',
  quote: 'quote',
  proposal: 'proposal',
};

const VALID_TEMPLATES = new Set<string>(
  templateGalleryConfigs[0].templates.map((t) => t.key)
);

export default function EditorPage() {
  const { payload } = useParams<{ payload?: string }>();
  const [searchParams] = useSearchParams();
  const [initialData, setInitialData] = useState<InvoiceData | null>(null);
  const [ready, setReady] = useState(false);

  const homeMeta = routeFor('/')!;
  useSEO({
    ...homeMeta,
    // /edit/:payload holds user document data — never index or canonicalise it.
    canonical: payload ? undefined : '/',
    noindex: Boolean(payload),
  });

  useEffect(() => {
    let data: InvoiceData | null = null;

    if (payload) {
      data = decodePayload(payload);
    }

    if (!data) {
      data = loadDraft();
    }

    data = data ?? createDefaultInvoice();

    // Apply ?mode= deep-link override
    const modeParam = searchParams.get('mode');
    if (modeParam && VALID_MODES[modeParam] && data.mode !== VALID_MODES[modeParam]) {
      const newMode = VALID_MODES[modeParam];
      data = { ...data, mode: newMode };
      // Mirror the document number logic from the reducer
      if (newMode === 'proposal' && data.documentNumber === 'INV-001') {
        data.documentNumber = 'PROP-001';
      } else if (newMode !== 'proposal' && data.documentNumber === 'PROP-001') {
        data.documentNumber = 'INV-001';
      }
    }

    // Apply ?template= deep-link, used by the template gallery pages
    const templateParam = searchParams.get('template');
    if (templateParam && VALID_TEMPLATES.has(templateParam)) {
      data = { ...data, template: templateParam as TemplateName };
    }

    setInitialData(data);
    setReady(true);
  }, [payload, searchParams]);

  // Before the editor's client-side state is resolved — and during build-time
  // prerendering, where effects never run — render the shell and hero anyway.
  // This is what puts the homepage h1, description and internal links into the
  // served HTML instead of shipping an empty <div id="root">.
  if (!ready || !initialData) {
    return (
      <>
        <AppShell>
          <div className="flex flex-col h-full">
            <HeroBanner />
          </div>
        </AppShell>
        {!payload && <HomeContent />}
      </>
    );
  }

  return (
    <InvoiceProvider initialData={initialData} autoSave>
      {/* Only the canonical homepage carries the marketing copy; /edit/:payload
          is a working document view and stays a bare editor. */}
      <EditorContent showHomeContent={!payload} />
    </InvoiceProvider>
  );
}
