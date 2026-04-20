import ModeToggle from './ModeToggle';
import DocumentMeta from './DocumentMeta';
import ContactCard from './ContactCard';
import LineItemsTable from './LineItemsTable';
import TotalsEditor from './TotalsEditor';
import NotesEditor from './NotesEditor';
import BrandingEditor from './BrandingEditor';
import ProposalEditor from './ProposalEditor';
import { useInvoiceContext } from '../../context/InvoiceContext';

export default function EditorPanel() {
  const { data } = useInvoiceContext();

  return (
    <div className="flex flex-col gap-5 p-5 overflow-y-auto custom-scrollbar h-full">
      <div className="flex items-center justify-between">
        <ModeToggle />
      </div>
      <DocumentMeta />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <ContactCard type="from" />
        <ContactCard type="to" />
      </div>
      {data.mode === 'proposal' && <ProposalEditor />}
      <LineItemsTable />
      <TotalsEditor />
      <NotesEditor />
      <BrandingEditor />
    </div>
  );
}
