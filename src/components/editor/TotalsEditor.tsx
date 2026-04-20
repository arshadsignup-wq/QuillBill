import { useInvoiceContext } from '../../context/InvoiceContext';
import { formatCurrency } from '../../lib/format';
import Card from '../ui/Card';
import Input from '../ui/Input';
import Select from '../ui/Select';

export default function TotalsEditor() {
  const { data, dispatch, totals } = useInvoiceContext();

  return (
    <Card title="Totals">
      <div className="flex flex-col gap-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Select
            label="Discount Type"
            id="discount-type"
            value={data.discountType}
            onChange={(e) =>
              dispatch({
                type: 'SET_TOTALS',
                payload: { discountType: e.target.value as 'percentage' | 'fixed' },
              })
            }
            options={[
              { value: 'percentage', label: 'Percentage (%)' },
              { value: 'fixed', label: 'Fixed Amount' },
            ]}
          />
          <Input
            label={data.discountType === 'percentage' ? 'Discount (%)' : 'Discount Amount'}
            id="discount-value"
            type="number"
            min="0"
            step="0.01"
            value={data.discountValue || ''}
            onChange={(e) =>
              dispatch({
                type: 'SET_TOTALS',
                payload: { discountValue: parseFloat(e.target.value) || 0 },
              })
            }
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Input
            label="Tax Rate (%)"
            id="tax-rate"
            type="number"
            min="0"
            step="0.01"
            value={data.taxRate || ''}
            onChange={(e) =>
              dispatch({
                type: 'SET_TOTALS',
                payload: { taxRate: parseFloat(e.target.value) || 0 },
              })
            }
          />
          <Input
            label="Shipping"
            id="shipping"
            type="number"
            min="0"
            step="0.01"
            value={data.shippingCost || ''}
            onChange={(e) =>
              dispatch({
                type: 'SET_TOTALS',
                payload: { shippingCost: parseFloat(e.target.value) || 0 },
              })
            }
          />
        </div>

        <div className="border-t border-gray-200 pt-3 mt-1 space-y-1.5">
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Subtotal</span>
            <span className="text-gray-900">{formatCurrency(totals.subtotal, data.currency)}</span>
          </div>
          {totals.discountAmount > 0 && (
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Discount</span>
              <span className="text-red-600">-{formatCurrency(totals.discountAmount, data.currency)}</span>
            </div>
          )}
          {totals.taxAmount > 0 && (
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Tax ({data.taxRate}%)</span>
              <span className="text-gray-900">{formatCurrency(totals.taxAmount, data.currency)}</span>
            </div>
          )}
          {data.shippingCost > 0 && (
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Shipping</span>
              <span className="text-gray-900">{formatCurrency(data.shippingCost, data.currency)}</span>
            </div>
          )}
          <div className="flex justify-between text-base font-semibold pt-1.5 border-t border-gray-200">
            <span className="text-gray-900">Total</span>
            <span className="text-gray-900">{formatCurrency(totals.total, data.currency)}</span>
          </div>
        </div>
      </div>
    </Card>
  );
}
