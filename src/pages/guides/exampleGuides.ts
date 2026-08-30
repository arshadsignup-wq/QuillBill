import type { GuideConfig } from './types';

/**
 * Worked examples.
 *
 * "Invoice example" and "sample invoice" are searches for something to look
 * at, and the site answered them only with prose. Each page renders a real
 * filled-in document from the actual template components with the fields
 * annotated beside it, so the example cannot drift from what the tool
 * produces and the reader gets the thing they searched for above the fold.
 */

export const invoiceExampleGuide: GuideConfig = {
  slug: 'invoice-example',
  cluster: 'Invoicing',
  example: 'invoice',
  published: '2026-08-30',
  updated: '2026-08-30',
  summary:
    'A completed invoice with every field annotated, plus the versions that get queried and why.',
  keyTakeaways: [
    'Bill the legal entity, not your day-to-day contact.',
    'Print a real due date rather than the words "Net 30".',
    'Specific line descriptions are the cheapest defence against a delayed payment.',
    'Payment terms and bank details belong on the invoice, not only in the contract.',
  ],
  seo: {
    title: 'Invoice Example | A Completed Invoice, Field by Field',
    description:
      'A filled-in invoice example with every field explained: numbering, dates, line item descriptions, tax, payment terms and the details that stop it being queried.',
    canonical: '/invoice-example',
  },
  h1: 'Invoice Example: A Completed Invoice, Field by Field',
  intro:
    'Below is a real invoice, filled in, with each part explained beside it. It is rendered by the same code that produces documents in the generator, so what you see is exactly what the tool outputs. Underneath, the versions of each field that cause problems, and why.',
  sections: [
    {
      heading: 'What the example gets right, and what a weak invoice does instead',
      body: [
        'Most invoices that get queried are not wrong. They are vague. Accounts payable cannot approve what they cannot match to something they recognise, so the invoice sits in someone\'s queue until they get round to asking.',
      ],
      table: {
        head: ['Field', 'On the example', 'What causes a query'],
        rows: [
          ['Billed to', 'The client\'s registered company name', 'Your contact\'s personal name'],
          ['Number', 'INV-2041, sequential', 'The project name, or a date'],
          ['Dates', 'Issue date and an explicit due date', '"Net 30" with no date printed'],
          ['Line items', '"Packaging design — three SKUs"', '"Design services"'],
          ['Quantity', '2 days at a stated day rate', 'A single flat amount'],
          ['Tax', 'Rate and amount on their own line', 'Rolled into the total'],
          ['Payment', 'Terms and bank details on the document', 'Referred to a contract'],
        ],
      },
    },
    {
      heading: 'The fields people leave off',
      body: [
        'Three omissions account for most of the delay. The first is a due date: without one there is no deadline, and an invoice with no deadline is scheduled whenever it suits the payer.',
        'The second is payment detail. An invoice that does not say how to pay it has to come back to you before it can be paid, which adds a round trip to every single one.',
        'The third is a purchase order number, where the client uses them. Many larger buyers will reject an invoice automatically, before a human sees it, if the PO reference is missing. Ask whether one is required at onboarding rather than finding out on day 45.',
      ],
    },
    {
      heading: 'What changes by country',
      body: [
        'The example above is a general-purpose invoice. Tax jurisdictions add required fields on top: a GSTIN and a place of supply in India, an ABN in Australia, your VAT registration number and prescribed fields in the UK, the buyer\'s name once a Canadian invoice reaches $500.',
        'The structure does not change. What changes is the identifiers you must show and how the tax has to be presented, so start from a document like this one and add what your jurisdiction requires.',
      ],
    },
  ],
  answersHeading: 'Invoice examples: common questions',
  answers: [
    {
      question: 'What does a proper invoice look like?',
      answer:
        'A header identifying it as an invoice, your details and the client\'s, a unique number, issue and due dates, itemised lines with quantity and rate, a subtotal, tax shown separately, the total, and the payment terms and bank details.',
    },
    {
      question: 'What is a good invoice line item description?',
      answer:
        'One a person outside the project can match to something they approved. "Packaging design — three SKUs" works; "design services" does not. Specificity costs you nothing and removes the most common reason an invoice is queried.',
    },
    {
      question: 'Should an invoice show the quantity and rate separately?',
      answer:
        'Yes. Showing 2 days at 1,150 lets the client verify the figure against what was agreed. A single flat total is harder to approve because there is nothing to check it against.',
    },
    {
      question: 'What should I put if there is no purchase order?',
      answer:
        'Reference whatever the client uses to recognise the work — a project name, a contract number, or the name of the person who commissioned it. Ask at onboarding whether a PO is required, because many large buyers reject invoices without one automatically.',
    },
  ],
  faqs: [
    {
      question: 'Can I use this example as a template?',
      answer:
        'Yes. Open the generator and it starts from the same structure, or download the Word and Excel versions from the templates page.',
    },
    {
      question: 'Which template is the example using?',
      answer: 'The Modern template. Switching templates changes the layout without touching the content.',
    },
  ],
  ctaHeading: 'Make one like this',
  ctaText: 'Create an Invoice Free',
  ctaLink: '/?mode=invoice',
  crossLinks: [
    { title: 'How to Create an Invoice', description: 'The step-by-step version of this page.', href: '/how-to-create-an-invoice' },
    { title: 'Free Invoice Templates', description: '15 layouts plus Word and Excel downloads.', href: '/invoice-templates' },
    { title: 'Quotation Example', description: 'The same treatment for a quotation.', href: '/quotation-example' },
  ],
};

