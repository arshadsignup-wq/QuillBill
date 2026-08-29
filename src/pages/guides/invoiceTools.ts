import type { GuideConfig } from './types';

/**
 * The "invoice tool" cluster: commercial-investigation queries where the
 * searcher already knows they want a generator and is choosing between them.
 *
 * These deliberately do not repeat /how-to-create-an-invoice, which owns the
 * "what goes on an invoice" intent. These own "which tool, and what does free
 * actually cost me".
 */

export const onlineInvoiceGeneratorGuide: GuideConfig = {
  slug: 'online-invoice-generator',
  cluster: 'Tools',
  published: '2026-08-16',
  updated: '2026-08-16',
  summary:
    'How browser-based invoice generation works, where your data goes, and what separates a genuine free tool from a free trial.',
  keyTakeaways: [
    'Online invoice generators split into two architectures: server-side, which uploads your data, and client-side, which does not.',
    'Most tools ranking for "invoice generator" are the free tier of paid accounting software, not standalone tools.',
    'You can tell which is which before signing up — the sign-up wall and the network tab both give it away.',
    'A generated invoice is only valid if it carries the fields your tax authority requires, whichever tool made it.',
  ],
  seo: {
    title: 'Online Invoice Generator: How It Works & What to Check',
    description:
      'How online invoice generation works, where your invoice data actually goes, and how to tell a genuinely free generator from a free trial.',
    canonical: '/online-invoice-generator',
  },
  h1: 'Online Invoice Generator: How Browser Invoicing Actually Works',
  intro:
    'Search for an online invoice generator and you get roughly forty tools that look identical: a form, a preview, a download button. They are not identical. Underneath, they split into two very different architectures, and the difference decides whether your client list and your rates end up on somebody else\'s server. This guide explains how invoice generation online actually works, how to check which kind you are using, and what to look for before you generate an invoice with any of them.',
  howTo: {
    name: 'How to generate an invoice online',
    description:
      'Generate a professional invoice in a browser, from entering your details through to exporting a PDF, without installing software or creating an account.',
    steps: [
      {
        title: 'Open a generator that does not ask you to sign up first',
        description:
          'If a tool demands an email address before it will show you the form, you are creating an account in accounting software, not using an invoice generator. Open one that loads straight into an editable document.',
      },
      {
        title: 'Enter your business details once',
        description:
          'Add your trading name, address, contact details and tax registration number. A good generator remembers these locally so your second invoice takes seconds rather than minutes.',
      },
      {
        title: 'Add the client and the invoice identifiers',
        description:
          'Enter the client\'s legal entity name and billing address, then set a unique sequential invoice number, the issue date and an explicit due date. The legal entity matters more than the trading name if you ever have to chase the debt.',
      },
      {
        title: 'Itemize the work',
        description:
          'One line per deliverable, with a description specific enough that someone in the client\'s accounts department who never met you can approve it without asking a question.',
      },
      {
        title: 'Set tax, discounts and currency',
        description:
          'Apply your VAT, GST or sales tax rate as a separate visible line, not folded into the unit price. Pick the currency you agreed, not your home currency.',
      },
      {
        title: 'Add payment terms and payment details',
        description:
          'State the terms in words on the invoice itself, along with the bank account, payment link or wallet you want to be paid into.',
      },
      {
        title: 'Export the PDF and check it before sending',
        description:
          'Download the PDF and open it. Check the total, the due date and that no placeholder text survived. Then send it and keep the file for your records.',
      },
    ],
  },
  sections: [
    {
      heading: 'The two architectures, and why the difference matters',
      body: [
        'Every online invoice generator has to put your data somewhere in order to turn it into a PDF. There are only two places it can go, and tools rarely say which they chose.',
        'A server-side generator sends what you type to a backend. You fill in the form, the server renders the PDF and sends the file back. This is how most tools attached to accounting platforms work, because the same data has to populate a dashboard, a ledger and a payment reminder later. It is a reasonable design for a bookkeeping product. It also means your client names, rates, margins and volumes exist on infrastructure you do not control, under a privacy policy you probably did not read.',
        'A client-side generator renders the document in your browser using JavaScript. Nothing is transmitted; the PDF is assembled locally and saved straight to your disk. The trade-off is real — there is no dashboard, no cross-device sync and no automated reminders, because there is no server holding your history.',
        'Neither is universally better. What is unhelpful is not knowing which one you are using. If you invoice a handful of clients and value not distributing your rate card, client-side is the safer default. If you need a ledger, ageing reports and automated chasing, you want a real accounting product and should pick one deliberately rather than drifting into one via a free generator.',
      ],
      table: {
        head: ['', 'Server-side generator', 'Client-side generator'],
        rows: [
          ['Where the PDF is built', 'On the provider\'s servers', 'In your browser'],
          ['Your client and rate data', 'Transmitted and usually stored', 'Stays on your device'],
          ['Works offline', 'No', 'Yes, once loaded'],
          ['Invoice history across devices', 'Yes', 'No — local only'],
          ['Automated payment reminders', 'Usually', 'No'],
          ['Typical sign-up requirement', 'Email, often a full account', 'None'],
          ['Best for', 'Ongoing bookkeeping', 'Occasional invoicing and privacy'],
        ],
      },
    },
    {
      heading: 'How to tell which one you are using, in about ten seconds',
      body: [
        'You do not need to take a marketing page\'s word for it. Three checks settle it.',
        'First, the sign-up wall. A tool that renders locally has nothing to gain from your email address before you have made anything, so it will let you type into the document immediately. A tool that asks for an account before showing you a form is capturing a lead into a paid product.',
        'Second, the network tab. Open your browser\'s developer tools, switch to Network, and type a line item. If requests fire off as you type, your keystrokes are going somewhere. If nothing moves until you click download — or nothing moves at all — the rendering is local.',
        'Third, airplane mode. Load the page, disconnect from the network, then try to fill in and export an invoice. A client-side tool will complete the whole flow offline. A server-side one will fail at the export step.',
      ],
    },
    {
      heading: 'What "free" means on each of the tools you will find',
      body: [
        'The word free is doing a lot of different jobs across the results for this query, and the differences are not visible from the SERP.',
        'The most common pattern is the free tier of a paid platform. Zoho, Wave, Invoice Ninja, invoicely and Refrens all offer genuine free plans with real limits attached — Refrens, for example, states on [its own pricing page](https://www.refrens.com/pricing) that the free allowance is 15 documents, after which you subscribe. That is a legitimate model, and the free tiers are often generous, but you are opening an account in software you may later have to pay for or migrate off.',
        'A second pattern is free-with-an-ecosystem. Wise Business launched a free invoicing tool that is genuinely free and uncapped, but it exists to route your invoices toward Wise as the payment rail, and it presumes you hold a Wise Business account. Again, reasonable — just not the same thing as a standalone tool.',
        'A third is free-as-in-design-tool. Canva and Adobe Express will produce a beautiful invoice, but they are design surfaces, not billing tools: no running totals, no tax arithmetic, no line-item logic. You are laying out a document by hand and doing the maths yourself, which is where errors come from.',
        'The fourth, which is rarer, is genuinely free and unattached: no account, no cap, no upsell path, because the tool has no server costs to recover. [QuillBill](/invoice-generator) is in this category by design — it renders locally, so there is no per-invoice cost to pass on and no data to monetise.',
      ],
    },
    {
      heading: 'The fields a generated invoice still has to carry',
      body: [
        'No tool makes an invoice valid. Your tax authority does, and the requirements do not change because a generator produced the document.',
        'In the United States there is no federal invoice format, but the [IRS recordkeeping rules](https://www.irs.gov/businesses/small-businesses-self-employed/recordkeeping) require gross receipts to be supported by documents showing the amounts and sources of your income, which in practice means the invoice needs to identify the parties, the work and the amount clearly enough to stand up years later.',
        'In the UK, [HMRC sets out explicitly what an invoice must contain](https://www.gov.uk/invoicing-and-taking-payment-from-customers/invoices-what-they-must-include), including a unique identifying number, both parties\' names and addresses, a clear description of what you are charging for, the supply and invoice dates, and the amount due. VAT-registered businesses have a longer list again.',
        'In the EU, the [VAT Directive\'s invoicing articles](https://taxation-customs.ec.europa.eu/taxation/vat/vat-businesses/invoicing_en) set a common minimum across member states. Australia has its own [tax invoice requirements](https://www.ato.gov.au/businesses-and-organisations/gst-excise-and-indirect-taxes/gst/tax-invoices) via the ATO, which include the words "tax invoice", the seller\'s ABN and the GST amount.',
        'Practically, this means one thing when choosing a tool: it must let you edit the tax label and add a registration number. A generator hardcoded to "Sales Tax" is useless for a VAT or GST invoice, and a surprising number of US-built tools are.',
      ],
      list: [
        'A unique, non-repeating invoice number',
        'Your legal or trading name, address and contact details',
        'Your VAT, GST, ABN or other registration number where you hold one',
        'The client\'s legal entity name and billing address',
        'The invoice date and, where different, the date of supply',
        'An explicit payment due date rather than "on receipt"',
        'A line-by-line description with quantity and unit rate',
        'Subtotal, discount, correctly labeled tax rate and tax amount',
        'The total payable, with the currency stated unambiguously',
        'How to pay you, in enough detail to actually pay you',
      ],
    },
    {
      heading: 'Where online generators genuinely fall short',
      body: [
        'It is worth being straight about the limits, because most pages on this topic are written by the tools themselves.',
        'A generator produces a document. It does not track whether that document was paid, does not age your receivables, does not reconcile against a bank feed and does not file anything. If you are running enough volume that you cannot remember who owes you money, you have outgrown generators and should be looking at accounting software — that is not a failure of the category, it is the category boundary.',
        'Client-side tools specifically have no invoice history you can search from another machine. QuillBill mitigates this with local autosave and shareable links that encode the document into the URL itself, but a lost laptop is a lost archive. Export and file your PDFs.',
        'And no generator will tell you that your payment terms are the reason you get paid late. That is a pricing and contracting problem, and it is covered in [invoice payment terms](/invoice-payment-terms) and [how to chase an unpaid invoice](/how-to-chase-an-unpaid-invoice).',
      ],
    },
    {
      heading: 'Choosing between the options',
      body: [
        'Reduce it to three questions and the decision usually makes itself.',
        'Do you need a record of what is outstanding across devices? If yes, take a free tier of real accounting software and accept the account. If no, a client-side generator is less overhead and less exposure.',
        'How sensitive is your rate card? Agencies and consultants whose pricing varies by client have a genuine reason to keep that data off third-party servers. A sole trader with one flat day rate has much less at stake.',
        'How often do you invoice? At two or three invoices a month, the setup cost of accounting software is never repaid. At thirty, the manual work of a generator is the expensive part.',
      ],
    },
  ],
  answersHeading: 'Invoice generator questions, answered',
  answers: [
    {
      question: 'What is an online invoice generator?',
      answer:
        'An online invoice generator is a web tool that turns details you type — your business, your client, line items, tax and terms — into a formatted invoice you can download as a PDF. It calculates totals for you and needs no software installed, unlike a spreadsheet or word processor template.',
    },
    {
      question: 'How does an invoice generator work?',
      answer:
        'You fill in a form and the tool renders a document from it. Either the page sends your entries to a server that builds the PDF and returns it, or it assembles the PDF in your browser using JavaScript. Which of the two decides whether your data leaves your device.',
      detail:
        'The airplane-mode test settles it in seconds: load the page, disconnect, then try to export. A browser-based generator completes the whole flow offline. A server-based one fails at the download step.',
    },
    {
      question: 'Are free invoice generators safe to use?',
      answer:
        'Reputable ones are safe in the security sense. The separate question is confidentiality: a server-based generator receives your client names, rates and volumes, which is business-sensitive even when handled competently. If that matters, use a tool that renders locally and transmits nothing.',
    },
    {
      question: 'How do I generate an invoice number?',
      answer:
        'Use a simple sequence such as INV-001, incrementing by one for every invoice you issue. The only firm requirements are that numbers are unique and have no unexplained gaps. Some businesses prefix the year or client, as in 2026-ACME-001, which is fine provided you stay consistent.',
    },
    {
      question: 'Can I generate an invoice offline?',
      answer:
        'Only with a generator that renders in your browser. Once the page has loaded, a client-side tool needs no further network access, so you can fill in and export an invoice on a plane or with no signal. Server-based generators cannot produce the PDF without a connection.',
    },
    {
      question: 'Do I need to download software to generate an invoice?',
      answer:
        'No. Browser-based generators need nothing installed and work on any device with a modern browser, including phones. Downloadable Word and Excel templates require that software; desktop accounting packages require installation and usually a license.',
    },
    {
      question: 'Why does my generated invoice have a watermark?',
      answer:
        'Because the tool is using it as an upgrade prompt. Vendor branding on free-tier exports is one of the most effective ways to convert free users, so it is usually removed on the cheapest paid plan. Always export a real PDF to check — the editor preview often hides it.',
    },
    {
      question: 'How many invoices can I generate for free?',
      answer:
        'It depends entirely on the tool\'s business model. Freemium platforms cap it, often counting invoices and quotes in one pool. Payments-funded and browser-based tools generally do not cap at all, because neither carries a per-invoice cost to recover.',
    },
    {
      question: 'What file format should a generated invoice be?',
      answer:
        'PDF, in almost every case. It renders identically on every device, prints correctly, cannot be casually altered, and is what accounts payable systems expect to receive. Send an editable Word or Excel file only when a client explicitly requires it, and treat the PDF as authoritative.',
    },
    {
      question: 'How long does it take to generate an invoice?',
      answer:
        'The first one takes five to ten minutes because you are entering your business details, tax number and payment information for the first time. Every invoice afterwards should take under two minutes, since a good generator remembers your details and you are only changing the client and the line items.',
    },
    {
      question: 'Can I generate an invoice from an existing template?',
      answer:
        'Yes. Most generators let you pick a layout and keep your details across documents, which is functionally the same as reusing a template but without the file management. If you need a specific visual format a client has mandated, check the tool exports at the right page size first.',
    },
    {
      question: 'Which invoice generator is best?',
      answer:
        'There is no single best, because they optimise for different things. Choose a browser-based tool if you invoice occasionally and want no account, a freemium platform if you need to track who has paid, and a payments-funded tool if most clients pay by card and you want that automated.',
    },
  ],
  faqs: [
    {
      question: 'Is an invoice generated online legally valid?',
      answer:
        'Yes. No jurisdiction requires invoices to be produced by particular software. Validity comes from the content — a unique number, both parties\' details, a clear description, the dates, the tax treatment and the total — not from the tool. Check your own tax authority\'s required fields and make sure the generator lets you include all of them.',
    },
    {
      question: 'Do online invoice generators store my client data?',
      answer:
        'Server-side ones generally do, because the same data feeds their dashboard and reminders. Client-side ones do not, because the document is rendered in your browser and never transmitted. You can check by loading the page, going offline and trying to export — if it still works, nothing is being sent.',
    },
    {
      question: 'What is the difference between an invoice generator and invoicing software?',
      answer:
        'A generator makes one document at a time and hands you the file. Invoicing software maintains an ongoing ledger: it tracks paid and unpaid status, ages your receivables, sends reminders and reports. If you need to know at a glance who owes you money, you need software, not a generator.',
    },
    {
      question: 'Can I generate an invoice without signing up?',
      answer:
        'Yes, though fewer tools allow it than the search results suggest. Client-side generators have no reason to require an account because they hold nothing on your behalf. QuillBill requires no sign-up, no email and no card, and exports without a watermark.',
    },
    {
      question: 'Can I generate an invoice on my phone?',
      answer:
        'Yes. Browser-based generators work on mobile, and a locally rendered one will export a PDF straight to your phone\'s storage or share sheet. The practical constraint is typing long line-item descriptions on a phone keyboard, not the technology.',
    },
    {
      question: 'How do I generate an invoice in a foreign currency?',
      answer:
        'Set the document currency explicitly and state it next to the total rather than relying on the currency symbol, since the dollar and pound signs are ambiguous across countries. If you are invoicing across borders, agree who absorbs the conversion cost before you send, and record the rate you used.',
    },
  ],
  sources: [
    {
      label: 'Invoicing and taking payment from customers: what invoices must include',
      publisher: 'GOV.UK',
      url: 'https://www.gov.uk/invoicing-and-taking-payment-from-customers/invoices-what-they-must-include',
    },
    {
      label: 'Recordkeeping for small businesses and the self-employed',
      publisher: 'Internal Revenue Service',
      url: 'https://www.irs.gov/businesses/small-businesses-self-employed/recordkeeping',
    },
    {
      label: 'VAT invoicing rules',
      publisher: 'European Commission, Taxation and Customs Union',
      url: 'https://taxation-customs.ec.europa.eu/taxation/vat/vat-businesses/invoicing_en',
    },
    {
      label: 'Tax invoices',
      publisher: 'Australian Taxation Office',
      url: 'https://www.ato.gov.au/businesses-and-organisations/gst-excise-and-indirect-taxes/gst/tax-invoices',
    },
    { label: 'Refrens pricing and free document allowance', publisher: 'Refrens', url: 'https://www.refrens.com/pricing' },
  ],
  ctaHeading: 'Generate an invoice without signing up',
  ctaText: 'Open the Invoice Generator',
  ctaLink: '/?mode=invoice',
  crossLinks: [
    { title: 'How to Create an Invoice', description: 'The step-by-step guide to what goes on the document.', href: '/how-to-create-an-invoice' },
    { title: 'Free Invoice Software Compared', description: 'What each free plan actually limits.', href: '/free-invoice-software' },
    { title: 'Free Invoice Templates', description: '15 printable invoice layouts.', href: '/invoice-templates' },
  ],
};

