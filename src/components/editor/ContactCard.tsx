import { useEffect, useState } from 'react';
import { BookmarkPlus, UserPlus, Users, Building2 } from 'lucide-react';
import { useInvoiceContext } from '../../context/InvoiceContext';
import type { ContactInfo } from '../../types/invoice';
import {
  loadProfile,
  saveProfile,
  listClients,
  saveClient,
  StorageFullError,
} from '../../lib/library';
import { ensurePersistentStorage } from '../../lib/persistence';
import { useToast } from '../ui/ToastProvider';
import Input from '../ui/Input';
import Textarea from '../ui/Textarea';
import Card from '../ui/Card';

interface ContactCardProps {
  type: 'from' | 'to';
}

const EMPTY = (c: ContactInfo) => !c.name.trim() && !c.email.trim() && !c.address.trim();

export default function ContactCard({ type }: ContactCardProps) {
  const { data, dispatch } = useInvoiceContext();
  const { toast } = useToast();
  const contact = data[type];
  const title = type === 'from' ? 'Bill From' : 'Bill To';
  const actionType = type === 'from' ? 'SET_FROM' : 'SET_TO';

  const [hasProfile, setHasProfile] = useState(false);
  const [clients, setClients] = useState<ContactInfo[]>([]);

  useEffect(() => {
    if (type === 'from') setHasProfile(loadProfile() !== null);
    else setClients(listClients());
  }, [type]);

  const update = (field: keyof ContactInfo, value: string) => {
    dispatch({ type: actionType, payload: { [field]: value } });
  };

  const guard = (fn: () => void, done: string) => {
    try {
      fn();
      toast(done);
      // Same reasoning as the document library: the user has just asked us to
      // remember something, so ask the browser to stop treating it as
      // disposable. Memoised, so repeated saves cost nothing.
      void ensurePersistentStorage();
    } catch (err) {
      toast(
        err instanceof StorageFullError
          ? 'Your browser storage is full.'
          : 'Could not save to this browser.',
        'error',
      );
    }
  };

  // Your own details and your regular clients are the fields most often
  // retyped, so both are one click away rather than one paste at a time.
  const rememberMe = () =>
    guard(() => {
      saveProfile({
        from: data.from,
        logo: data.logo,
        bankDetails: data.bankDetails,
        paymentTerms: data.paymentTerms,
      });
      setHasProfile(true);
    }, 'Saved as your business details');

  const applyMe = () => {
    const profile = loadProfile();
    if (!profile) return;
    dispatch({ type: 'APPLY_PROFILE', payload: profile });
    toast('Filled in your saved details');
  };

  const rememberClient = () =>
    guard(() => {
      saveClient(data.to);
      setClients(listClients());
    }, `Saved ${data.to.name.trim()} to your clients`);

  const pickClient = (name: string) => {
    const client = clients.find((c) => c.name === name);
    if (client) dispatch({ type: 'SET_TO', payload: client });
  };

  return (
    <Card title={title}>
      <div className="flex flex-col gap-3">
        {type === 'from' && (
          <div className="flex flex-wrap items-center gap-2">
            {hasProfile && (
              <button
                type="button"
                onClick={applyMe}
                className="flex items-center gap-1.5 rounded-lg border border-gray-300 bg-white px-2.5 py-1.5 text-xs font-medium text-gray-700 hover:bg-gray-50 transition-colors cursor-pointer"
              >
                <Building2 size={13} />
                Use my saved details
              </button>
            )}
            <button
              type="button"
              onClick={rememberMe}
              disabled={EMPTY(contact)}
              className="flex items-center gap-1.5 rounded-lg border border-gray-300 bg-white px-2.5 py-1.5 text-xs font-medium text-gray-700 hover:bg-gray-50 transition-colors cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <BookmarkPlus size={13} />
              {hasProfile ? 'Update my details' : 'Remember my details'}
            </button>
          </div>
        )}

        {type === 'to' && (
          <div className="flex flex-wrap items-center gap-2">
            {clients.length > 0 && (
              <label className="flex items-center gap-1.5 text-xs text-gray-600">
                <Users size={13} className="text-gray-400" />
                <span className="sr-only">Choose a saved client</span>
                <select
                  value=""
                  onChange={(e) => pickClient(e.target.value)}
                  className="rounded-lg border border-gray-300 bg-white px-2 py-1.5 text-xs text-gray-700 focus:border-brand focus:outline-none cursor-pointer"
                >
                  <option value="">Saved clients ({clients.length})</option>
                  {clients.map((c) => (
                    <option key={c.name} value={c.name}>
                      {c.name}
                    </option>
                  ))}
                </select>
              </label>
            )}
            <button
              type="button"
              onClick={rememberClient}
              disabled={!contact.name.trim()}
              className="flex items-center gap-1.5 rounded-lg border border-gray-300 bg-white px-2.5 py-1.5 text-xs font-medium text-gray-700 hover:bg-gray-50 transition-colors cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <UserPlus size={13} />
              Save this client
            </button>
          </div>
        )}

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
