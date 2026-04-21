import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import StaticPageLayout from '../components/layout/StaticPageLayout';
import { useSEO } from '../hooks/useSEO';

const faqs = [
  {
    question: 'Is QuillBill really free?',
    answer:
      'Yes, QuillBill is 100% free with no hidden charges, no premium tiers, and no watermarks on your documents. You can create unlimited invoices, quotations, and proposals at no cost.',
  },
  {
    question: 'Do I need to create an account or log in?',
    answer:
      'No. QuillBill requires no sign-up, no login, and no email. Just open the website and start creating your document immediately.',
  },
  {
    question: 'Where is my data stored?',
    answer:
      "All your data stays in your browser's local storage. QuillBill has no backend servers or databases. Nothing is transmitted or stored externally unless you explicitly generate a shareable link.",
  },
  {
    question: 'How do shareable links work?',
    answer:
      'When you create a shareable link, your invoice data is compressed and encoded directly into the URL itself. No data is stored on any server. Anyone with the link can view (or edit, depending on the link type) the document.',
  },
  {
    question: 'How do I export my invoice as a PDF?',
    answer:
      'Click the "Export PDF" button in the editor. QuillBill uses your browser\'s built-in print functionality to generate a clean, professional PDF with proper A4 formatting and margins.',
  },
  {
    question: 'How many templates are available?',
    answer:
      'QuillBill offers 15 professionally designed templates including Minimal, Modern, Classic, Compact, Elegant, Bold, Stripe, Executive, Clean, Sidebar, Professional, Creative, Letterhead, Receipt, and Gradient. Each template supports custom accent colors.',
  },
  {
    question: 'Can I add my company logo?',
    answer:
      'Yes. You can upload your company logo in the editor. The logo is stored as a data URL in your browser and will appear on your invoice, quotation, or proposal.',
  },
  {
    question: 'Does QuillBill support taxes, discounts, and shipping?',
    answer:
      'Yes. You can add line-item discounts, apply a tax percentage, and include shipping costs. All totals are calculated automatically in real time.',
  },
  {
    question: 'Can I create quotations and proposals too?',
    answer:
      'Absolutely. QuillBill supports Invoice, Quotation, and Proposal document modes. Proposals include additional sections for scope of work, deliverables, and project timeline.',
  },
  {
    question: 'Is my data safe and private?',
    answer:
      'Yes. Since everything runs entirely in your browser with no server-side processing, your data never leaves your device unless you choose to share it. Read our privacy policy for full details.',
  },
];

export default function FAQPage() {
  useSEO({
    title: 'Frequently Asked Questions',
    description: 'Common questions about QuillBill — free invoice generator with no login, no watermarks, and complete data privacy.',
    canonical: '/faq',
  });

  // Inject FAQ JSON-LD structured data
  useEffect(() => {
    const jsonLd = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(jsonLd);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <StaticPageLayout>
      <div className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Frequently Asked Questions</h1>
        <p className="text-sm text-gray-400 mb-8">Everything you need to know about QuillBill</p>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg bg-white">
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between px-5 py-4 text-left text-gray-900 font-medium text-sm hover:bg-gray-50 transition-colors rounded-lg"
                aria-expanded={openIndex === index}
              >
                <span>{faq.question}</span>
                <ChevronDown
                  size={18}
                  className={`shrink-0 ml-3 text-gray-400 transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-5 pb-4 text-sm text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-10 text-center text-sm text-gray-500">
          <p>
            Still have questions? Reach out via our{' '}
            <Link to="/contact" className="text-brand hover:underline">contact page</Link>.
          </p>
        </div>
      </div>
    </StaticPageLayout>
  );
}