export const quotationExampleGuide: GuideConfig = {
  slug: 'quotation-example',
  cluster: 'Quotations',
  example: 'quotation',
  published: '2026-08-30',
  updated: '2026-08-30',
  summary:
    'A completed quotation with every field annotated, including the validity date most quotes leave off.',
  keyTakeaways: [
    'A quotation is an offer. It must not read as a request for payment.',
    'Without a validity date your price stays open indefinitely.',
    'Price deliverables separately so one can be removed without requoting everything.',
    'Say what is excluded — that is where scope disputes start.',
  ],
  seo: {
    title: 'Quotation Example | A Completed Quote, Field by Field',
    description:
      'A filled-in quotation example with every field explained: numbering, validity dates, itemised scope, exclusions and the terms that apply on acceptance.',
    canonical: '/quotation-example',
  },
  h1: 'Quotation Example: A Completed Quote, Field by Field',
  intro:
    'A quotation is a priced offer, and the things that make one work are different from the things that make an invoice work. Below is a completed quotation with each part explained, followed by the two fields that cause most of the trouble when they are missing.',
  sections: [
    {
      heading: 'The validity date',
      body: [
        'A quotation without an expiry is an open offer. Costs move, your availability moves, and a client who accepts in November at a price you set in March has every reason to hold you to it.',
        'Fourteen to thirty days is normal. Put it on the document rather than in the covering email, because the document is what gets forwarded internally and stored.',
      ],
    },
    {
      heading: 'Saying what is excluded',
      body: [
        'Almost every scope dispute starts with something the client assumed was included. Listing exclusions feels negative when you are trying to win work, and it is the single most useful paragraph on the document.',
        'Keep it concrete. "Print production and media buying are not included" prevents an argument. "Additional work may be chargeable" prevents nothing, because it does not tell anyone what counts as additional.',
      ],
    },
    {
      heading: 'What happens after acceptance',
      body: [
        'The quotation is the moment to state the payment terms, because it is the last point at which they are still being negotiated. Introducing Net 14 for the first time on the invoice, after the work is done, is a conversation you will lose.',
        'Once accepted, issue an invoice with its own number that references the quotation number. Do not convert the quotation itself into a payment request by editing it — the two documents do different jobs and both need to exist in your records.',
      ],
    },
  ],
  answersHeading: 'Quotation examples: common questions',
  answers: [
    {
      question: 'What does a quotation look like?',
      answer:
        'Your details and the client\'s, a quotation number, the issue date and a validity date, the scope priced as itemised lines, the total, what is excluded, and the payment terms that will apply once the quote is accepted.',
    },
    {
      question: 'Where does the validity date belong on a quotation?',
      answer:
        'On the document itself, near the quotation number and issue date, not in the covering email. The document is what gets forwarded internally and filed; the email it arrived in usually is not.',
    },
    {
      question: 'Should a quotation include payment terms?',
      answer:
        'Yes. It is the last moment the terms are genuinely negotiable. Terms introduced for the first time on the invoice, once the work is finished, are much harder to hold, and a client is within their rights to query them.',
    },
    {
      question: 'What should a quotation say about exclusions?',
      answer:
        'Name the specific things a reasonable client might assume are included but are not — print production, third-party licences, travel, revisions beyond a stated number. Vague wording about additional work being chargeable prevents nothing.',
    },
  ],
  faqs: [
    {
      question: 'Should quotations use their own number series?',
      answer:
        'Yes. QUO-089 rather than borrowing the invoice sequence, so the eventual invoice can reference the quote and the two sets of records stay separate.',
    },
    {
      question: 'Does the example show a fixed price or an estimate?',
      answer:
        'A fixed price. If your scope is genuinely uncertain, label the document an estimate instead and say what could move the final figure.',
    },
  ],
  ctaHeading: 'Make a quotation like this',
  ctaText: 'Create a Quotation Free',
  ctaLink: '/?mode=quote',
  crossLinks: [
    { title: 'How to Write a Quotation', description: 'The step-by-step version of this page.', href: '/how-to-write-a-quotation' },
    { title: 'Invoice vs Quotation', description: 'Which document to send and when.', href: '/invoice-vs-quotation' },
    { title: 'Invoice Example', description: 'The same treatment for an invoice.', href: '/invoice-example' },
  ],
};
