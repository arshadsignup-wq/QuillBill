import { useRef, useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { useInvoiceContext } from '../../context/InvoiceContext';
import InvoiceDocument from '../preview/InvoiceDocument';

interface MobilePreviewSheetProps {
  open: boolean;
  onClose: () => void;
}

const A4_WIDTH_PX = 794; // 210mm ≈ 794px at 96dpi

export default function MobilePreviewSheet({ open, onClose }: MobilePreviewSheetProps) {
  const { data, totals } = useInvoiceContext();
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0.45);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = 'hidden';
    const updateScale = () => {
      const container = containerRef.current;
      if (!container) return;
      const padding = 32; // 16px each side
      const availableWidth = container.clientWidth - padding;
      setScale(Math.min(availableWidth / A4_WIDTH_PX, 0.65));
    };
    // Delay to let animation finish and get correct dimensions
    const raf = requestAnimationFrame(updateScale);
    window.addEventListener('resize', updateScale);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', updateScale);
      document.body.style.overflow = '';
    };
  }, [open]);

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
        <div ref={containerRef} className="flex-1 overflow-auto p-4">
          <div
            style={{
              transform: `scale(${scale})`,
              transformOrigin: 'top center',
              width: '210mm',
              height: `calc(297mm * ${scale})`,
            }}
            className="mx-auto"
          >
            <div className="shadow-xl rounded-sm">
              <InvoiceDocument data={data} totals={totals} printable />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
