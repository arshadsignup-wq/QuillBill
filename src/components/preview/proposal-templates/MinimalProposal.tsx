import type { InvoiceData, CalculatedTotals } from '../../../types/invoice';
import { getDocumentTitle } from '../../../lib/documentTitle';
import { ProposalSections, ProposalTerms, ProposalSignature, ProposalPricing, ProposalContactStrip } from './ProposalParts';

interface TemplateProps {
  data: InvoiceData;
  totals: CalculatedTotals;
}

export default function MinimalProposal({ data, totals }: TemplateProps) {
  const accentColor = data.accentColor || '#2563eb';
  const title = getDocumentTitle(data);

  return (
    <div className="a4-page bg-white text-gray-900" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
      {/* Simple header */}
      <div className="flex items-start justify-between mb-6 pb-4 border-b border-gray-200">
        <div>
          <h1 className="text-xl font-semibold text-gray-900 tracking-wide">{title}</h1>
          <div className="flex gap-4 text-[10px] text-gray-400 mt-1">
            <span>Date: {data.issueDate}</span>
            <span>Valid Until: {data.dueDate}</span>
            {data.documentNumber && <span>Ref: {data.documentNumber}</span>}
          </div>
        </div>
        {data.logo && (
          <img src={data.logo} alt="Logo" className="h-10 w-auto object-contain" />
        )}
      </div>

      <ProposalContactStrip data={data} />

      <div className="space-y-4 mb-6">
        <ProposalSections
          data={data}
          accentColor={accentColor}
          sectionClass="pb-4 border-b border-gray-100"
          headingClass="text-[11px] font-semibold text-gray-500 uppercase tracking-wider mb-1.5"
        />
      </div>

      <ProposalPricing data={data} totals={totals} accentColor={accentColor} headingClass="text-[11px] font-semibold text-gray-500 uppercase tracking-wider mb-3" />
      <ProposalTerms data={data} />
      <ProposalSignature data={data} />
    </div>
  );
}
