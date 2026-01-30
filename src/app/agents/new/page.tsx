'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const steps = [
  { id: 1, name: 'Basic Info' },
  { id: 2, name: 'Channels' },
  { id: 3, name: 'Knowledge' },
  { id: 4, name: 'Capabilities' },
];

const channels = [
  { id: 'slack', name: 'Slack', icon: '💬', description: 'Connect to Slack workspaces' },
  { id: 'discord', name: 'Discord', icon: '🎮', description: 'Bot for Discord servers' },
  { id: 'whatsapp', name: 'WhatsApp', icon: '📱', description: 'WhatsApp Business API' },
  { id: 'email', name: 'Email', icon: '📧', description: 'Respond to emails automatically' },
  { id: 'webchat', name: 'Web Chat', icon: '💻', description: 'Embed on your website' },
  { id: 'telegram', name: 'Telegram', icon: '✈️', description: 'Telegram bot integration' },
];

const capabilities = [
  { id: 'knowledge', name: 'Answer from Knowledge', icon: '📚', description: 'Search and answer from uploaded docs' },
  { id: 'calendar', name: 'Schedule Meetings', icon: '📅', description: 'Create calendar events', requiresApproval: false },
  { id: 'email', name: 'Send Emails', icon: '✉️', description: 'Draft and send emails', requiresApproval: true },
  { id: 'ticket', name: 'Create Tickets', icon: '🎫', description: 'Create support tickets', requiresApproval: false },
  { id: 'escalate', name: 'Escalate to Human', icon: '🙋', description: 'Hand off to team member', requiresApproval: false },
];

