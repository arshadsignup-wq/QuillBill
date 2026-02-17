import { createContext, useContext, useMemo, type ReactNode, type Dispatch } from 'react';
import type { InvoiceData, CalculatedTotals } from '../types/invoice';
import { useInvoice, type InvoiceAction } from '../hooks/useInvoice';
import { calculateTotals } from '../lib/calculations';
import { useAutoSave } from '../hooks/useAutoSave';

interface InvoiceContextValue {
  data: InvoiceData;
  dispatch: Dispatch<InvoiceAction>;
  totals: CalculatedTotals;
}

const InvoiceCtx = createContext<InvoiceContextValue | null>(null);

export function InvoiceProvider({
  children,
  initialData,
  autoSave = true,
}: {
  children: ReactNode;
  initialData?: InvoiceData;
  autoSave?: boolean;
}) {
  const [data, dispatch] = useInvoice(initialData);
  const totals = useMemo(() => calculateTotals(data), [data]);

  useAutoSave(data, autoSave);

  const value = useMemo(() => ({ data, dispatch, totals }), [data, dispatch, totals]);

  return <InvoiceCtx.Provider value={value}>{children}</InvoiceCtx.Provider>;
}

export function useInvoiceContext() {
  const ctx = useContext(InvoiceCtx);
  if (!ctx) throw new Error('useInvoiceContext must be used within InvoiceProvider');
  return ctx;
}
