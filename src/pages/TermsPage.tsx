import { Link } from 'react-router-dom';
import StaticPageLayout from '../components/layout/StaticPageLayout';
import { useSEO } from '../hooks/useSEO';

export default function TermsPage() {
  useSEO({
    title: 'Terms of Service',
    description: 'QuillBill terms of service. Free to use, no warranty, your documents belong to you.',
    canonical: '/terms',
  });

  return (
    <StaticPageLayout>
      <div className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Terms of Service</h1>
        <p className="text-sm text-gray-400 mb-8">Last updated: April 20, 2026</p>

        <div className="prose prose-sm prose-gray max-w-none space-y-6 text-gray-700">
          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">Acceptance of Terms</h2>
            <p>
              By accessing and using QuillBill (<strong>www.quill-bill.com</strong>), you agree to
              be bound by these Terms of Service. If you do not agree with any part of these terms,
              please do not use the service.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">Description of Service</h2>
            <p>
              QuillBill is a free, open-source, client-side web application for creating invoices,
              quotations, and proposals. The service runs entirely in your browser with no server-side
              processing or data storage.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">No Warranty</h2>
            <p>
              QuillBill is provided "as is" without warranty of any kind, express or implied. We do
              not guarantee that the service will be uninterrupted, error-free, or available at all
              times. Use the generated documents at your own discretion.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">User Responsibilities</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>You are solely responsible for the accuracy of the documents you create.</li>
              <li>You are responsible for complying with applicable tax, billing, and legal
                  requirements in your jurisdiction.</li>
              <li>You should not include sensitive information (such as passwords or bank PINs) in
                  shareable links, as the data is encoded in the URL.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">Data & Privacy</h2>
            <p>
              All data remains in your browser. We do not collect, store, or have access to your
              invoice data. For full details, see our{' '}
              <Link to="/privacy" className="text-brand hover:underline">Privacy Policy</Link>.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">Shareable Links</h2>
            <p>
              When you create a shareable link, the document data is compressed and embedded in the
              URL itself. Anyone who has the link can access the document. You are responsible for
              controlling who you share links with.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">Limitation of Liability</h2>
            <p>
              In no event shall QuillBill or its contributors be liable for any indirect, incidental,
              special, or consequential damages arising out of or in connection with the use of this
              service. This includes, but is not limited to, loss of data, loss of revenue, or
              errors in generated documents.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">Intellectual Property</h2>
            <p>
              The documents you create using QuillBill belong entirely to you. The QuillBill
              application itself is open source and available on{' '}
              <a
                href="https://github.com/arshadsignup-wq/QuillBill"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand hover:underline"
              >
                GitHub
              </a>.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">Changes to Terms</h2>
            <p>
              We reserve the right to modify these terms at any time. Changes will be posted on this
              page with an updated date. Continued use of the service constitutes acceptance of the
              updated terms.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">Contact</h2>
            <p>
              Questions about these terms? Reach out via our{' '}
              <Link to="/contact" className="text-brand hover:underline">contact page</Link>.
            </p>
          </section>
        </div>
      </div>
    </StaticPageLayout>
  );
}
