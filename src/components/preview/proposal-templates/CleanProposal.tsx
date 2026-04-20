import type { InvoiceData, CalculatedTotals } from '../../../types/invoice';
import { getDocumentTitle } from '../../../lib/documentTitle';
import { ProposalSections, ProposalTerms, ProposalSignature, ProposalPricing, ProposalContactStrip } from './ProposalParts';

interface TemplateProps {
  data: InvoiceData;
  totals: CalculatedTotals;
}

export default function CleanProposal({ data, totals }: TemplateProps) {
  const accentColor = data.accentColor || '#2563eb';
  const title = getDocumentTitle(data);

  return (
    <div className="a4-page bg-white text-gray-900" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
      {/* Minimal header */}
      <div className="mb-8">
        <div className="flex items-start justify-between">
          <h1 className="text-lg font-medium text-gray-900">{title}</h1>
          {data.logo && <img src={data.logo} alt="Logo" className="h-8 w-auto object-contain" />}
        </div>
        <div className="text-[10px] text-gray-400 mt-1">
          {data.issueDate} · Valid until {data.dueDate}
          {data.documentNumber && <span> · {data.documentNumber}</span>}
        </div>
      </div>

      <ProposalContactStrip data={data} className="grid grid-cols-2 gap-6 mb-8" />

      <div className="space-y-6 mb-8">
        <ProposalSections
          data={data}
          accentColor={accentColor}
          sectionClass=""
          headingClass="text-[11px] font-medium text-gray-400 uppercase tracking-wider mb-1"
        />
      </div>

      <ProposalPricing data={data} totals={totals} accentColor={accentColor} />
      <ProposalTerms data={data} />
      <ProposalSignature data={data} />
    </div>
  );
}
