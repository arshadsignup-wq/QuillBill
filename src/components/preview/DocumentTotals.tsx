import type { InvoiceData, CalculatedTotals } from '../../types/invoice';
import { formatCurrency } from '../../lib/format';

interface DocumentTotalsProps {
  data: InvoiceData;
  totals: CalculatedTotals;
  accentColor: string;
}

export default function DocumentTotals({ data, totals, accentColor }: DocumentTotalsProps) {
  return (
    <div className="print-break-avoid flex justify-end mb-6">
      <div className="w-64 space-y-1.5">
        <div className="flex justify-between text-xs">
          <span className="text-gray-500">Subtotal</span>
          <span className="text-gray-900">{formatCurrency(totals.subtotal, data.currency)}</span>
        </div>
        {totals.discountAmount > 0 && (
          <div className="flex justify-between text-xs">
            <span className="text-gray-500">
              Discount{data.discountType === 'percentage' ? ` (${data.discountValue}%)` : ''}
            </span>
            <span className="text-red-600">-{formatCurrency(totals.discountAmount, data.currency)}</span>
          </div>
        )}
        {totals.taxAmount > 0 && (
          <div className="flex justify-between text-xs">
            <span className="text-gray-500">Tax ({data.taxRate}%)</span>
            <span className="text-gray-900">{formatCurrency(totals.taxAmount, data.currency)}</span>
          </div>
        )}
        {data.shippingCost > 0 && (
          <div className="flex justify-between text-xs">
            <span className="text-gray-500">Shipping</span>
            <span className="text-gray-900">{formatCurrency(data.shippingCost, data.currency)}</span>
          </div>
        )}
        <div
          className="flex justify-between text-sm font-bold pt-2 mt-2 border-t-2"
          style={{ borderColor: accentColor }}
        >
          <span>Total</span>
          <span style={{ color: accentColor }}>{formatCurrency(totals.total, data.currency)}</span>
        </div>
      </div>
    </div>
  );
}
