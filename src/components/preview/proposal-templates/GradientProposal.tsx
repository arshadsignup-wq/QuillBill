import type { InvoiceData, CalculatedTotals } from '../../../types/invoice';
import { getDocumentTitle } from '../../../lib/documentTitle';
import { ProposalSections, ProposalTerms, ProposalSignature, ProposalPricing, ProposalContactStrip } from './ProposalParts';

interface TemplateProps {
  data: InvoiceData;
  totals: CalculatedTotals;
}

export default function GradientProposal({ data, totals }: TemplateProps) {
  const accentColor = data.accentColor || '#2563eb';
  const title = getDocumentTitle(data);
  const gradient = `linear-gradient(135deg, ${accentColor}, ${accentColor}cc)`;

  return (
    <div className="a4-page bg-white text-gray-900" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
      {/* Gradient header */}
      <div
        className="-mx-[15mm] -mt-[15mm] px-[15mm] pt-[15mm] pb-8 mb-6"
        style={{ background: gradient }}
      >
        <div className="flex items-start justify-between">
          <div>
            {data.logo && (
              <img src={data.logo} alt="Logo" className="h-10 w-auto object-contain mb-3 rounded bg-white/20 p-1" />
            )}
            <h1 className="text-2xl font-bold text-white tracking-tight">{title}</h1>
            <div className="flex gap-6 text-white/70 text-[10px] mt-2">
              <span>Date: {data.issueDate}</span>
              <span>Valid Until: {data.dueDate}</span>
              {data.documentNumber && <span>Ref: {data.documentNumber}</span>}
            </div>
          </div>
          <div className="text-right text-white/80 text-xs space-y-0.5">
            {data.from.name && <div className="font-semibold text-white text-sm">{data.from.name}</div>}
            {data.from.email && <div>{data.from.email}</div>}
            {data.from.phone && <div>{data.from.phone}</div>}
          </div>
        </div>
      </div>

      <ProposalContactStrip data={data} toLabel="Prepared For" />

      {/* Sections with gradient left borders */}
      <div className="space-y-5 mb-6">
        <ProposalSections
          data={data}
          accentColor={accentColor}
          renderSection={(title, content) => (
            <div className="pl-4 py-0.5" style={{ borderLeft: `3px solid`, borderImage: `${gradient} 1` }}>
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
