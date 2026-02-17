import { useInvoiceContext } from '../../context/InvoiceContext';
import type { ContactInfo } from '../../types/invoice';
import Input from '../ui/Input';
import Textarea from '../ui/Textarea';
import Card from '../ui/Card';

interface ContactCardProps {
  type: 'from' | 'to';
}

export default function ContactCard({ type }: ContactCardProps) {
  const { data, dispatch } = useInvoiceContext();
  const contact = data[type];
  const title = type === 'from' ? 'Bill From' : 'Bill To';
  const actionType = type === 'from' ? 'SET_FROM' : 'SET_TO';

  const update = (field: keyof ContactInfo, value: string) => {
    dispatch({ type: actionType, payload: { [field]: value } });
  };

  return (
    <Card title={title}>
      <div className="flex flex-col gap-3">
        <Input
          label="Name / Business"
          id={`${type}-name`}
          value={contact.name}
          onChange={(e) => update('name', e.target.value)}
          placeholder="Acme Corp"
        />
        <Input
          label="Email"
          id={`${type}-email`}
          type="email"
          value={contact.email}
          onChange={(e) => update('email', e.target.value)}
          placeholder="hello@acme.com"
        />
        <Input
          label="Phone"
          id={`${type}-phone`}
          type="tel"
          value={contact.phone}
          onChange={(e) => update('phone', e.target.value)}
          placeholder="+1 (555) 123-4567"
        />
        <Textarea
          label="Address"
          id={`${type}-address`}
          value={contact.address}
          onChange={(e) => update('address', e.target.value)}
          placeholder="123 Main St, City, State, ZIP"
          rows={2}
        />
      </div>
    </Card>
  );
}
