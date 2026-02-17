import type { InvoiceData } from '../types/invoice';

export function getDocumentTitle(data: InvoiceData): string {
  if (data.documentTitle && data.documentTitle.trim()) {
    return data.documentTitle.trim().toUpperCase();
  }
  return data.mode === 'invoice' ? 'INVOICE' : 'QUOTATION';
}
