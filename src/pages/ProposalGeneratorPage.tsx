import LandingPage from './landing/LandingPage';
import { proposalConfig } from './landing/landingData';

export default function ProposalGeneratorPage() {
  return <LandingPage config={proposalConfig} />;
}
