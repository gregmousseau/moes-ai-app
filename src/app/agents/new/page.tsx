import React from 'react';
import Link from 'next/link';

export default function NewAgentPage() {
  // This will eventually be a multi-step form
  return (
    <div className="max-w-4xl mx-auto p-8 rounded-lg shadow-lg bg-[#1e1e32] border border-[#334155] text-[#f8fafc]">
      <h1 className="text-3xl font-bold mb-6 text-center">Create New Agent</h1>

      {/* Step Indicator */}
      <div className="mb-8">
        <ol className="flex justify-between text-sm text-[#94a3b8]">
          <li className="flex-1 text-center border-b-2 border-[#7c3aed] pb-2 text-[#7c3aed]">
            1. Basic Info
          </li>
          <li className="flex-1 text-center border-b-2 border-[#334155] pb-2">
            2. Channels
          </li>
          <li className="flex-1 text-center border-b-2 border-[#334155] pb-2">
            3. Knowledge
          </li>
          <li className="flex-1 text-center border-b-2 border-[#334155] pb-2">
            4. Capabilities
          </li>
        </ol>
      </div>

      {/* Step 1: Basic Info (Placeholder) */}
      <div className="space-y-6">
        <div>
          <label htmlFor="agent-name" className="block text-sm font-medium text-[#f8fafc] mb-2">Agent Name</label>
          <input
            type="text"
            id="agent-name"
            className="w-full px-4 py-2 bg-[#0f0f1a] border border-[#334155] rounded-md focus:ring-[#a78bfa] focus:border-[#a78bfa]"
            placeholder="Sales Assistant"
          />
        </div>
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-[#f8fafc] mb-2">Description (optional)</label>
          <textarea
            id="description"
            rows={3}
            className="w-full px-4 py-2 bg-[#0f0f1a] border border-[#334155] rounded-md focus:ring-[#a78bfa] focus:border-[#a78bfa]"
            placeholder="Handles product questions and pricing inquiries"
          ></textarea>
        </div>
        <div>
          <label htmlFor="personality" className="block text-sm font-medium text-[#f8fafc] mb-2">Personality</label>
          <textarea
            id="personality"
            rows={6}
            className="w-full px-4 py-2 bg-[#0f0f1a] border border-[#334155] rounded-md focus:ring-[#a78bfa] focus:border-[#a78bfa]"
            placeholder="You are a friendly and professional sales assistant for Acme Corp."
          ></textarea>
          <p className="text-xs text-[#94a3b8] mt-2">💡 Tip: Be specific about tone, knowledge boundaries, and goals</p>
        </div>
      </div>

      <div className="mt-8 flex justify-end space-x-4">
        <Link href="/dashboard" className="px-6 py-2 rounded-md text-[#a78bfa] hover:bg-[#1e1e32] transition-colors">Cancel</Link>
        <button type="button" className="px-6 py-2 rounded-md bg-[#7c3aed] hover:bg-[#a78bfa] text-white font-medium transition-colors">Next: Channels →</button>
      </div>
    </div>
  );
}
