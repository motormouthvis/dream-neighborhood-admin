"use client";

import React, { useState } from 'react';
import { Home, Map, FileText, BarChart3, Users, CreditCard, HelpCircle, Settings, Plus, Search, Bell, Copy, Check } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export default function DreamNeighborhood() {
  const [activeTab, setActiveTab] = useState('get-started');
  const [domain, setDomain] = useState('yourwebsite.com');
  const [snippet, setSnippet] = useState('');
  const [copied, setCopied] = useState(false);
  const [showSnippet, setShowSnippet] = useState(false);

  const generateSnippet = () => {
    const code = `<script src="https://cdn.dreamneighborhood.com/popup.js" data-domain="${domain}" async></script>`;
    setSnippet(code);
    setShowSnippet(true);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(snippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex h-screen bg-white overflow-hidden font-sans">
      {/* Teal Sidebar - Exact match to screenshots */}
      <div className="w-72 bg-[#0A6B5F] text-white flex flex-col">
        <div className="px-8 pt-8 pb-6 flex items-center gap-3 border-b border-white/20">
          <div className="text-3xl">🏠</div>
          <div>
            <div className="font-semibold text-2xl tracking-tight">Dream Neighborhood</div>
          </div>
        </div>

        <div className="px-6 pt-8">
          <div className="bg-white/10 rounded-2xl p-4 flex items-center gap-3">
            <div className="w-9 h-9 bg-white/20 rounded-full flex items-center justify-center text-sm font-medium">BM</div>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-medium truncate">bill@miller mailbox.com</div>
              <div className="text-xs text-emerald-200 -mt-0.5">Current Team</div>
            </div>
          </div>
        </div>

        <div className="mt-8 px-3 flex-1 overflow-auto">
          <nav className="space-y-1 px-3">
            <button onClick={() => setActiveTab('get-started')} className={`w-full flex items-center gap-3 px-5 py-[14px] rounded-2xl text-left text-sm font-medium ${activeTab === 'get-started' ? 'bg-white text-[#0A6B5F]' : 'hover:bg-white/10'}`}>
              <Home className="w-5 h-5" />
              Get Started
            </button>
            <button onClick={() => setActiveTab('explorer')} className={`w-full flex items-center gap-3 px-5 py-[14px] rounded-2xl text-left text-sm font-medium ${activeTab === 'explorer' ? 'bg-white text-[#0A6B5F]' : 'hover:bg-white/10'}`}>
              <Map className="w-5 h-5" />
              Neighborhood Explorer
            </button>
            <button onClick={() => setActiveTab('reports')} className={`w-full flex items-center gap-3 px-5 py-[14px] rounded-2xl text-left text-sm font-medium ${activeTab === 'reports' ? 'bg-white text-[#0A6B5F]' : 'hover:bg-white/10'}`}>
              <FileText className="w-5 h-5" />
              Manage Reports
            </button>
            <button onClick={() => setActiveTab('explorers')} className={`w-full flex items-center gap-3 px-5 py-[14px] rounded-2xl text-left text-sm font-medium ${activeTab === 'explorers' ? 'bg-white text-[#0A6B5F]' : 'hover:bg-white/10'}`}>
              <BarChart3 className="w-5 h-5" />
              Manage Explorers
            </button>
            <button onClick={() => setActiveTab('leads')} className={`w-full flex items-center gap-3 px-5 py-[14px] rounded-2xl text-left text-sm font-medium ${activeTab === 'leads' ? 'bg-white text-[#0A6B5F]' : 'hover:bg-white/10'}`}>
              <Users className="w-5 h-5" />
              Leads
            </button>
            <button onClick={() => setActiveTab('subscription')} className={`w-full flex items-center gap-3 px-5 py-[14px] rounded-2xl text-left text-sm font-medium ${activeTab === 'subscription' ? 'bg-white text-[#0A6B5F]' : 'hover:bg-white/10'}`}>
              <CreditCard className="w-5 h-5" />
              Subscription
            </button>
          </nav>

          <div className="px-8 mt-12 text-xs uppercase tracking-widest text-emerald-200 mb-4">COMMUNITY</div>
          <button className="w-full flex items-center gap-3 px-5 py-4 rounded-2xl text-left hover:bg-white/10 text-white text-sm font-medium">
            <HelpCircle className="w-5 h-5" />
            Help & Support
          </button>
          <button className="w-full flex items-center gap-3 px-5 py-4 rounded-2xl text-left hover:bg-white/10 text-white text-sm font-medium">
            <Settings className="w-5 h-5" />
            Team Settings
          </button>
        </div>

        <div className="p-6 mt-auto border-t border-white/10">
          <div className="text-xs text-emerald-100/70">© Dream Neighborhood Realty Co.</div>
        </div>
      </div>

      {/* Main Content Area - Light theme matching screenshots */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <div className="h-16 border-b bg-white px-8 flex items-center justify-between shadow-sm">
          <div className="flex items-center gap-4 text-sm text-zinc-600">
            <span className="font-medium text-emerald-700">bill@miller mailbox.com</span>
            <span className="text-zinc-300">›</span>
            <span className="font-semibold text-zinc-900">Get Started</span>
          </div>

          <div className="flex items-center gap-8">
            <div className="relative w-80">
              <Search className="absolute left-4 top-3 text-zinc-400 w-4 h-4" />
              <input 
                type="text" 
                placeholder="Search reports, explorers..." 
                className="w-full bg-zinc-100 border-0 focus:bg-white pl-11 py-3 rounded-2xl text-sm"
              />
            </div>

            <div className="flex items-center gap-7 text-zinc-500">
              <Bell className="w-5 h-5 cursor-pointer hover:text-zinc-700 transition-colors" />
              <div className="flex items-center gap-3">
                <Avatar className="h-8 w-8 ring-1 ring-emerald-200">
                  <AvatarFallback className="bg-emerald-100 text-emerald-700 text-xs font-medium">WM</AvatarFallback>
                </Avatar>
                <div className="text-sm">William Miller</div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content - Simplified Popup Getting Started */}
        <div className="flex-1 p-10 overflow-auto bg-zinc-50">
          <div className="max-w-5xl mx-auto">
            <div className="mb-12">
              <h1 className="text-4xl font-semibold text-zinc-900">Get Started with Your Neighborhood Popup</h1>
              <p className="text-zinc-600 mt-3 text-lg">Install the popup in under 5 minutes. No redesign needed. Keep buyers on your site.</p>
            </div>

            <div className="grid grid-cols-12 gap-8">
              {/* Self-Serve Card */}
              <div className="col-span-12 lg:col-span-7">
                <Card className="shadow-sm border-emerald-100">
                  <CardHeader className="bg-emerald-50 border-b">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-emerald-600 text-white rounded-2xl flex items-center justify-center">
                        <Zap className="w-6 h-6" />
                      </div>
                      <div>
                        <CardTitle className="text-emerald-800">Self-Serve Agent</CardTitle>
                        <CardDescription className="text-emerald-700">Add the popup to your own website</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-10 space-y-8">
                    <div>
                      <label className="text-sm font-medium text-zinc-600 block mb-3">1. Enter your website domain</label>
                      <div className="flex gap-4">
                        <input 
                          type="text" 
                          value={domain} 
                          onChange={(e) => setDomain(e.target.value)}
                          className="flex-1 border border-zinc-300 focus:border-emerald-600 rounded-2xl px-6 py-4 text-lg font-mono"
                          placeholder="yourwebsite.com"
                        />
                        <Button onClick={generateSnippet} className="bg-emerald-600 hover:bg-emerald-700 px-10">
                          Generate Code
                        </Button>
                      </div>
                    </div>

                    {showSnippet && (
                      <div className="bg-zinc-900 text-emerald-300 p-8 rounded-3xl font-mono text-sm border border-emerald-800">
                        <div className="flex justify-between mb-4 text-emerald-400 text-xs tracking-widest">
                          <div>YOUR 3-LINE CODE</div>
                          <button onClick={copyToClipboard} className="flex items-center gap-2 hover:text-white">
                            {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                            {copied ? 'COPIED' : 'COPY'}
                          </button>
                        </div>
                        <pre className="whitespace-pre-wrap text-emerald-200">{snippet}</pre>
                        <p className="text-xs text-emerald-500 mt-8">Paste this before the &lt;/body&gt; tag on your site.</p>
                      </div>
                    )}

                    <Button className="w-full h-14 text-lg bg-emerald-600 hover:bg-emerald-700 mt-6">
                      Continue to Subscription • Start 14-day Free Trial
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* Partner Card */}
              <div className="col-span-12 lg:col-span-5">
                <Card className="h-full shadow-sm border-emerald-100 flex flex-col">
                  <CardHeader className="bg-emerald-50 border-b">
                    <CardTitle className="flex items-center gap-3 text-emerald-800">
                      <Users className="w-6 h-6" />
                      Partner Client
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col justify-center p-10 text-center">
                    <div className="mx-auto w-16 h-16 bg-emerald-100 rounded-3xl flex items-center justify-center mb-8">
                      <Zap className="w-9 h-9 text-emerald-600" />
                    </div>
                    <h3 className="text-2xl font-semibold text-zinc-900">Your Popup is Ready</h3>
                    <p className="text-zinc-600 mt-4 leading-relaxed">Your website partner has already added the code.<br />Just activate your full Neighborhood experience.</p>
                    
                    <Button className="mt-10 h-14 text-base bg-emerald-600 hover:bg-emerald-700 w-full">
                      Activate Popup Now
                    </Button>
                    
                    <p className="text-xs text-zinc-500 mt-8">Your partner can also apply a 50% off coupon or extend your trial.</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="mt-16 text-center">
              <Badge variant="outline" className="text-xs px-4 py-2">Advanced Features</Badge>
              <p className="text-zinc-500 text-sm mt-3">Full Neighborhood Explorer, Reports, Leads, and Analytics are available in the menu above.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
