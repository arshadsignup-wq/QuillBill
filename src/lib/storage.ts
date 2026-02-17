import type { InvoiceData } from '../types/invoice';
import { isValidInvoiceData } from './validation';

const STORAGE_KEY = 'quillbill-draft';

export function saveDraft(data: InvoiceData): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch {
    // localStorage full or unavailable
  }
}

export function loadDraft(): InvoiceData | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const data = JSON.parse(raw);
    if (!isValidInvoiceData(data)) return null;
    // Backfill new fields for older drafts
    if (typeof data.documentTitle !== 'string') data.documentTitle = '';
    return data as InvoiceData;
  } catch {
    return null;
  }
}

export function clearDraft(): void {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {
    // ignore
  }
}
