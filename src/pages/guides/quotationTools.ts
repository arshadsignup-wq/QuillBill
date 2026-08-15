import type { GuideConfig } from './types';

/**
 * The quotation tool cluster. /how-to-write-a-quotation owns the "what do I
 * put in it" intent; these own tool choice, template format, and the buyer
 * side of the transaction (requesting a quote rather than issuing one).
 */

export const quotationGeneratorGuide: GuideConfig = {
  slug: 'quotation-generator-guide',
  cluster: 'Tools',
  published: '2026-08-16',
  updated: '2026-08-16',
  summary:
    'What a quotation generator has to do that an invoice tool does not — validity dates, optional items, acceptance — and how to pick one.',
  keyTakeaways: [
    'A quotation is an offer, not a bill, so it needs a validity date and an acceptance path.',
    'Most "quotation generators" are invoice tools with the heading changed, which loses both.',
    'Optional and alternative line items raise average deal size and few tools support them.',
    'The quote-to-invoice conversion is the feature that saves the most time in practice.',
  ],
  seo: {
    title: 'Quotation Generator: What to Look For in a Quote Tool',
    description:
      'How a quotation generator differs from an invoice tool: validity dates, optional items, acceptance and quote-to-invoice conversion.',
    canonical: '/quotation-generator-guide',
  },
  h1: 'Quotation Generator: Choosing a Tool That Understands Quotes',
  intro:
    'Most free quotation generators are invoice generators with the word "Invoice" swapped for "Quotation". That sounds like a small thing and it is not, because a quotation does a different job from an invoice. An invoice records a debt that already exists. A quotation makes an offer that expires, that the client can accept or decline, and that may include options they choose between. This guide covers what a quotation tool actually needs to do, and how to judge one before you send a quote with it.',
  howTo: {
    name: 'How to generate a quotation online',
    description:
      'Produce a professional price quotation in a browser, including the validity period and acceptance details that make it a proper offer rather than a price list.',
    steps: [
      {
        title: 'Open a generator in quotation mode',
        description:
          'Make sure the document is labelled Quotation or Quote, not Invoice. A client who receives a document headed "Invoice" for work not yet agreed will either be confused or assume they are being billed.',
      },
      {
        title: 'Add your details and a quotation number',
        description:
          'Number quotations in their own sequence, separate from invoices — QUO-001 rather than continuing your invoice numbering. You will thank yourself when reconciling which quotes converted.',
      },
      {
        title: 'Set the issue date and, critically, the validity date',
        description:
          'State how long the price holds, typically 14 to 30 days. Without it the quote is open-ended, and a client can accept six months later at a price that no longer covers your costs.',
      },
      {
        title: 'Itemise the scope precisely',
        description:
          'Each line should describe a deliverable, not an activity. "Homepage design, two rounds of revision" is quotable; "design work" invites scope disputes after acceptance.',
      },
      {
        title: 'Separate optional and alternative items',
        description:
          'If there are add-ons or a premium version, list them distinctly so the client can see what they are choosing rather than only seeing one total.',
      },
      {
        title: 'State exclusions, assumptions and payment terms',
        description:
          'Say what is not included, what you have assumed, and what terms will apply once accepted. Exclusions prevent more disputes than any other part of a quotation.',
      },
      {
        title: 'Export the PDF and give the client a way to accept',
        description:
          'Send the PDF with an explicit acceptance instruction — reply to confirm, sign and return, or approve a link. An offer with no acceptance mechanism stalls.',
      },
    ],
  },
  sections: [
    {
      heading: 'Why an invoice tool makes a bad quotation tool',
      body: [
        'The two documents sit at opposite ends of the sale, and the fields follow from that.',
        'An invoice is a record. The amount is settled, the work is done, and the only open question is when the money arrives. Its critical fields are the due date, the payment details and the invoice number.',
        'A quotation is an offer. Nothing is settled, the client may say no, and the price is a commitment you are making at your own risk. Its critical fields are the validity period, the scope boundaries, the exclusions and the acceptance mechanism — none of which an invoice has.',
        'Change the heading on an invoice generator and you get a document that states a total but never says how long it stands, never says what is excluded, and gives the client no way to accept it. That is not a quotation, it is a price list. The difference between the two documents is covered in more depth in [invoice vs quotation](/invoice-vs-quotation).',
      ],
      table: {
        head: ['', 'Quotation', 'Invoice'],
        rows: [
          ['Purpose', 'Offer a price', 'Request payment'],
          ['Sent', 'Before the work', 'After the work'],
          ['Critical date', 'Valid until', 'Payment due'],
          ['Creates an obligation', 'Only once accepted', 'On issue'],
          ['Needs exclusions', 'Yes, essential', 'Rarely'],
          ['Needs an acceptance path', 'Yes', 'No'],
          ['Numbering sequence', 'Its own (QUO-)', 'Its own (INV-)'],
        ],
      },
    },
    {
      heading: 'The five things a quotation generator must support',
      body: [
        'Judge any tool against these before you send a quote with it. Most free options fail on at least two.',
      ],
      list: [
        'A validity or expiry date as a first-class field, not something you type into notes',
        'Free-text areas for scope, assumptions and explicit exclusions',
        'Optional or alternative line items that can be shown without being counted in the total',
        'A quotation-specific numbering sequence, independent of invoice numbers',
        'Conversion to an invoice that carries the line items across without retyping',
        'A document heading that unambiguously reads Quotation, Quote or Estimate',
        'Notes long enough to hold real terms rather than a single line',
      ],
    },
    {
      heading: 'Optional line items are the most underrated feature',
      body: [
        'The one structural feature that changes revenue rather than just saving time is the ability to present options.',
        'A single-total quotation asks a binary question: yes or no. A quotation with a core scope plus clearly priced optional extras asks a different question: which of these do you want? That reframing tends to move the conversation from whether to buy to how much to buy, and it lets a client self-select a larger scope without you having to sell it.',
        'It also protects you on the downside. If the budget is tight, an itemised quote with optional lines lets the client remove something specific, rather than asking you to reduce the total — which means cutting your margin rather than the scope.',
        'Very few free quotation tools handle this properly. Where a tool does not, present options as clearly separated groups within the line items and state in the notes which are included in the headline figure.',
      ],
    },
    {
      heading: 'Estimate, quotation or proposal?',
      body: [
        'These get used interchangeably, and they should not be, because in most jurisdictions they carry different weight once accepted.',
        'An estimate is an approximation. You are saying the work will cost roughly this much, given what you know so far. It is appropriate when scope is genuinely uncertain — repairs before diagnosis, or a project whose requirements are still forming.',
        'A quotation is a fixed price. Once the client accepts within the validity period, you are generally committed to that figure. Use it when you understand the scope well enough to carry the risk.',
        'A proposal is a quotation plus persuasion: it adds an executive summary, the approach, deliverables, timeline and often signature blocks. Use it when you still need to win the argument, not just state a number. See [how to write a business proposal](/how-to-write-a-business-proposal).',
        'Label the document accurately. Calling an estimate a quotation and then charging more is the single most common source of small-business billing disputes, and the label is what a client will point at.',
      ],
    },
    {
      heading: 'Generating a quotation without an account',
      body: [
        'If you quote occasionally, an account-free tool is the lowest-friction option. [QuillBill\'s quotation generator](/quotation-generator) runs in the browser, requires no sign-up, calculates totals and tax, and exports a PDF with no watermark. Because it renders locally, your pricing never reaches a server, which matters more for quotes than for invoices — a quote reveals your rates before you have won anything.',
        'The trade-off is the same as for any client-side tool: there is no dashboard telling you which quotes are outstanding or which converted. If you quote at volume, that tracking is worth real money and you should use a tool that provides it.',
        'Whatever you use, keep your own simple record of quote number, client, date, amount, validity date and outcome. Quote-to-win rate is one of the few numbers that reliably tells a service business whether its pricing is right, and no free tool will calculate it for you.',
      ],
    },
  ],
  answersHeading: 'Quotation generator questions, answered',
  answers: [
    {
      question: 'What is a quotation in business?',
      answer:
        'A quotation is a formal offer stating what you will supply and what it will cost, sent before any work begins. Once the client accepts it within its validity period it generally becomes binding, which is what separates it from an estimate.',
    },
    {
      question: 'How do I make a quotation for a customer?',
      answer:
        'Establish what the client actually needs, price the work from your own costs, then set it out as itemised lines with quantities and rates. Add a validity date, state what is excluded, give the payment terms that will apply, and say exactly how to accept.',
    },
    {
      question: 'Can I change a quotation after sending it?',
      answer:
        'Before the client accepts, yes — withdraw it and issue a revised version with a new number. After acceptance within the validity period, generally no, because it has become a binding offer. If the client changes the scope, that justifies a new quotation rather than a silent adjustment.',
    },
    {
      question: 'What is the difference between a quote and a quotation?',
      answer:
        'Nothing. "Quote" is the everyday shortening of "quotation" and the two are used interchangeably in business. Some industries prefer one word over the other, but no legal or practical distinction exists between them.',
    },
    {
      question: 'Do I number quotations separately from invoices?',
      answer:
        'Yes, and from the very first one. Use a distinct sequence such as QUO-001 so your invoice numbering stays unbroken, which tax authorities expect. It also lets you measure how many quotes converted into work, which shared numbering makes impossible to see.',
    },
    {
      question: 'Should a quotation include tax?',
      answer:
        'Show it if tax will appear on the resulting invoice, so the client sees the real amount payable. Quoting a figure excluding tax and then invoicing a larger one is defensible but is a reliable way to start an argument. Label the rate clearly either way.',
    },
    {
      question: 'What should I do if a client does not respond to my quotation?',
      answer:
        'Follow up two or three days before it expires, referencing the validity date as the natural reason to make contact. Most unconverted quotes are lost to silence rather than to a competitor, and a single timed nudge recovers a meaningful share of them.',
    },
    {
      question: 'Can a quotation be converted into an invoice?',
      answer:
        'Yes, and a good tool carries the line items across so nothing is retyped. Give the invoice its own number from your invoice sequence and reference the quotation number on it, so the client can match what they are billed against what they agreed.',
    },
    {
      question: 'What is a quotation number?',
      answer:
        'A unique reference identifying that specific offer, used so both sides can refer to it unambiguously during negotiation and on the eventual invoice. Any consistent scheme works — QUO-001 upward is the simplest — provided numbers are never reused.',
    },
  ],
  faqs: [
    {
      question: 'What is a quotation generator?',
      answer:
        'A tool that produces a formal price quotation as a shareable or printable document. A good one handles the fields that make a quote an offer rather than a price list: a validity date, itemised scope, exclusions and an acceptance path — not just totals and tax.',
    },
    {
      question: 'Is a quotation generator different from an invoice generator?',
      answer:
        'It should be. An invoice records a debt and needs a due date and payment details. A quotation makes an offer and needs a validity period, scope boundaries and a way to accept. Many free tools simply relabel an invoice, which drops the fields that matter most.',
    },
    {
      question: 'Do I need to charge tax on a quotation?',
      answer:
        'Show tax on the quotation if it will appear on the invoice, so the client sees the real amount payable. Quoting a figure excluding tax and then invoicing a larger one is technically defensible and practically a reliable way to start an argument. Label the tax line and rate clearly either way.',
    },
  ],
  ctaHeading: 'Create a quotation free',
  ctaText: 'Open the Quotation Generator',
  ctaLink: '/?mode=quote',
  crossLinks: [
    { title: 'How to Write a Quotation', description: 'What goes in the document, section by section.', href: '/how-to-write-a-quotation' },
    { title: 'Free Quotation Templates', description: 'Formats compared, and what each one loses.', href: '/free-quotation-template-guide' },
    { title: 'Invoice vs Quotation', description: 'Which document to send, and when.', href: '/invoice-vs-quotation' },
  ],
};

