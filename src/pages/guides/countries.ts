import type { GuideConfig } from './types';

/**
 * Invoicing by tax jurisdiction.
 *
 * This is the cluster the 30-day plan identified as the real opportunity: the
 * US incumbents serve these markets badly, the field requirements genuinely
 * differ, and "invoice format" queries carry four-figure volume at a fraction
 * of the US difficulty.
 *
 * Every rule here is cited to the tax authority. E-invoicing mandates in
 * particular move fast — re-verify dates before treating any of this as
 * current.
 */

export const indiaGstInvoiceGuide: GuideConfig = {
  slug: 'gst-invoice-format-india',
  cluster: 'By country',
  published: '2026-08-16',
  updated: '2026-08-16',
  summary:
    'The 16 fields Rule 46 requires on a GST invoice, how CGST/SGST/IGST is decided, HSN digit rules by turnover, and what breaks your buyer\'s input tax credit.',
  keyTakeaways: [
    'Rule 46 of the CGST Rules lists the mandatory fields. Miss one and your buyer\'s ITC is at risk.',
    'Place of supply, not your address, decides whether you charge CGST+SGST or IGST.',
    'HSN/SAC digit depth scales with your turnover — 4, 6 or 8 digits.',
    'Invoice numbers are capped at 16 characters and must be unique within the financial year.',
  ],
  seo: {
    title: 'GST Invoice Format India: Mandatory Fields (Rule 46)',
    description:
      'GST invoice format for India: the mandatory fields under Rule 46, CGST vs SGST vs IGST, HSN and SAC codes, place of supply, and e-invoicing thresholds.',
    canonical: '/gst-invoice-format-india',
  },
  h1: 'GST Invoice Format in India: Every Mandatory Field',
  intro:
    'A GST invoice is not just a bill — it is the document your buyer uses to claim input tax credit, which means a field you left out becomes their financial problem and then your relationship problem. The requirements come from Rule 46 of the CGST Rules, and they are specific. This guide covers every mandatory field, how to decide between CGST/SGST and IGST, how many HSN digits you need, and the mistakes that most commonly get ITC rejected.',
  sections: [
    {
      heading: 'The mandatory fields under Rule 46',
      body: [
        'Rule 46 of the CGST Rules sets out what a tax invoice must contain. The list below is what a compliant invoice carries. Where a field does not apply — an unregistered buyer has no GSTIN, for instance — the rule provides for that, but you cannot simply omit fields that do apply.',
        'The [CBIC GST portal](https://cbic-gst.gov.in) publishes the rules and notifications directly, and is the authority worth checking when something changes.',
      ],
      list: [
        'The words "Tax Invoice" clearly on the document',
        'Your name, address and GSTIN',
        'A consecutive serial number, maximum 16 characters, unique within the financial year',
        'The date of issue',
        'The recipient\'s name, address and GSTIN, where they are registered',
        'For unregistered recipients above ₹50,000, their name, address and delivery state',
        'HSN code for goods, or SAC code for services',
        'Description of the goods or services',
        'Quantity and unit of measure',
        'Total taxable value of the supply',
        'The rate of tax, split into CGST, SGST/UTGST, IGST and cess as applicable',
        'The amount of tax charged, again split by head',
        'Place of supply, with the state name, for inter-state supplies',
        'Delivery address, where it differs from the place of supply',
        'Whether tax is payable on a reverse charge basis',
        'Signature or digital signature of the supplier or an authorised representative',
      ],
    },
    {
      heading: 'CGST + SGST or IGST? Place of supply decides',
      body: [
        'This is where most invoices go wrong, and the error is expensive because the buyer cannot claim credit for the wrong tax head.',
        'The test is not where you are. It is the place of supply relative to your location. If both fall in the same state, the tax splits into CGST and SGST at half the rate each. If they fall in different states, you charge IGST at the full rate.',
        'A supplier in Mumbai billing a buyer in Delhi charges IGST. If that supplier charges CGST and SGST instead, the Delhi buyer cannot claim it — Delhi has no share of Maharashtra\'s state tax — and will come back asking for a corrected invoice.',
        'For services, place of supply is generally the recipient\'s location where they are registered. There are specific rules for immovable property, events, transport and several other categories, so check the provision that covers your supply rather than assuming the general rule.',
      ],
      table: {
        head: ['Your location', 'Place of supply', 'Charge', 'At 18%'],
        rows: [
          ['Maharashtra', 'Maharashtra', 'CGST + SGST', '9% + 9%'],
          ['Maharashtra', 'Delhi', 'IGST', '18%'],
          ['Karnataka', 'Karnataka', 'CGST + SGST', '9% + 9%'],
          ['Karnataka', 'Export', 'Zero-rated', '0% (with LUT)'],
        ],
      },
    },
    {
      heading: 'How many HSN or SAC digits you need',
      body: [
        'HSN codes classify goods; SAC codes classify services. How many digits you must show depends on your aggregate turnover in the preceding financial year, and the thresholds have tightened over time.',
        'Businesses below ₹5 crore turnover show 4 digits on B2B supplies. Businesses above ₹5 crore show 6 digits. Exports and imports require the full 8-digit code regardless of turnover.',
        'Getting the code wrong is not a formatting issue — it determines the rate. If you are unsure which code applies to what you sell, the classification is worth confirming with your accountant once and then reusing, rather than guessing per invoice.',
      ],
    },
    {
      heading: 'Invoice numbering rules that catch people out',
      body: [
        'GST numbering is stricter than general commercial practice, and the constraints are worth knowing before you design a scheme.',
        'The serial number is capped at 16 characters. It may contain letters, numerals, hyphens and slashes only. It must be consecutive, and it must be unique within the financial year — which means most businesses reset their sequence each April rather than running one continuous series.',
        'A common working scheme is a short prefix, the financial year and a running number: INV/25-26/001. That fits comfortably inside 16 characters and makes the year obvious on the face of the document.',
        'Gaps in the sequence attract questions during assessment. If you cancel an invoice, do not reuse or skip the number — issue a credit note against it instead, as covered in [credit notes and refunds](/credit-note-and-refunds).',
      ],
    },
    {
      heading: 'E-invoicing: who it applies to',
      body: [
        'E-invoicing under GST means generating your invoice on your own system, then reporting it to the Invoice Registration Portal, which returns an Invoice Reference Number and a QR code. The invoice is only valid once it carries them.',
        'The turnover threshold has been lowered in stages since the scheme began, and it has reached businesses well below the levels it started at. Because the threshold has moved repeatedly, check the current figure on the [GST portal](https://tutorial.gst.gov.in) rather than relying on a number quoted in an article — including this one.',
        'If you are below the threshold, you issue an ordinary tax invoice and nothing changes. If you are above it, an invoice without an IRN is not a valid tax invoice, and your buyer cannot claim credit against it.',
      ],
    },
  ],
  answersHeading: 'GST invoice questions, answered',
  answers: [
    {
      question: 'What is a GST invoice?',
      answer:
        'A tax invoice issued by a GST-registered supplier that meets the requirements of Rule 46 of the CGST Rules. It is the document on which the buyer claims input tax credit, which is why the field requirements are enforced more strictly than ordinary commercial invoices.',
    },
    {
      question: 'What is GSTIN and where does it go on the invoice?',
      answer:
        'GSTIN is your 15-character Goods and Services Tax Identification Number, issued on registration. It goes in your supplier block. Your buyer\'s GSTIN goes in the recipient block whenever they are registered, because they need it to claim credit.',
    },
    {
      question: 'What is the difference between CGST, SGST and IGST?',
      answer:
        'CGST and SGST are charged together on supplies within one state, splitting the rate between the centre and the state. IGST is charged at the full rate on supplies between states, and on imports. Place of supply relative to your location decides which applies.',
    },
    {
      question: 'What is HSN code on an invoice?',
      answer:
        'A Harmonised System of Nomenclature code identifying what you are selling, which determines the GST rate. Goods use HSN; services use SAC. Digit depth depends on turnover — 4 digits below ₹5 crore, 6 above, and 8 for exports and imports.',
    },
    {
      question: 'Is HSN code mandatory on a GST invoice?',
      answer:
        'Yes for B2B supplies, at the digit depth your turnover requires. The obligation applies to registered suppliers generally, and getting the code wrong affects the rate you charge, not just the presentation of the document.',
    },
    {
      question: 'What is place of supply on a GST invoice?',
      answer:
        'The location where the supply is treated as made, which decides whether you charge CGST and SGST or IGST. For goods it is generally where the goods are delivered; for services it is generally the registered recipient\'s location, with specific rules for property, events and transport.',
    },
    {
      question: 'Can I issue a GST invoice without a GSTIN?',
      answer:
        'No. Only registered persons issue tax invoices. If you are unregistered you issue an ordinary bill of supply without charging GST, and your buyer cannot claim input tax credit against it. Registration is what creates the ability to issue a tax invoice.',
    },
    {
      question: 'What is a bill of supply?',
      answer:
        'The document issued instead of a tax invoice when no GST is charged — by composition-scheme dealers, and for exempt supplies. It carries no tax breakdown and no credit passes to the buyer, so the field requirements are lighter than Rule 46.',
    },
    {
      question: 'How many digits can a GST invoice number have?',
      answer:
        'Sixteen characters maximum, using letters, numerals, hyphens and slashes only. It must run consecutively and be unique within the financial year, which is why most businesses reset the sequence each April rather than running one continuous series.',
    },
    {
      question: 'When is e-invoicing mandatory in India?',
      answer:
        'Once your aggregate turnover crosses the notified threshold, which has been lowered in stages since the scheme began. Because it has moved repeatedly, confirm the current figure on the GST portal rather than trusting a number quoted in an article.',
    },
    {
      question: 'What is an IRN on a GST invoice?',
      answer:
        'An Invoice Reference Number returned by the Invoice Registration Portal when you report an e-invoice, alongside a signed QR code. Where e-invoicing applies to you, an invoice without an IRN is not a valid tax invoice and carries no input tax credit.',
    },
    {
      question: 'What is reverse charge on a GST invoice?',
      answer:
        'A mechanism where the recipient pays the tax instead of the supplier, applying to specified categories of supply and to certain purchases from unregistered persons. Rule 46 requires the invoice to state explicitly whether tax is payable on a reverse charge basis.',
    },
    {
      question: 'Do I need a signature on a GST invoice?',
      answer:
        'Rule 46 requires a signature or digital signature of the supplier or an authorised representative. Electronically issued invoices carrying a valid digital signature satisfy this, and e-invoices reported to the IRP are treated as authenticated through that process.',
    },
    {
      question: 'How long must I keep GST invoices?',
      answer:
        'GST law requires records to be retained for 72 months from the due date of the annual return for that year. Keep the invoice and the supporting records together, since an assessment years later will ask for both.',
    },
  ],
  faqs: [
    {
      question: 'What happens if my GST invoice is missing a mandatory field?',
      answer:
        'The immediate consequence falls on your buyer: an invoice that does not meet Rule 46 puts their input tax credit at risk, so they will ask you to reissue it. Repeated defects can also attract penalties during assessment, so it is worth getting the template right once.',
    },
    {
      question: 'Can I revise a GST invoice after issuing it?',
      answer:
        'Not by editing it. Issue a credit note or debit note referencing the original invoice number, which adjusts the value and the tax without breaking your numbering sequence. Silently altering a reported invoice creates a mismatch against your returns.',
    },
    {
      question: 'Do I charge GST on exports?',
      answer:
        'Exports are zero-rated. You can either export under a Letter of Undertaking without paying IGST, or pay IGST and claim a refund. Either way the invoice should show the supply as zero-rated and carry the 8-digit HSN code that exports require.',
    },
    {
      question: 'Is a GST invoice needed for every sale?',
      answer:
        'Registered suppliers issue a tax invoice for taxable supplies. For B2C supplies below ₹200 an invoice may be dispensed with unless the customer asks, though many businesses issue one anyway. Composition dealers and exempt supplies use a bill of supply instead.',
    },
  ],
  sources: [
    { label: 'CGST Rules and notifications', publisher: 'Central Board of Indirect Taxes and Customs', url: 'https://cbic-gst.gov.in' },
    { label: 'GST portal tutorials and e-invoicing guidance', publisher: 'Goods and Services Tax Network', url: 'https://tutorial.gst.gov.in' },
  ],
  ctaHeading: 'Create a GST-format invoice',
  ctaText: 'Open the Invoice Generator',
  ctaLink: '/?mode=invoice',
  crossLinks: [
    { title: 'How to Create an Invoice', description: 'The fields every invoice needs, anywhere.', href: '/how-to-create-an-invoice' },
    { title: 'Invoice Numbering Systems', description: 'Sequences that survive an audit.', href: '/invoice-numbering-system' },
    { title: 'Credit Notes and Refunds', description: 'Correcting an invoice properly.', href: '/credit-note-and-refunds' },
  ],
};

