import type { InvoiceData, CalculatedTotals } from '../../../types/invoice';
import DocumentHeader from '../DocumentHeader';
import DocumentLineItems from '../DocumentLineItems';
import DocumentTotals from '../DocumentTotals';
import DocumentFooter from '../DocumentFooter';

interface TemplateProps {
  data: InvoiceData;
  totals: CalculatedTotals;
}

export default function MinimalTemplate({ data, totals }: TemplateProps) {
  return (
    <div className="a4-page flex flex-col" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
      <DocumentHeader data={data} accentColor={data.accentColor} />
      <DocumentLineItems data={data} totals={totals} accentColor={data.accentColor} />
      <DocumentTotals data={data} totals={totals} accentColor={data.accentColor} />
      <DocumentFooter data={data} />
    </div>
  );
}
