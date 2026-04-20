import type { InvoiceData, CalculatedTotals } from '../../../types/invoice';
import DocumentLineItems from '../DocumentLineItems';
import DocumentTotals from '../DocumentTotals';

interface SectionsProps {
  data: InvoiceData;
  accentColor: string;
  sectionClass?: string;
  headingClass?: string;
  bodyClass?: string;
  renderSection?: (title: string, content: string, index: number) => React.ReactNode;
}

const SECTIONS = [
  { key: 'executiveSummary', title: 'Executive Summary' },
  { key: 'projectScope', title: 'Project Scope' },
  { key: 'proposedSolution', title: 'Proposed Solution' },
  { key: 'deliverables', title: 'Deliverables' },
  { key: 'timeline', title: 'Timeline' },
] as const;

export function ProposalSections({
  data,
  accentColor,
  sectionClass = '',
  headingClass = '',
  bodyClass = 'text-xs text-gray-700 whitespace-pre-line leading-relaxed',
  renderSection,
}: SectionsProps) {
  return (
    <>
      {SECTIONS.map((s, i) => {
        const content = data[s.key];
        if (!content) return null;
        if (renderSection) return <div key={s.key}>{renderSection(s.title, content, i)}</div>;
        return (
          <div key={s.key} className={sectionClass}>
            <h2
              className={headingClass || 'text-[11px] font-bold uppercase tracking-wider mb-1.5'}
              style={headingClass ? undefined : { color: accentColor }}
            >
              {s.title}
            </h2>
            <div className={bodyClass}>{content}</div>
          </div>
        );
      })}
    </>
  );
}

interface TermsProps {
  data: InvoiceData;
  className?: string;
  headingClass?: string;
}

export function ProposalTerms({
  data,
  className = 'space-y-3 mb-6 text-xs text-gray-600',
  headingClass = 'text-[10px] font-semibold text-gray-500 uppercase tracking-wider mb-1',
}: TermsProps) {
  if (!data.notes && !data.paymentTerms && !data.bankDetails) return null;
  return (
    <div className={className}>
      {data.notes && (
        <div>
          <h3 className={headingClass}>Additional Notes</h3>
          <p className="whitespace-pre-line">{data.notes}</p>
        </div>
      )}
      {data.paymentTerms && (
        <div>
          <h3 className={headingClass}>Terms & Conditions</h3>
          <p className="whitespace-pre-line">{data.paymentTerms}</p>
        </div>
      )}
      {data.bankDetails && (
        <div>
          <h3 className={headingClass}>Payment Information</h3>
          <p className="whitespace-pre-line">{data.bankDetails}</p>
        </div>
      )}
    </div>
  );
}

interface SignatureProps {
  data?: InvoiceData;
  className?: string;
}

export function ProposalSignature({ data, className = '' }: SignatureProps) {
  return (
    <div className={`border-t border-gray-200 pt-5 mt-6 ${className}`}>
      <p className="text-[10px] text-gray-500 mb-5 text-center">
        By signing below, both parties agree to the terms outlined in this proposal.
      </p>
      <div className="grid grid-cols-2 gap-10">
        <div>
          {data?.clientSignatureImage ? (
            <img src={data.clientSignatureImage} alt="Client Signature" className="h-8 object-contain mb-1.5" />
          ) : (
            <div className="border-b border-dashed border-gray-300 mb-1.5 h-8" />
          )}
          <p className="text-[10px] font-medium text-gray-600">Client Signature</p>
          {data?.clientSignatureName && (
            <p className="text-[10px] text-gray-700 mt-0.5">{data.clientSignatureName}</p>
          )}
          <p className="text-[10px] text-gray-400 mt-1">
            {data?.clientSignatureDate ? `Date: ${data.clientSignatureDate}` : 'Date: ___________'}
          </p>
        </div>
        <div>
          {data?.authorizedSignatureImage ? (
            <img src={data.authorizedSignatureImage} alt="Authorized Signature" className="h-8 object-contain mb-1.5" />
          ) : (
            <div className="border-b border-dashed border-gray-300 mb-1.5 h-8" />
          )}
          <p className="text-[10px] font-medium text-gray-600">Authorized Signature</p>
          {data?.authorizedSignatureName && (
            <p className="text-[10px] text-gray-700 mt-0.5">{data.authorizedSignatureName}</p>
          )}
          <p className="text-[10px] text-gray-400 mt-1">
            {data?.authorizedSignatureDate ? `Date: ${data.authorizedSignatureDate}` : 'Date: ___________'}
          </p>
        </div>
      </div>
    </div>
  );
}

interface PricingProps {
  data: InvoiceData;
  totals: CalculatedTotals;
  accentColor: string;
  headingClass?: string;
}

export function ProposalPricing({ data, totals, accentColor, headingClass }: PricingProps) {
  const hasLineItems = data.items.some((item) => item.description.trim() !== '');
  if (!hasLineItems) return null;
  return (
    <div className="mb-6">
      <h2
        className={headingClass || 'text-[11px] font-bold uppercase tracking-wider mb-3'}
        style={headingClass ? undefined : { color: accentColor }}
      >
        Pricing
      </h2>
      <DocumentLineItems data={data} totals={totals} accentColor={accentColor} />
      <DocumentTotals data={data} totals={totals} accentColor={accentColor} />
    </div>
  );
}

interface ContactStripProps {
  data: InvoiceData;
  fromLabel?: string;
  toLabel?: string;
  className?: string;
  labelClass?: string;
}

export function ProposalContactStrip({
  data,
  fromLabel = 'From',
  toLabel = 'Prepared For',
  className = 'grid grid-cols-2 gap-6 mb-6 px-1',
  labelClass = 'text-[9px] font-semibold uppercase tracking-wider text-gray-400 mb-1.5',
}: ContactStripProps) {
  return (
    <div className={className}>
      <div>
        <h3 className={labelClass}>{fromLabel}</h3>
        <div className="text-xs text-gray-700 space-y-0.5">
          {data.from.name && <p className="font-medium text-gray-900">{data.from.name}</p>}
          {data.from.email && <p>{data.from.email}</p>}
          {data.from.phone && <p>{data.from.phone}</p>}
          {data.from.address && <p className="whitespace-pre-line">{data.from.address}</p>}
        </div>
      </div>
      <div>
        <h3 className={labelClass}>{toLabel}</h3>
        <div className="text-xs text-gray-700 space-y-0.5">
          {data.to.name && <p className="font-medium text-gray-900">{data.to.name}</p>}
          {data.to.email && <p>{data.to.email}</p>}
          {data.to.phone && <p>{data.to.phone}</p>}
          {data.to.address && <p className="whitespace-pre-line">{data.to.address}</p>}
        </div>
      </div>
    </div>
  );
}
