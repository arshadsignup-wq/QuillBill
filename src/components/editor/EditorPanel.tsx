import { useCallback, useRef } from 'react';
import { Upload, X } from 'lucide-react';
import ModeToggle from './ModeToggle';
import DocumentMeta from './DocumentMeta';
import ContactCard from './ContactCard';
import LineItemsTable from './LineItemsTable';
import TotalsEditor from './TotalsEditor';
import NotesEditor from './NotesEditor';
import BrandingEditor from './BrandingEditor';
import ProposalEditor from './ProposalEditor';
import Card from '../ui/Card';
import Input from '../ui/Input';
import { useInvoiceContext } from '../../context/InvoiceContext';
import type { InvoiceAction } from '../../hooks/useInvoice';

function SignatureImageUpload({
  value,
  actionType,
  dispatch,
}: {
  value: string;
  actionType: 'SET_CLIENT_SIGNATURE_IMAGE' | 'SET_AUTHORIZED_SIGNATURE_IMAGE';
  dispatch: React.Dispatch<InvoiceAction>;
}) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFile = useCallback(
    (file: File) => {
      if (!file.type.startsWith('image/')) return;
      if (file.size > 500_000) return;
      const reader = new FileReader();
      reader.onload = () => {
        dispatch({ type: actionType, payload: reader.result as string });
      };
      reader.readAsDataURL(file);
    },
    [dispatch, actionType],
  );

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      const file = e.dataTransfer.files[0];
      if (file) handleFile(file);
    },
    [handleFile],
  );

  if (value) {
    return (
      <div className="relative inline-block">
        <img
          src={value}
          alt="Signature"
          className="h-10 w-auto object-contain rounded border border-gray-200"
        />
        <button
          onClick={() => dispatch({ type: actionType, payload: '' })}
          className="absolute -top-2.5 -right-2.5 rounded-full bg-gray-900 text-white p-1 hover:bg-red-600 transition-colors cursor-pointer"
        >
          <X size={14} />
        </button>
      </div>
    );
  }

  return (
    <div
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDrop}
      onClick={() => inputRef.current?.click()}
      className="flex items-center justify-center gap-2 rounded-lg border-2 border-dashed border-gray-300 p-3 text-gray-400 hover:border-brand hover:text-brand transition-colors cursor-pointer"
    >
      <Upload size={14} />
      <span className="text-xs">Upload signature image</span>
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) handleFile(file);
        }}
      />
    </div>
  );
}

export default function EditorPanel() {
  const { data, dispatch } = useInvoiceContext();

  return (
    <div className="flex flex-col gap-4 p-4 sm:gap-5 sm:p-5 overflow-y-auto custom-scrollbar h-full">
      <div className="flex items-center justify-between">
        <ModeToggle />
      </div>
      <DocumentMeta />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <ContactCard type="from" />
        <ContactCard type="to" />
      </div>
      {data.mode === 'proposal' && <ProposalEditor />}
      <LineItemsTable />
      {data.mode !== 'proposal' && <TotalsEditor />}
      <NotesEditor />
      {data.mode === 'proposal' && (
        <Card title="Signatures">
          <div className="space-y-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <Input
                label="Client Signer Name"
                id="client-signature-name"
                value={data.clientSignatureName}
                onChange={(e) => dispatch({ type: 'SET_CLIENT_SIGNATURE_NAME', payload: e.target.value })}
                placeholder="Client name"
              />
              <Input
                label="Client Signature Date"
                id="client-signature-date"
                type="date"
                value={data.clientSignatureDate}
                onChange={(e) => dispatch({ type: 'SET_CLIENT_SIGNATURE_DATE', payload: e.target.value })}
              />
            </div>
            <div>
              <label className="text-xs font-medium text-gray-600 mb-1.5 block">Client Signature Image</label>
              <SignatureImageUpload
                value={data.clientSignatureImage}
                actionType="SET_CLIENT_SIGNATURE_IMAGE"
                dispatch={dispatch}
              />
            </div>
            <hr className="border-gray-200" />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <Input
                label="Authorized Signer Name"
                id="authorized-signature-name"
                value={data.authorizedSignatureName}
                onChange={(e) => dispatch({ type: 'SET_AUTHORIZED_SIGNATURE_NAME', payload: e.target.value })}
                placeholder="Your name"
              />
              <Input
                label="Authorized Signature Date"
                id="authorized-signature-date"
                type="date"
                value={data.authorizedSignatureDate}
                onChange={(e) => dispatch({ type: 'SET_AUTHORIZED_SIGNATURE_DATE', payload: e.target.value })}
              />
            </div>
            <div>
              <label className="text-xs font-medium text-gray-600 mb-1.5 block">Authorized Signature Image</label>
              <SignatureImageUpload
                value={data.authorizedSignatureImage}
                actionType="SET_AUTHORIZED_SIGNATURE_IMAGE"
                dispatch={dispatch}
              />
            </div>
          </div>
        </Card>
      )}
      <BrandingEditor />
    </div>
  );
}
