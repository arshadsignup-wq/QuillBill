import LZString from 'lz-string';
import type { InvoiceData } from '../types/invoice';
import { isValidInvoiceData } from './validation';

export function encodePayload(data: InvoiceData): string {
  const json = JSON.stringify(data);
  return LZString.compressToEncodedURIComponent(json);
}

export function decodePayload(payload: string): InvoiceData | null {
  try {
    const json = LZString.decompressFromEncodedURIComponent(payload);
    if (!json) return null;
    const data = JSON.parse(json);
    if (!isValidInvoiceData(data)) return null;
    if (typeof data.documentTitle !== 'string') data.documentTitle = '';
    if (typeof data.bankDetails !== 'string') data.bankDetails = '';
    if (typeof data.projectScope !== 'string') data.projectScope = '';
    if (typeof data.deliverables !== 'string') data.deliverables = '';
    if (typeof data.timeline !== 'string') data.timeline = '';
    return data as InvoiceData;
  } catch {
    return null;
  }
}

export function getPayloadSizeKB(payload: string): number {
  return Math.round((new TextEncoder().encode(payload).length / 1024) * 10) / 10;
}
