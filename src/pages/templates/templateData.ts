import type { DocumentMode } from '../../types/invoice';
import type { FAQItem } from '../landing/landingData';

export interface TemplateEntry {
  /** Matches TemplateName in types/invoice.ts so the CTA can deep-link to it. */
  key: string;
  label: string;
  /** One-line style summary. */
  style: string;
  /** Longer, keyword-bearing description of who the template suits. */
  bestFor: string;
}

export interface TemplateGalleryConfig {
  slug: string;
  mode: DocumentMode;
  docLabel: string;
  docLabelPlural: string;
  seo: { title: string; description: string; canonical: string };
  h1: string;
  intro: string;
  ctaText: string;
  ctaLink: string;
  templates: TemplateEntry[];
  sections: { heading: string; body: string[] }[];
  faqs: FAQItem[];
  crossLinks: { title: string; description: string; href: string }[];
}

const TEMPLATE_LABELS: { key: string; label: string }[] = [
  { key: 'minimal', label: 'Minimal' },
  { key: 'modern', label: 'Modern' },
  { key: 'classic', label: 'Classic' },
  { key: 'compact', label: 'Compact' },
  { key: 'elegant', label: 'Elegant' },
  { key: 'bold', label: 'Bold' },
  { key: 'stripe', label: 'Stripe' },
  { key: 'executive', label: 'Executive' },
  { key: 'clean', label: 'Clean' },
  { key: 'sidebar', label: 'Sidebar' },
  { key: 'professional', label: 'Professional' },
  { key: 'creative', label: 'Creative' },
  { key: 'letterhead', label: 'Letterhead' },
  { key: 'receipt', label: 'Receipt' },
  { key: 'gradient', label: 'Gradient' },
];

/**
 * Style copy is written separately for each document type. Sharing one
 * description set made the three gallery pages ~49% token-identical, which
 * reads to a search engine as the same page published three times.
 */
const invoiceStyle: Record<string, string> = {
  minimal: 'Plenty of white space around the line items, with the amount due set apart at the foot.',
  modern: 'A colored band across the top carrying the invoice number and due date.',
  classic: 'Ruled borders around the item table, in the traditional accounting layout.',
  compact: 'Tight row spacing that keeps twenty or more line items on one page.',
  elegant: 'Serif figures and hairline rules, with the total set in a lighter weight.',
  bold: 'The amount due printed large enough to read across a desk.',
  stripe: 'A colored rule down the left edge with alternating row shading.',
  executive: 'A dark header block holding your logo, with the balance boxed beneath.',
  clean: 'Type and numbers only, with no rules, boxes or shading anywhere.',
  sidebar: 'A colored panel down one side holding your logo and payment details.',
  professional: 'Numbered sections separating billing details, items and payment terms.',
  creative: 'Rounded cards around each block, with the total in a tinted panel.',
  letterhead: 'Color bands top and bottom, leaving the middle clear for the item table.',
  receipt: 'A narrow monospaced column, sized for a till roll rather than A4.',
  gradient: 'A soft color gradient behind the header, fading before the item table.',
};

const quotationStyle: Record<string, string> = {
  minimal: 'Uncluttered pricing, with the quoted total and validity date easy to find.',
  modern: 'A colored header carrying the quotation number and the date it expires.',
  classic: 'A formally ruled pricing table suited to procurement and tender packs.',
  compact: 'Dense rows for quoting long material or component lists in one page.',
  elegant: 'Serif headings and fine rules, for quotes where presentation carries weight.',
  bold: 'The quoted price and expiry date given the most prominent position.',
  stripe: 'Banded rows so a client can compare optional line items at a glance.',
  executive: 'A dark header with the quoted total boxed for a purchasing committee.',
  clean: 'Pricing presented as plain text, with no shading or decorative rules.',
  sidebar: 'A side panel holding validity, terms and what the quote excludes.',
  professional: 'Numbered sections covering scope, pricing, validity and terms.',
  creative: 'Rounded blocks per option, so alternatives read as separate choices.',
  letterhead: 'Top and bottom bands matching printed stationery for formal quotes.',
  receipt: 'A short, narrow format for over-the-counter price quotes.',
  gradient: 'A gradient header above a plainly set pricing table.',
};

