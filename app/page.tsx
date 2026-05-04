"use client";

import React, { useState } from 'react';
import { 
  Home, 
  Map, 
  FileText, 
  BarChart3, 
  Users, 
  CreditCard, 
  HelpCircle, 
  Settings,
  Plus,
  Search,
  Bell
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type View = 'get-started' | 'neighborhood-explorer' | 'manage-reports' | 'manage-explorers' | 'leads' | 'subscription' | 'team-settings';

const sidebarItems = [
  { id: 'get-started' as View, label: 'Get Started', icon: Home },
  { id: 'neighborhood-explorer' as View, label: 'Neighborhood Explorer', icon: Map },
  { id: 'manage-reports' as View, label: 'Manage Reports', icon: FileText },
  { id: 'manage-explorers' as View, label: 'Manage Explorers', icon: BarChart3 },
  { id: 'leads' as View, label: 'Leads', icon: Users },
  { id: 'subscription' as View, label: 'Subscription', icon: CreditCard },
];

export default function DreamNeighborhoodApp() {
  const [currentView, setCurrentView] = useState<View>('get-started');
  const [teamName] = useState("bill@miller mailbox.com");

  const renderContent = () => {
    switch (currentView) {
      case 'get-started':
        return (
          <div className="space-y-10">
            <div>
              <h1 className="text-4xl font-semibold text-zinc-900">Get Started with Dream Neighborhood</h1>
              <p className="text-zinc-600 mt-3">Complete these steps to activate your Neighborhood Explorer widget.</p>
            </div>

            {/* Get Started Checklist */}
            <Card className="bg-emerald-50 border-emerald-100">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-emerald-800">Get Started Checklist</CardTitle>
                  <div className="text-emerald-600 text-sm font-medium">1 of 6 complete</div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-5">
                  {[
                    { text: "Watch Our Demo Video", done: true },
                    { text: "Create Your First Report", done: false },
                    { text: "Create Your First Explorer", done: false },
                    { text: "Adjust Your Team Settings", done: false },
                    { text: "Share Your Explorer with a Client", done: false },
                    { text: "Add Your Explorer to Your Website", done: false },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center ${item.done ? 'bg-emerald-600' : 'border-2 border-zinc-300'}`}>
                        {item.done && <span className="text-white text-xs">✓</span>}
                      </div>
                      <span className={item.done ? 'line-through text-zinc-500' : 'text-zinc-700'}>{item.text}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Quick Actions */}
              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Button className="h-28 bg-emerald-600 hover:bg-emerald-700 text-white flex flex-col items-center justify-center gap-2">
                    <Plus className="w-8 h-8" />
                    <span>Create Your First Report</span>
                  </Button>
                  <Button variant="outline" className="h-28 flex flex-col items-center justify-center gap-2 border-emerald-200 text-emerald-700 hover:bg-emerald-50">
                    <Map className="w-8 h-8" />
                    <span>Create Your First Explorer</span>
                  </Button>
                </CardContent>
              </Card>

              {/* Resources */}
              <Card>
                <CardHeader>
                  <CardTitle>Resources &amp; Support</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <div className="font-medium">Watch our Demo Video</div>
                    <p className="text-sm text-zinc-600 mt-1">Watch this quick demo video to get a feel for how Dream Neighborhood works.</p>
                    <Button className="mt-4 bg-white border border-emerald-600 text-emerald-700 hover:bg-emerald-50">Watch Video</Button>
                  </div>
                  <div className="pt-6 border-t">
                    <div className="text-emerald-700 font-medium">Book a Free Support Call With Our Team</div>
                    <div className="text-sm text-zinc-600 mt-1">Our team is here to help you get started.</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        );

      case 'subscription':
        return (
          <div>
            <h1 className="text-4xl font-semibold mb-2">Manage Your Subscription</h1>
            <p className="text-zinc-600 mb-10">Upgrade to unlock unlimited reports and full Neighborhood Explorer access.</p>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="border-emerald-200 bg-white">
                <CardHeader>
                  <div className="flex justify-between">
                    <div>
                      <Badge className="bg-emerald-100 text-emerald-700">Recommended</Badge>
                      <CardTitle className="mt-4">Solo Agent</CardTitle>
                    </div>
                    <div className="text-right">
                      <div className="text-5xl font-semibold text-emerald-700">$39.95</div>
                      <div className="text-sm text-zinc-500">per month</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4 text-sm">
                    <li className="flex items-center gap-3">✅ Use the Pop Up on your website</li>
                    <li className="flex items-center gap-3">✅ Unlimited Neighborhood Explorers</li>
                    <li className="flex items-center gap-3">✅ Generate reports</li>
                    <li className="flex items-center gap-3">✅ Capture leads directly</li>
                  </ul>
                  <Button className="w-full mt-10 h-14 bg-emerald-600">Subscribe — Start 14-day Free Trial</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Brokerage / Team Plan</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-5xl font-semibold">$149</div>
                  <div className="text-sm text-zinc-500">per month • up to 10 agents</div>
                  <p className="mt-8 text-sm text-zinc-600">Everything in Solo plus team management, white-label options, and dedicated support.</p>
                  <Button variant="outline" className="w-full mt-10 h-14">Contact Sales for Brokerage Pricing</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        );

      case 'team-settings':
        return (
          <div>
            <h1 className="text-4xl font-semibold mb-8">Manage Your Team Settings</h1>
            
            <div className="bg-white border rounded-3xl p-10">
              <div className="grid grid-cols-2 gap-12">
                <div>
                  <div className="uppercase text-xs tracking-widest text-zinc-500 mb-2">TEAM NAME</div>
                  <input defaultValue="bill@miller mailbox.com" className="text-lg py-6 border border-zinc-300 rounded-2xl px-5 w-full" />
                  <p className="text-xs text-zinc-500 mt-3">This is how your team members will see your team name inside of our platform.</p>
                </div>
                <div>
                  <div className="uppercase text-xs tracking-widest text-zinc-500 mb-2">TEAM ID</div>
                  <input defaultValue="billmiller mailbox.com" className="text-lg py-6 font-mono border border-zinc-300 rounded-2xl px-5 w-full" />
                  <p className="text-xs text-zinc-500 mt-3">This is our unique string that we use to identify you in our platform.</p>
                </div>
              </div>

              <div className="mt-16 pt-10 border-t">
                <div className="text-rose-600 font-medium mb-4">Danger Zone</div>
                <p className="text-sm text-zinc-600">Deleting your team will permanently delete all of your team data and associated reports, widgets and leads.</p>
                <Button variant="destructive" className="mt-6">Delete Team</Button>
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div className="flex flex-col items-center justify-center h-96 text-center">
            <div className="text-6xl mb-6">🏠</div>
            <h3 className="text-2xl font-semibold text-zinc-800">Coming Soon</h3>
            <p className="text-zinc-600 mt-3 max-w-xs">The {currentView.replace('-', ' ')} view is being built to match the real Dream Neighborhood platform.</p>
          </div>
        );
    }
  };

  return (
    <div className="flex h-screen bg-zinc-50 overflow-hidden font-sans">
      {/* Sidebar */}
      <div className="w-72 bg-[#0A6B5F] text-white flex flex-col">
        <div className="px-8 pt-8 pb-6 flex items-center gap-3 border-b border-white/20">
          <img src="/logo.png" alt="Dream Neighborhood" className="h-10 w-auto brightness-110" />
          <div className="font-semibold text-2xl tracking-tight">Dream Neighborhood</div>
        </div>

        <div className="px-6 pt-8">
          <div className="bg-white/10 rounded-2xl p-4 flex items-center gap-3">
            <div className="w-9 h-9 bg-white/20 rounded-full flex items-center justify-center text-sm font-medium">BM</div>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-medium truncate">{teamName}</div>
              <div className="text-xs text-emerald-200">Current Team</div>
            </div>
            <div className="text-xs bg-white/20 px-3 py-1 rounded-full">▼</div>
          </div>
        </div>

        <div className="mt-10 px-3 flex-1 overflow-auto">
          <div className="px-5 text-xs uppercase tracking-widest text-emerald-200 mb-4">MAIN MENU</div>
          
          {sidebarItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentView === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setCurrentView(item.id)}
                className={`w-full flex items-center gap-3 px-5 py-4 rounded-2xl text-left mb-1 transition-all ${
                  isActive 
                    ? 'bg-white text-[#0A6B5F] shadow-inner' 
                    : 'hover:bg-white/10 text-white'
                }`}
              >
                <Icon className={`w-5 h-5 ${isActive ? 'text-[#0A6B5F]' : ''}`} />
                <span className="font-medium">{item.label}</span>
              </button>
            );
          })}

          <div className="px-5 mt-12 text-xs uppercase tracking-widest text-emerald-200 mb-4">COMMUNITY</div>
          
          <button className="w-full flex items-center gap-3 px-5 py-4 rounded-2xl text-left hover:bg-white/10 text-white">
            <HelpCircle className="w-5 h-5" />
            <span className="font-medium">Help &amp; Support</span>
          </button>
          
          <button 
            onClick={() => setCurrentView('team-settings')}
            className="w-full flex items-center gap-3 px-5 py-4 rounded-2xl text-left hover:bg-white/10 text-white"
          >
            <Settings className="w-5 h-5" />
            <span className="font-medium">Team Settings</span>
          </button>
        </div>

        <div className="p-6 border-t border-white/10 mt-auto">
          <div className="flex items-center gap-3 text-xs text-emerald-100">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
            All systems operational
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Header */}
        <header className="h-16 border-b bg-white px-8 flex items-center justify-between flex-shrink-0">
          <div className="flex items-center gap-4 text-sm">
            <span className="text-emerald-700 font-medium">bill@miller mailbox.com</span>
            <span className="text-zinc-300">→</span>
            <span className="font-semibold text-zinc-800 capitalize">
              {currentView === 'get-started' ? 'Get Started' : 
               currentView.replace('-', ' ')}
            </span>
          </div>

          <div className="flex items-center gap-6">
            <div className="relative">
              <input 
                placeholder="Search reports, explorers..." 
                className="w-80 bg-zinc-100 border border-zinc-200 focus:bg-white pl-10 rounded-2xl py-3 text-sm"
              />
              <Search className="absolute left-4 top-3 text-zinc-400 w-4 h-4" />
            </div>

            <div className="flex items-center gap-6 text-zinc-500">
              <Bell className="w-5 h-5 cursor-pointer hover:text-zinc-700" />
              <div className="flex items-center gap-3">
                <Avatar className="h-8 w-8">
                  <AvatarFallback className="bg-emerald-100 text-emerald-700 text-xs">WM</AvatarFallback>
                </Avatar>
                <div>
                  <div className="text-sm font-medium text-zinc-800">William Miller</div>
                  <div className="text-[10px] text-emerald-600 -mt-0.5">Admin</div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="flex-1 overflow-auto p-10 bg-zinc-50">
          <div className="max-w-6xl mx-auto">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
}
