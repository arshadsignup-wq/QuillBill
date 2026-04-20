import { Mail, Github } from 'lucide-react';
import StaticPageLayout from '../components/layout/StaticPageLayout';
import { useSEO } from '../hooks/useSEO';

export default function ContactPage() {
  useSEO({
    title: 'Contact',
    description: 'Get in touch with QuillBill. Report bugs, request features, or send us a message.',
    canonical: '/contact',
  });

  return (
    <StaticPageLayout>
      <div className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Contact</h1>

        <p className="text-sm text-gray-700 leading-relaxed mb-8">
          Have a question, found a bug, or want to suggest a feature? We'd love to hear from you.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <a
            href="https://github.com/arshadsignup-wq/QuillBill/issues"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-3 rounded-lg border border-gray-200 bg-white p-5 hover:border-brand/30 hover:shadow-sm transition-all"
          >
            <Github size={20} className="text-gray-900 flex-shrink-0 mt-0.5" />
            <div>
              <h2 className="font-medium text-gray-900 text-sm mb-1">GitHub Issues</h2>
              <p className="text-xs text-gray-500 leading-relaxed">
                Report bugs, request features, or browse existing issues on our GitHub repository.
              </p>
            </div>
          </a>

          <a
            href="mailto:arshadhossain.work@gmail.com"
            className="flex items-start gap-3 rounded-lg border border-gray-200 bg-white p-5 hover:border-brand/30 hover:shadow-sm transition-all"
          >
            <Mail size={20} className="text-brand flex-shrink-0 mt-0.5" />
            <div>
              <h2 className="font-medium text-gray-900 text-sm mb-1">Email</h2>
              <p className="text-xs text-gray-500 leading-relaxed">
                For general inquiries, reach out at arshadhossain.work@gmail.com.
              </p>
            </div>
          </a>
        </div>
      </div>
    </StaticPageLayout>
  );
}
