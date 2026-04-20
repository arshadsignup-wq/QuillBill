import type { ReactNode } from 'react';

interface SplitPaneProps {
  left: ReactNode;
  right: ReactNode;
}

export default function SplitPane({ left, right }: SplitPaneProps) {
  return (
    <div className="flex h-full">
      <div className="w-full lg:w-1/2 xl:w-[45%] lg:border-r border-gray-200 overflow-hidden">
        {left}
      </div>
      <div className="hidden lg:block lg:w-1/2 xl:w-[55%] overflow-hidden">
        {right}
      </div>
    </div>
  );
}
