import { useState } from 'react';
import { Copy, Check, AlertTriangle } from 'lucide-react';
import { useInvoiceContext } from '../../context/InvoiceContext';
import { useShareLink } from '../../hooks/useShareLink';
import Dialog from '../ui/Dialog';

interface ShareDialogProps {
  open: boolean;
  onClose: () => void;
}

export default function ShareDialog({ open, onClose }: ShareDialogProps) {
  const { data } = useInvoiceContext();
  const { viewUrl, editUrl, sizeKB } = useShareLink(data);
  const [copiedView, setCopiedView] = useState(false);
  const [copiedEdit, setCopiedEdit] = useState(false);

  const copyToClipboard = async (text: string, type: 'view' | 'edit') => {
    await navigator.clipboard.writeText(text);
    if (type === 'view') {
      setCopiedView(true);
      setTimeout(() => setCopiedView(false), 2000);
    } else {
      setCopiedEdit(true);
      setTimeout(() => setCopiedEdit(false), 2000);
    }
  };

  return (
    <Dialog open={open} onClose={onClose} title="Share Document">
      <div className="space-y-5">
        {sizeKB > 8 && (
          <div className="flex items-start gap-2 rounded-lg bg-amber-50 border border-amber-200 p-3 text-xs text-amber-800">
            <AlertTriangle size={16} className="flex-shrink-0 mt-0.5" />
            <div>
              <span className="font-medium">Large payload ({sizeKB}KB).</span> Some browsers may truncate URLs over 8KB.
              Consider removing the logo to reduce size.
            </div>
          </div>
        )}

        <div>
          <label className="text-xs font-medium text-gray-600 mb-2 block">View-Only Link</label>
          <p className="text-xs text-gray-500 mb-2">Recipients can only view the document.</p>
          <div className="flex gap-2">
            <input
              readOnly
              value={viewUrl}
              className="flex-1 rounded-lg border border-gray-300 bg-gray-50 px-3 py-2 text-xs text-gray-700 truncate"
            />
            <button
              onClick={() => copyToClipboard(viewUrl, 'view')}
              className="flex items-center gap-1.5 rounded-lg border border-gray-300 bg-white px-3 py-2 text-xs font-medium text-gray-700 hover:bg-gray-50 transition-colors cursor-pointer"
            >
              {copiedView ? <Check size={14} className="text-green-600" /> : <Copy size={14} />}
              {copiedView ? 'Copied!' : 'Copy'}
            </button>
          </div>
        </div>

        <div>
          <label className="text-xs font-medium text-gray-600 mb-2 block">Editable Link</label>
          <p className="text-xs text-gray-500 mb-2">Recipients can edit the document.</p>
          <div className="flex gap-2">
            <input
              readOnly
              value={editUrl}
              className="flex-1 rounded-lg border border-gray-300 bg-gray-50 px-3 py-2 text-xs text-gray-700 truncate"
            />
            <button
              onClick={() => copyToClipboard(editUrl, 'edit')}
              className="flex items-center gap-1.5 rounded-lg border border-gray-300 bg-white px-3 py-2 text-xs font-medium text-gray-700 hover:bg-gray-50 transition-colors cursor-pointer"
            >
              {copiedEdit ? <Check size={14} className="text-green-600" /> : <Copy size={14} />}
              {copiedEdit ? 'Copied!' : 'Copy'}
            </button>
          </div>
        </div>

        <p className="text-[10px] text-gray-400 text-center">
          Data is encoded directly in the URL — no server involved.
        </p>
      </div>
    </Dialog>
  );
}
