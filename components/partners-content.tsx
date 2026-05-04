"use client";

import React from "react";
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
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const benefits = [
  {
    icon: <Globe className="w-4 h-4 text-emerald-600" />,
    title: "Better SEO",
    desc: "Neighborhood data boosts local search rankings.",
  },
  {
    icon: <Eye className="w-4 h-4 text-emerald-600" />,
    title: "Website Engagement",
    desc: "Interactive popups keep buyers on your site longer.",
  },
  {
    icon: <Users className="w-4 h-4 text-emerald-600" />,
    title: "Higher Quality Leads",
    desc: "AI-qualified prospects convert at higher rates.",
  },
  {
    icon: <Target className="w-4 h-4 text-emerald-600" />,
    title: "Fewer Showings Per Closing",
    desc: "Data reduces unnecessary property tours.",
  },
  {
    icon: <TrendingUp className="w-4 h-4 text-emerald-600" />,
    title: "Faster Closings",
    desc: "Buyers make informed decisions, faster.",
  },
  {
    icon: <Award className="w-4 h-4 text-emerald-600" />,
    title: "Competitive Advantage",
    desc: "Stand out with premium tech buyers expect.",
  },
];

export default function PartnersContent() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-6">
        <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-3 py-1 rounded-3xl mb-2 text-xs font-medium">
          <Users className="w-3.5 h-3.5" /> PARTNER
        </div>
        <h1 className="text-2xl font-semibold text-zinc-900 tracking-tight">
          Realty Candy Partnership
        </h1>
        <p className="text-zinc-500 text-sm mt-1">
          Your popup is already embedded by Realty Candy. Subscribe to unlock the full experience.
        </p>
      </div>

      <div className="grid grid-cols-12 gap-5">
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

          {/* Realty Candy hero card */}
          <Card className="border border-emerald-200 shadow-sm overflow-hidden">
            <CardContent className="p-0">
              <div className="bg-gradient-to-br from-emerald-100 via-emerald-50 to-teal-50 p-6 text-center">
                <div className="w-14 h-14 mx-auto bg-white border border-emerald-200 rounded-2xl flex items-center justify-center text-3xl mb-3 shadow-sm">
                  🏠
                </div>
                <div className="text-xs uppercase tracking-widest text-emerald-700 font-semibold">
                  Premier Partner
                </div>
                <div className="text-2xl font-semibold text-zinc-900 mt-1">Realty Candy</div>
                <div className="inline-flex items-center gap-2 mt-3 bg-white text-emerald-700 border border-emerald-200 text-xs px-4 py-1.5 rounded-3xl font-semibold shadow-sm">
                  50% OFF FIRST MONTH
                </div>
              </div>
              <div className="p-5">
                <div className="text-sm text-zinc-700 mb-4">
                  Your website partner has already embedded the Dream Neighborhood popup.
                  Subscribe to unlock the explorer, AI lead qualification, reports, and all
                  partner-exclusive benefits.
                </div>
                <Button className="w-full h-11 bg-emerald-600 hover:bg-emerald-700 text-base rounded-2xl">
                  Subscribe Now
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Edit popup */}
          <Card className="border border-emerald-100 shadow-sm bg-gradient-to-br from-white to-emerald-50/40 overflow-hidden">
            <CardContent className="p-5 flex items-center gap-4">
              <div className="w-11 h-11 bg-gradient-to-br from-emerald-500 to-teal-600 text-white rounded-2xl flex items-center justify-center flex-shrink-0 shadow-md">
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

          {/* Book a call — flex-1 to balance column heights */}
          <Card className="border border-emerald-100 shadow-sm bg-gradient-to-br from-emerald-50 to-teal-50 overflow-hidden flex-1">
            <CardContent className="p-5 h-full flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-600 to-teal-600 text-white rounded-2xl flex items-center justify-center flex-shrink-0 shadow-md">
                <Calendar className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-semibold text-sm text-zinc-900">
                  Have questions about your subscription?
                </div>
                <div className="text-xs text-zinc-600">
                  Book a free call with the team — Realty Candy clients get priority booking.
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
        </div>

        <div className="col-span-12 lg:col-span-5 flex flex-col gap-5">
          {/* Benefits */}
          <Card className="border-0 shadow-sm overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-emerald-50/30">
            <CardContent className="p-5">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 bg-emerald-100 text-emerald-700 rounded-lg flex items-center justify-center">
                    <Shield className="w-3.5 h-3.5" />
                  </div>
                  <div className="text-sm font-semibold text-zinc-900">Subscription Benefits</div>
                </div>
                <div className="text-right">
                  <div className="text-[10px] text-emerald-700 uppercase tracking-wider font-semibold">
                    Total Views To Date
                  </div>
                  <div className="text-2xl font-bold tracking-tight text-zinc-900">12,847</div>
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
                      <p className="text-[11px] text-zinc-500 leading-snug mt-0.5">{b.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Demo video */}
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
