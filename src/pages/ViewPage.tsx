import { useMemo, useRef, useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useParams, Navigate, Link } from 'react-router-dom';
import { Printer, Pencil, FileText } from 'lucide-react';
import { decodePayload } from '../lib/codec';
import { calculateTotals } from '../lib/calculations';
import { usePrint } from '../hooks/usePrint';
import { useSEO } from '../hooks/useSEO';
import InvoiceDocument from '../components/preview/InvoiceDocument';
import Button from '../components/ui/Button';

const A4_WIDTH_PX = 794; // 210mm ≈ 794px

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
            <span className="hidden sm:inline">Download</span> PDF
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
