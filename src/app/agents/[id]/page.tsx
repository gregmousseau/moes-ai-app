'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

// Mock data - would come from Supabase
const mockAgent = {
  id: '1',
  name: 'Sales Assistant',
  emoji: '🤖',
  status: 'active',
  channels: ['Slack', 'Email'],
  stats: {
    messagesToday: 142,
    resolutionRate: 89,
    avgResponseTime: '1.2s',
  },
};

const mockConversations = [
  { id: 1, user: 'John Davis', lastMessage: "What's the pricing for enterprise?", time: '2m ago', unread: true },
  { id: 2, user: 'Sarah Miller', lastMessage: 'Thanks for the info!', time: '15m ago', unread: false },
  { id: 3, user: 'Mike Thompson', lastMessage: 'Do you have a free trial?', time: '1h ago', unread: false },
  { id: 4, user: 'Emily Chen', lastMessage: 'Great, I\'ll check that out', time: '2h ago', unread: false },
];

const mockMessages = [
  { id: 1, role: 'user', content: "What's the pricing for the Pro plan?", time: '10:32 AM' },
  { id: 2, role: 'assistant', content: "Great question! Our Pro plan is $99/month and includes:\n\n• Unlimited users\n• Priority support\n• Advanced analytics\n• API access\n\nWould you like me to set up a demo call?", time: '10:32 AM' },
  { id: 3, role: 'user', content: "Yes, that would be great. I'm available tomorrow afternoon.", time: '10:33 AM' },
  { id: 4, role: 'assistant', content: "Perfect! I've found some available slots for tomorrow afternoon:\n\n• 2:00 PM EST\n• 3:30 PM EST\n• 4:00 PM EST\n\nWhich time works best for you?", time: '10:33 AM' },
];

export default function AgentDetailPage() {
  const params = useParams();
  const [selectedConversation, setSelectedConversation] = useState(1);
  const [messageInput, setMessageInput] = useState('');

  return (
    <div className="flex h-[calc(100vh-2rem)] -m-8">
      {/* Conversations Sidebar */}
      <aside className="w-80 bg-[#1e1e32] border-r border-slate-700/50 flex flex-col">
        {/* Agent Header */}
        <div className="p-4 border-b border-slate-700/50">
          <div className="flex items-center gap-3">
            <span className="text-3xl">{mockAgent.emoji}</span>
            <div className="flex-1">
              <h1 className="font-bold text-lg">{mockAgent.name}</h1>
              <p className="text-sm text-slate-400">{mockAgent.channels.join(' • ')}</p>
            </div>
            <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${
              mockAgent.status === 'active' 
                ? 'bg-green-500/10 text-green-400' 
                : 'bg-orange-500/10 text-orange-400'
            }`}>
              <span className={`w-1.5 h-1.5 rounded-full ${
                mockAgent.status === 'active' ? 'bg-green-400' : 'bg-orange-400'
              }`} />
              {mockAgent.status === 'active' ? 'Active' : 'Paused'}
            </span>
          </div>
        </div>

        {/* Search */}
        <div className="p-4">
          <input
            type="text"
            placeholder="Search conversations..."
            className="w-full px-4 py-2.5 bg-[#0f0f1a] border border-slate-700 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-violet-500"
          />
        </div>

        {/* Conversations List */}
        <div className="flex-1 overflow-y-auto">
          {mockConversations.map((conv) => (
            <button
              key={conv.id}
              onClick={() => setSelectedConversation(conv.id)}
              className={`w-full p-4 text-left border-b border-slate-700/30 transition-colors ${
                selectedConversation === conv.id
                  ? 'bg-violet-600/10 border-l-2 border-l-violet-500'
                  : 'hover:bg-slate-700/30'
              }`}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-2">
                  {conv.unread && <span className="w-2 h-2 bg-violet-500 rounded-full" />}
                  <span className="font-medium">{conv.user}</span>
                </div>
                <span className="text-xs text-slate-500">{conv.time}</span>
              </div>
              <p className="text-sm text-slate-400 truncate mt-1">{conv.lastMessage}</p>
            </button>
          ))}
        </div>

        {/* Quick Stats */}
        <div className="p-4 border-t border-slate-700/50 bg-[#0f0f1a]/50">
          <div className="grid grid-cols-3 gap-2 text-center">
            <div>
              <p className="text-lg font-bold">{mockAgent.stats.messagesToday}</p>
              <p className="text-xs text-slate-500">Today</p>
            </div>
            <div>
              <p className="text-lg font-bold">{mockAgent.stats.resolutionRate}%</p>
              <p className="text-xs text-slate-500">Resolved</p>
            </div>
            <div>
              <p className="text-lg font-bold">{mockAgent.stats.avgResponseTime}</p>
              <p className="text-xs text-slate-500">Avg time</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col bg-[#0f0f1a]">
        {/* Chat Header */}
        <div className="p-4 border-b border-slate-700/50 bg-[#1e1e32] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center font-semibold">
              {mockConversations.find(c => c.id === selectedConversation)?.user[0]}
            </div>
            <div>
              <h2 className="font-semibold">
                {mockConversations.find(c => c.id === selectedConversation)?.user}
              </h2>
              <p className="text-sm text-slate-400">via Slack • Started 2h ago</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="px-4 py-2 text-sm text-slate-400 hover:text-white hover:bg-slate-700/50 rounded-lg transition-colors">
              📋 View Profile
            </button>
            <button className="px-4 py-2 text-sm bg-orange-500/10 text-orange-400 hover:bg-orange-500/20 rounded-lg transition-colors">
              🙋 Escalate
            </button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {mockMessages.map((msg) => (
            <div key={msg.id} className={`flex ${msg.role === 'assistant' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-lg rounded-2xl p-4 ${
                msg.role === 'assistant'
                  ? 'bg-violet-600 text-white'
                  : 'bg-[#1e1e32] border border-slate-700/50'
              }`}>
                <p className="whitespace-pre-wrap">{msg.content}</p>
                <p className={`text-xs mt-2 ${msg.role === 'assistant' ? 'text-violet-200' : 'text-slate-500'}`}>
                  {msg.time}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Input Area */}
        <div className="p-4 border-t border-slate-700/50 bg-[#1e1e32]">
          <div className="flex items-center gap-3">
            <input
              type="text"
              value={messageInput}
              onChange={(e) => setMessageInput(e.target.value)}
              placeholder="Type as the agent..."
              className="flex-1 px-4 py-3 bg-[#0f0f1a] border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-violet-500"
            />
            <button className="px-6 py-3 bg-violet-600 hover:bg-violet-500 text-white font-medium rounded-xl transition-colors">
              Send
            </button>
          </div>
          <p className="text-xs text-slate-500 mt-2">
            💡 Messages you send appear as the agent. Use this to help or take over conversations.
          </p>
        </div>
      </div>
    </div>
  );
}
