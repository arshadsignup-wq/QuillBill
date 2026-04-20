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
    if (typeof data.bankDetails !== 'string') data.bankDetails = '';
    if (typeof data.projectScope !== 'string') data.projectScope = '';
    if (typeof data.deliverables !== 'string') data.deliverables = '';
    if (typeof data.timeline !== 'string') data.timeline = '';
    if (typeof data.executiveSummary !== 'string') data.executiveSummary = '';
    if (typeof data.proposedSolution !== 'string') data.proposedSolution = '';
    if (typeof data.clientSignatureName !== 'string') data.clientSignatureName = '';
    if (typeof data.authorizedSignatureName !== 'string') data.authorizedSignatureName = '';
    if (typeof data.clientSignatureDate !== 'string') data.clientSignatureDate = '';
    if (typeof data.authorizedSignatureDate !== 'string') data.authorizedSignatureDate = '';
    if (typeof data.clientSignatureImage !== 'string') data.clientSignatureImage = '';
    if (typeof data.authorizedSignatureImage !== 'string') data.authorizedSignatureImage = '';
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
