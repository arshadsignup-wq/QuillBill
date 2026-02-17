import { useInvoiceContext } from '../../context/InvoiceContext';

const presets = [
  '#2563eb', '#7c3aed', '#db2777', '#dc2626',
  '#ea580c', '#ca8a04', '#16a34a', '#0d9488',
  '#0891b2', '#475569', '#1e293b', '#000000',
];

export default function ColorPicker() {
  const { data, dispatch } = useInvoiceContext();

  return (
    <div className="flex flex-col gap-2">
      <label className="text-xs font-medium text-gray-600">Accent Color</label>
      <div className="flex items-center gap-2 flex-wrap">
        {presets.map((color) => (
          <button
            key={color}
            onClick={() => dispatch({ type: 'SET_ACCENT_COLOR', payload: color })}
            className={`h-7 w-7 rounded-full border-2 transition-all cursor-pointer ${
              data.accentColor === color
                ? 'border-gray-900 scale-110'
                : 'border-transparent hover:scale-105'
            }`}
            style={{ backgroundColor: color }}
          />
        ))}
        <input
          type="color"
          value={data.accentColor}
          onChange={(e) => dispatch({ type: 'SET_ACCENT_COLOR', payload: e.target.value })}
          className="h-7 w-7 rounded-full cursor-pointer border-0 p-0"
        />
      </div>
    </div>
  );
}
