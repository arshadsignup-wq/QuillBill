import { useCallback, useRef } from 'react';
import { Upload, X } from 'lucide-react';
import { useInvoiceContext } from '../../context/InvoiceContext';
import { useToast } from '../ui/ToastProvider';

const MAX_LOGO_BYTES = 500_000;

export default function LogoUpload() {
  const { data, dispatch } = useInvoiceContext();
  const inputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const handleFile = useCallback(
    (file: File) => {
      // Both of these used to be bare `return`s, so picking a 600KB logo did
      // nothing at all and gave the user no way to work out why.
      if (!file.type.startsWith('image/')) {
        toast('That file is not an image. Use a PNG, JPG or SVG.', 'error');
        return;
      }
      if (file.size > MAX_LOGO_BYTES) {
        const kb = Math.round(file.size / 1024);
        toast(`Logo is ${kb}KB. The limit is 500KB — try a smaller or more compressed image.`, 'error');
        return;
      }
      const reader = new FileReader();
      reader.onload = () => {
        dispatch({ type: 'SET_LOGO', payload: reader.result as string });
      };
      reader.onerror = () => toast('Could not read that file.', 'error');
      reader.readAsDataURL(file);
    },
    [dispatch, toast],
  );

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      const file = e.dataTransfer.files[0];
      if (file) handleFile(file);
    },
    [handleFile],
  );

  if (data.logo) {
    return (
      <div className="relative inline-block">
        <img
          src={data.logo}
          alt="Logo"
          className="h-16 w-auto object-contain rounded-lg border border-gray-200"
        />
        <button
          onClick={() => dispatch({ type: 'SET_LOGO', payload: '' })}
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
      className="flex flex-col items-center justify-center gap-2 rounded-lg border-2 border-dashed border-gray-300 p-6 text-gray-400 hover:border-brand hover:text-brand transition-colors cursor-pointer"
    >
      <Upload size={20} />
      <span className="text-xs">Drop logo here or click to upload</span>
      <span className="text-[10px] text-gray-400">Max 500KB</span>
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
