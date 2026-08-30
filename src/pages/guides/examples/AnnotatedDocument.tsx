import type { DocumentMode } from '../../../types/invoice';
import InvoiceDocument from '../../../components/preview/InvoiceDocument';
import { PreviewHeadings } from '../../../components/preview/DocTitle';
import { previewDocument } from '../../templates/previewData';

/**
 * A filled-in document rendered at full size, with the fields called out
 * beside it.
 *
 * "Invoice example" and "sample invoice" are searches for something to look
 * at. Describing the fields in prose and showing none of them answers a
 * different question than the one being asked. Rendering the real component
 * means the example cannot drift from what the tool actually produces.
 */
const A4_WIDTH_PX = 794;

interface Callout {
  label: string;
  body: string;
}

export default function AnnotatedDocument({
  mode,
  callouts,
}: {
  mode: DocumentMode;
  callouts: Callout[];
}) {
  const { data, totals } = previewDocument(mode, 'modern');

  return (
    <section className="max-w-5xl mx-auto px-4 pt-10">
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_18rem]">
        <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
          <div style={{ width: A4_WIDTH_PX }} className="mx-auto">
            <PreviewHeadings>
              <InvoiceDocument data={data} totals={totals} />
            </PreviewHeadings>
          </div>
        </div>
        <aside className="lg:sticky lg:top-6 lg:self-start">
          <h2 className="text-sm font-bold text-gray-900">What each part is doing</h2>
          <dl className="mt-3 space-y-3">
            {callouts.map((c) => (
              <div key={c.label} className="rounded-lg border border-gray-200 bg-white p-3">
                <dt className="text-xs font-semibold text-gray-900">{c.label}</dt>
                <dd className="mt-1 text-xs text-gray-600 leading-relaxed">{c.body}</dd>
              </div>
            ))}
          </dl>
        </aside>
      </div>
    </section>
  );
}
