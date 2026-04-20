import { useInvoiceContext } from '../../context/InvoiceContext';
import type { TemplateName } from '../../types/invoice';

const invoiceTemplates: { name: TemplateName; label: string; description: string }[] = [
  { name: 'minimal', label: 'Minimal', description: 'Clean and simple' },
  { name: 'modern', label: 'Modern', description: 'Colored header band' },
  { name: 'classic', label: 'Classic', description: 'Formal, bordered' },
  { name: 'compact', label: 'Compact', description: 'Space-efficient' },
  { name: 'elegant', label: 'Elegant', description: 'Serif, refined' },
  { name: 'bold', label: 'Bold', description: 'Big type, strong' },
  { name: 'stripe', label: 'Stripe', description: 'Left accent, rows' },
  { name: 'executive', label: 'Executive', description: 'Dark header' },
  { name: 'clean', label: 'Clean', description: 'Ultra minimal' },
  { name: 'sidebar', label: 'Sidebar', description: 'Colored side panel' },
  { name: 'professional', label: 'Professional', description: 'Corporate look' },
  { name: 'creative', label: 'Creative', description: 'Rounded, playful' },
  { name: 'letterhead', label: 'Letterhead', description: 'Top & bottom bands' },
  { name: 'receipt', label: 'Receipt', description: 'Monospace, centered' },
  { name: 'gradient', label: 'Gradient', description: 'Gradient header' },
];

const proposalTemplates: { name: TemplateName; label: string; description: string }[] = [
  { name: 'minimal', label: 'Minimal', description: 'Clean, subtle dividers' },
  { name: 'modern', label: 'Modern', description: 'Accent banner & borders' },
  { name: 'classic', label: 'Classic', description: 'Formal double frame' },
  { name: 'compact', label: 'Compact', description: '2-col, space-efficient' },
  { name: 'elegant', label: 'Elegant', description: 'Serif, thin underlines' },
  { name: 'bold', label: 'Bold', description: 'Giant title, heavy' },
  { name: 'stripe', label: 'Stripe', description: 'Alternating stripes' },
  { name: 'executive', label: 'Executive', description: 'Dark header, formal' },
  { name: 'clean', label: 'Clean', description: 'Ultra minimal text' },
  { name: 'sidebar', label: 'Sidebar', description: 'Colored side panel' },
  { name: 'professional', label: 'Professional', description: 'Numbered sections' },
  { name: 'creative', label: 'Creative', description: 'Rounded cards' },
  { name: 'letterhead', label: 'Letterhead', description: 'Top & bottom bands' },
  { name: 'receipt', label: 'Receipt', description: 'Monospace, centered' },
  { name: 'gradient', label: 'Gradient', description: 'Gradient borders' },
];

export default function TemplatePicker() {
  const { data, dispatch } = useInvoiceContext();
  const templates = data.mode === 'proposal' ? proposalTemplates : invoiceTemplates;

  return (
    <div className="flex flex-col gap-2">
      <label className="text-xs font-medium text-gray-600">Template</label>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 max-h-[280px] overflow-y-auto custom-scrollbar pr-1">
        {templates.map((t) => (
          <button
            key={t.name}
            onClick={() => dispatch({ type: 'SET_TEMPLATE', payload: t.name })}
            className={`rounded-lg border-2 p-2.5 text-left transition-all cursor-pointer ${
              data.template === t.name
                ? 'border-brand bg-brand-light/30'
                : 'border-gray-200 hover:border-gray-300'
            }`}
          >
            <div className="text-xs font-medium text-gray-900">{t.label}</div>
            <div className="text-[10px] text-gray-500 mt-0.5">{t.description}</div>
          </button>
        ))}
      </div>
    </div>
  );
}
