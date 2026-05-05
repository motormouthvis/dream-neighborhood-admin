"use client";

import React, { useCallback, useState } from "react";

type Props = {
  /** Label for the pre-live state (e.g. partners: Awaiting Subscription) */
  beforeBadge?: string;
  /** Self-serve uses this line; partners pass partner-specific copy */
  beforeLines?: {
    line1: string;
    line2?: string;
  };
};

export default function HeroBannerRightPanel({
  beforeBadge = "Before install",
  beforeLines = {
    line1: "Paste the Dream Neighborhood script on your site once.",
    line2: "After it goes live, views and page counts appear here automatically.",
  },
}: Props) {
  const [afterInstall, setAfterInstall] = useState(true);

  const toggle = useCallback(() => {
    setAfterInstall((v) => !v);
  }, []);

  const onKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        toggle();
      }
    },
    [toggle]
  );

  return (
    <div
      className="relative flex w-full min-h-0"
      onClick={toggle}
      onKeyDown={onKeyDown}
      role="button"
      tabIndex={0}
      aria-pressed={afterInstall}
      aria-label={
        afterInstall
          ? "Showing live metrics. Click to show the pre-live preview."
          : "Showing pre-live preview. Click to show live metrics."
      }
    >
      <div className="flex flex-col flex-1 justify-center bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl p-6 shadow-inner shadow-emerald-950/10 cursor-pointer transition-all hover:bg-white/15 hover:border-white/25 active:scale-[0.995] outline-none focus-visible:ring-2 focus-visible:ring-emerald-200/80 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A6B5F]">
        {afterInstall ? (
          <>
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
          </>
        ) : (
          <>
            <div className="flex items-center justify-center mb-5">
              <div className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 px-2.5 py-1 rounded-full">
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-amber-200/90"></span>
                <span className="text-[10px] font-bold tracking-wide text-emerald-50">
                  {beforeBadge}
                </span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="text-center bg-white/5 border border-dashed border-white/25 rounded-xl py-4 px-2">
                <div className="text-3xl md:text-4xl font-bold text-emerald-100/50 tracking-tight leading-none tabular-nums">
                  —
                </div>
                <div className="text-[10px] text-emerald-100/70 mt-2 font-semibold tracking-wider uppercase">
                  Total Views
                </div>
              </div>
              <div className="text-center bg-white/5 border border-dashed border-white/25 rounded-xl py-4 px-2">
                <div className="text-3xl md:text-4xl font-bold text-emerald-100/50 tracking-tight leading-none tabular-nums">
                  —
                </div>
                <div className="text-[10px] text-emerald-100/70 mt-2 font-semibold tracking-wider uppercase">
                  Total Pages
                </div>
              </div>
            </div>
            <div className="text-center mt-5 text-sm text-emerald-100/90 leading-relaxed px-1">
              <p>{beforeLines.line1}</p>
              {beforeLines.line2 ? (
                <p className="mt-2 text-emerald-100/75">{beforeLines.line2}</p>
              ) : null}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
