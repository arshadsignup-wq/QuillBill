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
import MinimalProposal from './proposal-templates/MinimalProposal';
import ModernProposal from './proposal-templates/ModernProposal';
import ClassicProposal from './proposal-templates/ClassicProposal';
import CompactProposal from './proposal-templates/CompactProposal';
import ElegantProposal from './proposal-templates/ElegantProposal';
import BoldProposal from './proposal-templates/BoldProposal';
import StripeProposal from './proposal-templates/StripeProposal';
import ExecutiveProposal from './proposal-templates/ExecutiveProposal';
import CleanProposal from './proposal-templates/CleanProposal';
import SidebarProposal from './proposal-templates/SidebarProposal';
import ProfessionalProposal from './proposal-templates/ProfessionalProposal';
import CreativeProposal from './proposal-templates/CreativeProposal';
import LetterheadProposal from './proposal-templates/LetterheadProposal';
import ReceiptProposal from './proposal-templates/ReceiptProposal';
import GradientProposal from './proposal-templates/GradientProposal';

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

const proposalTemplateMap: Record<TemplateName, typeof MinimalProposal> = {
  minimal: MinimalProposal,
  modern: ModernProposal,
  classic: ClassicProposal,
  compact: CompactProposal,
  elegant: ElegantProposal,
  bold: BoldProposal,
  stripe: StripeProposal,
  executive: ExecutiveProposal,
  clean: CleanProposal,
  sidebar: SidebarProposal,
  professional: ProfessionalProposal,
  creative: CreativeProposal,
  letterhead: LetterheadProposal,
  receipt: ReceiptProposal,
  gradient: GradientProposal,
};

export default function InvoiceDocument({ data, totals, printable }: InvoiceDocumentProps) {
  const isProposal = data.mode === 'proposal';
  const map = isProposal ? proposalTemplateMap : templateMap;
  const Template = map[data.template] || (isProposal ? MinimalProposal : MinimalTemplate);

  return (
    <div id={printable ? 'printable-document' : undefined}>
      <Template data={data} totals={totals} />
    </div>
  );
}
