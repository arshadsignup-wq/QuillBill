import { Plus } from 'lucide-react';
import { useInvoiceContext } from '../../context/InvoiceContext';
import Card from '../ui/Card';
import Button from '../ui/Button';
import LineItemRow from './LineItemRow';

export default function LineItemsTable() {
  const { data, dispatch } = useInvoiceContext();

  return (
    <Card title="Line Items">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200 text-left">
              <th className="pb-2 pr-2 text-xs font-medium text-gray-500 w-8">#</th>
              <th className="pb-2 pr-2 text-xs font-medium text-gray-500">Description</th>
              <th className="pb-2 pr-2 text-xs font-medium text-gray-500 text-right w-20">Qty</th>
              <th className="pb-2 pr-2 text-xs font-medium text-gray-500 text-right w-28">Rate</th>
              <th className="pb-2 pr-2 text-xs font-medium text-gray-500 text-right w-28">Amount</th>
              <th className="pb-2 w-8"></th>
            </tr>
          </thead>
          <tbody>
            {data.items.map((item, i) => (
              <LineItemRow
                key={item.id}
                item={item}
                index={i}
                canDelete={data.items.length > 1}
              />
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-3 pt-3 border-t border-gray-100">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => dispatch({ type: 'ADD_ITEM' })}
        >
          <Plus size={14} />
          Add Item
        </Button>
      </div>
    </Card>
  );
}
