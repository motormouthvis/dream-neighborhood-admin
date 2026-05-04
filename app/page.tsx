"use client";

import React, { useState } from 'react';
import { Map, FileText, Users, CreditCard, HelpCircle, Settings, Search, Bell, Copy, Check, Zap, Globe, Eye, TrendingUp, Target, Award, Shield, ChevronDown, ChevronRight, Calendar, PlayCircle, ExternalLink, BarChart3 } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export default function DreamNeighborhood() {
  const [activeTab, setActiveTab] = useState('self-serve');
  const [copied, setCopied] = useState(false);
  const [advancedOpen, setAdvancedOpen] = useState(false);

  // Static script - same for all customers
  const staticScript = `<script src="https://cdn.dreamneighborhood.com/popup.js" async></script>`;

  const copyScript = () => {
    navigator.clipboard.writeText(staticScript);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getTabTitle = () => {
    switch (activeTab) {
      case 'self-serve': return 'Getting Started — Self Serve';
      case 'partners': return 'Getting Started — Partner';
      case 'explorer': return 'View Popup Sample';
      case 'reports': return 'Reports';
      case 'leads': return 'Leads';
      case 'subscription': return 'Subscription';
      case 'team-settings': return 'Team Settings';
      default: return 'Dashboard';
    }
  };

  const benefits = [
    {
      icon: <Globe className="w-8 h-8 text-emerald-600" />,
      title: "Better SEO",
      desc: "Neighborhood data boosts local search rankings and visibility.",
      stat: "+65% Traffic",
    },
    {
      icon: <Eye className="w-8 h-8 text-emerald-600" />,
      title: "Website Engagement",
      desc: "Interactive popups keep buyers on your site 3x longer.",
      stat: "3.2x Longer",
    },
    {
      icon: <Users className="w-8 h-8 text-emerald-600" />,
      title: "Higher Quality Leads",
      desc: "AI-qualified prospects convert at 4x the rate of cold leads.",
      stat: "4x Conversion",
    },
    {
      icon: <Target className="w-8 h-8 text-emerald-600" />,
      title: "Fewer Showings Per Closing",
      desc: "Data-driven insights reduce unnecessary property tours by 58%.",
      stat: "-58% Showings",
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-emerald-600" />,
      title: "Faster Closings",
      desc: "Buyers make informed decisions with rich neighborhood context.",
      stat: "42% Faster",
    },
    {
      icon: <Award className="w-8 h-8 text-emerald-600" />,
      title: "Competitive Advantage",
      desc: "Stand out with premium tech that modern buyers expect.",
      stat: "Industry Leading",
    },
  ];

  const BenefitsSection = () => (
    <div className="mt-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs font-medium">
            <Shield className="w-3.5 h-3.5" /> BENEFITS
          </div>
          <h3 className="text-xl font-semibold text-zinc-900 mt-1">Why Subscribe?</h3>
        </div>
        <Button variant="outline" size="sm" className="text-emerald-700 border-emerald-200 hover:bg-emerald-50 text-xs h-8">
          View All Plans
        </Button>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        {benefits.map((benefit, index) => (
          <Card key={index} className="group hover:shadow-md transition-all border-emerald-100 hover:border-emerald-200">
            <CardContent className="p-5">
              <div className="flex items-start gap-4">
                <div className="mt-0.5 flex-shrink-0 w-9 h-9 bg-emerald-50 rounded-2xl flex items-center justify-center">
                  {benefit.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-base text-zinc-900 leading-tight">{benefit.title}</div>
                  <div className="text-emerald-600 font-mono text-lg font-bold tracking-tighter mt-0.5">{benefit.stat}</div>
                  <p className="text-zinc-500 text-xs leading-tight line-clamp-2 mt-2">{benefit.desc}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="mt-6 flex justify-center">
        <Button className="bg-emerald-600 hover:bg-emerald-700 text-sm px-8 h-9 rounded-xl shadow-sm">
          Activate Full Benefits
        </Button>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'self-serve':
        return (
          <div className="max-w-6xl mx-auto">
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-3 py-1 rounded-3xl mb-2 text-xs font-medium">
                <Zap className="w-3.5 h-3.5" />
                SELF-SERVE
              </div>
              <h1 className="text-2xl font-semibold text-zinc-900 tracking-tight">Get your popup live</h1>
              <p className="text-zinc-500 text-sm mt-1">Install in under 5 minutes. Same simple script for every site.</p>
            </div>

            <div className="grid grid-cols-12 gap-5">
              {/* COLUMN 1 */}
              <div className="col-span-12 lg:col-span-7 space-y-5">
                {/* Subscription Status Box */}
                <Card className="border-emerald-200 shadow-sm">
                  <CardContent className="p-5">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                        <span className="text-sm font-semibold text-zinc-900">Subscription</span>
                        <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full font-medium">ACTIVE</span>
                      </div>
                      <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700 text-xs h-8 rounded-xl px-4">
                        Manage Subscription
                      </Button>
                    </div>
                    <div className="grid grid-cols-3 gap-3 text-xs">
                      <div className="p-3 bg-emerald-50 rounded-xl">
                        <div className="text-zinc-500">Billing</div>
                        <div className="font-semibold text-zinc-900 mt-0.5">Monthly</div>
                      </div>
                      <div className="p-3 bg-emerald-50 rounded-xl">
                        <div className="text-zinc-500">Next Amount</div>
                        <div className="font-semibold text-zinc-900 mt-0.5">$74.50</div>
                      </div>
                      <div className="p-3 bg-emerald-50 rounded-xl">
                        <div className="text-zinc-500">Next Date</div>
                        <div className="font-semibold text-zinc-900 mt-0.5">Jun 4, 2026</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Snippet + Copy */}
                <Card className="border-emerald-200 shadow-sm">
                  <CardContent className="p-5">
                    <div className="flex items-center justify-between mb-3">
                      <div className="text-sm font-semibold text-zinc-900">Installation Script</div>
                      <button onClick={copyScript} className="flex items-center gap-1.5 text-xs text-emerald-700 hover:text-emerald-800 font-medium">
                        {copied ? <><Check className="w-3.5 h-3.5" /> Copied</> : <><Copy className="w-3.5 h-3.5" /> Copy</>}
                      </button>
                    </div>
                    <div className="bg-zinc-950 text-emerald-300 p-3 rounded-xl font-mono text-[11px] border border-emerald-900 overflow-auto">
                      {staticScript}
                    </div>
                    <p className="text-[11px] text-zinc-500 mt-2">Paste before closing &lt;/body&gt; tag.</p>
                  </CardContent>
                </Card>

                {/* Book a meeting */}
                <Card className="border-emerald-200 shadow-sm bg-gradient-to-br from-emerald-50 to-white">
                  <CardContent className="p-5 flex items-center gap-4">
                    <div className="w-11 h-11 bg-emerald-600 text-white rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Calendar className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-sm text-zinc-900">Need help installing?</div>
                      <div className="text-xs text-zinc-600">Book a free 15-minute call — we'll install it for you.</div>
                    </div>
                    <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700 text-xs h-9 rounded-xl px-4 flex-shrink-0">
                      Book Meeting
                    </Button>
                  </CardContent>
                </Card>

                {/* Platform-specific instructions */}
                <Card className="border-emerald-200 shadow-sm">
                  <CardContent className="p-5">
                    <div className="text-sm font-semibold text-zinc-900 mb-3">Platform Instructions</div>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { name: "Squarespace", url: "#" },
                        { name: "Wix", url: "#" },
                        { name: "WordPress", url: "#" },
                        { name: "Webflow", url: "#" },
                        { name: "Shopify", url: "#" },
                        { name: "Other CMS", url: "#" },
                      ].map((p) => (
                        <a key={p.name} href={p.url} className="flex items-center justify-between p-2.5 border border-zinc-200 rounded-xl text-xs text-zinc-700 hover:border-emerald-300 hover:bg-emerald-50 transition-colors">
                          <span className="font-medium">{p.name}</span>
                          <ExternalLink className="w-3 h-3 text-zinc-400" />
                        </a>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* COLUMN 2 */}
              <div className="col-span-12 lg:col-span-5 space-y-5">
                {/* Video demo */}
                <Card className="border-emerald-200 shadow-sm overflow-hidden">
                  <a href="#" className="block group">
                    <div className="aspect-video bg-gradient-to-br from-emerald-700 to-teal-800 relative flex items-center justify-center">
                      <div className="absolute inset-0 bg-[radial-gradient(#ffffff15_1px,transparent_1px)] [background-size:18px]"></div>
                      <div className="relative w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <PlayCircle className="w-10 h-10 text-emerald-600" strokeWidth={1.5} />
                      </div>
                      <div className="absolute bottom-3 left-4 text-white text-xs font-medium">2:14 video</div>
                    </div>
                    <div className="p-4 flex items-center justify-between">
                      <div>
                        <div className="font-semibold text-sm text-zinc-900">Watch Demo</div>
                        <div className="text-xs text-zinc-500">See Dream Neighborhood in action</div>
                      </div>
                      <ChevronRight className="w-4 h-4 text-zinc-400" />
                    </div>
                  </a>
                </Card>

                {/* Benefits list */}
                <Card className="border-emerald-200 shadow-sm">
                  <CardContent className="p-5">
                    <div className="flex items-center gap-2 mb-4">
                      <Shield className="w-4 h-4 text-emerald-600" />
                      <div className="text-sm font-semibold text-zinc-900">Subscription Benefits</div>
                    </div>
                    <div className="space-y-3">
                      {benefits.map((b, i) => (
                        <div key={i} className="flex items-start gap-3 pb-3 border-b last:border-0 last:pb-0 border-emerald-50">
                          <div className="w-7 h-7 bg-emerald-50 rounded-lg flex items-center justify-center flex-shrink-0">
                            {React.cloneElement(b.icon, { className: "w-4 h-4 text-emerald-600" })}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between gap-2">
                              <div className="text-xs font-semibold text-zinc-900 leading-tight">{b.title}</div>
                              <div className="text-[11px] font-mono font-bold text-emerald-600 flex-shrink-0">{b.stat}</div>
                            </div>
                            <p className="text-[11px] text-zinc-500 leading-snug mt-0.5 line-clamp-2">{b.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        );

      case 'partners':
        return (
          <div className="max-w-5xl mx-auto">
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 px-4 py-1 rounded-3xl mb-3 text-sm">
                <Users className="w-4 h-4" />
                PARTNER
              </div>
              <h1 className="text-3xl font-semibold text-zinc-900 tracking-tight">Realty Candy Partnership</h1>
              <p className="text-zinc-600 mt-1">Your partner has embedded the popup. Activate to unlock full features.</p>
            </div>

            <div className="grid grid-cols-12 gap-6">
              <div className="col-span-12 lg:col-span-7">
                <Card className="shadow border-amber-200 overflow-hidden">
                  <CardHeader className="bg-gradient-to-r from-amber-500 to-orange-600 text-white p-8">
                    <div className="flex justify-center mb-6">
                      <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-3xl flex items-center justify-center text-4xl">🏠</div>
                    </div>
                    <CardTitle className="text-center text-3xl">Realty Candy</CardTitle>
                    <p className="text-center text-amber-100 mt-2">Premier Integration Partner</p>
                  </CardHeader>
                  <CardContent className="p-8">
                    <div className="text-center mb-8">
                      <div className="inline bg-emerald-100 text-emerald-700 text-xs px-5 py-2 rounded-3xl font-medium">50% OFF FIRST MONTH</div>
                      <div className="mt-6 text-2xl font-semibold text-zinc-900">Your popup is ready</div>
                      <p className="text-zinc-600 mt-3">Activate now to access Neighborhood Explorer, AI leads, reports, and all subscription benefits.</p>
                    </div>
                    
                    <Button className="w-full h-11 bg-emerald-600 hover:bg-emerald-700 text-base rounded-2xl mb-6">
                      Subscribe Now
                    </Button>
                    
                    <div className="text-center text-xs text-zinc-500">
                      Special offer from Realty Candy • Trial extended if needed
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="col-span-12 lg:col-span-5">
                <Card className="h-full border-emerald-100">
                  <CardContent className="p-6 pt-8">
                    <div className="space-y-5 text-sm">
                      <div className="flex gap-3">
                        <div>🏗️</div>
                        <div className="text-zinc-600">Popup already embedded by Realty Candy</div>
                      </div>
                      <div className="flex gap-3">
                        <div>📈</div>
                        <div className="text-zinc-600">Full analytics &amp; explorer unlocked on subscribe</div>
                      </div>
                      <div className="flex gap-3">
                        <div>💰</div>
                        <div className="font-medium text-emerald-700">50% off first month applied</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <BenefitsSection />
          </div>
        );

      case 'explorer':
      case 'explorers':
        return (
          <div className="max-w-5xl mx-auto">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h1 className="text-3xl font-semibold tracking-tight">Neighborhood Explorer</h1>
                <p className="text-sm text-zinc-500">Live data • Powered by your Professional plan</p>
              </div>
              <Badge className="bg-emerald-600">LIVE</Badge>
            </div>
            
            <div className="grid grid-cols-12 gap-5">
              <div className="col-span-12 lg:col-span-8">
                <Card className="h-80 bg-zinc-900 relative overflow-hidden flex items-center justify-center border-0">
                  <div className="absolute inset-0 bg-[radial-gradient(#ffffff15_1px,transparent_1px)] [background-size:24px]"></div>
                  <div className="text-center z-10 px-8">
                    <Map className="w-12 h-12 text-white mx-auto mb-4" />
                    <div className="text-white text-xl font-medium">Interactive Map Ready</div>
                    <p className="text-emerald-300 text-sm mt-2">Filter schools, amenities, comps. 247 properties analyzed.</p>
                  </div>
                </Card>
              </div>
              <div className="col-span-12 lg:col-span-4 space-y-5">
                <Card className="p-5">
                  <div className="text-xs text-zinc-500">THIS MONTH</div>
                  <div className="text-4xl font-semibold text-emerald-600 mt-1">184</div>
                  <div className="text-xs text-zinc-500">Buyer sessions</div>
                  <div className="mt-4 h-1.5 bg-emerald-100 rounded">
                    <div className="h-1.5 w-3/4 bg-emerald-500 rounded"></div>
                  </div>
                </Card>
                <Card className="p-5 text-sm">
                  <div className="font-medium mb-4 flex items-center gap-2">
                    <Target className="w-4 h-4 text-emerald-600" /> Benefits Impact
                  </div>
                  <div className="space-y-4 text-xs">
                    <div className="flex justify-between"><span>Leads</span><span className="text-emerald-600 font-medium">87 qualified</span></div>
                    <div className="flex justify-between"><span>Engagement</span><span className="text-emerald-600 font-medium">+64%</span></div>
                    <div className="flex justify-between"><span>Showings</span><span className="text-amber-600 font-medium">-31%</span></div>
                  </div>
                </Card>
              </div>
            </div>
            
            <BenefitsSection />
          </div>
        );

      case 'reports':
        return (
          <div className="max-w-5xl mx-auto">
            <div className="mb-6">
              <h1 className="text-3xl font-semibold tracking-tight">Performance Reports</h1>
              <p className="text-sm text-zinc-500">Real-time metrics powered by your Realty Candy partnership</p>
            </div>
            
            <div className="grid grid-cols-3 gap-4 mb-8">
              {[
                { label: "Sessions", value: "12.5k", change: "+28%" },
                { label: "Qualified Leads", value: "347", change: "+41%" },
                { label: "Showings/Close", value: "4.2", change: "-31%" },
              ].map((stat, i) => (
                <Card key={i} className="p-5">
                  <div className="text-xs text-zinc-500">{stat.label}</div>
                  <div className="text-4xl font-semibold mt-2 text-zinc-900">{stat.value}</div>
                  <div className="text-emerald-600 text-xs mt-1 font-medium">{stat.change}</div>
                </Card>
              ))}
            </div>

            <Card className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="font-medium flex items-center gap-2"><BarChart3 className="w-4 h-4" />Analytics Overview</div>
                <Badge variant="outline" className="text-xs">EXPORT</Badge>
              </div>
              <div className="h-52 bg-zinc-100 rounded-2xl flex items-center justify-center text-xs text-zinc-400 border border-dashed">
                SEO • Engagement • Leads • Showings Chart
              </div>
            </Card>

            <BenefitsSection />
          </div>
        );

      case 'leads':
        return (
          <div className="max-w-5xl mx-auto">
            <div className="mb-6 flex justify-between items-center">
              <div>
                <h1 className="text-3xl font-semibold tracking-tight">High-Quality Leads</h1>
                <p className="text-sm text-zinc-500">AI-qualified from popup interactions</p>
              </div>
              <Button size="sm" className="bg-emerald-600 h-9 text-xs">Export CSV</Button>
            </div>
            
            <Card className="overflow-hidden">
              <table className="w-full text-sm">
                <thead className="bg-zinc-50 border-b">
                  <tr className="text-left text-xs text-zinc-500">
                    <th className="px-6 py-4 font-normal">BUYER</th>
                    <th className="px-6 py-4 font-normal">INTEREST</th>
                    <th className="px-6 py-4 font-normal">SCORE</th>
                    <th className="px-6 py-4 font-normal">SOURCE</th>
                    <th className="px-6 py-4 font-normal">STATUS</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Sarah Chen", "3BR West Oaks", "94", "Popup", "Hot"],
                    ["Michael Torres", "Investment", "87", "Explorer", "Warm"],
                    ["Elena Rodriguez", "Downtown Loft", "91", "Popup", "Hot"],
                  ].map((row, i) => (
                    <tr key={i} className="border-b last:border-0 hover:bg-zinc-50">
                      <td className="px-6 py-4 font-medium">{row[0]}</td>
                      <td className="px-6 py-4 text-zinc-600">{row[1]}</td>
                      <td className="px-6 py-4 font-mono text-emerald-600">{row[2]}</td>
                      <td className="px-6 py-4 text-xs text-zinc-500">{row[3]}</td>
                      <td className="px-6 py-4">
                        <Badge className={i % 2 === 0 ? "bg-emerald-600" : ""}>{row[4]}</Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Card>

            <BenefitsSection />
          </div>
        );

      case 'subscription':
        return (
          <div className="max-w-4xl mx-auto">
            <div className="mb-8 text-center">
              <div className="inline-flex px-4 py-1 bg-emerald-100 text-emerald-700 rounded-3xl text-sm font-medium mb-3">CURRENT PLAN</div>
              <h1 className="text-3xl font-semibold">Professional • via Realty Candy</h1>
              <p className="text-emerald-600 mt-1">50% off first month • 11 days remaining</p>
            </div>
            
            <div className="grid grid-cols-3 gap-5">
              {[
                { name: "Starter", price: "49", active: false },
                { name: "Professional", price: "149", active: true },
                { name: "Enterprise", price: "399", active: false },
              ].map((plan) => (
                <Card key={plan.name} className={plan.active ? "ring-2 ring-emerald-600 shadow-md" : ""}>
                  <CardHeader className="text-center pb-4">
                    <CardTitle className={plan.active ? "text-emerald-700" : ""}>{plan.name}</CardTitle>
                    <div className="text-4xl font-semibold mt-3">${plan.price}<span className="text-base font-normal text-zinc-400">/mo</span></div>
                  </CardHeader>
                  <CardContent className="px-6 pb-6 text-center">
                    {plan.active && <div className="text-xs bg-emerald-100 text-emerald-700 inline-block px-6 py-1 rounded-3xl mb-6">ACTIVE • 50% OFF</div>}
                    <Button className={`w-full text-sm h-9 rounded-2xl ${plan.active ? 'bg-emerald-600' : 'bg-zinc-900'}`}>
                      {plan.active ? 'Manage' : 'Upgrade'}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <BenefitsSection />
          </div>
        );

      case 'team-settings':
        return (
          <div className="max-w-4xl mx-auto">
            <h1 className="text-2xl font-semibold text-zinc-900 mb-1">Team Settings</h1>
            <p className="text-zinc-500 text-sm mb-6">Manage team members, roles, and notification preferences.</p>
            <Card className="border-emerald-200">
              <CardContent className="p-6">
                <div className="text-sm text-zinc-600">Team members, roles, billing seats, and notification preferences will appear here.</div>
              </CardContent>
            </Card>
          </div>
        );

      default:
        return <div className="p-20 text-center text-zinc-400">Select a tab from the menu</div>;
    }
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
            <button onClick={() => setActiveTab('self-serve')} className={`w-full flex items-center gap-3 px-5 py-[14px] rounded-2xl text-left text-sm font-medium ${activeTab === 'self-serve' ? 'bg-white text-[#0A6B5F]' : 'hover:bg-white/10'}`}>
              <Zap className="w-5 h-5" />
              Getting Started
              <span className="ml-auto text-[10px] px-2.5 py-px bg-emerald-400/30 text-emerald-100 rounded text-xs">Self Serve</span>
            </button>
            <button onClick={() => setActiveTab('partners')} className={`w-full flex items-center gap-3 px-5 py-[14px] rounded-2xl text-left text-sm font-medium ${activeTab === 'partners' ? 'bg-white text-[#0A6B5F]' : 'hover:bg-white/10'}`}>
              <Users className="w-5 h-5" />
              Getting Started
              <span className="ml-auto text-[10px] px-2.5 py-px bg-emerald-400/30 text-emerald-100 rounded text-xs">Partner</span>
            </button>

            <button
              onClick={() => setAdvancedOpen(!advancedOpen)}
              className="w-full flex items-center gap-3 px-5 py-3 mt-6 rounded-2xl text-left text-xs uppercase tracking-widest text-emerald-200/80 hover:bg-white/5 hover:text-emerald-100 transition-colors"
            >
              <ChevronDown className={`w-4 h-4 transition-transform ${advancedOpen ? '' : '-rotate-90'}`} />
              Advanced
            </button>

            {advancedOpen && (
              <div className="space-y-1 mt-1">
                <button onClick={() => setActiveTab('reports')} className={`w-full flex items-center gap-3 px-5 py-[12px] rounded-2xl text-left text-sm font-medium ${activeTab === 'reports' ? 'bg-white text-[#0A6B5F]' : 'hover:bg-white/10'}`}>
                  <FileText className="w-4 h-4" />
                  Reports
                </button>
                <button onClick={() => setActiveTab('leads')} className={`w-full flex items-center gap-3 px-5 py-[12px] rounded-2xl text-left text-sm font-medium ${activeTab === 'leads' ? 'bg-white text-[#0A6B5F]' : 'hover:bg-white/10'}`}>
                  <Users className="w-4 h-4" />
                  Leads
                </button>
                <button onClick={() => setActiveTab('subscription')} className={`w-full flex items-center gap-3 px-5 py-[12px] rounded-2xl text-left text-sm font-medium ${activeTab === 'subscription' ? 'bg-white text-[#0A6B5F]' : 'hover:bg-white/10'}`}>
                  <CreditCard className="w-4 h-4" />
                  Subscription
                </button>
                <button onClick={() => setActiveTab('team-settings')} className={`w-full flex items-center gap-3 px-5 py-[12px] rounded-2xl text-left text-sm font-medium ${activeTab === 'team-settings' ? 'bg-white text-[#0A6B5F]' : 'hover:bg-white/10'}`}>
                  <Settings className="w-4 h-4" />
                  Team Settings
                </button>
              </div>
            )}
          </nav>

          <div className="px-8 mt-12 text-xs uppercase tracking-widest text-emerald-200 mb-4">COMMUNITY</div>
          <button className="w-full flex items-center gap-3 px-5 py-4 rounded-2xl text-left hover:bg-white/10 text-white text-sm font-medium">
            <HelpCircle className="w-5 h-5" />
            Help & Support
          </button>
        </div>

        <div className="p-6 mt-auto border-t border-white/10">
          <div className="text-xs text-emerald-100/70">© Dream Neighborhood Realty Co.</div>
        </div>
      </div>

      {/* Main Content Area - Light theme matching screenshots */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar - Dynamic */}
        <div className="h-16 border-b bg-white px-8 flex items-center justify-between shadow-sm">
          <div className="flex items-center gap-4 text-sm text-zinc-600">
            <span className="font-medium text-emerald-700">bill@miller mailbox.com</span>
            <span className="text-zinc-300">›</span>
            <span className="font-semibold text-zinc-900">{getTabTitle()}</span>
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

        {/* Main Content */}
        <div className="flex-1 overflow-auto bg-zinc-50 p-6">
          {renderContent()}
        </div>
      </div>
    </div>
  );
}
