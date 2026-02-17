import type { InvoiceData, CalculatedTotals } from '../../../types/invoice';
import { formatDate, formatCurrency } from '../../../lib/format';
import { getDocumentTitle } from '../../../lib/documentTitle';
import DocumentFooter from '../DocumentFooter';

interface TemplateProps {
  data: InvoiceData;
  totals: CalculatedTotals;
}

export default function GradientTemplate({ data, totals }: TemplateProps) {
  const label = getDocumentTitle(data);
  const ac = data.accentColor;

  return (
    <div className="a4-page flex flex-col" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
      {/* Gradient header */}
      <div
        className="print-break-avoid -mx-[15mm] -mt-[15mm] px-[15mm] pt-[15mm] pb-8 mb-6"
        style={{ background: `linear-gradient(135deg, ${ac}, ${ac}cc)` }}
      >
        <div className="flex justify-between items-start">
          <div>
            {data.logo && (
              <img src={data.logo} alt="Logo" className="h-10 w-auto object-contain mb-3 rounded bg-white/20 p-1" />
            )}
            <h1 className="text-3xl font-bold text-white tracking-tight">{label}</h1>
            <div className="flex gap-4 mt-2 text-xs text-white/70">
              <span>{data.documentNumber}</span>
              <span>{formatDate(data.issueDate)}</span>
            </div>
          </div>
          <div className="text-right text-white/80 text-xs space-y-0.5">
            {data.from.name && <div className="font-semibold text-white text-sm">{data.from.name}</div>}
            {data.from.email && <div>{data.from.email}</div>}
            {data.from.phone && <div>{data.from.phone}</div>}
            {data.from.address && <div className="whitespace-pre-line">{data.from.address}</div>}
          </div>
        </div>
      </div>

      {/* Due date badge + Bill To */}
      <div className="print-break-avoid flex justify-between items-start mb-8">
        <div>
          <div className="text-[10px] font-semibold uppercase tracking-wider mb-1" style={{ color: ac }}>Bill To</div>
          <div className="text-xs text-gray-600 space-y-0.5">
            {data.to.name && <div className="font-semibold text-sm text-gray-900">{data.to.name}</div>}
            {data.to.email && <div>{data.to.email}</div>}
            {data.to.phone && <div>{data.to.phone}</div>}
            {data.to.address && <div className="whitespace-pre-line">{data.to.address}</div>}
          </div>
        </div>
        <div className="text-right">
          <div className="text-xs text-gray-400">Due Date</div>
          <div className="text-sm font-semibold text-gray-900">{formatDate(data.dueDate)}</div>
        </div>
      </div>

      {/* Items */}
      <table className="w-full mb-6">
        <thead>
          <tr>
            <th className="text-left text-[10px] font-semibold uppercase tracking-wider py-2.5 px-3 rounded-l-lg w-8" style={{ backgroundColor: ac + '12', color: ac }}>#</th>
            <th className="text-left text-[10px] font-semibold uppercase tracking-wider py-2.5 px-3" style={{ backgroundColor: ac + '12', color: ac }}>Description</th>
            <th className="text-right text-[10px] font-semibold uppercase tracking-wider py-2.5 px-3 w-14" style={{ backgroundColor: ac + '12', color: ac }}>Qty</th>
            <th className="text-right text-[10px] font-semibold uppercase tracking-wider py-2.5 px-3 w-24" style={{ backgroundColor: ac + '12', color: ac }}>Rate</th>
            <th className="text-right text-[10px] font-semibold uppercase tracking-wider py-2.5 px-3 rounded-r-lg w-24" style={{ backgroundColor: ac + '12', color: ac }}>Amount</th>
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
        <div className="w-64 space-y-1.5">
          <div className="flex justify-between text-xs">
            <span className="text-gray-500">Subtotal</span>
            <span>{formatCurrency(totals.subtotal, data.currency)}</span>
          </div>
          {totals.discountAmount > 0 && (
            <div className="flex justify-between text-xs">
              <span className="text-gray-500">Discount</span>
              <span className="text-red-600">-{formatCurrency(totals.discountAmount, data.currency)}</span>
            </div>
          )}
          {totals.taxAmount > 0 && (
            <div className="flex justify-between text-xs">
              <span className="text-gray-500">Tax ({data.taxRate}%)</span>
              <span>{formatCurrency(totals.taxAmount, data.currency)}</span>
            </div>
          )}
          {data.shippingCost > 0 && (
            <div className="flex justify-between text-xs">
              <span className="text-gray-500">Shipping</span>
              <span>{formatCurrency(data.shippingCost, data.currency)}</span>
            </div>
          )}
          <div
            className="flex justify-between text-sm font-bold rounded-lg px-3 py-2 text-white"
            style={{ background: `linear-gradient(135deg, ${ac}, ${ac}cc)` }}
          >
            <span>Total</span>
            <span>{formatCurrency(totals.total, data.currency)}</span>
          </div>
        </div>
      </div>

      <DocumentFooter data={data} />
    </div>
  );
}
