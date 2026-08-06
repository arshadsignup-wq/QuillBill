import type { FAQItem } from '../landing/landingData';

export interface GuideSection {
  heading: string;
  body: string[];
  /** Optional ordered checklist rendered under the prose. */
  list?: string[];
}

export interface GuideConfig {
  slug: string;
  seo: { title: string; description: string; canonical: string };
  h1: string;
  intro: string;
  /** When set, a HowTo schema is emitted from these steps. */
  howTo?: { name: string; description: string; steps: { title: string; description: string }[] };
  sections: GuideSection[];
  faqs: FAQItem[];
  ctaHeading: string;
  ctaText: string;
  ctaLink: string;
  crossLinks: { title: string; description: string; href: string }[];
}

export const howToCreateInvoiceGuide: GuideConfig = {
  slug: 'how-to-create-an-invoice',
  seo: {
    title: 'How to Create an Invoice | Step-by-Step Guide',
    description:
      'Learn how to create an invoice step by step: what to include, how to number invoices, payment terms, and how to export an invoice PDF free.',
    canonical: '/how-to-create-an-invoice',
  },
  h1: 'How to Create an Invoice: A Step-by-Step Guide',
  intro:
    'An invoice is a request for payment that records what you sold, who you sold it to and when payment is due. This guide explains how to generate an invoice correctly, what every invoice must include, and how to export an invoice PDF for free without signing up for anything.',
  howTo: {
    name: 'How to create an invoice',
    description:
      'Create a professional invoice with your business details, client details, itemised line items, totals and payment terms, then export it as a PDF.',
    steps: [
      {
        title: 'Add your business details',
        description:
          'Enter your business name, address, email and phone number, plus your tax or VAT registration number if you have one. Upload your logo so the invoice is clearly identifiable as yours.',
      },
      {
        title: 'Add your client details',
        description:
          'Enter the client business name, the contact person and their billing address. Billing the correct legal entity matters if you ever need to chase payment.',
      },
      {
        title: 'Give the invoice a unique number and dates',
        description:
          'Assign a sequential invoice number such as INV-001, then set the issue date and the payment due date. Never reuse an invoice number.',
      },
      {
        title: 'List what you are charging for',
        description:
          'Add one line item per product or service with a clear description, quantity and unit rate. Specific descriptions reduce payment queries.',
      },
      {
        title: 'Apply tax, discounts and shipping',
        description:
          'Set your tax or VAT rate, add any agreed discount as a percentage or fixed amount, and include shipping if relevant. The invoice subtotal and total are calculated automatically.',
      },
      {
        title: 'State your payment terms',
        description:
          'Write your payment terms and bank or payment details in the notes field, for example Net 30 or payment due within 14 days, along with any late payment charge.',
      },
      {
        title: 'Export the invoice as a PDF and send it',
        description:
          'Choose an invoice template, then export the invoice as a PDF and email it to your client, or share a link. Keep a copy for your accounting records.',
      },
    ],
  },
  sections: [
    {
      heading: 'What must be included on an invoice',
      body: [
        'Requirements vary by country, but almost every jurisdiction expects the same core information. Missing any of these is the most common reason an invoice is queried or delayed.',
      ],
      list: [
        'The word "Invoice" clearly displayed on the document',
        'A unique, sequential invoice number',
        'Your business name, address and contact details',
        'Your tax, VAT or company registration number where applicable',
        'The client business name and billing address',
        'The invoice issue date and the payment due date',
        'An itemised description of the goods or services supplied',
        'Quantity, unit price and line total for each item',
        'The subtotal, any discount, the tax rate and tax amount',
        'The total amount payable and the currency',
        'Payment terms and how the client should pay you',
      ],
    },
    {
      heading: 'How to number your invoices',
      body: [
        'Invoice numbers must be unique and should run in sequence so that your records have no gaps. A simple sequential format like INV-001, INV-002, INV-003 works for most small businesses and freelancers.',
        'If you invoice many clients, you can prefix the client or the year, for example 2026-ACME-001. Whatever scheme you pick, stay consistent and never reuse or skip a number, because gaps make bookkeeping and tax reporting harder to reconcile.',
      ],
    },
    {
      heading: 'Setting payment terms that actually get you paid',
      body: [
        'Payment terms tell the client exactly when payment is due. Net 30 means payment is due 30 days after the invoice date. Shorter terms such as Net 14 or due on receipt generally get you paid faster, particularly for freelance and small business work.',
        'State the terms in plain language on the invoice itself rather than relying on a separate contract. Include your bank details or payment link directly on the invoice, and if you charge interest or a fee on late payment, say so clearly on every invoice from the start.',
      ],
    },
    {
      heading: 'Invoice, quotation, estimate or receipt?',
      body: [
        'These four documents are frequently confused, and sending the wrong one creates confusion about whether money is owed.',
        'A quotation is a fixed price offer sent before work begins. An estimate is an approximate figure that may change. An invoice is sent after the work is done and requests payment. A receipt confirms that payment has already been received.',
        'The sequence for most businesses is quotation first, then invoice once the work is complete, then a receipt once the client has paid.',
      ],
    },
    {
      heading: 'How to generate an invoice PDF for free',
      body: [
        'You do not need accounting software or a paid subscription to produce a professional invoice. Fill in the invoice fields in your browser, pick a template, and export a PDF with proper A4 formatting.',
        'QuillBill generates the invoice entirely on your device. There is no account, no email required, no watermark on the exported PDF, and your client and pricing data is never sent to a server.',
      ],
    },
    {
      heading: 'Common invoicing mistakes to avoid',
      body: [
        'Most late payments trace back to a small number of avoidable errors.',
      ],
      list: [
        'Vague line item descriptions that invite questions before payment',
        'Missing or duplicated invoice numbers that break your records',
        'No stated due date, which effectively means no deadline',
        'Billing the wrong legal entity or the wrong contact person',
        'Leaving off payment instructions or bank details',
        'Forgetting to apply the correct tax or VAT rate',
        'Sending the invoice late, which pushes the payment date out with it',
      ],
    },
  ],
  faqs: [
    {
      question: 'How do I create an invoice for free?',
      answer:
        'Open a free invoice generator in your browser, enter your business and client details, add your line items, set the tax and payment terms, then export the invoice as a PDF. QuillBill does this with no sign-up, no watermark and no cost.',
    },
    {
      question: 'Can I create an invoice without a company?',
      answer:
        'Yes. Freelancers and sole traders can invoice using their own name and address in place of a company name. Include your tax identification number if your country requires one on invoices.',
    },
    {
      question: 'What invoice number should I start with?',
      answer:
        'Start with something simple like INV-001 and increment it for every invoice you issue. The only firm rules are that numbers must be unique and should not have unexplained gaps.',
    },
    {
      question: 'Do I need to charge tax on my invoice?',
      answer:
        'That depends on your country and whether you are registered for sales tax, VAT or GST. If you are registered, show the tax rate and tax amount as separate lines. If you are not registered, do not add tax to the invoice.',
    },
    {
      question: 'How long should I keep copies of invoices?',
      answer:
        'Most tax authorities require businesses to keep invoice records for between five and seven years. Check the rule in your own country and keep both the PDF and your accounting record.',
    },
    {
      question: 'What is the difference between an invoice and a receipt?',
      answer:
        'An invoice requests payment and is sent before the client pays. A receipt confirms payment was received and is sent afterwards as proof of the transaction.',
    },
  ],
  ctaHeading: 'Create your invoice now',
  ctaText: 'Create Invoice Free',
  ctaLink: '/?mode=invoice',
  crossLinks: [
    { title: 'Free Invoice Generator', description: 'Create and export an invoice in seconds.', href: '/invoice-generator' },
    { title: 'Free Invoice Templates', description: 'Browse 15 printable invoice templates.', href: '/invoice-templates' },
    { title: 'Invoice vs Quotation', description: 'Know which document to send and when.', href: '/invoice-vs-quotation' },
  ],
};

