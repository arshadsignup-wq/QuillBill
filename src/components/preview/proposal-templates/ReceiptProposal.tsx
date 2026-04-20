import type { InvoiceData, CalculatedTotals } from '../../../types/invoice';
import { getDocumentTitle } from '../../../lib/documentTitle';
import { ProposalSections, ProposalTerms, ProposalSignature, ProposalPricing } from './ProposalParts';

interface TemplateProps {
  data: InvoiceData;
  totals: CalculatedTotals;
}

export default function ReceiptProposal({ data, totals }: TemplateProps) {
  const accentColor = data.accentColor || '#2563eb';
  const title = getDocumentTitle(data);

  return (
    <div className="a4-page bg-white text-gray-900" style={{ fontFamily: "'Courier New', monospace" }}>
      {/* Centered header */}
      <div className="text-center mb-6">
        {data.logo && <img src={data.logo} alt="Logo" className="h-10 w-auto object-contain mx-auto mb-2" />}
        <h1 className="text-xl font-bold tracking-wider">{title}</h1>
        <div className="text-[10px] text-gray-500 mt-1">
          {data.documentNumber && <span>{data.documentNumber} · </span>}
          {data.issueDate}
        </div>
        <div className="text-[10px] text-gray-400">Valid until {data.dueDate}</div>
        <div className="border-b-2 border-dotted border-gray-300 mt-3" />
      </div>

      {/* Contact info centered */}
      <div className="grid grid-cols-2 gap-6 mb-6 text-center">
        <div>
          <div className="text-[9px] font-bold uppercase tracking-wider text-gray-400 mb-1">From</div>
          <div className="text-xs text-gray-700 space-y-0.5">
            {data.from.name && <p className="font-medium">{data.from.name}</p>}
            {data.from.email && <p>{data.from.email}</p>}
            {data.from.phone && <p>{data.from.phone}</p>}
          </div>
        </div>
        <div>
          <div className="text-[9px] font-bold uppercase tracking-wider text-gray-400 mb-1">Prepared For</div>
          <div className="text-xs text-gray-700 space-y-0.5">
            {data.to.name && <p className="font-medium">{data.to.name}</p>}
            {data.to.email && <p>{data.to.email}</p>}
            {data.to.phone && <p>{data.to.phone}</p>}
          </div>
        </div>
      </div>

      <div className="border-b-2 border-dotted border-gray-300 mb-6" />

      {/* Sections with centered titles */}
      <div className="space-y-4 mb-6">
        <ProposalSections
          data={data}
          accentColor={accentColor}
          renderSection={(title, content) => (
            <div>
              <h2 className="text-[11px] font-bold uppercase tracking-wider text-center mb-1.5">{title}</h2>
              <div className="text-xs text-gray-700 whitespace-pre-line leading-relaxed">{content}</div>
              <div className="border-b border-dotted border-gray-200 mt-3" />
            </div>
          )}
        />
      </div>

      <ProposalPricing data={data} totals={totals} accentColor={accentColor} />
      <ProposalTerms data={data} headingClass="text-[10px] font-bold uppercase tracking-wider text-center text-gray-500 mb-1" />
      <ProposalSignature data={data} />
    </div>
  );
}
