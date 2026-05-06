"use client";

import React, { useEffect, useState } from "react";
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
  Menu,
  X,
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
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [advancedOpen, setAdvancedOpen] = useState(
    activeKey === "reports" ||
      activeKey === "leads" ||
      activeKey === "subscription" ||
      activeKey === "team-settings"
  );

  // The primary nav link goes to /self-serve or /partners depending on pathname.
  const dashboardHref =
    pathname?.startsWith("/partners") ? "/partners" : "/self-serve";

  useEffect(() => {
    setMobileNavOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!mobileNavOpen) return;
    const mq = window.matchMedia("(min-width: 768px)");
    const releaseScroll = () => {
      document.body.style.overflow = "";
    };
    document.body.style.overflow = "hidden";
    const onMq = () => {
      if (mq.matches) {
        setMobileNavOpen(false);
        releaseScroll();
      }
    };
    mq.addEventListener("change", onMq);
    return () => {
      mq.removeEventListener("change", onMq);
      releaseScroll();
    };
  }, [mobileNavOpen]);

  return (
    <div className="flex h-[100dvh] md:h-screen bg-white overflow-hidden font-sans">
      {mobileNavOpen ? (
        <button
          type="button"
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
          aria-label="Close menu"
          onClick={() => setMobileNavOpen(false)}
        />
      ) : null}

      {/* Sidebar — drawer on small screens, fixed rail from md */}
      <div
        className={`w-72 shrink-0 bg-[#0A6B5F] text-white flex flex-col fixed md:relative inset-y-0 left-0 z-50 transition-transform duration-200 ease-out md:translate-x-0 ${
          mobileNavOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <div className="px-8 pt-8 pb-6 flex items-center gap-3 border-b border-white/20 relative">
          <div className="text-3xl">🏠</div>
          <div className="min-w-0 pr-10 md:pr-0">
            <div className="font-semibold text-2xl tracking-tight">Dream Neighborhood</div>
          </div>
          <button
            type="button"
            className="md:hidden absolute right-5 top-1/2 -translate-y-1/2 p-2 rounded-xl hover:bg-white/10 text-white"
            aria-label="Close menu"
            onClick={() => setMobileNavOpen(false)}
          >
            <X className="w-6 h-6" />
          </button>
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
              Popup Dashboard
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
      <div className="flex-1 flex flex-col overflow-hidden min-w-0">
        <div className="h-16 border-b bg-white px-4 md:px-8 flex items-center justify-between shadow-sm gap-3">
          <div className="flex items-center gap-2 md:gap-4 text-sm text-zinc-600 min-w-0 flex-1">
            <button
              type="button"
              className="md:hidden shrink-0 p-2 -ml-1 rounded-xl text-zinc-600 hover:bg-zinc-100"
              aria-label="Open menu"
              onClick={() => setMobileNavOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </button>
            <div className="flex items-center gap-2 md:gap-4 min-w-0 overflow-hidden">
              <span className="font-medium text-emerald-700 truncate max-w-[7.5rem] sm:max-w-[10rem] md:max-w-none shrink-0">
                bill@millermailbox.com
              </span>
              <span className="text-zinc-300 shrink-0">›</span>
              <span className="font-semibold text-zinc-900 truncate min-w-0">{pageTitle}</span>
            </div>
          </div>

          <div className="flex items-center gap-4 md:gap-8 shrink-0">
            <div className="relative w-80 hidden md:block">
              <Search className="absolute left-4 top-3 text-zinc-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search..."
                className="w-full bg-zinc-100 border-0 focus:bg-white pl-11 py-3 rounded-2xl text-sm"
              />
            </div>

            <div className="flex items-center gap-4 md:gap-7 text-zinc-500">
              <Bell className="w-5 h-5 cursor-pointer hover:text-zinc-700 transition-colors hidden md:block" />
              <div className="flex items-center gap-3">
                <Avatar className="h-8 w-8 ring-1 ring-emerald-200">
                  <AvatarFallback className="bg-emerald-100 text-emerald-700 text-xs font-medium">
                    WM
                  </AvatarFallback>
                </Avatar>
                <div className="text-sm hidden md:block">William Miller</div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-auto bg-zinc-50 p-4 md:p-6 relative min-h-0">
          {children}
        </div>
      </div>
    </div>
  );
}
