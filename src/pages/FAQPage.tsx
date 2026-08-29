import { Link } from 'react-router-dom';
import StaticPageLayout from '../components/layout/StaticPageLayout';
import { useSEO } from '../hooks/useSEO';
import LandingFAQ from './landing/components/LandingFAQ';
import { siteFaqs } from './faqData';
import { pageMetaFor } from '../seo/pageMeta';

export default function FAQPage() {
  useSEO(pageMetaFor('/faq'));

  return (
    <StaticPageLayout>
      <div className="max-w-3xl mx-auto px-4 pt-12">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Frequently Asked Questions</h1>
        <p className="text-sm text-gray-500">Everything you need to know about QuillBill</p>
      </div>

      <LandingFAQ faqs={siteFaqs} heading="" />

      <div className="max-w-3xl mx-auto px-4 pb-12 text-center text-sm text-gray-500">
        <p>
          Still have questions? Reach out via our{' '}
          <Link to="/contact" className="text-brand hover:underline">contact page</Link>.
        </p>
      </div>
    </StaticPageLayout>
  );
}
