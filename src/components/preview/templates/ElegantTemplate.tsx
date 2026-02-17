import type { InvoiceData, CalculatedTotals } from '../../../types/invoice';
import { formatDate, formatCurrency } from '../../../lib/format';
import { getDocumentTitle } from '../../../lib/documentTitle';
import DocumentFooter from '../DocumentFooter';

interface TemplateProps {
  data: InvoiceData;
  totals: CalculatedTotals;
}

export default function ElegantTemplate({ data, totals }: TemplateProps) {
  const label = getDocumentTitle(data);
  const ac = data.accentColor;

  return (
    <div className="a4-page flex flex-col" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
      {/* Decorative top line */}
      <div className="-mt-[15mm] -mx-[15mm] h-1.5 mb-8" style={{ backgroundColor: ac }} />

      {/* Header */}
      <div className="print-break-avoid flex justify-between items-start mb-10">
        <div>
          {data.logo && (
            <img src={data.logo} alt="Logo" className="h-14 w-auto object-contain mb-3" />
          )}
          <h1 className="text-3xl font-light tracking-widest uppercase" style={{ color: ac }}>{label}</h1>
          <div className="mt-1 text-xs text-gray-400 tracking-wide">{data.documentNumber}</div>
        </div>
        <div className="text-right text-xs text-gray-500 space-y-1 pt-2">
          <div className="text-gray-700">
            <span className="italic">Issued</span>
            <div className="font-semibold text-gray-900 text-sm">{formatDate(data.issueDate)}</div>
          </div>
          <div className="text-gray-700">
            <span className="italic">Due</span>
            <div className="font-semibold text-gray-900 text-sm">{formatDate(data.dueDate)}</div>
          </div>
        </div>
      </div>

      {/* Parties */}
      <div className="print-break-avoid grid grid-cols-2 gap-12 mb-8">
        <div>
          <div className="text-[10px] italic tracking-wider mb-2 pb-1" style={{ color: ac, borderBottom: `1px solid ${ac}40` }}>From</div>
          <div className="text-xs text-gray-600 space-y-0.5">
            {data.from.name && <div className="font-bold text-sm text-gray-900">{data.from.name}</div>}
            {data.from.email && <div>{data.from.email}</div>}
            {data.from.phone && <div>{data.from.phone}</div>}
            {data.from.address && <div className="whitespace-pre-line">{data.from.address}</div>}
          </div>
        </div>
        <div>
          <div className="text-[10px] italic tracking-wider mb-2 pb-1" style={{ color: ac, borderBottom: `1px solid ${ac}40` }}>To</div>
          <div className="text-xs text-gray-600 space-y-0.5">
            {data.to.name && <div className="font-bold text-sm text-gray-900">{data.to.name}</div>}
            {data.to.email && <div>{data.to.email}</div>}
            {data.to.phone && <div>{data.to.phone}</div>}
            {data.to.address && <div className="whitespace-pre-line">{data.to.address}</div>}
          </div>
        </div>
      </div>

      {/* Items */}
      <table className="w-full mb-8">
        <thead>
          <tr style={{ borderBottom: `1px solid ${ac}` }}>
            <th className="text-left text-[10px] italic tracking-wider pb-2 w-8" style={{ color: ac }}>#</th>
            <th className="text-left text-[10px] italic tracking-wider pb-2" style={{ color: ac }}>Description</th>
            <th className="text-right text-[10px] italic tracking-wider pb-2 w-14" style={{ color: ac }}>Qty</th>
            <th className="text-right text-[10px] italic tracking-wider pb-2 w-24" style={{ color: ac }}>Rate</th>
            <th className="text-right text-[10px] italic tracking-wider pb-2 w-24" style={{ color: ac }}>Amount</th>
          </tr>
        </thead>
        <tbody>
          {data.items.map((item, i) => {
            const itemTotal = totals.lineItems.find((li) => li.id === item.id)?.total ?? 0;
            return (
              <tr key={item.id} className="border-b border-gray-100">
                <td className="py-2.5 text-xs text-gray-400">{i + 1}</td>
                <td className="py-2.5 text-xs text-gray-800">{item.description || '—'}</td>
                <td className="py-2.5 text-xs text-gray-600 text-right">{item.quantity}</td>
                <td className="py-2.5 text-xs text-gray-600 text-right">{formatCurrency(item.rate, data.currency)}</td>
                <td className="py-2.5 text-xs text-gray-900 text-right font-semibold">{formatCurrency(itemTotal, data.currency)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* Totals */}
      <div className="print-break-avoid flex justify-end mb-8">
        <div className="w-64 space-y-2">
          <div className="flex justify-between text-xs text-gray-500">
            <span className="italic">Subtotal</span>
            <span className="text-gray-800">{formatCurrency(totals.subtotal, data.currency)}</span>
          </div>
          {totals.discountAmount > 0 && (
            <div className="flex justify-between text-xs text-gray-500">
              <span className="italic">Discount</span>
              <span className="text-red-600">-{formatCurrency(totals.discountAmount, data.currency)}</span>
            </div>
          )}
          {totals.taxAmount > 0 && (
            <div className="flex justify-between text-xs text-gray-500">
              <span className="italic">Tax ({data.taxRate}%)</span>
              <span className="text-gray-800">{formatCurrency(totals.taxAmount, data.currency)}</span>
            </div>
          )}
          {data.shippingCost > 0 && (
            <div className="flex justify-between text-xs text-gray-500">
              <span className="italic">Shipping</span>
              <span className="text-gray-800">{formatCurrency(data.shippingCost, data.currency)}</span>
            </div>
          )}
          <div className="flex justify-between text-base font-bold pt-3 mt-1" style={{ borderTop: `1px solid ${ac}` }}>
            <span style={{ color: ac }}>Total Due</span>
            <span className="text-gray-900">{formatCurrency(totals.total, data.currency)}</span>
          </div>
        </div>
      </div>

      <DocumentFooter data={data} />
    </div>
  );
}
