import type { ReactNode } from 'react';

/**
 * Shared chrome for the calculators.
 *
 * They render inside a guide, directly under the intro, so the page still
 * reads as an article — the tool answers the query immediately and the prose
 * underneath explains the arithmetic rather than burying it.
 */
export function CalcShell({ title, children, result }: { title: string; children: ReactNode; result: ReactNode }) {
  return (
    <section className="max-w-3xl mx-auto px-4 pt-10">
      <div className="rounded-xl border border-brand/25 bg-white shadow-sm overflow-hidden">
        <h2 className="border-b border-gray-200 bg-brand/5 px-5 py-3 text-sm font-bold text-gray-900">
          {title}
        </h2>
        <div className="grid gap-5 p-5 sm:grid-cols-2">{children}</div>
        <div className="border-t border-gray-200 bg-gray-50 px-5 py-4">{result}</div>
      </div>
    </section>
  );
}

export function Field({
  label,
  hint,
  children,
}: {
  label: string;
  hint?: string;
  children: ReactNode;
}) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-xs font-medium text-gray-700">{label}</span>
      {children}
      {hint && <span className="text-[11px] text-gray-500">{hint}</span>}
    </label>
  );
}

export const inputClass =
  'w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand';

export function Figure({ label, value, tone = 'normal' }: { label: string; value: string; tone?: 'normal' | 'headline' }) {
  return (
    <div className="flex items-baseline justify-between gap-4">
      <span className={tone === 'headline' ? 'text-sm font-semibold text-gray-900' : 'text-xs text-gray-600'}>
        {label}
      </span>
      <span
        className={
          tone === 'headline'
            ? 'text-xl font-bold text-brand tabular-nums'
            : 'text-sm text-gray-900 tabular-nums'
        }
      >
        {value}
      </span>
    </div>
  );
}

export const money = (n: number, currency: string) => {
  if (!Number.isFinite(n)) return '—';
  try {
    return new Intl.NumberFormat(undefined, { style: 'currency', currency }).format(n);
  } catch {
    return n.toFixed(2);
  }
};

export const CURRENCIES = ['USD', 'EUR', 'GBP', 'INR', 'AED', 'AUD', 'CAD', 'SGD', 'NGN', 'PHP'];
