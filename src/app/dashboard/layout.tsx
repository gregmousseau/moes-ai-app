'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { href: '/dashboard', label: 'Dashboard', icon: '📊' },
  { href: '/agents', label: 'Agents', icon: '🤖' },
  { href: '/knowledge', label: 'Knowledge Base', icon: '📚' },
  { href: '/analytics', label: 'Analytics', icon: '📈' },
  { href: '/settings', label: 'Settings', icon: '⚙️' },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="flex min-h-screen bg-[#0f0f1a] text-slate-100">
      {/* Sidebar */}
      <aside className="w-64 bg-[#1e1e32] border-r border-slate-700/50 flex flex-col">
        {/* Logo */}
        <div className="p-6 border-b border-slate-700/50">
          <Link href="/dashboard" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-violet-700 flex items-center justify-center">
              <span className="text-white font-bold text-sm">M</span>
            </div>
            <span className="text-xl font-bold">moes<span className="text-violet-400">.ai</span></span>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4">
          <ul className="space-y-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href || pathname?.startsWith(item.href + '/');
              return (
                <li key={item.href}>
                  <Link 
                    href={item.href} 
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
                      isActive 
                        ? 'bg-violet-600/20 text-violet-300' 
                        : 'text-slate-400 hover:text-white hover:bg-slate-700/50'
                    }`}
                  >
                    <span className="text-lg">{item.icon}</span>
                    <span className="font-medium">{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* User section */}
        <div className="p-4 border-t border-slate-700/50">
          <div className="flex items-center gap-3 px-4 py-3">
            <div className="w-9 h-9 rounded-full bg-violet-600 flex items-center justify-center text-sm font-semibold">
              G
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate">Greg Mousseau</p>
              <p className="text-xs text-slate-500">Owner</p>
            </div>
            <button className="text-slate-400 hover:text-white p-1">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <div className="p-8">
          {children}
        </div>
      </main>
    </div>
  );
}
