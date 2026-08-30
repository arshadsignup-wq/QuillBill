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
        'Signature or digital signature of the supplier or an authorized representative',
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
        'CGST and SGST are charged together on supplies within one state, splitting the rate between the center and the state. IGST is charged at the full rate on supplies between states, and on imports. Place of supply relative to your location decides which applies.',
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
        'Rule 46 requires a signature or digital signature of the supplier or an authorized representative. Electronically issued invoices carrying a valid digital signature satisfy this, and e-invoices reported to the IRP are treated as authenticated through that process.',
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
    'The UAE has one of the more precisely specified invoice formats in the region, set out in Article 59 of the VAT Executive Regulations. It also has something many jurisdictions do not: a genuinely simpler alternative format for small and consumer transactions, which most businesses are entitled to use more often than they realize. This guide covers both, the threshold that separates them, and the currency rule that catches out anyone invoicing in dollars.',
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
        'The UAE has an e-invoicing program in progress, with phased implementation announced for the coming years. If you are planning a system change, it is worth checking the current timetable on the FTA site before committing to a format that will need replacing.',
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
        'A national e-invoicing program is being introduced in phases. Timetables have shifted, so confirm the current position and your own phase on the Federal Tax Authority site before rebuilding your invoicing around it.',
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
        'The timetable and the covered population have both moved since the program was announced. Confirm your own obligation directly with the BIR rather than relying on a summary, including this one — the scope is defined by taxpayer classification rather than by a simple turnover figure.',
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
        'Re-check periodically for recurring customers. VAT registrations get canceled, and a number that was valid when you onboarded a client two years ago may not be valid today.',
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

/**
 * UK, Australia, Canada and the United States.
 *
 * Same rule as the rest of this cluster: every requirement is cited to the tax
 * authority and every citation was checked resolving. The ATO and CRA pages
 * refuse automated requests, so both were opened in a real browser and the
 * requirement lists below were taken from the page text, not from memory.
 *
 * One correction worth recording: the CRA input tax credit thresholds are $100
 * and $500. They were $30 and $150 until 20 April 2021, and most third-party
 * writing about Canadian invoicing still quotes the old pair.
 */

