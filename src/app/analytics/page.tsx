'use client';

import React from 'react';

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Analytics</h1>
          <p className="text-slate-400 mt-1">Track performance and usage</p>
        </div>
        <select className="px-4 py-2 bg-[#1e1e32] border border-slate-700/50 rounded-xl text-white">
          <option>Last 7 days</option>
          <option>Last 30 days</option>
          <option>Last 90 days</option>
        </select>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-[#1e1e32] border border-slate-700/50 rounded-2xl p-6">
          <p className="text-sm text-slate-400">Total Messages</p>
          <p className="text-3xl font-bold mt-2">12,847</p>
          <p className="text-sm text-green-400 mt-1">↑ 23% vs last period</p>
        </div>
        <div className="bg-[#1e1e32] border border-slate-700/50 rounded-2xl p-6">
          <p className="text-sm text-slate-400">Conversations</p>
          <p className="text-3xl font-bold mt-2">1,429</p>
          <p className="text-sm text-green-400 mt-1">↑ 15% vs last period</p>
        </div>
        <div className="bg-[#1e1e32] border border-slate-700/50 rounded-2xl p-6">
          <p className="text-sm text-slate-400">Resolution Rate</p>
          <p className="text-3xl font-bold mt-2">87%</p>
          <p className="text-sm text-green-400 mt-1">↑ 5% vs last period</p>
        </div>
        <div className="bg-[#1e1e32] border border-slate-700/50 rounded-2xl p-6">
          <p className="text-sm text-slate-400">Total Cost</p>
          <p className="text-3xl font-bold mt-2">$142.50</p>
          <p className="text-sm text-slate-400 mt-1">~$0.011 per message</p>
        </div>
      </div>

      {/* Charts Placeholder */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-[#1e1e32] border border-slate-700/50 rounded-2xl p-6">
          <h2 className="font-semibold mb-4">Messages Over Time</h2>
          <div className="h-64 flex items-center justify-center border border-dashed border-slate-700 rounded-xl">
            <p className="text-slate-500">📊 Chart coming soon</p>
          </div>
        </div>
        <div className="bg-[#1e1e32] border border-slate-700/50 rounded-2xl p-6">
          <h2 className="font-semibold mb-4">Messages by Agent</h2>
          <div className="h-64 flex items-center justify-center border border-dashed border-slate-700 rounded-xl">
            <p className="text-slate-500">📊 Chart coming soon</p>
          </div>
        </div>
      </div>

      {/* Top Agents Table */}
      <div className="bg-[#1e1e32] border border-slate-700/50 rounded-2xl overflow-hidden">
        <div className="px-6 py-4 border-b border-slate-700/50">
          <h2 className="font-semibold">Top Performing Agents</h2>
        </div>
        <table className="w-full">
          <thead className="bg-slate-800/50">
            <tr className="text-left text-sm text-slate-400">
              <th className="px-6 py-3 font-medium">Agent</th>
              <th className="px-6 py-3 font-medium">Messages</th>
              <th className="px-6 py-3 font-medium">Resolution</th>
              <th className="px-6 py-3 font-medium">Avg Response</th>
              <th className="px-6 py-3 font-medium">Cost</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-700/50">
            <tr className="hover:bg-slate-700/20">
              <td className="px-6 py-4">🤖 Sales Assistant</td>
              <td className="px-6 py-4">5,234</td>
              <td className="px-6 py-4">92%</td>
              <td className="px-6 py-4">1.1s</td>
              <td className="px-6 py-4">$58.20</td>
            </tr>
            <tr className="hover:bg-slate-700/20">
              <td className="px-6 py-4">🎧 Support Bot</td>
              <td className="px-6 py-4">4,891</td>
              <td className="px-6 py-4">85%</td>
              <td className="px-6 py-4">1.3s</td>
              <td className="px-6 py-4">$52.40</td>
            </tr>
            <tr className="hover:bg-slate-700/20">
              <td className="px-6 py-4">📋 HR Helper</td>
              <td className="px-6 py-4">2,722</td>
              <td className="px-6 py-4">88%</td>
              <td className="px-6 py-4">0.9s</td>
              <td className="px-6 py-4">$31.90</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
