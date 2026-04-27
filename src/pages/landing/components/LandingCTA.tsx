import { Link } from 'react-router-dom';
import { FileText } from 'lucide-react';

interface LandingCTAProps {
  ctaText: string;
  ctaLink: string;
  description: string;
}

export default function LandingCTA({ ctaText, ctaLink, description }: LandingCTAProps) {
  return (
    <section className="max-w-4xl mx-auto px-4 py-14">
      <div className="rounded-lg bg-brand/5 border border-brand/10 p-8 text-center">
        <p className="text-sm text-gray-700 mb-4">
          {description}
        </p>
        <Link
          to={ctaLink}
          className="inline-flex items-center gap-2 rounded-lg bg-brand px-6 py-3 text-sm font-semibold text-white hover:bg-brand-dark transition-colors"
        >
          <FileText size={16} />
          {ctaText}
        </Link>
      </div>
    </section>
  );
}