const proposalStyle: Record<string, string> = {
  minimal: 'Generous spacing between the summary, scope and deliverables sections.',
  modern: 'A colored banner on the cover, with accent rules dividing each section.',
  classic: 'A double-ruled frame and formal headings for traditional review panels.',
  compact: 'Two columns, fitting scope, deliverables and timeline into fewer pages.',
  elegant: 'Serif body text and thin underlines, for high-value consulting pitches.',
  bold: 'A full-width title page with the headline outcome set very large.',
  stripe: 'Alternating section bands that separate each project phase visually.',
  executive: 'A dark cover header, with the investment figure boxed on its own.',
  clean: 'Unadorned text throughout, keeping attention on scope and deliverables.',
  sidebar: 'A running side panel carrying timeline and contact details on every page.',
  professional: 'Numbered sections through summary, scope, timeline, terms and signing.',
  creative: 'Rounded cards per deliverable, with the timeline shown as stepped blocks.',
  letterhead: 'Color bands top and bottom on every page, matching printed stationery.',
  receipt: 'A single narrow page, suited to a short statement of work.',
  gradient: 'Gradient section dividers carrying color through a long document.',
};

const invoiceBestFor: Record<string, string> = {
  minimal: 'Freelancers and consultants who want a free invoice template that looks calm and uncluttered.',
  modern: 'Startups and agencies that want a branded invoice template matching a colorful visual identity.',
  classic: 'Accountants, law firms and any business that needs a conventional printable invoice template.',
  compact: 'Wholesalers and retailers billing many line items who need everything on one printed page.',
  elegant: 'Photographers, designers and premium service providers sending high-touch client invoices.',
  bold: 'Small businesses that want the invoice total and due date to be impossible to miss.',
  stripe: 'Anyone invoicing with long itemized lists where row-by-row readability matters most.',
  executive: 'Consultancies and B2B suppliers issuing invoices to large corporate finance departments.',
  clean: 'Developers and technical freelancers who prefer a plain, distraction-free invoice format.',
  sidebar: 'Service businesses that want logo, address and payment terms grouped in one panel.',
  professional: 'Established companies needing a corporate invoice template with clear section numbering.',
  creative: 'Creative studios, illustrators and marketing freelancers who want personality in their billing.',
  letterhead: 'Businesses with existing printed stationery who want invoices to match their letterhead.',
  receipt: 'Cafés, shops and market traders who need a simple receipt-style proof of payment.',
  gradient: 'Modern digital brands wanting a colorful free invoice template without a heavy header.',
};

const quotationBestFor: Record<string, string> = {
  minimal: 'Freelancers sending a straightforward price quotation with no visual distractions.',
  modern: 'Agencies presenting a branded quotation template that matches their pitch deck.',
  classic: 'Contractors and suppliers who need a formal quotation format for procurement teams.',
  compact: 'Trades and suppliers quoting many materials and line items on a single page.',
  elegant: 'Event planners, interior designers and premium services sending refined price quotes.',
  bold: 'Businesses that want the quoted price and validity period to stand out immediately.',
  stripe: 'Detailed itemized quotations where the client compares options line by line.',
  executive: 'B2B suppliers submitting quotations into a formal corporate purchasing process.',
  clean: 'Technical and software services quoting work in a plain, readable quotation format.',
  sidebar: 'Businesses that want terms, validity and contact details in a dedicated panel.',
  professional: 'Companies needing a structured, numbered business quotation template.',
  creative: 'Creative studios quoting projects where presentation is part of the pitch.',
  letterhead: 'Firms whose quotations must match existing printed company stationery.',
  receipt: 'Quick over-the-counter price quotes that need a short, simple printed format.',
  gradient: 'Digital-first brands wanting a colorful free quotation template.',
};

const proposalBestFor: Record<string, string> = {
  minimal: 'Freelancers sending a clear project proposal focused on scope and deliverables.',
  modern: 'Agencies presenting a branded business proposal template that matches their brand.',
  classic: 'Consultancies submitting a formal proposal into a traditional review process.',
  compact: 'Proposals with long deliverable lists that still need to read as a tight document.',
  elegant: 'High-value consulting and design proposals where presentation signals quality.',
  bold: 'Pitches where the headline outcome and investment figure should lead the document.',
  stripe: 'Proposals with detailed phase-by-phase breakdowns that benefit from banded sections.',
  executive: 'Enterprise proposals going to executive sponsors and procurement committees.',
  clean: 'Technical and software project proposals that prioritize clarity over decoration.',
  sidebar: 'Proposals that need scope, timeline and contact information grouped in a panel.',
  professional: 'Corporate proposals requiring numbered sections for scope, timeline and terms.',
  creative: 'Creative and marketing proposals where a distinctive look supports the pitch.',
  letterhead: 'Firms whose proposals must carry the same letterhead as their printed documents.',
  receipt: 'Short, single-page proposals or simple statements of work.',
  gradient: 'Modern digital agencies wanting a colorful free proposal template.',
};

