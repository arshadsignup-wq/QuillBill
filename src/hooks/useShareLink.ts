import { useMemo } from 'react';
import type { InvoiceData } from '../types/invoice';
import { encodePayload, getPayloadSizeKB } from '../lib/codec';

export function useShareLink(data: InvoiceData) {
  return useMemo(() => {
    const payload = encodePayload(data);
    const sizeKB = getPayloadSizeKB(payload);
    const base = window.location.origin + window.location.pathname;
    const viewUrl = `${base}#/view/${payload}`;
    const editUrl = `${base}#/edit/${payload}`;
    return { viewUrl, editUrl, payload, sizeKB };
  }, [data]);
}
