import { useMemo } from 'react';
import type { InvoiceData } from '../types/invoice';
import {
  encodePayload,
  getPayloadSizeKB,
  stripEmbeddedImages,
  SHARE_MAX_BYTES,
} from '../lib/codec';

export interface ShareLink {
  viewUrl: string;
  editUrl: string;
  payload: string;
  sizeKB: number;
  sizeBytes: number;
  /** True when this link exceeds what the server will accept on the request line. */
  tooLong: boolean;
}

function build(data: InvoiceData): ShareLink {
  const payload = encodePayload(data);
  const sizeBytes = new TextEncoder().encode(payload).length;
  const base = typeof window !== 'undefined' ? window.location.origin : '';
  return {
    viewUrl: `${base}/view/${payload}`,
    editUrl: `${base}/edit/${payload}`,
    payload,
    sizeKB: getPayloadSizeKB(payload),
    sizeBytes,
    tooLong: sizeBytes > SHARE_MAX_BYTES,
  };
}

/**
 * Returns the link for the document as-is alongside the link with embedded
 * images removed, so the share dialog can offer a working fallback rather than
 * handing over a URL that 414s the moment the recipient clicks it.
 */
export function useShareLink(data: InvoiceData) {
  return useMemo(() => {
    const full = build(data);
    const withoutImages = full.tooLong ? build(stripEmbeddedImages(data)) : full;
    return { full, withoutImages };
  }, [data]);
}
