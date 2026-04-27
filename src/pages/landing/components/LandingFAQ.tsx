import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import type { FAQItem } from '../landingData';

interface LandingFAQProps {
  faqs: FAQItem[];
}

export default function LandingFAQ({ faqs }: LandingFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Inject FAQ JSON-LD structured data
  useEffect(() => {
    const jsonLd = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(jsonLd);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [faqs]);

  return (
    <section className="max-w-3xl mx-auto px-4 py-14">
      <h2 className="text-xl font-bold text-gray-900 text-center mb-8">
        Frequently Asked Questions
      </h2>
      <div className="space-y-3">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-gray-200 rounded-lg bg-white">
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex items-center justify-between px-5 py-4 text-left text-gray-900 font-medium text-sm hover:bg-gray-50 transition-colors rounded-lg"
              aria-expanded={openIndex === index}
            >
              <span>{faq.question}</span>
              <ChevronDown
                size={18}
                className={`shrink-0 ml-3 text-gray-400 transition-transform duration-200 ${
                  openIndex === index ? 'rotate-180' : ''
                }`}
              />
            </button>
            {openIndex === index && (
              <div className="px-5 pb-4 text-sm text-gray-600 leading-relaxed">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
