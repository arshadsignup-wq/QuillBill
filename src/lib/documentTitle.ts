import type { InvoiceData } from '../types/invoice';
import { modeSpec } from '../constants/documentModes';

export function getDocumentTitle(data: InvoiceData): string {
  if (data.documentTitle && data.documentTitle.trim()) {
    return data.documentTitle.trim().toUpperCase();
  }
  return modeSpec(data.mode).title;
}
