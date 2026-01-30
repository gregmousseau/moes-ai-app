'use client';

import React from 'react';
import Link from 'next/link';

const mockSources = [
  { id: '1', name: 'Product Documentation', type: 'file', status: 'ready', chunks: 245, lastUpdated: '2 days ago' },
  { id: '2', name: 'FAQ Database', type: 'file', status: 'ready', chunks: 89, lastUpdated: '1 week ago' },
  { id: '3', name: 'Company Website', type: 'url', status: 'processing', chunks: 0, lastUpdated: 'Just now' },
];

export default function KnowledgePage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Knowledge Base</h1>
          <p className="text-slate-400 mt-1">Manage documents and data sources</p>
        </div>
        <button className="flex items-center gap-2 px-5 py-2.5 bg-violet-600 hover:bg-violet-500 text-white font-medium rounded-xl transition-colors shadow-lg shadow-violet-600/20">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Add Source
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-[#1e1e32] border border-slate-700/50 rounded-2xl p-6">
          <p className="text-sm text-slate-400">Total Sources</p>
          <p className="text-3xl font-bold mt-2">3</p>
        </div>
        <div className="bg-[#1e1e32] border border-slate-700/50 rounded-2xl p-6">
          <p className="text-sm text-slate-400">Total Chunks</p>
          <p className="text-3xl font-bold mt-2">334</p>
        </div>
        <div className="bg-[#1e1e32] border border-slate-700/50 rounded-2xl p-6">
          <p className="text-sm text-slate-400">Agents Using</p>
          <p className="text-3xl font-bold mt-2">4</p>
        </div>
      </div>

      {/* Sources List */}
      <div className="bg-[#1e1e32] border border-slate-700/50 rounded-2xl overflow-hidden">
        <div className="px-6 py-4 border-b border-slate-700/50">
          <h2 className="font-semibold">Sources</h2>
        </div>
        <div className="divide-y divide-slate-700/50">
          {mockSources.map((source) => (
            <div key={source.id} className="px-6 py-4 flex items-center justify-between hover:bg-slate-700/20 transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-violet-600/20 flex items-center justify-center">
                  {source.type === 'file' ? '📄' : '🌐'}
                </div>
                <div>
                  <h3 className="font-medium">{source.name}</h3>
                  <p className="text-sm text-slate-400">{source.chunks} chunks • Updated {source.lastUpdated}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${
                  source.status === 'ready' 
                    ? 'bg-green-500/10 text-green-400' 
                    : 'bg-yellow-500/10 text-yellow-400'
                }`}>
                  {source.status === 'ready' ? '✓ Ready' : '⟳ Processing'}
                </span>
                <button className="text-slate-400 hover:text-white p-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
