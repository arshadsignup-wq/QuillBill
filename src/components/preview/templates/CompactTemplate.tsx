import type { InvoiceData, CalculatedTotals } from '../../../types/invoice';
import { formatDate, formatCurrency } from '../../../lib/format';
import { getDocumentTitle } from '../../../lib/documentTitle';
import DocumentFooter from '../DocumentFooter';

interface TemplateProps {
  data: InvoiceData;
  totals: CalculatedTotals;
}

export default function CompactTemplate({ data, totals }: TemplateProps) {
  const label = getDocumentTitle(data);
  const ac = data.accentColor;

  return (
    <div className="a4-page flex flex-col" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
      {/* Top bar */}
      <div className="print-break-avoid flex items-center justify-between pb-4 mb-4" style={{ borderBottom: `2px solid ${ac}` }}>
        <div className="flex items-center gap-3">
          {data.logo && (
            <img src={data.logo} alt="Logo" className="h-8 w-auto object-contain" />
          )}
          <div>
            <span className="text-lg font-bold tracking-tight" style={{ color: ac }}>{label}</span>
            <span className="text-xs text-gray-400 ml-2">#{data.documentNumber}</span>
          </div>
        </div>
        <div className="text-right text-[10px] text-gray-500">
          <div>Issued: {formatDate(data.issueDate)}</div>
          <div>Due: {formatDate(data.dueDate)}</div>
        </div>
      </div>

      {/* Two-column parties */}
      <div className="print-break-avoid grid grid-cols-2 gap-4 mb-5">
        <div className="rounded-lg p-3" style={{ backgroundColor: ac + '08' }}>
          <div className="text-[9px] font-bold uppercase tracking-wider mb-1.5" style={{ color: ac }}>From</div>
          <div className="text-xs text-gray-700 space-y-0.5">
            {data.from.name && <div className="font-semibold text-gray-900">{data.from.name}</div>}
            {data.from.email && <div>{data.from.email}</div>}
            {data.from.phone && <div>{data.from.phone}</div>}
            {data.from.address && <div className="whitespace-pre-line">{data.from.address}</div>}
          </div>
        </div>
        <div className="rounded-lg p-3" style={{ backgroundColor: ac + '08' }}>
          <div className="text-[9px] font-bold uppercase tracking-wider mb-1.5" style={{ color: ac }}>To</div>
          <div className="text-xs text-gray-700 space-y-0.5">
            {data.to.name && <div className="font-semibold text-gray-900">{data.to.name}</div>}
            {data.to.email && <div>{data.to.email}</div>}
            {data.to.phone && <div>{data.to.phone}</div>}
            {data.to.address && <div className="whitespace-pre-line">{data.to.address}</div>}
          </div>
        </div>
      </div>

      {/* Items */}
      <table className="w-full mb-5 text-[11px]">
        <thead>
          <tr style={{ borderBottom: `2px solid ${ac}` }}>
            <th className="text-left font-semibold text-gray-700 pb-1.5 w-8">#</th>
            <th className="text-left font-semibold text-gray-700 pb-1.5">Item</th>
            <th className="text-right font-semibold text-gray-700 pb-1.5 w-12">Qty</th>
            <th className="text-right font-semibold text-gray-700 pb-1.5 w-20">Rate</th>
            <th className="text-right font-semibold text-gray-700 pb-1.5 w-20">Amount</th>
          </tr>
        </thead>
        <tbody>
          {data.items.map((item, i) => {
            const itemTotal = totals.lineItems.find((li) => li.id === item.id)?.total ?? 0;
            return (
              <tr key={item.id} className="border-b border-gray-100">
                <td className="py-1.5 text-gray-400">{i + 1}</td>
                <td className="py-1.5 text-gray-900">{item.description || '—'}</td>
                <td className="py-1.5 text-gray-700 text-right">{item.quantity}</td>
                <td className="py-1.5 text-gray-700 text-right">{formatCurrency(item.rate, data.currency)}</td>
                <td className="py-1.5 text-gray-900 text-right font-medium">{formatCurrency(itemTotal, data.currency)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* Totals — inline compact */}
      <div className="print-break-avoid flex justify-end mb-5">
        <div className="w-56 text-[11px]">
          <div className="flex justify-between py-0.5 text-gray-500">
            <span>Subtotal</span>
            <span className="text-gray-800">{formatCurrency(totals.subtotal, data.currency)}</span>
          </div>
          {totals.discountAmount > 0 && (
            <div className="flex justify-between py-0.5 text-gray-500">
              <span>Discount</span>
              <span className="text-red-600">-{formatCurrency(totals.discountAmount, data.currency)}</span>
            </div>
          )}
          {totals.taxAmount > 0 && (
            <div className="flex justify-between py-0.5 text-gray-500">
              <span>Tax ({data.taxRate}%)</span>
              <span className="text-gray-800">{formatCurrency(totals.taxAmount, data.currency)}</span>
            </div>
          )}
          {data.shippingCost > 0 && (
            <div className="flex justify-between py-0.5 text-gray-500">
              <span>Shipping</span>
              <span className="text-gray-800">{formatCurrency(data.shippingCost, data.currency)}</span>
            </div>
          )}
          <div className="flex justify-between font-bold text-sm pt-1.5 mt-1" style={{ borderTop: `2px solid ${ac}`, color: ac }}>
            <span>Total</span>
            <span>{formatCurrency(totals.total, data.currency)}</span>
          </div>
        </div>
      </div>

      <DocumentFooter data={data} />
    </div>
  );
}
