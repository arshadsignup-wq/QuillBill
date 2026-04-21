import { Link } from 'react-router-dom';
import StaticPageLayout from '../components/layout/StaticPageLayout';
import { useSEO } from '../hooks/useSEO';

export default function DisclaimerPage() {
  useSEO({
    title: 'Disclaimer',
    description: 'QuillBill disclaimer — no warranties, use at your own risk. Read our full legal disclaimer.',
    canonical: '/disclaimer',
  });

  return (
    <StaticPageLayout>
      <div className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Disclaimer</h1>
        <p className="text-sm text-gray-400 mb-8">Last updated: April 21, 2026</p>

        <div className="prose prose-sm prose-gray max-w-none space-y-6 text-gray-700">
          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">Purpose</h2>
            <p>
              QuillBill (<strong>www.quill-bill.com</strong>) is a free, client-side invoice and
              quotation generator provided for general informational and productivity purposes only.
              The documents you create using QuillBill are not legal or financial advice.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">No Warranty</h2>
            <p>
              QuillBill is provided on an <strong>"as is"</strong> and <strong>"as available"</strong> basis
              without any warranties of any kind, whether express or implied, including but not limited
              to implied warranties of merchantability, fitness for a particular purpose, or
              non-infringement. We do not guarantee that the service will be uninterrupted, error-free,
              or free of harmful components.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">External Links</h2>
            <p>
              QuillBill may contain links to third-party websites or services that are not owned or
              controlled by us. We have no control over, and assume no responsibility for, the content,
              privacy policies, or practices of any third-party sites or services. You acknowledge and
              agree that we are not responsible or liable for any damage or loss caused by the use of
              such external content.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">Advertising Disclaimer</h2>
            <p>
              QuillBill may display advertisements provided by third-party ad networks, including
              Google AdSense. These ads may use cookies and similar technologies to serve content
              based on your browsing activity. We do not endorse or guarantee the products or services
              advertised. Please refer to the respective advertiser's terms and privacy policies for
              more information.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">Affiliate Disclaimer</h2>
            <p>
              Some links on QuillBill may be affiliate links. If you make a purchase through these
              links, we may earn a small commission at no additional cost to you. This does not
              influence our recommendations or the content we provide.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">Fair Use</h2>
            <p>
              Any trademarks, logos, or brand names referenced on this site are the property of their
              respective owners. Their use here is for identification and informational purposes only
              and does not imply endorsement by or affiliation with QuillBill.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">Changes to This Disclaimer</h2>
            <p>
              We reserve the right to update or modify this disclaimer at any time without prior
              notice. Changes will be reflected on this page with an updated "Last updated" date.
              Your continued use of QuillBill after changes are posted constitutes your acceptance of
              the revised disclaimer.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">Contact</h2>
            <p>
              If you have questions about this disclaimer, please reach out via our{' '}
              <Link to="/contact" className="text-brand hover:underline">contact page</Link>.
            </p>
          </section>
        </div>
      </div>
    </StaticPageLayout>
  );
}
