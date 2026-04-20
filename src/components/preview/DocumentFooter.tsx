import type { InvoiceData } from '../../types/invoice';

interface DocumentFooterProps {
  data: InvoiceData;
}

export default function DocumentFooter({ data }: DocumentFooterProps) {
  if (!data.notes && !data.paymentTerms && !data.bankDetails) return null;

  return (
    <div className="print-break-avoid border-t border-gray-200 pt-4 mt-auto">
      {data.notes && (
        <div className="mb-3">
          <div className="text-[10px] font-semibold text-gray-500 uppercase tracking-wider mb-1">Notes</div>
          <div className="text-xs text-gray-600 whitespace-pre-line">{data.notes}</div>
        </div>
      )}
      {data.paymentTerms && (
        <div className="mb-3">
          <div className="text-[10px] font-semibold text-gray-500 uppercase tracking-wider mb-1">Payment Terms</div>
          <div className="text-xs text-gray-600 whitespace-pre-line">{data.paymentTerms}</div>
        </div>
      )}
      {data.bankDetails && (
        <div>
          <div className="text-[10px] font-semibold text-gray-500 uppercase tracking-wider mb-1">Bank Details</div>
          <div className="text-xs text-gray-600 whitespace-pre-line">{data.bankDetails}</div>
        </div>
      )}
    </div>
  );
}
