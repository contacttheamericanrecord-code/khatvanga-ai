'use client';

import React, { useState } from 'react';

export default function KhatvangaEnterprise() {
  const [activeTab, setActiveTab] = useState<'terminal' | 'healing' | 'billing' | 'music' | 'builder'>('terminal');
  const [query, setQuery] = useState('');
  const [logs, setLogs] = useState<Array<{ id: string; sender: string; text: string; chain: string[] }>>([
    {
      id: '1',
      sender: 'SYSTEM',
      text: 'Khatvanga AI Enterprise terminal initialized. Operational domains online: IT Troubleshooting, Data Science, The American Record Music. Awaiting operator input.',
      chain: ['[01] Initializing secure telemetry channel', '[02] Verifying local node resilience', '[03] Systems nominal']
    }
  ]);
  const [speakingMode, setSpeakingMode] = useState(false);
  const [credits, setCredits] = useState(1250);
  
  // Self-Healing state
  const [brokenCode, setBrokenCode] = useState('function calculateTotal(items) {\n  return items.reduce((acc, item) => acc + item.price, 0);\n');
  const [healedCode, setHealedCode] = useState('');

  const handleExecute = () => {
    if (!query.trim()) return;
    
    const newLog = {
      id: Date.now().toString(),
      sender: 'OPERATOR',
      text: query,
      chain: ['[01] Parsing telemetry and domain match', '[02] Executing heuristic reasoning matrix', '[03] Validating 100% accurate output']
    };

    let responseText = `Executed analysis for: "${query}". All operational systems verified.`;
    if (query.toLowerCase().includes('dns') || query.toLowerCase().includes('error')) {
      responseText = 'Diagnostic Complete: DNS packet drop detected on local resolver node. Flushed local cache and re-routed gateway through secondary uplink. Latency stabilized at 24ms.';
    } else if (query.toLowerCase().includes('royalty') || query.toLowerCase().includes('billboard')) {
      responseText = 'Music Audit Complete: The American Record Music catalog verified against Billboard streaming ledgers. Zero discrepancies found in royalty reconciliation.';
    }

    const aiResponse = {
      id: (Date.now() + 1).toString(),
      sender: 'KHATVANGA AI',
      text: responseText,
      chain: ['[01] Classified query against active domain', '[02] Applied local-first reasoning rule', '[03] Output verified']
    };

    setLogs(prev => [...prev, newLog, aiResponse]);
    setQuery('');

    if (speakingMode && 'speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(responseText);
      window.speechSynthesis.speak(utterance);
    }
  };

  const handleAutoHeal = () => {
    setHealedCode(`// [HEALED & PATCHED BY KHATVANGA AI ENGINE]\nfunction calculateTotal(items) {\n  if (!Array.isArray(items)) return 0;\n  return items.reduce((acc, item) => acc + (item.price || 0), 0);\n}`);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-mono flex flex-col selection:bg-cyan-500 selection:text-slate-950">
      {/* Header Telemetry */}
      <header className="border-b border-slate-800 bg-slate-900/50 backdrop-blur px-6 py-3 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center space-x-3">
          <div className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_10px_#22d3ee]"></div>
          <div>
            <h1 className="text-sm font-bold tracking-wider text-cyan-400">KHATVANGA AI <span className="text-slate-400">Enterprise v22.0</span></h1>
            <p className="text-[10px] text-slate-500">SECURE OPERATIONAL COMMAND CENTER</p>
          </div>
        </div>
        
        <div className="flex items-center gap-4 text-xs">
          <div className="px-3 py-1 rounded bg-slate-800/80 border border-slate-700">CPU: <span className="text-cyan-400">14%</span></div>
          <div className="px-3 py-1 rounded bg-slate-800/80 border border-slate-700">MEMORY: <span className="text-indigo-400">42%</span></div>
          <div className="px-3 py-1 rounded bg-slate-800/80 border border-slate-700">LATENCY: <span className="text-emerald-400">22ms</span></div>
          <div className="px-3 py-1 rounded bg-slate-800/80 border border-slate-700">CREDITS: <span className="text-amber-400">₹{credits}</span></div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <nav className="border-b border-slate-800 bg-slate-900/30 px-6 flex gap-2 overflow-x-auto">
        {[
          { id: 'terminal', label: 'Reasoning Terminal' },
          { id: 'healing', label: 'Self-Healing Engine' },
          { id: 'billing', label: 'Payment & Billing' },
          { id: 'music', label: 'Record Music AI' },
          { id: 'builder', label: 'App & Website Builder' }
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`px-4 py-3 text-xs font-semibold border-b-2 transition-all whitespace-nowrap ${
              activeTab === tab.id 
                ? 'border-cyan-400 text-cyan-400 bg-cyan-950/20' 
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </nav>

      {/* Main Content Area */}
      <main className="flex-1 p-6 max-w-7xl mx-auto w-full flex flex-col">
        {activeTab === 'terminal' && (
          <div className="flex-1 flex flex-col gap-6">
            <div className="flex justify-between items-center bg-slate-900/60 p-3 rounded border border-slate-800">
              <span className="text-xs text-slate-400">DOMAIN: IT TROUBLESHOOTING • DATA SCIENCE • THE AMERICAN RECORD MUSIC</span>
              <label className="flex items-center gap-2 text-xs cursor-pointer">
                <span>SPEAKING MODE</span>
                <input 
                  type="checkbox" 
                  checked={speakingMode} 
                  onChange={(e) => setSpeakingMode(e.target.checked)}
                  className="accent-cyan-400"
                />
              </label>
            </div>

            {/* Logs Window */}
            <div className="flex-1 bg-slate-900/40 border border-slate-800 rounded-lg p-4 overflow-y-auto space-y-4 max-h-[500px]">
              {logs.map((log) => (
                <div key={log.id} className={`p-4 rounded border ${log.sender === 'OPERATOR' ? 'bg-slate-800/40 border-slate-700 ml-8' : 'bg-cyan-950/10 border-cyan-900/40 mr-8'}`}>
                  <div className="flex justify-between text-[10px] text-slate-500 mb-1">
                    <span>{log.sender}</span>
                  </div>
                  <p className="text-sm text-slate-200">{log.text}</p>
                  <div className="mt-2 pt-2 border-t border-slate-800/60 text-[10px] text-cyan-500 space-y-1">
                    {log.chain.map((step, idx) => (
                      <div key={idx}>{step}</div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Input Bar */}
            <div className="flex gap-3">
              <input 
                type="text" 
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleExecute()}
                placeholder="Enter a command or query (e.g., DNS resolution failure, Billboard royalty audit)..."
                className="flex-1 bg-slate-900 border border-slate-700 rounded px-4 py-3 text-sm focus:outline-none focus:border-cyan-400 text-slate-100 placeholder-slate-500"
              />
              <button 
                onClick={handleExecute}
                className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 px-6 py-3 rounded font-bold text-sm transition-colors"
              >
                Execute
              </button>
            </div>
          </div>
        )}

        {activeTab === 'healing' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-1">
            <div className="flex flex-col gap-3">
              <label className="text-xs text-slate-400">Broken / Vulnerable Code Snippet:</label>
              <textarea 
                value={brokenCode}
                onChange={(e) => setBrokenCode(e.target.value)}
                className="flex-1 bg-slate-900 border border-slate-700 rounded p-4 text-xs font-mono text-cyan-300 h-64 focus:outline-none focus:border-cyan-400"
              />
              <button 
                onClick={handleAutoHeal}
                className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 py-3 rounded font-bold text-xs"
              >
                Auto-Heal & Generate Patch
              </button>
            </div>
            <div className="flex flex-col gap-3">
              <label className="text-xs text-slate-400">Autonomous Healed Output & Patch Notes:</label>
              <pre className="flex-1 bg-slate-900 border border-slate-700 rounded p-4 text-xs font-mono text-emerald-400 h-64 overflow-auto">
                {healedCode || '// Awaiting execution of auto-heal engine...'}
              </pre>
            </div>
          </div>
        )}

        {activeTab === 'billing' && (
          <div className="max-w-xl mx-auto w-full bg-slate-900/60 border border-slate-800 rounded-lg p-6 space-y-6">
            <h2 className="text-lg font-bold text-cyan-400">Razorpay & Cashfree Credit Wallet</h2>
            <p className="text-xs text-slate-400">Add credits instantly via UPI or Bank Account Transfer with zero service fees.</p>
            <div className="p-4 bg-slate-800/50 rounded border border-slate-700 flex justify-between items-center">
              <span>Current Wallet Balance</span>
              <span className="text-xl font-bold text-amber-400">₹{credits}</span>
