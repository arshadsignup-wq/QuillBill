import type { InvoiceData, DocumentMode, TemplateName } from '../../types/invoice';
import { calculateTotals } from '../../lib/calculations';

/**
 * Sample document used to draw the gallery thumbnails.
 *
 * Fixed dates and ids rather than `new Date()` / nanoid(): these render during
 * the build, and a document that changes every deploy would rewrite all three
 * gallery pages on every build for no reason.
 */
function sampleFor(mode: DocumentMode, template: TemplateName): InvoiceData {
  const isProposal = mode === 'proposal';
  return {
    mode,
    documentTitle: '',
    documentNumber: isProposal ? 'PROP-014' : mode === 'quote' ? 'QUO-089' : 'INV-2041',
    issueDate: '2026-03-12',
    dueDate: '2026-04-11',
    currency: 'USD',
    from: {
      name: 'Meridian Studio',
      email: 'billing@meridianstudio.com',
      phone: '+1 (415) 555-0142',
      address: '840 Bryant Street, Suite 300\nSan Francisco, CA 94103',
    },
    to: {
      name: 'Northwind Coffee Roasters',
      email: 'accounts@northwindroasters.com',
      phone: '+1 (503) 555-0188',
      address: '1123 SE Division Street\nPortland, OR 97202',
    },
    items: [
      { id: 's1', description: 'Brand identity system and logo suite', quantity: 1, rate: 4200 },
      { id: 's2', description: 'Packaging design — three SKUs', quantity: 3, rate: 850 },
      { id: 's3', description: 'Photography direction (day rate)', quantity: 2, rate: 1150 },
    ],
    discountType: 'percentage',
    discountValue: 5,
    taxRate: 8.5,
    shippingCost: 0,
    notes: 'Thank you for your business. Please reference the document number with payment.',
    paymentTerms: 'Net 30. A 1.5% monthly charge applies to balances past due.',
    bankDetails: 'Pacific Commerce Bank\nRouting 121000358 · Account 5540192837',
    logo: '',
    template,
    accentColor: '#2563eb',
    paperSize: 'a4',
    projectScope: 'A complete brand identity for the Northwind retail line, covering logo, packaging and in-store collateral.',
    deliverables: 'Logo suite in all formats\nPackaging artwork for three SKUs\nBrand guidelines document\nPhotography art direction',
    timeline: 'Discovery — 1 week\nConcepts — 2 weeks\nRefinement — 2 weeks\nFinal artwork — 1 week',
    executiveSummary:
      'Northwind is expanding from wholesale into retail. This proposal covers the identity work needed to make that shelf-ready.',
    proposedSolution:
      'We will develop a single flexible identity system that carries across bags, boxes and store signage without redrawing it each time.',
    clientSignatureName: '',
    authorizedSignatureName: '',
    clientSignatureDate: '',
    authorizedSignatureDate: '',
    clientSignatureImage: '',
    authorizedSignatureImage: '',
  };
}

export function previewDocument(mode: DocumentMode, template: TemplateName) {
  const data = sampleFor(mode, template);
  return { data, totals: calculateTotals(data) };
}
