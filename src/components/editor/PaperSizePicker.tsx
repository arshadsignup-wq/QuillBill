import { useInvoiceContext } from '../../context/InvoiceContext';
import type { PaperSize } from '../../types/invoice';
import Select from '../ui/Select';

const OPTIONS = [
  { value: 'a4', label: 'A4 (210 × 297 mm)' },
  { value: 'letter', label: 'Letter (8.5 × 11 in)' },
];

export default function PaperSizePicker() {
  const { data, dispatch } = useInvoiceContext();

  return (
    <Select
      id="paper-size"
      label="Paper size"
      options={OPTIONS}
      value={data.paperSize}
      onChange={(e) => dispatch({ type: 'SET_PAPER_SIZE', payload: e.target.value as PaperSize })}
    />
  );
}
