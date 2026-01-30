import React from 'react';
import Link from 'next/link';

const stats = [
  { label: 'Active Agents', value: '5', change: '+2', positive: true },
  { label: 'Messages Today', value: '247', change: '+12%', positive: true },
  { label: 'Resolution Rate', value: '89%', change: '+5%', positive: true },
  { label: 'Cost This Month', value: '$34.20', change: null, positive: null },
];

const agents = [
  { id: 1, name: 'Sales Assistant', emoji: '🤖', channels: ['Slack', 'Email'], messages: 142, status: 'active' },
  { id: 2, name: 'Support Bot', emoji: '🎧', channels: ['Discord', 'Web Chat'], messages: 89, status: 'active' },
  { id: 3, name: 'HR Helper', emoji: '📋', channels: ['Slack'], messages: 16, status: 'active' },
  { id: 4, name: 'Data Analyst', emoji: '📊', channels: ['Email'], messages: 0, status: 'paused' },
];

const conversations = [
  { user: 'John D.', agent: 'Sales Assistant', message: 'What\'s the pricing for enterprise?', time: '2m ago' },
  { user: 'Sarah M.', agent: 'Support Bot', message: 'I can\'t log in to my account', time: '5m ago' },
  { user: 'Mike T.', agent: 'Sales Assistant', message: 'Do you offer volume discounts?', time: '12m ago' },
];

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <p className="text-slate-400 mt-1">Overview of your AI agents</p>
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

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-[#1e1e32] border border-slate-700/50 rounded-2xl p-6">
            <p className="text-sm text-slate-400 font-medium">{stat.label}</p>
            <p className="text-3xl font-bold mt-2">{stat.value}</p>
            {stat.change && (
              <p className={`text-sm mt-1 ${stat.positive ? 'text-green-400' : 'text-red-400'}`}>
                {stat.change}
              </p>
            )}
          </div>
        ))}
      </div>

      {/* Agents Grid */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Your Agents</h2>
          <Link href="/agents" className="text-sm text-violet-400 hover:text-violet-300 transition-colors">
            View all →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {agents.map((agent) => (
            <Link 
              key={agent.id} 
              href={`/agents/${agent.id}`}
              className="bg-[#1e1e32] border border-slate-700/50 rounded-2xl p-5 hover:border-violet-500/50 transition-all group"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{agent.emoji}</span>
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
              <div className="mt-4 flex items-center justify-between text-sm">
                <span className="text-slate-400">{agent.messages} messages today</span>
                <span className="text-violet-400 opacity-0 group-hover:opacity-100 transition-opacity">
                  View →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Recent Conversations */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Recent Conversations</h2>
          <Link href="/conversations" className="text-sm text-violet-400 hover:text-violet-300 transition-colors">
            View all →
          </Link>
        </div>
        <div className="bg-[#1e1e32] border border-slate-700/50 rounded-2xl divide-y divide-slate-700/50">
          {conversations.map((conv, i) => (
            <div key={i} className="flex items-center gap-4 p-4 hover:bg-slate-700/20 transition-colors">
              <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-sm font-medium">
                {conv.user[0]}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm">
                  <span className="font-medium">{conv.user}</span>
                  <span className="text-slate-400"> → </span>
                  <span className="text-violet-400">{conv.agent}</span>
                </p>
                <p className="text-sm text-slate-400 truncate">{conv.message}</p>
              </div>
              <span className="text-xs text-slate-500">{conv.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