export const freeInvoiceSoftwareGuide: GuideConfig = {
  slug: 'free-invoice-software',
  cluster: 'Tools',
  published: '2026-08-16',
  updated: '2026-08-16',
  summary:
    'The five business models behind "free" invoicing tools, what each one actually limits, and how to avoid the migration trap.',
  keyTakeaways: [
    'There are five distinct "free" models and they fail in completely different ways.',
    'The limit that hurts is rarely the invoice count — it is branding, users, or payment fees.',
    'Payment processing fees are where most free invoicing tools actually make their money.',
    'Check the export path before you commit: getting data out is the real switching cost.',
  ],
  seo: {
    title: 'Free Invoice Software: What Each Free Plan Actually Limits',
    description:
      'Free invoice software, makers and apps compared: the five business models behind "free", the limits that actually bite, and how to avoid lock-in.',
    canonical: '/free-invoice-software',
  },
  h1: 'Free Invoice Software: What "Free" Actually Costs You',
  intro:
    'Every tool in this category calls itself free, and almost all of them are telling the truth about something. The question worth asking is not whether a free invoice maker exists — dozens do — but which constraint each one has chosen, because that constraint is what you will hit in month four. This guide maps the five business models behind free invoicing apps, what each one limits, and how to pick without ending up migrating your billing history in a hurry.',
  sections: [
    {
      heading: 'Nobody gives away invoicing for nothing',
      body: [
        'Invoicing software has real running costs: servers, PCI-compliant payment handling, email deliverability, support and, increasingly, compliance with e-invoicing mandates. A tool giving it away is recovering that cost somewhere. Working out where is the whole exercise.',
        'This is not cynicism. Every model below is a legitimate business, and several produce excellent products. But "free invoice software" describes a price, not a category, and the products underneath it are not comparable to each other.',
      ],
    },
    {
      heading: 'The five models',
      body: [
        'Almost every free invoicing tool you will find fits one of these. Identify the model and you can predict the limit before you read the pricing page.',
      ],
      table: {
        head: ['Model', 'How it pays for itself', 'The limit you will hit', 'Examples'],
        rows: [
          [
            'Freemium ladder',
            'Free tier converts to a paid subscription',
            'Document count, client count, or seats',
            'Refrens, invoicely, Invoice Ninja',
          ],
          [
            'Payments-funded',
            'A percentage of every card or ACH payment',
            'Nothing, until you accept payments through it',
            'Wave, Square',
          ],
          [
            'Ecosystem hook',
            'Routes you into a paid adjacent product',
            'Presumes you hold their account',
            'Wise Business, Zoho, PayPal',
          ],
          [
            'Design surface',
            'Subscription to a broader design suite',
            'No totals, tax or line-item logic',
            'Canva, Adobe Express',
          ],
          [
            'No-server tool',
            'Nothing to recover — renders locally',
            'No dashboard, ledger or reminders',
            'QuillBill',
          ],
        ],
      },
    },
    {
      heading: 'The limits that actually bite',
      body: [
        'Invoice caps get the attention, but in practice they are rarely what pushes people onto a paid plan. Four other limits do it far more often.',
        'Branding is the first. A free plan that stamps its own logo on your invoice is asking your client to notice that you did not pay for software. Some tools remove it on the cheapest paid tier specifically because it is the most effective upgrade prompt they have.',
        'Users are the second. Free tiers are usually single-seat. The moment a bookkeeper, a co-founder or a VA needs access, you are on a paid plan, and per-seat pricing scales faster than invoice-volume pricing.',
        'Payment fees are the third and by far the largest in cash terms. A tool that is free to use but takes roughly 3% on card payments costs a business invoicing $10,000 a month around $300 a month. That dwarfs any subscription in the category. If you route payments through the tool, the subscription price is close to irrelevant to your actual cost.',
        'Recurring invoices are the fourth. Retainer and subscription billing is nearly always a paid feature, because it is the thing businesses with steady revenue need, which makes it the ideal thing to charge for.',
      ],
      list: [
        'Vendor branding or a watermark on the document you send clients',
        'One user seat, with the second seat priced per month',
        'Payment processing fees of roughly 1% to 3.5% per transaction',
        'Recurring and retainer invoicing reserved for paid tiers',
        'Client or contact caps rather than invoice caps',
        'Custom fields and templates locked behind an upgrade',
        'Data export restricted, or available only as PDFs',
      ],
    },
    {
      heading: 'The migration trap, and the one question that avoids it',
      body: [
        'The genuine risk with free invoicing software is not the price. It is that after two years your entire billing history — client records, numbering sequence, paid and unpaid status, tax history — lives in a product you have outgrown, and the exit is painful enough that you stay.',
        'Ask one question before you commit: can I export everything, including line-item detail and payment status, as CSV, without a paid plan? A tool that answers yes has no lock-in. A tool that only exports PDFs is keeping your structured data, which means moving means rekeying it.',
        'This is also the strongest practical argument for the no-server model. If the documents were always local files on your disk, there is nothing to migrate and nothing to be locked out of. The corresponding weakness is equally real: local files are only as safe as your backups.',
      ],
    },
    {
      heading: 'Matching the model to your situation',
      body: [
        'The right answer genuinely differs by circumstance, and anyone telling you one tool wins outright is selling it.',
        'If you invoice occasionally — a side business, a few freelance clients, an annual rental — a no-server generator is the lowest-overhead choice. Nothing to sign up for, nothing to cancel, nothing holding your data. Use [QuillBill](/invoice-generator) or any tool that renders locally, and file the PDFs somewhere you back up.',
        'If you invoice steadily and need to know what is outstanding, take a freemium ladder tool and accept that you will probably pay eventually. Choose on export quality and branding policy rather than on the free invoice count.',
        'If most of your clients pay by card and you want that automated, a payments-funded tool is honest value — you pay only when money moves. Just do the arithmetic on your actual volume first, because the percentage is the real price.',
        'If you need a designed, unusual-looking document more than you need arithmetic, a design surface is fine, but check every total by hand. Doing tax maths manually in a design tool is a reliable source of embarrassing errors.',
      ],
    },
    {
      heading: 'What to check before you commit to any of them',
      body: [
        'A short due-diligence list that takes about fifteen minutes and saves the migration.',
      ],
      list: [
        'Export the data on day one, before you have any, so you know the export exists and what format it is',
        'Send yourself a test invoice and look for vendor branding on the PDF, not just in the editor',
        'Find the payment processing rate and multiply it by your realistic monthly invoiced total',
        'Check whether your tax label can be renamed to VAT, GST or your local equivalent',
        'Confirm you can set your own invoice numbering sequence rather than inheriting theirs',
        'Read what happens to your documents if you stop paying — some tiers lock read access',
        'Check whether the free plan is time-limited or genuinely perpetual',
      ],
    },
  ],
  answersHeading: 'Free invoice software questions, answered',
  answers: [
    {
      question: 'Is there genuinely free invoice software?',
      answer:
        'Yes, in three forms: perpetual free tiers of paid platforms, tools funded by payment processing fees rather than subscriptions, and browser-based generators with no server costs to recover. All are genuinely free at the point of use. They differ in what they limit and what they want from you later.',
    },
    {
      question: 'What is the catch with free invoicing software?',
      answer:
        'Usually one of four things: vendor branding on the invoice you send clients, a single user seat, payment processing fees of roughly one to three-and-a-half percent, or recurring billing reserved for paid plans. The invoice count cap gets the attention but is rarely what pushes people to upgrade.',
    },
    {
      question: 'How do free invoicing apps make money?',
      answer:
        'Most convert a percentage of free users to paid subscriptions. Others take a cut of card and ACH payments processed through them, which on meaningful volume earns far more than a subscription would. A few are loss-leaders routing you toward a business account or accounting product.',
    },
    {
      question: 'Do I have to pay for invoice software eventually?',
      answer:
        'Not necessarily. Many businesses stay on free tiers indefinitely. You will hit a paid plan if you add a second user, need recurring invoices, want the vendor branding removed, or exceed a document cap. If none of those apply, free can last for years.',
    },
    {
      question: 'Can I use free invoice software for a registered business?',
      answer:
        'Yes. Nothing about company registration requires paid software, and free tools produce invoices that satisfy tax authorities provided they carry the required fields. What matters is that you can set your tax label correctly and keep records for your jurisdiction\'s retention period.',
    },
    {
      question: 'How do I move my invoices to different software?',
      answer:
        'Export before you need to. Check on day one whether the tool exports structured data as CSV — client records, line items and payment status — or only PDFs. PDF-only export means migrating involves rekeying everything, which is the real lock-in in this category.',
    },
    {
      question: 'Is free invoice software good enough for a small business?',
      answer:
        'For most, yes. Free tiers typically cover invoicing, basic client records and payment tracking, which is the whole requirement for a business under a handful of people. You outgrow them when you need multiple users, recurring billing or reporting your accountant will accept.',
    },
    {
      question: 'What is the difference between free invoice software and a free invoice generator?',
      answer:
        'Software maintains an ongoing record: it knows which invoices are outstanding, ages your receivables and can chase them. A generator produces one document and hands you the file, remembering nothing. If you need to answer "who owes me money", you need software.',
    },
    {
      question: 'Does free invoicing software include payment processing?',
      answer:
        'Often yes, and this is where the economics sit. Accepting card or bank payments through the tool typically costs one to three-and-a-half percent per transaction. On ten thousand a month that is roughly three hundred, which exceeds most subscriptions in this category.',
    },
    {
      question: 'Can free invoice software handle VAT or GST?',
      answer:
        'Better ones can, but check specifically. Many US-built free tools hardcode "Sales Tax" and cannot be relabelled, which makes them unusable for a VAT or GST invoice. You need an editable tax label, a registration number field, and tax shown as its own line.',
    },
    {
      question: 'Is open source invoicing software free?',
      answer:
        'The software is, but hosting it is not free in time or money. Self-hosted options remove document caps and vendor branding entirely and give you full data ownership. In exchange you take on server costs, updates, backups and security patching, which is a real ongoing commitment.',
    },
  ],
  faqs: [
    {
      question: 'What is the best free invoice software?',
      answer:
        'There is no single best, because the free plans limit different things. If you need a ledger and reminders, a freemium tool like Zoho Invoice or Invoice Ninja is the strongest category. If you invoice occasionally and want no account, a client-side generator like QuillBill is lower overhead. If most clients pay by card, a payments-funded tool such as Wave is honest value.',
    },
    {
      question: 'Is free invoicing software safe to use?',
      answer:
        'Mostly yes, but "safe" has two meanings here. Reputable vendors handle security competently. The separate question is who holds your client list and rate card, which is a business-confidentiality question rather than a security one. If that matters, use a tool that renders locally and transmits nothing.',
    },
    {
      question: 'Does free invoice software put a watermark on invoices?',
      answer:
        'Some do and some do not, and it is worth checking by exporting a real PDF rather than trusting the editor preview. Vendor branding on the free tier is one of the most common upgrade prompts in the category. QuillBill exports without any watermark or branding.',
    },
    {
      question: 'Can I use free invoice software for my business permanently?',
      answer:
        'Often yes, provided you stay inside the limits and can live without recurring billing and multiple users. The practical risk is not the price but lock-in: confirm you can export structured data, not just PDFs, before your billing history becomes hard to move.',
    },
    {
      question: 'What is the difference between a free invoice app and free invoice software?',
      answer:
        'In marketing terms, usually nothing — the words are used interchangeably. Where there is a real distinction, "app" tends to mean a mobile-first tool for invoicing on site, and "software" a desktop or web product with reporting. Judge by the feature list rather than the noun.',
    },
    {
      question: 'Do I need invoicing software to be tax compliant?',
      answer:
        'Not in most countries today, though this is changing. Several jurisdictions are phasing in mandatory structured e-invoicing for B2B transactions, which will require software that can emit the required format. Check your own tax authority\'s timetable rather than assuming your current process stays valid.',
    },
  ],
  sources: [
    {
      label: 'Recordkeeping for small businesses and the self-employed',
      publisher: 'Internal Revenue Service',
      url: 'https://www.irs.gov/businesses/small-businesses-self-employed/recordkeeping',
    },
    { label: 'Refrens pricing and free document allowance', publisher: 'Refrens', url: 'https://www.refrens.com/pricing' },
    {
      label: 'Wise Business free invoicing tool announcement',
      publisher: 'Wise',
      url: 'https://newsroom.wise.com/en-NAM/241770-wise-business-launches-free-professional-invoicing-tool-to-simplify-global-payments-for-smbs',
    },
    {
      label: 'VAT invoicing rules',
      publisher: 'European Commission, Taxation and Customs Union',
      url: 'https://taxation-customs.ec.europa.eu/taxation/vat/vat-businesses/invoicing_en',
    },
  ],
  ctaHeading: 'Try the no-account option first',
  ctaText: 'Create an Invoice Free',
  ctaLink: '/?mode=invoice',
  crossLinks: [
    { title: 'Online Invoice Generator', description: 'How browser invoicing works under the hood.', href: '/online-invoice-generator' },
    { title: 'Create an Invoice for Free', description: 'The fastest route from blank page to sent PDF.', href: '/create-invoice-free' },
    { title: 'Invoice Payment Terms', description: 'The terms that actually get you paid on time.', href: '/invoice-payment-terms' },
  ],
};

