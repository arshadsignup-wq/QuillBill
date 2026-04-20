import type { InvoiceData, CalculatedTotals } from '../../types/invoice';
import DocumentHeader from './DocumentHeader';
import DocumentFooter from './DocumentFooter';
import DocumentLineItems from './DocumentLineItems';
import DocumentTotals from './DocumentTotals';

interface ProposalDocumentProps {
  data: InvoiceData;
  totals: CalculatedTotals;
}

export default function ProposalDocument({ data, totals }: ProposalDocumentProps) {
  const accentColor = data.accentColor || '#2563eb';
  const hasLineItems = data.items.some((item) => item.description.trim() !== '');

  const sections = [
    { title: 'Project Scope', content: data.projectScope },
    { title: 'Deliverables', content: data.deliverables },
    { title: 'Timeline', content: data.timeline },
  ];

  return (
    <div className="a4-page bg-white text-gray-900">
      <DocumentHeader data={data} accentColor={accentColor} />

      <div className="space-y-5 mb-6">
        {sections.map(
          (section) =>
            section.content && (
              <div key={section.title}>
                <h2
                  className="text-sm font-bold uppercase tracking-wider mb-2"
                  style={{ color: accentColor }}
                >
                  {section.title}
                </h2>
                <div className="text-xs text-gray-700 whitespace-pre-line leading-relaxed">
                  {section.content}
                </div>
              </div>
            ),
        )}
      </div>

      {hasLineItems && (
        <div>
          <h2
            className="text-sm font-bold uppercase tracking-wider mb-3"
            style={{ color: accentColor }}
          >
            Pricing
          </h2>
          <DocumentLineItems data={data} totals={totals} accentColor={accentColor} />
          <DocumentTotals data={data} totals={totals} accentColor={accentColor} />
        </div>
      )}

      <DocumentFooter data={data} />
    </div>
  );
}