export const invoiceVsQuotationGuide: GuideConfig = {
  slug: 'invoice-vs-quotation',
  seo: {
    title: "Invoice vs Quotation | What's the Difference?",
    description:
      'Invoice vs quotation explained: what each document is for, when to send it, and what it must contain. Plus where estimates and proposals fit in.',
    canonical: '/invoice-vs-quotation',
  },
  h1: 'Invoice vs Quotation: What Is the Difference?',
  intro:
    'An invoice and a quotation look similar but do opposite jobs. A quotation offers a price before work starts. An invoice requests payment after the work is done. Sending the wrong one confuses clients about whether money is actually owed. This guide explains the difference, and where estimates, proposals and receipts fit in.',
  sections: [
    {
      heading: 'The short answer',
      body: [
        'A quotation is a formal offer stating what you will supply and what it will cost, valid for a set period. It creates no obligation to pay because no work has been done yet.',
        'An invoice is a payment request issued after goods are delivered or services are completed. It records a debt and tells the client how much to pay and by when.',
        'Put simply: quote first to win the work, invoice afterwards to get paid.',
      ],
    },
    {
      heading: 'When to send a quotation',
      body: [
        'Send a quotation when a prospective client has asked what something will cost and you can commit to a firm price. Quotations are standard in trades, manufacturing, consulting and any service business that scopes work before starting.',
        'Always give the quotation an expiry date. Material costs and your availability change, and an open-ended quote can be accepted months later at a price that no longer works for you. Fourteen to thirty days is typical.',
      ],
      list: [
        'A quotation number and issue date',
        'A validity or expiry date for the quoted price',
        'An itemised breakdown of the work with quantities and rates',
        'The total quoted price and currency',
        'What is explicitly included and excluded',
        'Payment terms that will apply once accepted',
      ],
    },
    {
      heading: 'When to send an invoice',
      body: [
        'Send an invoice once you have delivered the goods or completed the work, or at agreed milestones on a longer project. For larger jobs many businesses invoice a deposit up front, then the balance on completion.',
        'The invoice should reference the accepted quotation where one exists, so the client can match the amount charged against the price they agreed to.',
      ],
      list: [
        'A unique, sequential invoice number',
        'The issue date and a clear payment due date',
        'Itemised goods or services with quantity and rate',
        'Subtotal, discount, tax rate and tax amount',
        'The total amount payable',
        'Payment instructions and bank or payment details',
      ],
    },
    {
      heading: 'Quotation vs estimate',
      body: [
        'A quotation is a fixed price you commit to. An estimate is your best approximation of what the work will cost, given that the full scope is not yet known.',
        'Label the document accurately. Clients reasonably treat a quotation as binding for its validity period, so if the scope is genuinely uncertain, send an estimate and explain what could change the final figure.',
      ],
    },
    {
      heading: 'Where a proposal fits in',
      body: [
        'A proposal is a quotation with context. Alongside the pricing it sets out the executive summary, the proposed solution, the scope of work, the deliverables, the timeline and often signature blocks for acceptance.',
        'Use a quotation when the client already knows exactly what they want and only needs a price. Use a proposal when you still need to persuade them, or when the scope and timeline need to be agreed in writing before work begins.',
      ],
    },
    {
      heading: 'And a receipt?',
      body: [
        'A receipt is proof that payment has been received. It comes last, after the client has paid the invoice.',
        'The full lifecycle for most businesses is: quotation or proposal to agree the work, invoice to request payment, receipt to confirm payment was made.',
      ],
    },
  ],
  faqs: [
    {
      question: 'Can a quotation be used as an invoice?',
      answer:
        'No. A quotation offers a price before work begins and does not request payment. Once the work is complete, issue a separate invoice with its own unique invoice number and a payment due date.',
    },
    {
      question: 'Is a quotation legally binding?',
      answer:
        'In most jurisdictions a quotation becomes binding once the client accepts it within its validity period, because it is a firm offer. This is why stating an expiry date on every quotation matters.',
    },
    {
      question: 'Do I send a quotation and an invoice for the same job?',
      answer:
        'Usually yes. You send the quotation to win the work, and once the work is delivered you send an invoice for the agreed amount, referencing the quotation number.',
    },
    {
      question: 'What is the difference between a quotation and a proposal?',
      answer:
        'A quotation focuses on price. A proposal adds the executive summary, scope of work, deliverables, timeline and signatures alongside the pricing, and is used when you need to sell the approach as well as the cost.',
    },
    {
      question: 'Can I convert a quotation into an invoice?',
      answer:
        'Yes. In QuillBill the same document supports invoice, quotation and proposal modes, so once a quote is accepted you can switch the mode to invoice and keep every line item.',
    },
  ],
  ctaHeading: 'Create a quotation or an invoice free',
  ctaText: 'Open the Free Generator',
  ctaLink: '/',
  crossLinks: [
    { title: 'Free Invoice Generator', description: 'Create and export an invoice in seconds.', href: '/invoice-generator' },
    { title: 'Free Quotation Generator', description: 'Send a professional price quotation.', href: '/quotation-generator' },
    { title: 'How to Create an Invoice', description: 'Step-by-step invoicing guide.', href: '/how-to-create-an-invoice' },
  ],
};

export const guideConfigs = [howToCreateInvoiceGuide, invoiceVsQuotationGuide];
