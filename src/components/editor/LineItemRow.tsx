import { Trash2 } from 'lucide-react';
import { useInvoiceContext } from '../../context/InvoiceContext';
import type { LineItem } from '../../types/invoice';
import { formatCurrency } from '../../lib/format';

interface LineItemRowProps {
  item: LineItem;
  index: number;
  canDelete: boolean;
}

export default function LineItemRow({ item, index, canDelete }: LineItemRowProps) {
  const { data, dispatch, totals } = useInvoiceContext();

  const itemTotal = totals.lineItems.find((li) => li.id === item.id)?.total ?? 0;

  const update = (field: keyof LineItem, value: string | number) => {
    dispatch({ type: 'UPDATE_ITEM', payload: { id: item.id, field, value } });
  };

  return (
    <tr className="group border-b border-gray-100 last:border-0">
      <td className="py-2 pr-2 text-xs text-gray-400 w-8">{index + 1}</td>
      <td className="py-2 pr-2">
        <input
          value={item.description}
          onChange={(e) => update('description', e.target.value)}
          placeholder="Item description"
          className="w-full bg-transparent text-sm text-gray-900 placeholder:text-gray-400 outline-none focus:bg-gray-50 rounded px-1 py-0.5 -mx-1"
        />
      </td>
      <td className="py-2 pr-2 w-20">
        <input
          type="number"
          min="0"
          step="1"
          value={item.quantity || ''}
          onChange={(e) => update('quantity', parseFloat(e.target.value) || 0)}
          className="w-full bg-transparent text-sm text-gray-900 text-right outline-none focus:bg-gray-50 rounded px-1 py-0.5"
        />
      </td>
      <td className="py-2 pr-2 w-28">
        <input
          type="number"
          min="0"
          step="0.01"
          value={item.rate || ''}
          onChange={(e) => update('rate', parseFloat(e.target.value) || 0)}
          className="w-full bg-transparent text-sm text-gray-900 text-right outline-none focus:bg-gray-50 rounded px-1 py-0.5"
        />
      </td>
      <td className="py-2 pr-2 w-28 text-right text-sm text-gray-700">
        {formatCurrency(itemTotal, data.currency)}
      </td>
      <td className="py-2 w-8">
        {canDelete && (
          <button
            onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: item.id })}
            className="opacity-0 group-hover:opacity-100 text-gray-400 hover:text-red-500 transition-all p-1 rounded cursor-pointer"
          >
            <Trash2 size={14} />
          </button>
        )}
      </td>
    </tr>
  );
}
