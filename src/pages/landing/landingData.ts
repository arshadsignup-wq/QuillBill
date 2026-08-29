import type { LucideIcon } from 'lucide-react';
import {
  Zap, Shield, Palette, Share2, Globe,
  Clock, Download, Layout, PenTool, DollarSign,
  Briefcase, Target, ListChecks,
} from 'lucide-react';
import type { DocumentMode } from '../../types/invoice';

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FeatureItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface StepItem {
  title: string;
  description: string;
}

export interface CrossLinkItem {
  title: string;
  description: string;
  href: string;
}

export interface LandingPageConfig {
  slug: string;
  mode: DocumentMode;
  seo: {
    title: string;
    description: string;
    canonical: string;
  };
  hero: {
    h1: string;
    subtitle: string;
    ctaText: string;
    ctaLink: string;
  };
  features: FeatureItem[];
  steps: StepItem[];
  faqs: FAQItem[];
  crossLinks: CrossLinkItem[];
  ctaDescription: string;
}

export const invoiceConfig: LandingPageConfig = {
  slug: 'invoice-generator',
  mode: 'invoice',
  seo: {
    title: 'Free Invoice Generator Online | No Sign-Up',
    description:
      'Create professional invoices free with this online invoice generator. No sign-up, no watermarks, no login. 15 free templates and instant PDF export.',
    canonical: '/invoice-generator',
  },
  hero: {
    h1: 'Free Invoice Generator',
    subtitle:
      'Create professional invoices in seconds with this free invoice generator online. No sign-up, no watermarks, no login required. Export clean, printable PDF invoices with 15 customizable templates.',
    ctaText: 'Create Invoice Free',
    ctaLink: '/?mode=invoice',
  },
  ctaDescription: 'Start using the free invoice generator now. No sign-up, no watermarks, no login.',
  features: [
    {
      icon: Zap,
      title: 'Instant Invoice Creation',
      description:
        'Start creating invoices immediately with this free invoice maker. No account needed, no downloads. Your online invoice creator is ready to use right now.',
    },
    {
      icon: Shield,
      title: '100% Private & Secure',
      description:
        'Your invoice data never leaves your browser. This free invoice app runs entirely client-side with no servers and no databases.',
    },
    {
      icon: Download,
      title: 'PDF Invoice Generator',
      description:
        'Export professional, printable invoice PDFs with proper A4 formatting, margins, and your branding. Your PDF invoice generator with one-click export.',
    },
    {
      icon: Palette,
      title: '15 Free Invoice Templates',
      description:
        'Choose from 15 professionally designed free invoice templates with customizable accent colors to match your brand.',
    },
    {
      icon: Share2,
      title: 'Shareable Invoice Links',
      description:
        'Generate serverless links to share invoices online. Invoice data is encoded directly in the URL for instant access.',
    },
    {
      icon: Globe,
      title: 'Multi-Currency Support',
      description:
        'Create invoices in any currency. Bill clients worldwide with this invoice generator online. Invoice generation online has never been easier.',
    },
  ],
  steps: [
    {
      title: 'Fill in Your Details',
      description:
        'Enter your business info, client details, and line items in the invoice editor. Add your logo for a professional invoice.',
    },
    {
      title: 'Choose a Template',
      description:
        'Pick from 15 free invoice templates and customize the accent color to match your brand.',
    },
    {
      title: 'Export or Share',
      description:
        'Download your printable invoice as a PDF or generate a shareable link. No account or sign-up required.',
    },
  ],
  faqs: [
    {
      question: 'Is this invoice generator really free?',
      answer:
        'Yes, QuillBill is a 100% free invoice generator with no hidden charges, no premium tiers, and no watermarks on your invoices. Create unlimited professional invoices at no cost.',
    },
    {
      question: 'Do I need to sign up or create an account to make invoices?',
      answer:
        'No. This invoice maker free tool requires no sign-up, no login, and no email. Just open the online invoice creator and start creating your invoice immediately.',
    },
    {
      question: 'Will my invoices have watermarks?',
      answer:
        'Never. Every invoice you create and export as PDF is completely watermark-free. Your documents look fully professional.',
    },
    {
      question: 'How do I export my invoice as a PDF?',
      answer:
        'Click the "Export PDF" button in the editor. This PDF invoice generator uses your browser\'s built-in print functionality to produce a clean, printable invoice with proper A4 formatting.',
    },
    {
      question: 'Can I add my company logo to invoices?',
      answer:
        'Yes. Upload your company logo in the invoice editor and it will appear on all your invoices. The logo is stored locally in your browser.',
    },
    {
      question: 'Does this free invoice app support taxes and discounts?',
      answer:
        'Yes. You can add line-item descriptions, apply discount percentages or fixed amounts, set tax rates, and include shipping costs. All invoice totals are calculated automatically.',
    },
    {
      question: 'What is an invoice generator?',
      answer:
        'An invoice generator is a tool that turns details you enter — your business, your client, line items, tax and payment terms — into a formatted invoice you can download as a PDF. It calculates the totals for you, so there is no manual arithmetic to get wrong.',
    },
    {
      question: 'Is an invoice made with a generator legally valid?',
      answer:
        'Yes. No country requires invoices to be produced by particular software. Validity comes from the content: a unique invoice number, both parties identified, a clear description of the work, the dates, the correct tax treatment and the total payable.',
    },
    {
      question: 'How many invoices can I create for free?',
      answer:
        'As many as you like. There is no document cap, no trial period and no point at which you are asked to upgrade, because QuillBill renders invoices in your browser rather than on a server and so has no per-invoice cost to recover.',
    },
    {
      question: 'Where is my invoice data stored?',
      answer:
        'On your device only. The invoice is assembled in your browser and never transmitted, so your client names, rates and volumes are not sent anywhere. The trade-off is that there is no cross-device history, so keep your exported PDFs somewhere you back up.',
    },
    {
      question: 'Can I use this invoice generator on my phone?',
      answer:
        'Yes. It works in any modern mobile browser and exports the PDF straight to your phone\'s storage or share sheet. The practical limit is typing long line-item descriptions on a phone keyboard, not the tool itself.',
    },
    {
      question: 'Can I edit an invoice after I have created it?',
      answer:
        'Before you send it, yes — your work is saved locally as you type. Once an invoice has gone to a client, do not silently alter it. Issue a credit note cancelling it and a corrected invoice with a new number, so both sets of records stay auditable.',
    },
  ],
  crossLinks: [
    {
      title: 'Free Invoice Templates',
      description: 'Browse all 15 free printable invoice templates and pick a format.',
      href: '/invoice-templates',
    },
    {
      title: 'How to Create an Invoice',
      description: 'Step-by-step guide covering what to include and how to get paid faster.',
      href: '/how-to-create-an-invoice',
    },
    {
      title: 'Quotation Generator',
      description: 'Create professional quotations and price quotes for free.',
      href: '/quotation-generator',
    },
    {
      title: 'Proposal Generator',
      description: 'Build business and project proposals with scope, deliverables, and timeline.',
      href: '/proposal-generator',
    },
  ],
};

