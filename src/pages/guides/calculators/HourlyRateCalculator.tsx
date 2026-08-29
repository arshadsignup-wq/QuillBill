import { useState } from 'react';
import { CalcShell, Field, Figure, inputClass, money, CURRENCIES } from './CalcShell';

/**
 * What you have to charge per hour to actually take home a target income.
 *
 * The number people guess is almost always too low, because they divide their
 * target salary by 2,080 hours. That ignores unbillable time, business costs
 * and tax — the three things that separate a rate from earnings.
 */
export default function HourlyRateCalculator() {
  const [target, setTarget] = useState('70000');
  const [expenses, setExpenses] = useState('8000');
  const [taxRate, setTaxRate] = useState('28');
  const [billableHours, setBillableHours] = useState('25');
  const [weeksOff, setWeeksOff] = useState('6');
  const [currency, setCurrency] = useState('USD');

  const takeHome = parseFloat(target) || 0;
  const costs = parseFloat(expenses) || 0;
  const tax = parseFloat(taxRate) || 0;
  const hoursPerWeek = parseFloat(billableHours) || 0;
  const weeks = Math.max(0, 52 - (parseFloat(weeksOff) || 0));

  // Work backwards: take-home is what is left after tax, so gross up first,
  // then add the costs of running the business on top.
  const grossProfit = tax < 100 ? takeHome / (1 - tax / 100) : 0;
  const revenueNeeded = grossProfit + costs;
  const billableHoursPerYear = hoursPerWeek * weeks;
  const hourly = billableHoursPerYear > 0 ? revenueNeeded / billableHoursPerYear : 0;

  return (
    <CalcShell
      title="Freelance hourly rate calculator"
      result={
        <div className="space-y-2">
          <Figure label="Revenue you need to bill" value={money(revenueNeeded, currency)} />
          <Figure label="Billable hours a year" value={billableHoursPerYear.toLocaleString()} />
          <Figure label="Charge at least" value={`${money(hourly, currency)} / hour`} tone="headline" />
          <Figure label="Equivalent day rate (8h)" value={money(hourly * 8, currency)} />
        </div>
      }
    >
      <Field label="Take-home income you want" hint="After tax, in your pocket.">
        <input type="number" min="0" step="100" value={target} onChange={(e) => setTarget(e.target.value)} className={inputClass} />
      </Field>
      <Field label="Currency">
        <select value={currency} onChange={(e) => setCurrency(e.target.value)} className={inputClass}>
          {CURRENCIES.map((c) => <option key={c} value={c}>{c}</option>)}
        </select>
      </Field>
      <Field label="Business costs a year" hint="Software, hardware, insurance, accountant, workspace.">
        <input type="number" min="0" step="100" value={expenses} onChange={(e) => setExpenses(e.target.value)} className={inputClass} />
      </Field>
      <Field label="Effective tax rate (%)" hint="Income tax plus self-employment or social contributions.">
        <input type="number" min="0" max="99" step="0.5" value={taxRate} onChange={(e) => setTaxRate(e.target.value)} className={inputClass} />
      </Field>
      <Field label="Billable hours a week" hint="Not hours worked. Selling, admin and invoicing are not billable.">
        <input type="number" min="0" max="80" step="1" value={billableHours} onChange={(e) => setBillableHours(e.target.value)} className={inputClass} />
      </Field>
      <Field label="Weeks off a year" hint="Holiday, illness, quiet periods.">
        <input type="number" min="0" max="40" step="1" value={weeksOff} onChange={(e) => setWeeksOff(e.target.value)} className={inputClass} />
      </Field>
    </CalcShell>
  );
}
