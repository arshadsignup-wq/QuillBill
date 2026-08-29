import { useState } from 'react';
import { CalcShell, Field, Figure, inputClass } from './CalcShell';

const DAY = 86_400_000;

const TERMS = [
  { value: '0', label: 'Due on receipt' },
  { value: '7', label: 'Net 7' },
  { value: '14', label: 'Net 14' },
  { value: '15', label: 'Net 15' },
  { value: '30', label: 'Net 30' },
  { value: '45', label: 'Net 45' },
  { value: '60', label: 'Net 60' },
  { value: '90', label: 'Net 90' },
  { value: 'eom', label: 'End of month' },
  { value: 'eom30', label: 'End of month + 30 days' },
];

function fmt(ms: number) {
  return new Date(ms).toLocaleDateString(undefined, {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  });
}

/**
 * Turns payment terms into the date they actually resolve to.
 *
 * "End of month" terms are the ones that catch people out: an invoice issued
 * on the 2nd under EOM+30 is not due in 30 days, it is due in nearly 60.
 */
export default function PaymentDueDateCalculator() {
  const [issueDate, setIssueDate] = useState('');
  const [term, setTerm] = useState('30');

  const issued = issueDate ? Date.parse(`${issueDate}T00:00:00Z`) : NaN;
  const ready = Number.isFinite(issued);

  let due = NaN;
  if (ready) {
    if (term === 'eom' || term === 'eom30') {
      const d = new Date(issued);
      // Day 0 of the next month is the last day of this one.
      const endOfMonth = Date.UTC(d.getUTCFullYear(), d.getUTCMonth() + 1, 0);
      due = term === 'eom' ? endOfMonth : endOfMonth + 30 * DAY;
    } else {
      due = issued + parseInt(term, 10) * DAY;
    }
  }

  const today = Date.now();
  const daysAway = ready ? Math.ceil((due - today) / DAY) : 0;

  return (
    <CalcShell
      title="Payment due date calculator"
      result={
        ready ? (
          <div className="space-y-2">
            <Figure label="Payment falls due" value={fmt(due)} tone="headline" />
            <Figure
              label="That is"
              value={
                daysAway > 0
                  ? `${daysAway} day${daysAway === 1 ? '' : 's'} from today`
                  : daysAway === 0
                    ? 'today'
                    : `${Math.abs(daysAway)} day${Math.abs(daysAway) === 1 ? '' : 's'} overdue`
              }
            />
            <Figure
              label="Total credit period"
              value={`${Math.round((due - issued) / DAY)} days from the invoice date`}
            />
          </div>
        ) : (
          <p className="text-xs text-gray-500">Pick the invoice date to see when payment is due.</p>
        )
      }
    >
      <Field label="Invoice date">
        <input type="date" value={issueDate} onChange={(e) => setIssueDate(e.target.value)} className={inputClass} />
      </Field>
      <Field label="Payment terms" hint="Net terms run from the invoice date, not from delivery.">
        <select value={term} onChange={(e) => setTerm(e.target.value)} className={inputClass}>
          {TERMS.map((t) => (
            <option key={t.value} value={t.value}>
              {t.label}
            </option>
          ))}
        </select>
      </Field>
    </CalcShell>
  );
}
