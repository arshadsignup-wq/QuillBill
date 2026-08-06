import { ChevronDown } from 'lucide-react';
import type { FAQItem } from '../landingData';

interface LandingFAQProps {
  faqs: FAQItem[];
  heading?: string;
}

/**
 * Uses native <details>/<summary> so every answer stays in the DOM even when
 * collapsed. The previous accordion unmounted closed answers, which meant the
 * FAQ text never appeared in the served HTML for crawlers.
 *
 * FAQPage JSON-LD is emitted by the page's useSEO({ jsonLd }) call, not here,
 * so the schema is present in the prerendered HTML rather than injected later.
 */
export default function LandingFAQ({ faqs, heading = 'Frequently Asked Questions' }: LandingFAQProps) {
  return (
    <section className="max-w-3xl mx-auto px-4 py-14">
      {heading && <h2 className="text-xl font-bold text-gray-900 text-center mb-8">{heading}</h2>}
      <div className="space-y-3">
        {faqs.map((faq, index) => (
          <details key={index} className="group border border-gray-200 rounded-lg bg-white">
            <summary className="flex cursor-pointer items-center justify-between px-5 py-4 text-left text-sm font-medium text-gray-900 hover:bg-gray-50 rounded-lg list-none [&::-webkit-details-marker]:hidden">
              <h3 className="text-sm font-medium text-gray-900">{faq.question}</h3>
              <ChevronDown
                size={18}
                className="shrink-0 ml-3 text-gray-400 transition-transform duration-200 group-open:rotate-180"
              />
            </summary>
            <div className="px-5 pb-4 text-sm text-gray-600 leading-relaxed">{faq.answer}</div>
          </details>
        ))}
      </div>
    </section>
  );
}
