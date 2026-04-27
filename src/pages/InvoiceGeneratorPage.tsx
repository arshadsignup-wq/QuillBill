import LandingPage from './landing/LandingPage';
import { invoiceConfig } from './landing/landingData';

export default function InvoiceGeneratorPage() {
  return <LandingPage config={invoiceConfig} />;
}
