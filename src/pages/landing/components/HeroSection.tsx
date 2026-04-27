import { Link } from 'react-router-dom';
import { FileText, Shield, Zap, Download } from 'lucide-react';

interface HeroSectionProps {
  h1: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
}

const badges = [
  { icon: Shield, label: 'No Sign-Up' },
  { icon: Zap, label: 'No Watermark' },
  { icon: Shield, label: '100% Free' },
  { icon: Download, label: 'PDF Export' },
];

export default function HeroSection({ h1, subtitle, ctaText, ctaLink }: HeroSectionProps) {
  return (
    <section className="bg-gradient-to-br from-brand/8 via-blue-50 to-indigo-50 border-b border-brand/10">
      <div className="max-w-4xl mx-auto px-4 py-16 sm:py-20 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
          {h1}
        </h1>
        <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
        <Link
          to={ctaLink}
          className="mt-8 inline-flex items-center gap-2 rounded-lg bg-brand px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-dark transition-colors"
        >
          <FileText size={18} />
          {ctaText}
        </Link>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {badges.map((b) => (
            <span
              key={b.label}
              className="inline-flex items-center gap-1.5 rounded-full bg-white/80 border border-brand/15 px-3 py-1 text-xs font-medium text-gray-700"
            >
              <b.icon size={13} className="text-brand" />
              {b.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
