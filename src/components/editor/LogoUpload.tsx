import { useCallback, useRef } from 'react';
import { Upload, X } from 'lucide-react';
import { useInvoiceContext } from '../../context/InvoiceContext';

export default function LogoUpload() {
  const { data, dispatch } = useInvoiceContext();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFile = useCallback(
    (file: File) => {
      if (!file.type.startsWith('image/')) return;
      if (file.size > 500_000) return; // 500KB max
      const reader = new FileReader();
      reader.onload = () => {
        dispatch({ type: 'SET_LOGO', payload: reader.result as string });
      };
      reader.readAsDataURL(file);
    },
    [dispatch],
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
