import type { DocumentMode } from '../../types/invoice';
import { useInvoiceContext } from '../../context/InvoiceContext';

export default function ModeToggle() {
  const { data, dispatch } = useInvoiceContext();

  const toggle = (mode: DocumentMode) => {
    dispatch({ type: 'SET_MODE', payload: mode });
  };

  return (
    <div className="inline-flex rounded-lg bg-gray-100 p-1">
      {(['invoice', 'quote', 'proposal'] as const).map((mode) => {
        const labels: Record<typeof mode, string> = {
          invoice: 'Invoice',
          quote: 'Quotation',
          proposal: 'Proposal',
        };
        return (
          <button
            key={mode}
            onClick={() => toggle(mode)}
            className={`rounded-md px-4 py-1.5 text-sm font-medium transition-all cursor-pointer ${
              data.mode === mode
                ? 'bg-white text-gray-900 shadow-sm'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            {labels[mode]}
          </button>
        );
      })}
    </div>
  );
}
