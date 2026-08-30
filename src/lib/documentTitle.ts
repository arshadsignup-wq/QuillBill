import type { InvoiceData } from '../types/invoice';
import { modeSpec } from '../constants/documentModes';

export function getDocumentTitle(data: InvoiceData): string {
  if (data.documentTitle && data.documentTitle.trim()) {
    return data.documentTitle.trim().toUpperCase();
  }
  return modeSpec(data.mode).title;
}

/**
 * Label for the second date on the document.
 *
 * The editor already asked the mode spec for this — "Due Date" on an invoice,
 * "Paid On" on a receipt, "Period Ending" on a timesheet — but the templates
 * hard-coded "Due", so a timesheet printed "Due" against its period end date.
 */
export function getSecondDateLabel(data: InvoiceData): string {
  return modeSpec(data.mode).secondDateLabel;
}

/**
 * Label for the grand total. "Total Due" is a demand for payment, which is
 * true of an invoice and false of a receipt or a timesheet.
 */
export function getTotalLabel(data: InvoiceData): string {
  if (data.mode === 'receipt') return 'Total Paid';
  if (data.mode === 'timesheet' || data.mode === 'purchase-order') return 'Total';
  return 'Total Due';
}
