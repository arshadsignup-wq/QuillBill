import type { GuideConfig } from './types';

export const proformaInvoiceGuide: GuideConfig = {
  slug: 'proforma-invoice',
  cluster: 'Invoicing',
  published: '2026-08-06',
  updated: '2026-08-06',
  summary:
    'What a proforma invoice is, when to send one, and how it differs from a quotation and a commercial invoice.',
  seo: {
    title: 'What Is a Proforma Invoice? | When to Use One',
    description:
      'A proforma invoice explained: what it is, when to send one, what it must contain, and how it differs from a quotation, a commercial invoice and a final invoice.',
    canonical: '/proforma-invoice',
  },
  h1: 'What Is a Proforma Invoice?',
  intro:
    'A proforma invoice is a preliminary bill sent before goods or services are supplied. It looks like an invoice and states the amount that will be due, but it is not a demand for payment and does not go into your sales ledger. It exists to let a buyer arrange approval, budget or payment before the real invoice is issued. This guide explains when to use one and how it differs from the documents it gets confused with.',
  keyTakeaways: [
    'A proforma invoice is not a legal demand for payment and is not recorded as a sale.',
    'Label it clearly as "Proforma Invoice" so it cannot be mistaken for the real thing.',
    'It is most commonly used for advance payments, customs declarations and internal purchase approvals.',
    'It must always be followed by a genuine invoice once the supply happens.',
    'Do not give it a number from your normal invoice sequence.',
  ],
  sections: [
    {
      heading: 'When a proforma invoice is the right document',
      body: [
        'The common thread is that the buyer needs a formal document showing the amount before you are in a position to raise a real invoice.',
      ],
      list: [
        'The client needs an invoice-shaped document to release budget or get internal purchase approval',
        'You require payment in advance and the client cannot pay against a quotation',
        'Goods are being shipped internationally and customs requires a declared value',
        'The client needs to arrange a letter of credit or foreign exchange',
        'A new client wants formal confirmation of price and terms before committing',
      ],
    },
    {
      heading: 'Proforma invoice vs quotation',
      body: [
        'A quotation is a sales document. It is an offer, aimed at winning the work, and it usually carries a validity period and scope details.',
        'A proforma invoice is an administrative document. It usually appears after the client has already decided to proceed, and its job is to let them process the payment or approval. It is laid out like an invoice rather than like an offer.',
        'In practice many small businesses can use a quotation for both purposes. Reach for a proforma only when the client specifically asks for something that looks like an invoice.',
      ],
    },
    {
      heading: 'Proforma invoice vs commercial invoice',
      body: [
        'A commercial invoice is the real, final document issued once goods or services have been supplied. It records a debt, enters your accounts as a sale, and is what the tax authority expects to see.',
        'A proforma does none of those things. It is provisional, carries no accounting entry, and cannot generally be used to reclaim tax. The proforma always has to be followed by a proper invoice once the supply actually takes place.',
      ],
      table: {
        head: ['', 'Quotation', 'Proforma invoice', 'Invoice'],
        rows: [
          ['Sent', 'Before the decision', 'After the decision, before supply', 'After supply'],
          ['Purpose', 'Win the work', 'Enable payment or approval', 'Request payment'],
          ['Creates a debt', 'No', 'No', 'Yes'],
          ['Goes in your accounts', 'No', 'No', 'Yes'],
          ['Uses your invoice number sequence', 'No', 'No', 'Yes'],
          ['Usable for tax purposes', 'No', 'Generally no', 'Yes'],
        ],
      },
    },
    {
      heading: 'What to put on a proforma invoice',
      body: [
        'The content mirrors a normal invoice, with the labelling doing the important work.',
      ],
      list: [
        'The words "Proforma Invoice" prominently at the top',
        'Your business name, address, contact details and tax number where applicable',
        'The client business name and address',
        'A reference number from a separate sequence, such as PRO-001',
        'The issue date and a validity period',
        'An itemized description of the goods or services with quantities and rates',
        'Subtotal, discount, tax rate and estimated tax, and the total payable',
        'Payment terms and full payment details',
        'A note that this is not a demand for payment and that a full invoice will follow',
        'For international shipments: country of origin, weight, and commodity codes if required',
      ],
    },
    {
      heading: 'Numbering and record keeping',
      body: [
        'Do not take numbers from your main invoice sequence. Gaps or duplicates in that sequence create real bookkeeping problems at year end. Use a separate prefix such as PRO-001 so proformas are unmistakable in your records.',
        'Keep the proforma alongside the invoice that eventually replaces it. If the amounts differ, which happens when scope changes between approval and delivery, the pair explains the difference.',
      ],
    },
    {
      heading: 'The tax point matters',
      body: [
        'Because a proforma is not a tax invoice, it usually does not create a tax point and generally cannot be used by the buyer to reclaim VAT or sales tax. Once payment is received or the supply is made, you must issue a proper invoice.',
        'The precise rules on tax points, advance payments and what qualifies as a valid tax invoice vary meaningfully between countries. Treat the above as the general shape and confirm the specifics with an accountant in your jurisdiction, particularly if you are trading across borders.',
      ],
    },
    {
      heading: 'Creating one',
      body: [
        'A proforma is structurally an invoice, so any invoice template works. Set the document title to "Proforma Invoice", use a separate numbering prefix, and add a line in the notes saying that a full invoice will follow on supply.',
        'In QuillBill you can set the document title and number freely, so producing a proforma is simply a matter of labelling an invoice correctly and exporting the PDF.',
      ],
    },
  ],
  faqs: [
    {
      question: 'Is a proforma invoice a legal document?',
      answer:
        'It is a legitimate commercial document but not a demand for payment, and it does not create a debt or a sale in your accounts. A genuine invoice must follow once the goods or services are supplied.',
    },
    {
      question: 'Can a client pay against a proforma invoice?',
      answer:
        'Yes, and that is often the point of sending one. Once payment is received you should issue a proper invoice covering the supply.',
    },
    {
      question: 'What is the difference between a proforma invoice and a quotation?',
      answer:
        'A quotation is an offer sent to win the work, usually with a validity period and scope detail. A proforma is sent after the client has decided to proceed, formatted as an invoice so they can process payment or internal approval.',
    },
    {
      question: 'Should a proforma invoice use my normal invoice numbers?',
      answer:
        'No. Use a separate sequence such as PRO-001. Taking numbers from your main invoice sequence creates gaps that complicate bookkeeping and tax reporting.',
    },
    {
      question: 'Can VAT be reclaimed on a proforma invoice?',
      answer:
        'Generally no, because a proforma is not a valid tax invoice. The buyer normally needs the final invoice. Rules vary by country, so check locally.',
    },
    {
      question: 'Do I still need to send a real invoice afterwards?',
      answer:
        'Yes, always. The proforma is provisional. Once the goods or services are supplied, issue a proper invoice from your normal sequence.',
    },
  ],
  ctaHeading: 'Create a proforma invoice free',
  ctaText: 'Create Invoice Free',
  ctaLink: '/?mode=invoice',
  crossLinks: [
    { title: 'How to Create an Invoice', description: 'What every invoice needs to include.', href: '/how-to-create-an-invoice' },
    { title: 'Invoice vs Quotation', description: 'Which document to send, and when.', href: '/invoice-vs-quotation' },
    { title: 'Purchase Order vs Invoice', description: 'Who issues what, and in what order.', href: '/purchase-order-vs-invoice' },
  ],
};

