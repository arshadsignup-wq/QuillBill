import type { FeatureItem } from '../landingData';

interface FeatureGridProps {
  features: FeatureItem[];
}

export default function FeatureGrid({ features }: FeatureGridProps) {
  return (
    <section className="max-w-4xl mx-auto px-4 py-14">
      <h2 className="text-xl font-bold text-gray-900 text-center mb-8">Features</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {features.map((f) => (
          <div key={f.title} className="rounded-lg border border-gray-200 bg-white p-5">
            <div className="flex items-center gap-2.5 mb-2.5">
              <f.icon size={20} className="text-brand flex-shrink-0" />
              <h3 className="font-semibold text-gray-900 text-sm">{f.title}</h3>
            </div>
            <p className="text-xs text-gray-500 leading-relaxed">{f.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
