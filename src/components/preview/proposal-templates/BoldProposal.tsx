import type { InvoiceData, CalculatedTotals } from '../../../types/invoice';
import { getDocumentTitle } from '../../../lib/documentTitle';
import { ProposalSections, ProposalTerms, ProposalSignature, ProposalPricing, ProposalContactStrip } from './ProposalParts';

interface TemplateProps {
  data: InvoiceData;
  totals: CalculatedTotals;
}

export default function BoldProposal({ data, totals }: TemplateProps) {
  const accentColor = data.accentColor || '#2563eb';
  const title = getDocumentTitle(data);

  return (
    <div className="a4-page bg-white text-gray-900" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
      {/* Giant title */}
      <div className="mb-8">
        <div className="flex items-start justify-between mb-4">
          {data.logo && <img src={data.logo} alt="Logo" className="h-12 w-auto object-contain" />}
          <div className="text-right text-xs text-gray-500 space-y-0.5">
            {data.documentNumber && <div className="font-mono">{data.documentNumber}</div>}
            <div>{data.issueDate}</div>
            <div>Valid: {data.dueDate}</div>
          </div>
        </div>
        <h1 className="text-4xl font-black tracking-tighter leading-none" style={{ color: accentColor }}>
          {title}
        </h1>
        <div className="h-1.5 w-16 mt-3 rounded-full" style={{ backgroundColor: accentColor }} />
      </div>

      <ProposalContactStrip
        data={data}
        labelClass="text-[10px] font-black uppercase tracking-widest mb-2"
        fromLabel="FROM"
        toLabel="TO"
      />

      <div className="space-y-5 mb-6">
        <ProposalSections
          data={data}
          accentColor={accentColor}
          renderSection={(title, content) => (
            <div className="border-l-4 pl-4" style={{ borderColor: accentColor }}>
              <h2 className="text-xs font-black uppercase tracking-wider mb-1.5" style={{ color: accentColor }}>
                {title}
              </h2>
              <div className="text-xs text-gray-700 whitespace-pre-line leading-relaxed font-medium">{content}</div>
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
