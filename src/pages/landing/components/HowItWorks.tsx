import type { StepItem } from '../landingData';

interface HowItWorksProps {
  steps: StepItem[];
}

export default function HowItWorks({ steps }: HowItWorksProps) {
  return (
    <section className="bg-gray-50 border-y border-gray-200">
      <div className="max-w-4xl mx-auto px-4 py-14">
        <h2 className="text-xl font-bold text-gray-900 text-center mb-8">How It Works</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <div key={step.title} className="text-center">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-brand text-white font-bold text-sm mb-3">
                {i + 1}
              </div>
              <h3 className="font-semibold text-gray-900 text-sm mb-1.5">{step.title}</h3>
              <p className="text-xs text-gray-500 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
