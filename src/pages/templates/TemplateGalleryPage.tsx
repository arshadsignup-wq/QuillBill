import { Link } from 'react-router-dom';
import { FileText, Check } from 'lucide-react';
import StaticPageLayout from '../../components/layout/StaticPageLayout';
import { useSEO } from '../../hooks/useSEO';
import LandingFAQ from '../landing/components/LandingFAQ';
import CrossLinks from '../landing/components/CrossLinks';
import { galleryJsonLd } from '../../seo/pageSchemas';
import type { TemplateGalleryConfig } from './templateData';

interface Props {
  config: TemplateGalleryConfig;
}

export default function TemplateGalleryPage({ config }: Props) {
  useSEO({ ...config.seo, jsonLd: galleryJsonLd(config) });

  return (
    <StaticPageLayout>
      <section className="bg-gradient-to-br from-brand/8 via-blue-50 to-indigo-50 border-b border-brand/10">
        <div className="max-w-4xl mx-auto px-4 py-14 sm:py-16 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">{config.h1}</h1>
          <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            {config.intro}
          </p>
          <Link
            to={config.ctaLink}
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-brand px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-dark transition-colors"
          >
            <FileText size={18} />
            {config.ctaText}
          </Link>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 py-14">
        <h2 className="text-xl font-bold text-gray-900 text-center mb-2">
          All 15 free {config.docLabel} templates
        </h2>
        <p className="text-sm text-gray-600 text-center max-w-2xl mx-auto mb-10">
          Every template below is free, watermark-free and exports to PDF. Switch between them at any
          time without retyping your {config.docLabel} details.
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {config.templates.map((t) => (
            <article key={t.key} className="rounded-lg border border-gray-200 bg-white p-5">
              <h3 className="text-sm font-semibold text-gray-900">
                {t.label} {config.docLabel} template
              </h3>
              <p className="mt-2 text-xs text-gray-600 leading-relaxed">{t.style}</p>
              <p className="mt-3 text-xs text-gray-500 leading-relaxed">
                <span className="font-medium text-gray-700">Best for: </span>
                {t.bestFor}
              </p>
              <Link
                to={`${config.ctaLink}&template=${t.key}`}
                className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-brand hover:text-brand-dark transition-colors"
              >
                <Check size={13} />
                Use this template
              </Link>
            </article>
          ))}
        </div>
      </section>

      {config.sections.map((s) => (
        <section key={s.heading} className="max-w-3xl mx-auto px-4 pb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-4">{s.heading}</h2>
          {s.body.map((p, i) => (
            <p key={i} className="text-sm text-gray-600 leading-relaxed mb-3">
              {p}
            </p>
          ))}
        </section>
      ))}

      <LandingFAQ faqs={config.faqs} />
      <CrossLinks links={config.crossLinks} />

      <section className="border-t border-gray-200 bg-white">
        <div className="max-w-3xl mx-auto px-4 py-14 text-center">
          <h2 className="text-xl font-bold text-gray-900">Start with a free {config.docLabel} template</h2>
          <p className="mt-3 text-sm text-gray-600">
            No sign-up, no watermarks, no login. Your {config.docLabel} data stays in your browser.
          </p>
          <Link
            to={config.ctaLink}
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-brand px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-dark transition-colors"
          >
            <FileText size={18} />
            {config.ctaText}
          </Link>
        </div>
      </section>
    </StaticPageLayout>
  );
}
