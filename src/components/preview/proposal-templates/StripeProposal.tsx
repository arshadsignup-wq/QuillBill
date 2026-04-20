import type { InvoiceData, CalculatedTotals } from '../../../types/invoice';
import { getDocumentTitle } from '../../../lib/documentTitle';
import { ProposalSections, ProposalTerms, ProposalSignature, ProposalPricing, ProposalContactStrip } from './ProposalParts';

interface TemplateProps {
  data: InvoiceData;
  totals: CalculatedTotals;
}

export default function StripeProposal({ data, totals }: TemplateProps) {
  const accentColor = data.accentColor || '#2563eb';
  const title = getDocumentTitle(data);

  return (
    <div className="a4-page bg-white text-gray-900" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
      {/* Header with left accent stripe */}
      <div className="flex items-start justify-between mb-6 pl-4" style={{ borderLeft: `4px solid ${accentColor}` }}>
        <div>
          <h1 className="text-xl font-bold tracking-wide" style={{ color: accentColor }}>{title}</h1>
          <div className="flex gap-4 text-[10px] text-gray-400 mt-1">
            <span>{data.issueDate}</span>
            <span>Valid: {data.dueDate}</span>
            {data.documentNumber && <span>{data.documentNumber}</span>}
          </div>
        </div>
        {data.logo && <img src={data.logo} alt="Logo" className="h-10 w-auto object-contain" />}
      </div>

      <ProposalContactStrip data={data} />

      <div className="space-y-0 mb-6">
        <ProposalSections
          data={data}
          accentColor={accentColor}
          renderSection={(title, content, index) => (
            <div
              className="pl-4 py-3 pr-3"
              style={{
                borderLeft: `3px solid ${accentColor}`,
                backgroundColor: index % 2 === 0 ? accentColor + '06' : 'transparent',
              }}
            >
              <h2 className="text-[11px] font-bold uppercase tracking-wider mb-1.5" style={{ color: accentColor }}>
                {title}
              </h2>
              <div className="text-xs text-gray-700 whitespace-pre-line leading-relaxed">{content}</div>
            </div>
          )}
        />
      </div>

      <ProposalPricing data={data} totals={totals} accentColor={accentColor} />
      <ProposalTerms data={data} />
      <ProposalSignature data={data} />
    </div>
  );
}
