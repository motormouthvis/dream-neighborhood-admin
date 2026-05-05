"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Copy,
  Check,
  Zap,
  Globe,
  Eye,
  Users,
  Target,
  TrendingUp,
  Award,
  Shield,
  Calendar,
  ExternalLink,
  Settings2,
  ChevronRight,
  Sparkles,
  Play,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const STATIC_SCRIPT = `<script src="https://app.dreamneighborhood.com/explorer/sdk.js" async></script>`;

const benefits = [
  {
    icon: <Globe className="w-4 h-4 text-emerald-700" />,
    title: "Better SEO",
    desc: "Neighborhood data boosts local search rankings and visibility.",
  },
  {
    icon: <Eye className="w-4 h-4 text-emerald-700" />,
    title: "Website Engagement",
    desc: "Interactive popups keep buyers on your site longer.",
  },
  {
    icon: <Users className="w-4 h-4 text-emerald-700" />,
    title: "Higher Quality Leads",
    desc: "AI-qualified prospects convert at higher rates than cold leads.",
  },
  {
    icon: <Target className="w-4 h-4 text-emerald-700" />,
    title: "Fewer Showings Per Closing",
    desc: "Data-driven insights reduce unnecessary property tours.",
  },
  {
    icon: <TrendingUp className="w-4 h-4 text-emerald-700" />,
    title: "Faster Closings",
    desc: "Buyers make informed decisions with rich neighborhood context.",
  },
  {
    icon: <Award className="w-4 h-4 text-emerald-700" />,
    title: "Competitive Advantage",
    desc: "Stand out with premium tech that modern buyers expect.",
  },
];

const platforms = [
  { name: "Squarespace", slug: "squarespace", emoji: "▢" },
  { name: "Wix", slug: "wix", emoji: "✦" },
  { name: "WordPress", slug: "wordpress", emoji: "Ⓦ" },
  { name: "Webflow", slug: "webflow", emoji: "❖" },
  { name: "Shopify", slug: "shopify", emoji: "🛍" },
  { name: "GoDaddy", slug: "godaddy", emoji: "🏷" },
  { name: "Other / HTML", slug: "other", emoji: "<>" },
];

