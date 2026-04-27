import StaticPageLayout from '../../components/layout/StaticPageLayout';
import { useSEO } from '../../hooks/useSEO';
import HeroSection from './components/HeroSection';
import FeatureGrid from './components/FeatureGrid';
import HowItWorks from './components/HowItWorks';
import LandingFAQ from './components/LandingFAQ';
import CrossLinks from './components/CrossLinks';
import LandingCTA from './components/LandingCTA';
import type { LandingPageConfig } from './landingData';

interface LandingPageProps {
  config: LandingPageConfig;
}

export default function LandingPage({ config }: LandingPageProps) {
  useSEO(config.seo);

  return (
    <StaticPageLayout>
      <HeroSection {...config.hero} />
      <FeatureGrid features={config.features} />
      <HowItWorks steps={config.steps} />
      <LandingFAQ faqs={config.faqs} />
      <CrossLinks links={config.crossLinks} />
      <LandingCTA ctaText={config.hero.ctaText} ctaLink={config.hero.ctaLink} description={config.ctaDescription} />
    </StaticPageLayout>
  );
}
