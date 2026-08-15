import { Link } from 'react-router-dom';
import { FileText, ArrowRight } from 'lucide-react';
import StaticPageLayout from '../../components/layout/StaticPageLayout';
import { useSEO } from '../../hooks/useSEO';
import { guidesHubJsonLd } from '../../seo/pageSchemas';
import { guideConfigs } from './guideData';
import { guidesHubSeo } from './hubMeta';
import type { GuideConfig } from './types';

/** Cluster order on the hub — broadest topic first. */
const CLUSTERS: GuideConfig['cluster'][] = [
  'Invoicing',
  'By profession',
  'By country',
  'Getting paid',
  'Quotations',
  'Proposals',
  'Tools',
  'Writing',
];

const CLUSTER_BLURB: Record<GuideConfig['cluster'], string> = {
  Invoicing: 'Creating invoices correctly, the different invoice types, and what each one is for.',
  'Getting paid': 'Payment terms, deposits, and what to do when an invoice goes unpaid.',
  Quotations: 'Quoting work, setting scope and validity, and knowing which document to send.',
  Proposals: 'Winning work with a proposal that covers scope, deliverables and timeline.',
  Tools: 'How online generators actually work, what "free" costs you, and how the options compare.',
  Writing: 'Punctuation, wording and the language side of quoting — including actual quotations.',
  'By profession': 'What changes on the invoice when you shoot weddings, fix pipes or bill by the sprint.',
  'By country': 'Tax invoice rules that actually differ: GST, VAT, e-invoicing mandates and required fields.',
};

export default function GuidesHubPage() {
  useSEO({ ...guidesHubSeo, jsonLd: guidesHubJsonLd() });

  return (
    <StaticPageLayout>
      <section className="bg-gradient-to-br from-brand/8 via-blue-50 to-indigo-50 border-b border-brand/10">
        <div className="max-w-4xl mx-auto px-4 py-14 sm:py-16 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            Invoicing, Quotation &amp; Proposal Guides
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Practical, jargon-free guides to invoicing clients, quoting work and writing proposals —
            plus honest comparisons of the free tools in this category. Written for freelancers and
            small businesses who want to get paid on time.
          </p>
        </div>
      </section>

      {CLUSTERS.map((cluster) => {
        const guides = guideConfigs.filter((g) => g.cluster === cluster);
        if (guides.length === 0) return null;
        return (
          <section key={cluster} className="max-w-4xl mx-auto px-4 pt-12">
            <h2 className="text-xl font-bold text-gray-900">{cluster}</h2>
            <p className="mt-1 text-sm text-gray-600">{CLUSTER_BLURB[cluster]}</p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {guides.map((g) => (
                <article key={g.slug} className="rounded-lg border border-gray-200 bg-white p-5 flex flex-col">
                  <h3 className="text-sm font-semibold text-gray-900">
                    <Link to={`/${g.slug}`} className="hover:text-brand transition-colors">
                      {g.h1}
                    </Link>
                  </h3>
                  <p className="mt-2 text-xs text-gray-600 leading-relaxed flex-1">{g.summary}</p>
                  <Link
                    to={`/${g.slug}`}
                    className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-brand hover:text-brand-dark transition-colors"
                  >
                    Read the guide
                    <ArrowRight size={13} />
                  </Link>
                </article>
              ))}
            </div>
          </section>
        );
      })}

      <section className="max-w-4xl mx-auto px-4 pt-12">
        <h2 className="text-xl font-bold text-gray-900">Free templates</h2>
        <p className="mt-1 text-sm text-gray-600">
          Fill any of these in online and export a PDF. No sign-up, no watermarks.
        </p>
        <div className="mt-5 grid gap-4 sm:grid-cols-3">
          {[
            { href: '/invoice-templates', title: 'Invoice templates', desc: '15 printable invoice formats.' },
            { href: '/quotation-templates', title: 'Quotation templates', desc: '15 price quote formats.' },
            { href: '/proposal-templates', title: 'Proposal templates', desc: '15 business proposal formats.' },
          ].map((t) => (
            <Link
              key={t.href}
              to={t.href}
              className="rounded-lg border border-gray-200 bg-white p-5 hover:border-brand/40 transition-colors"
            >
              <h3 className="text-sm font-semibold text-gray-900">{t.title}</h3>
              <p className="mt-1.5 text-xs text-gray-600">{t.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-14 border-t border-gray-200 bg-white">
        <div className="max-w-3xl mx-auto px-4 py-14 text-center">
          <h2 className="text-xl font-bold text-gray-900">Create an invoice, quote or proposal</h2>
          <p className="mt-3 text-sm text-gray-600">
            Free, no sign-up, no watermarks. Your data stays in your browser.
          </p>
          <Link
            to="/"
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-brand px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-dark transition-colors"
          >
            <FileText size={18} />
            Open the Free Generator
          </Link>
        </div>
      </section>
    </StaticPageLayout>
  );
}
