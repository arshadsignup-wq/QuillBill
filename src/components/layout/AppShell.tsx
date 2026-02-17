import type { ReactNode } from 'react';
import Navbar from './Navbar';

interface AppShellProps {
  children: ReactNode;
  actions?: ReactNode;
}

export default function AppShell({ children, actions }: AppShellProps) {
  return (
    <div className="h-screen flex flex-col overflow-hidden bg-white">
      <Navbar actions={actions} />
      <main className="flex-1 overflow-hidden">{children}</main>
    </div>
  );
}
