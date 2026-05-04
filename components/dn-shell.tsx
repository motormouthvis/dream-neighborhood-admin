"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FileText,
  Users,
  CreditCard,
  HelpCircle,
  Settings,
  Search,
  Bell,
  ChevronDown,
  LayoutDashboard,
} from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

type Props = {
  /** The label shown in the breadcrumb at the top */
  pageTitle: string;
  /** Which sidebar item should be highlighted as active */
  activeKey?: "dashboard" | "reports" | "leads" | "subscription" | "team-settings";
  children: React.ReactNode;
};

export default function DnShell({ pageTitle, activeKey = "dashboard", children }: Props) {
  const pathname = usePathname();
  const [advancedOpen, setAdvancedOpen] = useState(
    activeKey === "reports" ||
      activeKey === "leads" ||
      activeKey === "subscription" ||
      activeKey === "team-settings"
  );

  // The "Dashboard" link is the top-level link of whatever page we're on
  // (i.e. /self-serve or /partners), so we infer it from the pathname.
  const dashboardHref =
    pathname?.startsWith("/partners") ? "/partners" : "/self-serve";

  return (
    <div className="flex h-screen bg-white overflow-hidden font-sans">
      {/* Sidebar */}
      <div className="w-72 bg-[#0A6B5F] text-white flex flex-col">
        <div className="px-8 pt-8 pb-6 flex items-center gap-3 border-b border-white/20">
          <div className="text-3xl">🏠</div>
          <div>
            <div className="font-semibold text-2xl tracking-tight">Dream Neighborhood</div>
          </div>
        </div>

        <div className="px-6 pt-8">
          <div className="bg-white/10 rounded-2xl p-4 flex items-center gap-3">
            <div className="w-9 h-9 bg-white/20 rounded-full flex items-center justify-center text-sm font-medium">
              BM
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-medium truncate">bill@millermailbox.com</div>
              <div className="text-xs text-emerald-200 -mt-0.5">Current Team</div>
            </div>
          </div>
        </div>

        <div className="mt-8 px-3 flex-1 overflow-auto">
          <nav className="space-y-1 px-3">
            <Link
              href={dashboardHref}
              className={`w-full flex items-center gap-3 px-5 py-[14px] rounded-2xl text-left text-sm font-medium ${
                activeKey === "dashboard" ? "bg-white text-[#0A6B5F]" : "hover:bg-white/10"
              }`}
            >
              <LayoutDashboard className="w-5 h-5" />
              Dashboard
            </Link>

            <button
              onClick={() => setAdvancedOpen(!advancedOpen)}
              className="w-full flex items-center gap-3 px-5 py-3 mt-6 rounded-2xl text-left text-xs uppercase tracking-widest text-emerald-200/80 hover:bg-white/5 hover:text-emerald-100 transition-colors"
            >
              <ChevronDown
                className={`w-4 h-4 transition-transform ${advancedOpen ? "" : "-rotate-90"}`}
              />
              Advanced
            </button>

            {advancedOpen && (
              <div className="space-y-1 mt-1">
                <Link
                  href={`${dashboardHref}/reports`}
                  className={`w-full flex items-center gap-3 px-5 py-[12px] rounded-2xl text-left text-sm font-medium ${
                    activeKey === "reports" ? "bg-white text-[#0A6B5F]" : "hover:bg-white/10"
                  }`}
                >
                  <FileText className="w-4 h-4" />
                  Reports
                </Link>
                <Link
                  href={`${dashboardHref}/leads`}
                  className={`w-full flex items-center gap-3 px-5 py-[12px] rounded-2xl text-left text-sm font-medium ${
                    activeKey === "leads" ? "bg-white text-[#0A6B5F]" : "hover:bg-white/10"
                  }`}
                >
                  <Users className="w-4 h-4" />
                  Leads
                </Link>
                <Link
                  href={`${dashboardHref}/subscription`}
                  className={`w-full flex items-center gap-3 px-5 py-[12px] rounded-2xl text-left text-sm font-medium ${
                    activeKey === "subscription"
                      ? "bg-white text-[#0A6B5F]"
                      : "hover:bg-white/10"
                  }`}
                >
                  <CreditCard className="w-4 h-4" />
                  Subscription
                </Link>
                <Link
                  href={`${dashboardHref}/team-settings`}
                  className={`w-full flex items-center gap-3 px-5 py-[12px] rounded-2xl text-left text-sm font-medium ${
                    activeKey === "team-settings"
                      ? "bg-white text-[#0A6B5F]"
                      : "hover:bg-white/10"
                  }`}
                >
                  <Settings className="w-4 h-4" />
                  Team Settings
                </Link>
              </div>
            )}
          </nav>

          <div className="mt-12 px-3">
            <Link
              href="https://dreamneighborhood.com/help"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center gap-3 px-5 py-[14px] rounded-2xl text-left hover:bg-white/10 text-white text-sm font-medium"
            >
              <HelpCircle className="w-5 h-5" />
              Help & Support
            </Link>
          </div>
        </div>

        <div className="p-6 mt-auto border-t border-white/10">
          <div className="text-xs text-emerald-100/70">© Dream Neighborhood Realty Co.</div>
        </div>
      </div>

      {/* Main pane */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <div className="h-16 border-b bg-white px-8 flex items-center justify-between shadow-sm">
          <div className="flex items-center gap-4 text-sm text-zinc-600">
            <span className="font-medium text-emerald-700">bill@millermailbox.com</span>
            <span className="text-zinc-300">›</span>
            <span className="font-semibold text-zinc-900">{pageTitle}</span>
          </div>

          <div className="flex items-center gap-8">
            <div className="relative w-80">
              <Search className="absolute left-4 top-3 text-zinc-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search..."
                className="w-full bg-zinc-100 border-0 focus:bg-white pl-11 py-3 rounded-2xl text-sm"
              />
            </div>

            <div className="flex items-center gap-7 text-zinc-500">
              <Bell className="w-5 h-5 cursor-pointer hover:text-zinc-700 transition-colors" />
              <div className="flex items-center gap-3">
                <Avatar className="h-8 w-8 ring-1 ring-emerald-200">
                  <AvatarFallback className="bg-emerald-100 text-emerald-700 text-xs font-medium">
                    WM
                  </AvatarFallback>
                </Avatar>
                <div className="text-sm">William Miller</div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-auto bg-zinc-50 p-6 relative">{children}</div>
      </div>
    </div>
  );
}
