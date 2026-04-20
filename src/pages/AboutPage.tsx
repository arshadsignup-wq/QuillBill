import { Link } from 'react-router-dom';
import { FileText, Shield, Zap, Share2, Palette, Globe } from 'lucide-react';
import StaticPageLayout from '../components/layout/StaticPageLayout';
import { useSEO } from '../hooks/useSEO';

const features = [
  {
    icon: Zap,
    title: 'Instant & Free',
    description: 'No sign-ups, no subscriptions, no watermarks. Start creating documents immediately.',
  },
  {
    icon: Shield,
    title: 'Privacy First',
    description: 'Everything runs in your browser. Your data never touches our servers.',
  },
  {
    icon: Share2,
    title: 'Shareable Links',
    description: 'Generate serverless links to share invoices. Data is encoded directly in the URL.',
  },
  {
    icon: Palette,
    title: '15 Templates',
    description: 'Choose from 15 professionally designed templates with customizable accent colors.',
  },
  {
    icon: FileText,
    title: 'Multiple Formats',
    description: 'Create invoices, quotations, and proposals — all from the same editor.',
  },
  {
    icon: Globe,
    title: 'Multi-Currency',
    description: 'Support for any currency. Generate documents for clients worldwide.',
  },
];

export default function AboutPage() {
  useSEO({
    title: 'About',
    description: 'Learn about QuillBill — a free, open-source, privacy-first invoice and quotation generator with no sign-up required.',
    canonical: '/about',
  });

  return (
    <StaticPageLayout>
      <div className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">About QuillBill</h1>

        <div className="space-y-6 text-gray-700 text-sm leading-relaxed">
          <p>
            QuillBill is a free, open-source invoice and quotation generator built for freelancers,
            small businesses, and anyone who needs to create professional documents without the
            hassle of subscriptions or account sign-ups.
          </p>

          <p>
            Unlike other invoice tools, QuillBill runs entirely in your browser. There's no backend,
            no database, and no tracking. Your data stays on your device — always. When you share a
            link, the document data is compressed and encoded directly into the URL, so nothing is
            ever stored on our servers.
          </p>
        </div>

        <h2 className="text-lg font-semibold text-gray-900 mt-10 mb-5">Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {features.map((f) => (
            <div key={f.title} className="rounded-lg border border-gray-200 bg-white p-4">
              <div className="flex items-center gap-2.5 mb-2">
                <f.icon size={18} className="text-brand flex-shrink-0" />
                <h3 className="font-medium text-gray-900 text-sm">{f.title}</h3>
              </div>
              <p className="text-xs text-gray-500 leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 space-y-6 text-gray-700 text-sm leading-relaxed">
          <h2 className="text-lg font-semibold text-gray-900 mb-2">Open Source</h2>
          <p>
            QuillBill is fully open source. You can view the code, report issues, or contribute on{' '}
            <a
              href="https://github.com/arshadsignup-wq/QuillBill"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand hover:underline"
            >
              GitHub
            </a>.
          </p>
        </div>

        <div className="mt-10 rounded-lg bg-brand/5 border border-brand/10 p-6 text-center">
          <p className="text-sm text-gray-700 mb-3">Ready to create your first document?</p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-lg bg-brand px-5 py-2.5 text-sm font-medium text-white hover:bg-brand-dark transition-colors"
          >
            <FileText size={16} />
            Open Editor
          </Link>
        </div>
      </div>
    </StaticPageLayout>
  );
}
