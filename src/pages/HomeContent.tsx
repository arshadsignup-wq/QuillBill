import { Link } from 'react-router-dom';

/**
 * Crawlable content below the editor.
 *
 * The homepage is the app, so Google previously saw 57 words on the strongest
 * URL on the domain. This sits under the editor in the normal document flow —
 * it is real content for visitors who scroll, not hidden text.
 */

const USE_CASES = [
  {
    title: 'Freelancers and consultants',
    body: 'Bill clients without an accounting subscription. Add your logo, set your rate, export a PDF and send it. Nothing to install and no account to create.',
  },
  {
    title: 'Small businesses and trades',
    body: 'Quote a job, then invoice it once the work is done, from the same editor. Tax, discounts and shipping are calculated as you type.',
  },
  {
    title: 'Agencies and studios',
    body: 'Send proposals with scope of work, deliverables, timeline and signature blocks, then invoice against the accepted proposal.',
  },
  {
    title: 'Anyone sending a one-off bill',
    body: 'Selling something once, or invoicing a single client, does not warrant signing up for software. Fill it in, download it, close the tab.',
  },
];

const LINKS = [
  { href: '/invoice-generator', label: 'Invoice generator', desc: 'Create and export an invoice in seconds.' },
  { href: '/quotation-generator', label: 'Quotation generator', desc: 'Send a professional price quotation.' },
  { href: '/proposal-generator', label: 'Proposal generator', desc: 'Scope, deliverables, timeline and signing.' },
  { href: '/invoice-templates', label: 'Invoice templates', desc: 'All 15 printable invoice formats.' },
  { href: '/quotation-templates', label: 'Quotation templates', desc: 'All 15 price quote formats.' },
  { href: '/proposal-templates', label: 'Proposal templates', desc: 'All 15 business proposal formats.' },
  { href: '/guides', label: 'Invoicing guides', desc: 'Payment terms, chasing late payments and more.' },
  { href: '/how-to-create-an-invoice', label: 'How to create an invoice', desc: 'A step-by-step walkthrough.' },
];

export default function HomeContent() {
  return (
    <section className="no-print border-t border-gray-200 bg-white">
      <div className="max-w-4xl mx-auto px-4 py-14">
        <h2 className="text-xl font-bold text-gray-900">
          A free invoice generator with no sign-up
        </h2>
        <p className="mt-3 text-sm text-gray-600 leading-relaxed">
          Most free invoice tools are not really free. They ask for an email before showing you a
          PDF, stamp a watermark across the result, or cap you at five invoices before asking for a
          card. QuillBill does none of that. There is no account, no email, no trial timer and no
          watermark, and because there is no backend, your client names and rates never leave your
          device.
        </p>
        <p className="mt-3 text-sm text-gray-600 leading-relaxed">
          Create invoices, quotations and proposals from a single editor. Choose from 15 templates,
          set your own accent color, add your logo, and export a clean A4 or Letter PDF. Line
          totals, discounts, tax or VAT and shipping are all calculated as you type.
        </p>

        <h2 className="mt-10 text-xl font-bold text-gray-900">Who it is for</h2>
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          {USE_CASES.map((u) => (
            <div key={u.title} className="rounded-lg border border-gray-200 p-5">
              <h3 className="text-sm font-semibold text-gray-900">{u.title}</h3>
              <p className="mt-2 text-xs text-gray-600 leading-relaxed">{u.body}</p>
            </div>
          ))}
        </div>

        <h2 className="mt-10 text-xl font-bold text-gray-900">How it works</h2>
        <ol className="mt-4 space-y-3">
          {[
            'Fill in your business details, your client details and the line items. Your draft saves to your own browser as you go.',
            'Pick one of 15 templates and set an accent color to match your brand. Switching templates never changes your content.',
            'Export a PDF, or generate a shareable link that encodes the document into the URL itself rather than storing it on a server.',
          ].map((step, i) => (
            <li key={i} className="flex gap-3 text-sm text-gray-600 leading-relaxed">
              <span className="shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-brand text-white text-xs font-bold">
                {i + 1}
              </span>
              <span>{step}</span>
            </li>
          ))}
        </ol>

        <h2 className="mt-10 text-xl font-bold text-gray-900">Templates and guides</h2>
        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              to={l.href}
              className="rounded-lg border border-gray-200 p-4 hover:border-brand/40 transition-colors"
            >
              <span className="block text-sm font-semibold text-gray-900">{l.label}</span>
              <span className="block mt-1 text-xs text-gray-600">{l.desc}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
