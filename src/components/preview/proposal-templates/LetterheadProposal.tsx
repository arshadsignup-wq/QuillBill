import type { InvoiceData, CalculatedTotals } from '../../../types/invoice';
import { getDocumentTitle } from '../../../lib/documentTitle';
import { ProposalSections, ProposalTerms, ProposalSignature, ProposalPricing, ProposalContactStrip } from './ProposalParts';

interface TemplateProps {
  data: InvoiceData;
  totals: CalculatedTotals;
}

export default function LetterheadProposal({ data, totals }: TemplateProps) {
  const accentColor = data.accentColor || '#2563eb';
  const title = getDocumentTitle(data);

  return (
    <div className="a4-page bg-white text-gray-900 flex flex-col" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
      {/* Top band */}
      <div className="h-2 -mx-[15mm] -mt-[15mm] mb-6" style={{ backgroundColor: accentColor }} />

      {/* Header */}
      <div className="flex items-start justify-between mb-6">
        <div className="flex items-center gap-3">
          {data.logo && <img src={data.logo} alt="Logo" className="h-10 w-auto object-contain" />}
          <div>
            <h1 className="text-xl font-bold text-gray-900">{title}</h1>
            <div className="text-[10px] text-gray-400 mt-0.5">
              {data.documentNumber && <span>{data.documentNumber} · </span>}
              {data.issueDate}
            </div>
          </div>
        </div>
        <div className="text-right text-[10px] text-gray-500">
          <div>Valid Until</div>
          <div className="font-semibold text-gray-900">{data.dueDate}</div>
        </div>
      </div>

      <ProposalContactStrip data={data} />

      <div className="space-y-5 mb-6">
        <ProposalSections
          data={data}
          accentColor={accentColor}
          sectionClass=""
          headingClass="text-[11px] font-bold uppercase tracking-wider mb-1.5"
        />
      </div>

      <ProposalPricing data={data} totals={totals} accentColor={accentColor} />
      <ProposalTerms data={data} />
      <ProposalSignature data={data} className="mt-auto" />

      {/* Bottom band */}
      <div className="h-2 -mx-[15mm] -mb-[15mm] mt-6" style={{ backgroundColor: accentColor }} />
    </div>
  );
}
