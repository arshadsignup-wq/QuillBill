import type { InvoiceData, CalculatedTotals } from '../../../types/invoice';
import { getDocumentTitle } from '../../../lib/documentTitle';
import { ProposalSections, ProposalTerms, ProposalSignature, ProposalPricing, ProposalContactStrip } from './ProposalParts';

interface TemplateProps {
  data: InvoiceData;
  totals: CalculatedTotals;
}

export default function ElegantProposal({ data, totals }: TemplateProps) {
  const accentColor = data.accentColor || '#2563eb';
  const title = getDocumentTitle(data);

  return (
    <div className="a4-page bg-white text-gray-900" style={{ fontFamily: 'Georgia, serif' }}>
      {/* Refined header */}
      <div className="mb-8">
        <div className="flex items-start justify-between mb-4">
          {data.logo && <img src={data.logo} alt="Logo" className="h-10 w-auto object-contain" />}
          <div className="text-right text-[10px] text-gray-400 tracking-wide">
            <div>{data.issueDate}</div>
            {data.documentNumber && <div>{data.documentNumber}</div>}
          </div>
        </div>
        <h1 className="text-xl font-normal tracking-[0.2em] uppercase text-gray-800 mb-2">{title}</h1>
        <div className="h-px w-20" style={{ backgroundColor: accentColor }} />
        <div className="text-[10px] text-gray-400 mt-2 tracking-wide">Valid until {data.dueDate}</div>
      </div>

      <ProposalContactStrip
        data={data}
        labelClass="text-[9px] font-medium uppercase tracking-[0.15em] text-gray-400 mb-1.5"
      />

      <div className="space-y-6 mb-8">
        <ProposalSections
          data={data}
          accentColor={accentColor}
          renderSection={(title, content) => (
            <div>
              <h2 className="text-[10px] font-medium uppercase tracking-[0.15em] text-gray-500 mb-1">{title}</h2>
              <div className="h-px mb-2" style={{ backgroundColor: accentColor + '30' }} />
              <div className="text-xs text-gray-700 whitespace-pre-line leading-relaxed">{content}</div>
            </div>
          )}
        />
      </div>

      <ProposalPricing data={data} totals={totals} accentColor={accentColor} />
      <ProposalTerms data={data} headingClass="text-[10px] font-medium uppercase tracking-[0.15em] text-gray-400 mb-1" />
      <ProposalSignature data={data} />
    </div>
  );
}
