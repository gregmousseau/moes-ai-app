import React from 'react';
import Link from 'next/link';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-[#0f0f1a] text-[#f8fafc]">
      {/* Sidebar */}
      <aside className="w-64 bg-[#1e1e32] p-6 border-r border-[#334155] flex flex-col">
        <div className="text-2xl font-bold text-[#7c3aed] mb-8">Moes.ai</div>
        <nav className="flex-grow">
          <ul>
            <li className="mb-4">
              <Link href="/dashboard" className="flex items-center text-[#f8fafc] hover:text-[#a78bfa] transition-colors">
                <span className="mr-3">📊</span> Dashboard
              </Link>
            </li>
            <li className="mb-4">
              <Link href="/agents" className="flex items-center text-[#f8fafc] hover:text-[#a78bfa] transition-colors">
                <span className="mr-3">🤖</span> Agents
              </Link>
            </li>
            <li className="mb-4">
              <Link href="/knowledge-base" className="flex items-center text-[#f8fafc] hover:text-[#a78bfa] transition-colors">
                <span className="mr-3">📚</span> Knowledge Base
              </Link>
            </li>
            <li className="mb-4">
              <Link href="/analytics" className="flex items-center text-[#f8fafc] hover:text-[#a78bfa] transition-colors">
                <span className="mr-3">📈</span> Analytics
              </Link>
            </li>
            <li className="mb-4">
              <Link href="/settings" className="flex items-center text-[#f8fafc] hover:text-[#a78bfa] transition-colors">
                <span className="mr-3">⚙️</span> Settings
              </Link>
            </li>
          </ul>
        </nav>
        {/* User/Account info - Placeholder */}
        <div className="mt-8 pt-4 border-t border-[#334155] text-sm text-[#94a3b8]">
          <p>👤 Greg Mousseau</p>
          <p className="text-xs">Owner</p>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-auto">
        {children}
      </main>
    </div>
  );
}