export const ukVatInvoiceGuide: GuideConfig = {
  slug: 'vat-invoice-requirements-uk',
  cluster: 'By country',
  published: '2026-08-30',
  updated: '2026-08-30',
  summary:
    'What a UK invoice must carry, when it has to be a full VAT invoice, and the statutory interest you can charge when it goes unpaid.',
  keyTakeaways: [
    'If you are not VAT registered, do not put a VAT number or VAT amount on the invoice.',
    'Supplies over £250 including VAT need a full VAT invoice; at or under that a simplified one will do.',
    'The VAT registration threshold is £90,000 of taxable turnover in any rolling 12 months.',
    'Late commercial payments carry statutory interest of 8% above the Bank of England base rate.',
  ],
  seo: {
    title: 'UK Invoice Requirements | VAT Invoice Fields Explained',
    description:
      'What a UK invoice must include, when a full VAT invoice is required rather than a simplified one, the £90,000 threshold, and statutory late payment interest.',
    canonical: '/vat-invoice-requirements-uk',
  },
  h1: 'UK Invoice Requirements: Plain Invoices and VAT Invoices',
  intro:
    'The UK has two different documents that both get called an invoice. If you are not registered for VAT you issue a plain invoice and must not mention VAT at all. If you are registered, HMRC prescribes a specific field list, and which list depends on the value of the supply. This guide covers both, plus what you can charge when the invoice goes unpaid.',
  sections: [
    {
      heading: 'If you are not VAT registered',
      body: [
        'You still have to issue a proper invoice, and [GOV.UK sets out what it must include](https://www.gov.uk/invoicing-and-taking-payment-from-customers/invoices-what-they-must-include): a unique identifying number, your business name, address and contact information, the name and address of the customer, a clear description of what you are charging for, the date of supply, the invoice date, the amount being charged, and the total owed.',
        'What you must not do is show a VAT line or a VAT registration number. Charging VAT when you are not registered for it is a serious problem, and adding a plausible-looking VAT line to make an invoice look more professional is the most common way small businesses stumble into it.',
        'Sole traders should show their own name alongside any trading name. A limited company should use its full registered name as it appears on the certificate of incorporation.',
      ],
    },
    {
      heading: 'When you need a full VAT invoice',
      body: [
        'Once registered, the supply value decides the format. Where the consideration exceeds £250 including VAT you need a full VAT invoice. At or below £250 a simplified invoice is acceptable, which is why shop receipts look nothing like a contractor invoice.',
        'HMRC lists the [details a full VAT invoice must show](https://www.gov.uk/hmrc-internal-manuals/vat-trader-records/vatrec5010) in its internal manual, which is the most precise statement of the requirement available.',
      ],
      list: [
        'A sequential number that uniquely identifies the document',
        'The time of supply — the tax point — and the date of issue where they differ',
        'Your name, address and VAT registration number',
        'The name and address of the customer',
        'A description sufficient to identify the goods or services supplied',
        'For each description: the quantity, the VAT rate, and the amount payable excluding VAT',
        'The unit price',
        'The gross total payable excluding VAT',
        'The rate of any cash discount offered',
        'The total VAT chargeable, expressed in sterling',
      ],
    },
    {
      heading: 'Simplified and modified invoices',
      body: [
        'A simplified VAT invoice covers supplies of £250 or less including VAT. It needs your name, address and VAT number, the time of supply, a description identifying what was supplied, and for each VAT rate the total payable including VAT and the rate charged. Exempt supplies must not appear on a simplified invoice at all.',
        'A modified VAT invoice is the third option: for supplies above £250, and only where the customer agrees, you can show VAT-inclusive rather than VAT-exclusive values for each item. It exists for retail-style businesses and is worth knowing about mainly so you recognise one when a supplier sends you it.',
      ],
    },
    {
      heading: 'The registration threshold',
      body: [
        'You must register for VAT once your taxable turnover in any rolling twelve months exceeds £90,000, a threshold that rose from £85,000 on 1 April 2024. Registration is required within 30 days of the end of the month you crossed it, and your effective date is the first day of the second month after that. [GOV.UK covers the thresholds](https://www.gov.uk/how-vat-works/vat-thresholds) including the £88,000 figure at which you may deregister.',
        'The rolling twelve-month test catches people out. It is not your financial year — a strong autumn can push you over on a measurement window that ends in November, and the obligation starts then rather than at your year end.',
      ],
    },
    {
      heading: 'What you can charge when payment is late',
      body: [
        'Between businesses, [statutory interest is 8% plus the Bank of England base rate](https://www.gov.uk/late-commercial-payments-interest-debt-recovery/charging-interest-commercial-debt). The base rate is fixed twice a year for this purpose: the rate on 31 December applies for the first half of the following year, and the rate on 30 June applies for the second half.',
        'You can also claim a fixed sum towards the cost of recovering the debt, on top of the interest, and the amount steps up with the size of the debt. Check the current bands on the GOV.UK page rather than relying on a figure quoted elsewhere.',
        'Two limits are worth knowing. You cannot claim statutory interest if your contract sets a different rate — though you cannot use a lower rate when contracting with a public authority — and interest can only be collected for up to six years from the day after the contracted payment terms ended.',
      ],
    },
    {
      heading: 'Keeping the records',
      body: [
        'VAT records generally need to be kept for six years, and [VAT Notice 700/21](https://www.gov.uk/guidance/record-keeping-for-vat-notice-70021) sets out what counts as a record and the form it can take. Copies of the invoices you issued are part of that, not an optional extra.',
        'Digital copies are fine provided they are complete and readable. If you are within Making Tax Digital, the requirement extends to keeping the underlying records digitally and preserving the link between them and your return, so a PDF filed in a folder is the floor rather than the whole answer.',
      ],
    },
  ],
  answersHeading: 'UK invoicing: common questions',
  answers: [
    {
      question: 'What must a UK invoice include?',
      answer:
        'A unique identifying number, your business name and address, the customer\'s name and address, a clear description of the goods or services, the supply date, the invoice date, the amounts charged and the total owed. VAT-registered businesses must add the prescribed VAT fields.',
    },
    {
      question: 'Do I need to be VAT registered to send an invoice in the UK?',
      answer:
        'No. Anyone trading can issue an invoice. If you are not registered, simply leave VAT off entirely — no VAT number, no VAT line and no VAT in the total. Charging VAT without being registered is a serious error.',
    },
    {
      question: 'When can I issue a simplified VAT invoice?',
      answer:
        'When the supply is £250 or less including VAT. It needs your VAT number, the time of supply, a description of what was supplied, and for each rate the VAT-inclusive total and the rate charged. Exempt supplies cannot appear on one.',
    },
    {
      question: 'What is the VAT registration threshold in the UK?',
      answer:
        '£90,000 of taxable turnover across any rolling twelve-month period, in force since 1 April 2024. You must register within 30 days of the end of the month in which you crossed it, and you may deregister below £88,000.',
    },
    {
      question: 'How much interest can I charge on a late invoice in the UK?',
      answer:
        'For business-to-business debts, statutory interest is 8% above the Bank of England base rate, plus a fixed sum towards recovery costs that increases with the size of the debt. A different rate written into your contract replaces the statutory one.',
    },
    {
      question: 'How long do I have to keep UK invoices?',
      answer:
        'VAT records, including copies of the invoices you issued, generally need to be kept for six years. Digital copies are acceptable provided they are complete and legible, and Making Tax Digital adds requirements about how the underlying records are held.',
    },
  ],
  faqs: [
    {
      question: 'Does a UK invoice need to be signed?',
      answer: 'No. Invoices are not signed in ordinary UK commercial practice, unlike quotations and proposals where acceptance matters.',
    },
    {
      question: 'Can I invoice in a currency other than sterling?',
      answer:
        'Yes, but the total VAT chargeable must be shown in sterling on a full VAT invoice even where the rest of the document is in another currency.',
    },
    {
      question: 'What if I forgot to number an invoice sequentially?',
      answer:
        'Do not renumber a sent invoice. Keep the sequence going and note the gap in your records; unexplained gaps are what cause problems in a review, not a documented one.',
    },
  ],
  sources: [
    { label: 'Invoices — what they must include', publisher: 'GOV.UK', url: 'https://www.gov.uk/invoicing-and-taking-payment-from-customers/invoices-what-they-must-include' },
    { label: 'VATREC5010 — details which must be shown on a full VAT invoice', publisher: 'HM Revenue & Customs', url: 'https://www.gov.uk/hmrc-internal-manuals/vat-trader-records/vatrec5010' },
    { label: 'Late commercial payments: charging interest and debt recovery', publisher: 'GOV.UK', url: 'https://www.gov.uk/late-commercial-payments-interest-debt-recovery/charging-interest-commercial-debt' },
    { label: 'Record keeping (VAT Notice 700/21)', publisher: 'HM Revenue & Customs', url: 'https://www.gov.uk/guidance/record-keeping-for-vat-notice-70021' },
  ],
  ctaHeading: 'Create a UK invoice',
  ctaText: 'Open the Invoice Generator',
  ctaLink: '/?mode=invoice',
  crossLinks: [
    { title: 'Late Payment Interest Calculator', description: 'What an overdue invoice has actually accrued.', href: '/late-payment-interest-calculator' },
    { title: 'How to Chase an Unpaid Invoice', description: 'The escalation sequence that gets paid.', href: '/how-to-chase-an-unpaid-invoice' },
    { title: 'VAT and GST Calculator', description: 'Add or strip tax at any rate.', href: '/vat-calculator' },
  ],
};