export const uaeVatInvoiceGuide: GuideConfig = {
  slug: 'vat-invoice-format-uae',
  cluster: 'By country',
  published: '2026-08-16',
  updated: '2026-08-16',
  summary:
    'What Article 59 requires on a UAE tax invoice, when the simplified format is allowed, and how the AED 10,000 threshold works.',
  keyTakeaways: [
    'The words "Tax Invoice" and your TRN are mandatory, not stylistic choices.',
    'A simplified tax invoice is allowed for unregistered recipients, or registered ones up to AED 10,000.',
    'VAT must be shown in AED even when the invoice is denominated in another currency.',
    'Invoice numbering must be sequential and gap-free for FTA audit purposes.',
  ],
  seo: {
    title: 'UAE Tax Invoice Format: FTA VAT Requirements',
    description:
      'UAE VAT invoice format: what Article 59 requires, full vs simplified tax invoices, the AED 10,000 threshold, TRN placement and currency conversion rules.',
    canonical: '/vat-invoice-format-uae',
  },
  h1: 'UAE Tax Invoice Format: What the FTA Requires',
  intro:
    'The UAE has one of the more precisely specified invoice formats in the region, set out in Article 59 of the VAT Executive Regulations. It also has something many jurisdictions do not: a genuinely simpler alternative format for small and consumer transactions, which most businesses are entitled to use more often than they realise. This guide covers both, the threshold that separates them, and the currency rule that catches out anyone invoicing in dollars.',
  sections: [
    {
      heading: 'What a full tax invoice must contain',
      body: [
        'Article 59 of the Executive Regulations of Federal Decree-Law No. 8 of 2017 lists the required particulars. The Federal Tax Authority publishes the legislation and its guidance at [tax.gov.ae](https://tax.gov.ae/en/legislation.aspx).',
      ],
      list: [
        'The words "Tax Invoice" clearly displayed',
        'Your name, address and Tax Registration Number',
        'The recipient\'s name, address and TRN, where they are registered',
        'A sequential invoice number that uniquely identifies the document',
        'The date of issue, and the date of supply where it differs',
        'A description of the goods or services supplied',
        'For each line: unit price, quantity, rate of tax and amount payable, in AED',
        'The amount of any discount offered',
        'The gross amount payable, in AED',
        'The tax amount payable, in AED',
        'Where the reverse charge applies, a statement that the recipient must account for the tax',
        'Where an exchange rate applies, the rate used and the source',
      ],
    },
    {
      heading: 'When the simplified tax invoice is allowed',
      body: [
        'Article 59(5) permits a simplified tax invoice in two situations: where the recipient is not registered for VAT, or where the recipient is registered but the consideration for the supply does not exceed AED 10,000.',
        'The simplified format drops the recipient\'s name, address and TRN, and does not require the line-by-line tax breakdown that a full invoice does. It still needs the words "Tax Invoice", your name, address and TRN, the date, a description of the supply, the total consideration and the tax amount.',
        'This matters practically for retail, food service and any business doing high volumes of small transactions. Issuing full tax invoices where a simplified one is permitted is not an error, but it is unnecessary work.',
      ],
      table: {
        head: ['', 'Full tax invoice', 'Simplified tax invoice'],
        rows: [
          ['When', 'B2B above AED 10,000', 'Unregistered buyer, or B2B up to AED 10,000'],
          ['Buyer TRN', 'Required', 'Not required'],
          ['Buyer name and address', 'Required', 'Not required'],
          ['Line-level tax breakdown', 'Required', 'Not required'],
          ['Total and tax amount', 'Required', 'Required'],
          ['Sequential number', 'Required', 'Required'],
        ],
      },
    },
    {
      heading: 'The currency rule people miss',
      body: [
        'If you issue an invoice in a currency other than the dirham, the tax amount must still be shown converted into AED, using an exchange rate approved by the Central Bank at the date of supply.',
        'This trips up businesses invoicing international clients in dollars or euros. The invoice can be denominated in the foreign currency, and the client can pay in it, but the VAT line has to appear in AED alongside, with the rate stated.',
        'Getting this wrong is one of the more common findings in FTA reviews, precisely because software built for other markets does not prompt for it. There is more on multi-currency invoicing generally in [international invoicing](/international-invoicing-currency).',
      ],
    },
    {
      heading: 'Numbering and record keeping',
      body: [
        'Invoice numbers must be sequential and uniquely identify the document. Gaps invite questions, because the FTA uses sequence integrity to test whether any invoices have been suppressed.',
        'Records generally must be kept for five years from the end of the tax period, with longer retention for real estate. Keep the invoice, the evidence of supply and the exchange rate source together, since a review will ask for the chain rather than the document alone.',
        'The UAE has an e-invoicing programme in progress, with phased implementation announced for the coming years. If you are planning a system change, it is worth checking the current timetable on the FTA site before committing to a format that will need replacing.',
      ],
    },
  ],
  answersHeading: 'UAE VAT invoice questions, answered',
  answers: [
    {
      question: 'What is a TRN and where does it go on an invoice?',
      answer:
        'A Tax Registration Number is the 15-digit identifier the Federal Tax Authority issues when you register for VAT. It must appear on every tax invoice you issue, in your supplier details, and the recipient\'s TRN is required too on a full tax invoice.',
    },
    {
      question: 'What is the difference between a tax invoice and a simplified tax invoice in the UAE?',
      answer:
        'A full tax invoice carries the recipient\'s name, address and TRN plus a line-level tax breakdown. A simplified one drops those and shows only the total and the tax amount. Simplified is permitted for unregistered buyers, or registered buyers up to AED 10,000.',
    },
    {
      question: 'What is the AED 10,000 threshold for tax invoices?',
      answer:
        'It is the ceiling below which you may issue a simplified tax invoice to a VAT-registered recipient. Above it, a full tax invoice with the recipient\'s details and a line-level tax breakdown is required.',
    },
    {
      question: 'Do I need to show VAT in AED if I invoice in dollars?',
      answer:
        'Yes. The invoice may be denominated in any currency, but the tax amount must also be shown in dirhams, converted at a Central Bank approved rate for the date of supply. State the rate you used on the invoice.',
    },
    {
      question: 'What is the VAT rate in the UAE?',
      answer:
        'The standard rate is 5%, with certain supplies zero-rated and others exempt. Show the rate applied and the resulting tax amount as separate figures, rather than folding the tax into unit prices.',
    },
    {
      question: 'When must a UAE tax invoice be issued?',
      answer:
        'Within 14 days of the date of supply. This is a real deadline rather than a guideline, and issuing late is a compliance defect in its own right regardless of whether the customer has paid.',
    },
    {
      question: 'Do I need the buyer\'s TRN on every invoice?',
      answer:
        'Only on a full tax invoice to a registered recipient. If the buyer is not VAT-registered, or the supply is within the simplified-invoice threshold, their TRN is not required. Where it is required, ask for it — you cannot invent or omit it.',
    },
    {
      question: 'What is reverse charge on a UAE invoice?',
      answer:
        'A mechanism where the recipient accounts for the VAT instead of the supplier, applying commonly to imported services and certain goods. Where it applies, the invoice must state that the recipient is required to account for the tax.',
    },
    {
      question: 'Can I issue a tax invoice without being VAT-registered in the UAE?',
      answer:
        'No. Only registered taxable persons issue tax invoices and charge VAT. If you are below the registration threshold and not voluntarily registered, you issue an ordinary commercial invoice with no VAT and no TRN.',
    },
    {
      question: 'How long must UAE tax invoices be kept?',
      answer:
        'Generally five years from the end of the relevant tax period, with longer periods for real estate records. Keep the supporting evidence alongside the invoice, since a review asks for the full chain rather than the document by itself.',
    },
    {
      question: 'Is e-invoicing mandatory in the UAE?',
      answer:
        'A national e-invoicing programme is being introduced in phases. Timetables have shifted, so confirm the current position and your own phase on the Federal Tax Authority site before rebuilding your invoicing around it.',
    },
    {
      question: 'What happens if my UAE tax invoice is wrong?',
      answer:
        'Issue a tax credit note referencing the original invoice, rather than editing or replacing it. The credit note has its own required particulars and must clearly identify the invoice it adjusts, so the audit trail stays intact.',
    },
    {
      question: 'Do I need an Arabic invoice in the UAE?',
      answer:
        'Invoices are commonly issued in English and this is widely accepted in practice. The FTA may require records to be provided in Arabic on request, so if you operate at scale it is worth confirming your obligations with a local adviser.',
    },
  ],
  faqs: [
    {
      question: 'Does a UAE tax invoice need a stamp or signature?',
      answer:
        'Article 59 does not require a stamp or a handwritten signature. Many UAE businesses apply a company stamp by convention and some customers ask for it, but its absence does not make an otherwise compliant tax invoice invalid.',
    },
    {
      question: 'Can I issue one tax invoice for multiple supplies?',
      answer:
        'Yes, a single invoice can cover multiple supplies to the same recipient, with each shown as its own line carrying its own description, rate and tax amount. Summary invoicing arrangements also exist for continuous supplies.',
    },
    {
      question: 'What is the difference between a tax invoice and a proforma invoice in the UAE?',
      answer:
        'A proforma invoice is not a tax invoice. It carries no VAT liability, gives the recipient no right to recover input tax, and should never carry the words "Tax Invoice". Issue the tax invoice separately once the supply takes place.',
    },
  ],
  sources: [
    { label: 'VAT legislation and Executive Regulations', publisher: 'UAE Federal Tax Authority', url: 'https://tax.gov.ae/en/legislation.aspx' },
    { label: 'VAT topics and guidance', publisher: 'UAE Federal Tax Authority', url: 'https://tax.gov.ae/en/taxes/Vat/vat.topics.aspx' },
  ],
  ctaHeading: 'Create a UAE tax invoice',
  ctaText: 'Open the Invoice Generator',
  ctaLink: '/?mode=invoice',
  crossLinks: [
    { title: 'International Invoicing', description: 'Multi-currency, FX and cross-border payment.', href: '/international-invoicing-currency' },
    { title: 'How to Create an Invoice', description: 'The universal fields, explained.', href: '/how-to-create-an-invoice' },
    { title: 'Credit Notes and Refunds', description: 'Correcting a tax invoice properly.', href: '/credit-note-and-refunds' },
  ],
};

