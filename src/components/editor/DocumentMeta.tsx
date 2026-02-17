import { useInvoiceContext } from '../../context/InvoiceContext';
import { currencies } from '../../constants/currencies';
import Input from '../ui/Input';
import Select from '../ui/Select';
import Card from '../ui/Card';

export default function DocumentMeta() {
  const { data, dispatch } = useInvoiceContext();

  const defaultTitle = data.mode === 'invoice' ? 'Invoice' : 'Quotation';

  return (
    <Card title="Document Details">
      <div className="grid grid-cols-2 gap-4">
        <Input
          label="Document Title"
          id="doc-title"
          value={data.documentTitle}
          onChange={(e) =>
            dispatch({ type: 'SET_META', payload: { documentTitle: e.target.value } })
          }
          placeholder={defaultTitle}
        />
        <Input
          label="Document Number"
          id="doc-number"
          value={data.documentNumber}
          onChange={(e) =>
            dispatch({ type: 'SET_META', payload: { documentNumber: e.target.value } })
          }
          placeholder="INV-001"
        />
        <Select
          label="Currency"
          id="currency"
          value={data.currency}
          onChange={(e) =>
            dispatch({ type: 'SET_META', payload: { currency: e.target.value } })
          }
          options={currencies.map((c) => ({
            value: c.code,
            label: `${c.code} (${c.symbol})`,
          }))}
        />
        <Input
          label="Issue Date"
          id="issue-date"
          type="date"
          value={data.issueDate}
          onChange={(e) =>
            dispatch({ type: 'SET_META', payload: { issueDate: e.target.value } })
          }
        />
        <Input
          label="Due Date"
          id="due-date"
          type="date"
          value={data.dueDate}
          onChange={(e) =>
            dispatch({ type: 'SET_META', payload: { dueDate: e.target.value } })
          }
        />
      </div>
    </Card>
  );
}
