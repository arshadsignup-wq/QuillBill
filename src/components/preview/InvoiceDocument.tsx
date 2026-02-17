import type { InvoiceData, CalculatedTotals, TemplateName } from '../../types/invoice';
import MinimalTemplate from './templates/MinimalTemplate';
import ModernTemplate from './templates/ModernTemplate';
import ClassicTemplate from './templates/ClassicTemplate';
import CompactTemplate from './templates/CompactTemplate';
import ElegantTemplate from './templates/ElegantTemplate';
import BoldTemplate from './templates/BoldTemplate';
import StripeTemplate from './templates/StripeTemplate';
import ExecutiveTemplate from './templates/ExecutiveTemplate';
import CleanTemplate from './templates/CleanTemplate';
import SidebarTemplate from './templates/SidebarTemplate';
import ProfessionalTemplate from './templates/ProfessionalTemplate';
import CreativeTemplate from './templates/CreativeTemplate';
import LetterheadTemplate from './templates/LetterheadTemplate';
import ReceiptTemplate from './templates/ReceiptTemplate';
import GradientTemplate from './templates/GradientTemplate';

interface InvoiceDocumentProps {
  data: InvoiceData;
  totals: CalculatedTotals;
  printable?: boolean;
}

const templateMap: Record<TemplateName, typeof MinimalTemplate> = {
  minimal: MinimalTemplate,
  modern: ModernTemplate,
  classic: ClassicTemplate,
  compact: CompactTemplate,
  elegant: ElegantTemplate,
  bold: BoldTemplate,
  stripe: StripeTemplate,
  executive: ExecutiveTemplate,
  clean: CleanTemplate,
  sidebar: SidebarTemplate,
  professional: ProfessionalTemplate,
  creative: CreativeTemplate,
  letterhead: LetterheadTemplate,
  receipt: ReceiptTemplate,
  gradient: GradientTemplate,
};

export default function InvoiceDocument({ data, totals, printable }: InvoiceDocumentProps) {
  const Template = templateMap[data.template] || MinimalTemplate;

  return (
    <div id={printable ? 'printable-document' : undefined}>
      <Template data={data} totals={totals} />
    </div>
  );
}