export const quotationConfig: LandingPageConfig = {
  slug: 'quotation-generator',
  mode: 'quote',
  seo: {
    title: 'Free Quotation Generator Online | No Sign-Up',
    description:
      'Create professional price quotations free. No sign-up, no watermarks. Export quotation PDFs with 15 free templates. Free quotation software for business.',
    canonical: '/quotation-generator',
  },
  hero: {
    h1: 'Free Quotation Generator',
    subtitle:
      'Create professional price quotations in seconds with this free online quotation generator. No sign-up, no watermarks, no login required. Export quotation PDFs instantly with 15 customizable templates.',
    ctaText: 'Create Quotation Free',
    ctaLink: '/?mode=quote',
  },
  ctaDescription: 'Start using the free quotation generator now. No sign-up, no watermarks, no login.',
  features: [
    {
      icon: Clock,
      title: 'Quick Quotation Creation',
      description:
        'Generate quotations instantly with this free quotation software. No account needed and no downloads. Your business quotation generator is ready to go.',
    },
    {
      icon: Shield,
      title: 'Private & Secure',
      description:
        'Your quotation data stays in your browser. This free online quotation generator runs entirely client-side with no servers or data collection.',
    },
    {
      icon: Download,
      title: 'Quotation PDF Export',
      description:
        'Export professional quotation PDFs with proper formatting, your logo, and custom branding. One-click PDF download.',
    },
    {
      icon: Palette,
      title: '15 Free Quotation Templates',
      description:
        'Choose from 15 free quotation templates. Customize colors to match your business brand for every price quotation.',
    },
    {
      icon: DollarSign,
      title: 'Price Quotation Calculations',
      description:
        'Add line items, discounts, tax rates, and shipping. All quotation totals are calculated automatically for accurate price quotations.',
    },
    {
      icon: Share2,
      title: 'Shareable Quote Links',
      description:
        'Share quotations via serverless links. Your client can view the price quotation directly in their browser.',
    },
  ],
  steps: [
    {
      title: 'Enter Quote Details',
      description:
        'Add your business info, client details, and itemized pricing in the quotation editor.',
    },
    {
      title: 'Pick a Template',
      description:
        'Select from 15 free quotation templates and customize the accent color for your brand.',
    },
    {
      title: 'Send or Download',
      description:
        'Export your quotation as a PDF or share via link. No account or sign-up required.',
    },
  ],
  faqs: [
    {
      question: 'Is this quotation generator really free?',
      answer:
        'Yes. QuillBill is a completely free quotation generator. No hidden fees, no premium plans, no watermarks. Create unlimited quotations at zero cost.',
    },
    {
      question: 'Do I need to create an account to generate quotations?',
      answer:
        'No. This free quotation software requires no sign-up, no login, and no email. Open the quotation generator and start creating price quotes immediately.',
    },
    {
      question: 'Will my quotations have watermarks?',
      answer:
        'No. All quotations you create are 100% watermark-free. Your price quotations look completely professional when exported as PDF.',
    },
    {
      question: 'How do I export my quotation as a PDF?',
      answer:
        'Click "Export PDF" in the editor. The quotation is rendered as a clean quotation PDF with proper A4 formatting using your browser\'s built-in print functionality.',
    },
    {
      question: 'Can I include my business logo on quotations?',
      answer:
        'Yes. Upload your company logo in the editor and it will appear on your quotation. The logo stays in your browser and nothing is uploaded to any server.',
    },
    {
      question: 'What is the difference between a quotation and an invoice?',
      answer:
        'A quotation is a document sent before work begins, outlining proposed pricing. An invoice is sent after work is completed to request payment. This business quotation generator supports both. You can create quotations and invoices from the same editor.',
    },
    {
      question: 'What is a quotation generator?',
      answer:
        'A tool that produces a formal price quotation as a shareable or printable document. A good one handles what makes a quote an offer rather than a price list: a validity date, itemized scope, stated exclusions and a clear way for the client to accept.',
    },
    {
      question: 'How do I create a quotation online?',
      answer:
        'Enter your business and client details, give the quotation its own number, set the issue date and a validity date, itemize the scope with quantities and rates, state what is excluded and the payment terms that will apply, then export the PDF and send it.',
    },
    {
      question: 'How long should my quotation be valid for?',
      answer:
        'Fourteen to thirty days suits most service businesses. Shorten it where your input costs move quickly, as in construction or anything using commodity materials. What matters most is that a validity date exists, because without one a client can accept at an outdated price.',
    },
    {
      question: 'Can I turn an accepted quotation into an invoice?',
      answer:
        'Yes. The same document supports invoice, quotation and proposal modes, so once a quote is accepted you switch the mode and every line item carries over. Give the invoice its own number and reference the quotation number on it.',
    },
    {
      question: 'Can I use this to create an estimate instead?',
      answer:
        'Yes — change the document heading to Estimate. The distinction matters: a quotation is a fixed price you are held to once accepted, while an estimate is an approximation that can change. Label it accurately, because clients reasonably treat the two differently.',
    },
    {
      question: 'How many quotations can I create for free?',
      answer:
        'Unlimited. There is no document allowance, no trial and no upgrade prompt. Because quotations are generated in your browser, your pricing never reaches a server — which matters more for quotes than invoices, since a quote reveals your rates before you have won the work.',
    },
  ],
  crossLinks: [
    {
      title: 'Free Quotation Templates',
      description: 'Browse all 15 free price quote and estimate templates.',
      href: '/quotation-templates',
    },
    {
      title: 'Invoice vs Quotation',
      description: 'Understand which document to send and when.',
      href: '/invoice-vs-quotation',
    },
    {
      title: 'Invoice Generator',
      description: 'Create professional invoices with PDF export for free.',
      href: '/invoice-generator',
    },
    {
      title: 'Proposal Generator',
      description: 'Build business and project proposals with scope, deliverables, and timeline.',
      href: '/proposal-generator',
    },
  ],
};

