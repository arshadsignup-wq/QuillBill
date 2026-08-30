import type { GuideConfig } from './types';

/**
 * Brand-modified comparison pages.
 *
 * These deliberately do not quote free-tier invoice counts or prices. Research
 * for them turned up conflicting figures across secondary sources — Zoho's
 * annual invoice allowance was reported as both 500 and 1,000 on pages
 * published within months of each other — and a wrong number about a named
 * company on someone else's domain is worse than no number.
 *
 * What they compare instead is structural and durable: whether an account is
 * required, where the document data lives, and what each tool is actually for.
 * Current limits are linked to the vendor's own pricing page, which is the
 * only source that stays correct. Same approach as
 * /invoice-generator-alternatives.
 */

export const zohoInvoiceAlternativeGuide: GuideConfig = {
  slug: 'zoho-invoice-alternative',
  cluster: 'Tools',
  published: '2026-08-30',
  updated: '2026-08-30',
  summary:
    'Where a hosted invoicing account is the right answer, where a browser-only generator is, and how to tell which you need.',
  keyTakeaways: [
    'Zoho Invoice is an account-based product; the tradeoff is sync and tracking against sign-up and hosted data.',
    'A browser-only generator wins when you need one document now and nothing to manage afterwards.',
    'If you need payment tracking, reminders and a client portal, you want the hosted product.',
    'Check the current free-tier limits on the vendor\'s pricing page — published figures disagree.',
  ],
  seo: {
    title: 'Zoho Invoice Alternative | No Sign-Up Invoice Generator',
    description:
      'How a browser-based invoice generator compares to Zoho Invoice: sign-up, where your data lives, payment tracking, and which one actually fits your situation.',
    canonical: '/zoho-invoice-alternative',
  },
  h1: 'Zoho Invoice Alternative: When You Need an Account and When You Do Not',
  intro:
    'Zoho Invoice is a hosted invoicing product with an account, a database and a free tier. QuillBill is a generator that runs in your browser and stores nothing on a server. Those are different products solving overlapping problems, and the honest comparison is about which problem you actually have.',
  sections: [
    {
      heading: 'The structural difference',
      body: [
        'Zoho Invoice keeps your invoices, clients and payment records in an account on their infrastructure. That is what makes the useful parts possible: the same data on your phone and your laptop, automatic payment reminders, a client portal, reports on what is outstanding, and a path into their wider accounting suite.',
        'QuillBill has no account and no server-side storage. Documents are generated in the browser and saved to that browser, and share links carry the document inside the URL rather than pointing at a record. That removes the sign-up and the hosted copy, and it removes sync and tracking with them. Neither approach is better in the abstract; they trade the same thing in opposite directions.',
      ],
      table: {
        head: ['', 'Hosted product (Zoho Invoice)', 'Browser generator (QuillBill)'],
        rows: [
          ['Sign-up', 'Account required', 'None'],
          ['Where documents live', 'Vendor infrastructure', 'Your browser'],
          ['Across devices', 'Synced', 'Per browser, or export the file'],
          ['Payment tracking', 'Yes', 'No'],
          ['Reminders and client portal', 'Yes', 'No'],
          ['Accounting integration', 'Yes, within their suite', 'No'],
          ['Usage limits', 'Free tier is bounded', 'None'],
        ],
      },
    },
    {
      heading: 'When the hosted product is the right answer',
      body: [
        'If you invoice the same clients every month, need to know at a glance what is unpaid, want reminders going out without you writing them, or want invoicing to feed your books, you want an account-based product. QuillBill does none of that and is not trying to.',
        'The same applies if more than one person issues invoices, or if you work across a desktop and a phone and expect the same list in both. Browser-local storage genuinely does not solve that, and pretending otherwise would waste your time.',
      ],
    },
    {
      heading: 'When a generator is the right answer',
      body: [
        'If you need a professional invoice in the next five minutes and have no interest in managing anything afterwards, an account is pure overhead. That covers a surprising amount of real invoicing: occasional freelance work, a one-off piece of consulting, a side business that bills four times a year.',
        'It also covers the situation where you object to the data trade specifically — client names, addresses and amounts being stored on someone else\'s system in exchange for a free tier. If that is your reason, a browser-only tool answers it directly and no free tier of a hosted product will.',
      ],
    },
    {
      heading: 'On the free tier figures',
      body: [
        'This page does not quote Zoho\'s invoice allowance, and that is deliberate. Checking secondary sources in August 2026 produced conflicting numbers, published months apart, for the same plan.',
        'Free-tier terms in this category change frequently and the articles citing them do not. [Zoho\'s own pricing page](https://www.zoho.com/us/invoice/pricing/) is the only figure worth acting on, and where a vendor\'s marketing page and pricing page disagree, the pricing page and the terms of service are what you are held to.',
      ],
    },
  ],
  answersHeading: 'Choosing between them: common questions',
  answers: [
    {
      question: 'What is a good free alternative to Zoho Invoice?',
      answer:
        'It depends what you are replacing. For generating documents without an account, a browser-based generator works. For payment tracking, reminders and a client portal, you need another hosted product — a generator will not cover those.',
    },
    {
      question: 'Do I need an account to create an invoice?',
      answer:
        'Not to produce the document. Accounts exist to store and track invoices across devices and over time. If you only need the PDF, an account is overhead; if you need to know what is outstanding, it is the point.',
    },
    {
      question: 'Is it safe to put client details into a free invoicing tool?',
      answer:
        'It depends where the data goes. Hosted products store it on their infrastructure under their privacy policy, which is a reasonable trade many businesses accept. A browser-only tool avoids the question by never transmitting it.',
    },
    {
      question: 'Can I move my invoices out of a hosted invoicing product?',
      answer:
        'Usually yes, via an export, and it is worth checking the export format before you commit rather than after. Data you cannot get out in a usable shape is data you do not really control.',
    },
  ],
  faqs: [
    {
      question: 'Does QuillBill do recurring invoices?',
      answer: 'No. Recurring billing needs stored records and a scheduler, which means an account-based product.',
    },
    {
      question: 'Can I keep using both?',
      answer:
        'Plenty of people do — a hosted product for regular clients and a generator for one-off work that does not warrant setting up a record.',
    },
  ],
  sources: [
    { label: 'Zoho Invoice pricing', publisher: 'Zoho', url: 'https://www.zoho.com/us/invoice/pricing/' },
  ],
  ctaHeading: 'Try the no-account version',
  ctaText: 'Create an Invoice Free',
  ctaLink: '/?mode=invoice',
  crossLinks: [
    { title: 'Invoice Generator Alternatives', description: 'The wider comparison, including Wise and Refrens.', href: '/invoice-generator-alternatives' },
    { title: 'Free Invoice Software', description: 'What "free" actually costs in this category.', href: '/free-invoice-software' },
    { title: 'Wave Invoicing Alternative', description: 'The same comparison against Wave.', href: '/wave-invoicing-alternative' },
  ],
};