export const australiaTaxInvoiceGuide: GuideConfig = {
  slug: 'tax-invoice-requirements-australia',
  cluster: 'By country',
  published: '2026-08-30',
  updated: '2026-08-30',
  summary:
    'The seven details the ATO requires on a tax invoice, the $82.50 and $1,000 thresholds, and how GST rounding works.',
  keyTakeaways: [
    'A tax invoice must state that it is one, and must show your ABN.',
    'Sales of $1,000 or more must also identify the buyer.',
    'A customer who asks for a tax invoice must get one within 28 days.',
    'If GST is exactly 1/11 of the price, "Total price includes GST" satisfies the GST requirement.',
  ],
  seo: {
    title: 'Australian Tax Invoice Requirements | ATO Rules and GST',
    description:
      'What the ATO requires on a tax invoice: the seven mandatory details, the $82.50 and $1,000 thresholds, GST rounding rules, and recipient-created tax invoices.',
    canonical: '/tax-invoice-requirements-australia',
  },
  h1: 'Australian Tax Invoice Requirements',
  intro:
    'In Australia a "tax invoice" is a defined document, not a description. It is what allows your customer to claim a GST credit, and if it is missing a required detail it is not a valid tax invoice at all. The ATO sets out exactly what must appear, and the list changes depending on the value of the sale.',
  sections: [
    {
      heading: 'The seven details for sales under $1,000',
      body: [
        'The ATO states that a tax invoice for a taxable sale of less than $1,000 must include enough information to clearly determine seven things. "Clearly determine" is a slightly softer test than a rigid field list, but in practice the safest reading is that each of the seven appears explicitly on the document.',
      ],
      list: [
        'That the document is intended to be a tax invoice',
        'The seller\'s identity',
        'The seller\'s Australian Business Number (ABN)',
        'The date the invoice was issued',
        'A brief description of the items sold, including the quantity where applicable and the price',
        'The GST amount payable, if any',
        'The extent to which each sale on the invoice is a taxable sale',
      ],
    },
    {
      heading: 'Sales of $1,000 or more',
      body: [
        'Above that threshold there is one addition: the invoice must also show the buyer\'s identity or their ABN. Everything else stays the same.',
        'The practical advice from the ATO is to build one template that meets the higher requirement and use it for everything. A tax invoice that satisfies the $1,000-and-over rules is valid for smaller sales too, and it removes any question about which version you should have sent.',
      ],
    },
    {
      heading: 'When you have to provide one',
      body: [
        'If a customer asks for a tax invoice you must provide one within 28 days of the request, unless the sale is for $82.50 including GST or less. That same $82.50 figure is the point above which a buyer needs a tax invoice in hand to claim a GST credit.',
        'The document does not have to be paper. A PDF emailed to the customer is a valid tax invoice provided it contains everything required. Australia has also adopted the Peppol framework for eInvoicing, and the ATO treats a compliant Peppol invoice as satisfying the "intended to be a tax invoice" requirement even where those words do not appear on it.',
      ],
    },
    {
      heading: 'Mixed taxable and GST-free sales',
      body: [
        'Where one invoice carries both taxable and non-taxable items, it must clearly show which items are taxable, the amount of GST to be paid, and the total amount payable. Items are non-taxable when they are GST-free or input-taxed, and lumping them in with taxable lines is what makes an invoice fail.',
        'This is the case for per-line tax rather than a single document-wide rate. If a document mixes GST-free freight with standard-rated goods, the invoice has to say so line by line.',
      ],
    },
    {
      heading: 'GST rounding',
      body: [
        'Where GST works out to a fraction of a cent, specific rules apply. With a single taxable sale on the invoice, round the GST to the nearest cent with half a cent rounding up.',
        'With more than one taxable sale there are two permitted approaches. Under the total invoice rule you total first and then round. Under the taxable supply rule you work out GST for each sale, round each as your accounting system requires, then add and round the total. You and your customer do not have to use the same rule.',
      ],
    },
    {
      heading: 'Recipient-created tax invoices',
      body: [
        'In some industries the buyer issues the invoice rather than the seller. That is a recipient-created tax invoice, and it is only valid where both parties are registered for GST at the time it is issued, both have agreed in writing that the buyer will issue it and the seller will not, that agreement is current, and the Commissioner has determined that this type of supply can be invoiced this way.',
        'An RCTI must also show both ABNs, make clear that it is a recipient-created tax invoice rather than a standard one, and state that any GST is payable by the supplier. The recipient must issue it to the supplier within 28 days.',
      ],
    },
  ],
  answersHeading: 'Australian tax invoices: common questions',
  answers: [
    {
      question: 'What must an Australian tax invoice include?',
      answer:
        'That it is intended to be a tax invoice, the seller\'s identity and ABN, the issue date, a brief description with quantity and price, the GST amount payable, and the extent to which each sale is taxable. Sales of $1,000 or more also need the buyer identified.',
    },
    {
      question: 'Do I need an ABN on my invoice in Australia?',
      answer:
        'Yes. The seller\'s ABN is one of the mandatory details on a tax invoice. Without it the document is not a valid tax invoice, and your customer cannot use it to claim a GST credit for the purchase.',
    },
    {
      question: 'What is the $82.50 rule for tax invoices?',
      answer:
        'A buyer needs a tax invoice to claim a GST credit on purchases over $82.50 including GST. Below that a receipt suffices. It is also the point below which you are not obliged to provide a tax invoice when one is requested.',
    },
    {
      question: 'Can I write "Total price includes GST" instead of a GST amount?',
      answer:
        'Yes, but only when the GST is exactly one eleventh of the total price. If any line is GST-free or input-taxed, that statement no longer holds and you must show the GST amount and identify which sales are taxable.',
    },
    {
      question: 'How long do I have to issue a tax invoice in Australia?',
      answer:
        'Within 28 days of the customer requesting one, unless the sale is $82.50 including GST or less. The clock runs from the request rather than from the sale, so a late request still creates a 28-day obligation.',
    },
    {
      question: 'Does an emailed PDF count as a tax invoice?',
      answer:
        'Yes. The ATO does not require paper. A PDF or other digital format sent to the customer is a valid tax invoice as long as it contains every required detail, and a compliant Peppol eInvoice qualifies as well.',
    },
  ],
  faqs: [
    {
      question: 'What if my customer is not registered for GST?',
      answer:
        'Your obligations are unchanged — you still issue a valid tax invoice. They simply cannot claim a GST credit for the purchase.',
    },
    {
      question: 'Do I charge GST if I am not registered?',
      answer:
        'No. If you are not registered for GST you cannot charge it, and your document is an invoice rather than a tax invoice.',
    },
    {
      question: 'Does the invoice have to say "Tax Invoice" in those words?',
      answer:
        'The requirement is that the document is intended to be a tax invoice, and using the words is the clearest way to satisfy it. Compliant Peppol eInvoices are treated as satisfying it without them.',
    },
  ],
  sources: [
    { label: 'Tax invoices', publisher: 'Australian Taxation Office', url: 'https://www.ato.gov.au/businesses-and-organisations/gst-excise-and-indirect-taxes/gst/tax-invoices' },
    { label: 'Setting up your business invoices', publisher: 'Australian Taxation Office', url: 'https://www.ato.gov.au/businesses-and-organisations/preparing-lodging-and-paying/record-keeping-for-business/setting-up-and-managing-records/setting-up-your-business-invoices' },
  ],
  ctaHeading: 'Create an Australian tax invoice',
  ctaText: 'Open the Invoice Generator',
  ctaLink: '/?mode=invoice',
  crossLinks: [
    { title: 'VAT and GST Calculator', description: 'Work the GST out both ways.', href: '/vat-calculator' },
    { title: 'How to Create an Invoice', description: 'The fields every invoice needs, anywhere.', href: '/how-to-create-an-invoice' },
    { title: 'International Invoicing', description: 'Multi-currency, FX and cross-border payment.', href: '/international-invoicing-currency' },
  ],
};

