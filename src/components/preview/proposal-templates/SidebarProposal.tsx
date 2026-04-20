import type { InvoiceData, CalculatedTotals } from '../../../types/invoice';
import { getDocumentTitle } from '../../../lib/documentTitle';
import { ProposalSections, ProposalTerms, ProposalSignature, ProposalPricing } from './ProposalParts';

interface TemplateProps {
  data: InvoiceData;
  totals: CalculatedTotals;
}

export default function SidebarProposal({ data, totals }: TemplateProps) {
  const accentColor = data.accentColor || '#2563eb';
  const title = getDocumentTitle(data);

  return (
    <div className="a4-page bg-white text-gray-900 p-0" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
      <div className="flex min-h-[297mm]">
        {/* Left sidebar */}
        <div className="w-[65mm] flex-shrink-0 p-6 text-white flex flex-col" style={{ backgroundColor: accentColor }}>
          {data.logo && (
            <img src={data.logo} alt="Logo" className="h-10 w-auto object-contain self-start mb-4 rounded bg-white/20 p-1" />
          )}
          <h1 className="text-xl font-bold tracking-tight mb-1">{title}</h1>
          {data.documentNumber && <div className="text-white/60 text-[10px] mb-4">{data.documentNumber}</div>}

          <div className="mb-4">
            <div className="text-[9px] font-semibold uppercase tracking-wider text-white/50 mb-1">Date</div>
            <div className="text-xs text-white/80">{data.issueDate}</div>
          </div>
          <div className="mb-4">
            <div className="text-[9px] font-semibold uppercase tracking-wider text-white/50 mb-1">Valid Until</div>
            <div className="text-xs text-white/80">{data.dueDate}</div>
          </div>
          <div className="mb-4">
            <div className="text-[9px] font-semibold uppercase tracking-wider text-white/50 mb-1">From</div>
            <div className="text-xs text-white/80 space-y-0.5">
              {data.from.name && <div className="font-semibold text-white">{data.from.name}</div>}
              {data.from.email && <div>{data.from.email}</div>}
              {data.from.phone && <div>{data.from.phone}</div>}
              {data.from.address && <div className="whitespace-pre-line">{data.from.address}</div>}
            </div>
          </div>
        </div>

        {/* Right content */}
        <div className="flex-1 p-8 flex flex-col">
          {/* To */}
          <div className="mb-6">
            <div className="text-[9px] font-semibold uppercase tracking-wider text-gray-400 mb-1.5">Prepared For</div>
            <div className="text-xs text-gray-700 space-y-0.5">
              {data.to.name && <p className="font-medium text-gray-900">{data.to.name}</p>}
              {data.to.email && <p>{data.to.email}</p>}
              {data.to.phone && <p>{data.to.phone}</p>}
              {data.to.address && <p className="whitespace-pre-line">{data.to.address}</p>}
            </div>
          </div>

          <div className="space-y-4 mb-6">
            <ProposalSections
              data={data}
              accentColor={accentColor}
              sectionClass="border-l-2 pl-3"
              headingClass="text-[11px] font-bold uppercase tracking-wider mb-1.5"
            />
          </div>

          <ProposalPricing data={data} totals={totals} accentColor={accentColor} />

          <div className="mt-auto">
            <ProposalTerms data={data} />
            <ProposalSignature data={data} />
          </div>
        </div>
      </div>
    </div>
  );
}