export default function SelfServeContent() {
  const [copied, setCopied] = useState(false);
  const [videoPlaying, setVideoPlaying] = useState(false);

  const copyScript = () => {
    navigator.clipboard.writeText(STATIC_SCRIPT);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-6xl mx-auto">
      {/* Page header */}
      <div className="mb-6">
        <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-3 py-1 rounded-3xl mb-2 text-xs font-medium">
          <Zap className="w-3.5 h-3.5" /> SELF-SERVE
        </div>
        <h1 className="text-2xl font-semibold text-zinc-900 tracking-tight">
          Dream Neighborhood Popup
        </h1>
        <p className="text-zinc-500 text-sm mt-1">
          Install in under 5 minutes. Same simple script for every site.
        </p>
      </div>

      {/* HERO — Activate your popup */}
      <div className="mb-5 relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0A6B5F] via-emerald-700 to-teal-800 shadow-xl shadow-emerald-900/25 ring-1 ring-emerald-900/10">
        <div
          className="absolute inset-0 opacity-15 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="absolute -top-24 -right-24 w-80 h-80 bg-emerald-300/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-teal-400/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative grid md:grid-cols-2 gap-6 p-7 md:p-8">
          {/* Left — pitch */}
          <div className="flex flex-col">
            <div className="inline-flex items-center gap-1.5 self-start bg-white/15 backdrop-blur-sm border border-white/25 px-2.5 py-1 rounded-full text-[11px] text-white font-semibold tracking-widest uppercase mb-4">
              <Sparkles className="w-3 h-3" /> Activate Your Popup
            </div>
            <h2 className="text-3xl font-bold text-white tracking-tight leading-tight mb-3">
              Add neighborhood data
              <br />
              to your site.
            </h2>
            <p className="text-emerald-50/90 text-sm leading-relaxed mb-5">
              One script. Every platform. Edits go live instantly — no redeploys, no
              maintenance.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-emerald-50">
                <CheckCircle2 className="w-4 h-4 text-emerald-200 flex-shrink-0" />
                <span>Install in under 5 minutes</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-emerald-50">
                <CheckCircle2 className="w-4 h-4 text-emerald-200 flex-shrink-0" />
                <span>Works on Squarespace, Wix, WordPress and more</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-emerald-50">
                <CheckCircle2 className="w-4 h-4 text-emerald-200 flex-shrink-0" />
                <span>Updates go live automatically</span>
              </div>
            </div>
          </div>

          {/* Right — install script */}
          <div className="flex flex-col bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl p-5 shadow-inner shadow-emerald-950/10">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-white/15 border border-white/25 rounded-md flex items-center justify-center">
                  <Zap className="w-3 h-3 text-emerald-100" />
                </div>
                <div>
                  <div className="text-[11px] font-bold tracking-[0.18em] uppercase text-emerald-100">
                    Install Script
                  </div>
                  <div className="text-[10px] text-emerald-100/70">
                    Paste before &lt;/body&gt; on every page
                  </div>
                </div>
              </div>
              <span className="text-[9px] text-emerald-100 bg-emerald-400/15 border border-emerald-300/30 px-2 py-0.5 rounded-full font-semibold tracking-wider uppercase">
                One-time
              </span>
            </div>
            <div className="bg-emerald-950/40 border border-emerald-300/15 rounded-xl px-3.5 py-3 font-mono text-[11px] text-emerald-100 overflow-auto leading-relaxed">
              {STATIC_SCRIPT}
            </div>
            <button
              onClick={copyScript}
              className={`mt-3 w-full h-12 text-base font-semibold rounded-xl shadow-lg shadow-emerald-950/30 transition-all hover:shadow-xl flex items-center justify-center gap-2 ${
                copied
                  ? "bg-emerald-400 text-[#053b34] hover:bg-emerald-300"
                  : "bg-white text-[#0A6B5F] hover:bg-emerald-50"
              }`}
            >
              {copied ? (
                <>
                  <Check className="w-5 h-5" /> Copied to clipboard
                </>
              ) : (
                <>
                  <Copy className="w-5 h-5" /> Copy Install Script
                </>
              )}
            </button>
            <div className="text-center mt-3 text-[11px] text-emerald-100/70">
              Edits to your popup update automatically — no need to re-paste
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-5">
        {/* COLUMN 1 — left, 7/12 */}
        <div className="col-span-12 lg:col-span-7 flex flex-col gap-5">
          {/* Subscription status — clean white */}
          <Card className="bg-white border border-zinc-200 shadow-sm">
            <CardContent className="p-4 space-y-3">
              <div className="flex items-center gap-3 flex-wrap">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                  <span className="text-[10px] bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full font-semibold tracking-wider">
                    ACTIVE
                  </span>
                </div>
                <div className="text-xs text-zinc-500">Plan</div>
                <div className="inline-flex bg-zinc-50 border border-zinc-200 rounded-lg overflow-hidden text-[11px] font-medium">
                  <span className="px-2.5 py-1 text-zinc-500">Solo</span>
                  <span className="px-2.5 py-1 bg-emerald-600 text-white">Team</span>
                  <span className="px-2.5 py-1 text-zinc-500">Enterprise</span>
                </div>
                <Button
                  size="sm"
                  variant="outline"
                  className="ml-auto text-xs h-8 rounded-lg px-4 font-medium border-emerald-200 text-emerald-700 hover:bg-emerald-50"
                >
                  Manage Subscription
                </Button>
              </div>
              <div className="flex items-center gap-5 text-xs text-zinc-600 border-t border-zinc-100 pt-3">
                <div>
                  <span className="text-zinc-400">Billing:</span>{" "}
                  <span className="font-semibold text-zinc-900">Monthly</span>
                </div>
                <div>
                  <span className="text-zinc-400">Next amount:</span>{" "}
                  <span className="font-semibold text-zinc-900">$74.50</span>
                </div>
                <div>
                  <span className="text-zinc-400">Next date:</span>{" "}
                  <span className="font-semibold text-zinc-900">Jun 4, 2026</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Customize popup */}
          <Card className="bg-white border border-zinc-200 shadow-sm hover:shadow-md hover:border-emerald-200 transition-all">
            <CardContent className="p-5 flex items-center gap-4">
              <div className="w-11 h-11 bg-gradient-to-br from-emerald-500 to-teal-600 text-white rounded-2xl flex items-center justify-center flex-shrink-0 shadow-md shadow-emerald-500/25">
                <Settings2 className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-semibold text-sm text-zinc-900">Customize your popup</div>
                <div className="text-xs text-zinc-600">
                  Default address, accent color, data shown, lead form, position, tooltip,
                  and more.
                </div>
              </div>
              <Link
                href="/popup-settings"
                className="flex-shrink-0 inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-xl bg-emerald-600 text-white hover:bg-emerald-700 shadow-sm"
              >
                Edit Popup <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </CardContent>
          </Card>

          {/* Book a meeting */}
          <Card className="bg-white border border-zinc-200 shadow-sm hover:shadow-md hover:border-emerald-200 transition-all">
            <CardContent className="p-5 flex items-center gap-4">
              <div className="w-11 h-11 bg-gradient-to-br from-emerald-500 to-teal-600 text-white rounded-2xl flex items-center justify-center flex-shrink-0 shadow-md shadow-emerald-500/25">
                <Calendar className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-semibold text-sm text-zinc-900">
                  Need help installing?
                </div>
                <div className="text-xs text-zinc-600">
                  Book a free 15-minute call — we'll install it for you.
                </div>
              </div>
              <a
                href="https://dreamneighborhood.com/book-a-call"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-xl bg-emerald-600 text-white hover:bg-emerald-700 shadow-sm"
              >
                Book a Call <ExternalLink className="w-3 h-3" />
              </a>
            </CardContent>
          </Card>

          {/* Platform instructions — flex-1 to balance height */}
          <Card className="bg-white border border-zinc-200 shadow-sm flex-1">
            <CardContent className="p-5">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-7 h-7 bg-emerald-100 text-emerald-700 rounded-lg flex items-center justify-center">
                  <Globe className="w-3.5 h-3.5" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-zinc-900">
                    Platform Instructions
                  </div>
                  <div className="text-[11px] text-zinc-500">
                    Step-by-step guides for your site builder
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {platforms.map((p) => (
                  <a
                    key={p.slug}
                    href={`/install/${p.slug}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-2.5 bg-white border border-zinc-200 rounded-xl text-xs text-zinc-700 hover:border-emerald-300 hover:bg-emerald-50/40 hover:text-emerald-700 transition-all"
                  >
                    <span className="flex items-center gap-2">
                      <span className="text-base leading-none">{p.emoji}</span>
                      <span className="font-medium">{p.name}</span>
                    </span>
                    <ExternalLink className="w-3 h-3 text-zinc-400" />
                  </a>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* COLUMN 2 — right, 5/12 */}
        <div className="col-span-12 lg:col-span-5 flex flex-col gap-5">
          {/* Benefits */}
          <Card className="border border-zinc-200 shadow-sm overflow-hidden bg-white">
            <CardContent className="p-5">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-7 h-7 bg-emerald-100 text-emerald-700 rounded-lg flex items-center justify-center">
                  <Shield className="w-3.5 h-3.5" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-zinc-900 leading-tight">
                    Subscription Benefits
                  </div>
                  <div className="text-[11px] text-zinc-500 leading-tight">
                    What you get with your Team plan
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                {benefits.map((b, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-3 rounded-xl bg-gradient-to-br from-emerald-50/40 to-white border border-emerald-100/60 hover:border-emerald-200 transition-colors"
                  >
                    <div className="w-7 h-7 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      {b.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs font-semibold text-zinc-900 leading-tight">
                        {b.title}
                      </div>
                      <p className="text-[11px] text-zinc-500 leading-snug mt-0.5">
                        {b.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Demo video — branded thumbnail, defers iframe load until click */}
          <Card className="border border-zinc-200 shadow-sm overflow-hidden flex-1 flex flex-col">
            <div className="aspect-video relative bg-gradient-to-br from-[#0A6B5F] via-emerald-700 to-teal-800 flex-shrink-0">
              {videoPlaying ? (
                <iframe
                  src="https://www.youtube.com/embed/j01aKyHJ2E8?rel=0&autoplay=1"
                  title="Dream Neighborhood Demo"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full"
                />
              ) : (
                <button
                  type="button"
                  onClick={() => setVideoPlaying(true)}
                  className="absolute inset-0 group cursor-pointer"
                  aria-label="Play demo video"
                >
                  <div
                    className="absolute inset-0 opacity-20 pointer-events-none"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle, rgba(255,255,255,0.6) 1px, transparent 1px)",
                      backgroundSize: "20px 20px",
                    }}
                  />
                  <div className="absolute top-1/4 left-1/3 w-40 h-40 bg-emerald-400/20 rounded-full blur-3xl pointer-events-none" />
                  <div className="absolute -bottom-10 -right-10 w-44 h-44 bg-teal-300/15 rounded-full blur-3xl pointer-events-none" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-2xl shadow-emerald-950/40 ring-4 ring-white/20 group-hover:scale-110 group-hover:shadow-emerald-950/60 transition-all">
                      <Play className="w-7 h-7 text-[#0A6B5F] fill-[#0A6B5F] ml-1" />
                    </div>
                    <div className="text-white font-semibold text-sm tracking-tight drop-shadow">
                      Watch the 2-minute demo
                    </div>
                  </div>
                </button>
              )}
            </div>
            <div className="p-4 flex items-center justify-between bg-white flex-1">
              <div>
                <div className="font-semibold text-sm text-zinc-900">See it in action</div>
                <div className="text-xs text-zinc-500">A quick tour of Dream Neighborhood</div>
              </div>
              <a
                href="https://youtu.be/j01aKyHJ2E8"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-emerald-700 font-medium hover:text-emerald-800 flex items-center gap-1"
              >
                Open on YouTube <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