export const freeQuotationTemplateGuide: GuideConfig = {
  slug: 'free-quotation-template-guide',
  cluster: 'Quotations',
  published: '2026-08-16',
  updated: '2026-08-16',
  summary:
    'Word, Excel, PDF and browser quotation templates compared, the fields most free templates omit, and how to adapt one for your trade.',
  keyTakeaways: [
    'Most free quotation templates are relabelled invoice templates missing validity and exclusions.',
    'A Word quotation template is the most requested and the most error-prone.',
    'Add three fields to almost any free template: valid until, exclusions, and acceptance.',
    'Keep quotation numbering separate from invoice numbering from the very first quote.',
  ],
  seo: {
    title: 'Free Quotation Template: Word, Excel & PDF Compared',
    description:
      'Free quotation templates compared by format, plus the three fields nearly every free quote template leaves out and how to add them. Download or fill in online.',
    canonical: '/free-quotation-template-guide',
  },
  h1: 'Free Quotation Templates: What Most of Them Leave Out',
  intro:
    'There is no shortage of free quotation templates. There is a shortage of complete ones. Download a handful of the most popular Word and Excel quote templates and you will find the same three omissions again and again: no validity date, no exclusions section, and no acceptance mechanism. Those three fields are what separate a quotation from a price list. This guide compares the formats, shows what to add, and covers the trade-specific adjustments that matter.',
  sections: [
    {
      heading: 'The formats, and what each costs you',
      body: [
        'The format decision has the same shape as it does for invoices, with one extra wrinkle: quotations are more often revised than invoices are, because clients negotiate. A format that is painful to edit is worse here than it is for billing.',
      ],
      table: {
        head: ['Format', 'Calculates', 'Easy to revise', 'Best for'],
        rows: [
          ['Word / Google Docs', 'No', 'Yes', 'Text-heavy quotes with lots of scope detail'],
          ['Excel / Sheets', 'Yes', 'Yes', 'Many line items, quantities and unit rates'],
          ['Fillable PDF', 'Rarely', 'No', 'A fixed, repeating quote you rarely change'],
          ['Fill-in-browser', 'Yes', 'Yes', 'Most people, most of the time'],
        ],
      },
    },
    {
      heading: 'The three fields nearly every free template omits',
      body: [
        'Whatever template you start from, check for these and add them if they are missing. Each takes one line and each prevents a specific, common problem.',
        'Valid until. Without an expiry date, your price stands indefinitely. Materials move, your availability changes, and a client who resurfaces eight months later will reasonably expect the quoted figure. Add "Valid until: [date]" near the total, not buried in small print.',
        'Exclusions. What the quote does not cover causes more disputes than what it does. Travel outside a radius, materials at cost, out-of-hours work, third-party licence fees, revisions beyond an agreed number — say so explicitly. A short "Not included" list is the single highest-value addition you can make to a quotation template.',
        'Acceptance. Tell the client precisely how to say yes: reply to this email confirming, or sign and return. An offer that leaves acceptance ambiguous produces quotations that are neither accepted nor declined, just quietly stale.',
      ],
      list: [
        'Valid until: an explicit date, placed near the total',
        'Not included: a short bulleted list of exclusions',
        'Assumptions: what you have taken as given when pricing',
        'How to accept: the exact action you want the client to take',
        'Quotation number in its own sequence, such as QUO-001',
        'Payment terms that will apply once the quote is accepted',
        'Lead time or start date, since availability is part of the offer',
      ],
    },
    {
      heading: 'Why the Word quotation template is so popular and so risky',
      body: [
        '"Quotation template Word free download" is one of the most searched phrasings in this whole category, and the reason is sensible: quotations contain a lot of prose. Scope descriptions, assumptions, exclusions and terms all want a word processor rather than a spreadsheet cell.',
        'The risk is arithmetic. A Word quotation calculates nothing, so every subtotal, tax figure and total is typed by hand. Quotations get revised repeatedly during negotiation, and each revision is a fresh opportunity to update a line item and forget the total. Quoting a total that does not match the sum of the lines is both embarrassing and, if the client accepts the lower figure, expensive.',
        'If you want the prose flexibility of Word, the practical compromise is to calculate in a spreadsheet or a browser tool and paste the final figures in, rather than doing mental arithmetic in a document. Better still, use a tool that gives you long-form notes fields alongside calculated totals.',
      ],
    },
    {
      heading: 'Adapting a template to your trade',
      body: [
        'Generic quotation templates assume a simple list of items at unit prices. Several common trades need more than that, and it is worth building the adjustment into your template once rather than improvising per quote.',
        'Construction and trades need labour and materials separated, a provisional sums line for work that cannot be priced until opened up, and often staged payment points. A single total for a kitchen refit is a dispute waiting to happen.',
        'Creative and agency work needs a revision count stated as a scope boundary — "includes two rounds of revisions" — because unbounded revisions are how fixed-price creative work loses money.',
        'Equipment and product supply needs lead times and a note on whether the price holds if the supplier\'s price moves, plus delivery as its own line since it is often taxed differently.',
        'Recurring services need the term and the notice period, not just the monthly figure, so it is clear what the client is committing to overall.',
      ],
    },
    {
      heading: 'Keep quotation numbers separate from invoice numbers',
      body: [
        'A small habit worth adopting from your first quote: number quotations in their own sequence. QUO-001 upward, entirely separate from INV-001 upward.',
        'This matters for two reasons. It keeps your invoice sequence unbroken, which tax authorities expect, and it makes conversion rate measurable — if quotes and invoices share a sequence, you cannot tell at a glance how many quotes you issued versus how many became work.',
        'When a quote is accepted, issue an invoice with the next invoice number and reference the quotation number on it. The client can then match the amount billed against the amount agreed, which removes the most common reason for an invoice to be queried.',
      ],
    },
    {
      heading: 'Fill in a quotation without downloading anything',
      body: [
        'If you would rather not maintain a template file at all, [QuillBill\'s quotation templates](/quotation-templates) are 15 layouts you fill in directly in the browser, with totals and tax calculated and a clean PDF export. There is no sign-up, no watermark and no document limit, and nothing you type is transmitted anywhere.',
        'For the writing side — how to phrase scope, set validity and handle negotiation — see [how to write a quotation](/how-to-write-a-quotation). For choosing between tools rather than templates, see [quotation generator](/quotation-generator).',
      ],
    },
  ],
  answersHeading: 'Quotation template questions, answered',
  answers: [
    {
      question: 'What is a quotation template?',
      answer:
        'A reusable document layout with the structure of a price quotation already in place — your details, the client\'s, itemised lines, totals and terms — so you only fill in what changes. A complete one also includes a validity date, an exclusions section and an acceptance instruction.',
    },
    {
      question: 'How do I write a quotation in Word?',
      answer:
        'Start from a template, replace the placeholder details, and list the work as itemised lines. Because Word calculates nothing, work out the subtotal, tax and total separately and paste the figures in. Re-check them after every revision, since quotations get revised repeatedly during negotiation.',
    },
    {
      question: 'What is the format of a quotation?',
      answer:
        'Header with both parties and a quotation number, issue date and validity date, itemised scope with quantities and rates, subtotal, tax and total, then assumptions, exclusions, payment terms and how to accept. The validity date and exclusions are what most free templates omit.',
    },
    {
      question: 'Should I use Word or Excel for a quotation?',
      answer:
        'Word if the quote is prose-heavy with detailed scope and assumptions, which most service quotations are. Excel if it is many priced line items where the arithmetic matters more than the narrative. A browser tool gives you both without the manual calculation risk.',
    },
    {
      question: 'How do I write a quotation email to a client?',
      answer:
        'Keep it short: thank them, state the total and what it covers in one line, note the validity date, attach the PDF, and say exactly what you want them to do next. Put the amount in the email body rather than leaving it only in the attachment.',
    },
    {
      question: 'What should be excluded from a quotation?',
      answer:
        'Anything a client might reasonably assume is included but is not: travel beyond a stated radius, materials at cost, out-of-hours work, third-party licence fees, and revisions beyond an agreed number. A short "not included" list prevents more disputes than any other section.',
    },
    {
      question: 'Can I put terms and conditions on a quotation?',
      answer:
        'Yes, and you should. The terms stated on an accepted quotation are the ones that generally apply to the resulting job, so payment terms, deposit requirements and late payment charges belong there rather than appearing for the first time on your invoice.',
    },
    {
      question: 'Do I need a signature on a quotation?',
      answer:
        'Not to make it valid, but a signature or written acceptance gives you a clear record that the client agreed to this scope at this price. An emailed confirmation quoting the quotation number is usually sufficient and considerably faster than print-sign-scan.',
    },
    {
      question: 'How do I quote for a job I have not done before?',
      answer:
        'Price your time honestly, add a contingency for the unknowns, and be explicit about assumptions. If the scope genuinely cannot be pinned down, send an estimate rather than a quotation and say what would change the final figure — labelling it accurately protects you.',
    },
  ],
  faqs: [
    {
      question: 'Where can I download a free quotation template in Word?',
      answer:
        'Plenty of sites offer them, and most are usable starting points. Before you send one, check it has a validity date, an exclusions section and an acceptance instruction, since the majority of free Word quote templates omit all three. Remember that Word calculates nothing, so verify every total by hand.',
    },
    {
      question: 'What should a quotation template include?',
      answer:
        'Your details and the client\'s, a quotation number in its own sequence, the issue date and a validity date, itemised scope with quantities and rates, subtotal, tax and total, what is explicitly excluded, the payment terms that will apply, and a clear instruction on how to accept.',
    },
    {
      question: 'Is a quotation template the same as an estimate template?',
      answer:
        'The layouts are nearly identical but the commitment is not. A quotation is a fixed price you are held to once accepted; an estimate is an approximation that can change. If you use one template for both, change the document heading to match what you are actually offering.',
    },
    {
      question: 'Should a quotation template show tax?',
      answer:
        'Yes, if tax will appear on the resulting invoice. Show it as a separate labelled line at the correct rate so the client sees the true amount payable. Quoting excluding tax and invoicing including it is a common and entirely avoidable source of friction.',
    },
    {
      question: 'How do I make a quotation look professional without a designer?',
      answer:
        'Consistency does most of the work: one template, your logo at a modest size, one typeface, and generous space around line items. Put the total and the validity date where they are seen without scrolling. A clean, legible quote reads as more professional than a heavily designed one.',
    },
    {
      question: 'Can I use an invoice template as a quotation template?',
      answer:
        'You can, but only after changing the heading to Quotation and adding a validity date, an exclusions list and an acceptance instruction. Without those three, you have sent a price list rather than an offer, which is the most common defect in free quote documents.',
    },
  ],
  ctaHeading: 'Fill in a quotation template now',
  ctaText: 'Browse Quotation Templates',
  ctaLink: '/quotation-templates',
  crossLinks: [
    { title: 'Free Quotation Templates', description: '15 layouts, filled in online.', href: '/quotation-templates' },
    { title: 'How to Write a Quotation', description: 'Scope, validity and negotiation.', href: '/how-to-write-a-quotation' },
    { title: 'Quotation Generator Guide', description: 'What a real quote tool needs to do.', href: '/quotation-generator-guide' },
  ],
};

