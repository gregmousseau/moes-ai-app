import React from 'react';
import Link from 'next/link';

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-[#1e1e32] p-6 rounded-lg shadow-lg border border-[#334155]">
          <h3 className="text-[#94a3b8] text-sm font-medium">Active Agents</h3>
          <p className="text-[#f8fafc] text-3xl font-bold mt-1">5</p>
          <p className="text-sm text-green-500">↑12%</p>
        </div>
        <div className="bg-[#1e1e32] p-6 rounded-lg shadow-lg border border-[#334155]">
          <h3 className="text-[#94a3b8] text-sm font-medium">Messages Today</h3>
          <p className="text-[#f8fafc] text-3xl font-bold mt-1">247</p>
          <p className="text-sm text-green-500">↑12%</p>
        </div>
        <div className="bg-[#1e1e32] p-6 rounded-lg shadow-lg border border-[#334155]">
          <h3 className="text-[#94a3b8] text-sm font-medium">Resolved Today</h3>
          <p className="text-[#f8fafc] text-3xl font-bold mt-1">89%</p>
          <p className="text-sm text-green-500">↑5%</p>
        </div>
        <div className="bg-[#1e1e32] p-6 rounded-lg shadow-lg border border-[#334155]">
          <h3 className="text-[#94a3b8] text-sm font-medium">Cost This Month</h3>
          <p className="text-[#f8fafc] text-3xl font-bold mt-1">$34.20</p>
          <p className="text-sm text-gray-500">N/A</p>
        </div>
      </div>

      {/* Your Agents Section */}
      <div className="bg-[#1e1e32] p-6 rounded-lg shadow-lg border border-[#334155]">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-[#f8fafc]">Your Agents</h2>
          <Link href="/agents/new" className="bg-[#7c3aed] hover:bg-[#a78bfa] text-white py-2 px-4 rounded-md text-sm font-medium transition-colors">
            + New Agent
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Agent Card 1 */}
          <div className="bg-[#0f0f1a] p-5 rounded-lg border border-[#334155]">
            <h3 className="text-[#f8fafc] text-lg font-semibold">🤖 Sales Assistant</h3>
            <p className="text-[#94a3b8] text-sm mt-1">Slack • Email</p>
            <p className="text-[#94a3b8] text-sm mt-2">142 messages today</p>
            <p className="text-green-500 text-sm mt-1">● Active</p>
            <div className="mt-4 flex space-x-3">
              <Link href="/agents/1" className="text-[#a78bfa] hover:underline text-sm">[View]</Link>
              <Link href="/agents/1/edit" className="text-[#a78bfa] hover:underline text-sm">[Edit]</Link>
              <button className="text-[#a78bfa] hover:underline text-sm">[···]</button>
            </div>
          </div>
          {/* Agent Card 2 */}
          <div className="bg-[#0f0f1a] p-5 rounded-lg border border-[#334155]">
            <h3 className="text-[#f8fafc] text-lg font-semibold">🎧 Support Bot</h3>
            <p className="text-[#94a3b8] text-sm mt-1">Discord • Web Chat</p>
            <p className="text-[#94a3b8] text-sm mt-2">89 messages today</p>
            <p className="text-green-500 text-sm mt-1">● Active</p>
            <div className="mt-4 flex space-x-3">
              <Link href="/agents/2" className="text-[#a78bfa] hover:underline text-sm">[View]</Link>
              <Link href="/agents/2/edit" className="text-[#a78bfa] hover:underline text-sm">[Edit]</Link>
              <button className="text-[#a78bfa] hover:underline text-sm">[···]</button>
            </div>
          </div>
          {/* Agent Card 3 */}
          <div className="bg-[#0f0f1a] p-5 rounded-lg border border-[#334155]">
            <h3 className="text-[#f8fafc] text-lg font-semibold">📋 HR Helper</h3>
            <p className="text-[#94a3b8] text-sm mt-1">Slack</p>
            <p className="text-[#94a3b8] text-sm mt-2">16 messages today</p>
            <p className="text-green-500 text-sm mt-1">● Active</p>
            <div className="mt-4 flex space-x-3">
              <Link href="/agents/3" className="text-[#a78bfa] hover:underline text-sm">[View]</Link>
              <Link href="/agents/3/edit" className="text-[#a78bfa] hover:underline text-sm">[Edit]</Link>
              <button className="text-[#a78bfa] hover:underline text-sm">[···]</button>
            </div>
          </div>
          {/* Agent Card 4 */}
          <div className="bg-[#0f0f1a] p-5 rounded-lg border border-[#334155]">
            <h3 className="text-[#f8fafc] text-lg font-semibold">📊 Data Analyst</h3>
            <p className="text-[#94a3b8] text-sm mt-1">Email</p>
            <p className="text-[#94a3b8] text-sm mt-2">0 messages today</p>
            <p className="text-orange-500 text-sm mt-1">○ Paused</p>
            <div className="mt-4 flex space-x-3">
              <Link href="/agents/4" className="text-[#a78bfa] hover:underline text-sm">[View]</Link>
              <Link href="/agents/4/edit" className="text-[#a78bfa] hover:underline text-sm">[Edit]</Link>
              <button className="text-[#a78bfa] hover:underline text-sm">[···]</button>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Conversations Section */}
      <div className="bg-[#1e1e32] p-6 rounded-lg shadow-lg border border-[#334155]">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-[#f8fafc]">Recent Conversations</h2>
          <Link href="/conversations" className="text-[#a78bfa] hover:underline text-sm">
            View All →
          </Link>
        </div>
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <span className="text-blue-400">👤</span>
            <p className="text-[#f8fafc]">John D. → <span className="font-medium">Sales Assistant</span> <span className="text-[#94a3b8]">"What's the pricing..."</span></p>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-gray-400">👤</span>
            <p className="text-[#f8fafc]">Sarah M. → <span className="font-medium">Support Bot</span> <span className="text-[#94a3b8]">"I can't log in..."</span></p>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-blue-400">👤</span>
            <p className="text-[#f8fafc]">Mike T. → <span className="font-medium">Sales Assistant</span> <span className="text-[#94a3b8]">"Do you offer discounts?"</span></p>
          </div>
        </div>
      </div>
    </div>
  );
}
