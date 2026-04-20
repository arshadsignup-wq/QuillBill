export type DocumentMode = 'invoice' | 'quote' | 'proposal';

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
}

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
  shippingCost: number;
  notes: string;
  paymentTerms: string;
  bankDetails: string;
  logo: string;
  template: TemplateName;
  accentColor: string;
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

export interface CalculatedTotals {
  lineItems: { id: string; total: number }[];
  subtotal: number;
  discountAmount: number;
  taxAmount: number;
  total: number;
}
