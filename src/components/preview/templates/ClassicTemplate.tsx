import type { InvoiceData, CalculatedTotals } from '../../../types/invoice';
import { formatDate, formatCurrency } from '../../../lib/format';
import { getDocumentTitle } from '../../../lib/documentTitle';
import DocumentFooter from '../DocumentFooter';

interface TemplateProps {
  data: InvoiceData;
  totals: CalculatedTotals;
}

export default function ClassicTemplate({ data, totals }: TemplateProps) {
  const label = getDocumentTitle(data);
  const ac = data.accentColor;

  return (
    <div className="a4-page flex flex-col" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
      {/* Header */}
      <div className="print-break-avoid text-center mb-6 pb-4" style={{ borderBottom: `3px double ${ac}` }}>
        {data.logo && (
          <img src={data.logo} alt="Logo" className="h-14 w-auto object-contain mx-auto mb-2" />
        )}
        <h1 className="text-3xl font-bold tracking-wide" style={{ color: ac }}>{label}</h1>
      </div>

      {/* Meta + Parties */}
      <div className="print-break-avoid grid grid-cols-2 gap-6 mb-6">
        <div>
          <div className="text-[10px] font-bold uppercase tracking-wider text-gray-500 mb-2 pb-1 border-b border-gray-300">From</div>
          <div className="text-xs text-gray-700 space-y-0.5">
            {data.from.name && <div className="font-bold text-sm">{data.from.name}</div>}
            {data.from.email && <div>{data.from.email}</div>}
            {data.from.phone && <div>{data.from.phone}</div>}
            {data.from.address && <div className="whitespace-pre-line">{data.from.address}</div>}
          </div>
        </div>
        <div>
          <div className="text-[10px] font-bold uppercase tracking-wider text-gray-500 mb-2 pb-1 border-b border-gray-300">To</div>
          <div className="text-xs text-gray-700 space-y-0.5">
            {data.to.name && <div className="font-bold text-sm">{data.to.name}</div>}
            {data.to.email && <div>{data.to.email}</div>}
            {data.to.phone && <div>{data.to.phone}</div>}
            {data.to.address && <div className="whitespace-pre-line">{data.to.address}</div>}
          </div>
        </div>
      </div>

      {/* Document Info */}
      <div className="print-break-avoid mb-6 p-3 border border-gray-300 bg-gray-50 text-xs text-gray-600 flex gap-8">
        <div><span className="font-bold">No:</span> {data.documentNumber}</div>
        <div><span className="font-bold">Date:</span> {formatDate(data.issueDate)}</div>
        <div><span className="font-bold">Due:</span> {formatDate(data.dueDate)}</div>
      </div>

      {/* Items Table */}
      <table className="w-full mb-6 border border-gray-300">
        <thead>
          <tr style={{ backgroundColor: ac, color: 'white' }}>
            <th className="text-left text-[10px] font-bold uppercase py-2 px-3 border-r border-white/20 w-8">#</th>
            <th className="text-left text-[10px] font-bold uppercase py-2 px-3 border-r border-white/20">Description</th>
            <th className="text-right text-[10px] font-bold uppercase py-2 px-3 border-r border-white/20 w-16">Qty</th>
            <th className="text-right text-[10px] font-bold uppercase py-2 px-3 border-r border-white/20 w-24">Rate</th>
            <th className="text-right text-[10px] font-bold uppercase py-2 px-3 w-24">Amount</th>
          </tr>
        </thead>
        <tbody>
          {data.items.map((item, i) => {
            const itemTotal = totals.lineItems.find((li) => li.id === item.id)?.total ?? 0;
            return (
              <tr key={item.id} className="border-b border-gray-200 even:bg-gray-50">
                <td className="py-2 px-3 text-xs text-gray-500 border-r border-gray-200">{i + 1}</td>
                <td className="py-2 px-3 text-xs text-gray-900 border-r border-gray-200">{item.description || '—'}</td>
                <td className="py-2 px-3 text-xs text-gray-700 text-right border-r border-gray-200">{item.quantity}</td>
                <td className="py-2 px-3 text-xs text-gray-700 text-right border-r border-gray-200">{formatCurrency(item.rate, data.currency)}</td>
                <td className="py-2 px-3 text-xs text-gray-900 text-right font-bold">{formatCurrency(itemTotal, data.currency)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* Totals */}
      <div className="print-break-avoid flex justify-end mb-6">
        <div className="w-64 border border-gray-300">
          <div className="flex justify-between text-xs px-3 py-1.5 border-b border-gray-200">
            <span className="text-gray-600">Subtotal</span>
            <span className="font-medium">{formatCurrency(totals.subtotal, data.currency)}</span>
          </div>
          {totals.discountAmount > 0 && (
            <div className="flex justify-between text-xs px-3 py-1.5 border-b border-gray-200">
              <span className="text-gray-600">Discount</span>
              <span className="text-red-700">-{formatCurrency(totals.discountAmount, data.currency)}</span>
            </div>
          )}
          {totals.taxAmount > 0 && (
            <div className="flex justify-between text-xs px-3 py-1.5 border-b border-gray-200">
              <span className="text-gray-600">Tax ({data.taxRate}%)</span>
              <span>{formatCurrency(totals.taxAmount, data.currency)}</span>
            </div>
          )}
          {data.shippingCost > 0 && (
            <div className="flex justify-between text-xs px-3 py-1.5 border-b border-gray-200">
              <span className="text-gray-600">Shipping</span>
              <span>{formatCurrency(data.shippingCost, data.currency)}</span>
            </div>
          )}
          <div className="flex justify-between text-sm font-bold px-3 py-2" style={{ backgroundColor: ac, color: 'white' }}>
            <span>Total</span>
            <span>{formatCurrency(totals.total, data.currency)}</span>
          </div>
        </div>
      </div>

      <DocumentFooter data={data} />
    </div>
  );
}
