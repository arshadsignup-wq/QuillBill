import { Routes, Route, Navigate } from 'react-router-dom';
import EditorPage from './pages/EditorPage';
import ViewPage from './pages/ViewPage';
import NotFoundPage from './pages/NotFoundPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import DisclaimerPage from './pages/DisclaimerPage';
import FAQPage from './pages/FAQPage';
import DMCAPage from './pages/DMCAPage';
import LandingPage from './pages/landing/LandingPage';
import { invoiceConfig, quotationConfig, proposalConfig } from './pages/landing/landingData';
import TemplateGalleryPage from './pages/templates/TemplateGalleryPage';
import {
  invoiceTemplatesConfig,
  quotationTemplatesConfig,
  proposalTemplatesConfig,
} from './pages/templates/templateData';
import GuidePage from './pages/guides/GuidePage';
import { howToCreateInvoiceGuide, invoiceVsQuotationGuide } from './pages/guides/guideData';

/**
 * Route table shared by the browser entry (App.tsx) and the prerender entry
 * (entry-server.tsx), so the static HTML and the client render the same tree.
 */
export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<EditorPage />} />
      <Route path="/edit/:payload" element={<EditorPage />} />
      <Route path="/view/:payload" element={<ViewPage />} />
      <Route path="/privacy" element={<PrivacyPage />} />
      <Route path="/terms" element={<TermsPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/disclaimer" element={<DisclaimerPage />} />
      <Route path="/faq" element={<FAQPage />} />
      <Route path="/dmca" element={<DMCAPage />} />

      <Route path="/invoice-generator" element={<LandingPage config={invoiceConfig} />} />
      <Route path="/quotation-generator" element={<LandingPage config={quotationConfig} />} />
      <Route path="/proposal-generator" element={<LandingPage config={proposalConfig} />} />

      <Route path="/invoice-templates" element={<TemplateGalleryPage config={invoiceTemplatesConfig} />} />
      <Route path="/quotation-templates" element={<TemplateGalleryPage config={quotationTemplatesConfig} />} />
      <Route path="/proposal-templates" element={<TemplateGalleryPage config={proposalTemplatesConfig} />} />

      <Route path="/how-to-create-an-invoice" element={<GuidePage config={howToCreateInvoiceGuide} />} />
      <Route path="/invoice-vs-quotation" element={<GuidePage config={invoiceVsQuotationGuide} />} />

      <Route path="/404" element={<NotFoundPage />} />
      <Route path="*" element={<Navigate to="/404" replace />} />
    </Routes>
  );
}
