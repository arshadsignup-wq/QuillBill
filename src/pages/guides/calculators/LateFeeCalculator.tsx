import { useState } from 'react';
import { CalcShell, Field, Figure, inputClass, money, CURRENCIES } from './CalcShell';

const DAY = 86_400_000;

/**
 * Interest owed on an invoice that is past its due date.
 *
 * Interest is charged for the days actually elapsed, not for whole months:
 * an invoice 40 days late at 8% a year owes 8% × 40/365, not two months' worth.
 */
export default function LateFeeCalculator() {
  const [amount, setAmount] = useState('2500');
  const [dueDate, setDueDate] = useState('');
  const [paidDate, setPaidDate] = useState('');
  const [annualRate, setAnnualRate] = useState('8');
  const [flatFee, setFlatFee] = useState('0');
  const [currency, setCurrency] = useState('USD');

  const principal = parseFloat(amount) || 0;
  const rate = parseFloat(annualRate) || 0;
  const fee = parseFloat(flatFee) || 0;

  // Empty dates mean "not enough information yet" rather than "today", so the
  // figure never silently changes under the reader on a date input they have
  // not filled in.
  const due = dueDate ? Date.parse(`${dueDate}T00:00:00Z`) : NaN;
  const end = paidDate ? Date.parse(`${paidDate}T00:00:00Z`) : NaN;
  const ready = Number.isFinite(due) && Number.isFinite(end);

  const daysLate = ready ? Math.max(0, Math.round((end - due) / DAY)) : 0;
  const interest = ready ? principal * (rate / 100) * (daysLate / 365) : 0;
  const total = principal + interest + (ready && daysLate > 0 ? fee : 0);

  return (
    <CalcShell
      title="Late payment interest calculator"
      result={
        ready ? (
          <div className="space-y-2">
            <Figure label="Days overdue" value={String(daysLate)} />
            <Figure label={`Interest at ${rate}% a year`} value={money(interest, currency)} />
            {daysLate > 0 && fee > 0 && <Figure label="Fixed late fee" value={money(fee, currency)} />}
            <Figure label="Total now owed" value={money(total, currency)} tone="headline" />
          </div>
        ) : (
          <p className="text-xs text-gray-500">
            Enter the due date and the date of payment (or today's date, if it is still unpaid) to see
            what the invoice has accrued.
          </p>
        )
      }
    >
      <Field label="Invoice amount">
        <input type="number" min="0" step="0.01" value={amount} onChange={(e) => setAmount(e.target.value)} className={inputClass} />
      </Field>
      <Field label="Currency">
        <select value={currency} onChange={(e) => setCurrency(e.target.value)} className={inputClass}>
          {CURRENCIES.map((c) => <option key={c} value={c}>{c}</option>)}
        </select>
      </Field>
      <Field label="Payment was due on">
        <input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} className={inputClass} />
      </Field>
      <Field label="Paid on / today" hint="Use today's date if the invoice is still outstanding.">
        <input type="date" value={paidDate} onChange={(e) => setPaidDate(e.target.value)} className={inputClass} />
      </Field>
      <Field label="Annual interest rate (%)" hint="Whatever your contract or invoice states.">
        <input type="number" min="0" step="0.01" value={annualRate} onChange={(e) => setAnnualRate(e.target.value)} className={inputClass} />
      </Field>
      <Field label="Fixed late fee" hint="A one-off charge, if your terms include one.">
        <input type="number" min="0" step="0.01" value={flatFee} onChange={(e) => setFlatFee(e.target.value)} className={inputClass} />
      </Field>
    </CalcShell>
  );
}
