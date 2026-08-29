import { useEffect, useState } from 'react';
import { Copy, Check, AlertTriangle, ImageOff } from 'lucide-react';
import { useInvoiceContext } from '../../context/InvoiceContext';
import { useShareLink } from '../../hooks/useShareLink';
import { hasEmbeddedImages, SHARE_WARN_BYTES } from '../../lib/codec';
import Dialog from '../ui/Dialog';

interface ShareDialogProps {
  open: boolean;
  onClose: () => void;
}

interface LinkRowProps {
  label: string;
  hint: string;
  url: string;
}

function LinkRow({ label, hint, url }: LinkRowProps) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div>
      <label className="text-xs font-medium text-gray-600 mb-2 block">{label}</label>
      <p className="text-xs text-gray-500 mb-2">{hint}</p>
      <div className="flex gap-2">
        <input
          readOnly
          value={url}
          className="flex-1 min-w-0 rounded-lg border border-gray-300 bg-gray-50 px-3 py-2 text-xs text-gray-700 truncate"
        />
        <button
          onClick={copy}
          className="flex-shrink-0 flex items-center gap-1.5 rounded-lg border border-gray-300 bg-white px-3 py-2 text-xs font-medium text-gray-700 hover:bg-gray-50 transition-colors cursor-pointer"
        >
          {copied ? <Check size={14} className="text-green-600" /> : <Copy size={14} />}
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
    </div>
  );
}

export default function ShareDialog({ open, onClose }: ShareDialogProps) {
  const { data } = useInvoiceContext();
  const { full, withoutImages } = useShareLink(data);

  // When the full link cannot work, the image-free one is offered instead. It
  // is pre-selected rather than merely suggested: the failure only shows up on
  // the recipient's screen, long after the sender has moved on.
  const [dropImages, setDropImages] = useState(false);
  useEffect(() => {
    if (open) setDropImages(full.tooLong);
  }, [open, full.tooLong]);

  const active = dropImages ? withoutImages : full;
  const canRecover = full.tooLong && hasEmbeddedImages(data) && !withoutImages.tooLong;
  const stuck = full.tooLong && (dropImages || !canRecover) && active.tooLong;

  return (
    <Dialog open={open} onClose={onClose} title="Share Document">
      <div className="space-y-5">
        {stuck && (
          <div className="flex items-start gap-2 rounded-lg bg-red-50 border border-red-200 p-3 text-xs text-red-800">
            <AlertTriangle size={16} className="flex-shrink-0 mt-0.5" />
            <div>
              <span className="font-medium">This document is too large to share by link ({active.sizeKB}KB).</span>{' '}
              The whole document travels inside the URL, and links this long are rejected before they
              reach the page. Shorten the notes, terms or line item descriptions — or use{' '}
              <span className="font-medium">More &rarr; Export JSON</span> and send the file instead.
            </div>
          </div>
        )}

        {full.tooLong && canRecover && (
          <div className="flex items-start gap-2 rounded-lg bg-amber-50 border border-amber-200 p-3 text-xs text-amber-800">
            <ImageOff size={16} className="flex-shrink-0 mt-0.5" />
            <div>
              <span className="font-medium">Your logo makes this link too long to work ({full.sizeKB}KB).</span>{' '}
              The link below leaves the logo out so it stays under the limit — the document is
              otherwise identical, and a PDF you export yourself still carries your branding.
              <label className="mt-2 flex items-center gap-2 font-medium cursor-pointer">
                <input
                  type="checkbox"
                  checked={dropImages}
                  onChange={(e) => setDropImages(e.target.checked)}
                  className="rounded border-amber-300"
                />
                Share without the logo ({withoutImages.sizeKB}KB)
              </label>
            </div>
          </div>
        )}

        {!full.tooLong && full.sizeBytes > SHARE_WARN_BYTES && (
          <div className="flex items-start gap-2 rounded-lg bg-amber-50 border border-amber-200 p-3 text-xs text-amber-800">
            <AlertTriangle size={16} className="flex-shrink-0 mt-0.5" />
            <div>
              <span className="font-medium">Long link ({full.sizeKB}KB).</span> It will work, but some
              chat apps and mail clients cut long URLs when they are pasted. Sending it as a proper
              hyperlink rather than raw text avoids that.
            </div>
          </div>
        )}

        <LinkRow
          label="View-Only Link"
          hint="Recipients can only view the document."
          url={active.viewUrl}
        />
        <LinkRow
          label="Editable Link"
          hint="Recipients can edit the document."
          url={active.editUrl}
        />

        <p className="text-[10px] text-gray-400 text-center">
          Data is encoded directly in the URL — no server involved.
        </p>
      </div>
    </Dialog>
  );
}
