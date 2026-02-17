import type { InvoiceData, CalculatedTotals } from '../../../types/invoice';
import { formatDate, formatCurrency } from '../../../lib/format';
import { getDocumentTitle } from '../../../lib/documentTitle';
import DocumentFooter from '../DocumentFooter';

interface TemplateProps {
  data: InvoiceData;
  totals: CalculatedTotals;
}

export default function CleanTemplate({ data, totals }: TemplateProps) {
  const label = getDocumentTitle(data);
  const ac = data.accentColor;

  return (
    <div className="a4-page flex flex-col" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
      {/* Ultra-minimal header */}
      <div className="print-break-avoid mb-12">
        <div className="flex justify-between items-start">
          <div>
            {data.logo && (
              <img src={data.logo} alt="Logo" className="h-8 w-auto object-contain mb-6" />
            )}
            <div className="text-xs text-gray-400 uppercase tracking-[0.2em]">{label}</div>
          </div>
          <div className="text-right text-xs text-gray-400 space-y-1">
            <div>{data.documentNumber}</div>
            <div>{formatDate(data.issueDate)}</div>
          </div>
        </div>
      </div>

      {/* Parties — extra spacious */}
      <div className="print-break-avoid grid grid-cols-2 gap-16 mb-12">
        <div>
          <div className="text-xs text-gray-600 space-y-0.5">
            {data.from.name && <div className="text-sm text-gray-900">{data.from.name}</div>}
            {data.from.email && <div>{data.from.email}</div>}
            {data.from.phone && <div>{data.from.phone}</div>}
            {data.from.address && <div className="whitespace-pre-line">{data.from.address}</div>}
          </div>
        </div>
        <div>
          <div className="text-xs text-gray-400 mb-1">Billed to</div>
          <div className="text-xs text-gray-600 space-y-0.5">
            {data.to.name && <div className="text-sm text-gray-900">{data.to.name}</div>}
            {data.to.email && <div>{data.to.email}</div>}
            {data.to.phone && <div>{data.to.phone}</div>}
            {data.to.address && <div className="whitespace-pre-line">{data.to.address}</div>}
          </div>
          <div className="text-xs text-gray-400 mt-3">Due {formatDate(data.dueDate)}</div>
        </div>
      </div>

      {/* Items — borderless */}
      <table className="w-full mb-10">
        <thead>
          <tr className="border-b border-gray-200">
            <th className="text-left text-[10px] text-gray-400 pb-3">Description</th>
            <th className="text-right text-[10px] text-gray-400 pb-3 w-14">Qty</th>
            <th className="text-right text-[10px] text-gray-400 pb-3 w-24">Rate</th>
            <th className="text-right text-[10px] text-gray-400 pb-3 w-24">Amount</th>
          </tr>
        </thead>
        <tbody>
          {data.items.map((item) => {
            const itemTotal = totals.lineItems.find((li) => li.id === item.id)?.total ?? 0;
            return (
              <tr key={item.id}>
                <td className="py-3 text-xs text-gray-800">{item.description || '—'}</td>
                <td className="py-3 text-xs text-gray-500 text-right">{item.quantity}</td>
                <td className="py-3 text-xs text-gray-500 text-right">{formatCurrency(item.rate, data.currency)}</td>
                <td className="py-3 text-xs text-gray-800 text-right">{formatCurrency(itemTotal, data.currency)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* Totals */}
      <div className="print-break-avoid flex justify-end mb-8">
        <div className="w-56 space-y-2">
          {totals.discountAmount > 0 && (
            <div className="flex justify-between text-xs">
              <span className="text-gray-400">Discount</span>
              <span className="text-red-500">-{formatCurrency(totals.discountAmount, data.currency)}</span>
            </div>
          )}
          {totals.taxAmount > 0 && (
            <div className="flex justify-between text-xs">
              <span className="text-gray-400">Tax</span>
              <span className="text-gray-600">{formatCurrency(totals.taxAmount, data.currency)}</span>
            </div>
          )}
          {data.shippingCost > 0 && (
            <div className="flex justify-between text-xs">
              <span className="text-gray-400">Shipping</span>
              <span className="text-gray-600">{formatCurrency(data.shippingCost, data.currency)}</span>
            </div>
          )}
          <div className="flex justify-between pt-3 border-t border-gray-200">
            <span className="text-xs text-gray-400">Total</span>
            <span className="text-lg font-semibold" style={{ color: ac }}>{formatCurrency(totals.total, data.currency)}</span>
          </div>
        </div>
      </div>

      <DocumentFooter data={data} />
    </div>
  );
}
