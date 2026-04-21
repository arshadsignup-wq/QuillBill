import { Link } from 'react-router-dom';
import StaticPageLayout from '../components/layout/StaticPageLayout';
import { useSEO } from '../hooks/useSEO';

export default function DMCAPage() {
  useSEO({
    title: 'DMCA Policy',
    description: 'QuillBill DMCA policy — how to report copyright infringement and submit takedown notices.',
    canonical: '/dmca',
  });

  return (
    <StaticPageLayout>
      <div className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">DMCA Policy</h1>
        <p className="text-sm text-gray-400 mb-8">Last updated: April 21, 2026</p>

        <div className="prose prose-sm prose-gray max-w-none space-y-6 text-gray-700">
          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">Overview</h2>
            <p>
              QuillBill (<strong>www.quill-bill.com</strong>) respects the intellectual property
              rights of others and expects its users to do the same. In accordance with the Digital
              Millennium Copyright Act of 1998 (DMCA), we will respond promptly to claims of
              copyright infringement that are reported to us.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">Reporting Copyright Infringement</h2>
            <p>
              If you believe that content available through QuillBill infringes your copyright, you
              may submit a DMCA takedown notice. Your notice must include the following information:
            </p>
            <ol className="list-decimal pl-5 space-y-2 mt-3">
              <li>
                A physical or electronic signature of the copyright owner or a person authorized to
                act on their behalf.
              </li>
              <li>
                Identification of the copyrighted work claimed to have been infringed.
              </li>
              <li>
                Identification of the material that is claimed to be infringing, including the URL or
                other specific location where the material can be found.
              </li>
              <li>
                Your contact information, including your name, address, telephone number, and email
                address.
              </li>
              <li>
                A statement that you have a good faith belief that use of the material in the manner
                complained of is not authorized by the copyright owner, its agent, or the law.
              </li>
              <li>
                A statement, made under penalty of perjury, that the above information in your notice
                is accurate and that you are the copyright owner or authorized to act on the copyright
                owner's behalf.
              </li>
            </ol>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">Counter-Notification</h2>
            <p>
              If you believe that your content was removed or disabled by mistake or
              misidentification, you may submit a counter-notification. Your counter-notification must
              include the following:
            </p>
            <ol className="list-decimal pl-5 space-y-2 mt-3">
              <li>
                Your physical or electronic signature.
              </li>
              <li>
                Identification of the material that was removed or disabled and the location at which
                the material appeared before it was removed or disabled.
              </li>
              <li>
                A statement under penalty of perjury that you have a good faith belief that the
                material was removed or disabled as a result of mistake or misidentification.
              </li>
              <li>
                Your name, address, telephone number, and a statement that you consent to the
                jurisdiction of the federal district court for the judicial district in which your
                address is located, and that you will accept service of process from the person who
                provided the original DMCA notification.
              </li>
            </ol>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">Repeat Infringers</h2>
            <p>
              QuillBill reserves the right to remove content and terminate access for users who are
              found to be repeat infringers.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">Contact for DMCA Claims</h2>
            <p>
              To submit a DMCA takedown notice or counter-notification, please contact us through
              our{' '}
              <Link to="/contact" className="text-brand hover:underline">contact page</Link>.
              Please include "DMCA" in the subject line of your message.
            </p>
          </section>
        </div>
      </div>
    </StaticPageLayout>
  );
}
