import type { InvoiceData, CalculatedTotals } from '../../../types/invoice';
import { formatDate, formatCurrency } from '../../../lib/format';
import { getDocumentTitle } from '../../../lib/documentTitle';
import DocumentFooter from '../DocumentFooter';

interface TemplateProps {
  data: InvoiceData;
  totals: CalculatedTotals;
}

export default function SidebarTemplate({ data, totals }: TemplateProps) {
  const label = getDocumentTitle(data);
  const ac = data.accentColor;

  return (
    <div className="a4-page flex flex-col p-0" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
      <div className="flex min-h-[297mm]">
        {/* Left sidebar */}
        <div className="w-[65mm] flex-shrink-0 p-6 text-white flex flex-col" style={{ backgroundColor: ac }}>
          {data.logo && (
            <img src={data.logo} alt="Logo" className="h-10 w-auto object-contain self-start mb-4 rounded bg-white/20 p-1" />
          )}
          <h1 className="text-xl font-bold tracking-tight mb-1">{label}</h1>
          <div className="text-white/60 text-[10px] mb-6">{data.documentNumber}</div>

          <div className="mb-6">
            <div className="text-[9px] font-semibold uppercase tracking-wider text-white/50 mb-1.5">Date</div>
            <div className="text-xs text-white/80">{formatDate(data.issueDate)}</div>
          </div>
          <div className="mb-6">
            <div className="text-[9px] font-semibold uppercase tracking-wider text-white/50 mb-1.5">Due Date</div>
            <div className="text-xs text-white/80">{formatDate(data.dueDate)}</div>
          </div>

          <div className="mb-6">
            <div className="text-[9px] font-semibold uppercase tracking-wider text-white/50 mb-1.5">From</div>
            <div className="text-xs text-white/80 space-y-0.5">
              {data.from.name && <div className="font-semibold text-white">{data.from.name}</div>}
              {data.from.email && <div>{data.from.email}</div>}
              {data.from.phone && <div>{data.from.phone}</div>}
              {data.from.address && <div className="whitespace-pre-line">{data.from.address}</div>}
            </div>
          </div>

          <div className="mt-auto pt-4 border-t border-white/20">
            <div className="text-xl font-bold">{formatCurrency(totals.total, data.currency)}</div>
            <div className="text-[10px] text-white/50 uppercase tracking-wider">Total Due</div>
          </div>
        </div>

        {/* Right content */}
        <div className="flex-1 p-8 flex flex-col">
          {/* Bill To */}
          <div className="print-break-avoid mb-8">
            <div className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 mb-2">Bill To</div>
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
                <th className="text-left text-[10px] font-semibold uppercase tracking-wider py-2 w-6">#</th>
                <th className="text-left text-[10px] font-semibold uppercase tracking-wider py-2">Description</th>
                <th className="text-right text-[10px] font-semibold uppercase tracking-wider py-2 w-12">Qty</th>
                <th className="text-right text-[10px] font-semibold uppercase tracking-wider py-2 w-20">Rate</th>
                <th className="text-right text-[10px] font-semibold uppercase tracking-wider py-2 w-20">Amount</th>
              </tr>
            </thead>
            <tbody>
              {data.items.map((item, i) => {
                const itemTotal = totals.lineItems.find((li) => li.id === item.id)?.total ?? 0;
                return (
                  <tr key={item.id} className="border-b border-gray-100">
                    <td className="py-2 text-xs text-gray-400">{i + 1}</td>
                    <td className="py-2 text-xs text-gray-900">{item.description || '—'}</td>
                    <td className="py-2 text-xs text-gray-700 text-right">{item.quantity}</td>
                    <td className="py-2 text-xs text-gray-700 text-right">{formatCurrency(item.rate, data.currency)}</td>
                    <td className="py-2 text-xs text-gray-900 text-right font-medium">{formatCurrency(itemTotal, data.currency)}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          {/* Totals */}
          <div className="print-break-avoid flex justify-end mb-6">
            <div className="w-52 space-y-1">
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
              <div className="flex justify-between text-sm font-bold pt-2 mt-1 border-t-2" style={{ borderColor: ac }}>
                <span>Total</span>
                <span style={{ color: ac }}>{formatCurrency(totals.total, data.currency)}</span>
              </div>
            </div>
          </div>

          <div className="mt-auto">
            <DocumentFooter data={data} />
          </div>
        </div>
      </div>
    </div>
  );
}
