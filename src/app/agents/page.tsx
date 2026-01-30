'use client';

import React, { useState } from 'react';
import Link from 'next/link';

// Mock data - would come from Supabase
const mockAgents = [
  { id: '1', name: 'Sales Assistant', emoji: '🤖', description: 'Handles product questions and pricing', channels: ['Slack', 'Email'], messages: 142, status: 'active', createdAt: '2 weeks ago' },
  { id: '2', name: 'Support Bot', emoji: '🎧', description: 'Customer support and troubleshooting', channels: ['Discord', 'Web Chat'], messages: 89, status: 'active', createdAt: '1 week ago' },
  { id: '3', name: 'HR Helper', emoji: '📋', description: 'Employee questions and policies', channels: ['Slack'], messages: 16, status: 'active', createdAt: '3 days ago' },
  { id: '4', name: 'Data Analyst', emoji: '📊', description: 'Data queries and report generation', channels: ['Email'], messages: 0, status: 'paused', createdAt: '1 day ago' },
];

export default function AgentsPage() {
  const [filter, setFilter] = useState<'all' | 'active' | 'paused'>('all');
  const [search, setSearch] = useState('');

  const filteredAgents = mockAgents.filter(agent => {
    const matchesFilter = filter === 'all' || agent.status === filter;
    const matchesSearch = agent.name.toLowerCase().includes(search.toLowerCase()) ||
                         agent.description.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Agents</h1>
          <p className="text-slate-400 mt-1">Manage your AI agents</p>
        </div>
        <Link 
          href="/agents/new" 
          className="flex items-center gap-2 px-5 py-2.5 bg-violet-600 hover:bg-violet-500 text-white font-medium rounded-xl transition-colors shadow-lg shadow-violet-600/20"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          New Agent
        </Link>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            placeholder="Search agents..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-[#1e1e32] border border-slate-700/50 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-violet-500"
          />
        </div>
        <div className="flex gap-2">
          {(['all', 'active', 'paused'] as const).map((status) => (
            <button
              key={status}
              onClick={() => setFilter(status)}
              className={`px-4 py-3 rounded-xl font-medium transition-colors ${
                filter === status
                  ? 'bg-violet-600 text-white'
                  : 'bg-[#1e1e32] text-slate-400 hover:text-white'
              }`}
            >
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Agents Grid */}
      {filteredAgents.length === 0 ? (
        <div className="text-center py-12">
          <div className="text-4xl mb-4">🤖</div>
          <h3 className="text-lg font-medium mb-2">No agents found</h3>
          <p className="text-slate-400 mb-6">
            {search ? 'Try a different search term' : 'Create your first agent to get started'}
          </p>
          {!search && (
            <Link 
              href="/agents/new" 
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-violet-600 hover:bg-violet-500 text-white font-medium rounded-xl transition-colors"
            >
              Create Agent
            </Link>
          )}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredAgents.map((agent) => (
            <Link 
              key={agent.id} 
              href={`/agents/${agent.id}`}
              className="bg-[#1e1e32] border border-slate-700/50 rounded-2xl p-6 hover:border-violet-500/50 transition-all group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{agent.emoji}</span>
                  <div>
                    <h3 className="font-semibold group-hover:text-violet-300 transition-colors">{agent.name}</h3>
                    <p className="text-sm text-slate-400">{agent.channels.join(' • ')}</p>
                  </div>
                </div>
                <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${
                  agent.status === 'active' 
                    ? 'bg-green-500/10 text-green-400' 
                    : 'bg-orange-500/10 text-orange-400'
                }`}>
                  <span className={`w-1.5 h-1.5 rounded-full ${
                    agent.status === 'active' ? 'bg-green-400' : 'bg-orange-400'
                  }`} />
                  {agent.status === 'active' ? 'Active' : 'Paused'}
                </span>
              </div>
              
              <p className="text-sm text-slate-400 mb-4 line-clamp-2">{agent.description}</p>
              
              <div className="flex items-center justify-between text-sm pt-4 border-t border-slate-700/50">
                <span className="text-slate-500">{agent.messages} msgs today</span>
                <span className="text-slate-500">Created {agent.createdAt}</span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
