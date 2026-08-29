import { useMemo, useRef, useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useParams, Navigate, Link } from 'react-router-dom';
import { Printer, Pencil, FileText } from 'lucide-react';
import { decodePayload } from '../lib/codec';
import { calculateTotals } from '../lib/calculations';
import { usePrint } from '../hooks/usePrint';
import { useSEO } from '../hooks/useSEO';
import InvoiceDocument from '../components/preview/InvoiceDocument';
import PrintPageStyle from '../components/preview/PrintPageStyle';
import Button from '../components/ui/Button';

const A4_WIDTH_PX = 794; // 210mm ≈ 794px

function SharedDocumentShell() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="no-print bg-white border-b border-gray-200 px-4 py-3">
        <Link to="/" aria-label="QuillBill home" className="flex items-center gap-2">
          <FileText size={20} className="text-brand" />
          <span className="text-base font-bold text-gray-900">QuillBill</span>
        </Link>
      </header>
      <div className="flex flex-col items-center justify-center gap-3 py-24 px-4 text-center">
        <FileText size={32} className="text-gray-300" />
        <h1 className="text-lg font-semibold text-gray-900">Shared document</h1>
        <p className="max-w-md text-sm text-gray-500">
          This document is encoded in the link itself and is being decoded in your browser. It was
          never uploaded to a server.
        </p>
        <Link to="/" className="text-sm text-brand hover:underline">
          Create your own document
        </Link>
      </div>
    </div>
  );
}

export default function ViewPage() {
  const { payload } = useParams<{ payload: string }>();
  const print = usePrint();
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useSEO({
    title: 'View Document',
    description: 'View a shared QuillBill document.',
    noindex: true,
  });

  const data = useMemo(() => {
    if (!payload) return null;
    return decodePayload(payload);
  }, [payload]);

  useEffect(() => {
    if (!data) return;
    const updateScale = () => {
      const container = containerRef.current;
      if (!container) return;
      const padding = 32;
      const available = container.clientWidth - padding;
      setScale(available >= A4_WIDTH_PX ? 1 : available / A4_WIDTH_PX);
    };
    updateScale();
    window.addEventListener('resize', updateScale);
    return () => window.removeEventListener('resize', updateScale);
  }, [data]);

  // No payload at all means this is the prerendered /view shell, which every
  // shared link is rewritten onto. It is the markup link unfurlers and the
  // pre-hydration paint see, so it must read as a document loading rather than
  // as an error. A payload that is present but will not decode is a real 404.
  if (!payload) return <SharedDocumentShell />;
  if (!data) return <Navigate to="/404" replace />;

  const totals = calculateTotals(data);

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="no-print bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between">
        <Link to="/" aria-label="QuillBill home" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <FileText size={20} className="text-brand" />
          <span className="text-base font-bold text-gray-900">QuillBill</span>
        </Link>
        <div className="flex items-center gap-2">
          <Link to={`/edit/${payload}`}>
            <Button variant="ghost" size="sm">
              <Pencil size={14} />
              <span className="hidden sm:inline">Edit</span>
            </Button>
          </Link>
          <Button variant="primary" size="sm" onClick={print}>
            <Printer size={14} />
            <span className="hidden sm:inline">Print / Save as</span> PDF
          </Button>
        </div>
      </header>
      <div ref={containerRef} className="flex justify-center py-6 sm:py-8 px-4">
        <div
          style={scale < 1 ? { transform: `scale(${scale})`, transformOrigin: 'top center', width: '210mm' } : undefined}
        >
          <div className="shadow-xl rounded-sm">
            <InvoiceDocument data={data} totals={totals} />
          </div>
        </div>
      </div>
      <PrintPageStyle paperSize={data.paperSize} />
      {/* Print portal — renders at body level for clean print */}
      {createPortal(
        <div id="print-root" className="hidden print:block fixed inset-0 z-[99999] bg-white">
          <InvoiceDocument data={data} totals={totals} printable />
        </div>,
        document.body,
      )}
    </div>
  );
}
