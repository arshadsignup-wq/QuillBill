import type { ComponentType } from 'react';
import VatCalculator from './VatCalculator';
import LateFeeCalculator from './LateFeeCalculator';
import HourlyRateCalculator from './HourlyRateCalculator';
import PaymentDueDateCalculator from './PaymentDueDateCalculator';

export type CalculatorKey = 'vat' | 'late-fee' | 'hourly-rate' | 'due-date';

export const calculators: Record<CalculatorKey, ComponentType> = {
  vat: VatCalculator,
  'late-fee': LateFeeCalculator,
  'hourly-rate': HourlyRateCalculator,
  'due-date': PaymentDueDateCalculator,
};