function buildTemplates(
  style: Record<string, string>,
  bestFor: Record<string, string>
): TemplateEntry[] {
  return TEMPLATE_LABELS.map((t) => ({ ...t, style: style[t.key], bestFor: bestFor[t.key] }));
}

export const invoiceTemplatesConfig: TemplateGalleryConfig = {
  slug: 'invoice-templates',
  mode: 'invoice',
  docLabel: 'invoice',
  docLabelPlural: 'invoices',
  seo: {
    title: 'Free Invoice Templates | 15 Printable Formats',
    description:
      'Browse 15 free invoice templates you can fill in online and download as PDF. Printable invoice formats for freelancers and small business. No sign-up.',
    canonical: '/invoice-templates',
  },
  h1: 'Free Invoice Templates',
  intro:
    'Pick from 15 free invoice templates and fill them in directly in your browser. Every printable invoice template exports to PDF with no watermark, no sign-up and no email required. Choose a free invoice template below, customize the accent color and add your logo.',
  ctaText: 'Use These Invoice Templates Free',
  ctaLink: '/?mode=invoice',
  templates: buildTemplates(invoiceStyle, invoiceBestFor),
  sections: [
    {
      heading: 'How to use a free invoice template',
      body: [
        'Unlike a Word or Excel invoice template you have to download and reformat, these free invoice templates are ready to fill in online. Open the editor, type your business and client details, add your line items, and the invoice total, tax and discount are calculated for you.',
        'When the invoice looks right, switch between the 15 templates with one click. Your content stays exactly the same and only the layout changes, so you can compare invoice formats side by side before you export the PDF.',
      ],
    },
    {
      heading: 'What every invoice template includes',
      body: [
        'Each free invoice template contains the fields a valid invoice needs: your business name and address, the client name and address, a unique invoice number, the issue date and due date, an itemized list of goods or services with quantity and rate, and the total amount due.',
        'You can also add your logo, a tax or VAT rate, a percentage or fixed discount, shipping costs, payment terms and free-text notes. Totals recalculate automatically as you edit, so the printable invoice you download is always correct.',
      ],
    },
    {
      heading: 'Printable invoice templates that export to PDF',
      body: [
        'Every invoice template is laid out for A4 and Letter paper with proper margins, so what you see on screen is what prints. Export a PDF invoice with one click using your browser print dialog, then email it to your client or print it for your records.',
        'There is no watermark and no branding added to your invoice. The exported PDF contains only your business details and your client details.',
      ],
    },
  ],
  faqs: [
    {
      question: 'Are these invoice templates really free?',
      answer:
        'Yes. All 15 invoice templates are completely free with no sign-up, no trial period and no watermark. You can create and download unlimited invoices at no cost.',
    },
    {
      question: 'Can I download the invoice template as a PDF?',
      answer:
        'Yes. Fill in the invoice template in your browser and click Export PDF. The printable invoice is generated with correct A4 formatting and downloads straight to your device.',
    },
    {
      question: 'Do I need Word or Excel to use these invoice templates?',
      answer:
        'No. These are online invoice templates that you fill in directly in your browser. There is nothing to download, install or reformat, and no Microsoft Office license is required.',
    },
    {
      question: 'Can I add my company logo to the invoice template?',
      answer:
        'Yes. Upload your logo in the editor and it appears on whichever invoice template you choose. The logo is stored in your browser and never uploaded to a server.',
    },
    {
      question: 'Which free invoice template should I choose?',
      answer:
        'Minimal and Clean suit freelancers who want something simple. Classic and Professional suit formal business and corporate clients. Modern, Gradient and Creative suit brands that want color. Compact works best when you have many line items.',
    },
    {
      question: 'Can I switch invoice templates after filling in my details?',
      answer:
        'Yes. Your invoice content is kept separately from the template, so you can switch between all 15 invoice formats at any time without retyping anything.',
    },
  ],
  crossLinks: [
    { title: 'Free Invoice Generator', description: 'Create and download an invoice in seconds.', href: '/invoice-generator' },
    { title: 'Free Quotation Templates', description: 'Browse 15 free quotation and price quote templates.', href: '/quotation-templates' },
    { title: 'How to Create an Invoice', description: 'A step-by-step guide to invoicing clients correctly.', href: '/how-to-create-an-invoice' },
  ],
};

