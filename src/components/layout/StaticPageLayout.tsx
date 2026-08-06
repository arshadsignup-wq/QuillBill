import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { FileText } from 'lucide-react';

interface StaticPageLayoutProps {
  children: ReactNode;
}

/**
 * Grouped so every content page is reachable in one click from anywhere on the
 * site. A flat list had grown past ten links and left the guides and template
 * galleries with no site-wide internal links at all.
 */
const FOOTER_COLUMNS: { heading: string; links: { label: string; href: string }[] }[] = [
  {
    heading: 'Create',
    links: [
      { label: 'Invoice generator', href: '/invoice-generator' },
      { label: 'Quotation generator', href: '/quotation-generator' },
      { label: 'Proposal generator', href: '/proposal-generator' },
    ],
  },
  {
    heading: 'Templates',
    links: [
      { label: 'Invoice templates', href: '/invoice-templates' },
      { label: 'Quotation templates', href: '/quotation-templates' },
      { label: 'Proposal templates', href: '/proposal-templates' },
    ],
  },
  {
    heading: 'Guides',
    links: [
      { label: 'All guides', href: '/guides' },
      { label: 'How to create an invoice', href: '/how-to-create-an-invoice' },
      { label: 'Invoice payment terms', href: '/invoice-payment-terms' },
      { label: 'Chasing unpaid invoices', href: '/how-to-chase-an-unpaid-invoice' },
      { label: 'Freelance invoicing', href: '/freelance-invoicing-guide' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'FAQ', href: '/faq' },
      { label: 'Contact', href: '/contact' },
      { label: 'Privacy', href: '/privacy' },
      { label: 'Terms', href: '/terms' },
      { label: 'Disclaimer', href: '/disclaimer' },
      { label: 'DMCA', href: '/dmca' },
    ],
  },
];

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
        <div className="max-w-5xl mx-auto px-4 py-10">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {FOOTER_COLUMNS.map((col) => (
              <nav key={col.heading} aria-label={col.heading}>
                <h2 className="text-xs font-semibold uppercase tracking-wide text-gray-900">
                  {col.heading}
                </h2>
                <ul className="mt-3 space-y-2">
                  {col.links.map((l) => (
                    <li key={l.href}>
                      <Link to={l.href} className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>

          <div className="mt-10 pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-gray-400">
              <FileText size={16} />
              <span className="text-sm font-medium">QuillBill</span>
            </div>
            <p className="text-xs text-gray-400">
              &copy; {new Date().getFullYear()} QuillBill. Free and open source.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
