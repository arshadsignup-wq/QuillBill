import { useReducer } from 'react';
import { nanoid } from 'nanoid';
import type { InvoiceData, DocumentMode, ContactInfo, LineItem, TemplateName, PaperSize } from '../types/invoice';
import { createDefaultInvoice, createDefaultLineItem } from '../constants/defaults';
import { modeSpec, DEFAULT_NUMBERS } from '../constants/documentModes';

type Action =
  | { type: 'SET_MODE'; payload: DocumentMode }
  | { type: 'SET_META'; payload: Partial<Pick<InvoiceData, 'documentTitle' | 'documentNumber' | 'issueDate' | 'dueDate' | 'currency'>> }
  | { type: 'SET_FROM'; payload: Partial<ContactInfo> }
  | { type: 'SET_TO'; payload: Partial<ContactInfo> }
  | { type: 'ADD_ITEM' }
  | { type: 'REMOVE_ITEM'; payload: string }
  | { type: 'UPDATE_ITEM'; payload: { id: string; field: keyof LineItem; value: string | number } }
  | { type: 'SET_TOTALS'; payload: Partial<Pick<InvoiceData, 'discountType' | 'discountValue' | 'taxRate' | 'taxMode' | 'shippingCost'>> }
  | { type: 'SET_NOTES'; payload: string }
  | { type: 'SET_PAYMENT_TERMS'; payload: string }
  | { type: 'SET_BANK_DETAILS'; payload: string }
  | { type: 'SET_LOGO'; payload: string }
  | { type: 'SET_TEMPLATE'; payload: TemplateName }
  | { type: 'SET_ACCENT_COLOR'; payload: string }
  | { type: 'SET_PAPER_SIZE'; payload: PaperSize }
  | { type: 'SET_PROJECT_SCOPE'; payload: string }
  | { type: 'SET_DELIVERABLES'; payload: string }
  | { type: 'SET_TIMELINE'; payload: string }
  | { type: 'SET_EXECUTIVE_SUMMARY'; payload: string }
  | { type: 'SET_PROPOSED_SOLUTION'; payload: string }
  | { type: 'SET_CLIENT_SIGNATURE_NAME'; payload: string }
  | { type: 'SET_AUTHORIZED_SIGNATURE_NAME'; payload: string }
  | { type: 'SET_CLIENT_SIGNATURE_DATE'; payload: string }
  | { type: 'SET_AUTHORIZED_SIGNATURE_DATE'; payload: string }
  | { type: 'SET_CLIENT_SIGNATURE_IMAGE'; payload: string }
  | { type: 'SET_AUTHORIZED_SIGNATURE_IMAGE'; payload: string }
  | { type: 'LOAD_DATA'; payload: InvoiceData }
  | { type: 'APPLY_PROFILE'; payload: { from: ContactInfo; logo: string; bankDetails: string; paymentTerms: string } }
  | { type: 'DUPLICATE_AS_INVOICE' }
  | { type: 'RESET' };

function reducer(state: InvoiceData, action: Action): InvoiceData {
  switch (action.type) {
    case 'SET_MODE': {
      const newMode = action.payload;
      const spec = modeSpec(newMode);
      // Only renumber a document number the user has not touched. Any of the
      // six defaults counts as untouched; anything else is theirs to keep.
      const documentNumber = DEFAULT_NUMBERS.includes(state.documentNumber)
        ? spec.numberPrefix
        : state.documentNumber;
      // A timesheet is billed in hours, so say so rather than making every
      // user type it on every row.
      const items = spec.defaultUnit
        ? state.items.map((i) => (i.unit ? i : { ...i, unit: spec.defaultUnit }))
        : state.items;
      return { ...state, mode: newMode, documentNumber, items };
    }

    case 'SET_META':
      return { ...state, ...action.payload };

    case 'SET_FROM':
      return { ...state, from: { ...state.from, ...action.payload } };

    case 'SET_TO':
      return { ...state, to: { ...state.to, ...action.payload } };

    case 'ADD_ITEM':
      return { ...state, items: [...state.items, createDefaultLineItem()] };

    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.length > 1
          ? state.items.filter((i) => i.id !== action.payload)
          : state.items,
      };

    case 'UPDATE_ITEM':
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload.id
            ? { ...item, [action.payload.field]: action.payload.value }
            : item,
        ),
      };

    case 'SET_TOTALS':
      return { ...state, ...action.payload };

    case 'SET_NOTES':
      return { ...state, notes: action.payload };

    case 'SET_PAYMENT_TERMS':
      return { ...state, paymentTerms: action.payload };

    case 'SET_BANK_DETAILS':
      return { ...state, bankDetails: action.payload };

    case 'SET_LOGO':
      return { ...state, logo: action.payload };

    case 'SET_TEMPLATE':
      return { ...state, template: action.payload };

    case 'SET_ACCENT_COLOR':
      return { ...state, accentColor: action.payload };

    case 'SET_PAPER_SIZE':
      return { ...state, paperSize: action.payload };

    case 'SET_PROJECT_SCOPE':
      return { ...state, projectScope: action.payload };

    case 'SET_DELIVERABLES':
      return { ...state, deliverables: action.payload };

    case 'SET_TIMELINE':
      return { ...state, timeline: action.payload };

    case 'SET_EXECUTIVE_SUMMARY':
      return { ...state, executiveSummary: action.payload };

    case 'SET_PROPOSED_SOLUTION':
      return { ...state, proposedSolution: action.payload };

    case 'SET_CLIENT_SIGNATURE_NAME':
      return { ...state, clientSignatureName: action.payload };

    case 'SET_AUTHORIZED_SIGNATURE_NAME':
      return { ...state, authorizedSignatureName: action.payload };

    case 'SET_CLIENT_SIGNATURE_DATE':
      return { ...state, clientSignatureDate: action.payload };

    case 'SET_AUTHORIZED_SIGNATURE_DATE':
      return { ...state, authorizedSignatureDate: action.payload };

    case 'SET_CLIENT_SIGNATURE_IMAGE':
      return { ...state, clientSignatureImage: action.payload };

    case 'SET_AUTHORIZED_SIGNATURE_IMAGE':
      return { ...state, authorizedSignatureImage: action.payload };

    case 'LOAD_DATA':
      return { ...action.payload };

    case 'APPLY_PROFILE':
      return {
        ...state,
        from: { ...action.payload.from },
        logo: action.payload.logo,
        bankDetails: action.payload.bankDetails,
        paymentTerms: action.payload.paymentTerms,
      };

    case 'DUPLICATE_AS_INVOICE': {
      const today = new Date();
      const due = new Date(today);
      due.setDate(due.getDate() + 30);
      return {
        ...state,
        mode: 'invoice',
        documentNumber: 'INV-001',
        issueDate: today.toISOString().split('T')[0],
        dueDate: due.toISOString().split('T')[0],
        items: state.items.map((item) => ({ ...item, id: nanoid() })),
      };
    }

    case 'RESET':
      return createDefaultInvoice();

    default:
      return state;
  }
}

export type InvoiceAction = Action;

export function useInvoice(initialData?: InvoiceData) {
  return useReducer(reducer, initialData ?? createDefaultInvoice());
}
