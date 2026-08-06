import { BrowserRouter, useNavigate, useLocation } from 'react-router-dom';
import { Suspense, useEffect } from 'react';
import { ToastProvider } from './components/ui/ToastProvider';
import AnalyticsRouteTracker from './components/AnalyticsRouteTracker';
import AppRoutes from './routes';

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
        <AnalyticsRouteTracker />
        <Suspense fallback={null}>
          <AppRoutes />
        </Suspense>
      </BrowserRouter>
    </ToastProvider>
  );
}