export const waveInvoicingAlternativeGuide: GuideConfig = {
  slug: 'wave-invoicing-alternative',
  cluster: 'Tools',
  published: '2026-08-30',
  updated: '2026-08-30',
  summary:
    'Wave bundles invoicing with accounting and payments. What that gets you, what it costs you, and when you need none of it.',
  keyTakeaways: [
    'Wave\'s invoicing sits inside an accounting product — the bookkeeping is the point.',
    'Payment processing is where bundled products make their money, and it is priced per transaction.',
    'A generator produces the document and nothing else, which is sometimes exactly right.',
    'Verify current pricing and availability on Wave\'s own page; both have changed before.',
  ],
  seo: {
    title: 'Wave Invoicing Alternative | Invoice Without an Account',
    description:
      'How a browser-based invoice generator compares to Wave: bundled accounting and payments versus a document with no account, and which one you actually need.',
    canonical: '/wave-invoicing-alternative',
  },
  h1: 'Wave Invoicing Alternative: Bundled Accounting or Just the Document',
  intro:
    'Wave is an accounting product that includes invoicing, with card and bank payment processing alongside it. Comparing it to a browser-based invoice generator is really a question about how much software you want between you and a PDF.',
  sections: [
    {
      heading: 'What bundling buys and what it costs',
      body: [
        'The argument for a bundled product is real. An invoice that already exists in your bookkeeping does not need re-entering, payments reconcile against it automatically, and at tax time the numbers are already in one place. If you are running a business that needs books, that integration is worth more than the invoice itself.',
        'The cost is that you are adopting an accounting system, with the setup, the account, the learning and the hosted data that implies. For someone issuing a handful of invoices a year, that is a lot of product for one document.',
      ],
    },
    {
      heading: 'Where the money is',
      body: [
        'Products that offer free invoicing alongside payment processing generally make their money on the processing, charged as a percentage of each payment plus a fixed fee. That is a normal and transparent model — but it means "free invoicing" and "free to get paid" are different claims, and only the first one is usually being made.',
        'If most of your clients pay by bank transfer, processing fees may never apply to you and the bundled product is genuinely free at the point of use. If you want clients paying by card from the invoice, price that in per transaction on the volume you actually expect.',
      ],
    },
    {
      heading: 'When you do not need any of it',
      body: [
        'A generator does one thing: it produces the document. No account, no books, no processing, nothing stored on a server. For occasional invoicing, or for someone whose accounting already happens elsewhere, that is not a reduced version of a bundled product — it is the whole requirement.',
        'It is also the answer when your accountant already handles the books. Adopting a second accounting system so you can send an invoice is a strange trade, and it is one people make surprisingly often because the invoicing was the thing they searched for.',
      ],
      table: {
        head: ['', 'Bundled product (Wave)', 'Browser generator (QuillBill)'],
        rows: [
          ['Sign-up', 'Account required', 'None'],
          ['Bookkeeping', 'Built in', 'Not included'],
          ['Take card payments', 'Yes, per-transaction fees', 'No'],
          ['Where documents live', 'Vendor infrastructure', 'Your browser'],
          ['Reconciliation', 'Automatic', 'Manual, elsewhere'],
          ['Setup effort', 'Meaningful', 'None'],
        ],
      },
    },
    {
      heading: 'Checking the current position',
      body: [
        'Pricing, regional availability and which features sit behind a paid tier have all moved in this category before, and Wave is no exception. Anything this page said about specific figures would be stale before you read it.',
        '[Wave\'s pricing page](https://www.waveapps.com/pricing) is the source to act on, and it is worth checking availability for your country as well as price — payment processing in particular is not offered everywhere.',
      ],
    },
  ],
  answersHeading: 'Choosing between them: common questions',
  answers: [
    {
      question: 'What is a good alternative to Wave for invoicing?',
      answer:
        'If you want the bookkeeping, you need another accounting product. If you only ever wanted the invoice, a browser-based generator removes the account and the setup entirely, at the cost of tracking and reconciliation.',
    },
    {
      question: 'Is free invoicing software really free?',
      answer:
        'The invoicing usually is. The money is generally made on payment processing, charged per transaction, so "free invoicing" and "free to get paid" are separate claims. If your clients pay by transfer, the fees may never reach you.',
    },
    {
      question: 'Do I need accounting software to send invoices?',
      answer:
        'No. An invoice is a document; accounting software is a system for recording what happens to it. If your books are handled elsewhere or you invoice rarely, adopting an accounting product to send one document is a poor trade.',
    },
    {
      question: 'What happens to my invoices if a free tool shuts down?',
      answer:
        'With a hosted product you depend on exporting in time, which is why checking the export format before you commit matters. With a browser-based tool the PDFs and JSON files you already saved are unaffected by anything the vendor does.',
    },
  ],
  faqs: [
    {
      question: 'Can I accept card payments through QuillBill?',
      answer: 'No. There is no payment processing. Put your bank details or a payment link on the invoice instead.',
    },
    {
      question: 'Which should a brand new business pick?',
      answer:
        'If you need books from day one, start with an accounting product. If you need to invoice a first client this week, a generator will do it now and you can adopt bookkeeping when it earns its place.',
    },
  ],
  sources: [
    { label: 'Wave pricing', publisher: 'Wave Financial', url: 'https://www.waveapps.com/pricing' },
  ],
  ctaHeading: 'Send an invoice without the setup',
  ctaText: 'Create an Invoice Free',
  ctaLink: '/?mode=invoice',
  crossLinks: [
    { title: 'Zoho Invoice Alternative', description: 'The same comparison against Zoho.', href: '/zoho-invoice-alternative' },
    { title: 'Invoice Generator Alternatives', description: 'The wider comparison, including Wise and Refrens.', href: '/invoice-generator-alternatives' },
    { title: 'Free Invoice Software', description: 'What "free" actually costs in this category.', href: '/free-invoice-software' },
  ],
};