export const createInvoiceFreeGuide: GuideConfig = {
  slug: 'create-invoice-free',
  cluster: 'Invoicing',
  published: '2026-08-16',
  updated: '2026-08-16',
  summary:
    'Four routes to a free invoice compared on speed and accuracy, plus the pre-send checks that stop invoices being queried.',
  keyTakeaways: [
    'Four realistic free routes: browser generator, spreadsheet, word processor, or a free SaaS tier.',
    'Spreadsheets are free but are the most common source of invoice arithmetic errors.',
    'The first invoice takes ten minutes; every later one should take under two.',
    'Most payment delays start with a vague description or a missing due date, not a missing tool.',
  ],
  seo: {
    title: 'Create an Invoice for Free: 4 Ways Compared',
    description:
      'Create a free invoice in minutes. Four methods compared — browser generator, spreadsheet, Word and free SaaS — plus the checks that stop queries.',
    canonical: '/create-invoice-free',
  },
  h1: 'How to Create an Invoice for Free',
  intro:
    'You can create an invoice free in four different ways, and they are not equally good. One is fast and accurate, one is fast and error-prone, one is slow but universally compatible, and one is free until it is not. This guide walks through each, shows which to pick for your situation, and covers the pre-send checks that make the difference between an invoice that gets paid and one that gets queried.',
  howTo: {
    name: 'Create a free invoice',
    description:
      'Produce a complete, professional invoice at no cost, from choosing a method through to the checks you run before sending it.',
    steps: [
      {
        title: 'Pick your method',
        description:
          'A browser generator for speed and correct arithmetic, a spreadsheet if you already track work in one, a word processor if the client insists on an editable file, or a free SaaS tier if you also need payment tracking.',
      },
      {
        title: 'Set up your details once',
        description:
          'Enter your business name, address, contact details and tax number. Save this as a reusable starting point so you never retype it — this single step is what turns a ten-minute task into a two-minute one.',
      },
      {
        title: 'Add the client and the numbering',
        description:
          'Enter the client\'s legal entity and billing address. Assign the next number in your sequence and record it somewhere, because duplicate invoice numbers are the most common bookkeeping mess to unpick.',
      },
      {
        title: 'Write line items a stranger could approve',
        description:
          'Describe each item so that someone in accounts payable who has never spoken to you can match it to an approved purchase and sign it off without emailing you.',
      },
      {
        title: 'Apply tax and check the arithmetic',
        description:
          'Add your tax rate as a visible separate line. If you are in a spreadsheet or word processor, verify the subtotal, tax and total by hand — this is where free methods most often go wrong.',
      },
      {
        title: 'State terms and payment details',
        description:
          'Give an explicit due date, not "on receipt", and include the exact payment details. An invoice without a way to pay it is a notification, not a request.',
      },
      {
        title: 'Export a PDF and run the final checks',
        description:
          'Always send PDF, never an editable file. Open the exported PDF, confirm the total and due date, check no placeholder text survived, then send it to the person who actually approves payments.',
      },
    ],
  },
  sections: [
    {
      heading: 'The four free routes, compared honestly',
      body: [
        'Each of these genuinely costs nothing. They differ in how long they take, how likely they are to contain an error, and what they cost you in attention later.',
      ],
      table: {
        head: ['Method', 'Time for invoice #1', 'Time for invoice #10', 'Main risk'],
        rows: [
          ['Browser generator', '5–10 min', 'Under 2 min', 'No payment tracking'],
          ['Spreadsheet template', '15–30 min', '3–5 min', 'Formula and rounding errors'],
          ['Word processor', '20–40 min', '5–10 min', 'Manual arithmetic, layout drift'],
          ['Free SaaS tier', '15 min plus sign-up', 'Under 2 min', 'Limits, branding, lock-in'],
        ],
      },
    },
    {
      heading: 'Why spreadsheets cause more problems than they solve',
      body: [
        'A spreadsheet invoice feels free and controllable, and for a while it is. The failure mode is specific and predictable: you copy last month\'s file, change the client and the items, and a formula range does not extend to the new row. The subtotal silently excludes a line. You send it, the client pays the wrong amount, and you find out at the quarter end.',
        'The related error is rounding. Spreadsheets display rounded values while calculating with the full precision underneath, so a column of visibly correct line totals can add up to a total that is a cent or two off. On a single invoice that is trivial; across a VAT return it is a reconciliation you did not need.',
        'If you do use a spreadsheet, protect the formula cells, use explicit ROUND() at the line level rather than relying on display formatting, and never extend the table by copying the last row without checking every range. Or use a tool where the arithmetic is not your problem.',
      ],
    },
    {
      heading: 'When a word processor is the right answer',
      body: [
        'There is one situation where Word or Google Docs genuinely wins: a client whose procurement process demands an editable document in a specific format, usually because they paste it into their own system. It happens, particularly with large organizations and public-sector buyers.',
        'Outside that case, avoid it. Word processors do no arithmetic, layouts drift as content grows, and an editable invoice file is an invitation to a dispute about what the agreed figure was. If you must send one, send the PDF as well and state that the PDF governs.',
      ],
    },
    {
      heading: 'The fastest genuinely free route',
      body: [
        'For most people creating a free invoice, a browser generator that requires no account is the shortest path. There is no sign-up, the totals and tax are calculated for you, and the PDF export is properly paginated for A4 or Letter.',
        '[QuillBill](/invoice-generator) does this with no account, no watermark and no cap, and because it renders in your browser, your client details and rates are never transmitted anywhere. Your details are remembered locally, so the second invoice is largely pre-filled.',
        'The honest limitation, as covered in [free invoice software](/free-invoice-software), is that a generator will not tell you who has paid. If you need that, pair it with a simple spreadsheet ledger of invoice number, date, amount and paid status — that combination stays free and covers most freelance and small-business needs for a long time.',
      ],
    },
    {
      heading: 'The checks that stop an invoice being queried',
      body: [
        'Payment delays are usually caused at the point of writing, not the point of chasing. Almost all of them trace back to this list.',
      ],
      list: [
        'The invoice went to the person who approves payments, not only your day-to-day contact',
        'The client\'s legal entity name is correct, not just their trading or brand name',
        'A purchase order or reference number is quoted, if the client uses them',
        'Every line item is specific enough to approve without a follow-up email',
        'The due date is an actual date, not "on receipt" or "net 30" alone',
        'The tax rate and label match your registration status and jurisdiction',
        'Bank details are complete, including any IBAN, SWIFT or routing number needed',
        'The file is a PDF, named something like Invoice-INV-014-YourBusiness.pdf',
        'The invoice number is unique and recorded in your own records',
      ],
    },
    {
      heading: 'Free now, but plan for later',
      body: [
        'Whichever route you take, do two things from the first invoice. Keep your own record of invoice number, client, date, amount and paid status somewhere independent of the tool. And keep the PDFs in a folder you back up.',
        'Both take seconds per invoice and mean you are never dependent on any single tool continuing to exist, stay free, or let you export. Most tax authorities expect you to retain records for five to seven years, which is longer than a good many free tools survive.',
      ],
    },
  ],
  answersHeading: 'Creating a free invoice: common questions',
  answers: [
    {
      question: 'Can I invoice someone without a company?',
      answer:
        'Yes. In the US and most other countries you can invoice in your own legal name without registering a business — you are automatically treated as a sole proprietor for tax purposes. Include your personal tax identification number if your country requires one on invoices.',
      detail:
        'The practical difference is what goes in the "from" block: your legal name and address in place of a company name. Everything else — numbering, dates, line items, tax treatment — is identical. See [freelance invoicing](/freelance-invoicing-guide) for the fuller picture.',
    },
    {
      question: 'Is it legal to make your own invoice?',
      answer:
        'Yes, everywhere. No jurisdiction requires invoices to come from particular software or from a registered company. Validity comes from the content — unique number, both parties identified, clear description, dates, correct tax treatment and total — not from who produced the document.',
    },
    {
      question: 'How do I make an invoice in Word for free?',
      answer:
        'Word ships with invoice templates under File, New. Fill in your details, the client, and the line items. The critical caveat is that Word calculates nothing, so subtotals, tax and the total are typed by hand and must be checked every time you revise the document.',
    },
    {
      question: 'How do I make an invoice in Excel for free?',
      answer:
        'Use a built-in or downloaded template, which will have subtotal and tax formulas already in place. The recurring failure is adding a line item outside the formula range, so the subtotal silently omits it. Check that your total still matches the sum of the lines after every edit.',
    },
    {
      question: 'What should I put on my first invoice?',
      answer:
        'Your name and address, the client\'s legal entity and billing address, a unique invoice number, the issue date, an explicit due date, itemized work with quantities and rates, any tax as a separate line, the total, and exactly how you want to be paid.',
    },
    {
      question: 'How do I send an invoice to a client?',
      answer:
        'Email a PDF attachment to the person who approves payments, not only your day-to-day contact. Use a clear subject line with your business name and the invoice number, and name the file the same way. Keep the email short and state the amount and due date in it.',
    },
    {
      question: 'How soon should I send an invoice after finishing work?',
      answer:
        'The same day, or the next. Payment terms run from the invoice date, so waiting until month end pushes your payment date out by however long you waited. Prompt invoicing is the cheapest improvement available to your cashflow and costs nothing to adopt.',
    },
    {
      question: 'Can I invoice in a different currency?',
      answer:
        'Yes. State the currency explicitly next to the total using its ISO code, since dollar and pound symbols are ambiguous across countries. Agree in advance who absorbs conversion costs and bank charges, and record the exchange rate you used for your own records.',
    },
  ],
  faqs: [
    {
      question: 'How can I create an invoice for free without signing up?',
      answer:
        'Use a browser-based generator that renders locally. Open it, fill in your business and client details, add line items, set tax and terms, then export the PDF. QuillBill requires no account, no email and no card, and does not watermark the export.',
    },
    {
      question: 'Can I create an invoice in Word or Google Docs for free?',
      answer:
        'Yes, and both have invoice templates built in. The drawback is that neither calculates anything, so subtotals, tax and totals are manual and must be checked by hand every time. Use them when a client specifically requires an editable file, and send a PDF alongside.',
    },
    {
      question: 'Is it legal to create your own invoice?',
      answer:
        'Yes. Anyone selling goods or services can issue their own invoice, and no jurisdiction requires you to buy software to do it. What matters is that the document contains the fields your tax authority requires and that you keep a copy for the retention period.',
    },
    {
      question: 'How do I create a free invoice as a freelancer without a company?',
      answer:
        'Invoice in your own legal name and address in place of a company name, and include your personal tax identification number if your country requires one. Everything else is identical. There is a fuller walkthrough in the freelance invoicing guide.',
    },
    {
      question: 'What should my first invoice number be?',
      answer:
        'Anything simple and sequential, such as INV-001 or 2026-001. Some people start higher to look established; that is harmless as long as the sequence is then unbroken. The only real rules are that numbers must be unique and should not have unexplained gaps.',
    },
    {
      question: 'Should I send an invoice as a PDF or a Word file?',
      answer:
        'PDF, almost always. It renders identically everywhere, cannot be casually altered, and is what accounts payable systems expect. Send an editable format only when the client explicitly requires it, and treat the PDF as the authoritative version.',
    },
  ],
  sources: [
    {
      label: 'Recordkeeping: how long to keep records',
      publisher: 'Internal Revenue Service',
      url: 'https://www.irs.gov/businesses/small-businesses-self-employed/how-long-should-i-keep-records',
    },
    {
      label: 'Invoicing and taking payment from customers',
      publisher: 'GOV.UK',
      url: 'https://www.gov.uk/invoicing-and-taking-payment-from-customers',
    },
  ],
  ctaHeading: 'Create your free invoice now',
  ctaText: 'Create Invoice Free',
  ctaLink: '/?mode=invoice',
  crossLinks: [
    { title: 'How to Create an Invoice', description: 'What every invoice must contain, field by field.', href: '/how-to-create-an-invoice' },
    { title: 'Free Invoice Templates', description: '15 layouts you can fill in and export.', href: '/invoice-templates' },
    { title: 'Freelance Invoicing Guide', description: 'Invoicing without a registered company.', href: '/freelance-invoicing-guide' },
  ],
};