export const philippinesInvoiceGuide: GuideConfig = {
  slug: 'invoice-requirements-philippines',
  cluster: 'By country',
  published: '2026-08-16',
  updated: '2026-08-16',
  summary:
    'How the Ease of Paying Taxes Act changed Philippine invoicing: the sales invoice is now primary, the official receipt is supplementary, and what that means for VAT.',
  keyTakeaways: [
    'Under RA 11976, the sales invoice is the primary document for both goods and services.',
    'The official receipt is now supplementary — it acknowledges payment but does not substantiate the sale.',
    'Input VAT is claimed on the invoice, not on the OR.',
    'Invoices must be BIR-registered before use, whether printed, loose-leaf or computerised.',
  ],
  seo: {
    title: 'Philippines Invoice Requirements After the EOPT Act',
    description:
      'Philippine invoicing after RA 11976: sales invoice vs official receipt, what BIR requires on an invoice, VAT substantiation, and registration of invoice series.',
    canonical: '/invoice-requirements-philippines',
  },
  h1: 'Invoice Requirements in the Philippines After the EOPT Act',
  intro:
    'Philippine invoicing changed materially with Republic Act No. 11976, the Ease of Paying Taxes Act, and its implementing regulations. The change is easy to state and easy to get wrong: the sales invoice is now the primary document for every sale, whether you sell goods or services, and the official receipt has been demoted to a supplementary document. If your business still treats the OR as the document that proves a service sale, your VAT substantiation is built on the wrong paper.',
  sections: [
    {
      heading: 'What actually changed',
      body: [
        'Before the EOPT Act, Philippine practice drew a line between goods and services. Goods were documented with a sales invoice; services were documented with an official receipt, issued on collection. Two documents, two workflows, and a great deal of confusion at the boundary.',
        'RA 11976 and BIR Revenue Regulations No. 7-2024 consolidated this. The sales invoice is now the primary supporting document for the sale of goods and of services alike, and it is what substantiates input VAT for the buyer.',
        'The official receipt survives as a supplementary document that acknowledges payment was received. It is not proof of the sale itself, and a buyer cannot use it to claim input VAT. The [Bureau of Internal Revenue](https://www.bir.gov.ph) publishes the regulations and the transitional guidance.',
      ],
      table: {
        head: ['', 'Before EOPT', 'After EOPT'],
        rows: [
          ['Sale of goods', 'Sales invoice', 'Sales invoice'],
          ['Sale of services', 'Official receipt', 'Sales invoice'],
          ['Proof of the sale', 'Depends on type', 'Sales invoice, always'],
          ['Input VAT claimed on', 'Invoice or OR', 'Invoice'],
          ['Role of the OR', 'Primary for services', 'Supplementary — proof of payment'],
        ],
      },
    },
    {
      heading: 'What a Philippine sales invoice must show',
      body: [
        'The Tax Code requires registered invoices for sales at or above the statutory threshold, and VAT-registered persons issue a VAT invoice for every sale regardless of amount.',
      ],
      list: [
        'Your registered business name, and trade name where different',
        'Your business address',
        'Your Taxpayer Identification Number, marked VAT or Non-VAT',
        'A serial number from a BIR-registered series',
        'The date of the transaction',
        'The buyer\'s name, address and TIN where the buyer is VAT-registered',
        'Quantity, unit cost and description of the goods or nature of the service',
        'The VAT amount shown separately, for VAT-registered sellers',
        'Breakdown of VATable, VAT-exempt and zero-rated sales where the transaction is mixed',
        'Any discount, including the statutory senior citizen or PWD discount where applicable',
        'The total amount due',
      ],
    },
    {
      heading: 'Invoices must be registered before you use them',
      body: [
        'This is the requirement that most surprises businesses arriving from other jurisdictions. In the Philippines you cannot simply design an invoice and start issuing it. The series has to be registered with the BIR first.',
        'For printed invoices this means an Authority to Print, obtained through an accredited printer, covering a specific numbered range. For computerised systems it means registering the system itself. Loose-leaf arrangements require their own permit.',
        'Issuing unregistered invoices is a penalised offence, not a technicality. If you are moving from a foreign invoicing tool to Philippine operations, sort the registration before the first sale rather than after.',
      ],
    },
    {
      heading: 'Where e-invoicing sits',
      body: [
        'The BIR operates an Electronic Invoicing System with a phased scope, beginning with large taxpayers, exporters and e-commerce, and widening over time.',
        'The timetable and the covered population have both moved since the programme was announced. Confirm your own obligation directly with the BIR rather than relying on a summary, including this one — the scope is defined by taxpayer classification rather than by a simple turnover figure.',
      ],
    },
  ],
  answersHeading: 'Philippine invoicing questions, answered',
  answers: [
    {
      question: 'What is the difference between a sales invoice and an official receipt in the Philippines?',
      answer:
        'Since the EOPT Act, the sales invoice is the primary document evidencing a sale of goods or services, and it is what supports input VAT. The official receipt is supplementary — it acknowledges that payment was received but does not prove the sale.',
    },
    {
      question: 'Do I still need to issue official receipts?',
      answer:
        'You may issue one as a supplementary document acknowledging payment, and many businesses continue to because customers expect it. What you cannot do is rely on it as the primary evidence of the sale or as the basis for a buyer\'s input VAT claim.',
    },
    {
      question: 'What is RA 11976?',
      answer:
        'The Ease of Paying Taxes Act, which among other reforms consolidated invoicing so that a single sales invoice covers goods and services alike. Its invoicing provisions are implemented through BIR Revenue Regulations No. 7-2024 and No. 11-2024.',
    },
    {
      question: 'What is an Authority to Print?',
      answer:
        'BIR approval to have a specific numbered range of invoices printed by an accredited printer. Printed invoices must come from an approved series; issuing invoices outside a registered series is a penalised offence rather than an administrative slip.',
    },
    {
      question: 'Can I use a foreign invoicing app in the Philippines?',
      answer:
        'You can use software to prepare the document, but the invoice series and, for computerised systems, the system itself must be registered with the BIR. A generic overseas tool does not satisfy the registration requirement on its own.',
    },
    {
      question: 'What is the VAT rate in the Philippines?',
      answer:
        'The standard rate is 12%, with zero-rated and exempt categories defined by the Tax Code. VAT-registered sellers must show the VAT separately on the invoice, and separate VATable, exempt and zero-rated amounts where a sale mixes them.',
    },
    {
      question: 'Do I need the buyer\'s TIN on a Philippine invoice?',
      answer:
        'Yes where the buyer is VAT-registered, since they need it to support their input VAT claim. For ordinary consumer sales the buyer\'s TIN is not required, though the threshold rules on buyer details still apply.',
    },
    {
      question: 'What is a non-VAT invoice?',
      answer:
        'The invoice issued by a taxpayer registered as non-VAT, typically under the percentage tax regime. It must be marked non-VAT, charges no VAT, and gives the buyer no input VAT to claim.',
    },
    {
      question: 'How do senior citizen and PWD discounts appear on an invoice?',
      answer:
        'As a distinct discount line, with the statutory VAT exemption applied, and the customer\'s identification details recorded as the regulations require. Applying the discount without reflecting the VAT treatment correctly is a common audit finding.',
    },
    {
      question: 'How long must invoices be kept in the Philippines?',
      answer:
        'Books and supporting records are generally retained for ten years, with the initial years in original hard copy and the later period permitted in electronic form. Retain the registered invoice booklets themselves, not only the data.',
    },
    {
      question: 'Do freelancers in the Philippines need to issue invoices?',
      answer:
        'Yes. Self-employed professionals registering with the BIR are required to issue registered invoices for their services, and clients increasingly insist on them because they need the document to support their own deductions.',
    },
    {
      question: 'What happens if I run out of registered invoices?',
      answer:
        'Apply for a new series before the current one is exhausted, since there is a lead time and issuing outside a registered series is penalised. Businesses that leave this to the last booklet routinely end up unable to invoice for a period.',
    },
  ],
  faqs: [
    {
      question: 'Is a service invoice still valid in the Philippines?',
      answer:
        'The EOPT reforms consolidated documentation into the sales invoice, and transitional rules governed the use of remaining stock of older forms. If you hold unused pre-reform booklets, check the current BIR transitional guidance rather than assuming they remain usable.',
    },
    {
      question: 'Can I issue an invoice in a foreign currency in the Philippines?',
      answer:
        'Invoices may be denominated in a foreign currency for export and certain cross-border sales, with peso conversion required for reporting. Domestic sales are ordinarily invoiced in pesos. Confirm the treatment for your specific transaction type.',
    },
    {
      question: 'What is the penalty for not issuing an invoice?',
      answer:
        'Failure to issue registered invoices carries fines and, for repeated or aggravated cases, closure of the business establishment. It is treated considerably more seriously than a documentation slip, which is why registration should precede your first sale.',
    },
  ],
  sources: [
    { label: 'Revenue regulations and invoicing guidance', publisher: 'Bureau of Internal Revenue', url: 'https://www.bir.gov.ph' },
  ],
  ctaHeading: 'Build your invoice layout',
  ctaText: 'Open the Invoice Generator',
  ctaLink: '/?mode=invoice',
  crossLinks: [
    { title: 'How to Create an Invoice', description: 'The fields every invoice needs.', href: '/how-to-create-an-invoice' },
    { title: 'Invoice Record Keeping', description: 'What to retain, and for how long.', href: '/invoice-record-keeping' },
    { title: 'Invoice Numbering Systems', description: 'Registered series and sequences.', href: '/invoice-numbering-system' },
  ],
};

