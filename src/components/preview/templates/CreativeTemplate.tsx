import type { InvoiceData, CalculatedTotals } from '../../../types/invoice';
import { formatDate, formatCurrency } from '../../../lib/format';
import { getDocumentTitle } from '../../../lib/documentTitle';
import DocumentFooter from '../DocumentFooter';

interface TemplateProps {
  data: InvoiceData;
  totals: CalculatedTotals;
}

export default function CreativeTemplate({ data, totals }: TemplateProps) {
  const label = getDocumentTitle(data);
  const ac = data.accentColor;

  return (
    <div className="a4-page flex flex-col" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
      {/* Offset header blocks */}
      <div className="print-break-avoid mb-8">
        <div className="flex gap-4 items-end mb-4">
          {data.logo && (
            <img src={data.logo} alt="Logo" className="h-10 w-auto object-contain" />
          )}
          <div className="flex-1" />
          <div className="rounded-2xl px-5 py-3 text-white text-right" style={{ backgroundColor: ac }}>
            <div className="text-lg font-bold tracking-tight">{label}</div>
            <div className="text-white/70 text-[10px]">{data.documentNumber}</div>
          </div>
        </div>

        <div className="flex gap-3">
          <div className="rounded-xl px-4 py-2 text-xs" style={{ backgroundColor: ac + '10', color: ac }}>
            <span className="font-medium">Issued:</span> {formatDate(data.issueDate)}
          </div>
          <div className="rounded-xl px-4 py-2 text-xs" style={{ backgroundColor: ac + '10', color: ac }}>
            <span className="font-medium">Due:</span> {formatDate(data.dueDate)}
          </div>
        </div>
      </div>

      {/* Parties in pill cards */}
      <div className="print-break-avoid grid grid-cols-2 gap-4 mb-8">
        <div className="rounded-2xl p-4" style={{ backgroundColor: ac + '08' }}>
          <div className="text-[10px] font-bold uppercase tracking-wider mb-2" style={{ color: ac }}>From</div>
          <div className="text-xs text-gray-600 space-y-0.5">
            {data.from.name && <div className="font-semibold text-sm text-gray-900">{data.from.name}</div>}
            {data.from.email && <div>{data.from.email}</div>}
            {data.from.phone && <div>{data.from.phone}</div>}
            {data.from.address && <div className="whitespace-pre-line">{data.from.address}</div>}
          </div>
        </div>
        <div className="rounded-2xl p-4" style={{ backgroundColor: ac + '08' }}>
          <div className="text-[10px] font-bold uppercase tracking-wider mb-2" style={{ color: ac }}>To</div>
          <div className="text-xs text-gray-600 space-y-0.5">
            {data.to.name && <div className="font-semibold text-sm text-gray-900">{data.to.name}</div>}
            {data.to.email && <div>{data.to.email}</div>}
            {data.to.phone && <div>{data.to.phone}</div>}
            {data.to.address && <div className="whitespace-pre-line">{data.to.address}</div>}
          </div>
        </div>
      </div>

      {/* Items — rounded rows */}
      <div className="mb-6 space-y-1.5">
        <div className="grid grid-cols-[auto_1fr_60px_90px_90px] gap-2 px-3 text-[10px] font-semibold uppercase tracking-wider" style={{ color: ac }}>
          <span className="w-6">#</span>
          <span>Description</span>
          <span className="text-right">Qty</span>
          <span className="text-right">Rate</span>
          <span className="text-right">Amount</span>
        </div>
        {data.items.map((item, i) => {
          const itemTotal = totals.lineItems.find((li) => li.id === item.id)?.total ?? 0;
          return (
            <div key={item.id} className="grid grid-cols-[auto_1fr_60px_90px_90px] gap-2 rounded-xl px-3 py-2.5 text-xs" style={{ backgroundColor: i % 2 === 0 ? ac + '06' : 'transparent' }}>
              <span className="w-6 text-gray-400">{i + 1}</span>
              <span className="text-gray-900">{item.description || '—'}</span>
              <span className="text-gray-700 text-right">{item.quantity}</span>
              <span className="text-gray-700 text-right">{formatCurrency(item.rate, data.currency)}</span>
              <span className="text-gray-900 text-right font-medium">{formatCurrency(itemTotal, data.currency)}</span>
            </div>
          );
        })}
      </div>

      {/* Totals — pill style */}
      <div className="print-break-avoid flex justify-end mb-6">
        <div className="w-64 space-y-1.5">
          <div className="flex justify-between text-xs px-3 py-1">
            <span className="text-gray-500">Subtotal</span>
            <span>{formatCurrency(totals.subtotal, data.currency)}</span>
          </div>
          {totals.discountAmount > 0 && (
            <div className="flex justify-between text-xs px-3 py-1">
              <span className="text-gray-500">Discount</span>
              <span className="text-red-600">-{formatCurrency(totals.discountAmount, data.currency)}</span>
            </div>
          )}
          {totals.taxAmount > 0 && (
            <div className="flex justify-between text-xs px-3 py-1">
              <span className="text-gray-500">Tax ({data.taxRate}%)</span>
              <span>{formatCurrency(totals.taxAmount, data.currency)}</span>
            </div>
          )}
          {data.shippingCost > 0 && (
            <div className="flex justify-between text-xs px-3 py-1">
              <span className="text-gray-500">Shipping</span>
              <span>{formatCurrency(data.shippingCost, data.currency)}</span>
            </div>
          )}
          <div className="flex justify-between text-sm font-bold rounded-xl px-4 py-2.5 text-white" style={{ backgroundColor: ac }}>
            <span>Total</span>
            <span>{formatCurrency(totals.total, data.currency)}</span>
          </div>
        </div>
      </div>

      <DocumentFooter data={data} />
    </div>
  );
}
