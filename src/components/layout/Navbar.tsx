import { FileText } from 'lucide-react';
import type { ReactNode } from 'react';

interface NavbarProps {
  actions?: ReactNode;
}

export default function Navbar({ actions }: NavbarProps) {
  return (
    <header className="no-print h-14 border-b border-gray-200 bg-white flex items-center justify-between px-4 flex-shrink-0">
      <div className="flex items-center gap-2">
        <FileText size={22} className="text-brand" />
        <span className="text-lg font-bold text-gray-900 tracking-tight">QuillBill</span>
      </div>
      {actions && <div className="flex items-center gap-2">{actions}</div>}
    </header>
  );
}
