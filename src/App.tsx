import { BrowserRouter, Routes, Route, Navigate, useNavigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { ToastProvider } from './components/ui/ToastProvider';
import EditorPage from './pages/EditorPage';
import ViewPage from './pages/ViewPage';
import NotFoundPage from './pages/NotFoundPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

/** Redirect old hash-based URLs (/#/about → /about) for backward compatibility */
function HashRedirect() {
  const navigate = useNavigate();
  const { hash } = useLocation();

  useEffect(() => {
    if (hash.startsWith('#/')) {
      navigate(hash.slice(1), { replace: true });
    }
  }, [hash, navigate]);

  return null;
}

export default function App() {
  return (
    <ToastProvider>
      <BrowserRouter>
        <HashRedirect />
        <Routes>
          <Route path="/" element={<EditorPage />} />
          <Route path="/edit/:payload" element={<EditorPage />} />
          <Route path="/view/:payload" element={<ViewPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/404" element={<NotFoundPage />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
      </BrowserRouter>
    </ToastProvider>
  );
}