export const purchaseOrderGuide: GuideConfig = {
  slug: 'purchase-order-vs-invoice',
  cluster: 'Invoicing',
  published: '2026-08-06',
  updated: '2026-08-06',
  summary:
    'Who issues a purchase order, who issues an invoice, and why a missing PO number stops you getting paid.',
  seo: {
    title: 'Purchase Order vs Invoice | What Is the Difference?',
    description:
      'Purchase order vs invoice explained: who issues each, what order they come in, what a PO number is for, and why a missing PO number delays payment.',
    canonical: '/purchase-order-vs-invoice',
  },
  h1: 'Purchase Order vs Invoice',
  intro:
    'A purchase order and an invoice cover the same transaction from opposite sides. The buyer issues the purchase order to commit to buying. The seller issues the invoice to request payment for what was supplied. If you sell to larger organizations, understanding how the two are matched is the difference between being paid on time and being told your invoice was rejected.',
  keyTakeaways: [
    'The buyer issues the purchase order. The seller issues the invoice.',
    'The purchase order comes first and is an offer to buy; accepting it forms the contract.',
    'The invoice comes after supply and requests payment for what the PO authorized.',
    'If a client uses purchase orders, your invoice must quote the PO number or it will be rejected.',
    'Always ask whether a PO is required before you start work, not after you invoice.',
  ],
  sections: [
    {
      heading: 'The two documents side by side',
      body: [
        'Both list the same goods or services at the same prices. What differs is who writes them, when, and what they commit the writer to.',
      ],
      table: {
        head: ['', 'Purchase order', 'Invoice'],
        rows: [
          ['Issued by', 'The buyer', 'The seller'],
          ['Issued when', 'Before the goods or services are supplied', 'After they are supplied'],
          ['Says', '"We commit to buy this"', '"You owe us for this"'],
          ['Creates', 'An authorization and a commitment to buy', 'A debt owed to the seller'],
          ['Numbered by', 'The buyer (PO number)', 'The seller (invoice number)'],
          ['Goes in accounts as', 'A committed cost for the buyer', 'A sale for the seller, a payable for the buyer'],
        ],
      },
    },
    {
      heading: 'How the sequence normally runs',
      body: [
        'In an organization that uses purchase orders, the flow is predictable, and each step exists to make the next one auditable.',
      ],
      list: [
        'The buyer requests a quotation from you',
        'You send a quotation with scope, pricing and validity',
        'The buyer raises an internal purchase requisition and gets it approved',
        'The buyer issues a purchase order quoting a PO number',
        'You accept the purchase order and do the work',
        'You invoice, quoting that same PO number',
        'The buyer matches the invoice against the PO and the delivery record',
        'Payment is released on their next payment run',
      ],
    },
    {
      heading: 'Why the PO number matters so much',
      body: [
        'Larger organizations run what is called three-way matching: the purchase order, the goods received note and the invoice must all agree before payment is released. It is an anti-fraud control, and it is automated.',
        'An invoice arriving without a PO number typically cannot be matched, so it is rejected or parked by the system before a human ever considers it. Nobody is being difficult. The invoice simply has nowhere to go.',
        'The practical consequence is that a missing PO number is one of the most common causes of a genuinely unexplained late payment. You chase, your contact says it was approved weeks ago, and the invoice has been sitting in an exceptions queue the whole time.',
      ],
    },
    {
      heading: 'What to do before you start work',
      body: [
        'Ask two questions during the quoting stage rather than after delivery. First: do you require a purchase order for this? Second: which address should the invoice go to?',
        'If the answer to the first is yes, do not begin work until you have the PO number in writing. Starting without one means you may have no authorized commitment to invoice against, and getting a retrospective PO raised can take weeks.',
        'If the PO has a value limit and the scope grows, get the PO amended before you exceed it. Invoicing above the authorized amount will fail matching just as surely as invoicing with no PO at all.',
      ],
    },
    {
      heading: 'Putting the PO number on your invoice',
      body: [
        'Put it somewhere prominent and clearly labeled, near your own invoice number rather than buried in a description line. "PO Number: 4500123456" is what the processing system and the person keying it in are both looking for.',
        'Match the other details too. If the PO is addressed to a specific legal entity, invoice that entity, not the trading name you usually use. Mismatched entity names are the second most common matching failure after missing PO numbers.',
        'In QuillBill you can add the PO reference in the document notes or as a dedicated line so it appears clearly on every template.',
      ],
    },
    {
      heading: 'Do small businesses need to issue purchase orders?',
      body: [
        'Most sole traders and small businesses do not need a formal PO system for their own buying. A quotation you accept in writing serves the same purpose at that scale.',
        'They become genuinely useful once more than one person can commit company money, or once you need to track committed spend against a budget before the invoices arrive. Below that, the administrative overhead outweighs the control.',
      ],
    },
  ],
  faqs: [
    {
      question: 'Who issues a purchase order, the buyer or the seller?',
      answer:
        'The buyer issues the purchase order. The seller issues the invoice. They are the same transaction seen from opposite sides.',
    },
    {
      question: 'Does a purchase order come before or after the invoice?',
      answer:
        'Before. The purchase order authorizes and commits to the purchase; the invoice requests payment after the goods or services have been supplied.',
    },
    {
      question: 'Is a purchase order legally binding?',
      answer:
        'A purchase order is an offer to buy. In most jurisdictions it becomes a binding contract once the seller accepts it, which is why the scope and price on it should be checked before you begin work.',
    },
    {
      question: 'What happens if I invoice without a PO number?',
      answer:
        'If the client requires purchase orders, the invoice usually fails automated matching and is rejected or parked without reaching a person. Always confirm whether a PO is needed before starting work.',
    },
    {
      question: 'Can one purchase order cover several invoices?',
      answer:
        'Yes. Staged or recurring work is often invoiced in instalments against a single PO, provided the cumulative total stays within the authorized value.',
    },
    {
      question: 'What if the work grows beyond the PO value?',
      answer:
        'Ask the buyer to amend or reissue the purchase order before you invoice above its value. Invoicing over the authorized amount will fail matching.',
    },
  ],
  ctaHeading: 'Invoice against a purchase order',
  ctaText: 'Create Invoice Free',
  ctaLink: '/?mode=invoice',
  crossLinks: [
    { title: 'How to Create an Invoice', description: 'What every invoice needs to include.', href: '/how-to-create-an-invoice' },
    { title: 'What Is a Proforma Invoice?', description: 'The preliminary bill, and when to use it.', href: '/proforma-invoice' },
    { title: 'How to Chase an Unpaid Invoice', description: 'When matching fails and payment stalls.', href: '/how-to-chase-an-unpaid-invoice' },
  ],
};

