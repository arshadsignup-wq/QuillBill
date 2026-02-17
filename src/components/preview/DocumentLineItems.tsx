import type { InvoiceData, CalculatedTotals } from '../../types/invoice';
import { formatCurrency } from '../../lib/format';

interface DocumentLineItemsProps {
  data: InvoiceData;
  totals: CalculatedTotals;
  accentColor: string;
}

export default function DocumentLineItems({ data, totals, accentColor }: DocumentLineItemsProps) {
  return (
    <table className="w-full mb-6">
      <thead>
        <tr style={{ backgroundColor: accentColor + '10' }}>
          <th className="text-left text-[10px] font-semibold text-gray-600 uppercase tracking-wider py-2 px-3 w-8">#</th>
          <th className="text-left text-[10px] font-semibold text-gray-600 uppercase tracking-wider py-2 px-3">Description</th>
          <th className="text-right text-[10px] font-semibold text-gray-600 uppercase tracking-wider py-2 px-3 w-16">Qty</th>
          <th className="text-right text-[10px] font-semibold text-gray-600 uppercase tracking-wider py-2 px-3 w-24">Rate</th>
          <th className="text-right text-[10px] font-semibold text-gray-600 uppercase tracking-wider py-2 px-3 w-24">Amount</th>
        </tr>
      </thead>
      <tbody>
        {data.items.map((item, i) => {
          const itemTotal = totals.lineItems.find((li) => li.id === item.id)?.total ?? 0;
          return (
            <tr key={item.id} className="border-b border-gray-100">
              <td className="py-2 px-3 text-xs text-gray-400">{i + 1}</td>
              <td className="py-2 px-3 text-xs text-gray-900">{item.description || '—'}</td>
              <td className="py-2 px-3 text-xs text-gray-700 text-right">{item.quantity}</td>
              <td className="py-2 px-3 text-xs text-gray-700 text-right">{formatCurrency(item.rate, data.currency)}</td>
              <td className="py-2 px-3 text-xs text-gray-900 text-right font-medium">{formatCurrency(itemTotal, data.currency)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
