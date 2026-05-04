"use client";

import { useState } from "react";
import { 
  Home, 
  Building2, 
  BarChart3, 
  Users, 
  Settings, 
  Bell, 
  Search, 
  Plus,
  MapPin,
  Code2,
  Zap
} from "lucide-react";
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

const navigation = [
  { name: "Popup Setup", href: "#", icon: Code2, current: true },
  { name: "Analytics", href: "#", icon: BarChart3, current: false },
  { name: "Neighborhoods", href: "#", icon: MapPin, current: false },
  { name: "Advanced", href: "#", icon: Settings, current: false },
];

export default function AdminDashboard() {
  const [clientType, setClientType] = useState<"selfserve" | "partner">("selfserve");
  const [domain, setDomain] = useState("");
  const [snippetGenerated, setSnippetGenerated] = useState(false);

  const generatedSnippet = domain 
    ? `<script src="https://cdn.dreamneighborhood.com/widget.js" data-domain="${domain}" async></script>`
    : "";

  const handleGenerateSnippet = () => {
    if (domain) {
      setSnippetGenerated(true);
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      {/* Top Nav */}
      <nav className="border-b border-zinc-800 bg-zinc-900 px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-emerald-600 rounded-2xl flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="font-semibold text-xl tracking-tight">Dream Neighborhood</div>
              <div className="text-[10px] text-emerald-400 -mt-1">POPUP WIDGET ADMIN</div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-8 text-sm">
          <div className="flex gap-8">
            <button 
              onClick={() => setClientType("selfserve")}
              className={`pb-1 border-b-2 transition-colors ${clientType === 'selfserve' ? 'border-emerald-500 text-white' : 'border-transparent text-zinc-400 hover:text-zinc-200'}`}
            >
              Self-Serve Customers
            </button>
            <button 
              onClick={() => setClientType("partner")}
              className={`pb-1 border-b-2 transition-colors ${clientType === 'partner' ? 'border-emerald-500 text-white' : 'border-transparent text-zinc-400 hover:text-zinc-200'}`}
            >
              Partner Clients
            </button>
          </div>

          <div className="flex items-center gap-3">
            <Avatar className="h-8 w-8">
              <AvatarFallback className="bg-emerald-600 text-xs">WM</AvatarFallback>
            </Avatar>
            <div>
              <div className="text-sm font-medium">William Miller</div>
              <div className="text-xs text-emerald-400">Founder</div>
            </div>
          </div>
        </div>
      </nav>

      <div className="flex">
        {/* Sidebar */}
        <div className="w-72 bg-zinc-900 border-r border-zinc-800 h-[calc(100vh-73px)] p-6 flex-shrink-0">
          <div className="uppercase text-xs tracking-widest text-zinc-500 mb-4 px-3">MAIN</div>
          <nav className="space-y-1">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-medium transition-all ${
                  item.current 
                    ? "bg-zinc-800 text-emerald-400" 
                    : "text-zinc-400 hover:bg-zinc-950 hover:text-white"
                }`}
              >
                <item.icon className="h-5 w-5" />
                {item.name}
                {item.name === "Advanced" && <Badge variant="secondary" className="ml-auto text-[10px]">Hidden</Badge>}
              </a>
            ))}
          </nav>

          <div className="mt-12 px-3">
            <div className="text-xs text-zinc-500 mb-2">CURRENT PLAN</div>
            <div className="bg-zinc-950 border border-emerald-900 rounded-3xl p-5">
              <div className="text-emerald-400 text-sm font-medium">Solo Agent • Trial Active</div>
              <div className="text-4xl font-semibold mt-2 tracking-tighter">$39.95</div>
              <div className="text-xs text-zinc-500">per month • renews in 13 days</div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-10 overflow-auto">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <h1 className="text-5xl font-semibold tracking-tighter text-white">Popup Widget Setup</h1>
              <p className="text-xl text-zinc-400 mt-3">Install the Neighborhood Explorer in under 5 minutes. No redesign. No tech headaches.</p>
            </div>

            {/* Client Type Selector */}
            <div className="inline-flex bg-zinc-900 rounded-3xl p-1 mb-10 border border-zinc-800">
              <button
                onClick={() => setClientType("selfserve")}
                className={`px-8 py-3 rounded-[22px] text-sm font-medium transition-all ${clientType === "selfserve" ? "bg-white text-black shadow" : "text-zinc-400 hover:text-white"}`}
              >
                Self-Serve Agent
              </button>
              <button
                onClick={() => setClientType("partner")}
                className={`px-8 py-3 rounded-[22px] text-sm font-medium transition-all ${clientType === "partner" ? "bg-white text-black shadow" : "text-zinc-400 hover:text-white"}`}
              >
                Partner Client
              </button>
            </div>

            {clientType === "selfserve" ? (
              /* Self-Serve Flow */
              <div className="space-y-12">
                <Card className="bg-zinc-900 border-emerald-900/50">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-emerald-500/10 rounded-2xl flex items-center justify-center">
                        <Code2 className="text-emerald-400" />
                      </div>
                      Step 1 — Authorize Your Domain
                    </CardTitle>
                    <CardDescription>We'll only allow the popup on domains you authorize.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <label className="text-sm text-zinc-400 block mb-2">Your Website Domain</label>
                      <div className="flex gap-3">
                        <input
                          type="text"
                          value={domain}
                          onChange={(e) => setDomain(e.target.value)}
                          placeholder="example.com or www.example.com"
                          className="flex-1 bg-zinc-950 border border-zinc-700 focus:border-emerald-500 rounded-2xl px-5 py-4 text-lg placeholder:text-zinc-600"
                        />
                        <Button 
                          onClick={handleGenerateSnippet}
                          disabled={!domain}
                          size="lg"
                          className="bg-emerald-600 hover:bg-emerald-500 px-10"
                        >
                          Generate Snippet
                        </Button>
                      </div>
                      <p className="text-xs text-zinc-500 mt-3">Only the exact domains listed here can display the Neighborhood Popup.</p>
                    </div>

                    {snippetGenerated && (
                      <div className="bg-black border border-emerald-900 rounded-3xl p-8 font-mono text-sm">
                        <div className="text-emerald-400 mb-4 text-xs tracking-widest">YOUR 3-LINE INSTALL CODE</div>
                        <pre className="text-emerald-300 overflow-auto whitespace-pre-wrap">{generatedSnippet}</pre>
                        <div className="mt-8 text-xs text-zinc-400">
                          Copy this code and paste it just before the closing &lt;/body&gt; tag on your website.
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>

                <div className="flex gap-6">
                  <Card className="flex-1 bg-zinc-900 border-zinc-800">
                    <CardHeader>
                      <CardTitle>Ready to Activate?</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Button size="lg" className="w-full bg-white text-black hover:bg-zinc-100 text-lg h-14">
                        Continue to Subscription → $39.95/mo
                      </Button>
                      <p className="text-center text-xs text-zinc-500 mt-6">14-day free trial • Cancel anytime</p>
                    </CardContent>
                  </Card>

                  <Card className="flex-1 bg-zinc-900 border-zinc-800">
                    <CardHeader>
                      <CardTitle>Need Help Installing?</CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm text-zinc-400">
                      Our team (or your IDX provider) can install this for you in minutes. 
                      <Button variant="link" className="text-emerald-400 p-0 h-auto mt-4 block">Book a 15-minute installation call →</Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ) : (
              /* Partner Client Flow */
              <div>
                <Card className="bg-gradient-to-br from-zinc-900 to-zinc-950 border-emerald-600 max-w-2xl mx-auto">
                  <CardHeader className="text-center pb-2">
                    <div className="mx-auto w-16 h-16 bg-emerald-500/10 rounded-full flex items-center justify-center mb-6">
                      <Zap className="w-9 h-9 text-emerald-400" />
                    </div>
                    <CardTitle className="text-4xl">Your Neighborhood Popup is Ready</CardTitle>
                    <CardDescription className="text-xl text-zinc-400 mt-3">
                      Your website partner has already added the 3-line code.<br />Now activate your full Neighborhood Explorer.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-8 space-y-8 text-center">
                    <div className="grid grid-cols-2 gap-4 text-left max-w-md mx-auto">
                      <div className="bg-zinc-900 p-5 rounded-3xl border border-emerald-900">
                        <div className="text-emerald-400 text-sm">Solo Agent</div>
                        <div className="text-4xl font-semibold mt-2">$39.95</div>
                        <div className="text-xs text-zinc-500">per month</div>
                      </div>
                      <div className="bg-zinc-900 p-5 rounded-3xl border border-emerald-900">
                        <div className="text-emerald-400 text-sm">Annual (Save 37%)</div>
                        <div className="text-4xl font-semibold mt-2">$299</div>
                        <div className="text-xs text-emerald-400">billed yearly</div>
                      </div>
                    </div>

                    <Button size="lg" className="w-full max-w-md h-16 text-lg bg-emerald-600 hover:bg-emerald-500">
                      Activate My Popup Now — Start 14-Day Free Trial
                    </Button>

                    <div className="text-xs text-zinc-500 max-w-xs mx-auto">
                      Your partner can also apply a custom discount or extend your trial. 
                      Just ask them!
                    </div>
                  </CardContent>
                </Card>

                <div className="text-center mt-16 text-zinc-500 text-sm">
                  Questions? Your website partner manages technical setup.<br />
                  This page is purely for marketing, billing, and upgrading your experience.
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
