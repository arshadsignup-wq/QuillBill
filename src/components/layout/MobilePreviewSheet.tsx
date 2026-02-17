import { X } from 'lucide-react';
import { useInvoiceContext } from '../../context/InvoiceContext';
import InvoiceDocument from '../preview/InvoiceDocument';

interface MobilePreviewSheetProps {
  open: boolean;
  onClose: () => void;
}

export default function MobilePreviewSheet({ open, onClose }: MobilePreviewSheetProps) {
  const { data, totals } = useInvoiceContext();

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-40 lg:hidden">
      <div className="fixed inset-0 bg-black/40" onClick={onClose} />
      <div className="mobile-sheet fixed inset-x-0 bottom-0 top-12 bg-gray-100 rounded-t-2xl overflow-hidden flex flex-col">
        <div className="flex items-center justify-between px-4 py-3 bg-white border-b border-gray-200">
          <span className="text-sm font-semibold text-gray-900">Preview</span>
          <button
            onClick={onClose}
            className="rounded-lg p-1.5 text-gray-400 hover:bg-gray-100 cursor-pointer"
          >
            <X size={18} />
          </button>
        </div>
        <div className="flex-1 overflow-auto p-4">
          <div style={{ transform: 'scale(0.45)', transformOrigin: 'top center', width: '210mm' }} className="mx-auto">
            <div className="shadow-xl rounded-sm">
              <InvoiceDocument data={data} totals={totals} printable />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
