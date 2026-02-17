import type { InvoiceData, CalculatedTotals } from '../../../types/invoice';
import { formatDate, formatCurrency } from '../../../lib/format';
import { getDocumentTitle } from '../../../lib/documentTitle';
import DocumentFooter from '../DocumentFooter';

interface TemplateProps {
  data: InvoiceData;
  totals: CalculatedTotals;
}

export default function ExecutiveTemplate({ data, totals }: TemplateProps) {
  const label = getDocumentTitle(data);
  const ac = data.accentColor;

  return (
    <div className="a4-page flex flex-col" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
      {/* Dark header */}
      <div className="print-break-avoid -mx-[15mm] -mt-[15mm] px-[15mm] pt-[15mm] pb-6 mb-6 bg-gray-900">
        <div className="flex justify-between items-start">
          <div>
            {data.logo && (
              <img src={data.logo} alt="Logo" className="h-10 w-auto object-contain mb-3 rounded bg-white/10 p-1" />
            )}
            <h1 className="text-2xl font-semibold text-white tracking-tight">{label}</h1>
            <div className="text-gray-400 text-xs mt-1">{data.documentNumber}</div>
          </div>
          <div className="text-right">
            <div className="inline-block px-3 py-1.5 rounded text-xs font-semibold text-white" style={{ backgroundColor: ac }}>
              Due {formatDate(data.dueDate)}
            </div>
            <div className="text-gray-400 text-xs mt-2">{formatDate(data.issueDate)}</div>
          </div>
        </div>
      </div>

      {/* Parties */}
      <div className="print-break-avoid grid grid-cols-2 gap-8 mb-8">
        <div>
          <div className="text-[10px] font-medium uppercase tracking-wider text-gray-400 mb-2">From</div>
          <div className="text-xs text-gray-600 space-y-0.5">
            {data.from.name && <div className="font-semibold text-sm text-gray-900">{data.from.name}</div>}
            {data.from.email && <div>{data.from.email}</div>}
            {data.from.phone && <div>{data.from.phone}</div>}
            {data.from.address && <div className="whitespace-pre-line">{data.from.address}</div>}
          </div>
        </div>
        <div>
          <div className="text-[10px] font-medium uppercase tracking-wider text-gray-400 mb-2">Bill To</div>
          <div className="text-xs text-gray-600 space-y-0.5">
            {data.to.name && <div className="font-semibold text-sm text-gray-900">{data.to.name}</div>}
            {data.to.email && <div>{data.to.email}</div>}
            {data.to.phone && <div>{data.to.phone}</div>}
            {data.to.address && <div className="whitespace-pre-line">{data.to.address}</div>}
          </div>
        </div>
      </div>

      {/* Items */}
      <table className="w-full mb-6">
        <thead>
          <tr className="bg-gray-900 text-white">
            <th className="text-left text-[10px] font-medium uppercase tracking-wider py-2.5 px-3 rounded-l w-8">#</th>
            <th className="text-left text-[10px] font-medium uppercase tracking-wider py-2.5 px-3">Description</th>
            <th className="text-right text-[10px] font-medium uppercase tracking-wider py-2.5 px-3 w-14">Qty</th>
            <th className="text-right text-[10px] font-medium uppercase tracking-wider py-2.5 px-3 w-24">Rate</th>
            <th className="text-right text-[10px] font-medium uppercase tracking-wider py-2.5 px-3 rounded-r w-24">Amount</th>
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
          <div className="flex justify-between text-sm font-bold pt-2 mt-1 rounded-lg px-3 py-2 bg-gray-900 text-white">
            <span>Total</span>
            <span>{formatCurrency(totals.total, data.currency)}</span>
          </div>
        </div>
      </div>

      <DocumentFooter data={data} />
    </div>
  );
}
