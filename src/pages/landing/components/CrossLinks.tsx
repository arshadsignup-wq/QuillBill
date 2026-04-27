import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import type { CrossLinkItem } from '../landingData';

interface CrossLinksProps {
  links: CrossLinkItem[];
}

export default function CrossLinks({ links }: CrossLinksProps) {
  return (
    <section className="bg-gray-50 border-y border-gray-200">
      <div className="max-w-4xl mx-auto px-4 py-14">
        <h2 className="text-xl font-bold text-gray-900 text-center mb-8">
          More Free Tools
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-2xl mx-auto">
          {links.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="group rounded-lg border border-gray-200 bg-white p-5 hover:border-brand/30 hover:shadow-sm transition-all"
            >
              <h3 className="font-semibold text-gray-900 text-sm flex items-center gap-2">
                {link.title}
                <ArrowRight size={14} className="text-gray-400 group-hover:text-brand transition-colors" />
              </h3>
              <p className="text-xs text-gray-500 leading-relaxed mt-1.5">{link.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
