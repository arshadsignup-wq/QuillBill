import type { ComponentType } from 'react';
import AnnotatedDocument from './AnnotatedDocument';

export type ExampleKey = 'invoice' | 'quotation';

const INVOICE_CALLOUTS = [
  {
    label: 'Your details, top left',
    body: 'The legal entity being paid, with a tax or registration number where your jurisdiction requires one. This is the name that must match your bank account.',
  },
  {
    label: 'The client, billed as an entity',
    body: 'Bill the company, not your day-to-day contact. If you ever need to chase the debt, the entity named here is the one you can pursue.',
  },
  {
    label: 'A unique, sequential number',
    body: 'INV-2041 rather than a date or a project name. Unique so it can be referenced, sequential so a gap is visible.',
  },
  {
    label: 'Two dates, not one',
    body: 'The issue date starts the clock; the due date is what the client schedules against. Printing a real date beats printing "Net 30".',
  },
  {
    label: 'Descriptions that survive review',
    body: '"Packaging design — three SKUs" tells accounts payable what they are approving. "Design services" invites a question and a delay.',
  },
  {
    label: 'Quantity, unit and rate separated',
    body: 'Showing 2 days at 1,150 rather than a flat 2,300 lets the client check the arithmetic against what was agreed.',
  },
  {
    label: 'Tax on its own line',
    body: 'Rate and amount shown separately from the net. A registered buyer needs this to reclaim; a single combined figure is not enough.',
  },
  {
    label: 'Terms and how to pay',
    body: 'Payment terms and bank details on the invoice itself, not only in a contract nobody will open. An invoice without a way to pay it is a notification.',
  },
];

const QUOTATION_CALLOUTS = [
  {
    label: 'Labelled a quotation, not an invoice',
    body: 'This is an offer, not a request for payment. Sending an invoice for work that has not started confuses the client about whether money is owed.',
  },
  {
    label: 'A validity date',
    body: 'The field most quotations forget. Without it your price stays open indefinitely, and can be accepted months later at a rate that no longer works.',
  },
  {
    label: 'Its own number series',
    body: 'QUO-089 rather than reusing invoice numbering. When the quote is accepted, the invoice references it and both records reconcile.',
  },
  {
    label: 'Scope written as line items',
    body: 'Each deliverable priced separately makes it possible to remove one and requote, instead of renegotiating a single opaque total.',
  },
  {
    label: 'What is excluded',
    body: 'The notes are where you say what the price does not cover. Scope disputes almost always start with something the client assumed was included.',
  },
  {
    label: 'The terms that will apply',
    body: 'State the payment terms now, at the point they are still negotiable, rather than introducing them for the first time on the invoice.',
  },
];

export const examples: Record<ExampleKey, ComponentType> = {
  invoice: () => <AnnotatedDocument mode="invoice" callouts={INVOICE_CALLOUTS} />,
  quotation: () => <AnnotatedDocument mode="quote" callouts={QUOTATION_CALLOUTS} />,
};
