"use client";

import React, { useState } from 'react';
import { Home, Map, FileText, BarChart3, Users, CreditCard, HelpCircle, Settings, Plus, Search, Bell, Copy, Check, Zap, Globe, Eye, TrendingUp, Target, Award, Shield } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export default function DreamNeighborhood() {
  const [activeTab, setActiveTab] = useState('self-serve');
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

  const getTabTitle = () => {
    switch (activeTab) {
      case 'self-serve': return 'Self-Serve Getting Started';
      case 'partners': return 'Partners Getting Started';
      case 'explorer': return 'Neighborhood Explorer';
      case 'reports': return 'Manage Reports';
      case 'explorers': return 'Manage Explorers';
      case 'leads': return 'Leads';
      case 'subscription': return 'Subscription & Benefits';
      default: return 'Get Started';
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
    <div className="mt-16">
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-1.5 rounded-full text-sm font-medium mb-4">
          <Shield className="w-4 h-4" /> SUBSCRIPTION BENEFITS
        </div>
        <h2 className="text-3xl font-semibold text-zinc-900">Why Subscribe to Dream Neighborhood?</h2>
        <p className="text-zinc-600 mt-3 max-w-md mx-auto">Unlock powerful tools that transform how you attract, engage, and close real estate buyers.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {benefits.map((benefit, index) => (
          <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-emerald-100 hover:border-emerald-200 overflow-hidden">
            <CardContent className="p-8">
              <div className="mb-6 flex justify-center">
                <div className="w-16 h-16 bg-emerald-50 rounded-3xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  {benefit.icon}
                </div>
              </div>
              <div className="text-center">
                <div className="font-semibold text-xl text-zinc-900 mb-2">{benefit.title}</div>
                <div className="text-emerald-600 font-mono text-2xl font-bold mb-3 tracking-tighter">{benefit.stat}</div>
                <p className="text-zinc-600 text-sm leading-relaxed">{benefit.desc}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="mt-10 text-center">
        <Button className="bg-emerald-600 hover:bg-emerald-700 text-lg px-10 h-14 rounded-2xl">
          Start Your Free 14-Day Trial
        </Button>
        <p className="text-xs text-zinc-500 mt-4">Cancel anytime. No credit card required to start.</p>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'self-serve':
        return (
          <div className="max-w-5xl mx-auto">
            <div className="mb-12">
              <div className="inline-flex items-center gap-3 bg-emerald-100 text-emerald-700 px-6 py-2 rounded-3xl mb-6">
                <Zap className="w-5 h-5" />
                <span className="font-semibold tracking-wide">SELF-SERVE</span>
              </div>
              <h1 className="text-5xl font-semibold text-zinc-900 tracking-tighter">Get Your Popup Live in Minutes</h1>
              <p className="text-zinc-600 mt-4 text-xl max-w-2xl">Install our intelligent neighborhood popup on your website. No redesign. Instant value for buyers. All the subscription benefits unlocked.</p>
            </div>

            <div className="grid grid-cols-12 gap-8">
              {/* Enhanced Self-Serve Card */}
              <div className="col-span-12 lg:col-span-7">
                <Card className="shadow-xl border-0 bg-white overflow-hidden">
                  <CardHeader className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white p-10">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-white/20 backdrop-blur rounded-3xl flex items-center justify-center">
                        <Zap className="w-8 h-8" />
                      </div>
                      <div>
                        <CardTitle className="text-white text-3xl">Self-Serve Installation</CardTitle>
                        <CardDescription className="text-emerald-100 text-lg">Add the popup to your own real estate website</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-10 space-y-10">
                    <div>
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-mono text-sm">1</div>
                        <label className="text-xl font-semibold text-zinc-900">Enter your website domain</label>
                      </div>
                      <div className="flex gap-4">
                        <input 
                          type="text" 
                          value={domain} 
                          onChange={(e) => setDomain(e.target.value)}
                          className="flex-1 border-2 border-zinc-200 focus:border-emerald-600 rounded-3xl px-8 py-5 text-lg font-mono shadow-sm"
                          placeholder="yourwebsite.com"
                        />
                        <Button onClick={generateSnippet} size="lg" className="bg-emerald-600 hover:bg-emerald-700 px-12 text-lg h-[62px] rounded-3xl">
                          Generate Script
                        </Button>
                      </div>
                    </div>

                    {showSnippet && (
                      <div className="bg-zinc-950 text-emerald-300 p-10 rounded-3xl font-mono text-sm border border-emerald-900 shadow-inner relative overflow-hidden">
                        <div className="flex justify-between items-center mb-6 text-emerald-400 text-xs tracking-[2px] uppercase">
                          <div>INSTALLATION CODE - COPY &amp; PASTE</div>
                          <button onClick={copyToClipboard} className="flex items-center gap-2 hover:text-emerald-100 transition-colors px-4 py-1.5 rounded-xl hover:bg-white/10">
                            {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                            {copied ? 'COPIED ✓' : 'COPY CODE'}
                          </button>
                        </div>
                        <pre className="whitespace-pre-wrap text-emerald-200 bg-black/50 p-6 rounded-2xl mb-6 text-[13px] leading-relaxed border border-white/10">{snippet}</pre>
                        <p className="text-xs text-emerald-500/80">Add this script tag just before the closing &lt;/body&gt; tag on every page of your site.</p>
                      </div>
                    )}

                    <div className="pt-6 border-t border-zinc-100">
                      <Button className="w-full h-16 text-lg bg-gradient-to-r from-emerald-600 to-teal-600 hover:brightness-110 rounded-3xl shadow-lg">
                        Install &amp; Activate Subscription • 14-Day Free Trial
                      </Button>
                      <p className="text-center text-xs text-zinc-500 mt-4">Unlocks all benefits including SEO boosts, lead gen, and analytics</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Benefits Teaser Sidebar */}
              <div className="col-span-12 lg:col-span-5">
                <Card className="h-full shadow-xl border-emerald-100 bg-gradient-to-br from-zinc-50 to-white">
                  <CardHeader>
                    <CardTitle className="text-2xl flex items-center gap-3">
                      <Award className="text-amber-500" /> What You Get
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6 pt-2">
                    <div className="space-y-4">
                      {benefits.slice(0, 4).map((b, i) => (
                        <div key={i} className="flex gap-4">
                          <div className="text-emerald-500 mt-1">{b.icon}</div>
                          <div>
                            <div className="font-medium text-zinc-900">{b.title}</div>
                            <div className="text-sm text-zinc-500 line-clamp-2">{b.desc}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <Button variant="outline" className="w-full border-emerald-200 text-emerald-700 hover:bg-emerald-50">
                      See All 6 Benefits Below ↓
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>

            <BenefitsSection />
          </div>
        );

      case 'partners':
        return (
          <div className="max-w-5xl mx-auto">
            <div className="mb-12">
              <div className="inline-flex items-center gap-3 bg-amber-100 text-amber-700 px-6 py-2 rounded-3xl mb-6">
                <Users className="w-5 h-5" />
                <span className="font-semibold tracking-wide">PARTNER NETWORK</span>
              </div>
              <h1 className="text-5xl font-semibold text-zinc-900 tracking-tighter">Partner-Powered Neighborhood Experience</h1>
              <p className="text-zinc-600 mt-4 text-xl max-w-2xl">Your website partner has integrated Dream Neighborhood. Activate your account to deliver premium buyer experiences and unlock all subscription benefits.</p>
            </div>

            <div className="grid grid-cols-12 gap-8">
              <div className="col-span-12 lg:col-span-7">
                <Card className="shadow-xl border-0 overflow-hidden">
                  <CardHeader className="bg-gradient-to-r from-amber-500 to-orange-600 text-white p-12">
                    <div className="flex justify-center mb-8">
                      <div className="w-24 h-24 bg-white/10 backdrop-blur-3xl rounded-full flex items-center justify-center border border-white/30">
                        <Users className="w-12 h-12" />
                      </div>
                    </div>
                    <CardTitle className="text-center text-4xl text-white">Your Popup is Already Installed</CardTitle>
                    <CardDescription className="text-center text-amber-100 text-xl mt-4 max-w-md mx-auto">Your development partner embedded the neighborhood intelligence directly into your site.</CardDescription>
                  </CardHeader>
                  <CardContent className="p-12 space-y-8 text-center">
                    <div className="mx-auto max-w-xs">
                      <div className="text-emerald-600 font-semibold text-sm tracking-widest mb-3">READY TO ACTIVATE</div>
                      <h3 className="text-3xl font-semibold text-zinc-900 mb-6">Unlock Full Features &amp; All Subscription Benefits</h3>
                      <p className="text-zinc-600 leading-relaxed mb-10">Instant access to neighborhood explorer, AI lead qualification, detailed reports, and the powerful benefits that drive more closings.</p>
                    </div>
                    
                    <Button className="w-full h-16 text-xl bg-gradient-to-r from-amber-600 to-orange-600 hover:brightness-110 rounded-3xl shadow-xl text-white">
                      Activate Full Experience Now
                    </Button>
                    
                    <div className="pt-8 border-t flex justify-center">
                      <div className="text-xs bg-white border border-amber-200 text-amber-700 px-6 py-3 rounded-2xl flex items-center gap-2">
                        💡 Your partner can apply special discounts or extend your trial
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="col-span-12 lg:col-span-5">
                <Card className="h-full shadow-xl border-amber-100">
                  <CardHeader className="bg-amber-50">
                    <CardTitle className="text-amber-800 flex items-center gap-3">
                      <Shield className="w-6 h-6" /> Partner Benefits
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-8 space-y-8">
                    <div className="text-sm text-zinc-600 space-y-6">
                      <div className="flex gap-4">
                        <div className="text-2xl">🏗️</div>
                        <div>Seamless integration without touching your existing design</div>
                      </div>
                      <div className="flex gap-4">
                        <div className="text-2xl">📈</div>
                        <div>White-label options and revenue share opportunities</div>
                      </div>
                      <div className="flex gap-4">
                        <div className="text-2xl">🤝</div>
                        <div>Priority support and co-branded marketing materials</div>
                      </div>
                    </div>
                    <Button variant="outline" className="w-full border-amber-300 text-amber-700">Contact Partner Support</Button>
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
          <div className="max-w-6xl mx-auto">
            <div className="mb-12 flex justify-between items-end">
              <div>
                <h1 className="text-5xl font-semibold tracking-tighter text-zinc-900">Neighborhood Explorer</h1>
                <p className="text-xl text-zinc-600 mt-3">Interactive maps and insights powered by your subscription benefits</p>
              </div>
              <Badge className="bg-emerald-600 text-white px-6 py-2 text-sm">LIVE DATA</Badge>
            </div>
            
            <div className="grid grid-cols-12 gap-6">
              {/* Mock Map Area */}
              <div className="col-span-12 lg:col-span-8">
                <Card className="overflow-hidden border-0 shadow-2xl h-[520px] bg-zinc-900 relative flex items-center justify-center">
                  <div className="absolute inset-0 bg-[radial-gradient(#ffffff10_1px,transparent_1px)] [background-size:20px_20px]"></div>
                  <div className="text-center z-10">
                    <div className="mx-auto w-32 h-32 bg-white/10 backdrop-blur rounded-3xl flex items-center justify-center mb-8 border border-white/20">
                      <Map className="w-16 h-16 text-white" />
                    </div>
                    <h3 className="text-white text-3xl font-medium">Interactive Neighborhood Map</h3>
                    <p className="text-emerald-300 mt-3 max-w-xs mx-auto">Hover, filter by schools, crime, amenities, comps. Powered by real-time data from your subscription.</p>
                    <Button className="mt-10 bg-white text-zinc-900 hover:bg-white/90">Launch Full Explorer</Button>
                  </div>
                  <div className="absolute bottom-8 left-8 bg-black/70 text-white text-xs px-4 py-2 rounded-2xl flex items-center gap-2">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                    247 Properties Analyzed
                  </div>
                </Card>
              </div>
              
              {/* Sidebar Stats with Benefits */}
              <div className="col-span-12 lg:col-span-4 space-y-6">
                <Card className="p-8">
                  <div className="flex justify-between mb-6">
                    <div>
                      <div className="text-xs uppercase tracking-widest text-zinc-500">THIS MONTH</div>
                      <div className="text-5xl font-semibold text-emerald-600 mt-1">184</div>
                      <div className="text-sm text-zinc-600">Buyer Interactions</div>
                    </div>
                    <TrendingUp className="w-10 h-10 text-emerald-500" />
                  </div>
                  <div className="h-2 bg-zinc-100 rounded-full overflow-hidden">
                    <div className="h-2 w-[73%] bg-emerald-500 rounded-full"></div>
                  </div>
                  <p className="text-xs text-emerald-600 mt-4">+42% from last month thanks to better engagement</p>
                </Card>
                
                <Card className="p-8 bg-gradient-to-br from-emerald-50 to-white border-emerald-100">
                  <h4 className="font-semibold mb-6 flex items-center gap-2 text-emerald-700">
                    <Target className="w-5 h-5" /> Key Benefits in Action
                  </h4>
                  <div className="space-y-5 text-sm">
                    <div className="flex justify-between items-center py-2 border-b">
                      <span>Higher Quality Leads</span>
                      <span className="font-mono text-emerald-600">87 qualified</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b">
                      <span>Engagement Rate</span>
                      <span className="font-mono text-emerald-600">64%</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span>Showings Reduced</span>
                      <span className="font-mono text-emerald-600">-31%</span>
                    </div>
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
            <div className="mb-12">
              <h1 className="text-5xl font-semibold tracking-tighter">Performance Reports</h1>
              <p className="mt-4 text-xl text-zinc-600">Track how your subscription is driving SEO gains, engagement, and lead quality.</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
              {[
                { label: "Website Sessions", value: "12,459", change: "+28%", color: "emerald" },
                { label: "Qualified Leads", value: "347", change: "+41%", color: "emerald" },
                { label: "Avg. Showings/Closing", value: "4.2", change: "-1.8", color: "amber" },
              ].map((stat, i) => (
                <Card key={i} className="p-8">
                  <div className="text-sm text-zinc-500 mb-3">{stat.label}</div>
                  <div className="text-6xl font-semibold text-zinc-900 tracking-tighter mb-1">{stat.value}</div>
                  <div className={`text-sm font-medium ${stat.color === 'emerald' ? 'text-emerald-600' : 'text-amber-600'}`}>{stat.change} this month</div>
                </Card>
              ))}
            </div>
            
            <Card className="p-10">
              <h3 className="font-semibold text-xl mb-8 flex items-center gap-3"><BarChart3 className="w-6 h-6" /> Detailed Analytics Dashboard</h3>
              <div className="h-80 bg-zinc-100 rounded-3xl flex items-center justify-center text-zinc-400 text-sm border border-dashed border-zinc-300">
                [Beautiful Chart Visualizing SEO, Engagement, Lead Quality, and Showings Metrics]
              </div>
              <p className="text-center text-xs text-zinc-500 mt-8">All metrics tied directly to your subscription benefits. Exportable reports available.</p>
            </Card>
            
            <BenefitsSection />
          </div>
        );

      case 'leads':
        return (
          <div className="max-w-5xl mx-auto">
            <div className="mb-12 flex items-center justify-between">
              <div>
                <h1 className="text-5xl font-semibold tracking-tighter text-zinc-900">High-Quality Leads</h1>
                <p className="text-xl text-zinc-600 mt-2">Leads generated through your neighborhood popup and subscription features.</p>
              </div>
              <Button size="lg" className="bg-emerald-600">Export Leads CSV</Button>
            </div>
            
            <div className="bg-white rounded-3xl shadow border p-2">
              <table className="w-full">
                <thead>
                  <tr className="border-b text-left text-xs uppercase tracking-widest text-zinc-500">
                    <th className="py-6 px-8 font-normal">Buyer Name</th>
                    <th className="py-6 px-8 font-normal">Interest</th>
                    <th className="py-6 px-8 font-normal">Engagement Score</th>
                    <th className="py-6 px-8 font-normal">Source</th>
                    <th className="py-6 px-8 font-normal">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y text-sm">
                  {[
                    ["Sarah Chen", "3BR in West Oaks", "94", "Popup", "Hot"],
                    ["Michael Torres", "Investment Property", "87", "Explorer", "Warm"],
                    ["Elena Rodriguez", "Downtown Loft", "91", "Popup", "Hot"],
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-zinc-50">
                      {row.map((cell, j) => (
                        <td key={j} className="py-6 px-8 font-medium">{cell}</td>
                      ))}
                      <td className="py-6 px-8">
                        <Badge variant={i === 0 || i === 2 ? "default" : "secondary"} className={i === 0 || i === 2 ? "bg-emerald-600" : ""}>
                          {row[4]}
                        </Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="mt-12">
              <BenefitsSection />
            </div>
          </div>
        );

      case 'subscription':
        return (
          <div className="max-w-4xl mx-auto pt-8">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-6 text-emerald-700 border-emerald-200">PREMIUM PLAN</Badge>
              <h1 className="text-6xl font-semibold tracking-tighter">Choose Your Plan</h1>
              <p className="mt-6 text-xl text-zinc-600 max-w-md mx-auto">Every plan includes the core benefits that drive your business forward.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: "Starter", price: "49", popular: false, features: ["Basic popup", "1 neighborhood", "Basic leads", "Email support"] },
                { name: "Professional", price: "149", popular: true, features: ["Full popup + explorer", "Unlimited neighborhoods", "AI lead scoring", "Priority support", "All benefits included"] },
                { name: "Enterprise", price: "399", popular: false, features: ["Everything in Pro", "White label", "API access", "Dedicated manager", "Custom integrations"] },
              ].map((plan, index) => (
                <Card key={index} className={`relative ${plan.popular ? 'border-emerald-500 shadow-2xl scale-[1.03]' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-emerald-600 text-white text-xs px-6 py-1 rounded-full font-medium">MOST POPULAR</div>
                  )}
                  <CardHeader className="text-center pt-10">
                    <CardTitle className="text-2xl">{plan.name}</CardTitle>
                    <div className="mt-6 flex items-baseline justify-center">
                      <span className="text-7xl font-semibold tracking-tighter">${plan.price}</span>
                      <span className="text-zinc-500 ml-2">/mo</span>
                    </div>
                  </CardHeader>
                  <CardContent className="px-10 pb-10">
                    <ul className="space-y-4 mb-10 text-sm">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-3">
                          <Check className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button className={`w-full h-14 rounded-2xl text-base ${plan.popular ? 'bg-emerald-600 hover:bg-emerald-700' : 'bg-zinc-900 hover:bg-zinc-800'}`}>
                      {plan.popular ? 'Start 14-Day Free Trial' : 'Subscribe Now'}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="mt-20">
              <BenefitsSection />
            </div>
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
            {/* Self-Serve Getting Started */}
            <button onClick={() => setActiveTab('self-serve')} className={`w-full flex items-center gap-3 px-5 py-[14px] rounded-2xl text-left text-sm font-medium ${activeTab === 'self-serve' ? 'bg-white text-[#0A6B5F]' : 'hover:bg-white/10'}`}>
              <Zap className="w-5 h-5" />
              Getting Started
              <span className="ml-auto text-[10px] px-2.5 py-px bg-emerald-400/20 text-emerald-200 rounded-full text-xs">SELF-SERVE</span>
            </button>
            {/* Partners Getting Started */}
            <button onClick={() => setActiveTab('partners')} className={`w-full flex items-center gap-3 px-5 py-[14px] rounded-2xl text-left text-sm font-medium ${activeTab === 'partners' ? 'bg-white text-[#0A6B5F]' : 'hover:bg-white/10'}`}>
              <Users className="w-5 h-5" />
              Getting Started
              <span className="ml-auto text-[10px] px-2.5 py-px bg-amber-400/20 text-amber-200 rounded-full text-xs">PARTNERS</span>
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
        <div className="flex-1 p-10 overflow-auto bg-zinc-50">
          {renderContent()}
        </div>
      </div>
    </div>
  );
}