export const nigeriaInvoiceGuide: GuideConfig = {
  slug: 'vat-invoice-format-nigeria',
  cluster: 'By country',
  published: '2026-08-16',
  updated: '2026-08-16',
  summary:
    'Nigerian VAT invoice requirements, the FIRS e-invoicing mandate and its IRN and QR validation, plus how withholding tax changes what you actually receive.',
  keyTakeaways: [
    'FIRS e-invoicing has been phased in for VAT-registered businesses, with validation producing an IRN and QR code.',
    'Withholding tax is deducted by your customer — your invoice total and your bank credit will differ.',
    'TIN registration on the FIRS portal comes before you can issue validated e-invoices.',
    'B2C transactions above ₦50,000 carry a reporting obligation within 24 hours.',
  ],
  seo: {
    title: 'Nigeria VAT Invoice Format and FIRS E-Invoicing',
    description:
      'Nigerian invoice requirements: VAT invoice fields, TIN, the FIRS e-invoicing mandate, IRN and QR validation, and how withholding tax affects what you receive.',
    canonical: '/vat-invoice-format-nigeria',
  },
  h1: 'Nigeria VAT Invoice Format and FIRS E-Invoicing',
  intro:
    'Nigerian invoicing has changed more in the last two years than in the previous twenty, because the Federal Inland Revenue Service has moved VAT-registered businesses onto a validated e-invoicing system. Alongside that sits a feature of Nigerian commerce that surprises everyone invoicing into the country for the first time: your customer will very likely deduct withholding tax before paying you, so the amount on your invoice is not the amount that arrives.',
  sections: [
    {
      heading: 'What a Nigerian VAT invoice must show',
      body: [
        'The core requirements are close to international norms, with the tax identification number doing the work that a VAT number does elsewhere.',
      ],
      list: [
        'Your registered business name and address',
        'Your Taxpayer Identification Number',
        'A unique, sequential invoice number',
        'The date of issue',
        'The customer\'s name, address and TIN',
        'A description of the goods or services supplied',
        'Quantity and unit price per line',
        'The VAT rate applied and the VAT amount, shown separately',
        'The total amount payable',
        'Where e-invoicing applies, the Invoice Reference Number and QR code returned by FIRS',
      ],
    },
    {
      heading: 'How FIRS e-invoicing works',
      body: [
        'The system is a validation model rather than a reporting one, which means the invoice is not complete until the tax authority has stamped it.',
        'You register on the FIRS platform using your TIN and supply your company details. Invoices are then submitted, either through the portal or through an accredited Access Point Provider, in a structured format aligned to the Peppol BIS 3.0 standard.',
        'FIRS validates the submission and, if it passes, returns an Invoice Reference Number, a cryptographic stamp and a QR code. Those must appear on the document you give the customer. An invoice without them has not been validated.',
        'Rollout has been phased, starting with large taxpayers and extending to medium and small VAT-registered businesses. Because the phasing has moved, check your own obligation at [the FIRS e-invoicing portal](https://einvoice.firs.gov.ng) rather than relying on a date quoted in an article.',
      ],
    },
    {
      heading: 'Withholding tax: why you receive less than you invoiced',
      body: [
        'This is the part that catches out foreign suppliers and new freelancers alike, and it is not an error by the customer.',
        'Nigerian customers are required to withhold tax at source on many categories of payment and remit it to FIRS on your behalf. You invoice the full amount, they deduct the applicable percentage, and you receive the balance. The rate depends on the nature of the supply and on whether the recipient is a company or an individual.',
        'The deduction is not lost money. Your customer should give you a withholding tax credit note, and that credit is set against your own tax liability. But you must ask for the credit note, keep it, and reconcile it — suppliers who ignore this effectively pay the tax twice.',
        'Practically: do not treat an underpayment as a short payment until you have checked whether it is withholding. The arithmetic usually gives it away immediately, and raising a dispute over a correct WHT deduction damages the relationship for nothing. There is more on genuine short payments in [disputed invoices](/disputed-invoice).',
      ],
    },
    {
      heading: 'Records and reporting',
      body: [
        'E-invoices must be stored electronically, including a human-readable version, for at least six years by both supplier and buyer. That obligation sits on both sides of the transaction, so a customer asking you to keep copies is not being difficult.',
        'For business-to-consumer transactions above ₦50,000, invoice details must be reported to the FIRS system within 24 hours of issue. This is a genuinely short window and needs to be built into your process rather than handled at month end.',
      ],
    },
  ],
  answersHeading: 'Nigerian invoicing questions, answered',
  answers: [
    {
      question: 'What is the VAT rate in Nigeria?',
      answer:
        'The standard rate is 7.5%, applied to taxable supplies with certain items exempt or zero-rated. Show the VAT as its own line with the rate stated, rather than folding it into unit prices, since your customer needs the figure separately.',
    },
    {
      question: 'What is a TIN in Nigeria?',
      answer:
        'A Taxpayer Identification Number issued on registration with the tax authorities, used as the primary identifier on invoices and in the FIRS systems. You need it before you can register for e-invoicing or issue a compliant VAT invoice.',
    },
    {
      question: 'What is FIRS e-invoicing?',
      answer:
        'A validation system where invoices are submitted to the Federal Inland Revenue Service in a structured format, checked, and returned with an Invoice Reference Number, cryptographic stamp and QR code. Those markers are what make the invoice valid.',
    },
    {
      question: 'What is an IRN on a Nigerian invoice?',
      answer:
        'The Invoice Reference Number that FIRS issues when a submitted invoice passes validation. It appears on the document alongside the QR code, and its presence is how a customer confirms your invoice went through the system.',
    },
    {
      question: 'Who must comply with FIRS e-invoicing?',
      answer:
        'VAT-registered businesses, phased in by size with large taxpayers first and smaller businesses following. Because the phasing dates have shifted, confirm your own position on the FIRS e-invoicing portal rather than working from a summary.',
    },
    {
      question: 'What is withholding tax on a Nigerian invoice?',
      answer:
        'Tax your customer deducts from your payment and remits to FIRS on your behalf. You invoice the full amount and receive the balance. Ask for the withholding tax credit note — it offsets your own liability, and without it you effectively pay twice.',
    },
    {
      question: 'Why did my Nigerian client pay less than the invoice?',
      answer:
        'Most often withholding tax, deducted at source as the law requires rather than a short payment. Check whether the shortfall matches an applicable WHT rate before raising it as a dispute, and request the credit note that should accompany it.',
    },
    {
      question: 'Do I need to charge VAT as a freelancer in Nigeria?',
      answer:
        'If you are VAT-registered, yes, on taxable supplies. Registration obligations depend on turnover and on the nature of your supplies, and small-business thresholds have been revised, so confirm your current position rather than assuming an older threshold still applies.',
    },
    {
      question: 'What format must Nigerian e-invoices be in?',
      answer:
        'Structured XML or JSON aligned to the Peppol BIS 3.0 standard, submitted through the FIRS portal or an accredited Access Point Provider. This is a machine format — the human-readable PDF your customer sees is generated alongside it.',
    },
    {
      question: 'What is the ₦50,000 reporting rule?',
      answer:
        'For business-to-consumer transactions above ₦50,000, invoice details must be reported to the FIRS system within 24 hours of issue. The window is short enough that it needs automating rather than handling as a periodic task.',
    },
    {
      question: 'How long must Nigerian invoices be kept?',
      answer:
        'At least six years, stored electronically and including a human-readable version, by both the supplier and the buyer. Keep the validation response with the invoice, since the IRN is part of what makes the record complete.',
    },
    {
      question: 'Can I invoice a Nigerian client in dollars?',
      answer:
        'Foreign-currency invoicing is common for export and international services, subject to the applicable exchange control and reporting rules. Agree the currency and who bears conversion costs in advance, and expect withholding to be calculated on the naira equivalent.',
    },
  ],
  faqs: [
    {
      question: 'What happens if I issue an invoice without FIRS validation?',
      answer:
        'Where e-invoicing applies to you, an unvalidated invoice is not compliant, and your customer may refuse it because it will not support their own position. Penalties attach to non-compliance, so confirm whether your phase has commenced before relying on paper processes.',
    },
    {
      question: 'Do I need an accredited Access Point Provider?',
      answer:
        'Not necessarily — submissions can be made through the FIRS portal directly. An accredited provider is generally used by businesses with enough volume that manual submission is impractical, or with an ERP that needs integrating.',
    },
    {
      question: 'Is withholding tax the same as VAT in Nigeria?',
      answer:
        'No. VAT is a consumption tax you charge on top of your price. Withholding tax is an advance deduction from what you are owed, credited against your own income tax. A single invoice can involve both — VAT added, WHT deducted.',
    },
  ],
  sources: [
    { label: 'FIRS e-invoicing portal', publisher: 'Federal Inland Revenue Service', url: 'https://einvoice.firs.gov.ng' },
    { label: 'TaxProMax taxpayer portal', publisher: 'Federal Inland Revenue Service', url: 'https://taxpromax.firs.gov.ng' },
  ],
  ctaHeading: 'Build your invoice layout',
  ctaText: 'Open the Invoice Generator',
  ctaLink: '/?mode=invoice',
  crossLinks: [
    { title: 'Disputed Invoices', description: 'When a payment really is short.', href: '/disputed-invoice' },
    { title: 'International Invoicing', description: 'Currency, FX and cross-border payment.', href: '/international-invoicing-currency' },
    { title: 'How to Create an Invoice', description: 'The universal fields, explained.', href: '/how-to-create-an-invoice' },
  ],
};

