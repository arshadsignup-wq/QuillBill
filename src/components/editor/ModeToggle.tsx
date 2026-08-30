import type { DocumentMode } from '../../types/invoice';
import { useInvoiceContext } from '../../context/InvoiceContext';
import { DOCUMENT_MODES, MODE_KEYS } from '../../constants/documentModes';

export default function ModeToggle() {
  const { data, dispatch } = useInvoiceContext();

  const toggle = (mode: DocumentMode) => {
    dispatch({ type: 'SET_MODE', payload: mode });
  };

  return (
    // Six modes no longer fit on one line on a phone, so the group wraps
    // instead of overflowing off the edge of the panel.
    <div className="inline-flex flex-wrap gap-1 rounded-lg bg-gray-100 p-1">
      {MODE_KEYS.map((mode) => (
        <button
          key={mode}
          onClick={() => toggle(mode)}
          aria-pressed={data.mode === mode}
          className={`rounded-md px-2.5 sm:px-3 py-1.5 text-xs sm:text-sm font-medium transition-all cursor-pointer ${
            data.mode === mode
              ? 'bg-white text-gray-900 shadow-sm'
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          {DOCUMENT_MODES[mode].label}
        </button>
      ))}
    </div>
  );
}
