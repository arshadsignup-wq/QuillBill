import { useMemo } from 'react';
import { createPortal } from 'react-dom';
import { useParams, Navigate, Link } from 'react-router-dom';
import { Printer, Pencil, FileText } from 'lucide-react';
import { decodePayload } from '../lib/codec';
import { calculateTotals } from '../lib/calculations';
import { usePrint } from '../hooks/usePrint';
import InvoiceDocument from '../components/preview/InvoiceDocument';
import Button from '../components/ui/Button';

export default function ViewPage() {
  const { payload } = useParams<{ payload: string }>();
  const print = usePrint();

  const data = useMemo(() => {
    if (!payload) return null;
    return decodePayload(payload);
  }, [payload]);

  if (!data) return <Navigate to="/404" replace />;

  const totals = calculateTotals(data);

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="no-print bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <FileText size={20} className="text-brand" />
          <span className="text-base font-bold text-gray-900">QuillBill</span>
        </div>
        <div className="flex items-center gap-2">
          <Link to={`/edit/${payload}`}>
            <Button variant="ghost" size="sm">
              <Pencil size={14} />
              Edit
            </Button>
          </Link>
          <Button variant="primary" size="sm" onClick={print}>
            <Printer size={14} />
            Download PDF
          </Button>
        </div>
      </header>
      <div className="flex justify-center py-8 px-4">
        <div className="shadow-xl rounded-sm">
          <InvoiceDocument data={data} totals={totals} />
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