export const euVatInvoiceGuide: GuideConfig = {
  slug: 'eu-vat-invoice-cross-border',
  cluster: 'By country',
  published: '2026-08-16',
  updated: '2026-08-16',
  summary:
    'Cross-border EU invoicing: when to use reverse charge, the exact wording the VAT Directive requires, validating a customer VAT number, and what changes for non-EU sellers.',
  keyTakeaways: [
    'Article 226(11a) makes the words "Reverse charge" mandatory on the invoice, not optional.',
    'B2B cross-border services are generally taxed where the customer is, so you charge no VAT.',
    'Validate the customer\'s VAT number through VIES before you zero-rate anything.',
    'Get it wrong and the VAT becomes yours to pay, usually with interest.',
  ],
  seo: {
    title: 'EU VAT Invoice: Reverse Charge and Cross-Border Rules',
    description:
      'Cross-border EU VAT invoicing: when reverse charge applies, the mandatory wording, validating VAT numbers via VIES, and rules for non-EU sellers.',
    canonical: '/eu-vat-invoice-cross-border',
  },
  h1: 'EU VAT Invoices: Reverse Charge and Cross-Border Rules',
  intro:
    'Invoicing a business in another EU country is where most people meet the reverse charge, and where a surprising number get it wrong in a way that costs them money rather than just looking untidy. The principle is simple: for most cross-border B2B services, the customer accounts for the VAT instead of you, so you invoice without it. The conditions attached to that are where the risk sits, because if you zero-rate a supply you were not entitled to zero-rate, the VAT becomes yours to fund.',
  sections: [
    {
      heading: 'When the reverse charge applies',
      body: [
        'The general rule for services supplied business-to-business is that the place of supply is where the customer is established. If your customer is a taxable person in another member state, the supply is taxed there, and the reverse charge shifts the obligation to account for it onto them.',
        'That means you issue an invoice showing no VAT, with the mandatory wording, and your customer self-accounts in their own return. For them it is usually cash-neutral: they declare the output tax and reclaim the same amount as input tax.',
        'The rule has exceptions that matter. Services connected with immovable property are taxed where the property is. Admission to events is taxed where the event happens. Passenger transport, restaurant and catering, and short-term hire of means of transport each have their own rules. If your supply falls into one of those categories, the general place-of-supply rule does not save you.',
        'The European Commission publishes the [VAT invoicing rules](https://taxation-customs.ec.europa.eu/taxation/vat/vat-businesses/invoicing_en), and the underlying law is [Directive 2006/112/EC](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32006L0112).',
      ],
    },
    {
      heading: 'The wording is mandatory',
      body: [
        'Article 226(11a) of the VAT Directive requires the mention "Reverse charge" on the invoice. This is a legal requirement across the EU, not a stylistic convention, and an invoice missing it is defective.',
        'The Directive requires the words themselves; it does not require you to cite an article number. Many practitioners nonetheless add the reference because it removes ambiguity for the customer\'s bookkeeper, giving something like: "Reverse charge — VAT to be accounted for by the recipient under Article 196 of Council Directive 2006/112/EC."',
        'Some member states expect the local-language equivalent on invoices issued by businesses established there — Autoliquidation, Steuerschuldnerschaft des Leistungsempfängers, btw verlegd. If your own tax authority expects the national wording, use it, and adding the English alongside costs nothing.',
      ],
      list: [
        'Your own VAT identification number',
        'The customer\'s VAT identification number, with country prefix',
        'The words "Reverse charge"',
        'A sequential invoice number and the issue date',
        'Full names and addresses of both parties',
        'Description and quantity of the services or goods',
        'The taxable amount, with no VAT added',
        'Optionally the Article 196 reference, for the customer\'s bookkeeper',
      ],
    },
    {
      heading: 'Validate the VAT number before you zero-rate',
      body: [
        'The reverse charge depends on your customer being a taxable person in another member state. Their VAT number is your evidence of that, and an unchecked number is not evidence.',
        'The Commission operates VIES, a free service that confirms whether a given VAT number is valid at a given date. Check it before issuing, and keep the consultation record. Some member states issue a consultation number you can retain as proof.',
        'If the number is invalid and you zero-rated anyway, the default position is that you should have charged domestic VAT — and you will be asked for it, typically with interest. This is not a theoretical risk; it is one of the most common cross-border assessments.',
        'Re-check periodically for recurring customers. VAT registrations get cancelled, and a number that was valid when you onboarded a client two years ago may not be valid today.',
      ],
    },
    {
      heading: 'Goods, distance selling and non-EU sellers',
      body: [
        'Goods follow different rules from services. Intra-Community supplies of goods to a VAT-registered business in another member state are zero-rated where the goods physically move between states and you hold evidence of that movement. The evidence requirement is real — proof of transport is what supports the zero rating.',
        'For B2C sales of goods and digital services across borders, the One-Stop Shop regimes let you account for the destination country\'s VAT through a single registration rather than registering in each member state. Below a modest EU-wide threshold, micro-businesses may still charge their home rate.',
        'If you are established outside the EU and supplying services to EU businesses, the reverse charge generally applies in the same way and you invoice without VAT. Supplying EU consumers is a different matter — that usually creates a registration obligation, commonly handled through the non-Union OSS scheme.',
      ],
    },
  ],
  answersHeading: 'EU VAT invoicing questions, answered',
  answers: [
    {
      question: 'What is the reverse charge on an invoice?',
      answer:
        'A mechanism that moves the obligation to account for VAT from the supplier to the customer. You invoice without VAT, state "Reverse charge" on the document, and your business customer declares and usually reclaims the tax in their own return.',
    },
    {
      question: 'What wording is required for a reverse charge invoice?',
      answer:
        'Article 226(11a) of the VAT Directive requires the mention "Reverse charge". Citing Article 196 alongside is common practice and helps the customer\'s bookkeeper, but the Directive requires the words rather than the reference.',
    },
    {
      question: 'Do I charge VAT to a customer in another EU country?',
      answer:
        'For most B2B services, no — the reverse charge applies and the customer accounts for it. For B2C sales you generally charge VAT, at the destination rate where the One-Stop Shop rules apply. Goods and property-related services follow their own rules.',
    },
    {
      question: 'What is VIES?',
      answer:
        'The VAT Information Exchange System, a free European Commission service that confirms whether an EU VAT number is valid. Check your customer\'s number before zero-rating a supply and keep the record, since an unvalidated number is not evidence.',
    },
    {
      question: 'What happens if my customer\'s VAT number is invalid?',
      answer:
        'You cannot treat the supply as B2B reverse charge on that basis. The default is that domestic VAT was due, and if you zero-rated anyway you will usually be asked for the tax plus interest. Ask the customer to confirm their registration before you invoice.',
    },
    {
      question: 'Do I need my own VAT number on a reverse charge invoice?',
      answer:
        'Yes. Both VAT identification numbers must appear — yours and the customer\'s, each with its country prefix. An invoice showing only one of them is defective, and the customer\'s accountant will usually send it back.',
    },
    {
      question: 'Does reverse charge apply to goods as well as services?',
      answer:
        'Goods moving between member states to a VAT-registered business are handled as zero-rated intra-Community supplies, which requires evidence that the goods physically moved. Some member states also apply domestic reverse charges to specific goods such as electronics or construction.',
    },
    {
      question: 'What is the One-Stop Shop?',
      answer:
        'A scheme letting you account for VAT due in other member states on cross-border B2C sales through a single registration and return, rather than registering in each country. Union and non-Union variants exist depending on where you are established.',
    },
    {
      question: 'Do I charge VAT to a UK customer from the EU?',
      answer:
        'The UK is outside the EU VAT area, so intra-Community rules no longer apply. B2B services to UK businesses are generally outside the scope of EU VAT, with the UK customer accounting under their own rules. Goods movements are imports and exports.',
    },
    {
      question: 'Can I issue an EU invoice in a non-euro currency?',
      answer:
        'Yes, the invoice may be in any currency, but the VAT amount must also be expressed in the currency of the member state where the tax is due, using an accepted exchange rate. Where reverse charge applies there is no VAT figure to convert.',
    },
    {
      question: 'How long must EU invoices be kept?',
      answer:
        'Retention periods are set nationally and commonly run from six to ten years. Keep both the invoice and the evidence supporting your VAT treatment — VIES checks, transport documents — because the treatment is what gets questioned, not the invoice alone.',
    },
    {
      question: 'Do I need to charge VAT as a non-EU business selling to the EU?',
      answer:
        'For services to EU businesses, generally no — the customer applies the reverse charge. Selling to EU consumers usually creates an obligation to register and account for destination-country VAT, most often through the non-Union One-Stop Shop scheme.',
    },
    {
      question: 'What is an intra-Community supply?',
      answer:
        'A supply of goods dispatched from one member state to a VAT-registered business in another. It is zero-rated provided the customer\'s VAT number is valid and you hold evidence the goods physically moved. Without that evidence the zero rating fails.',
    },
  ],
  faqs: [
    {
      question: 'Is reverse charge the same in every EU country?',
      answer:
        'The framework is common because it comes from the VAT Directive, but member states differ on domestic reverse charges for specific sectors, on required invoice language, and on retention periods. Check the rules of the state where you are established.',
    },
    {
      question: 'Do I include reverse charge supplies in my VAT return?',
      answer:
        'Yes. They are reported as supplies even though no VAT is charged, and services generally also go on an EC Sales List or its national equivalent. Omitting them is a reporting failure even though no tax was collected.',
    },
    {
      question: 'What if my EU customer is not VAT-registered?',
      answer:
        'Then the reverse charge does not apply, because it depends on the customer being a taxable person. Treat the supply as B2C, which usually means charging VAT — at the destination rate for digital services and distance sales under the OSS rules.',
    },
  ],
  sources: [
    {
      label: 'VAT invoicing rules',
      publisher: 'European Commission, Taxation and Customs Union',
      url: 'https://taxation-customs.ec.europa.eu/taxation/vat/vat-businesses/invoicing_en',
    },
    {
      label: 'Council Directive 2006/112/EC on the common system of VAT',
      publisher: 'EUR-Lex',
      url: 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32006L0112',
    },
  ],
  ctaHeading: 'Create a reverse charge invoice',
  ctaText: 'Open the Invoice Generator',
  ctaLink: '/?mode=invoice',
  crossLinks: [
    { title: 'International Invoicing', description: 'Currency, FX and getting paid across borders.', href: '/international-invoicing-currency' },
    { title: 'How to Create an Invoice', description: 'The universal fields, explained.', href: '/how-to-create-an-invoice' },
    { title: 'Invoice Record Keeping', description: 'What to retain, and for how long.', href: '/invoice-record-keeping' },
  ],
};