export const canadaGstHstInvoiceGuide: GuideConfig = {
  slug: 'gst-hst-invoice-requirements-canada',
  cluster: 'By country',
  published: '2026-08-30',
  updated: '2026-08-30',
  summary:
    'The CRA information requirements at each dollar threshold, why the rate depends on the buyer\'s province, and the $30,000 small supplier line.',
  keyTakeaways: [
    'The information a buyer needs scales with the sale: under $100, $100 to $499.99, and $500 or more.',
    'The thresholds are $100 and $500 — they were raised from $30 and $150 on 20 April 2021.',
    'Show your GST/HST registration number once the sale reaches $100.',
    'The rate follows the place of supply, so a buyer in Ontario means HST even if you are in Alberta.',
  ],
  seo: {
    title: 'Canada GST/HST Invoice Requirements | CRA Rules by Amount',
    description:
      'What the CRA requires on an invoice at each threshold — under $100, $100 to $499.99, and $500 or more — plus place-of-supply rates and the small supplier rule.',
    canonical: '/gst-hst-invoice-requirements-canada',
  },
  h1: 'Canada GST/HST Invoice Requirements',
  intro:
    'Canada is unusual in that the required contents of an invoice scale with its value. The CRA sets out three tiers, and what your customer needs in order to claim an input tax credit depends on which tier the sale falls into. Get it wrong and the customer cannot recover the tax, which is the kind of thing that gets an invoice sent back.',
  sections: [
    {
      heading: 'The three thresholds',
      body: [
        'The CRA publishes the [input tax credit information requirements](https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/gst-hst-businesses/calculate-prepare-report/input-tax-credit.html) as a table with three columns. Suppliers have to provide this information; buyers need it to support a claim.',
        'A widely repeated error is worth naming. Until 20 April 2021 the thresholds were $30 and $150, and a great deal of third-party writing about Canadian invoicing still quotes those figures. They are $100 and $500.',
      ],
      table: {
        head: ['Information required', 'Under $100', '$100–$499.99', '$500 or more'],
        rows: [
          ['Supplier\'s business or trading name', 'Yes', 'Yes', 'Yes'],
          ['Invoice date, or date the tax became payable', 'Yes', 'Yes', 'Yes'],
          ['Total amount paid or payable', 'Yes', 'Yes', 'Yes'],
          ['GST/HST charged, or a statement that the amount includes it', 'No', 'Yes', 'Yes'],
          ['Status of each supply where taxable and exempt are mixed', 'No', 'Yes', 'Yes'],
          ['Supplier\'s GST/HST registration number', 'No', 'Yes', 'Yes'],
          ['Buyer\'s name or trading name', 'No', 'No', 'Yes'],
          ['Brief description of the property or services', 'No', 'No', 'Yes'],
          ['Terms of payment', 'No', 'No', 'Yes'],
        ],
      },
    },
    {
      heading: 'Which rate you charge',
      body: [
        'GST is 5% federally. Some provinces have harmonised their sales tax with it, so a single HST is charged instead at a higher combined rate. Others levy a separate provincial sales tax that sits alongside GST, and Quebec runs QST through Revenu Québec rather than the CRA.',
        'The rate is determined by the place of supply, which generally means where the customer is rather than where you are. A consultant in Calgary billing a client in Halifax charges the Nova Scotia HST rate, not Alberta\'s 5%. Because provincial rates change, take the current figures from the CRA rather than from a table someone published two years ago.',
      ],
    },
    {
      heading: 'The small supplier threshold',
      body: [
        'You generally must register for GST/HST once your worldwide taxable revenues exceed $30,000 in a single calendar quarter or over four consecutive calendar quarters. Below that you are a small supplier and registration is optional.',
        'Registering voluntarily below the threshold has a real upside: you can claim input tax credits on your own purchases. The tradeoff is that you must then charge tax to every customer, which matters if you sell to consumers who cannot recover it.',
      ],
    },
    {
      heading: 'Showing tax on the invoice',
      body: [
        'Above $100 you must either show the GST/HST charged as its own amount, or state that the amount paid or payable for each taxable supply includes the tax at the applicable rate. Showing it separately is almost always the better choice — it removes ambiguity for a buyer reconciling a claim.',
        'Where an invoice mixes taxable and exempt supplies, the status of each has to be clear from $100 upwards. Again this is per-line tax rather than a single rate applied to a subtotal.',
      ],
    },
    {
      heading: 'Time limits your customer is working to',
      body: [
        'Most registrants have four years to claim an input tax credit, running to the due date of the return for the last reporting period ending within four years of the period in which the credit first became claimable. Certain large businesses and listed financial institutions have two years instead.',
        'This matters to you because a customer who discovers a defective invoice inside that window will come back and ask you to reissue it. Getting the fields right the first time is cheaper than reconstructing a document from three years ago.',
      ],
    },
  ],
  answersHeading: 'Canadian invoicing: common questions',
  answers: [
    {
      question: 'What information must a Canadian invoice show?',
      answer:
        'It scales with value. Under $100 you need your business name, the date and the total. From $100 you add your GST/HST number and the tax charged. From $500 you also add the buyer\'s name, a description of what was supplied and the payment terms.',
    },
    {
      question: 'Do I need a GST/HST number on my invoice?',
      answer:
        'Once the sale reaches $100 the CRA requires your GST/HST registration number on the document. Below that it is not required. Without it your customer cannot support an input tax credit claim for the tax you charged.',
    },
    {
      question: 'What GST/HST rate do I charge an out-of-province client?',
      answer:
        'The rate follows the place of supply, which is generally where your customer is. A supplier in Alberta billing an Ontario client charges Ontario HST rather than the 5% federal GST alone. Check current provincial rates with the CRA.',
    },
    {
      question: 'When do I have to register for GST/HST in Canada?',
      answer:
        'Generally once your worldwide taxable revenues exceed $30,000 in one calendar quarter or across four consecutive quarters. Below that you are a small supplier and may register voluntarily, which lets you claim input tax credits on your own costs.',
    },
    {
      question: 'Are the Canadian invoice thresholds still $30 and $150?',
      answer:
        'No. They became $100 and $500 on 20 April 2021. A lot of third-party guidance still quotes the old figures, so check against the CRA page rather than a secondary source when the amount is near a boundary.',
    },
  ],
  faqs: [
    {
      question: 'Does Quebec work the same way?',
      answer:
        'GST rules are the same, but QST is administered by Revenu Québec rather than the CRA, and QST registration numbers are confirmed there.',
    },
    {
      question: 'Can I invoice in US dollars from Canada?',
      answer:
        'Yes. You still have to account for the GST/HST correctly in Canadian dollars, so record the exchange rate you used along with the invoice.',
    },
    {
      question: 'What if I charged the wrong provincial rate?',
      answer:
        'Issue a credit note cancelling the original and a corrected invoice with a new number, rather than editing the document you already sent.',
    },
  ],
  sources: [
    { label: 'Input tax credits — information requirements', publisher: 'Canada Revenue Agency', url: 'https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/gst-hst-businesses/calculate-prepare-report/input-tax-credit.html' },
    { label: 'General Information for GST/HST Registrants (RC4022)', publisher: 'Canada Revenue Agency', url: 'https://www.canada.ca/en/revenue-agency/services/forms-publications/publications/rc4022/general-information-gst-hst-registrants.html' },
  ],
  ctaHeading: 'Create a Canadian invoice',
  ctaText: 'Open the Invoice Generator',
  ctaLink: '/?mode=invoice',
  crossLinks: [
    { title: 'VAT and GST Calculator', description: 'Add or strip tax at any rate.', href: '/vat-calculator' },
    { title: 'Credit Notes and Refunds', description: 'Correcting an invoice you already sent.', href: '/credit-note-and-refunds' },
    { title: 'International Invoicing', description: 'Multi-currency, FX and cross-border payment.', href: '/international-invoicing-currency' },
  ],
};

