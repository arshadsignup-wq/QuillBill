import { Link } from 'react-router-dom';
import { FileText, Check, ArrowLeft } from 'lucide-react';
import StaticPageLayout from '../../components/layout/StaticPageLayout';
import { useSEO } from '../../hooks/useSEO';
import LandingFAQ from '../landing/components/LandingFAQ';
import CrossLinks from '../landing/components/CrossLinks';
import { guideJsonLd } from '../../seo/pageSchemas';
import type { GuideConfig, GuideSection } from './types';

interface Props {
  config: GuideConfig;
}

function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  });
}

function SectionTable({ table }: { table: NonNullable<GuideSection['table']> }) {
  return (
    // Wide tables scroll inside their own container so the page body never
    // scrolls sideways on mobile.
    <div className="mt-4 -mx-4 sm:mx-0 overflow-x-auto">
      <table className="min-w-full text-sm border border-gray-200 rounded-lg bg-white">
        <thead>
          <tr className="bg-gray-50">
            {table.head.map((h, i) => (
              <th
                key={i}
                scope="col"
                className="px-4 py-2.5 text-left text-xs font-semibold text-gray-900 border-b border-gray-200"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.rows.map((row, r) => (
            <tr key={r} className="border-b border-gray-100 last:border-0">
              {row.map((cell, c) => (
                <td
                  key={c}
                  className={`px-4 py-2.5 align-top text-gray-600 ${c === 0 ? 'font-medium text-gray-900 whitespace-nowrap' : ''}`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function GuidePage({ config }: Props) {
  useSEO({ ...config.seo, jsonLd: guideJsonLd(config) });

  return (
    <StaticPageLayout>
      <article>
        <header className="bg-gradient-to-br from-brand/8 via-blue-50 to-indigo-50 border-b border-brand/10">
          <div className="max-w-3xl mx-auto px-4 py-12 sm:py-14">
            <Link
              to="/guides"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-brand hover:underline"
            >
              <ArrowLeft size={13} />
              All guides
            </Link>
            <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-brand">
              {config.cluster}
            </p>
            <h1 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
              {config.h1}
            </h1>
            <p className="mt-4 text-base text-gray-600 leading-relaxed">{config.intro}</p>
            <p className="mt-5 text-xs text-gray-500">
              Published <time dateTime={config.published}>{formatDate(config.published)}</time>
              {config.updated !== config.published && (
                <>
                  {' · Updated '}
                  <time dateTime={config.updated}>{formatDate(config.updated)}</time>
                </>
              )}
            </p>
          </div>
        </header>

        {config.keyTakeaways && (
          <section className="max-w-3xl mx-auto px-4 pt-10">
            <div className="rounded-lg border border-brand/20 bg-brand/5 p-5">
              <h2 className="text-sm font-bold text-gray-900">The short version</h2>
              <ul className="mt-3 space-y-2">
                {config.keyTakeaways.map((t, i) => (
                  <li key={i} className="flex gap-2.5 text-sm text-gray-700 leading-relaxed">
                    <Check size={16} className="shrink-0 mt-0.5 text-brand" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {config.howTo && (
          <section className="max-w-3xl mx-auto px-4 pt-12">
            <h2 className="text-xl font-bold text-gray-900 mb-6">{config.howTo.name}: step by step</h2>
            <ol className="space-y-4">
              {config.howTo.steps.map((step, i) => (
                <li key={i} className="flex gap-4 rounded-lg border border-gray-200 bg-white p-5">
                  <span className="shrink-0 flex items-center justify-center w-7 h-7 rounded-full bg-brand text-white text-xs font-bold">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900">{step.title}</h3>
                    <p className="mt-1 text-sm text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>
        )}

        {config.sections.map((s) => (
          <section key={s.heading} className="max-w-3xl mx-auto px-4 pt-12">
            <h2 className="text-xl font-bold text-gray-900 mb-4">{s.heading}</h2>
            {s.body.map((p, i) => (
              <p key={i} className="text-sm text-gray-600 leading-relaxed mb-3">
                {p}
              </p>
            ))}
            {s.list && (
              <ul className="mt-4 space-y-2">
                {s.list.map((item, i) => (
                  <li key={i} className="flex gap-2.5 text-sm text-gray-600 leading-relaxed">
                    <Check size={16} className="shrink-0 mt-0.5 text-brand" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}
            {s.table && <SectionTable table={s.table} />}
          </section>
        ))}

        <div className="mt-4">
          <LandingFAQ faqs={config.faqs} />
        </div>

        <CrossLinks links={config.crossLinks} />

        <section className="border-t border-gray-200 bg-white">
          <div className="max-w-3xl mx-auto px-4 py-14 text-center">
            <h2 className="text-xl font-bold text-gray-900">{config.ctaHeading}</h2>
            <p className="mt-3 text-sm text-gray-600">
              Free, no sign-up, no watermarks. Your data stays in your browser.
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
      </article>
    </StaticPageLayout>
  );
}
