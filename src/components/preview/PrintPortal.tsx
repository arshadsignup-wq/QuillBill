import { createPortal } from 'react-dom';
import { useInvoiceContext } from '../../context/InvoiceContext';
import InvoiceDocument from './InvoiceDocument';

export default function PrintPortal() {
  const { data, totals } = useInvoiceContext();

  return createPortal(
    <div id="print-root" className="hidden print:block fixed inset-0 z-[99999] bg-white">
      <InvoiceDocument data={data} totals={totals} printable />
    </div>,
    document.body,
  );
}
