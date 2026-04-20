import type { InvoiceData, CalculatedTotals } from '../../../types/invoice';
import { getDocumentTitle } from '../../../lib/documentTitle';
import { ProposalSections, ProposalTerms, ProposalSignature, ProposalPricing, ProposalContactStrip } from './ProposalParts';

interface TemplateProps {
  data: InvoiceData;
  totals: CalculatedTotals;
}

export default function ProfessionalProposal({ data, totals }: TemplateProps) {
  const accentColor = data.accentColor || '#2563eb';
  const title = getDocumentTitle(data);

  return (
    <div className="a4-page bg-white text-gray-900" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
      {/* Top bar accent */}
      <div className="h-1.5 -mx-[15mm] -mt-[15mm] mb-6" style={{ backgroundColor: accentColor }} />

      {/* Header */}
      <div className="flex items-start justify-between mb-6">
        <div>
          {data.logo && <img src={data.logo} alt="Logo" className="h-10 w-auto object-contain mb-2" />}
          <h1 className="text-xl font-bold text-gray-900">{title}</h1>
          <div className="text-[10px] text-gray-400 mt-1">
            {data.documentNumber && <span>{data.documentNumber} · </span>}
            {data.issueDate} — Due: {data.dueDate}
          </div>
        </div>
      </div>

      <ProposalContactStrip data={data} labelClass="text-[9px] font-semibold uppercase tracking-wider mb-1.5" />

      {/* Numbered sections */}
      <div className="space-y-4 mb-6">
        <ProposalSections
          data={data}
          accentColor={accentColor}
          renderSection={(title, content, index) => (
            <div className="flex gap-3">
              <div
                className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold text-white mt-0.5"
                style={{ backgroundColor: accentColor }}
              >
                {index + 1}
              </div>
              <div className="flex-1">
                <h2 className="text-[11px] font-bold uppercase tracking-wider text-gray-900 mb-1">{title}</h2>
                <div className="text-xs text-gray-700 whitespace-pre-line leading-relaxed">{content}</div>
              </div>
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
