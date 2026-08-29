import { useState } from 'react';
import { CalcShell, Field, Figure, inputClass, money, CURRENCIES } from './CalcShell';

/**
 * Add VAT/GST to a net figure, or strip it back out of a gross one.
 *
 * Removing tax is where people get it wrong: the tax inside a gross amount is
 * gross × rate / (100 + rate), not gross × rate / 100. On a 20% rate those
 * differ by a sixth, which is the difference between a correct return and an
 * incorrect one.
 */
export default function VatCalculator() {
  const [amount, setAmount] = useState('1000');
  const [rate, setRate] = useState('20');
  const [direction, setDirection] = useState<'add' | 'remove'>('add');
  const [currency, setCurrency] = useState('GBP');

  const a = parseFloat(amount) || 0;
  const r = parseFloat(rate) || 0;

  const net = direction === 'add' ? a : a / (1 + r / 100);
  const tax = direction === 'add' ? a * (r / 100) : a - net;
  const gross = net + tax;

  return (
    <CalcShell
      title="VAT / GST calculator"
      result={
        <div className="space-y-2">
          <Figure label="Net (before tax)" value={money(net, currency)} />
          <Figure label={`Tax at ${r}%`} value={money(tax, currency)} />
          <Figure label="Gross (total payable)" value={money(gross, currency)} tone="headline" />
        </div>
      }
    >
      <Field label="Amount">
        <input
          type="number"
          min="0"
          step="0.01"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className={inputClass}
        />
      </Field>
      <Field label="Tax rate (%)" hint="UK VAT 20%, UAE VAT 5%, India GST 5/12/18/28%.">
        <input
          type="number"
          min="0"
          step="0.01"
          value={rate}
          onChange={(e) => setRate(e.target.value)}
          className={inputClass}
        />
      </Field>
      <Field label="That amount is">
        <select
          value={direction}
          onChange={(e) => setDirection(e.target.value as 'add' | 'remove')}
          className={inputClass}
        >
          <option value="add">Net — add tax to it</option>
          <option value="remove">Gross — take tax out of it</option>
        </select>
      </Field>
      <Field label="Currency">
        <select value={currency} onChange={(e) => setCurrency(e.target.value)} className={inputClass}>
          {CURRENCIES.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </Field>
    </CalcShell>
  );
}
