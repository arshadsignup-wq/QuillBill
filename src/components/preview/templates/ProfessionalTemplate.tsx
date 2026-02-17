import type { InvoiceData, CalculatedTotals } from '../../../types/invoice';
import { formatDate, formatCurrency } from '../../../lib/format';
import { getDocumentTitle } from '../../../lib/documentTitle';
import DocumentFooter from '../DocumentFooter';

interface TemplateProps {
  data: InvoiceData;
  totals: CalculatedTotals;
}

export default function ProfessionalTemplate({ data, totals }: TemplateProps) {
  const label = getDocumentTitle(data);
  const ac = data.accentColor;

  return (
    <div className="a4-page flex flex-col" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
      {/* Top row: logo + title + meta */}
      <div className="print-break-avoid flex items-start justify-between pb-5 mb-5 border-b-2 border-gray-200">
        <div className="flex items-center gap-4">
          {data.logo && (
            <img src={data.logo} alt="Logo" className="h-14 w-auto object-contain" />
          )}
          <div>
            {data.from.name && <div className="text-lg font-semibold text-gray-900">{data.from.name}</div>}
            {data.from.email && <div className="text-xs text-gray-500">{data.from.email}</div>}
            {data.from.phone && <div className="text-xs text-gray-500">{data.from.phone}</div>}
          </div>
        </div>
        <div className="text-right">
          <div className="text-xl font-bold" style={{ color: ac }}>{label}</div>
          <div className="text-xs text-gray-500 mt-1 space-y-0.5">
            <div># {data.documentNumber}</div>
            <div>Date: {formatDate(data.issueDate)}</div>
            <div>Due: {formatDate(data.dueDate)}</div>
          </div>
        </div>
      </div>

      {/* Address row */}
      <div className="print-break-avoid grid grid-cols-2 gap-8 mb-6">
        <div>
          <div className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 mb-1">From</div>
          <div className="rounded-lg border border-gray-200 p-3 text-xs text-gray-600 space-y-0.5">
            {data.from.name && <div className="font-semibold text-gray-900">{data.from.name}</div>}
            {data.from.address && <div className="whitespace-pre-line">{data.from.address}</div>}
          </div>
        </div>
        <div>
          <div className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 mb-1">Bill To</div>
          <div className="rounded-lg border border-gray-200 p-3 text-xs text-gray-600 space-y-0.5">
            {data.to.name && <div className="font-semibold text-gray-900">{data.to.name}</div>}
            {data.to.email && <div>{data.to.email}</div>}
            {data.to.phone && <div>{data.to.phone}</div>}
            {data.to.address && <div className="whitespace-pre-line">{data.to.address}</div>}
          </div>
        </div>
      </div>

      {/* Items */}
      <table className="w-full mb-6 rounded-lg overflow-hidden">
        <thead>
          <tr style={{ backgroundColor: ac + '15' }}>
            <th className="text-left text-[10px] font-semibold uppercase tracking-wider py-2.5 px-3 w-8" style={{ color: ac }}>#</th>
            <th className="text-left text-[10px] font-semibold uppercase tracking-wider py-2.5 px-3" style={{ color: ac }}>Description</th>
            <th className="text-right text-[10px] font-semibold uppercase tracking-wider py-2.5 px-3 w-14" style={{ color: ac }}>Qty</th>
            <th className="text-right text-[10px] font-semibold uppercase tracking-wider py-2.5 px-3 w-24" style={{ color: ac }}>Rate</th>
            <th className="text-right text-[10px] font-semibold uppercase tracking-wider py-2.5 px-3 w-24" style={{ color: ac }}>Amount</th>
          </tr>
        </thead>
        <tbody>
          {data.items.map((item, i) => {
            const itemTotal = totals.lineItems.find((li) => li.id === item.id)?.total ?? 0;
            return (
              <tr key={item.id} className="border-b border-gray-100">
                <td className="py-2.5 px-3 text-xs text-gray-400">{i + 1}</td>
                <td className="py-2.5 px-3 text-xs text-gray-900">{item.description || '—'}</td>
                <td className="py-2.5 px-3 text-xs text-gray-700 text-right">{item.quantity}</td>
                <td className="py-2.5 px-3 text-xs text-gray-700 text-right">{formatCurrency(item.rate, data.currency)}</td>
                <td className="py-2.5 px-3 text-xs text-gray-900 text-right font-medium">{formatCurrency(itemTotal, data.currency)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* Totals */}
      <div className="print-break-avoid flex justify-end mb-6">
        <div className="w-64 rounded-lg border border-gray-200 overflow-hidden">
          <div className="px-4 py-2 flex justify-between text-xs border-b border-gray-100">
            <span className="text-gray-500">Subtotal</span>
            <span>{formatCurrency(totals.subtotal, data.currency)}</span>
          </div>
          {totals.discountAmount > 0 && (
            <div className="px-4 py-2 flex justify-between text-xs border-b border-gray-100">
              <span className="text-gray-500">Discount</span>
              <span className="text-red-600">-{formatCurrency(totals.discountAmount, data.currency)}</span>
            </div>
          )}
          {totals.taxAmount > 0 && (
            <div className="px-4 py-2 flex justify-between text-xs border-b border-gray-100">
              <span className="text-gray-500">Tax ({data.taxRate}%)</span>
              <span>{formatCurrency(totals.taxAmount, data.currency)}</span>
            </div>
          )}
          {data.shippingCost > 0 && (
            <div className="px-4 py-2 flex justify-between text-xs border-b border-gray-100">
              <span className="text-gray-500">Shipping</span>
              <span>{formatCurrency(data.shippingCost, data.currency)}</span>
            </div>
          )}
          <div className="px-4 py-2.5 flex justify-between text-sm font-bold text-white" style={{ backgroundColor: ac }}>
            <span>Total</span>
            <span>{formatCurrency(totals.total, data.currency)}</span>
          </div>
        </div>
      </div>

      <DocumentFooter data={data} />
    </div>
  );
}
