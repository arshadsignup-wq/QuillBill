import type { InvoiceData, CalculatedTotals } from '../../../types/invoice';
import { formatDate, formatCurrency } from '../../../lib/format';
import { getDocumentTitle } from '../../../lib/documentTitle';
import DocumentFooter from '../DocumentFooter';

interface TemplateProps {
  data: InvoiceData;
  totals: CalculatedTotals;
}

export default function BoldTemplate({ data, totals }: TemplateProps) {
  const label = getDocumentTitle(data);
  const ac = data.accentColor;

  return (
    <div className="a4-page flex flex-col" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
      {/* Giant title */}
      <div className="print-break-avoid mb-8">
        <div className="flex items-start justify-between mb-6">
          {data.logo && (
            <img src={data.logo} alt="Logo" className="h-12 w-auto object-contain" />
          )}
          <div className="text-right text-xs text-gray-500 space-y-0.5">
            <div className="font-mono">{data.documentNumber}</div>
            <div>{formatDate(data.issueDate)}</div>
            <div>Due {formatDate(data.dueDate)}</div>
          </div>
        </div>
        <h1 className="text-5xl font-black tracking-tighter leading-none" style={{ color: ac }}>
          {label}
        </h1>
        <div className="h-1 w-16 mt-3 rounded-full" style={{ backgroundColor: ac }} />
      </div>

      {/* Parties */}
      <div className="print-break-avoid grid grid-cols-2 gap-8 mb-8">
        <div>
          <div className="text-[10px] font-black uppercase tracking-widest mb-2" style={{ color: ac }}>From</div>
          <div className="text-xs text-gray-600 space-y-0.5">
            {data.from.name && <div className="text-base font-bold text-gray-900">{data.from.name}</div>}
            {data.from.email && <div>{data.from.email}</div>}
            {data.from.phone && <div>{data.from.phone}</div>}
            {data.from.address && <div className="whitespace-pre-line">{data.from.address}</div>}
          </div>
        </div>
        <div>
          <div className="text-[10px] font-black uppercase tracking-widest mb-2" style={{ color: ac }}>To</div>
          <div className="text-xs text-gray-600 space-y-0.5">
            {data.to.name && <div className="text-base font-bold text-gray-900">{data.to.name}</div>}
            {data.to.email && <div>{data.to.email}</div>}
            {data.to.phone && <div>{data.to.phone}</div>}
            {data.to.address && <div className="whitespace-pre-line">{data.to.address}</div>}
          </div>
        </div>
      </div>

      {/* Items */}
      <table className="w-full mb-6">
        <thead>
          <tr className="border-b-2 border-gray-900">
            <th className="text-left text-[10px] font-black uppercase tracking-wider py-2 w-8">#</th>
            <th className="text-left text-[10px] font-black uppercase tracking-wider py-2">Description</th>
            <th className="text-right text-[10px] font-black uppercase tracking-wider py-2 w-14">Qty</th>
            <th className="text-right text-[10px] font-black uppercase tracking-wider py-2 w-24">Rate</th>
            <th className="text-right text-[10px] font-black uppercase tracking-wider py-2 w-24">Amount</th>
          </tr>
        </thead>
        <tbody>
          {data.items.map((item, i) => {
            const itemTotal = totals.lineItems.find((li) => li.id === item.id)?.total ?? 0;
            return (
              <tr key={item.id} className="border-b border-gray-200">
                <td className="py-2.5 text-xs text-gray-400 font-mono">{i + 1}</td>
                <td className="py-2.5 text-xs text-gray-900 font-medium">{item.description || '—'}</td>
                <td className="py-2.5 text-xs text-gray-700 text-right">{item.quantity}</td>
                <td className="py-2.5 text-xs text-gray-700 text-right">{formatCurrency(item.rate, data.currency)}</td>
                <td className="py-2.5 text-xs text-gray-900 text-right font-bold">{formatCurrency(itemTotal, data.currency)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* Totals */}
      <div className="print-break-avoid flex justify-end mb-6">
        <div className="w-64 space-y-1">
          <div className="flex justify-between text-xs py-0.5">
            <span className="text-gray-500">Subtotal</span>
            <span className="font-medium">{formatCurrency(totals.subtotal, data.currency)}</span>
          </div>
          {totals.discountAmount > 0 && (
            <div className="flex justify-between text-xs py-0.5">
              <span className="text-gray-500">Discount</span>
              <span className="text-red-600 font-medium">-{formatCurrency(totals.discountAmount, data.currency)}</span>
            </div>
          )}
          {totals.taxAmount > 0 && (
            <div className="flex justify-between text-xs py-0.5">
              <span className="text-gray-500">Tax ({data.taxRate}%)</span>
              <span className="font-medium">{formatCurrency(totals.taxAmount, data.currency)}</span>
            </div>
          )}
          {data.shippingCost > 0 && (
            <div className="flex justify-between text-xs py-0.5">
              <span className="text-gray-500">Shipping</span>
              <span className="font-medium">{formatCurrency(data.shippingCost, data.currency)}</span>
            </div>
          )}
          <div className="flex justify-between text-xl font-black pt-2 mt-1 border-t-2 border-gray-900">
            <span>Total</span>
            <span style={{ color: ac }}>{formatCurrency(totals.total, data.currency)}</span>
          </div>
        </div>
      </div>

      <DocumentFooter data={data} />
    </div>
  );
}
