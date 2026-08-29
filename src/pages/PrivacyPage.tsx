import { Link } from 'react-router-dom';
import StaticPageLayout from '../components/layout/StaticPageLayout';
import { useSEO } from '../hooks/useSEO';
import { pageMetaFor } from '../seo/pageMeta';

export default function PrivacyPage() {
  useSEO(pageMetaFor('/privacy'));

  return (
    <StaticPageLayout>
      <div className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
        <p className="text-sm text-gray-400 mb-8">Last updated: April 21, 2026</p>

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
            <h2 className="text-lg font-semibold text-gray-900 mb-2">Your Document Data</h2>
            <p>
              QuillBill does <strong>not</strong> collect, store, or transmit the contents of your
              documents. Your business details, client details, line items, rates and totals are
              processed entirely in your browser. There is no backend, no database and no user
              accounts, so there is nowhere for that information to be sent.
            </p>
            <p className="mt-2">
              We do collect anonymous usage statistics about which pages are visited, described
              under Analytics below. Those statistics never include anything you type into the
              editor.
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
              QuillBill does not serve advertising and does not use advertising cookies. The
              cookies and similar storage used on this site are limited to:
            </p>
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li>
                <strong>Essential</strong> — Our hosting provider (Vercel) may set cookies required
                for security, load balancing and performance.
              </li>
              <li>
                <strong>Analytics</strong> — Google Analytics sets cookies to count returning
                visitors and measure which pages are used. These do not identify you personally.
              </li>
              <li>
                <strong>Local storage</strong> — Your draft document is saved in your browser's own
                local storage. This is not a cookie and is never sent anywhere.
              </li>
            </ul>
            <p className="mt-2">
              You can block analytics cookies with your browser settings, a content blocker, or
              Google's{' '}
              <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-brand hover:underline">
                Analytics opt-out add-on
              </a>. Blocking them does not affect any feature of QuillBill.
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
              <li>
                <strong>Google Analytics</strong> — anonymous usage statistics. Learn more at{' '}
                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-brand hover:underline">
                  Google's privacy policy
                </a>.
              </li>
            </ul>
            <p>
              These services may collect anonymized usage data according to their own privacy
              policies. We do not control or have access to this data.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">Analytics</h2>
            <p>
              We use Google Analytics to understand which pages people find useful and where they
              arrive from. This tells us what to improve. It records things like the page visited,
              approximate location by country, referring site, device type and browser.
            </p>
            <p className="mt-2">
              It does <strong>not</strong> record anything you enter into the editor. Your business
              details, client details, line items and totals are never transmitted. Pages whose
              address contains document data, such as shared and editable document links, are
              excluded from analytics entirely.
            </p>
            <p className="mt-2">
              IP addresses are anonymised. You can opt out at any time using Google's{' '}
              <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-brand hover:underline">
                Analytics opt-out browser add-on
              </a>, or by blocking analytics in your browser or content blocker.
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
