'use client';

import React from 'react';
import Link from 'next/link';

export default function AuthLayout({
  children,
}: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-[#0f0f1a] text-white">
      {/* Header */}
      <header className="p-6">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-violet-700 flex items-center justify-center">
            <span className="text-white font-bold text-sm">M</span>
          </div>
          <span className="text-xl font-bold">moes<span className="text-violet-400">.ai</span></span>
        </Link>
      </header>
      
      {/* Main content */}
      <main className="flex-1 flex items-center justify-center px-4">
        {children}
      </main>
      
      {/* Footer */}
      <footer className="p-6 text-center text-sm text-slate-500">
        © 2026 Moes.ai
      </footer>
    </div>
  );
}
