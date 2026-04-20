import type { InvoiceData, CalculatedTotals } from '../../../types/invoice';
import { getDocumentTitle } from '../../../lib/documentTitle';
import { ProposalSections, ProposalTerms, ProposalSignature, ProposalPricing, ProposalContactStrip } from './ProposalParts';

interface TemplateProps {
  data: InvoiceData;
  totals: CalculatedTotals;
}

export default function ExecutiveProposal({ data, totals }: TemplateProps) {
  const accentColor = data.accentColor || '#2563eb';
  const title = getDocumentTitle(data);

  return (
    <div className="a4-page bg-white text-gray-900" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
      {/* Dark header */}
      <div className="bg-gray-900 rounded-lg px-8 py-6 mb-6">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-xl font-bold text-white tracking-wide mb-2">{title}</h1>
            <div className="flex gap-6 text-gray-400 text-[10px]">
              <div>
                <span className="text-gray-500 uppercase text-[9px] tracking-wider block mb-0.5">Prepared for</span>
                <span className="text-gray-300 font-medium">{data.to.name || '—'}</span>
              </div>
              <div>
                <span className="text-gray-500 uppercase text-[9px] tracking-wider block mb-0.5">Prepared by</span>
                <span className="text-gray-300 font-medium">{data.from.name || '—'}</span>
              </div>
            </div>
            <div className="flex gap-4 text-gray-500 text-[10px] mt-2">
              <span>{data.issueDate}</span>
              <span>Valid: {data.dueDate}</span>
              {data.documentNumber && <span>{data.documentNumber}</span>}
            </div>
          </div>
          {data.logo && (
            <div className="rounded bg-white/10 p-1.5 flex-shrink-0 ml-4">
              <img src={data.logo} alt="Logo" className="h-10 w-auto object-contain" />
            </div>
          )}
        </div>
      </div>

      <ProposalContactStrip data={data} />

      <div className="space-y-5 mb-6">
        <ProposalSections
          data={data}
          accentColor={accentColor}
          sectionClass="border-l-2 border-gray-200 pl-4"
          headingClass="text-[11px] font-bold uppercase tracking-wider text-gray-900 mb-1.5"
        />
      </div>

      <ProposalPricing data={data} totals={totals} accentColor={accentColor} />
      <ProposalTerms data={data} />
      <ProposalSignature data={data} />
    </div>
  );
}
