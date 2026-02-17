import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ToastProvider } from './components/ui/ToastProvider';
import EditorPage from './pages/EditorPage';
import ViewPage from './pages/ViewPage';
import NotFoundPage from './pages/NotFoundPage';

export default function App() {
  return (
    <ToastProvider>
      <HashRouter>
        <Routes>
          <Route path="/" element={<EditorPage />} />
          <Route path="/edit/:payload" element={<EditorPage />} />
          <Route path="/view/:payload" element={<ViewPage />} />
          <Route path="/404" element={<NotFoundPage />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
      </HashRouter>
    </ToastProvider>
  );
}
