import type { InvoiceData, CalculatedTotals } from '../../../types/invoice';
import { getDocumentTitle } from '../../../lib/documentTitle';
import { ProposalSections, ProposalTerms, ProposalSignature, ProposalPricing, ProposalContactStrip } from './ProposalParts';

interface TemplateProps {
  data: InvoiceData;
  totals: CalculatedTotals;
}

export default function ClassicProposal({ data, totals }: TemplateProps) {
  const accentColor = data.accentColor || '#2563eb';
  const title = getDocumentTitle(data);

  return (
    <div className="a4-page bg-white text-gray-900" style={{ fontFamily: 'Georgia, serif' }}>
      {/* Double border frame */}
      <div className="border-2 border-gray-300 p-6" style={{ borderColor: accentColor }}>
        <div className="border border-gray-200 p-5" style={{ borderColor: accentColor + '40' }}>
          {/* Centered header */}
          <div className="text-center mb-6 pb-4 border-b-2" style={{ borderColor: accentColor }}>
            {data.logo && (
              <img src={data.logo} alt="Logo" className="h-10 w-auto object-contain mx-auto mb-2" />
            )}
            <h1 className="text-2xl font-bold tracking-wide" style={{ color: accentColor }}>{title}</h1>
            <div className="flex justify-center gap-6 text-[10px] text-gray-500 mt-2">
              <span>Date: {data.issueDate}</span>
              <span>Valid Until: {data.dueDate}</span>
              {data.documentNumber && <span>Ref: {data.documentNumber}</span>}
            </div>
          </div>

          <ProposalContactStrip data={data} />

          <div className="space-y-4 mb-6">
            <ProposalSections
              data={data}
              accentColor={accentColor}
              sectionClass="pb-3 border-b border-gray-200"
              headingClass="text-xs font-bold tracking-wider mb-1.5"
              bodyClass="text-xs text-gray-700 whitespace-pre-line leading-relaxed"
            />
          </div>

          <ProposalPricing data={data} totals={totals} accentColor={accentColor} />
          <ProposalTerms data={data} />
          <ProposalSignature data={data} />
        </div>
      </div>
    </div>
  );
}
