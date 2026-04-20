import type { InvoiceData, CalculatedTotals } from '../../../types/invoice';
import { getDocumentTitle } from '../../../lib/documentTitle';
import { ProposalTerms, ProposalSignature, ProposalPricing } from './ProposalParts';

interface TemplateProps {
  data: InvoiceData;
  totals: CalculatedTotals;
}

const SECTIONS = [
  { key: 'executiveSummary' as const, title: 'Executive Summary' },
  { key: 'projectScope' as const, title: 'Project Scope' },
  { key: 'proposedSolution' as const, title: 'Proposed Solution' },
  { key: 'deliverables' as const, title: 'Deliverables' },
  { key: 'timeline' as const, title: 'Timeline' },
];

export default function CompactProposal({ data, totals }: TemplateProps) {
  const accentColor = data.accentColor || '#2563eb';
  const title = getDocumentTitle(data);
  const filledSections = SECTIONS.filter((s) => data[s.key]);

  return (
    <div className="a4-page bg-white text-gray-900 text-[11px]" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
      {/* Compact header */}
      <div className="flex items-center justify-between mb-3 pb-2 border-b-2" style={{ borderColor: accentColor }}>
        <div className="flex items-center gap-3">
          {data.logo && <img src={data.logo} alt="Logo" className="h-7 w-auto object-contain" />}
          <div>
            <h1 className="text-sm font-bold" style={{ color: accentColor }}>{title}</h1>
            <div className="text-[9px] text-gray-400">
              {data.documentNumber && <span>{data.documentNumber} · </span>}
              {data.issueDate} — Valid: {data.dueDate}
            </div>
          </div>
        </div>
      </div>

      {/* Compact contact - inline */}
      <div className="grid grid-cols-2 gap-3 mb-3 text-[10px]">
        <div>
          <span className="font-semibold text-gray-400 uppercase text-[8px] tracking-wider">From: </span>
          <span className="text-gray-700">{data.from.name}</span>
          {data.from.email && <span className="text-gray-400"> · {data.from.email}</span>}
        </div>
        <div>
          <span className="font-semibold text-gray-400 uppercase text-[8px] tracking-wider">To: </span>
          <span className="text-gray-700">{data.to.name}</span>
          {data.to.email && <span className="text-gray-400"> · {data.to.email}</span>}
        </div>
      </div>

      {/* 2-column sections layout */}
      <div className="grid grid-cols-2 gap-x-4 gap-y-2 mb-3">
        {filledSections.map((s) => (
          <div key={s.key} className={s.key === 'executiveSummary' ? 'col-span-2' : ''}>
            <h2 className="text-[10px] font-bold uppercase tracking-wider mb-0.5" style={{ color: accentColor }}>
              {s.title}
            </h2>
            <p className="text-[10px] text-gray-700 whitespace-pre-line leading-snug">{data[s.key]}</p>
          </div>
        ))}
      </div>

      <ProposalPricing data={data} totals={totals} accentColor={accentColor} />
      <ProposalTerms data={data} className="space-y-2 mb-3 text-[10px] text-gray-600" />
      <ProposalSignature data={data} />
    </div>
  );
}
