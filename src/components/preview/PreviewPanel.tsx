import { useRef, useEffect, useState } from 'react';
import { useInvoiceContext } from '../../context/InvoiceContext';
import InvoiceDocument from './InvoiceDocument';

export default function PreviewPanel() {
  const { data, totals } = useInvoiceContext();
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0.5);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new ResizeObserver((entries) => {
      const entry = entries[0];
      if (!entry) return;
      const containerWidth = entry.contentRect.width;
      const newScale = Math.min((containerWidth - 32) / 794, 1);
      setScale(Math.max(newScale, 0.3));
    });

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="h-full overflow-auto bg-gray-100 p-4 flex justify-center">
      <div
        style={{
          transform: `scale(${scale})`,
          transformOrigin: 'top center',
          width: '210mm',
          minHeight: '297mm',
        }}
      >
        <div className="shadow-xl rounded-sm">
          <InvoiceDocument data={data} totals={totals} />
        </div>
      </div>
    </div>
  );
}
