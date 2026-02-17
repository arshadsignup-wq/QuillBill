import type { InvoiceData, CalculatedTotals } from '../../../types/invoice';
import { formatDate, formatCurrency } from '../../../lib/format';
import { getDocumentTitle } from '../../../lib/documentTitle';
import DocumentFooter from '../DocumentFooter';

interface TemplateProps {
  data: InvoiceData;
  totals: CalculatedTotals;
}

export default function LetterheadTemplate({ data, totals }: TemplateProps) {
  const label = getDocumentTitle(data);
  const ac = data.accentColor;

  return (
    <div className="a4-page flex flex-col" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
      {/* Top band */}
      <div className="print-break-avoid -mx-[15mm] -mt-[15mm] px-[15mm] mb-6">
        <div className="h-2" style={{ backgroundColor: ac }} />
        <div className="flex justify-between items-center py-4 border-b border-gray-200">
          <div className="flex items-center gap-3">
            {data.logo && (
              <img src={data.logo} alt="Logo" className="h-10 w-auto object-contain" />
            )}
            {data.from.name && <span className="text-base font-semibold text-gray-900">{data.from.name}</span>}
          </div>
          <div className="text-xs text-gray-500 text-right space-y-0.5">
            {data.from.email && <div>{data.from.email}</div>}
            {data.from.phone && <div>{data.from.phone}</div>}
            {data.from.address && <div>{data.from.address}</div>}
          </div>
        </div>
      </div>

      {/* Title + meta */}
      <div className="print-break-avoid flex justify-between items-start mb-8">
        <div>
          <h1 className="text-2xl font-bold" style={{ color: ac }}>{label}</h1>
          <div className="text-xs text-gray-400 mt-0.5">{data.documentNumber}</div>
        </div>
        <div className="text-right text-xs space-y-2">
          <div className="inline-block border border-gray-200 rounded-lg px-3 py-2 text-gray-600">
            <div className="font-medium text-gray-900">Issue: {formatDate(data.issueDate)}</div>
            <div className="font-medium text-gray-900">Due: {formatDate(data.dueDate)}</div>
          </div>
        </div>
      </div>

      {/* Bill To */}
      <div className="print-break-avoid mb-6 p-4 rounded-lg bg-gray-50">
        <div className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 mb-1">Bill To</div>
        <div className="text-xs text-gray-600 space-y-0.5">
          {data.to.name && <div className="font-semibold text-sm text-gray-900">{data.to.name}</div>}
          {data.to.email && <div>{data.to.email}</div>}
          {data.to.phone && <div>{data.to.phone}</div>}
          {data.to.address && <div className="whitespace-pre-line">{data.to.address}</div>}
        </div>
      </div>

      {/* Items */}
      <table className="w-full mb-6">
        <thead>
          <tr className="border-b-2" style={{ borderColor: ac }}>
            <th className="text-left text-[10px] font-semibold uppercase tracking-wider py-2 px-2 w-8">#</th>
            <th className="text-left text-[10px] font-semibold uppercase tracking-wider py-2 px-2">Description</th>
            <th className="text-right text-[10px] font-semibold uppercase tracking-wider py-2 px-2 w-14">Qty</th>
            <th className="text-right text-[10px] font-semibold uppercase tracking-wider py-2 px-2 w-24">Rate</th>
            <th className="text-right text-[10px] font-semibold uppercase tracking-wider py-2 px-2 w-24">Amount</th>
          </tr>
        </thead>
        <tbody>
          {data.items.map((item, i) => {
            const itemTotal = totals.lineItems.find((li) => li.id === item.id)?.total ?? 0;
            return (
              <tr key={item.id} className="border-b border-gray-100">
                <td className="py-2 px-2 text-xs text-gray-400">{i + 1}</td>
                <td className="py-2 px-2 text-xs text-gray-900">{item.description || '—'}</td>
                <td className="py-2 px-2 text-xs text-gray-700 text-right">{item.quantity}</td>
                <td className="py-2 px-2 text-xs text-gray-700 text-right">{formatCurrency(item.rate, data.currency)}</td>
                <td className="py-2 px-2 text-xs text-gray-900 text-right font-medium">{formatCurrency(itemTotal, data.currency)}</td>
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
          <div className="flex justify-between text-sm font-bold pt-2 mt-1 border-t-2" style={{ borderColor: ac, color: ac }}>
            <span>Total</span>
            <span>{formatCurrency(totals.total, data.currency)}</span>
          </div>
        </div>
      </div>

      <div className="flex-1" />
      <DocumentFooter data={data} />

      {/* Bottom band */}
      <div className="-mx-[15mm] -mb-[15mm] mt-6 h-2" style={{ backgroundColor: ac }} />
    </div>
  );
}
