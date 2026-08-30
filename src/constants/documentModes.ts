import type { DocumentMode } from '../types/invoice';

/**
 * How each document type presents itself.
 *
 * The mode used to be read through ternaries scattered across the title
 * helper, the meta editor, the template picker and the preview data — three
 * modes was already awkward and six would have been unmaintainable. Everything
 * mode-dependent that is not a layout decision lives here.
 */
export interface ModeSpec {
  /** Button text and the human name used in copy. */
  label: string;
  /** Printed at the head of the document. */
  title: string;
  /** Placeholder and the number assigned when switching into this mode. */
  numberPrefix: string;
  /** Label for the second date field, which means something different per mode. */
  secondDateLabel: string;
  /** Proposals have their own template set. */
  usesProposalTemplates: boolean;
  /** Prefilled on new line items — a timesheet is billed in hours. */
  defaultUnit?: string;
  /** Timesheets need a date against each line; invoices do not. */
  showLineDates: boolean;
  /** Noun used in structured data and page copy. */
  noun: string;
}

export const DOCUMENT_MODES: Record<DocumentMode, ModeSpec> = {
  invoice: {
    label: 'Invoice',
    title: 'INVOICE',
    numberPrefix: 'INV-001',
    secondDateLabel: 'Due Date',
    usesProposalTemplates: false,
    showLineDates: false,
    noun: 'invoice',
  },
  quote: {
    label: 'Quotation',
    title: 'QUOTATION',
    numberPrefix: 'QUO-001',
    secondDateLabel: 'Valid Until',
    usesProposalTemplates: false,
    showLineDates: false,
    noun: 'quotation',
  },
  proposal: {
    label: 'Proposal',
    title: 'PROPOSAL',
    numberPrefix: 'PROP-001',
    secondDateLabel: 'Valid Until',
    usesProposalTemplates: true,
    showLineDates: false,
    noun: 'proposal',
  },
  receipt: {
    label: 'Receipt',
    title: 'RECEIPT',
    numberPrefix: 'REC-001',
    // A receipt confirms money already received, so the second date is when it
    // arrived rather than when it is owed.
    secondDateLabel: 'Paid On',
    usesProposalTemplates: false,
    showLineDates: false,
    noun: 'receipt',
  },
  'purchase-order': {
    label: 'Purchase Order',
    title: 'PURCHASE ORDER',
    numberPrefix: 'PO-001',
    secondDateLabel: 'Deliver By',
    usesProposalTemplates: false,
    showLineDates: false,
    noun: 'purchase order',
  },
  timesheet: {
    label: 'Timesheet',
    title: 'TIMESHEET',
    numberPrefix: 'TS-001',
    secondDateLabel: 'Period Ending',
    usesProposalTemplates: false,
    defaultUnit: 'hours',
    showLineDates: true,
    noun: 'timesheet',
  },
};

export const MODE_KEYS = Object.keys(DOCUMENT_MODES) as DocumentMode[];

export const modeSpec = (mode: DocumentMode): ModeSpec => DOCUMENT_MODES[mode];

/** Every number prefix, so switching modes can recognise an untouched default. */
export const DEFAULT_NUMBERS = MODE_KEYS.map((m) => DOCUMENT_MODES[m].numberPrefix);
