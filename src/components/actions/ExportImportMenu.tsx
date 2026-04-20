import { useRef, useState } from 'react';
import { Download, Upload, RotateCcw, ChevronDown } from 'lucide-react';
import { useInvoiceContext } from '../../context/InvoiceContext';
import { exportJSON, importJSON } from '../../lib/export';
import { clearDraft } from '../../lib/storage';
import { useToast } from '../ui/ToastProvider';

export default function ExportImportMenu() {
  const { data, dispatch } = useInvoiceContext();
  const { toast } = useToast();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [open, setOpen] = useState(false);

  const handleExport = () => {
    exportJSON(data);
    toast('Exported as JSON');
    setOpen(false);
  };

  const handleImport = async (file: File) => {
    try {
      const imported = await importJSON(file);
      dispatch({ type: 'LOAD_DATA', payload: imported });
      toast('Document imported');
    } catch (err) {
      toast(err instanceof Error ? err.message : 'Import failed', 'error');
    }
    setOpen(false);
  };

  const handleReset = () => {
    if (window.confirm('Reset all fields? This cannot be undone.')) {
      dispatch({ type: 'RESET' });
      clearDraft();
      toast('Document reset');
    }
    setOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1 rounded-lg border border-gray-300 bg-white px-2.5 sm:px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors cursor-pointer"
      >
        <span className="hidden sm:inline">More</span>
        <ChevronDown size={14} />
      </button>
      {open && (
        <>
          <div className="fixed inset-0 z-10" onClick={() => setOpen(false)} />
          <div className="absolute right-0 top-full mt-1 z-20 w-48 rounded-lg border border-gray-200 bg-white shadow-lg py-1">
            <button
              onClick={handleExport}
              className="flex items-center gap-2 w-full px-3 py-2.5 text-sm text-gray-700 hover:bg-gray-50 active:bg-gray-100 cursor-pointer"
            >
              <Download size={14} />
              Export JSON
            </button>
            <button
              onClick={() => fileInputRef.current?.click()}
              className="flex items-center gap-2 w-full px-3 py-2.5 text-sm text-gray-700 hover:bg-gray-50 active:bg-gray-100 cursor-pointer"
            >
              <Upload size={14} />
              Import JSON
            </button>
            <hr className="my-1 border-gray-200" />
            <button
              onClick={handleReset}
              className="flex items-center gap-2 w-full px-3 py-2.5 text-sm text-red-600 hover:bg-red-50 active:bg-red-100 cursor-pointer"
            >
              <RotateCcw size={14} />
              Reset
            </button>
          </div>
        </>
      )}
      <input
        ref={fileInputRef}
        type="file"
        accept=".json"
        className="hidden"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) handleImport(file);
          e.target.value = '';
        }}
      />
    </div>
  );
}
