import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { FileText } from 'lucide-react';

interface StaticPageLayoutProps {
  children: ReactNode;
}

export default function StaticPageLayout({ children }: StaticPageLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 h-14 flex items-center">
          <Link to="/" aria-label="QuillBill home" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <FileText size={22} className="text-brand" />
            <span className="text-lg font-bold text-gray-900 tracking-tight">QuillBill</span>
          </Link>
        </div>
      </header>

      <main className="flex-1">
        {children}
      </main>

      <footer className="border-t border-gray-200 bg-white">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-gray-400">
              <FileText size={16} />
              <span className="text-sm font-medium">QuillBill</span>
            </div>
            <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-gray-500">
              <Link to="/privacy" className="hover:text-gray-900 transition-colors">Privacy</Link>
              <Link to="/terms" className="hover:text-gray-900 transition-colors">Terms</Link>
              <Link to="/about" className="hover:text-gray-900 transition-colors">About</Link>
              <Link to="/contact" className="hover:text-gray-900 transition-colors">Contact</Link>
              <Link to="/disclaimer" className="hover:text-gray-900 transition-colors">Disclaimer</Link>
              <Link to="/faq" className="hover:text-gray-900 transition-colors">FAQ</Link>
              <Link to="/dmca" className="hover:text-gray-900 transition-colors">DMCA</Link>
              <Link to="/invoice-generator" className="hover:text-gray-900 transition-colors">Invoice Generator</Link>
              <Link to="/quotation-generator" className="hover:text-gray-900 transition-colors">Quotation Generator</Link>
              <Link to="/proposal-generator" className="hover:text-gray-900 transition-colors">Proposal Generator</Link>
            </nav>
          </div>
          <p className="text-center text-xs text-gray-400 mt-4">
            &copy; {new Date().getFullYear()} QuillBill. Free and open source.
          </p>
        </div>
      </footer>
    </div>
  );
}