export const freeInvoiceTemplateGuide: GuideConfig = {
  slug: 'free-invoice-template-guide',
  cluster: 'Invoicing',
  published: '2026-08-16',
  updated: '2026-08-16',
  summary:
    'Choosing an invoice template by file format and industry, the layout decisions that affect payment speed, and why template sites hold 1,000 near-identical files.',
  keyTakeaways: [
    'Format matters more than design: Word, Excel, PDF and fill-in-browser fail in different ways.',
    'Template count is a marketing metric — 1,000 templates are usually a dozen layouts recoloured.',
    'Put the total and the due date in the top third; that is where they get read.',
    'A blank invoice form you print and hand-write is still the right answer for some trades.',
  ],
  seo: {
    title: 'Free Invoice Template: How to Choose the Right Format',
    description:
      'Free invoice templates compared by format — Word, Excel, PDF and fill-in-browser. Which to use, and the layout rules that speed up payment.',
    canonical: '/free-invoice-template-guide',
  },
  h1: 'Free Invoice Templates: Choosing a Format That Actually Works',
  intro:
    'Searching for a free invoice template returns sites advertising 200, 1,000, even 1,140 templates. That number is a marketing metric, not a feature — it is almost always a dozen layouts in different colorways. The choice that genuinely affects your working life is the file format, because Word, Excel, PDF and fill-in-browser templates fail in completely different ways. This guide covers how to choose, what a good layout does, and when a template is the wrong tool entirely.',
  sections: [
    {
      heading: 'Choose the format first, the design second',
      body: [
        'Every invoice template is one of four things, and the format determines what can go wrong with it.',
        'A Word template is editable, universally openable and does no arithmetic. Totals are typed by hand, which means they can be wrong, and the layout shifts as you add rows. Best when a client demands an editable file.',
        'An Excel template calculates, which is its advantage and its risk. Formula ranges that do not extend when you add a line silently drop that line from the subtotal. Best when you already track your work in a spreadsheet and can maintain the formulas carefully.',
        'A fillable PDF looks exactly right and cannot be accidentally reformatted. Most do no arithmetic, and editing one properly needs software many people do not have. Best for a fixed, repeating invoice.',
        'A fill-in-browser template calculates, exports a clean PDF and needs nothing installed. It is the lowest-risk option for most people, with the caveat that you should confirm whether your data is being transmitted, as covered in [online invoice generator](/online-invoice-generator).',
      ],
      table: {
        head: ['Format', 'Calculates', 'Needs software', 'Main failure mode'],
        rows: [
          ['Word / Google Docs', 'No', 'Word processor', 'Manual arithmetic errors'],
          ['Excel / Sheets', 'Yes', 'Spreadsheet app', 'Formula ranges miss new rows'],
          ['Fillable PDF', 'Rarely', 'PDF editor', 'Hard to edit, fixed row count'],
          ['Fill-in-browser', 'Yes', 'Nothing', 'Data may be transmitted'],
          ['Printable blank form', 'No', 'A printer', 'Legibility and lost copies'],
        ],
      },
    },
    {
      heading: 'What separates a good invoice layout from a pretty one',
      body: [
        'An invoice has one job: get approved and paid without a follow-up question. A handful of layout decisions measurably help with that, and none of them are about color.',
        'Put the amount due and the due date in the top third of the page. The person approving it is scanning, often on a phone, and frequently never reaches the bottom. Burying the total under a decorative header costs you days.',
        'Give line items room. Cramped descriptions get abbreviated, abbreviated descriptions get queried, and a queried invoice restarts the payment clock. A layout that fits eight comfortable lines beats one that crams in twenty.',
        'Make the payment details impossible to miss. A surprising number of otherwise attractive templates render bank details in small grey type at the very bottom, which is the least-read part of the page.',
        'Keep the tax line separate and clearly labeled. Folding tax into unit prices makes the invoice unusable for a VAT- or GST-registered client, who needs the tax amount stated to reclaim it.',
      ],
      list: [
        'Total and due date visible without scrolling or squinting',
        'The word "Invoice" and the invoice number prominent at the top',
        'Enough vertical space per line item for a real description',
        'Tax shown as its own labeled line with the rate stated',
        'Payment details in body-text size, not footnote size',
        'Your contact details present, so queries reach you rather than stalling',
        'Prints correctly on both A4 and US Letter without clipping',
      ],
    },
    {
      heading: 'Industry differences that actually matter',
      body: [
        'Most "industry-specific" templates differ only in the stock photo. A few genuine differences are worth knowing about.',
        'Trades and construction invoices usually need labour and materials separated, often with hours and an hourly rate shown explicitly, because clients and insurers query combined figures. Retention and staged payments are common and need their own lines.',
        'Consulting and professional services invoices increasingly need a period covered — "services for March 2026" — as well as a description, because the client is approving against a monthly budget rather than a deliverable.',
        'Product sales need quantity, unit price and often a SKU or item code, plus shipping as a separate line, since shipping is frequently taxed differently from goods.',
        'Cross-border invoices need the currency stated in words or ISO code rather than by symbol, and often a note on which party bears bank charges.',
      ],
    },
    {
      heading: 'When a printable blank form is still right',
      body: [
        'It is easy to treat paper as obsolete, and for most businesses it is. But a printed blank invoice form remains the correct tool in specific circumstances: mobile trades handing over a document at the point of work, cash-basis retail, markets and stalls, and any setting where a client expects to walk away holding something.',
        'If that is you, print a stack of numbered blank forms so the numbering stays sequential and cannot be duplicated, use a duplicate book or photograph each one before handing it over, and transfer them into a digital record weekly rather than at year end.',
      ],
    },
    {
      heading: 'Why template sites advertise a thousand templates',
      body: [
        'It is worth understanding the incentive, because it explains why choosing takes so long. Template pages are extremely effective for search: each one is a landing page, and a large library covers a large number of long-tail queries. The library size is a traffic strategy.',
        'What this means for you is practical. Do not try to evaluate a thousand options. Decide your format, pick a layout that puts the total and due date near the top, and standardize on it. Changing templates between invoices makes your business look unsettled and makes your own records harder to scan.',
        'QuillBill\'s [invoice templates](/invoice-templates) are 15 distinct layouts rather than a large recoloured library, and all of them calculate and export as PDF from the browser. That is the number that is actually useful to choose between.',
      ],
    },
  ],
  answersHeading: 'Invoice template questions, answered',
  answers: [
    {
      question: 'Is Word or Excel better for an invoice template?',
      answer:
        'Excel if you want the arithmetic done for you, Word if you want control over layout and branding. Excel calculates subtotals and tax but is awkward to style; Word looks better but computes nothing, so every total is manual. Neither is ideal if you invoice often.',
    },
    {
      question: 'What is a blank invoice form?',
      answer:
        'A printable layout with the labels in place and the values left empty, designed to be completed by hand. It remains genuinely useful for mobile trades, market stalls and anywhere the customer expects to walk away holding a document at the point of sale.',
    },
    {
      question: 'How do I add my logo to an invoice template?',
      answer:
        'In Word and browser-based templates, use the image placeholder in the header. Keep it modest — around 150 pixels wide is plenty. A logo that dominates the page pushes the amount due and the due date below the fold, which is where they stop getting read.',
    },
    {
      question: 'Should an invoice template be A4 or Letter?',
      answer:
        'Match your client\'s country: A4 almost everywhere, US Letter in the United States and Canada. The two differ enough that a template designed for one can clip content on the other. Export a PDF and check nothing is cut off before you standardize on a template.',
    },
    {
      question: 'Can I use the same template for invoices and quotations?',
      answer:
        'Only after changing the heading and adding three fields a quotation needs: a validity date, an exclusions list, and an instruction on how to accept. Without those you have sent a price list rather than an offer. See [free quotation templates](/free-quotation-template-guide).',
    },
    {
      question: 'How many invoice templates do I need?',
      answer:
        'One, for most businesses. Consistency makes your invoices recognizable to clients who process many, and makes your own records easier to scan. Keep a second only if you do materially different work, such as retainers alongside project fees.',
    },
    {
      question: 'Are downloadable invoice templates safe?',
      answer:
        'From reputable sources, yes. The one real warning sign is a template that asks you to enable macros — an invoice layout has no legitimate need for them, and macro-enabled Office files are a long-standing malware vector. Decline and find another template.',
    },
    {
      question: 'What is the difference between an invoice template and an invoice form?',
      answer:
        'The terms are used loosely and often interchangeably. Where a distinction is drawn, a template is a designed document you customize and reuse digitally, while a form is a blank printable layout completed by hand. Searches for free invoice forms usually mean the printable kind.',
    },
    {
      question: 'Do free invoice templates work on a phone?',
      answer:
        'Browser-based ones do. Word and Excel templates open in mobile apps but are painful to edit on a small screen, particularly for table columns. If you invoice from site or on the road, a browser template that exports straight to your share sheet is far more practical.',
    },
    {
      question: 'Why do template sites advertise a thousand invoice templates?',
      answer:
        'Because each template page is a landing page, and a large library covers a large number of long-tail searches. The number is a traffic strategy rather than a feature. In practice most large libraries are a dozen layouts in different colorways.',
    },
  ],
  faqs: [
    {
      question: 'What is the best free invoice template format?',
      answer:
        'Fill-in-browser for most people, because it calculates the totals and exports a clean PDF with nothing to install. Choose Excel if you already work in spreadsheets and will maintain the formulas, and Word only when a client specifically requires an editable file.',
    },
    {
      question: 'Are free invoice templates safe to use?',
      answer:
        'Downloadable Word and Excel templates from reputable sources are fine, though as with any downloaded document, be wary of files that ask you to enable macros — an invoice template has no legitimate need for them. For browser-based templates, the question is whether your data is transmitted.',
    },
    {
      question: 'Can I edit a free invoice template with my own logo and colors?',
      answer:
        'Yes in every format, though the effort varies. Word and browser-based templates make it trivial. Fillable PDFs often lock the design, so branding means going back to the source file. Keep the logo modest — it should identify you, not dominate the page above the amount due.',
    },
    {
      question: 'How many invoice templates do I actually need?',
      answer:
        'One, in most cases. Consistency makes your invoices recognizable to clients who receive many of them and makes your own records easier to scan. You might keep a second for a materially different type of work, such as retainers versus project fees.',
    },
    {
      question: 'Do free invoice templates include tax calculations?',
      answer:
        'Excel and browser-based ones usually do. Word and fillable PDF versions almost never do, so the tax and total are typed by hand. If you are tax-registered, this is the single most important thing to check before adopting a template.',
    },
  ],
  sources: [
    {
      label: 'Invoicing and taking payment from customers: what invoices must include',
      publisher: 'GOV.UK',
      url: 'https://www.gov.uk/invoicing-and-taking-payment-from-customers/invoices-what-they-must-include',
    },
    {
      label: 'Tax invoices',
      publisher: 'Australian Taxation Office',
      url: 'https://www.ato.gov.au/businesses-and-organisations/gst-excise-and-indirect-taxes/gst/tax-invoices',
    },
  ],
  ctaHeading: 'Fill in an invoice template now',
  ctaText: 'Browse Invoice Templates',
  ctaLink: '/invoice-templates',
  crossLinks: [
    { title: 'Free Invoice Templates', description: '15 distinct layouts, all fill-in-browser.', href: '/invoice-templates' },
    { title: 'Create an Invoice for Free', description: 'Four free methods compared.', href: '/create-invoice-free' },
    { title: 'Free Quotation Templates', description: 'The same decisions, for quotes.', href: '/free-quotation-template-guide' },
  ],
};

