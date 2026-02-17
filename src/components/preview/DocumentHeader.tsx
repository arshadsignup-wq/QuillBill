import type { InvoiceData } from '../../types/invoice';
import { formatDate } from '../../lib/format';
import { getDocumentTitle } from '../../lib/documentTitle';

interface DocumentHeaderProps {
  data: InvoiceData;
  accentColor: string;
}

export default function DocumentHeader({ data, accentColor }: DocumentHeaderProps) {
  const label = getDocumentTitle(data);

  return (
    <div className="print-break-avoid">
      <div className="flex justify-between items-start mb-8">
        <div>
          {data.logo && (
            <img src={data.logo} alt="Logo" className="h-12 w-auto object-contain mb-3" />
          )}
          <div className="text-xs text-gray-500 space-y-0.5">
            {data.from.name && <div className="font-semibold text-sm text-gray-900">{data.from.name}</div>}
            {data.from.email && <div>{data.from.email}</div>}
            {data.from.phone && <div>{data.from.phone}</div>}
            {data.from.address && <div className="whitespace-pre-line">{data.from.address}</div>}
          </div>
        </div>
        <div className="text-right">
          <h1 className="text-2xl font-bold tracking-tight" style={{ color: accentColor }}>
            {label}
          </h1>
          <div className="text-xs text-gray-500 mt-2 space-y-0.5">
            <div><span className="font-medium text-gray-700">No:</span> {data.documentNumber}</div>
            <div><span className="font-medium text-gray-700">Date:</span> {formatDate(data.issueDate)}</div>
            <div><span className="font-medium text-gray-700">Due:</span> {formatDate(data.dueDate)}</div>
          </div>
        </div>
      </div>

      <div className="mb-6 p-3 rounded-lg bg-gray-50">
        <div className="text-[10px] font-medium text-gray-400 uppercase tracking-wider mb-1">Bill To</div>
        <div className="text-xs text-gray-600 space-y-0.5">
          {data.to.name && <div className="font-semibold text-sm text-gray-900">{data.to.name}</div>}
          {data.to.email && <div>{data.to.email}</div>}
          {data.to.phone && <div>{data.to.phone}</div>}
          {data.to.address && <div className="whitespace-pre-line">{data.to.address}</div>}
        </div>
      </div>
    </div>
  );
}
