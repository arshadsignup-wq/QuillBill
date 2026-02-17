import type { InvoiceData, CalculatedTotals } from '../types/invoice';

export function lineTotal(quantity: number, rate: number): number {
  return Math.round(quantity * rate * 100) / 100;
}

export function calculateTotals(data: InvoiceData): CalculatedTotals {
  const lineItems = data.items.map((item) => ({
    id: item.id,
    total: lineTotal(item.quantity, item.rate),
  }));

  const subtotal = lineItems.reduce((sum, li) => sum + li.total, 0);

  const discountAmount =
    data.discountType === 'percentage'
      ? Math.round(subtotal * (data.discountValue / 100) * 100) / 100
      : Math.round(data.discountValue * 100) / 100;

  const afterDiscount = subtotal - discountAmount;
  const taxAmount = Math.round(afterDiscount * (data.taxRate / 100) * 100) / 100;
  const total =
    Math.round((afterDiscount + taxAmount + data.shippingCost) * 100) / 100;

  return { lineItems, subtotal, discountAmount, taxAmount, total };
}
