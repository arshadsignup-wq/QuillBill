import { useState } from 'react';
import { Printer, Share2, Eye, Copy, Trash2 } from 'lucide-react';
import { useInvoiceContext } from '../../context/InvoiceContext';
import { usePrint } from '../../hooks/usePrint';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { clearDraft } from '../../lib/storage';
import { useToast } from '../ui/ToastProvider';
import Button from '../ui/Button';
import ShareDialog from './ShareDialog';
import ExportImportMenu from './ExportImportMenu';

interface ActionBarProps {
  onPreview?: () => void;
}

export default function ActionBar({ onPreview }: ActionBarProps) {
  const { data, dispatch } = useInvoiceContext();
  const print = usePrint();
  const [shareOpen, setShareOpen] = useState(false);
  const isMobile = !useMediaQuery('(min-width: 1024px)');
  const { toast } = useToast();

  const handleClearAll = () => {
    if (window.confirm('Clear all fields? This cannot be undone.')) {
      dispatch({ type: 'RESET' });
      clearDraft();
      toast('All fields cleared');
    }
  };

  return (
    <>
      {isMobile && (
        <Button variant="ghost" size="sm" onClick={onPreview}>
          <Eye size={16} />
          Preview
        </Button>
      )}
      {data.mode !== 'invoice' && (
        <Button
          variant="ghost"
          size="sm"
          onClick={() => dispatch({ type: 'DUPLICATE_AS_INVOICE' })}
        >
          <Copy size={16} />
          <span className="hidden sm:inline">As Invoice</span>
        </Button>
      )}
      <Button variant="ghost" size="sm" onClick={handleClearAll}>
        <Trash2 size={16} />
        <span className="hidden sm:inline">Clear All</span>
      </Button>
      <Button variant="ghost" size="sm" onClick={() => setShareOpen(true)}>
        <Share2 size={16} />
        <span className="hidden sm:inline">Share</span>
      </Button>
      <Button variant="primary" size="sm" onClick={print}>
        <Printer size={16} />
        <span className="hidden sm:inline">Download PDF</span>
      </Button>
      <ExportImportMenu />
      <ShareDialog open={shareOpen} onClose={() => setShareOpen(false)} />
    </>
  );
}
