import type { InvoiceData, CalculatedTotals } from '../../../types/invoice';
import { getDocumentTitle } from '../../../lib/documentTitle';
import { ProposalSections, ProposalTerms, ProposalSignature, ProposalPricing, ProposalContactStrip } from './ProposalParts';

interface TemplateProps {
  data: InvoiceData;
  totals: CalculatedTotals;
}

export default function CreativeProposal({ data, totals }: TemplateProps) {
  const accentColor = data.accentColor || '#2563eb';
  const title = getDocumentTitle(data);

  return (
    <div className="a4-page bg-white text-gray-900" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
      {/* Playful header */}
      <div className="mb-6">
        <div className="flex items-start justify-between mb-3">
          {data.logo && <img src={data.logo} alt="Logo" className="h-10 w-auto object-contain" />}
          <div className="flex gap-2">
            <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-[10px] font-medium text-white" style={{ backgroundColor: accentColor }}>
              {data.issueDate}
            </span>
            <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-[10px] font-medium border" style={{ borderColor: accentColor, color: accentColor }}>
              Due: {data.dueDate}
            </span>
          </div>
        </div>
        <h1 className="text-2xl font-bold" style={{ color: accentColor }}>{title}</h1>
        {data.documentNumber && <div className="text-[10px] text-gray-400 mt-1">{data.documentNumber}</div>}
      </div>

      <ProposalContactStrip data={data} className="grid grid-cols-2 gap-4 mb-6" />

      {/* Card-based sections */}
      <div className="space-y-3 mb-6">
        <ProposalSections
          data={data}
          accentColor={accentColor}
          renderSection={(title, content) => (
            <div className="rounded-2xl p-4" style={{ backgroundColor: accentColor + '08' }}>
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
