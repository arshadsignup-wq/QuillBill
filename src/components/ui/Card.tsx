import type { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  title?: string;
}

export default function Card({ children, className = '', title }: CardProps) {
  return (
    <div className={`rounded-xl border border-gray-200 bg-white ${className}`}>
      {title && (
        <div className="border-b border-gray-100 px-4 sm:px-5 py-3">
          <h3 className="text-sm font-semibold text-gray-900">{title}</h3>
        </div>
      )}
      <div className="p-4 sm:p-5">{children}</div>
    </div>
  );
}