export const freeQuotationSoftwareGuide: GuideConfig = {
  slug: 'free-quotation-software',
  cluster: 'Tools',
  published: '2026-08-16',
  updated: '2026-08-16',
  summary:
    'Free quoting software compared against generators and CRMs, the features that justify an account, and the one metric quoting software should give you.',
  keyTakeaways: [
    'Quoting software earns its keep through follow-up and conversion tracking, not document creation.',
    'Most free quoting tools are the quoting module of a CRM or an invoicing platform.',
    'Win rate by quote size is the number that changes how you price; almost nobody tracks it.',
    'Below roughly five quotes a month, a generator plus a spreadsheet beats software.',
  ],
  seo: {
    title: 'Free Quotation Software: When It Beats a Free Generator',
    description:
      'Free quotation and quoting software compared: what an account buys you over a free quote generator, which limits bite, and the win-rate metric worth tracking.',
    canonical: '/free-quotation-software',
  },
  h1: 'Free Quotation Software: What an Account Actually Buys You',
  intro:
    'A quotation generator makes the document. Quotation software manages what happens next: which quotes are outstanding, which went cold, which converted, and at what rate. That second thing is where the money is, and it is the only reason to accept an account and its limits. This guide covers what free quoting software genuinely adds, where the free tiers stop, and the point at which a generator and a spreadsheet stop being enough.',
  sections: [
    {
      heading: 'Creating the quote is the easy part',
      body: [
        'If you quote occasionally, document creation is your whole problem and a free generator solves it completely. If you quote regularly, document creation stops being the bottleneck within about a month, and three other problems replace it.',
        'The first is follow-up. Quotes do not decline themselves; they go quiet. Most unconverted quotes are lost to silence rather than to a competitor, and a scheduled nudge two days before expiry recovers a meaningful share of them. Doing this from memory does not scale past a handful.',
        'The second is version control. Negotiated quotes get revised, and once there are three versions in an email thread, the question of what was actually agreed becomes genuinely unclear. Software that versions a quote and marks which one is current prevents an entire category of dispute.',
        'The third is knowing your numbers. Without a record, you cannot answer whether your win rate is 20% or 60%, whether it collapses above a certain value, or whether a particular type of work is worth quoting for at all.',
      ],
    },
    {
      heading: 'What free quoting tools actually are',
      body: [
        'Nearly all of them are a module of something larger, which tells you where the limits will land.',
      ],
      table: {
        head: ['Type', 'What it really is', 'Typical free limit'],
        rows: [
          ['CRM quoting module', 'A sales CRM with quotes attached', 'Users, and CRM contact caps'],
          ['Invoicing platform', 'Billing software that also quotes', 'Total documents per period'],
          ['Field service tool', 'Job management for trades', 'Jobs or technicians'],
          ['Open source', 'Self-hosted, genuinely unlimited', 'Your own hosting and maintenance'],
          ['Quote generator', 'Document creation only', 'None, but no tracking either'],
        ],
      },
    },
    {
      heading: 'The limits that matter in quoting specifically',
      body: [
        'The constraints that bite in quoting software are different from invoicing, because the workflow is different.',
        'Document caps are the most common and the most awkward, because quotes have a much worse ratio than invoices. If your win rate is one in three, a 15-document allowance is five jobs, not fifteen. Free tiers that count quotes and invoices in one pool run down roughly three times faster than they appear to.',
        'Seat limits bite early in trades and agencies, where the person pricing the job is often not the person who visits the client. A single-seat free plan is unusable the moment quoting is a two-person process.',
        'Template and branding limits matter more for quotes than invoices, because a quotation is a sales document. A competitor\'s logo on the document you are using to win work is a materially worse look than on a bill for work already done.',
        'E-signature is very often the paid feature, and it is the one that most improves conversion, since it removes the print-sign-scan step that stalls acceptance.',
      ],
    },
    {
      heading: 'The one number worth tracking',
      body: [
        'If you take a single thing from this page: record win rate segmented by quote value. Not overall win rate — segmented.',
        'Overall win rate tells you almost nothing actionable. Win rate by band usually reveals something specific: quotes under a certain figure convert at 70% while those above it convert at 15%, which tells you where your credibility ceiling is and what to do about it. Or small quotes convert at 80% but are unprofitable, which tells you your minimum is too low.',
        'This needs nothing sophisticated. Six spreadsheet columns — quote number, client, date, value, valid-until, outcome — reviewed quarterly, will tell you more about your pricing than most software\'s built-in reporting. Quoting software is worth paying for when maintaining that record by hand becomes the constraint, not before.',
      ],
      list: [
        'Quotation number and date issued',
        'Client and a one-line description of the work',
        'Quoted value, excluding tax so bands are comparable',
        'Validity date, so you can see whether follow-up happened before expiry',
        'Outcome: won, lost, expired or withdrawn',
        'If lost, the reason in three words — price, timing, competitor, silence',
      ],
    },
    {
      heading: 'When a generator is genuinely enough',
      body: [
        'Below roughly five quotes a month, quoting software is overhead. You can hold the outstanding ones in your head, follow-up is a calendar reminder, and the spreadsheet above takes two minutes a week.',
        'At that volume, use a free generator that requires no account and keep the spreadsheet. [QuillBill\'s quotation generator](/quotation-generator) produces the document with totals, tax and PDF export, with no sign-up and no document cap, and because it runs in your browser your pricing is not sitting on anyone\'s server. Quotes expose your rates in a way invoices do not, so that is worth more here than it is for billing.',
        'Above roughly twenty quotes a month, or as soon as two people are involved in pricing, the tracking is worth an account and probably worth paying for. The honest signal is when you find yourself unsure whether you followed up on something — that is the point at which the software pays for itself.',
      ],
    },
  ],
  answersHeading: 'Quoting software questions, answered',
  answers: [
    {
      question: 'What is quotation software?',
      answer:
        'Software that produces priced offers and then tracks them: which are outstanding, which expired, which converted and at what rate. The document creation is the commodity part. The tracking and follow-up are what you are actually paying for.',
    },
    {
      question: 'Is there free quoting software for small business?',
      answer:
        'Yes, mostly as the quoting module of something larger — a CRM, an invoicing platform or a field service tool. Free tiers usually limit users, contacts or total documents, and commonly reserve e-signature and analytics for paid plans.',
    },
    {
      question: 'What is a good win rate on quotations?',
      answer:
        'It varies far too much by industry for a benchmark to be useful, which is why the number worth tracking is your own win rate segmented by quote value. That segmentation usually reveals a credibility ceiling — a figure above which your conversion collapses.',
    },
    {
      question: 'How do I track quotations without software?',
      answer:
        'Six spreadsheet columns: quotation number, client, date, value excluding tax, validity date and outcome. Reviewed quarterly, that tells you more about your pricing than most built-in reporting, and it takes about two minutes a week to maintain.',
    },
    {
      question: 'When should I upgrade from a quote generator to quoting software?',
      answer:
        'When you stop being certain whether you followed up on something. That usually happens between five and twenty quotes a month, or immediately once a second person is involved in pricing. Below that, the software is overhead rather than leverage.',
    },
    {
      question: 'Does quoting software integrate with invoicing?',
      answer:
        'Most do, and the quote-to-invoice conversion is one of the better reasons to use an integrated tool since it removes retyping and transcription errors. Confirm the resulting invoice takes its number from your invoice sequence, not the quotation sequence.',
    },
    {
      question: 'What is e-signature and do I need it on quotes?',
      answer:
        'It lets a client accept by clicking and typing rather than printing, signing and scanning. It is usually a paid feature and it is the one that most improves conversion, because every step between the client deciding yes and recording yes loses some of them.',
    },
    {
      question: 'Can I use a CRM for quotations?',
      answer:
        'Yes, and it makes sense if you already run one, since the client data is there and the quote attaches to the deal. The trade-off is that CRM quoting modules are often weaker on document presentation than dedicated tools, which matters because a quote is a sales document.',
    },
    {
      question: 'Is there free quoting software for trades?',
      answer:
        'Field service tools serve trades better than general quoting software, because they connect the quote to scheduling and job costing — which is where trades businesses actually lose margin. Free tiers typically cap jobs or technicians rather than documents.',
    },
  ],
  faqs: [
    {
      question: 'What is the best free quotation software?',
      answer:
        'It depends on what surrounds the quoting. If you need a sales pipeline, a CRM with a free quoting module suits best. If you also invoice, a free invoicing tier that includes quotes keeps everything in one sequence. If you only need the document, a free generator with no account is less overhead than any of them.',
    },
    {
      question: 'Do I need quotation software or is a generator enough?',
      answer:
        'A generator is enough while you can remember every outstanding quote and follow up reliably. Software earns its keep when you cannot — usually somewhere between five and twenty quotes a month, or as soon as more than one person is involved in pricing.',
    },
    {
      question: 'Does free quotation software limit how many quotes I can send?',
      answer:
        'Often yes, and the limit runs down faster than it looks. Free tiers frequently count quotes and invoices in one document pool, so a modest win rate means a 15-document allowance covers only a handful of actual jobs. Check whether the cap is per month or lifetime.',
    },
    {
      question: 'Can free quotation software convert a quote into an invoice?',
      answer:
        'Most can, and it is one of the better reasons to use an integrated tool, since it removes retyping and transcription errors. Make sure the resulting invoice takes its own number from your invoice sequence and references the original quotation number.',
    },
    {
      question: 'What is the difference between quoting software and a CRM?',
      answer:
        'A CRM tracks relationships and deals across their whole life; quoting software focuses on producing and tracking the priced offer. Many CRMs include quoting, and many quoting tools have grown light CRM features. Choose by which job is your actual bottleneck.',
    },
    {
      question: 'Is a free quotation app enough for a trades business?',
      answer:
        'For a sole trader, often yes, particularly one that works on a phone at the customer\'s premises. Once you have several people quoting, look at field service tools instead, since they connect the quote to scheduling and job costing, which is where trades businesses actually lose margin.',
    },
  ],
  ctaHeading: 'Quote without signing up',
  ctaText: 'Create a Quotation Free',
  ctaLink: '/?mode=quote',
  crossLinks: [
    { title: 'Quotation Generator Guide', description: 'What a proper quote tool must support.', href: '/quotation-generator-guide' },
    { title: 'Free Invoice Software Compared', description: 'The same analysis, for billing.', href: '/free-invoice-software' },
    { title: 'How to Write a Quotation', description: 'Scope, validity and exclusions.', href: '/how-to-write-a-quotation' },
  ],
};