export const quotationTemplatesConfig: TemplateGalleryConfig = {
  slug: 'quotation-templates',
  mode: 'quote',
  docLabel: 'quotation',
  docLabelPlural: 'quotations',
  seo: {
    title: 'Free Quotation Templates | 15 Quote Formats',
    description:
      'Browse 15 free quotation templates you can fill in online and export as PDF. Printable price quote and estimate formats for any business. No sign-up.',
    canonical: '/quotation-templates',
  },
  h1: 'Free Quotation Templates',
  intro:
    'Choose from 15 free quotation templates and fill them in directly in your browser. Every price quote template exports to PDF with no watermark and no sign-up. Pick a quotation format below, add your logo and send it to your client.',
  ctaText: 'Use These Quotation Templates Free',
  ctaLink: '/?mode=quote',
  templates: buildTemplates(quotationStyle, quotationBestFor),
  sections: [
    {
      heading: 'How to use a free quotation template',
      body: [
        'A quotation tells a prospective client exactly what you will do and what it will cost, before any work begins. These free quotation templates are ready to fill in online, so there is no Word or Excel file to download and reformat.',
        'Enter your business details, the client details and your itemized pricing. Discounts, tax and totals are calculated automatically. Then switch between the 15 quotation templates to find the format that suits the client.',
      ],
    },
    {
      heading: 'What every quotation template includes',
      body: [
        'Each quotation template covers the essentials of a professional price quote: your business name and contact details, the client name and address, a quotation number, the issue date, a validity or expiry date, an itemized breakdown of the work with quantities and rates, and the total quoted price.',
        'You can add tax rates, discounts, shipping, payment terms and notes explaining what is and is not included in the quoted price. Clear inclusions and exclusions are what stop a quotation turning into a dispute later.',
      ],
    },
    {
      heading: 'Quotation, estimate or proposal?',
      body: [
        'A quotation is a fixed price offer that is valid for a stated period. An estimate is an approximate figure that may change once the work is scoped. A proposal is a longer document that adds scope of work, deliverables, timeline and signatures alongside the pricing.',
        'If you need scope and deliverables as well as a price, use the free proposal templates instead. If the work is already complete and you are requesting payment, use an invoice template.',
      ],
    },
  ],
  faqs: [
    {
      question: 'Are these quotation templates free?',
      answer:
        'Yes. All 15 quotation templates are completely free with no sign-up, no trial and no watermark. Create and download unlimited price quotations at no cost.',
    },
    {
      question: 'Can I download a quotation template as PDF or Word?',
      answer:
        'You can export any quotation as a PDF with one click. There is no Word download, because these are online quotation templates you fill in directly in the browser rather than files you edit offline.',
    },
    {
      question: 'How long should a quotation stay valid?',
      answer:
        'Most businesses make a quotation valid for 14 to 30 days. Add the validity period in the notes or terms field so the client knows when the quoted price expires.',
    },
    {
      question: 'Can I convert a quotation into an invoice?',
      answer:
        'Yes. The editor uses the same document for invoices, quotations and proposals, so you can switch the document mode to invoice once the client accepts and keep all your line items.',
    },
    {
      question: 'Can I add my business logo to a quotation template?',
      answer:
        'Yes. Upload your logo in the editor and it appears on whichever quotation template you select. The logo stays in your browser and is never uploaded anywhere.',
    },
    {
      question: 'Which quotation template works best for corporate clients?',
      answer:
        'Classic, Professional and Executive suit formal procurement and corporate purchasing processes. Modern and Gradient suit consumer-facing or creative brands. Compact is best when quoting many individual items.',
    },
  ],
  crossLinks: [
    { title: 'Free Quotation Generator', description: 'Create and send a price quotation in minutes.', href: '/quotation-generator' },
    { title: 'Free Invoice Templates', description: 'Browse 15 free printable invoice templates.', href: '/invoice-templates' },
    { title: 'Invoice vs Quotation', description: 'Understand when to send each document.', href: '/invoice-vs-quotation' },
  ],
};

