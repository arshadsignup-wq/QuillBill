import { useEffect, useState } from 'react';
import { CheckCircle, AlertCircle, X } from 'lucide-react';

export interface ToastData {
  id: string;
  message: string;
  type: 'success' | 'error';
}

interface ToastProps {
  toast: ToastData;
  onDismiss: (id: string) => void;
}

export default function Toast({ toast, onDismiss }: ToastProps) {
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setExiting(true);
      setTimeout(() => onDismiss(toast.id), 200);
    }, 3000);
    return () => clearTimeout(timer);
  }, [toast.id, onDismiss]);

  const Icon = toast.type === 'success' ? CheckCircle : AlertCircle;
  const colors =
    toast.type === 'success'
      ? 'bg-green-50 text-green-800 border-green-200'
      : 'bg-red-50 text-red-800 border-red-200';

  return (
    <div
      className={`${exiting ? 'toast-exit' : 'toast-enter'} flex items-center gap-3 rounded-lg border px-4 py-3 shadow-lg ${colors}`}
    >
      <Icon size={18} />
      <span className="text-sm font-medium flex-1">{toast.message}</span>
      <button
        onClick={() => {
          setExiting(true);
          setTimeout(() => onDismiss(toast.id), 200);
        }}
        className="text-current opacity-50 hover:opacity-100 cursor-pointer"
      >
        <X size={14} />
      </button>
    </div>
  );
}
