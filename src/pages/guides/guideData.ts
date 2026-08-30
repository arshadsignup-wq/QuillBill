import type { GuideConfig } from './types';
import { howToCreateInvoiceGuide, invoiceVsQuotationGuide } from './core';
import { paymentTermsGuide, chasePaymentGuide } from './gettingPaid';
import { writeQuotationGuide, writeProposalGuide } from './writing';
import { proformaInvoiceGuide, purchaseOrderGuide, freelanceInvoicingGuide } from './invoicing';
import {
  onlineInvoiceGeneratorGuide,
  freeInvoiceSoftwareGuide,
  createInvoiceFreeGuide,
  freeInvoiceTemplateGuide,
  invoiceGeneratorAlternativesGuide,
} from './invoiceTools';
import {
  quotationGeneratorGuide,
  freeQuotationTemplateGuide,
  freeQuotationSoftwareGuide,
  requestQuotationGuide,
} from './quotationTools';
import {
  aiProposalGeneratorGuide,
  proposalGenerationSoftwareGuide,
  freeProposalTemplateGuide,
  businessProposalFormatGuide,
} from './proposalTools';
import {
  quotationMarksGuide,
  quotationsAboutChangeGuide,
  randomQuoteGeneratorGuide,
} from './writingCluster';
import {
  indiaGstInvoiceGuide,
  uaeVatInvoiceGuide,
  philippinesInvoiceGuide,
  nigeriaInvoiceGuide,
  euVatInvoiceGuide,
  ukVatInvoiceGuide,
  australiaTaxInvoiceGuide,
  canadaGstHstInvoiceGuide,
  usaInvoiceGuide,
} from './countries';
import {
  photographerInvoiceGuide,
  tradesInvoiceGuide,
  consultantInvoiceGuide,
  designerInvoiceGuide,
  developerInvoiceGuide,
  tutorInvoiceGuide,
} from './professions';
import {
  depositInvoiceGuide,
  milestoneInvoiceGuide,
  creditNoteGuide,
  disputedInvoiceGuide,
} from './paymentProblems';
import {
  vatCalculatorGuide,
  lateFeeCalculatorGuide,
  hourlyRateCalculatorGuide,
  dueDateCalculatorGuide,
} from './calculatorGuides';
import { invoiceExampleGuide, quotationExampleGuide } from './exampleGuides';
import {
  receiptTemplateGuide,
  purchaseOrderTemplateGuide,
  timesheetTemplateGuide,
} from './documentTypes';
import {
  zohoInvoiceAlternativeGuide,
  waveInvoicingAlternativeGuide,
} from './comparisons';
import {
  invoiceNumberingGuide,
  retainerInvoiceGuide,
  invoiceEmailGuide,
  recordKeepingGuide,
  internationalInvoiceGuide,
} from './operations';

export type { GuideConfig, GuideSection } from './types';

export { howToCreateInvoiceGuide, invoiceVsQuotationGuide };

