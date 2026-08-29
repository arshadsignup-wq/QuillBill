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
    if (data.paperSize !== 'a4' && data.paperSize !== 'letter') data.paperSize = 'a4';
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

export function getPayloadSizeKB(payload: string): number {
  return Math.round((new TextEncoder().encode(payload).length / 1024) * 10) / 10;
}

/**
 * Share links carry the whole document in the URL *path*, so the ceiling is
 * not a browser address-bar limit — it is what the CDN will accept on the
 * request line. Measured against production: a 20,000 character path still
 * reaches the app, 60,000 is rejected outright with 414 URI Too Long.
 *
 * WARN is where messaging apps and mail clients start silently truncating a
 * pasted link; MAX is where we refuse to hand out a link that will not work.
 * Both sit well under the server ceiling because the failure mode is a client
 * opening a dead link, which they cannot diagnose and we never see.
 */
export const SHARE_WARN_BYTES = 8 * 1024;
export const SHARE_MAX_BYTES = 12 * 1024;

/**
 * A logo is a base64 data URL of up to 500KB and compresses badly, so it alone
 * can push a link past the ceiling. Stripping the images keeps the link usable
 * — the recipient sees the document, just without the branding.
 */
export function stripEmbeddedImages(data: InvoiceData): InvoiceData {
  return {
    ...data,
    logo: '',
    clientSignatureImage: '',
    authorizedSignatureImage: '',
  };
}

export function hasEmbeddedImages(data: InvoiceData): boolean {
  return Boolean(data.logo || data.clientSignatureImage || data.authorizedSignatureImage);
}