export const invoiceGeneratorAlternativesGuide: GuideConfig = {
  slug: 'invoice-generator-alternatives',
  cluster: 'Tools',
  published: '2026-08-16',
  updated: '2026-08-16',
  summary:
    'What the Wise and Refrens invoice generators actually do, the account and document limits attached to each, and when a no-account tool fits better.',
  keyTakeaways: [
    'Wise\'s invoicing tool is free and uncapped but is built around holding a Wise Business account.',
    'Refrens states a 15-document free allowance on its own pricing page, after which you subscribe.',
    'Brand-name generators are usually the front door to a broader financial product.',
    'If you want neither an account nor a payment rail, a client-side generator is the smaller commitment.',
  ],
  seo: {
    title: 'Wise vs Refrens Invoice Generator: Limits Compared',
    description:
      'What the Wise and Refrens invoice generators do, their account requirements and document limits, and how they compare to a no-sign-up client-side alternative.',
    canonical: '/invoice-generator-alternatives',
  },
  h1: 'Wise and Refrens Invoice Generators Compared',
  intro:
    'Two names come up constantly when people search for a specific invoice generator: Wise and Refrens. Both are real products from established companies, both are genuinely useful, and both are attached to something larger — which is the part worth understanding before you commit your invoicing to either. This guide covers what each does, what it requires of you, and how they compare with a tool that asks for nothing at all.',
  sections: [
    {
      heading: 'Why brand-name generators exist at all',
      body: [
        'A free invoice generator is an expensive thing to run and gives away no revenue on its own. Companies build them because an invoice is the moment a business decides how it wants to be paid, and that is an extremely valuable moment to be present for.',
        'That is not a criticism. It does mean the generator is the front door rather than the house, and the house is usually a payments product, an accounting platform or a business account. Knowing which house you are walking into is the useful part.',
      ],
    },
    {
      heading: 'The Wise invoice generator',
      body: [
        'Wise, the international money transfer company, offers a free invoice generator alongside a fuller invoicing tool for Wise Business customers. The generator itself produces a clean, professional PDF and, according to Wise, does not cap how many invoices you create.',
        'The fuller tool, [launched for Wise Business customers](https://newsroom.wise.com/en-NAM/241770-wise-business-launches-free-professional-invoicing-tool-to-simplify-global-payments-for-smbs), adds emailed invoices, payment tracking and reconciliation, and connects to Wise\'s accounting integrations. It is free of charge to Wise Business account holders.',
        'The logic is straightforward: Wise\'s advantage is cross-border payments at the mid-market exchange rate, and an invoice denominated in a foreign currency is precisely where that advantage shows. If you already invoice international clients and hold or want a Wise Business account, this is a coherent, well-built option.',
        'The consideration is that its value is tied to that account. If you invoice domestically in your own currency and have no interest in a Wise account, you are using a competent generic generator whose real strengths do not apply to you.',
      ],
    },
    {
      heading: 'The Refrens invoice generator',
      body: [
        'Refrens is a business operating system aimed largely at freelancers and small businesses, particularly strong in India, covering invoicing, quotations, expenses and basic CRM. Its free invoice generator is the entry point.',
        'On the free tier, Refrens\' [pricing page](https://www.refrens.com/pricing) states that you can create 15 documents for free, after which you subscribe to a premium plan to keep generating new ones. Note that "documents" spans invoices, quotations and other record types, so the allowance covers your whole document output rather than invoices alone. Marketing pages elsewhere on the site describe the free offering more loosely, so treat the pricing page as the authoritative statement.',
        'What you get in exchange for the account is real: a persistent record of what you have issued, quotation-to-invoice conversion, multi-currency support, and GST-aware formats that suit Indian businesses considerably better than most US-built tools. If you need those, the document limit is a reasonable trial allowance rather than a trap.',
        'The consideration is the same as any freemium ladder, covered in more depth in [free invoice software](/free-invoice-software): once your history lives there, moving costs effort. Check the export before you rely on it.',
      ],
    },
    {
      heading: 'How the three approaches compare',
      body: [
        'Set side by side, these are not really competing products — they are three different commitments.',
      ],
      table: {
        head: ['', 'Wise', 'Refrens', 'Client-side tool'],
        rows: [
          ['Account required', 'For the full tool', 'Yes', 'No'],
          ['Free document limit', 'Uncapped', '15 documents (free tier)', 'Uncapped'],
          ['Invoice history', 'Yes, in-account', 'Yes, in-account', 'Local only'],
          ['Data leaves your device', 'Yes', 'Yes', 'No'],
          ['Strongest at', 'Cross-border payment', 'All-in-one small business ops', 'Occasional, private invoicing'],
          ['Natural upgrade path', 'Wise Business account', 'Premium subscription', 'None'],
        ],
      },
    },
    {
      heading: 'Which one fits your situation',
      body: [
        'If most of your invoices cross a currency border, Wise is the strongest of the three, and the account requirement is buying you something concrete rather than just capturing you.',
        'If you want one place holding invoices, quotes, expenses and clients, and especially if you are invoicing within India, Refrens does considerably more than a generator and the free allowance is enough to evaluate it properly.',
        'If you invoice occasionally, invoice domestically, or simply do not want your client list and rates on a third-party server, a client-side generator is the smallest possible commitment. [QuillBill](/invoice-generator) renders entirely in your browser, requires no account, has no document limit and adds no watermark — with the honest trade-off that it keeps no history for you and sends no reminders.',
        'A combination is also perfectly sensible: a no-account generator for one-off and sensitive work, and a platform account for the recurring client base where the tracking earns its keep.',
      ],
    },
    {
      heading: 'Checking these details yourself',
      body: [
        'Free-tier terms in this category change frequently, and every figure above was taken from the vendors\' own pages in August 2026. Before you commit, verify the current position at the source — pricing pages are updated far more often than the comparison articles that cite them, including this one.',
        'Where a vendor\'s marketing page and pricing page disagree, as happens on more than one tool in this space, the pricing page and the terms of service are what you will actually be held to.',
      ],
    },
  ],
  answersHeading: 'Wise and Refrens: what people ask',
  answers: [
    {
      question: 'What is the Wise invoice generator?',
      answer:
        'A free tool from the money transfer company Wise that produces a professional invoice PDF. It exists alongside a fuller invoicing product for Wise Business account holders, which adds emailed invoices, payment tracking and reconciliation against your Wise transactions.',
    },
    {
      question: 'Is Refrens really free?',
      answer:
        'The free tier is real but bounded. Refrens\' pricing page states an allowance of 15 documents, after which you subscribe to keep generating new ones. The allowance covers documents generally rather than invoices alone, so quotations count against the same pool.',
    },
    {
      question: 'Is Refrens good for Indian businesses?',
      answer:
        'It is one of the stronger options for that market. Refrens handles GST-aware invoice formats and Indian numbering conventions considerably better than most US-built tools, and bundles quotations, expenses and light CRM alongside invoicing rather than selling them separately.',
    },
    {
      question: 'Does Wise charge for invoicing?',
      answer:
        'No. The generator is free to use and the fuller invoicing tool is free of charge to Wise Business customers. Wise earns from the currency conversion and transfer fees when clients actually pay you, which is why the invoicing itself does not need to be priced.',
    },
    {
      question: 'What happens when I hit the Refrens free limit?',
      answer:
        'You can still access what you have created, but generating new documents requires a premium plan. Because the cap counts documents rather than invoices, a business that also sends quotations will reach it faster than the number suggests.',
    },
    {
      question: 'Which is better, Wise or Refrens?',
      answer:
        'They solve different problems. Wise is stronger if your invoices cross currency borders, since that is where its exchange rate advantage applies. Refrens is stronger if you want invoicing, quoting, expenses and client records in one place, particularly for the Indian market.',
    },
    {
      question: 'Do I need a Wise account to use their invoice generator?',
      answer:
        'Not for the standalone generator, which produces a PDF without one. The features that make it genuinely useful — emailing invoices, tracking payment status, reconciling against received funds — are part of Wise Business and require that account.',
    },
    {
      question: 'What is a good alternative to Wise and Refrens?',
      answer:
        'If you want no account at all, a browser-based generator such as QuillBill requires nothing and stores nothing. If you want a full ledger, Zoho Invoice and Invoice Ninja are the closest freemium equivalents. If most clients pay by card, Wave is funded by transaction fees instead of subscriptions.',
    },
    {
      question: 'Can I export my data out of Refrens?',
      answer:
        'Check this before you depend on it rather than after. Export capability on free plans varies across this whole category, and the difference between structured CSV export and PDF-only export is the difference between a painless migration and rekeying your billing history.',
    },
  ],
  faqs: [
    {
      question: 'Is the Wise invoice generator free?',
      answer:
        'Yes. The standalone generator is free to use and Wise does not cap the number of invoices you can create with it. The fuller invoicing tool with payment tracking and reconciliation is free of charge to Wise Business account holders, so it presumes you hold that account.',
    },
    {
      question: 'How many free invoices can I create on Refrens?',
      answer:
        'Refrens\' pricing page states a free allowance of 15 documents, after which you move to a premium plan to keep generating new ones. The allowance covers documents generally rather than invoices specifically. Other pages on the site describe the free tier more loosely, so check the pricing page for the current position.',
    },
    {
      question: 'Do I need a Wise account to use the Wise invoice generator?',
      answer:
        'Not for the basic generator, which produces a PDF without one. The fuller invoicing features — emailing invoices, tracking payment status and reconciling against transactions — are part of Wise Business and require that account.',
    },
    {
      question: 'What is a good alternative to Wise and Refrens for invoicing?',
      answer:
        'It depends what you are avoiding. If you want no account at all, a client-side generator such as QuillBill requires nothing and stores nothing. If you want a full ledger, Zoho Invoice and Invoice Ninja are the closest freemium equivalents to Refrens. If you want payments included, Wave is funded by transaction fees rather than subscriptions.',
    },
    {
      question: 'Can I move my invoices from one generator to another?',
      answer:
        'Usually you can export PDFs, but structured data such as client records and line-item detail is often harder to extract on a free plan. Test the export before you have a year of history to move — this is the single most useful check to run on any invoicing tool you plan to depend on.',
    },
  ],
  sources: [
    {
      label: 'Wise Business launches free professional invoicing tool',
      publisher: 'Wise Newsroom',
      url: 'https://newsroom.wise.com/en-NAM/241770-wise-business-launches-free-professional-invoicing-tool-to-simplify-global-payments-for-smbs',
    },
    { label: 'Pricing and free plan allowance', publisher: 'Refrens', url: 'https://www.refrens.com/pricing' },
  ],
  ctaHeading: 'Or invoice with no account at all',
  ctaText: 'Open the Free Generator',
  ctaLink: '/?mode=invoice',
  crossLinks: [
    { title: 'Free Invoice Software Compared', description: 'The five models behind "free".', href: '/free-invoice-software' },
    { title: 'Online Invoice Generator', description: 'How browser invoicing works.', href: '/online-invoice-generator' },
    { title: 'Free Invoice Generator', description: 'No account, no watermark, no limit.', href: '/invoice-generator' },
  ],
};
