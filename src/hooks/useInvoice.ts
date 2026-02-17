import { useReducer } from 'react';
import { nanoid } from 'nanoid';
import type { InvoiceData, DocumentMode, ContactInfo, LineItem, TemplateName } from '../types/invoice';
import { createDefaultInvoice, createDefaultLineItem } from '../constants/defaults';

type Action =
  | { type: 'SET_MODE'; payload: DocumentMode }
  | { type: 'SET_META'; payload: Partial<Pick<InvoiceData, 'documentTitle' | 'documentNumber' | 'issueDate' | 'dueDate' | 'currency'>> }
  | { type: 'SET_FROM'; payload: Partial<ContactInfo> }
  | { type: 'SET_TO'; payload: Partial<ContactInfo> }
  | { type: 'ADD_ITEM' }
  | { type: 'REMOVE_ITEM'; payload: string }
  | { type: 'UPDATE_ITEM'; payload: { id: string; field: keyof LineItem; value: string | number } }
  | { type: 'SET_TOTALS'; payload: Partial<Pick<InvoiceData, 'discountType' | 'discountValue' | 'taxRate' | 'shippingCost'>> }
  | { type: 'SET_NOTES'; payload: string }
  | { type: 'SET_PAYMENT_TERMS'; payload: string }
  | { type: 'SET_LOGO'; payload: string }
  | { type: 'SET_TEMPLATE'; payload: TemplateName }
  | { type: 'SET_ACCENT_COLOR'; payload: string }
  | { type: 'LOAD_DATA'; payload: InvoiceData }
  | { type: 'DUPLICATE_AS_INVOICE' }
  | { type: 'RESET' };

function reducer(state: InvoiceData, action: Action): InvoiceData {
  switch (action.type) {
    case 'SET_MODE':
      return { ...state, mode: action.payload };

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

    case 'SET_LOGO':
      return { ...state, logo: action.payload };

    case 'SET_TEMPLATE':
      return { ...state, template: action.payload };

    case 'SET_ACCENT_COLOR':
      return { ...state, accentColor: action.payload };

    case 'LOAD_DATA':
      return { ...action.payload };

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
