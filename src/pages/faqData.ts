import type { FAQItem } from './landing/landingData';

/** Site-wide FAQ, shared by /faq and its FAQPage structured data. */
export const siteFaqs: FAQItem[] = [
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
