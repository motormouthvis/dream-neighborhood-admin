"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Users,
  Globe,
  Eye,
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

const benefits = [
  {
    icon: <Globe className="w-4 h-4 text-emerald-700" />,
    title: "Better SEO",
    desc: "Neighborhood data boosts local search rankings.",
  },
  {
    icon: <Eye className="w-4 h-4 text-emerald-700" />,
    title: "Website Engagement",
    desc: "Interactive popups keep buyers on your site longer.",
  },
  {
    icon: <Users className="w-4 h-4 text-emerald-700" />,
    title: "Higher Quality Leads",
    desc: "AI-qualified prospects convert at higher rates.",
  },
  {
    icon: <Target className="w-4 h-4 text-emerald-700" />,
    title: "Fewer Showings Per Closing",
    desc: "Data reduces unnecessary property tours.",
  },
  {
    icon: <TrendingUp className="w-4 h-4 text-emerald-700" />,
    title: "Faster Closings",
    desc: "Buyers make informed decisions, faster.",
  },
  {
    icon: <Award className="w-4 h-4 text-emerald-700" />,
    title: "Competitive Advantage",
    desc: "Stand out with premium tech buyers expect.",
  },
];

export default function PartnersContent() {
  const [videoPlaying, setVideoPlaying] = useState(false);

  return (
    <div className="max-w-6xl mx-auto">
      {/* HERO — Realty Candy partnership card */}
      <div className="mb-5 relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0A6B5F] via-emerald-700 to-teal-800 shadow-xl shadow-emerald-900/25 ring-1 ring-emerald-900/10">
        {/* Decorative dot grid */}
        <div
          className="absolute inset-0 opacity-15 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        {/* Soft glows */}
        <div className="absolute -top-24 -right-24 w-80 h-80 bg-emerald-300/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-teal-400/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative grid md:grid-cols-2 gap-6 p-7 md:p-8">
          {/* Left — Brand identity */}
          <div className="flex flex-col">
            <div className="inline-flex items-center gap-1.5 self-start bg-white/15 backdrop-blur-sm border border-white/25 px-2.5 py-1 rounded-full text-[11px] text-white font-semibold tracking-widest uppercase mb-4">
              <Sparkles className="w-3 h-3" /> Premier Partner
            </div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-14 h-14 bg-white/20 backdrop-blur-sm border border-white/30 rounded-2xl flex items-center justify-center text-3xl shadow-lg">
                🏠
              </div>
              <div className="text-3xl font-bold text-white tracking-tight leading-none">
                Realty Candy
              </div>
            </div>
            <p className="text-emerald-50/90 text-sm leading-relaxed mb-5">
              The popup is already installed on your site by Realty Candy. Subscribe to
              unlock your exclusive benefits.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-emerald-50">
                <CheckCircle2 className="w-4 h-4 text-emerald-200 flex-shrink-0" />
                <span>Pre-installed — zero website changes needed</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-emerald-50">
                <CheckCircle2 className="w-4 h-4 text-emerald-200 flex-shrink-0" />
                <span>Priority support and onboarding</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-emerald-50">
                <CheckCircle2 className="w-4 h-4 text-emerald-200 flex-shrink-0" />
                <span>Updates go live automatically</span>
              </div>
            </div>
          </div>

          {/* Right — Live status + headline metrics */}
          <div className="flex flex-col justify-center bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl p-6 shadow-inner shadow-emerald-950/10">
            <div className="flex items-center justify-center mb-5">
              <div className="inline-flex items-center gap-1.5 bg-emerald-400/15 border border-emerald-300/30 px-2.5 py-1 rounded-full">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-300"></span>
                </span>
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-emerald-100">
                  Popup is Live
                </span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="text-center bg-white/5 border border-white/10 rounded-xl py-4 px-2">
                <div className="text-3xl md:text-4xl font-bold text-white tracking-tight leading-none tabular-nums">
                  12,847
                </div>
                <div className="text-[10px] text-emerald-100/80 mt-2 font-semibold tracking-wider uppercase">
                  Total Views
                </div>
              </div>
              <div className="text-center bg-white/5 border border-white/10 rounded-xl py-4 px-2">
                <div className="text-3xl md:text-4xl font-bold text-white tracking-tight leading-none tabular-nums">
                  24
                </div>
                <div className="text-[10px] text-emerald-100/80 mt-2 font-semibold tracking-wider uppercase">
                  Total Pages
                </div>
              </div>
            </div>
            <div className="text-center mt-5 text-base text-emerald-100/88 leading-relaxed">
              Live on your site — and right here.
              <br />
              Try it in the bottom-right corner{" "}
              <span
                className="inline-block text-lg motion-safe:animate-[corner-arrow-nudge_1.45s_ease-in-out_infinite]"
                aria-hidden
              >
                ↘
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-5">
        {/* COLUMN 1 — left, 7/12 */}
        <div className="col-span-12 lg:col-span-7 flex flex-col gap-5">
          {/* Subscription status — clean, white */}
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

          {/* Edit popup — secondary action, lifts on hover */}
          <Card className="bg-white border border-zinc-200 shadow-sm hover:shadow-md hover:border-emerald-200 transition-all">
            <CardContent className="p-5 flex items-center gap-4">
              <div className="w-11 h-11 bg-gradient-to-br from-emerald-500 to-teal-600 text-white rounded-2xl flex items-center justify-center flex-shrink-0 shadow-md shadow-emerald-500/25">
                <Settings2 className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-semibold text-sm text-zinc-900">Customize your popup</div>
                <div className="text-xs text-zinc-600">
                  Default address, accent color, data shown, lead form, and more.
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

          {/* Demo video — sits in column 1 to balance heights against benefits + Have Questions in column 2 */}
          <Card className="border border-zinc-200 shadow-sm overflow-hidden flex flex-col">
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
            <div className="p-4 flex items-center justify-between bg-white">
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

        {/* COLUMN 2 — right, 5/12 */}
        <div className="col-span-12 lg:col-span-5 flex flex-col gap-5">
          {/* Benefits — natural-height rows; Card has flex-1 so any small residual gap sits below the rows, not inside them */}
          <Card className="border border-zinc-200 shadow-sm overflow-hidden bg-white flex-1">
            <CardContent className="p-5">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-7 h-7 bg-emerald-100 text-emerald-700 rounded-lg flex items-center justify-center">
                  <Shield className="w-3.5 h-3.5" />
                </div>
                <div className="text-sm font-semibold text-zinc-900 leading-tight">
                  Subscription Benefits
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
                      <p className="text-[11px] text-zinc-500 leading-snug mt-0.5">{b.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Have Questions? — moved here from column 1 so column 2 fills column 1's height naturally */}
          <Card className="bg-white border border-zinc-200 shadow-sm hover:shadow-md hover:border-emerald-200 transition-all">
            <CardContent className="p-4 flex items-center gap-3">
              <div className="w-9 h-9 bg-gradient-to-br from-emerald-500 to-teal-600 text-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-md shadow-emerald-500/25">
                <Calendar className="w-4 h-4" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-semibold text-sm text-zinc-900">Have Questions?</div>
                <div className="text-xs text-zinc-600">
                  Book a free call — Realty Candy clients get priority.
                </div>
              </div>
              <a
                href="https://dreamneighborhood.com/book-a-call"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 inline-flex items-center gap-1.5 text-xs font-semibold px-3.5 py-1.5 rounded-xl bg-emerald-600 text-white hover:bg-emerald-700 shadow-sm"
              >
                Book a Call <ExternalLink className="w-3 h-3" />
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