export const proposalConfig: LandingPageConfig = {
  slug: 'proposal-generator',
  mode: 'proposal',
  seo: {
    title: 'Free Proposal Generator | Business Proposals',
    description:
      'Create business and project proposals free, with scope, deliverables, timeline and signatures. No sign-up, no watermarks. Export proposal PDFs instantly.',
    canonical: '/proposal-generator',
  },
  hero: {
    h1: 'Free Proposal Generator',
    subtitle:
      'Build professional business and project proposals in minutes with this free proposal software. Include scope of work, deliverables, timeline, and digital signatures. No sign-up, no watermarks.',
    ctaText: 'Create Proposal Free',
    ctaLink: '/?mode=proposal',
  },
  ctaDescription: 'Start using the free proposal generator now. No sign-up, no watermarks, no login.',
  features: [
    {
      icon: Briefcase,
      title: 'Business Proposal Generator',
      description:
        'Create polished business proposals with executive summary, proposed solution, and professional formatting. The free business proposal template you need.',
    },
    {
      icon: Target,
      title: 'Scope & Deliverables',
      description:
        'Define project scope, list deliverables, and set clear expectations. Your free proposal template with built-in project structure.',
    },
    {
      icon: ListChecks,
      title: 'Timeline & Milestones',
      description:
        'Add project timelines to your proposals. This project proposal generator keeps clients informed about phases and delivery dates.',
    },
    {
      icon: PenTool,
      title: 'Digital Signatures',
      description:
        'Include client and authorized signature fields with name, date, and uploaded signature images. Professional proposal templates with signing built in.',
    },
    {
      icon: Layout,
      title: '15 Free Proposal Templates',
      description:
        'Choose from 15 professionally designed free proposal templates with customizable accent colors. Find the right company proposal template free of charge.',
    },
    {
      icon: Download,
      title: 'Proposal PDF Export',
      description:
        'Export professional proposal PDFs with proper A4 formatting. Share via PDF download or serverless links.',
    },
  ],
  steps: [
    {
      title: 'Draft Your Proposal',
      description:
        'Enter your business info, client details, scope of work, deliverables, and timeline in the proposal editor.',
    },
    {
      title: 'Choose a Template',
      description:
        'Pick from 15 free proposal templates and customize colors to match your brand identity.',
    },
    {
      title: 'Export and Send',
      description:
        'Download your proposal as a PDF or share via link. Add signature fields for client approval.',
    },
  ],
  faqs: [
    {
      question: 'Is this proposal generator really free?',
      answer:
        'Yes. QuillBill is a 100% free proposal generator. No hidden charges, no premium tiers, no watermarks. Create unlimited business proposals at no cost. Free proposal software for freelancers, agencies, and businesses.',
    },
    {
      question: 'Do I need to sign up to create proposals?',
      answer:
        'No. This free proposal software requires no sign-up, no login, and no email. Open the proposal generator and start building your business proposal immediately.',
    },
    {
      question: 'Will my proposals have watermarks?',
      answer:
        'No. Every proposal you create is completely watermark-free. Your business proposals look fully professional when exported as PDF.',
    },
    {
      question: 'Do proposals support digital signatures?',
      answer:
        'Yes. Proposals include fields for both client and authorized signer with name, date, and signature image upload. This is built into every professional proposal template at no extra cost.',
    },
    {
      question: 'Can I include scope of work and deliverables?',
      answer:
        'Yes. The proposal mode includes dedicated sections for executive summary, proposed solution, project scope, deliverables, and timeline. Everything you need for proposal generation in one place.',
    },
    {
      question: 'How is a proposal different from a quotation?',
      answer:
        'A proposal includes detailed project information like scope of work, deliverables, timeline, and signatures, in addition to pricing. A quotation focuses primarily on pricing. This project proposal generator supports both from the same editor.',
    },
    {
      question: 'What is a proposal generator?',
      answer:
        'A tool that builds a structured business proposal document — problem, approach, deliverables, timeline and a calculated pricing table — and exports it as a PDF. It handles the layout and the arithmetic so you can concentrate on the argument.',
    },
    {
      question: 'What should a business proposal include?',
      answer:
        'A title page, an executive summary, the problem in the client\'s own terms, your proposed approach, verifiable deliverables, a timeline, itemized pricing, assumptions and exclusions, brief relevant credentials, and clear terms with a validity date and an acceptance instruction.',
    },
    {
      question: 'How long should a business proposal be?',
      answer:
        'Two to four pages covers most straightforward work where the client has already asked for it. Unsolicited proposals run longer because they must establish the problem exists first. RFP responses follow whatever length the RFP specifies. Padding actively hurts.',
    },
    {
      question: 'Does this proposal generator use AI?',
      answer:
        'No. It builds the document and calculates the pricing; the words are yours. That is deliberate — a generated proposal invents pricing and timelines that become binding commitments once a client accepts. See our guide on where AI drafting helps and where it does not.',
    },
    {
      question: 'Can I add a pricing table with optional items?',
      answer:
        'Yes. Add optional or alternative work as separate line items so the client can see what they are choosing rather than facing a single total. Presenting options tends to raise average deal size, because it changes the question from whether to buy to how much.',
    },
    {
      question: 'How many proposals can I create for free?',
      answer:
        'Unlimited, with no watermark, no account and no trial period. Proposals are generated in your browser, so your scope, pricing and client details are never transmitted to a server.',
    },
  ],
  crossLinks: [
    {
      title: 'Free Proposal Templates',
      description: 'Browse all 15 free business and project proposal templates.',
      href: '/proposal-templates',
    },
    {
      title: 'Invoice Generator',
      description: 'Create professional invoices with PDF export for free.',
      href: '/invoice-generator',
    },
    {
      title: 'Quotation Generator',
      description: 'Create professional quotations and price quotes for free.',
      href: '/quotation-generator',
    },
  ],
};
