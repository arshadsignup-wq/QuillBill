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

function EditorContent() {
  const [previewOpen, setPreviewOpen] = useState(false);

  return (
    <>
      <AppShell actions={<ActionBar onPreview={() => setPreviewOpen(true)} />}>
        <SplitPane
          left={<EditorPanel />}
          right={<PreviewPanel />}
        />
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
