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
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const STATIC_SCRIPT = `<script src="https://app.dreamneighborhood.com/explorer/sdk.js" async></script>`;

const benefits = [
  {
    icon: <Globe className="w-4 h-4 text-emerald-600" />,
    title: "Better SEO",
    desc: "Neighborhood data boosts local search rankings and visibility.",
  },
  {
    icon: <Eye className="w-4 h-4 text-emerald-600" />,
    title: "Website Engagement",
    desc: "Interactive popups keep buyers on your site longer.",
  },
  {
    icon: <Users className="w-4 h-4 text-emerald-600" />,
    title: "Higher Quality Leads",
    desc: "AI-qualified prospects convert at higher rates than cold leads.",
  },
  {
    icon: <Target className="w-4 h-4 text-emerald-600" />,
    title: "Fewer Showings Per Closing",
    desc: "Data-driven insights reduce unnecessary property tours.",
  },
  {
    icon: <TrendingUp className="w-4 h-4 text-emerald-600" />,
    title: "Faster Closings",
    desc: "Buyers make informed decisions with rich neighborhood context.",
  },
  {
    icon: <Award className="w-4 h-4 text-emerald-600" />,
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

  const copyScript = () => {
    navigator.clipboard.writeText(STATIC_SCRIPT);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-6">
        <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-3 py-1 rounded-3xl mb-2 text-xs font-medium">
          <Zap className="w-3.5 h-3.5" /> SELF-SERVE
        </div>
        <h1 className="text-2xl font-semibold text-zinc-900 tracking-tight">
          Dream Neighborhood Popup Settings
        </h1>
        <p className="text-zinc-500 text-sm mt-1">
          Install in under 5 minutes. Same simple script for every site.
        </p>
      </div>

      <div className="grid grid-cols-12 gap-5">
        {/* COLUMN 1 — equal-height column */}
        <div className="col-span-12 lg:col-span-7 flex flex-col gap-5">
          {/* Subscription status — TWO LINES */}
          <Card className="border border-emerald-200 shadow-sm bg-gradient-to-r from-emerald-50/80 via-white to-emerald-50/50 overflow-hidden">
            <CardContent className="p-4 space-y-3">
              <div className="flex items-center gap-3 flex-wrap">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                  <span className="text-[10px] bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full font-semibold tracking-wider">
                    ACTIVE
                  </span>
                </div>
                <div className="text-xs text-zinc-500">Plan</div>
                <div className="inline-flex bg-white border border-emerald-200 rounded-lg overflow-hidden text-[11px] font-medium">
                  <span className="px-2.5 py-1 text-zinc-500">Solo</span>
                  <span className="px-2.5 py-1 bg-emerald-600 text-white">Team</span>
                  <span className="px-2.5 py-1 text-zinc-500">Enterprise</span>
                </div>
                <Button
                  size="sm"
                  className="ml-auto bg-emerald-600 hover:bg-emerald-700 text-xs h-8 rounded-lg px-4 font-medium shadow-sm"
                >
                  Manage Subscription
                </Button>
              </div>
              <div className="flex items-center gap-5 text-xs text-zinc-600 border-t border-emerald-100/80 pt-3">
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

          {/* Snippet box — light, shaded */}
          <Card className="border border-emerald-100 shadow-sm bg-gradient-to-br from-emerald-50/40 via-white to-emerald-50/40 overflow-hidden">
            <CardContent className="p-5">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 bg-emerald-100 text-emerald-700 rounded-lg flex items-center justify-center">
                    <Zap className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-zinc-900">
                      Installation Script
                    </div>
                    <div className="text-[11px] text-zinc-500">
                      Same code for every customer
                    </div>
                  </div>
                </div>
                <button
                  onClick={copyScript}
                  className={`flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors ${
                    copied
                      ? "bg-emerald-100 text-emerald-700"
                      : "bg-emerald-600 text-white hover:bg-emerald-700"
                  }`}
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5" /> Copied
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" /> Copy
                    </>
                  )}
                </button>
              </div>
              <div className="bg-white border border-emerald-100 rounded-xl px-4 py-3 font-mono text-[11px] text-emerald-900 overflow-auto shadow-inner">
                {STATIC_SCRIPT}
              </div>
              <p className="text-[11px] text-zinc-500 mt-2">
                Paste before the closing &lt;/body&gt; tag on every page.
              </p>
            </CardContent>
          </Card>

          {/* NEW: Edit Popup Settings card */}
          <Card className="border border-emerald-100 shadow-sm bg-gradient-to-br from-white to-emerald-50/40 overflow-hidden">
            <CardContent className="p-5 flex items-center gap-4">
              <div className="w-11 h-11 bg-gradient-to-br from-emerald-500 to-teal-600 text-white rounded-2xl flex items-center justify-center flex-shrink-0 shadow-md">
                <Settings2 className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-semibold text-sm text-zinc-900">
                  Customize your popup
                </div>
                <div className="text-xs text-zinc-600">
                  Default address, accent color, data shown, lead form, position, tooltip
                  message, and more.
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

          {/* Book a meeting — flex-1 lets it expand and balance the column with column 2 */}
          <Card className="border border-emerald-100 shadow-sm bg-gradient-to-br from-emerald-50 to-teal-50 overflow-hidden">
            <CardContent className="p-5 flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-600 to-teal-600 text-white rounded-2xl flex items-center justify-center flex-shrink-0 shadow-md">
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

          {/* Platform instructions — flex-1 lets this fill remaining height */}
          <Card className="border border-emerald-100 shadow-sm flex-1">
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
                    className="flex items-center justify-between p-2.5 bg-gradient-to-br from-white to-emerald-50/30 border border-zinc-200 rounded-xl text-xs text-zinc-700 hover:border-emerald-300 hover:from-emerald-50 hover:to-white hover:text-emerald-700 transition-all"
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

        {/* COLUMN 2 — same height column */}
        <div className="col-span-12 lg:col-span-5 flex flex-col gap-5">
          {/* Benefits — softer shaded green, no white stripe at top */}
          <Card className="border-0 shadow-sm overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-emerald-50/30">
            <CardContent className="p-5">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 bg-emerald-100 text-emerald-700 rounded-lg flex items-center justify-center">
                    <Shield className="w-3.5 h-3.5" />
                  </div>
                  <div className="text-sm font-semibold text-zinc-900">
                    Subscription Benefits
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-[10px] text-emerald-700 uppercase tracking-wider font-semibold">
                    Total Views To Date
                  </div>
                  <div className="text-2xl font-bold tracking-tight text-zinc-900">
                    12,847
                  </div>
                </div>
              </div>
              <div className="space-y-2.5">
                {benefits.map((b, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-3 rounded-xl bg-white/70 backdrop-blur-sm border border-emerald-100/60"
                  >
                    <div className="w-7 h-7 bg-emerald-100/80 rounded-lg flex items-center justify-center flex-shrink-0">
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

          {/* Demo video — flex-1 to match column height */}
          <Card className="border border-emerald-100 shadow-sm overflow-hidden flex-1 flex flex-col">
            <div className="aspect-video bg-zinc-900 flex-shrink-0">
              <iframe
                src="https://www.youtube.com/embed/j01aKyHJ2E8?rel=0"
                title="Dream Neighborhood Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
            <div className="p-4 flex items-center justify-between bg-gradient-to-r from-white to-emerald-50/30 flex-1">
              <div>
                <div className="font-semibold text-sm text-zinc-900">Watch Demo Video</div>
                <div className="text-xs text-zinc-500">See Dream Neighborhood in action</div>
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
