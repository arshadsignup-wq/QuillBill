import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { InvoiceProvider } from '../context/InvoiceContext';
import { decodePayload } from '../lib/codec';
import { loadDraft } from '../lib/storage';
import { createDefaultInvoice } from '../constants/defaults';
import type { InvoiceData } from '../types/invoice';
import AppShell from '../components/layout/AppShell';
import SplitPane from '../components/layout/SplitPane';
import EditorPanel from '../components/editor/EditorPanel';
import PreviewPanel from '../components/preview/PreviewPanel';
import ActionBar from '../components/actions/ActionBar';
import MobilePreviewSheet from '../components/layout/MobilePreviewSheet';
import PrintPortal from '../components/preview/PrintPortal';
import { useSEO } from '../hooks/useSEO';
import { Zap, Shield, Share2, Palette, X } from 'lucide-react';

const HERO_DISMISSED_KEY = 'quillbill-hero-dismissed';

function HeroBanner() {
  const [dismissed, setDismissed] = useState(() =>
    sessionStorage.getItem(HERO_DISMISSED_KEY) === '1'
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
          Free Invoice & Quotation Generator
        </h1>
        <p className="text-xs sm:text-sm text-gray-600 mt-1 max-w-2xl">
          Create professional invoices, quotations, and proposals in seconds. No sign-up required,
          no watermarks, and your data never leaves your browser.
        </p>
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

function EditorContent() {
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
      <PrintPortal />
    </>
  );
}

export default function EditorPage() {
  const { payload } = useParams<{ payload?: string }>();
  const [initialData, setInitialData] = useState<InvoiceData | null>(null);
  const [ready, setReady] = useState(false);

  useSEO({
    title: 'Free Invoice & Quotation Generator',
    description: 'Create professional invoices, quotations, and proposals for free. No sign-up, no watermarks — your data stays in your browser.',
    canonical: payload ? undefined : '/',
  });

  useEffect(() => {
    let data: InvoiceData | null = null;

    if (payload) {
      data = decodePayload(payload);
    }

    if (!data) {
      data = loadDraft();
    }

    setInitialData(data ?? createDefaultInvoice());
    setReady(true);
  }, [payload]);

  if (!ready || !initialData) return null;

  return (
    <InvoiceProvider initialData={initialData} autoSave>
      <EditorContent />
    </InvoiceProvider>
  );
}
