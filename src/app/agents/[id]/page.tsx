import React from 'react';
import Link from 'next/link';

interface AgentDetailPageProps {
  params: { id: string };
}

export default function AgentDetailPage({ params }: AgentDetailPageProps) {
  const { id } = params;

  return (
    <div className="flex flex-col h-full bg-[#0f0f1a] text-[#f8fafc]">
      {/* Header */}
      <div className="flex justify-between items-center p-6 bg-[#1e1e32] border-b border-[#334155]">
        <Link href="/dashboard" className="text-[#a78bfa] hover:underline flex items-center">
          ← Agents
        </Link>
        <h1 className="text-2xl font-bold">Sales Assistant (ID: {id})</h1>
        <div className="flex items-center space-x-4">
          <span className="text-green-500">● Active</span>
          <button className="bg-[#7c3aed] hover:bg-[#a78bfa] text-white py-2 px-4 rounded-md text-sm font-medium transition-colors">Edit</button>
        </div>
      </div>

      <div className="flex flex-grow">
        {/* Conversations Sidebar */}
        <aside className="w-80 bg-[#1e1e32] p-6 border-r border-[#334155] overflow-y-auto">
          <h2 className="text-xl font-semibold mb-6">Conversations</h2>
          <div className="space-y-4">
            {/* Conversation Item 1 */}
            <div className="p-3 bg-[#0f0f1a] rounded-md border border-[#334155] cursor-pointer hover:bg-[#334155]">
              <p className="font-medium text-[#f8fafc]">🔵 John Davis</p>
              <p className="text-sm text-[#94a3b8] truncate">"What's the pricing..."</p>
              <p className="text-xs text-[#64748b] mt-1">2 min ago</p>
            </div>
            {/* Conversation Item 2 */}
            <div className="p-3 bg-[#0f0f1a] rounded-md border border-[#334155] cursor-pointer hover:bg-[#334155]">
              <p className="font-medium text-[#f8fafc]">⚪ Sarah Miller</p>
              <p className="text-sm text-[#94a3b8] truncate">"Thanks for..."</p>
              <p className="text-xs text-[#64748b] mt-1">15 min ago</p>
            </div>
            {/* Conversation Item 3 */}
            <div className="p-3 bg-[#0f0f1a] rounded-md border border-[#334155] cursor-pointer hover:bg-[#334155]">
              <p className="font-medium text-[#f8fafc]">⚪ Mike Thompson</p>
              <p className="text-sm text-[#94a3b8] truncate">"Do you have..."</p>
              <p className="text-xs text-[#64748b] mt-1">1 hour ago</p>
            </div>
            <Link href="/agents/{id}/conversations" className="text-[#a78bfa] hover:underline text-sm block mt-4">View all →</Link>
          </div>

          {/* Quick Stats */}
          <div className="mt-8 pt-6 border-t border-[#334155]">
            <h3 className="text-lg font-semibold text-[#f8fafc] mb-4">Quick Stats</h3>
            <p className="text-[#94a3b8] text-sm mb-2">Today: <span className="font-medium text-[#f8fafc]">42 msgs</span></p>
            <p className="text-[#94a3b8] text-sm mb-2">Resolved: <span className="font-medium text-[#f8fafc]">89%</span></p>
            <p className="text-[#94a3b8] text-sm">Avg response: <span className="font-medium text-[#f8fafc]">1.2s</span></p>
            <div className="mt-6 space-y-3">
              <button className="w-full text-left text-[#a78bfa] hover:underline text-sm">📊 Analytics</button>
              <button className="w-full text-left text-[#a78bfa] hover:underline text-sm">⚙️ Settings</button>
            </div>
          </div>
        </aside>

        {/* Conversation Main View */}
        <div className="flex-1 flex flex-col bg-[#0f0f1a]">
          <div className="flex-grow p-6 overflow-y-auto space-y-4">
            {/* Example Conversation */} 
            <div className="flex justify-start">
              <div className="bg-[#334155] p-3 rounded-lg max-w-md">
                <p className="font-medium text-[#f8fafc]">👤 John:</p>
                <p className="text-[#f8fafc]">What's the pricing for the Pro plan?</p>
                <p className="text-xs text-[#64748b] text-right mt-1">10:32 AM</p>
              </div>
            </div>
            <div className="flex justify-end">
              <div className="bg-[#7c3aed] p-3 rounded-lg max-w-md">
                <p className="font-medium text-white">🤖 Sales Assistant:</p>
                <p className="text-white">Great question! Our Pro plan is $99/month and includes: </p>
                <ul className="list-disc list-inside text-white ml-4">
                  <li>Unlimited users</li>
                  <li>Priority support</li>
                  <li>Advanced analytics</li>
                </ul>
                <p className="text-white mt-2">Would you like me to set up a demo call?</p>
                <p className="text-xs text-white text-right mt-1">10:32 AM</p>
              </div>
            </div>
            {/* ... more messages */}
          </div>
          {/* Message Input */}
          <div className="p-6 bg-[#1e1e32] border-t border-[#334155] flex items-center space-x-4">
            <button className="text-[#a78bfa] hover:underline text-sm">🔀 Transfer to Human</button>
            <input
              type="text"
              placeholder="Type a message..."
              className="flex-1 px-4 py-2 bg-[#0f0f1a] border border-[#334155] rounded-md focus:ring-[#a78bfa] focus:border-[#a78bfa] text-[#f8fafc]"
            />
            <button className="bg-[#7c3aed] hover:bg-[#a78bfa] text-white py-2 px-4 rounded-md font-medium transition-colors">Send</button>
          </div>
        </div>
      </div>
    </div>
  );
}