export const freelanceInvoicingGuide: GuideConfig = {
  slug: 'freelance-invoicing-guide',
  cluster: 'Invoicing',
  published: '2026-08-06',
  updated: '2026-08-06',
  summary:
    'Invoicing as a freelancer end to end: your first invoice, rates, deposits, international clients and records.',
  seo: {
    title: 'Freelance Invoicing Guide | How to Invoice Clients',
    description:
      'How to invoice as a freelancer: your first invoice, what to include without a company, deposits, international clients and keeping records.',
    canonical: '/freelance-invoicing-guide',
  },
  h1: 'Freelance Invoicing: A Complete Guide',
  intro:
    'Invoicing is the part of freelancing nobody trains you for, and getting it slightly wrong is expensive in a way that is easy to miss. This guide covers sending your first invoice, what to include when you do not have a company, how to handle deposits and international clients, and the habits that keep your cash flow predictable.',
  keyTakeaways: [
    'You do not need a registered company to invoice. Your own name and address are sufficient in most places.',
    'Invoice the day the work is done. Delay in sending is the largest controllable cause of delay in getting paid.',
    'Take a deposit on anything substantial, especially with a new client.',
    'Agree the currency and who covers transfer fees before invoicing internationally.',
    'Keep every invoice. Most tax authorities expect five to seven years of records.',
  ],
  sections: [
    {
      heading: 'You can invoice without a company',
      body: [
        'Freelancers and sole traders invoice under their own name in most countries. Where you would normally put a company name, put your own, with your address and contact details.',
        'Add a tax identification number if your country requires one on invoices, and register for sales tax, VAT or GST only when you cross the threshold that applies to you. Thresholds and the rules for cross-border work differ substantially between countries, so confirm yours rather than assuming.',
      ],
    },
    {
      heading: 'Your first invoice',
      body: [
        'The mechanics are the same as any business invoice: your details, the client details, a unique number, dates, itemized work, totals and payment terms. The guide on how to create an invoice covers the full field list.',
        'Two things are worth getting right from the very first one. Start a numbering sequence you can live with, such as INV-001, and never reuse or skip a number. And set your terms deliberately rather than copying Net 30 out of habit.',
      ],
    },
    {
      heading: 'Rates, and what to itemize',
      body: [
        'Whether you bill hourly, daily or by project, the invoice should describe work the client recognizes. "Homepage and three interior page designs, including two revision rounds" tells them what they bought. "32 hours" tells them what to negotiate.',
        'If you bill hourly, keep a defensible record of time even when the client never asks. If you bill by project, itemize by deliverable or phase. Either way, avoid single-line invoices reading "Consulting — $4,000" on anything substantial, because that is the line most likely to be queried.',
      ],
    },
    {
      heading: 'Deposits and staged payments',
      body: [
        'For anything beyond a small job, take money before you start. Fifty percent upfront with the balance on delivery is standard across most freelance disciplines and rarely meets resistance from serious clients.',
        'For longer projects, stage the payments against milestones so you are never more than a few weeks of work out of pocket. Set out the schedule in the quotation or proposal, then invoice each stage as it completes.',
        'A client who objects strongly to any upfront payment is giving you useful information early.',
      ],
    },
    {
      heading: 'Invoicing international clients',
      body: [
        'Cross-border work adds three questions that are much easier to answer before you invoice than after.',
      ],
      list: [
        'Which currency? Bill in one you are comfortable holding, and say so in the quotation',
        'Who pays the transfer fees? Intermediary bank charges can take a noticeable bite out of a small invoice',
        'What are the tax obligations? Cross-border VAT, GST and reverse-charge rules vary and can shift who accounts for the tax',
        'Does the client need extra details, such as a tax ID, IBAN, SWIFT or a specific reference format?',
        'How long will the transfer take? International payments can add several days beyond your terms',
      ],
    },
    {
      heading: 'Getting paid on time',
      body: [
        'The habits matter more than the tooling. Invoice immediately on completion rather than batching at month end. Find out who actually processes invoices and send it to them, not only to your day-to-day contact. Ask whether a purchase order number is required before you start.',
        'Then chase promptly and unemotionally when something slips. A short note the day after the due date is normal professional practice, and it resets the client expectation for every invoice after it.',
      ],
    },
    {
      heading: 'Records and tax',
      body: [
        'Keep a copy of every invoice you issue, along with the accepted quotation or proposal behind it. Most tax authorities require records to be retained for somewhere between five and seven years, and reconstructing a year of invoices after the fact is genuinely painful.',
        'Set aside a percentage of every payment for tax as it arrives rather than facing the bill in one piece later. What percentage depends entirely on your jurisdiction and income, which is the point at which talking to an accountant once pays for itself.',
      ],
    },
    {
      heading: 'A workable monthly rhythm',
      body: [
        'Invoice on completion, not on a schedule. Review outstanding invoices once a week and chase anything past due. Reconcile payments received against invoices sent once a month. File the paperwork as you go.',
        'That is genuinely the whole system. Freelance cash flow problems are usually not caused by clients refusing to pay; they are caused by invoices being sent late and chased later.',
      ],
    },
  ],
  faqs: [
    {
      question: 'Do I need a company to invoice clients?',
      answer:
        'In most countries no. Freelancers and sole traders invoice under their own name and address. Include a tax identification number if your country requires one on invoices.',
    },
    {
      question: 'What should a freelancer put on an invoice?',
      answer:
        'Your name and address, the client details, a unique invoice number, the issue and due dates, an itemized description of the work with quantities and rates, the total, any tax, and your payment terms and bank details.',
    },
    {
      question: 'Should I ask freelance clients for a deposit?',
      answer:
        'For anything substantial, yes. Fifty percent upfront with the balance on delivery is standard and widely accepted. For longer projects, stage payments against milestones.',
    },
    {
      question: 'How do I invoice a client in another country?',
      answer:
        'Agree the currency and who covers transfer fees in advance, include full international payment details such as IBAN and SWIFT where relevant, and check the cross-border tax treatment for your situation. Allow extra days for the transfer.',
    },
    {
      question: 'When should I send the invoice?',
      answer:
        'The day the work is finished. Batching invoices to month end can add weeks to when you are paid, because it pushes you past the client billing cycle.',
    },
  ],
  ctaHeading: 'Send your next freelance invoice',
  ctaText: 'Create Invoice Free',
  ctaLink: '/?mode=invoice',
  crossLinks: [
    { title: 'How to Create an Invoice', description: 'The full field-by-field walkthrough.', href: '/how-to-create-an-invoice' },
    { title: 'Invoice Payment Terms Explained', description: 'Which terms get you paid fastest.', href: '/invoice-payment-terms' },
    { title: 'Free Invoice Templates', description: 'Browse 15 printable invoice templates.', href: '/invoice-templates' },
  ],
};
