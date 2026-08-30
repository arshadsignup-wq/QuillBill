import type { InvoiceData, CalculatedTotals, TaxBreakdownRow } from '../types/invoice';

const round = (n: number) => Math.round(n * 100) / 100;

export function lineTotal(quantity: number, rate: number): number {
  return round(quantity * rate);
}

export function calculateTotals(data: InvoiceData): CalculatedTotals {
  const lineItems = data.items.map((item) => ({
    id: item.id,
    total: lineTotal(item.quantity, item.rate),
  }));

  const subtotal = lineItems.reduce((sum, li) => sum + li.total, 0);

  const discountAmount =
    data.discountType === 'percentage'
      ? round(subtotal * (data.discountValue / 100))
      : round(data.discountValue);

  const afterDiscount = subtotal - discountAmount;

  // A document-level discount reduces the base every rate is charged on, so it
  // is spread across the lines in proportion to their value rather than taken
  // off one of them. Without that, a mixed-rate invoice with a discount taxes
  // the wrong base and the total is quietly wrong.
  const discountFactor = subtotal > 0 ? afterDiscount / subtotal : 0;

  let taxBreakdown: TaxBreakdownRow[] = [];

  if (data.taxMode === 'per-line') {
    const byRate = new Map<number, number>();
    data.items.forEach((item, i) => {
      const rate = item.taxRate ?? 0;
      const base = lineItems[i].total * discountFactor;
      byRate.set(rate, (byRate.get(rate) ?? 0) + base);
    });
    taxBreakdown = [...byRate.entries()]
      .filter(([rate]) => rate > 0)
      .sort((a, b) => a[0] - b[0])
      .map(([rate, base]) => ({
        rate,
        base: round(base),
        amount: round(base * (rate / 100)),
      }));
  } else if (data.taxRate > 0) {
    taxBreakdown = [
      {
        rate: data.taxRate,
        base: round(afterDiscount),
        amount: round(afterDiscount * (data.taxRate / 100)),
      },
    ];
  }

  const taxAmount = round(taxBreakdown.reduce((sum, row) => sum + row.amount, 0));
  const total = round(afterDiscount + taxAmount + data.shippingCost);

  return { lineItems, subtotal, discountAmount, taxAmount, taxBreakdown, total };
}

/**
 * What goes in the brackets after "Tax" in a template's totals block.
 * One rate reads "8.5%"; a mixed-rate document lists them rather than
 * implying a single rate that was never charged.
 */
export function taxRateLabel(data: InvoiceData, totals: CalculatedTotals): string {
  if (data.taxMode !== 'per-line') return `${data.taxRate}%`;
  if (totals.taxBreakdown.length === 0) return '0%';
  return totals.taxBreakdown.map((r) => `${r.rate}%`).join(' + ');
}

/**
 * "12 Mar — Client kickoff call" on a timesheet, the plain description
 * everywhere else.
 *
 * Prefixing the description rather than adding a date column means the date
 * reaches all 30 templates without any of them growing a column they would
 * only use for one mode.
 */
export function formatDescription(item: { description: string; date?: string }): string {
  const date = item.date?.trim();
  if (!date) return item.description;
  const parsed = new Date(`${date}T00:00:00Z`);
  if (Number.isNaN(parsed.getTime())) return item.description;
  const label = parsed.toLocaleDateString(undefined, {
    day: 'numeric',
    month: 'short',
    timeZone: 'UTC',
  });
  return item.description ? `${label} — ${item.description}` : label;
}

/** "2 hours", "3", "1 day" — the unit only appears when one was given. */
export function formatQuantity(item: { quantity: number; unit?: string }): string {
  const unit = item.unit?.trim();
  return unit ? `${item.quantity} ${unit}` : String(item.quantity);
}
