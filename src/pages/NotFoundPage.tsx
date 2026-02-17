import { Link } from 'react-router-dom';
import { FileQuestion } from 'lucide-react';
import Button from '../components/ui/Button';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <FileQuestion size={48} className="text-gray-300 mb-4" />
      <h1 className="text-2xl font-bold text-gray-900 mb-2">Page Not Found</h1>
      <p className="text-gray-500 mb-6 text-center">
        The document link may be invalid or expired.
      </p>
      <Link to="/">
        <Button variant="primary">Create New Document</Button>
      </Link>
    </div>
  );
}
