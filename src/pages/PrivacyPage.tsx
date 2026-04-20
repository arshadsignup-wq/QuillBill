import { Link } from 'react-router-dom';
import StaticPageLayout from '../components/layout/StaticPageLayout';
import { useSEO } from '../hooks/useSEO';

export default function PrivacyPage() {
  useSEO({
    title: 'Privacy Policy',
    description: 'QuillBill privacy policy. No data collection, no tracking — everything runs in your browser.',
    canonical: '/privacy',
  });

  return (
    <StaticPageLayout>
      <div className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
        <p className="text-sm text-gray-400 mb-8">Last updated: April 20, 2026</p>

        <div className="prose prose-sm prose-gray max-w-none space-y-6 text-gray-700">
          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">Overview</h2>
            <p>
              QuillBill is a free, client-side invoice and quotation generator. We are committed to
              protecting your privacy. This policy explains how your data is handled when you use our
              service at <strong>www.quill-bill.com</strong>.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">No Data Collection</h2>
            <p>
              QuillBill does <strong>not</strong> collect, store, or transmit any personal data to
              external servers. There is no backend, no database, and no user accounts. All data
              processing happens entirely in your browser.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">Local Storage</h2>
            <p>
              Your invoice data is saved to your browser's <code>localStorage</code> so you can
              resume editing between sessions. This data never leaves your device unless you
              explicitly share a link. You can clear this data at any time by clearing your
              browser's site data.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">Shareable Links</h2>
            <p>
              When you generate a shareable link, your invoice data is compressed and encoded
              directly into the URL. No data is stored on our servers. Anyone with the link can
              view or edit the document. Share links only with people you trust.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">Cookies</h2>
            <p>
              QuillBill does not use cookies for tracking or analytics. Our hosting provider
              (Vercel) may set essential cookies for security and performance purposes.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">Third-Party Services</h2>
            <p>
              We use the following third-party services:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Vercel</strong> — hosting and CDN delivery</li>
              <li><strong>Google Fonts</strong> — the Inter typeface is loaded from Google's servers</li>
            </ul>
            <p>
              These services may collect anonymized usage data according to their own privacy
              policies. We do not control or have access to this data.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">Children's Privacy</h2>
            <p>
              QuillBill is not directed at children under 13. We do not knowingly collect any
              information from children.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">Changes to This Policy</h2>
            <p>
              We may update this policy from time to time. Changes will be reflected on this page
              with an updated "Last updated" date.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">Contact</h2>
            <p>
              If you have questions about this privacy policy, please reach out via our{' '}
              <Link to="/contact" className="text-brand hover:underline">contact page</Link>.
            </p>
          </section>
        </div>
      </div>
    </StaticPageLayout>
  );
}
