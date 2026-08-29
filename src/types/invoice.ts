export type DocumentMode = 'invoice' | 'quote' | 'proposal';

export type PaperSize = 'a4' | 'letter';

export type TemplateName =
  | 'minimal' | 'modern' | 'classic' | 'compact' | 'elegant'
  | 'bold' | 'stripe' | 'executive' | 'clean' | 'sidebar'
  | 'professional' | 'creative' | 'letterhead' | 'receipt' | 'gradient';

export interface ContactInfo {
  name: string;
  email: string;
  phone: string;
  address: string;
}

export interface LineItem {
  id: string;
  description: string;
  quantity: number;
  rate: number;
  /** Optional unit of measure shown beside the quantity: hours, days, each. */
  unit?: string;
  /**
   * Per-line tax rate, used only when the document is in 'per-line' tax mode.
   * GST, UAE VAT and EU cross-border invoices routinely mix rates on one
   * document — zero-rated freight beside standard-rated goods — which a single
   * document-wide rate cannot express.
   */
  taxRate?: number;
}

export type TaxMode = 'single' | 'per-line';

export interface InvoiceData {
  mode: DocumentMode;
  documentTitle: string;
  documentNumber: string;
  issueDate: string;
  dueDate: string;
  currency: string;
  from: ContactInfo;
  to: ContactInfo;
  items: LineItem[];
  discountType: 'percentage' | 'fixed';
  discountValue: number;
  taxRate: number;
  taxMode: TaxMode;
  shippingCost: number;
  notes: string;
  paymentTerms: string;
  bankDetails: string;
  logo: string;
  template: TemplateName;
  accentColor: string;
  paperSize: PaperSize;
  projectScope: string;
  deliverables: string;
  timeline: string;
  executiveSummary: string;
  proposedSolution: string;
  clientSignatureName: string;
  authorizedSignatureName: string;
  clientSignatureDate: string;
  authorizedSignatureDate: string;
  clientSignatureImage: string;
  authorizedSignatureImage: string;
}

export interface TaxBreakdownRow {
  rate: number;
  /** Discounted amount this rate was applied to. */
  base: number;
  amount: number;
}

export interface CalculatedTotals {
  lineItems: { id: string; total: number }[];
  subtotal: number;
  discountAmount: number;
  taxAmount: number;
  /** One row per distinct rate. A single-rate document produces one row. */
  taxBreakdown: TaxBreakdownRow[];
  total: number;
}
