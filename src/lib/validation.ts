export function isValidInvoiceData(data: unknown): boolean {
  if (!data || typeof data !== 'object') return false;
  const d = data as Record<string, unknown>;

  if (d.mode !== 'invoice' && d.mode !== 'quote' && d.mode !== 'proposal') return false;
  if (typeof d.documentTitle !== 'string' && d.documentTitle !== undefined) return false;
  if (typeof d.documentNumber !== 'string') return false;
  if (typeof d.issueDate !== 'string') return false;
  if (typeof d.dueDate !== 'string') return false;
  if (typeof d.currency !== 'string') return false;

  if (!isValidContact(d.from)) return false;
  if (!isValidContact(d.to)) return false;

  if (!Array.isArray(d.items)) return false;
  for (const item of d.items) {
    if (!isValidLineItem(item)) return false;
  }

  if (d.discountType !== 'percentage' && d.discountType !== 'fixed') return false;
  if (typeof d.discountValue !== 'number') return false;
  if (typeof d.taxRate !== 'number') return false;
  if (typeof d.shippingCost !== 'number') return false;
  if (typeof d.notes !== 'string') return false;
  if (typeof d.paymentTerms !== 'string') return false;
  if (typeof d.bankDetails !== 'string' && d.bankDetails !== undefined) return false;
  if (typeof d.logo !== 'string') return false;
  const validTemplates = ['minimal','modern','classic','compact','elegant','bold','stripe','executive','clean','sidebar','professional','creative','letterhead','receipt','gradient'];
  if (!validTemplates.includes(d.template as string)) return false;
  if (typeof d.accentColor !== 'string') return false;
  if (d.projectScope !== undefined && typeof d.projectScope !== 'string') return false;
  if (d.deliverables !== undefined && typeof d.deliverables !== 'string') return false;
  if (d.timeline !== undefined && typeof d.timeline !== 'string') return false;
  if (d.executiveSummary !== undefined && typeof d.executiveSummary !== 'string') return false;
  if (d.proposedSolution !== undefined && typeof d.proposedSolution !== 'string') return false;
  if (d.clientSignatureName !== undefined && typeof d.clientSignatureName !== 'string') return false;
  if (d.authorizedSignatureName !== undefined && typeof d.authorizedSignatureName !== 'string') return false;
  if (d.clientSignatureDate !== undefined && typeof d.clientSignatureDate !== 'string') return false;
  if (d.authorizedSignatureDate !== undefined && typeof d.authorizedSignatureDate !== 'string') return false;
  if (d.clientSignatureImage !== undefined && typeof d.clientSignatureImage !== 'string') return false;
  if (d.authorizedSignatureImage !== undefined && typeof d.authorizedSignatureImage !== 'string') return false;

  return true;
}

function isValidContact(c: unknown): boolean {
  if (!c || typeof c !== 'object') return false;
  const contact = c as Record<string, unknown>;
  return (
    typeof contact.name === 'string' &&
    typeof contact.email === 'string' &&
    typeof contact.phone === 'string' &&
    typeof contact.address === 'string'
  );
}

function isValidLineItem(item: unknown): boolean {
  if (!item || typeof item !== 'object') return false;
  const li = item as Record<string, unknown>;
  return (
    typeof li.id === 'string' &&
    typeof li.description === 'string' &&
    typeof li.quantity === 'number' &&
    typeof li.rate === 'number'
  );
}
