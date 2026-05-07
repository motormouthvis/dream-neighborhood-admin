"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FileText,
  CreditCard,
  HelpCircle,
  Settings,
  ChevronDown,
  Settings2,
  Menu,
  X,
  Globe,
  Funnel,
  MapPin,
  LogOut,
  UserRound,
  BookOpenCheck,
} from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { toast } from "sonner";

const POPUP_SETTINGS_HREF = "/popup-settings";

const ADVANCED_ROUTE_RE =
  /\/(explorers|example-explorer|reports|leads|subscription|team-settings)(\/|$)/;

const SIDEBAR_BG = "#0d5c52";
const navLinkBase =
  "w-full flex items-center gap-3 px-5 py-[12px] rounded-2xl text-left text-sm font-medium transition-colors";
const navInactive = "text-white/90 hover:bg-white/10";
const navActive =
  "text-white bg-white/15 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.12)] ring-1 ring-white/15";

type Props = {
  /** The label shown in the breadcrumb at the top */
  pageTitle: string;
  /** Which sidebar item should be highlighted as active */
  activeKey?:
    | "dashboard"
    | "example-explorer"
    | "explorers"
    | "reports"
    | "leads"
    | "subscription"
    | "team-settings";
  children: React.ReactNode;
};

export default function DnShell({ pageTitle, activeKey = "dashboard", children }: Props) {
  const pathname = usePathname();
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [advancedOpen, setAdvancedOpen] = useState(
    activeKey === "example-explorer" ||
      activeKey === "explorers" ||
      activeKey === "reports" ||
      activeKey === "leads" ||
      activeKey === "subscription" ||
      activeKey === "team-settings"
  );

  // The primary nav link goes to /self-serve or /partners depending on pathname.
  const dashboardHref =
    pathname?.startsWith("/partners") ? "/partners" : "/self-serve";

  const popupSettingsActive = pathname === POPUP_SETTINGS_HREF;

  useEffect(() => {
    setMobileNavOpen(false);
  }, [pathname]);

  useEffect(() => {
    const p = pathname ?? "";
    if (ADVANCED_ROUTE_RE.test(p)) {
      setAdvancedOpen(true);
    }
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
        className={`w-72 shrink-0 text-white flex flex-col fixed md:relative inset-y-0 left-0 z-50 transition-transform duration-200 ease-out md:translate-x-0 ${
          mobileNavOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
        style={{ backgroundColor: SIDEBAR_BG }}
      >
        <div className="px-8 pt-8 pb-6 flex items-center gap-3 border-b border-white/15 relative">
          <div className="h-10 w-10 rounded-xl bg-black flex items-center justify-center shrink-0 ring-1 ring-white/15 overflow-hidden p-1">
            <Image
              src="/dn-logo-mark.png"
              alt="Dream Neighborhood"
              width={32}
              height={32}
              className="object-contain"
            />
          </div>
          <div className="min-w-0 pr-10 md:pr-0">
            <div className="font-semibold text-lg tracking-tight leading-tight text-white">
              Dream Neighborhood
            </div>
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
          <div className="bg-black/20 rounded-2xl p-4 flex items-center gap-3 ring-1 ring-white/10">
            <div className="w-9 h-9 bg-[#d9f99d] text-[#166534] rounded-full flex items-center justify-center text-sm font-bold">
              D
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-[10px] uppercase tracking-wider text-[#d9f99d]/80 font-semibold">
                Current Team
              </div>
              <div className="text-sm font-medium truncate text-white">
                Dream Neighborhood Realty Co
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 px-3 flex-1 overflow-auto">
          <nav className="space-y-1 px-3">
            <Link
              href={POPUP_SETTINGS_HREF}
              className={`w-full flex items-center gap-3 px-5 py-[14px] rounded-2xl text-left text-sm font-medium transition-colors ${
                popupSettingsActive ? navActive : navInactive
              }`}
            >
              <Settings2 className="w-5 h-5 shrink-0 opacity-90" />
              Popup Settings
            </Link>

            <button
              type="button"
              onClick={() => setAdvancedOpen(!advancedOpen)}
              className="w-full flex items-center gap-3 px-5 py-3 mt-6 rounded-2xl text-left text-xs uppercase tracking-widest text-[#d9f99d]/85 hover:bg-white/5 hover:text-[#ecfccb] transition-colors"
            >
              <ChevronDown
                className={`w-4 h-4 transition-transform ${advancedOpen ? "" : "-rotate-90"}`}
              />
              Advanced
            </button>

            {advancedOpen && (
              <div className="space-y-1 mt-1">
                <Link
                  href={`${dashboardHref}/explorers`}
                  className={`${navLinkBase} ${
                    activeKey === "explorers" ? navActive : navInactive
                  }`}
                >
                  <Globe className="w-4 h-4 shrink-0 opacity-90" />
                  Manage Explorers
                </Link>
                <Link
                  href={`${dashboardHref}/example-explorer`}
                  className={`${navLinkBase} items-start ${
                    activeKey === "example-explorer" ? navActive : navInactive
                  }`}
                >
                  <MapPin className="w-4 h-4 shrink-0 opacity-90 mt-0.5" />
                  <span className="leading-snug">View Example Neighborhood Explorer</span>
                </Link>
                <Link
                  href={`${dashboardHref}/reports`}
                  className={`${navLinkBase} ${
                    activeKey === "reports" ? navActive : navInactive
                  }`}
                >
                  <FileText className="w-4 h-4 shrink-0 opacity-90" />
                  Reports
                </Link>
                <Link
                  href={`${dashboardHref}/leads`}
                  className={`${navLinkBase} ${
                    activeKey === "leads" ? navActive : navInactive
                  }`}
                >
                  <Funnel className="w-4 h-4 shrink-0 opacity-90" />
                  Leads
                </Link>
                <Link
                  href={`${dashboardHref}/subscription`}
                  className={`${navLinkBase} ${
                    activeKey === "subscription" ? navActive : navInactive
                  }`}
                >
                  <CreditCard className="w-4 h-4 shrink-0 opacity-90" />
                  Subscription
                </Link>
                <Link
                  href={`${dashboardHref}/team-settings`}
                  className={`${navLinkBase} ${
                    activeKey === "team-settings" ? navActive : navInactive
                  }`}
                >
                  <Settings className="w-4 h-4 shrink-0 opacity-90" />
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
          <div className="text-xs text-[#d9f99d]/50">© Dream Neighborhood Realty Co.</div>
        </div>
      </div>

      {/* Main pane */}
      <div className="flex-1 flex flex-col overflow-hidden min-w-0">
        <div className="h-16 border-b bg-white px-4 md:px-8 flex items-center justify-between shadow-sm gap-3">
          <div className="flex items-center gap-2 min-w-0 flex-1">
            <button
              type="button"
              className="md:hidden shrink-0 p-2 -ml-1 rounded-xl text-zinc-600 hover:bg-zinc-100"
              aria-label="Open menu"
              onClick={() => setMobileNavOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </button>
            <nav
              aria-label="Breadcrumb"
              className="flex items-center gap-2 sm:gap-2.5 text-xs sm:text-sm min-w-0 font-medium text-zinc-600"
            >
              <Link
                href={dashboardHref}
                className="truncate text-blue-700 hover:text-blue-800 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 rounded-sm"
              >
                Dream Neighborhood Realty Co
              </Link>
              <span className="text-zinc-300 shrink-0" aria-hidden>
                &gt;
              </span>
              <span
                className="truncate font-semibold text-zinc-900"
                aria-current="page"
              >
                {pageTitle}
              </span>
            </nav>
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-2 shrink-0 rounded-xl py-1.5 pl-2 pr-2 text-sm text-zinc-700 outline-none hover:bg-zinc-100 focus-visible:ring-2 focus-visible:ring-[#0d5c52]/35 data-popup-open:bg-zinc-100">
              <Avatar className="h-8 w-8 ring-1 ring-[#0d5c52]/25">
                <AvatarFallback className="bg-[#d9f99d]/30 text-[#0d5c52] text-xs font-medium">
                  WM
                </AvatarFallback>
              </Avatar>
              <span className="hidden sm:inline truncate max-w-[10rem] md:max-w-[14rem] text-left">
                bill@motormouth.io
              </span>
              <ChevronDown className="h-4 w-4 shrink-0 text-zinc-500 opacity-70" aria-hidden />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="min-w-[12rem]" sideOffset={6}>
              <DropdownMenuLabel className="font-normal">
                Signed in as
                <span className="block truncate text-xs font-medium text-zinc-900 mt-0.5">
                  bill@motormouth.io
                </span>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem render={<Link href="/popup-settings" />} className="cursor-pointer gap-2">
                  <BookOpenCheck className="opacity-70" /> Popup Settings
                </DropdownMenuItem>
                <DropdownMenuItem render={<Link href={dashboardHref} />} className="cursor-pointer gap-2">
                  <UserRound className="opacity-70" /> Installation overview
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                className="cursor-pointer gap-2"
                variant="destructive"
                onClick={() => toast.message("You’re signed out in this demo.")}
              >
                <LogOut /> Sign out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="flex-1 overflow-auto bg-zinc-50 p-4 md:p-6 relative min-h-0">
          {children}
        </div>
      </div>
    </div>
  );
}