export const usaInvoiceGuide: GuideConfig = {
  slug: 'invoice-requirements-usa',
  cluster: 'By country',
  published: '2026-08-30',
  updated: '2026-08-30',
  summary:
    'There is no federal invoice format in the US. What actually governs is your contract, state sales tax, and the W-9 and 1099-NEC paperwork.',
  keyTakeaways: [
    'No federal law prescribes what a US invoice must contain.',
    'There is no VAT. Sales tax is a state matter and usually does not apply to services.',
    'Send a W-9 before the first payment, not at year end.',
    'Payers report $600 or more of nonemployee compensation on Form 1099-NEC.',
  ],
  seo: {
    title: 'US Invoice Requirements | What Actually Applies',
    description:
      'The US has no federal invoice format. What governs instead: your contract, state sales tax, W-9 collection, 1099-NEC reporting at $600, and IRS recordkeeping.',
    canonical: '/invoice-requirements-usa',
  },
  h1: 'US Invoice Requirements: What Actually Applies',
  intro:
    'Businesses arriving from a VAT country keep looking for the American equivalent of a tax invoice, and there is not one. No federal statute prescribes the contents of an invoice, there is no VAT number to display, and nothing has to be sequentially numbered by law. What governs instead is your contract, the sales tax rules of individual states, and a small amount of IRS paperwork that has nothing to do with the invoice itself.',
  sections: [
    {
      heading: 'There is no federal invoice format',
      body: [
        'Nothing at federal level tells you what an invoice must show, and there is generally no obligation to issue one at all. An invoice in the US is a commercial document rather than a tax document: what makes it enforceable is the agreement behind it.',
        'That freedom is not an invitation to send less. Everything that makes an invoice get paid — a unique number, clear dates, itemised descriptions, explicit terms, the entity being billed — is still worth including, just for commercial rather than statutory reasons. Purchase-order requirements from large buyers are often stricter than anything a tax authority would impose.',
      ],
    },
    {
      heading: 'Sales tax is a state question',
      body: [
        'There is no VAT and no federal sales tax. Sales tax is levied by states, and often by counties and cities on top, which is why a single state can contain hundreds of distinct rates. Most states tax tangible goods; many do not tax professional services at all, which is why a large share of freelancers never charge sales tax on an invoice.',
        'Whether you must collect depends on nexus — a connection to the state through physical presence or, since South Dakota v. Wayfair, economic activity above a threshold that each state sets for itself. Because the rules genuinely differ state by state, this is a question for the state\'s revenue department or your accountant rather than a rule of thumb.',
      ],
    },
    {
      heading: 'W-9 before the first payment',
      body: [
        'If you hire a contractor, the [IRS says to have them complete Form W-9](https://www.irs.gov/businesses/small-businesses-self-employed/forms-and-associated-taxes-for-independent-contractors) so you have their taxpayer identification number, and to keep it on file for four years.',
        'Collect it before the first payment goes out. Chasing a W-9 in January from someone you last worked with in March is the classic small-business January problem, and it is entirely avoidable by making the form part of onboarding rather than of year-end.',
      ],
    },
    {
      heading: 'Form 1099-NEC and the $600 threshold',
      body: [
        'Businesses that pay $600 or more of nonemployee compensation in a year [report it on Form 1099-NEC](https://www.irs.gov/forms-pubs/about-form-1099-nec). That obligation sits with the payer, not with the contractor issuing the invoice.',
        'As the contractor, your job is to make this easy: consistent legal name and TIN on your invoices matching what you put on the W-9. A mismatch between the name on the invoice and the name on the form is what produces the notices nobody wants to deal with.',
        'Payments made through a payment card or third-party settlement network are generally reported by that network instead, so do not assume every dollar you received needs a 1099-NEC from the client.',
      ],
    },
    {
      heading: 'Records',
      body: [
        'The IRS expects you to keep records that support the income and deductions on your return, and [its recordkeeping guidance](https://www.irs.gov/businesses/small-businesses-self-employed/recordkeeping) covers what that means in practice. Copies of the invoices you issued are the primary evidence of your revenue.',
        'How long depends on the situation, and the IRS sets out the periods of limitation that apply. Three years covers the common case, but several circumstances extend it, so read the guidance rather than assuming a single number covers everything.',
      ],
    },
  ],
  answersHeading: 'US invoicing: common questions',
  answers: [
    {
      question: 'What must a US invoice legally include?',
      answer:
        'Federally, nothing. No US statute prescribes the contents of an invoice or requires you to issue one. What controls is your contract with the client, and in practice the purchase-order requirements imposed by larger buyers.',
    },
    {
      question: 'Do I charge sales tax on my invoice?',
      answer:
        'Only if you have nexus in a state that taxes what you are selling. Most states do not tax professional services, so many freelancers never charge it. Goods are taxed far more often, and rates vary by city and county.',
    },
    {
      question: 'Is there a VAT number in the United States?',
      answer:
        'No. The US has no value-added tax and therefore no VAT registration number. Overseas clients asking for one can be told that; your EIN is the closest equivalent identifier and serves a different purpose entirely.',
    },
    {
      question: 'When does a client have to send me a 1099-NEC?',
      answer:
        'When a business pays you $600 or more of nonemployee compensation during the year. The obligation is the payer\'s. Payments routed through a payment card or third-party settlement network are generally reported by that network instead.',
    },
    {
      question: 'Do I need an EIN to invoice as a freelancer?',
      answer:
        'Not necessarily — a sole proprietor can use their Social Security number. Many freelancers get an EIN anyway so they are not putting their SSN on a W-9 for every client, which is a reasonable privacy step.',
    },
    {
      question: 'What is the IRS period of limitations on my records?',
      answer:
        'It is the window in which the IRS can assess additional tax or you can amend a return, and it sets how long the supporting records matter. Three years is the common case; understated income, unfiled returns and worthless-security claims each extend it.',
    },
  ],
  faqs: [
    {
      question: 'Do US invoices need sequential numbers?',
      answer:
        'Not by law, but do it anyway. Sequential numbering is how you find an invoice later and how you notice one that never got sent.',
    },
    {
      question: 'Can I invoice a US client in another currency?',
      answer:
        'Yes, if they agree. Be explicit about which currency the total is in, since a bare dollar sign is genuinely ambiguous between several currencies.',
    },
    {
      question: 'Does an invoice need to be signed in the US?',
      answer: 'No. Invoices are not signed in ordinary US commercial practice.',
    },
  ],
  sources: [
    { label: 'Forms and associated taxes for independent contractors', publisher: 'Internal Revenue Service', url: 'https://www.irs.gov/businesses/small-businesses-self-employed/forms-and-associated-taxes-for-independent-contractors' },
    { label: 'About Form 1099-NEC, Nonemployee Compensation', publisher: 'Internal Revenue Service', url: 'https://www.irs.gov/forms-pubs/about-form-1099-nec' },
    { label: 'Recordkeeping', publisher: 'Internal Revenue Service', url: 'https://www.irs.gov/businesses/small-businesses-self-employed/recordkeeping' },
  ],
  ctaHeading: 'Create a US invoice',
  ctaText: 'Open the Invoice Generator',
  ctaLink: '/?mode=invoice',
  crossLinks: [
    { title: 'Freelance Invoicing Guide', description: 'From your first invoice to international clients.', href: '/freelance-invoicing-guide' },
    { title: 'Invoice Record Keeping', description: 'What to keep and for how long.', href: '/invoice-record-keeping' },
    { title: 'Payment Due Date Calculator', description: 'Turn Net terms into a real date.', href: '/payment-due-date-calculator' },
  ],
};
