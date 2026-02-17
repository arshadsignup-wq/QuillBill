import { useEffect, useRef } from 'react';
import type { InvoiceData } from '../types/invoice';
import { saveDraft } from '../lib/storage';

export function useAutoSave(data: InvoiceData, enabled: boolean = true) {
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (!enabled) return;

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      saveDraft(data);
    }, 500);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [data, enabled]);
}
