import LandingPage from './landing/LandingPage';
import { quotationConfig } from './landing/landingData';

export default function QuotationGeneratorPage() {
  return <LandingPage config={quotationConfig} />;
}