export const requestQuotationGuide: GuideConfig = {
  slug: 'request-a-quotation',
  cluster: 'Quotations',
  published: '2026-08-16',
  updated: '2026-08-16',
  summary:
    'How to ask suppliers for a free quotation so the responses are comparable, what an RFQ should contain, and how to read the quotes you get back.',
  keyTakeaways: [
    'Quotes are only comparable if every supplier prices the same specification.',
    'An RFQ is just a structured request — it does not need to be formal to work.',
    'The cheapest quote usually has the narrowest scope; compare exclusions, not totals.',
    'Give a decision date, or you will be chasing suppliers who assumed you went elsewhere.',
  ],
  seo: {
    title: 'How to Get a Free Quotation From Suppliers',
    description:
      'How to request a free quotation so supplier quotes are comparable: what to put in an RFQ, how many to ask, and how to compare on scope not price.',
    canonical: '/request-a-quotation',
  },
  h1: 'How to Get a Free Quotation That You Can Actually Compare',
  intro:
    'Getting a free quotation is easy — most suppliers will give you one. Getting three quotations you can meaningfully compare is much harder, because unless you specify the job identically to each supplier, you receive three prices for three different pieces of work. This guide covers how to ask, what to include in the request, how many suppliers to approach, and how to read what comes back so the cheapest number does not automatically win.',
  howTo: {
    name: 'Request a quotation from suppliers',
    description:
      'Ask several suppliers for a free quotation in a way that produces comparable, decision-ready responses rather than three incompatible prices.',
    steps: [
      {
        title: 'Write the specification before you contact anyone',
        description:
          'Describe what you need in enough detail that two different suppliers would price the same thing. Quantities, dimensions, materials, standards, locations and deadlines. This document is the whole exercise.',
      },
      {
        title: 'Decide what you are keeping fixed',
        description:
          'Be explicit about which parts are non-negotiable and which are open to the supplier\'s recommendation. Suppliers add real value on the open parts, but only if they know which those are.',
      },
      {
        title: 'Shortlist three to five suppliers',
        description:
          'Fewer than three gives you no benchmark. More than five wastes their time and yours, and suppliers who sense a cattle market quote defensively or decline.',
      },
      {
        title: 'Send the same request to all of them',
        description:
          'Identical specification, identical questions, identical deadline. Ask each to price the specification as written and to list any exclusions or assumptions separately.',
      },
      {
        title: 'State your timeline and decision date',
        description:
          'Say when you need the quote by and when you will decide. This is a courtesy and also a filter: suppliers who ignore a stated deadline at the quoting stage rarely improve later.',
      },
      {
        title: 'Compare on scope before price',
        description:
          'Line the quotes up against your specification and mark what each includes and excludes. Only once they cover the same work does comparing totals mean anything.',
      },
      {
        title: 'Tell everyone the outcome',
        description:
          'Including the suppliers you did not pick, briefly. It costs a minute, it keeps them willing to quote next time, and it is the single cheapest thing you can do for your future negotiating position.',
      },
    ],
  },
  sections: [
    {
      heading: 'Why three quotes so often turn out to be incomparable',
      body: [
        'The standard advice is to get three quotes. The standard result is three documents that cannot be laid side by side, because each supplier has interpreted a loose brief differently and priced a different scope.',
        'One includes delivery and installation, another quotes ex-works. One assumes you supply materials, another prices them in. One covers a twelve-month warranty, another ninety days. The totals differ by 40% and the difference is almost entirely scope, not competitiveness.',
        'The fix is entirely on your side of the transaction: write the specification once, send the identical document to everyone, and ask each supplier to state exclusions explicitly. This is what a request for quotation is, and it does not need to be a formal procurement document to work — a clearly structured email does the job for most small purchases.',
      ],
    },
    {
      heading: 'What to put in the request',
      body: [
        'A request for quotation, or RFQ, is a structured way of asking. The formality should match the purchase, but the content list is much the same whether you are buying 500 printed items or a building refurbishment.',
      ],
      list: [
        'Who you are, and how to reach the person who can answer questions',
        'What you need, described in specifics: quantity, dimensions, materials, standards',
        'Where it needs to be delivered or performed',
        'When you need it, including any hard deadline and any flexibility',
        'How long you need the quoted price to remain valid',
        'What you want quoted separately — delivery, installation, warranty, ongoing support',
        'Your payment terms, so a supplier can price them in rather than be surprised',
        'The date you need the quotation by, and the date you will decide',
        'A request that assumptions and exclusions be listed explicitly',
      ],
    },
    {
      heading: 'How to read the quotes you get back',
      body: [
        'Resist ranking by total. The cheapest quotation is very often the one that has excluded the most, and the gap surfaces later as variations that cost more than the difference you saved.',
        'Start by building a simple comparison grid: each row is an element of your specification, each column a supplier, each cell says included, excluded or unclear. Anything marked unclear is a question to ask before you decide, not after.',
        'Then look at what each supplier has assumed. Assumptions are where the risk sits. "Assumes existing wiring is compliant" or "assumes artwork supplied print-ready" are the lines that become extra charges. A supplier who lists assumptions honestly is usually more reliable than one whose quote is silent, even if the silent one is cheaper.',
        'Finally, check the validity period. A price valid for seven days from a supplier you cannot reach for a week is not a usable quote, and a very short validity is sometimes a pressure tactic rather than a cost reality.',
      ],
      table: {
        head: ['Compare this', 'Not this', 'Because'],
        rows: [
          ['Scope covered', 'Headline total', 'The cheapest quote usually covers least'],
          ['Stated exclusions', 'Assumed inclusions', 'Exclusions become variations later'],
          ['Assumptions listed', 'Silence', 'Unstated assumptions are unpriced risk'],
          ['Lead time', 'Price per unit', 'Late delivery often costs more than the saving'],
          ['Validity period', 'Urgency in the email', 'Short validity can be a pressure tactic'],
          ['Payment terms', 'Discount offered', 'Cashflow terms can outweigh a small discount'],
        ],
      },
    },
    {
      heading: 'Quotation, estimate or proposal — what you are asking for',
      body: [
        'Ask for the right document and you get a more useful answer.',
        'Ask for a quotation when you can specify the work precisely and want a fixed price you can hold the supplier to. Ask for an estimate when the scope genuinely cannot be pinned down yet, and expect the final figure to move. Ask for a proposal when you want the supplier to tell you how they would approach the problem, not just what it costs.',
        'Using the words loosely produces predictable friction: a supplier who sends an estimate you treat as a quotation will charge more, and will be within their rights. The distinctions are covered in [invoice vs quotation](/invoice-vs-quotation).',
      ],
    },
    {
      heading: 'A note on "get a free quotation" as a marketing offer',
      body: [
        'Many suppliers advertise a free quotation as a selling point. In most industries a quotation is free by default, so the offer is really a promise of a site visit or a consultation at no charge.',
        'That is worth having, but be clear about what you are agreeing to. A free survey often comes with a sales conversation attached, and in some sectors the quote produced is valid only if you commit on the day. Ask whether the price holds for a normal validity period, and treat same-day-only pricing as information about the supplier rather than a bargain.',
        'If you are on the other side of this — issuing quotations rather than requesting them — [how to write a quotation](/how-to-write-a-quotation) covers structuring the offer, and [quotation generator](/quotation-generator) covers producing the document.',
      ],
    },
  ],
  answersHeading: 'Requesting a quotation: common questions',
  answers: [
    {
      question: 'How do I ask a supplier for a quotation?',
      answer:
        'Send a written specification precise enough that two suppliers would price the same thing, state your deadline and decision date, and ask each to list exclusions and assumptions separately. A structured email does this as well as a formal document for most purchases.',
    },
    {
      question: 'What is an RFQ?',
      answer:
        'A request for quotation: a document sent to suppliers describing exactly what you need so each can return a comparable price. It can be formal procurement paperwork or a well-structured email. The value is in the specificity, not the formality.',
    },
    {
      question: 'What is the difference between an RFQ and an RFP?',
      answer:
        'An RFQ asks what it costs when you already know exactly what you want, so suppliers compete mainly on price and lead time. An RFP asks how you would solve this, so suppliers propose an approach as well as a price. Use an RFP when the method is genuinely open.',
    },
    {
      question: 'Should I tell suppliers my budget?',
      answer:
        'Usually yes, as a range. Withholding it tends to produce quotes aimed at the wrong scope entirely and wastes both sides\' time. Withholding is more defensible only when you want a strict like-for-like comparison on a tightly fixed specification.',
    },
    {
      question: 'How many suppliers should I ask for a quote?',
      answer:
        'Three to five for most purchases. Fewer than three leaves you without a benchmark; more than five costs you comparison time and makes suppliers quote defensively. What matters far more than the count is that every supplier prices the identical specification.',
    },
    {
      question: 'Why are my supplier quotes so different?',
      answer:
        'Almost always scope rather than competitiveness. One includes delivery and installation, another quotes ex-works; one prices materials in, another assumes you supply them. Compare what each covers against your specification before comparing any totals.',
    },
    {
      question: 'Should I always choose the cheapest quotation?',
      answer:
        'No. The cheapest quote is frequently the one that excluded the most, and those exclusions resurface as variations that cost more than the saving. Compare stated exclusions and assumptions first — a supplier who lists them honestly is usually the safer choice.',
    },
    {
      question: 'Is it rude to ask for a free quotation?',
      answer:
        'No. In most industries quoting is treated as a cost of sale and suppliers expect to do it. Exceptions exist where producing the quote requires substantial work, such as surveys, engineering drawings or diagnostic labour, and a fee there is reasonable.',
    },
    {
      question: 'How do I decline a supplier quotation politely?',
      answer:
        'Briefly and promptly — one or two sentences, with a reason if you have one that is useful to them. It costs almost nothing, keeps that supplier willing to quote for you next time, and preserves them as leverage in future negotiations.',
    },
    {
      question: 'Do I have to accept a quotation I requested?',
      answer:
        'No. Requesting a quotation creates no obligation to buy; it is an invitation for the supplier to make an offer. You are only committed once you accept, which is why suppliers state validity periods and why acceptance should always be explicit.',
    },
  ],
  faqs: [
    {
      question: 'Should a quotation be free?',
      answer:
        'In most industries yes, and suppliers treat quoting as a cost of sale. Exceptions exist where producing the quote requires substantial work, such as detailed surveys, engineering drawings or diagnostic labour. In those cases a fee is reasonable and is often credited against the job if you proceed.',
    },
    {
      question: 'How many quotes should I get?',
      answer:
        'Three to five for most purchases. Fewer than three leaves you without a benchmark. More than five costs you time in comparison and can make suppliers quote defensively. What matters far more than the number is that every supplier is pricing the identical specification.',
    },
    {
      question: 'Is a supplier obliged to honour their quotation?',
      answer:
        'Generally yes, if you accept within the stated validity period and the scope has not changed, because a quotation is a firm offer. This is why the validity date and the exclusions matter so much, and why an estimate is a different thing that can legitimately move.',
    },
    {
      question: 'Should I tell suppliers what my budget is?',
      answer:
        'Usually yes, as a range. Withholding it tends to produce quotes aimed at the wrong scope entirely, and wastes both sides\' time. Sharing a range lets suppliers propose something that fits it. Where you want a genuine like-for-like price comparison on a tightly fixed specification, withholding is more defensible.',
    },
    {
      question: 'How do I say no to a supplier whose quote I did not accept?',
      answer:
        'Briefly and promptly. One or two sentences, and a reason if you have one that is useful to them. It costs almost nothing, keeps that supplier willing to quote for you next time, and preserves them as leverage in future negotiations.',
    },
  ],
  ctaHeading: 'On the other side of the transaction?',
  ctaText: 'Create a Quotation Free',
  ctaLink: '/?mode=quote',
  crossLinks: [
    { title: 'How to Write a Quotation', description: 'For when you are the one quoting.', href: '/how-to-write-a-quotation' },
    { title: 'Purchase Order vs Invoice', description: 'What happens after you accept a quote.', href: '/purchase-order-vs-invoice' },
    { title: 'Invoice vs Quotation', description: 'Which document is which.', href: '/invoice-vs-quotation' },
  ],
};
