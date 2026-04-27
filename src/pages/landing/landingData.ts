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
}

export const invoiceConfig: LandingPageConfig = {
  slug: 'invoice-generator',
  mode: 'invoice',
  seo: {
    title: 'Free Invoice Generator — No Sign-Up, No Watermark',
    description:
      'Create professional invoices for free. No sign-up, no watermarks, no login required. Export as PDF instantly with 15 templates. Your data stays in your browser.',
    canonical: '/invoice-generator',
  },
  hero: {
    h1: 'Free Invoice Generator',
    subtitle:
      'Create professional invoices in seconds. No sign-up, no watermarks, no login — just open and start billing. Export clean PDF invoices with 15 customizable templates.',
    ctaText: 'Create Invoice Free',
    ctaLink: '/?mode=invoice',
  },
  features: [
    {
      icon: Zap,
      title: 'Instant Invoice Creation',
      description:
        'Start creating invoices immediately. No account needed — your free invoice maker is ready to use right now.',
    },
    {
      icon: Shield,
      title: '100% Private & Secure',
      description:
        'Your invoice data never leaves your browser. No servers, no databases, no tracking.',
    },
    {
      icon: Download,
      title: 'PDF Invoice Export',
      description:
        'Export professional PDF invoices with proper A4 formatting, margins, and your branding.',
    },
    {
      icon: Palette,
      title: '15 Invoice Templates',
      description:
        'Choose from 15 professionally designed free invoice templates with customizable accent colors.',
    },
    {
      icon: Share2,
      title: 'Shareable Invoice Links',
      description:
        'Generate serverless links to share invoices online. Data is encoded directly in the URL.',
    },
    {
      icon: Globe,
      title: 'Multi-Currency Support',
      description:
        'Create invoices in any currency. Bill clients worldwide with your free online invoice generator.',
    },
  ],
  steps: [
    {
      title: 'Fill in Your Details',
      description:
        'Enter your business info, client details, and line items in the invoice editor. Add your logo for a professional touch.',
    },
    {
      title: 'Choose a Template',
      description:
        'Pick from 15 free invoice templates and customize the accent color to match your brand.',
    },
    {
      title: 'Export or Share',
      description:
        'Download your invoice as a PDF or generate a shareable link — all without creating an account.',
    },
  ],
  faqs: [
    {
      question: 'Is this invoice generator really free?',
      answer:
        'Yes, QuillBill is a 100% free invoice generator with no hidden charges, no premium tiers, and no watermarks on your invoices. Create unlimited invoices at no cost.',
    },
    {
      question: 'Do I need to sign up or create an account to make invoices?',
      answer:
        'No. QuillBill requires no sign-up, no login, and no email. Just open the invoice generator and start creating your invoice immediately.',
    },
    {
      question: 'Will my invoices have watermarks?',
      answer:
        'Never. Every invoice you create and export as PDF is completely watermark-free. Your documents look fully professional.',
    },
    {
      question: 'How do I export my invoice as a PDF?',
      answer:
        'Click the "Export PDF" button in the editor. QuillBill uses your browser\'s built-in print functionality to generate a clean, professional PDF invoice with proper A4 formatting.',
    },
    {
      question: 'Can I add my company logo to invoices?',
      answer:
        'Yes. Upload your company logo in the invoice editor and it will appear on all your invoices. The logo is stored locally in your browser.',
    },
    {
      question: 'Does the invoice generator support taxes and discounts?',
      answer:
        'Yes. You can add line-item descriptions, apply discount percentages or fixed amounts, set tax rates, and include shipping costs. All invoice totals are calculated automatically.',
    },
  ],
  crossLinks: [
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
    title: 'Free Quotation Generator — No Sign-Up, No Watermark',
    description:
      'Create professional quotations and price quotes for free. No sign-up, no watermarks. Export as PDF with 15 templates. 100% browser-based quotation maker.',
    canonical: '/quotation-generator',
  },
  hero: {
    h1: 'Free Quotation Generator',
    subtitle:
      'Create professional quotations and price quotes in seconds. No sign-up, no watermarks, no login — your free online quotation maker with instant PDF export.',
    ctaText: 'Create Quotation Free',
    ctaLink: '/?mode=quote',
  },
  features: [
    {
      icon: Clock,
      title: 'Quick Quotation Creation',
      description:
        'Generate quotations instantly. No account needed — your free quotation maker is ready to go.',
    },
    {
      icon: Shield,
      title: 'Private & Secure',
      description:
        'Your quotation data stays in your browser. No servers, no tracking, no data collection.',
    },
    {
      icon: Download,
      title: 'PDF Quotation Export',
      description:
        'Export professional quotation PDFs with proper formatting, your logo, and custom branding.',
    },
    {
      icon: Palette,
      title: '15 Quotation Templates',
      description:
        'Choose from 15 free quotation templates. Customize colors to match your business brand.',
    },
    {
      icon: DollarSign,
      title: 'Price Calculations',
      description:
        'Add line items, discounts, tax rates, and shipping. All quotation totals calculated automatically.',
    },
    {
      icon: Share2,
      title: 'Shareable Quote Links',
      description:
        'Share quotations via serverless links. Your client can view the quote directly in their browser.',
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
        'Export your quotation as a PDF or share via link — no account or sign-up required.',
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
        'No. There is no sign-up, no login, and no email required. Open the quotation generator and start creating price quotes immediately.',
    },
    {
      question: 'Will my quotations have watermarks?',
      answer:
        'No. All quotations you create are 100% watermark-free. Your price quotes look completely professional when exported as PDF.',
    },
    {
      question: 'How do I export my quotation as a PDF?',
      answer:
        'Click "Export PDF" in the editor. The quotation is rendered as a clean PDF with proper A4 formatting using your browser\'s built-in print functionality.',
    },
    {
      question: 'Can I include my business logo on quotations?',
      answer:
        'Yes. Upload your company logo in the editor and it will appear on your quotation. The logo stays in your browser — nothing is uploaded to any server.',
    },
    {
      question: 'What is the difference between a quotation and an invoice?',
      answer:
        'A quotation is a document sent before work begins, outlining proposed pricing. An invoice is sent after work is completed to request payment. QuillBill supports both — you can create quotations and invoices from the same editor.',
    },
  ],
  crossLinks: [
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
    title: 'Free Proposal Generator — Business & Project Proposals',
    description:
      'Create professional business and project proposals for free. Add scope, deliverables, timeline, and signatures. No sign-up, no watermarks. Export as PDF.',
    canonical: '/proposal-generator',
  },
  hero: {
    h1: 'Free Proposal Generator',
    subtitle:
      'Build professional business and project proposals in minutes. Include scope of work, deliverables, timeline, and digital signatures — all free, no sign-up required.',
    ctaText: 'Create Proposal Free',
    ctaLink: '/?mode=proposal',
  },
  features: [
    {
      icon: Briefcase,
      title: 'Business Proposal Builder',
      description:
        'Create polished business proposals with executive summary, proposed solution, and professional formatting.',
    },
    {
      icon: Target,
      title: 'Scope & Deliverables',
      description:
        'Define project scope, list deliverables, and set clear expectations with your free proposal template.',
    },
    {
      icon: ListChecks,
      title: 'Timeline & Milestones',
      description:
        'Add project timelines to your proposals. Keep clients informed about project phases and delivery dates.',
    },
    {
      icon: PenTool,
      title: 'Digital Signatures',
      description:
        'Include client and authorized signature fields with name, date, and uploaded signature images.',
    },
    {
      icon: Layout,
      title: '15 Proposal Templates',
      description:
        'Choose from 15 professionally designed free proposal templates with customizable accent colors.',
    },
    {
      icon: Download,
      title: 'PDF Proposal Export',
      description:
        'Export professional proposal PDFs with proper A4 formatting. Share via PDF or serverless links.',
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
      title: 'Export & Send',
      description:
        'Download your proposal as a PDF or share via link. Add signature fields for client approval.',
    },
  ],
  faqs: [
    {
      question: 'Is this proposal generator really free?',
      answer:
        'Yes. QuillBill is a 100% free proposal generator. No hidden charges, no premium tiers, no watermarks. Create unlimited business proposals at no cost.',
    },
    {
      question: 'Do I need to sign up to create proposals?',
      answer:
        'No. There is no sign-up, no login, and no email required. Open the proposal generator and start building your business proposal immediately.',
    },
    {
      question: 'Will my proposals have watermarks?',
      answer:
        'No. Every proposal you create is completely watermark-free. Your business proposals look fully professional when exported as PDF.',
    },
    {
      question: 'Do proposals support digital signatures?',
      answer:
        'Yes. Proposals include fields for both client and authorized signer — with name, date, and signature image upload. This is built into the proposal template at no extra cost.',
    },
    {
      question: 'Can I include scope of work and deliverables?',
      answer:
        'Yes. The proposal mode includes dedicated sections for executive summary, proposed solution, project scope, deliverables, and timeline — everything you need for a professional proposal.',
    },
    {
      question: 'How is a proposal different from a quotation?',
      answer:
        'A proposal includes detailed project information like scope of work, deliverables, timeline, and signatures, in addition to pricing. A quotation focuses primarily on pricing. QuillBill supports both from the same editor.',
    },
  ],
  crossLinks: [
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