export default function NewAgentPage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    personality: '',
    selectedChannels: [] as string[],
    knowledgeSources: [] as File[],
    selectedCapabilities: ['knowledge', 'escalate'],
  });

  const handleNext = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1);
  };

  const handleBack = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleCreate = async () => {
    // TODO: Wire up to Supabase
    console.log('Creating agent:', formData);
    router.push('/dashboard');
  };

  const toggleChannel = (channelId: string) => {
    setFormData(prev => ({
      ...prev,
      selectedChannels: prev.selectedChannels.includes(channelId)
        ? prev.selectedChannels.filter(c => c !== channelId)
        : [...prev.selectedChannels, channelId]
    }));
  };

  const toggleCapability = (capId: string) => {
    setFormData(prev => ({
      ...prev,
      selectedCapabilities: prev.selectedCapabilities.includes(capId)
        ? prev.selectedCapabilities.filter(c => c !== capId)
        : [...prev.selectedCapabilities, capId]
    }));
  };

  return (
    <div className="min-h-screen bg-[#0f0f1a] text-white">
      {/* Header */}
      <header className="border-b border-slate-700/50 bg-[#1e1e32]">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/dashboard" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-violet-700 flex items-center justify-center">
              <span className="text-white font-bold text-sm">M</span>
            </div>
            <span className="text-xl font-bold">moes<span className="text-violet-400">.ai</span></span>
          </Link>
          <Link href="/dashboard" className="text-slate-400 hover:text-white transition-colors">
            ✕ Cancel
          </Link>
        </div>
      </header>

      <div className="max-w-3xl mx-auto px-6 py-12">
        {/* Progress Steps */}
        <div className="mb-12">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <React.Fragment key={step.id}>
                <div className="flex flex-col items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold ${
                    currentStep >= step.id
                      ? 'bg-violet-600 text-white'
                      : 'bg-slate-700 text-slate-400'
                  }`}>
                    {currentStep > step.id ? '✓' : step.id}
                  </div>
                  <span className={`mt-2 text-sm ${currentStep >= step.id ? 'text-white' : 'text-slate-500'}`}>
                    {step.name}
                  </span>
                </div>
                {index < steps.length - 1 && (
                  <div className={`flex-1 h-0.5 mx-4 ${currentStep > step.id ? 'bg-violet-600' : 'bg-slate-700'}`} />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Step Content */}
        <div className="bg-[#1e1e32] border border-slate-700/50 rounded-2xl p-8">
          {/* Step 1: Basic Info */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-2">Basic Information</h2>
                <p className="text-slate-400">Give your agent a name and personality</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Agent Name *</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-[#0f0f1a] border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500"
                  placeholder="e.g., Sales Assistant"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Description</label>
                <input
                  type="text"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full px-4 py-3 bg-[#0f0f1a] border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500"
                  placeholder="Handles product questions and pricing inquiries"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Personality & Instructions *</label>
                <textarea
                  value={formData.personality}
                  onChange={(e) => setFormData({ ...formData, personality: e.target.value })}
                  rows={6}
                  className="w-full px-4 py-3 bg-[#0f0f1a] border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 resize-none"
                  placeholder="You are a friendly and professional sales assistant for Acme Corp. Your job is to answer questions about our products, provide pricing information, and help potential customers understand how our solutions can help them..."
                />
                <p className="text-xs text-slate-500 mt-2">💡 Be specific about tone, knowledge boundaries, and goals</p>
              </div>
            </div>
          )}

          {/* Step 2: Channels */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-2">Connect Channels</h2>
                <p className="text-slate-400">Where should this agent respond?</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {channels.map((channel) => (
                  <button
                    key={channel.id}
                    onClick={() => toggleChannel(channel.id)}
                    className={`p-4 rounded-xl border text-left transition-all ${
                      formData.selectedChannels.includes(channel.id)
                        ? 'border-violet-500 bg-violet-500/10'
                        : 'border-slate-700 hover:border-slate-600'
                    }`}
                  >
                    <span className="text-2xl">{channel.icon}</span>
                    <h3 className="font-semibold mt-2">{channel.name}</h3>
                    <p className="text-sm text-slate-400 mt-1">{channel.description}</p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 3: Knowledge */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-2">Knowledge Base</h2>
                <p className="text-slate-400">Upload docs for your agent to learn from</p>
              </div>

              <div className="border-2 border-dashed border-slate-700 rounded-xl p-12 text-center hover:border-violet-500/50 transition-colors">
                <div className="text-4xl mb-4">📄</div>
                <p className="text-lg font-medium mb-2">Drop files here or click to upload</p>
                <p className="text-sm text-slate-400 mb-4">PDF, TXT, MD, DOCX up to 10MB each</p>
                <button className="px-6 py-2 bg-slate-700 hover:bg-slate-600 rounded-xl text-sm font-medium transition-colors">
                  Browse Files
                </button>
              </div>

              <div className="text-center text-slate-500 text-sm">
                You can also add knowledge sources later from the agent settings
              </div>
            </div>
          )}

          {/* Step 4: Capabilities */}
          {currentStep === 4 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-2">Capabilities</h2>
                <p className="text-slate-400">What can this agent do?</p>
              </div>

              <div className="space-y-3">
                {capabilities.map((cap) => (
                  <button
                    key={cap.id}
                    onClick={() => toggleCapability(cap.id)}
                    className={`w-full p-4 rounded-xl border text-left transition-all flex items-center gap-4 ${
                      formData.selectedCapabilities.includes(cap.id)
                        ? 'border-violet-500 bg-violet-500/10'
                        : 'border-slate-700 hover:border-slate-600'
                    }`}
                  >
                    <span className="text-2xl">{cap.icon}</span>
                    <div className="flex-1">
                      <h3 className="font-semibold">{cap.name}</h3>
                      <p className="text-sm text-slate-400">{cap.description}</p>
                    </div>
                    {cap.requiresApproval && (
                      <span className="text-xs bg-orange-500/10 text-orange-400 px-2 py-1 rounded-full">
                        Requires approval
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="flex justify-between mt-8 pt-6 border-t border-slate-700/50">
            <button
              onClick={handleBack}
              disabled={currentStep === 1}
              className="px-6 py-3 text-slate-400 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              ← Back
            </button>
            {currentStep < 4 ? (
              <button
                onClick={handleNext}
                disabled={currentStep === 1 && (!formData.name || !formData.personality)}
                className="px-8 py-3 bg-violet-600 hover:bg-violet-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold rounded-xl transition-colors"
              >
                Next →
              </button>
            ) : (
              <button
                onClick={handleCreate}
                className="px-8 py-3 bg-violet-600 hover:bg-violet-500 text-white font-semibold rounded-xl transition-colors"
              >
                Create Agent 🚀
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
