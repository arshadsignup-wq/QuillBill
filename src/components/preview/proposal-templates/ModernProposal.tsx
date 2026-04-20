import type { InvoiceData, CalculatedTotals } from '../../../types/invoice';
import { getDocumentTitle } from '../../../lib/documentTitle';
import { ProposalSections, ProposalTerms, ProposalSignature, ProposalPricing, ProposalContactStrip } from './ProposalParts';

interface TemplateProps {
  data: InvoiceData;
  totals: CalculatedTotals;
}

export default function ModernProposal({ data, totals }: TemplateProps) {
  const accentColor = data.accentColor || '#2563eb';
  const title = getDocumentTitle(data);

  return (
    <div className="a4-page bg-white text-gray-900" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
      {/* Cover / Hero Banner */}
      <div
        className="rounded-lg px-8 py-7 mb-6 relative overflow-hidden"
        style={{ backgroundColor: accentColor }}
      >
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-white tracking-wide mb-3">{title}</h1>
            <div className="flex gap-8 text-white/90 text-[11px]">
              <div>
                <span className="text-white/60 uppercase text-[9px] tracking-wider block mb-0.5">Prepared for</span>
                <span className="font-medium">{data.to.name || '—'}</span>
              </div>
              <div>
                <span className="text-white/60 uppercase text-[9px] tracking-wider block mb-0.5">Prepared by</span>
                <span className="font-medium">{data.from.name || '—'}</span>
              </div>
            </div>
            <div className="flex gap-6 text-white/70 text-[10px] mt-3">
              <span>Date: {data.issueDate}</span>
              <span>Valid Until: {data.dueDate}</span>
              {data.documentNumber && <span>Ref: {data.documentNumber}</span>}
            </div>
          </div>
          {data.logo && (
            <div className="rounded bg-white/20 p-1.5 flex-shrink-0 ml-4">
              <img src={data.logo} alt="Logo" className="h-12 w-auto object-contain" />
            </div>
          )}
        </div>
      </div>

      <ProposalContactStrip data={data} />

      <div className="space-y-5 mb-6">
        <ProposalSections
          data={data}
          accentColor={accentColor}
          renderSection={(title, content, index) => (
            <div
              className="pl-4"
              style={{
                borderLeft: `3px solid ${accentColor}`,
                ...(index === 0 ? { backgroundColor: accentColor + '08', borderRadius: '0 8px 8px 0', padding: '12px 12px 12px 16px' } : {}),
              }}
            >
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