export {
  paymentTermsGuide,
  chasePaymentGuide,
  writeQuotationGuide,
  writeProposalGuide,
  proformaInvoiceGuide,
  purchaseOrderGuide,
  freelanceInvoicingGuide,
  onlineInvoiceGeneratorGuide,
  freeInvoiceSoftwareGuide,
  createInvoiceFreeGuide,
  freeInvoiceTemplateGuide,
  invoiceGeneratorAlternativesGuide,
  quotationGeneratorGuide,
  freeQuotationTemplateGuide,
  freeQuotationSoftwareGuide,
  requestQuotationGuide,
  aiProposalGeneratorGuide,
  proposalGenerationSoftwareGuide,
  freeProposalTemplateGuide,
  businessProposalFormatGuide,
  quotationMarksGuide,
  quotationsAboutChangeGuide,
  randomQuoteGeneratorGuide,
  indiaGstInvoiceGuide,
  uaeVatInvoiceGuide,
  philippinesInvoiceGuide,
  nigeriaInvoiceGuide,
  euVatInvoiceGuide,
  ukVatInvoiceGuide,
  australiaTaxInvoiceGuide,
  canadaGstHstInvoiceGuide,
  usaInvoiceGuide,
  photographerInvoiceGuide,
  tradesInvoiceGuide,
  consultantInvoiceGuide,
  designerInvoiceGuide,
  developerInvoiceGuide,
  tutorInvoiceGuide,
  depositInvoiceGuide,
  milestoneInvoiceGuide,
  creditNoteGuide,
  disputedInvoiceGuide,
  invoiceNumberingGuide,
  retainerInvoiceGuide,
  invoiceEmailGuide,
  recordKeepingGuide,
  internationalInvoiceGuide,
  vatCalculatorGuide,
  lateFeeCalculatorGuide,
  hourlyRateCalculatorGuide,
  dueDateCalculatorGuide,
  invoiceExampleGuide,
  quotationExampleGuide,
  receiptTemplateGuide,
  purchaseOrderTemplateGuide,
  timesheetTemplateGuide,
  zohoInvoiceAlternativeGuide,
  waveInvoicingAlternativeGuide,
};

/**
 * Every guide, in the order they appear on the /guides hub.
 *
 * Ordering within a cluster is deliberate: the page targeting the broadest
 * intent comes first, so the hub's internal links hit the pages we most want
 * crawled and ranked before the long-tail ones.
 */
export const guideConfigs: GuideConfig[] = [
  // Invoicing
  howToCreateInvoiceGuide,
  invoiceExampleGuide,
  createInvoiceFreeGuide,
  freeInvoiceTemplateGuide,
  freelanceInvoicingGuide,
  invoiceNumberingGuide,
  internationalInvoiceGuide,
  recordKeepingGuide,
  proformaInvoiceGuide,
  receiptTemplateGuide,
  purchaseOrderGuide,
  purchaseOrderTemplateGuide,

  // By profession
  photographerInvoiceGuide,
  tradesInvoiceGuide,
  consultantInvoiceGuide,
  designerInvoiceGuide,
  developerInvoiceGuide,
  tutorInvoiceGuide,

  // By country — broadest markets first, so the hub links these before the
  // narrower jurisdictions.
  ukVatInvoiceGuide,
  usaInvoiceGuide,
  canadaGstHstInvoiceGuide,
  australiaTaxInvoiceGuide,
  indiaGstInvoiceGuide,
  uaeVatInvoiceGuide,
  euVatInvoiceGuide,
  philippinesInvoiceGuide,
  nigeriaInvoiceGuide,

  // Getting paid
  paymentTermsGuide,
  chasePaymentGuide,
  invoiceEmailGuide,
  depositInvoiceGuide,
  milestoneInvoiceGuide,
  disputedInvoiceGuide,
  creditNoteGuide,
  timesheetTemplateGuide,
  retainerInvoiceGuide,

  // Quotations
  writeQuotationGuide,
  quotationExampleGuide,
  invoiceVsQuotationGuide,
  freeQuotationTemplateGuide,
  requestQuotationGuide,

  // Proposals
  writeProposalGuide,
  businessProposalFormatGuide,
  freeProposalTemplateGuide,
  aiProposalGeneratorGuide,
  proposalGenerationSoftwareGuide,

  // Tools
  onlineInvoiceGeneratorGuide,
  freeInvoiceSoftwareGuide,
  quotationGeneratorGuide,
  freeQuotationSoftwareGuide,
  invoiceGeneratorAlternativesGuide,
  zohoInvoiceAlternativeGuide,
  waveInvoicingAlternativeGuide,

  // Calculators
  vatCalculatorGuide,
  lateFeeCalculatorGuide,
  hourlyRateCalculatorGuide,
  dueDateCalculatorGuide,

  // Writing
  quotationMarksGuide,
  quotationsAboutChangeGuide,
  randomQuoteGeneratorGuide,
];
