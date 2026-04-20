import type { InvoiceData } from '../types/invoice';

export function getDocumentTitle(data: InvoiceData): string {
  if (data.documentTitle && data.documentTitle.trim()) {
    return data.documentTitle.trim().toUpperCase();
  }
  if (data.mode === 'invoice') return 'INVOICE';
  if (data.mode === 'proposal') return 'PROPOSAL';
  return 'QUOTATION';
}
