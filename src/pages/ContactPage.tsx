import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Github, Clock, MessageSquare, HelpCircle, Send } from 'lucide-react';
import StaticPageLayout from '../components/layout/StaticPageLayout';
import { useSEO } from '../hooks/useSEO';

export default function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  useSEO({
    title: 'Contact',
    description: 'Get in touch with QuillBill. Report bugs, request features, or send us a message.',
    canonical: '/contact',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`QuillBill Contact: Message from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:arshadhossain.work@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <StaticPageLayout>
      <div className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h1>

        <div className="space-y-2 text-sm text-gray-700 leading-relaxed mb-8">
          <p>
            QuillBill is a free, open-source invoice and quotation generator built for freelancers,
            small businesses, and anyone who needs professional documents without the complexity of
            enterprise software. We're a small team and we genuinely appreciate every piece of feedback.
          </p>
          <p>
            Whether you've found a bug, have an idea for a new feature, or just want to say hello —
            we read every message and will do our best to get back to you promptly.
          </p>
        </div>

        {/* Contact cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
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
                The best place to report bugs and request features. Open a new issue on our
                GitHub repository and we'll triage it as soon as possible.
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
                For general inquiries, partnership proposals, or anything that doesn't fit a
                GitHub issue, email us at arshadhossain.work@gmail.com.
              </p>
            </div>
          </a>
        </div>

        {/* Contact form */}
        <div className="mb-10">
          <h2 className="text-lg font-semibold text-gray-900 mb-1 flex items-center gap-2">
            <MessageSquare size={18} className="text-brand" />
            Send a Message
          </h2>
          <p className="text-xs text-gray-500 mb-4">
            Fill out the form below and click send. This will open your default email client
            with the message pre-filled.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="contact-name" className="block text-xs font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:border-brand focus:ring-1 focus:ring-brand/30 outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="block text-xs font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:border-brand focus:ring-1 focus:ring-brand/30 outline-none transition-colors"
                  placeholder="you@example.com"
                />
              </div>
            </div>
            <div>
              <label htmlFor="contact-message" className="block text-xs font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="contact-message"
                required
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:border-brand focus:ring-1 focus:ring-brand/30 outline-none transition-colors resize-none"
                placeholder="How can we help?"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-lg bg-brand px-4 py-2 text-sm font-medium text-white hover:bg-brand-dark transition-colors"
            >
              <Send size={14} />
              Send Message
            </button>
          </form>
        </div>

        {/* Response time */}
        <div className="rounded-lg bg-brand/5 border border-brand/10 p-4 mb-10 flex items-start gap-3">
          <Clock size={18} className="text-brand flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="text-sm font-medium text-gray-900 mb-0.5">Response Time</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              We aim to respond to all inquiries within 24–48 hours. For urgent bug reports,
              GitHub Issues will typically get the fastest response.
            </p>
          </div>
        </div>

        {/* Before You Reach Out */}
        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Before You Reach Out</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              to="/faq"
              className="flex items-start gap-3 rounded-lg border border-gray-200 bg-white p-5 hover:border-brand/30 hover:shadow-sm transition-all"
            >
              <HelpCircle size={20} className="text-brand flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-medium text-gray-900 text-sm mb-1">Check the FAQ</h3>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Many common questions about exporting PDFs, sharing links, and using templates
                  are already answered in our FAQ section.
                </p>
              </div>
            </Link>

            <div className="flex items-start gap-3 rounded-lg border border-gray-200 bg-white p-5">
              <Github size={20} className="text-gray-900 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-medium text-gray-900 text-sm mb-1">Reporting a Bug</h3>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Please include your browser name and version, the steps to reproduce the issue,
                  and a screenshot if possible. This helps us fix things faster.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StaticPageLayout>
  );
}