export const proposalTemplatesConfig: TemplateGalleryConfig = {
  slug: 'proposal-templates',
  mode: 'proposal',
  docLabel: 'proposal',
  docLabelPlural: 'proposals',
  seo: {
    title: 'Free Business Proposal Templates | 15 Formats',
    description:
      'Browse 15 free business proposal templates with scope, deliverables, timeline and signatures. Fill in online and export a PDF. No sign-up required.',
    canonical: '/proposal-templates',
  },
  h1: 'Free Business Proposal Templates',
  intro:
    'Choose from 15 free proposal templates covering executive summary, scope of work, deliverables, timeline and signatures. Fill in your company proposal template online and export a PDF. No sign-up, no watermark, completely free.',
  ctaText: 'Use These Proposal Templates Free',
  ctaLink: '/?mode=proposal',
  templates: buildTemplates(proposalStyle, proposalBestFor),
  sections: [
    {
      heading: 'What a business proposal template should contain',
      body: [
        'A strong business proposal template opens with an executive summary that states the client problem and your proposed outcome in a few sentences. It then sets out the proposed solution, the scope of work, the specific deliverables, a timeline with milestones, and the investment required.',
        'Every free proposal template here includes dedicated sections for all of these, plus signature blocks for both the client and your authorized signer so the proposal can double as an acceptance document.',
      ],
    },
    {
      heading: 'Project proposal vs business proposal',
      body: [
        'A project proposal focuses on a single defined piece of work: what will be delivered, by when, and for how much. A business proposal is broader and often covers an ongoing relationship, a retainer or a partnership.',
        'These templates work for both. Use the scope and deliverables sections for a project proposal, and lean on the executive summary and proposed solution sections when writing a wider business proposal.',
      ],
    },
    {
      heading: 'Free proposal templates you fill in online',
      body: [
        'There is no Word or PowerPoint file to download and reformat. Fill in your company proposal template directly in the browser, switch between the 15 layouts to compare them, then export a clean PDF for the client.',
        'Your proposal never leaves your device. Everything runs client-side, so client names, pricing and commercial terms stay private.',
      ],
    },
  ],
  faqs: [
    {
      question: 'Are these business proposal templates free?',
      answer:
        'Yes. All 15 proposal templates are free with no sign-up, no trial and no watermark. Create unlimited business and project proposals at no cost.',
    },
    {
      question: 'Do the proposal templates include signature fields?',
      answer:
        'Yes. Every free proposal template includes signature blocks for both the client and your authorized signer, with name, date and an optional uploaded signature image.',
    },
    {
      question: 'Can I download a proposal template in Word format?',
      answer:
        'These are online proposal templates you fill in directly in the browser and export as PDF. There is no Word download, which also means there is no formatting to fix after you edit the text.',
    },
    {
      question: 'What sections does a project proposal template include?',
      answer:
        'Executive summary, proposed solution, scope of work, deliverables, timeline and milestones, itemized pricing, terms and notes, plus signature blocks.',
    },
    {
      question: 'Which proposal template should I use for a corporate client?',
      answer:
        'Executive, Professional and Classic suit enterprise and procurement audiences. Modern, Creative and Gradient suit agencies and creative pitches. Clean and Minimal suit technical or software project proposals.',
    },
    {
      question: 'How long should a business proposal be?',
      answer:
        'For most freelance and agency work, two to four pages is enough. Lead with the executive summary, keep scope and deliverables specific, and put detailed terms at the end.',
    },
  ],
  crossLinks: [
    { title: 'Free Proposal Generator', description: 'Build a business proposal with scope and timeline.', href: '/proposal-generator' },
    { title: 'Free Invoice Templates', description: 'Browse 15 free printable invoice templates.', href: '/invoice-templates' },
    { title: 'Free Quotation Templates', description: 'Browse 15 free price quote templates.', href: '/quotation-templates' },
  ],
};

export const templateGalleryConfigs = [
  invoiceTemplatesConfig,
  quotationTemplatesConfig,
  proposalTemplatesConfig,
];
