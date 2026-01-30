'use client';

import React, { useState } from 'react';
import { createClient } from '@/utils/supabase/client';
import { useRouter } from 'next/navigation';

export default function SettingsPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleSignOut = async () => {
    setLoading(true);
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push('/auth/sign-in');
  };

  return (
    <div className="max-w-3xl space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold">Settings</h1>
        <p className="text-slate-400 mt-1">Manage your account and workspace</p>
      </div>

      {/* Profile Section */}
      <div className="bg-[#1e1e32] border border-slate-700/50 rounded-2xl p-6">
        <h2 className="font-semibold mb-4">Profile</h2>
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-violet-600 flex items-center justify-center text-2xl font-semibold">
              G
            </div>
            <button className="px-4 py-2 text-sm border border-slate-700 rounded-lg hover:bg-slate-700/50 transition-colors">
              Change Avatar
            </button>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">Full Name</label>
            <input
              type="text"
              defaultValue="Greg Mousseau"
              className="w-full px-4 py-3 bg-[#0f0f1a] border border-slate-700 rounded-xl text-white focus:outline-none focus:border-violet-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">Email</label>
            <input
              type="email"
              defaultValue="greg@example.com"
              disabled
              className="w-full px-4 py-3 bg-[#0f0f1a] border border-slate-700 rounded-xl text-slate-500"
            />
            <p className="text-xs text-slate-500 mt-1">Contact support to change email</p>
          </div>
        </div>
      </div>

      {/* Workspace Section */}
      <div className="bg-[#1e1e32] border border-slate-700/50 rounded-2xl p-6">
        <h2 className="font-semibold mb-4">Workspace</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">Workspace Name</label>
            <input
              type="text"
              defaultValue="Acme Corp"
              className="w-full px-4 py-3 bg-[#0f0f1a] border border-slate-700 rounded-xl text-white focus:outline-none focus:border-violet-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">Default Model</label>
            <select className="w-full px-4 py-3 bg-[#0f0f1a] border border-slate-700 rounded-xl text-white focus:outline-none focus:border-violet-500">
              <option>GPT-4o Mini (Recommended)</option>
              <option>GPT-4o</option>
              <option>Claude 3.5 Sonnet</option>
              <option>Claude 3 Opus</option>
            </select>
          </div>
        </div>
      </div>

      {/* API Keys Section */}
      <div className="bg-[#1e1e32] border border-slate-700/50 rounded-2xl p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-semibold">API Keys</h2>
          <button className="px-4 py-2 text-sm bg-violet-600 hover:bg-violet-500 rounded-lg transition-colors">
            Generate Key
          </button>
        </div>
        <div className="text-center py-8 text-slate-500">
          <p>No API keys yet</p>
          <p className="text-sm mt-1">Generate a key to use the Moes.ai API</p>
        </div>
      </div>

      {/* Danger Zone */}
      <div className="bg-[#1e1e32] border border-red-500/20 rounded-2xl p-6">
        <h2 className="font-semibold text-red-400 mb-4">Danger Zone</h2>
        <div className="flex items-center justify-between">
          <div>
            <p className="font-medium">Sign Out</p>
            <p className="text-sm text-slate-400">Sign out of your account</p>
          </div>
          <button 
            onClick={handleSignOut}
            disabled={loading}
            className="px-4 py-2 text-sm border border-red-500/50 text-red-400 hover:bg-red-500/10 rounded-lg transition-colors disabled:opacity-50"
          >
            {loading ? 'Signing out...' : 'Sign Out'}
          </button>
        </div>
      </div>

      {/* Save Button */}
      <div className="flex justify-end">
        <button className="px-6 py-3 bg-violet-600 hover:bg-violet-500 text-white font-semibold rounded-xl transition-colors">
          Save Changes
        </button>
      </div>
    </div>
  );
}
