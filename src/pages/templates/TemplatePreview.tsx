import type { DocumentMode, TemplateName } from '../../types/invoice';
import InvoiceDocument from '../../components/preview/InvoiceDocument';
import { PreviewHeadings } from '../../components/preview/DocTitle';
import { previewDocument } from './previewData';

/**
 * A live thumbnail of the real template.
 *
 * The galleries previously described fifteen templates in prose and showed
 * none of them, so choosing one meant opening the editor and cycling through
 * them blind. Rendering the actual component rather than a screenshot means
 * the preview can never drift from what the template now produces, and it
 * costs no image pipeline.
 *
 * Scaled to A4 width and cropped: the header, the party blocks and the first
 * line items are what actually distinguish these layouts.
 */
const A4_WIDTH_PX = 794;
const SCALE = 0.4;

export default function TemplatePreview({
  mode,
  template,
  label,
}: {
  mode: DocumentMode;
  template: TemplateName;
  label: string;
}) {
  const { data, totals } = previewDocument(mode, template);

  return (
    <div
      role="img"
      aria-label={`Preview of the ${label} template`}
      className="relative h-[300px] overflow-hidden rounded-t-lg border-b border-gray-200 bg-white"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-1/2"
        style={{
          width: A4_WIDTH_PX,
          marginLeft: -(A4_WIDTH_PX * SCALE) / 2,
          transform: `scale(${SCALE})`,
          transformOrigin: 'top left',
        }}
      >
        <PreviewHeadings>
          <InvoiceDocument data={data} totals={totals} />
        </PreviewHeadings>
      </div>
      {/* Signals that the page continues rather than ending mid-table. */}
      <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-white to-transparent" />
    </div>
  );
}
