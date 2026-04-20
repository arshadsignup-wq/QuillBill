import { Link } from 'react-router-dom';
import { FileQuestion } from 'lucide-react';
import Button from '../components/ui/Button';
import StaticPageLayout from '../components/layout/StaticPageLayout';
import { useSEO } from '../hooks/useSEO';

export default function NotFoundPage() {
  useSEO({
    title: 'Page Not Found',
    description: 'The page you are looking for does not exist.',
    noindex: true,
  });

  return (
    <StaticPageLayout>
      <div className="flex flex-col items-center justify-center px-4 py-24">
        <FileQuestion size={48} className="text-gray-300 mb-4" />
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Page Not Found</h1>
        <p className="text-gray-500 mb-6 text-center">
          The page you're looking for doesn't exist or the link may be invalid.
        </p>
        <Link to="/">
          <Button variant="primary">Go to Editor</Button>
        </Link>
      </div>
    </StaticPageLayout>
  );
}
