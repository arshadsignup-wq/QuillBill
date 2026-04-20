import { nanoid } from 'nanoid';
import type { InvoiceData, LineItem } from '../types/invoice';

export function createDefaultLineItem(): LineItem {
  return {
    id: nanoid(),
    description: '',
    quantity: 1,
    rate: 0,
  };
}

export function createDefaultInvoice(): InvoiceData {
  const today = new Date();
  const due = new Date(today);
  due.setDate(due.getDate() + 30);

  return {
    mode: 'invoice',
    documentTitle: '',
    documentNumber: 'INV-001',
    issueDate: today.toISOString().split('T')[0],
    dueDate: due.toISOString().split('T')[0],
    currency: 'USD',
    from: { name: '', email: '', phone: '', address: '' },
    to: { name: '', email: '', phone: '', address: '' },
    items: [createDefaultLineItem()],
    discountType: 'percentage',
    discountValue: 0,
    taxRate: 0,
    shippingCost: 0,
    notes: '',
    paymentTerms: '',
    bankDetails: '',
    logo: '',
    template: 'minimal',
    accentColor: '#2563eb',
    projectScope: '',
    deliverables: '',
    timeline: '',
    executiveSummary: '',
    proposedSolution: '',
    clientSignatureName: '',
    authorizedSignatureName: '',
    clientSignatureDate: '',
    authorizedSignatureDate: '',
    clientSignatureImage: '',
    authorizedSignatureImage: '',
  };
}
