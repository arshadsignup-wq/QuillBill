import { useInvoiceContext } from '../../context/InvoiceContext';
import Card from '../ui/Card';
import Textarea from '../ui/Textarea';

export default function NotesEditor() {
  const { data, dispatch } = useInvoiceContext();

  return (
    <Card title="Notes & Terms">
      <div className="flex flex-col gap-4">
        <Textarea
          label="Notes"
          id="notes"
          value={data.notes}
          onChange={(e) => dispatch({ type: 'SET_NOTES', payload: e.target.value })}
          placeholder="Thank you for your business!"
          rows={3}
        />
        <Textarea
          label="Payment Terms"
          id="payment-terms"
          value={data.paymentTerms}
          onChange={(e) => dispatch({ type: 'SET_PAYMENT_TERMS', payload: e.target.value })}
          placeholder="Payment due within 30 days of issue date."
          rows={2}
        />
      </div>
    </Card>
  );
}
