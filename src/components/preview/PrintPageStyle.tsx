import { createPortal } from 'react-dom';
import type { PaperSize } from '../../types/invoice';

/**
 * index.css hard-coded `@page { size: A4 }`, while the site copy promised "a
 * clean A4 or Letter PDF". Letter was never actually reachable, so US users
 * printed A4 pages onto Letter paper and got the document rescaled.
 *
 * @page cannot read a CSS custom property, so the rule is injected at runtime
 * into <head>, after the stylesheet, where it wins the cascade.
 */
export default function PrintPageStyle({ paperSize }: { paperSize: PaperSize }) {
  if (typeof document === 'undefined') return null;

  const size = paperSize === 'letter' ? 'Letter' : 'A4';

  return createPortal(
    <style>{`@media print { @page { size: ${size}; margin: 0; } }`}</style>,
    document.head,
  );
}
