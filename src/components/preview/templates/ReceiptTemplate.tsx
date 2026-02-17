import type { InvoiceData, CalculatedTotals } from '../../../types/invoice';
import { formatDate, formatCurrency } from '../../../lib/format';
import { getDocumentTitle } from '../../../lib/documentTitle';
import DocumentFooter from '../DocumentFooter';

interface TemplateProps {
  data: InvoiceData;
  totals: CalculatedTotals;
}

export default function ReceiptTemplate({ data, totals }: TemplateProps) {
  const label = getDocumentTitle(data);
  const ac = data.accentColor;

  return (
    <div className="a4-page flex flex-col items-center" style={{ fontFamily: '"Courier New", Courier, monospace' }}>
      <div className="w-full max-w-[140mm]">
        {/* Center-aligned header */}
        <div className="print-break-avoid text-center mb-6 pb-4 border-b border-dashed border-gray-300">
          {data.logo && (
            <img src={data.logo} alt="Logo" className="h-10 w-auto object-contain mx-auto mb-2" />
          )}
          {data.from.name && <div className="text-sm font-bold text-gray-900">{data.from.name}</div>}
          <div className="text-[10px] text-gray-500 space-y-0.5">
            {data.from.email && <div>{data.from.email}</div>}
            {data.from.phone && <div>{data.from.phone}</div>}
            {data.from.address && <div>{data.from.address}</div>}
          </div>
        </div>

        {/* Title */}
        <div className="print-break-avoid text-center mb-4">
          <div className="text-lg font-bold tracking-wider" style={{ color: ac }}>{label}</div>
          <div className="text-[10px] text-gray-400">
            {data.documentNumber} &bull; {formatDate(data.issueDate)}
          </div>
        </div>

        {/* Bill To */}
        <div className="print-break-avoid mb-4 pb-3 border-b border-dashed border-gray-300">
          <div className="text-[10px] text-gray-400 mb-1">BILL TO:</div>
          <div className="text-xs text-gray-700">
            {data.to.name && <span className="font-bold">{data.to.name}</span>}
            {data.to.email && <span> &bull; {data.to.email}</span>}
          </div>
          <div className="text-[10px] text-gray-400 mt-1">DUE: {formatDate(data.dueDate)}</div>
        </div>

        {/* Items — receipt style */}
        <div className="mb-4 pb-3 border-b border-dashed border-gray-300">
          {data.items.map((item, i) => {
            const itemTotal = totals.lineItems.find((li) => li.id === item.id)?.total ?? 0;
            return (
              <div key={item.id} className="flex justify-between text-xs py-1">
                <div className="flex-1 text-gray-800">
                  {item.description || `Item ${i + 1}`}
                  <span className="text-gray-400 ml-1">x{item.quantity}</span>
                </div>
                <div className="text-right font-medium text-gray-900 ml-4">{formatCurrency(itemTotal, data.currency)}</div>
              </div>
            );
          })}
        </div>

        {/* Totals */}
        <div className="print-break-avoid mb-4 pb-3 border-b border-dashed border-gray-300 space-y-0.5">
          <div className="flex justify-between text-xs">
            <span className="text-gray-500">SUBTOTAL</span>
            <span>{formatCurrency(totals.subtotal, data.currency)}</span>
          </div>
          {totals.discountAmount > 0 && (
            <div className="flex justify-between text-xs">
              <span className="text-gray-500">DISCOUNT</span>
              <span>-{formatCurrency(totals.discountAmount, data.currency)}</span>
            </div>
          )}
          {totals.taxAmount > 0 && (
            <div className="flex justify-between text-xs">
              <span className="text-gray-500">TAX ({data.taxRate}%)</span>
              <span>{formatCurrency(totals.taxAmount, data.currency)}</span>
            </div>
          )}
          {data.shippingCost > 0 && (
            <div className="flex justify-between text-xs">
              <span className="text-gray-500">SHIPPING</span>
              <span>{formatCurrency(data.shippingCost, data.currency)}</span>
            </div>
          )}
          <div className="flex justify-between text-base font-bold pt-1" style={{ color: ac }}>
            <span>TOTAL</span>
            <span>{formatCurrency(totals.total, data.currency)}</span>
          </div>
        </div>

        {/* Notes / footer */}
        <div className="text-center">
          <DocumentFooter data={data} />
          {!data.notes && !data.paymentTerms && (
            <div className="text-[10px] text-gray-400 mt-4">Thank you!</div>
          )}
        </div>
      </div>
    </div>
  );
}
