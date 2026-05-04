"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Settings2, ChevronLeft, Zap, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const STATIC_SCRIPT = `<script src="https://app.dreamneighborhood.com/explorer/sdk.js" async></script>`;

const dataPoints = [
  {
    key: "population",
    label: "Population & Age",
    desc: "Show the population and age of the neighborhood.",
    defaultOn: true,
  },
  {
    key: "education",
    label: "Education & Employment",
    desc: "Show the education and employment of the neighborhood.",
    defaultOn: true,
  },
  {
    key: "crime",
    label: "Crime",
    desc: "Show the crime rate of the neighborhood.",
    defaultOn: false,
  },
  {
    key: "housing",
    label: "Housing",
    desc: "Show housing information for the neighborhood.",
    defaultOn: true,
  },
  {
    key: "market",
    label: "Market Trends",
    desc: "Show real estate market trends for the area.",
    defaultOn: true,
  },
  {
    key: "politics",
    label: "Politics",
    desc: "Show political information for the neighborhood.",
    defaultOn: true,
  },
  {
    key: "mobility",
    label: "Mobility",
    desc: "Show mobility & transit information.",
    defaultOn: true,
  },
  {
    key: "schools",
    label: "Schools",
    desc: "Show schools serving this neighborhood.",
    defaultOn: true,
  },
  {
    key: "city",
    label: "City Information",
    desc: "Show city-level information.",
    defaultOn: true,
  },
];

export default function PopupSettingsForm() {
  const [defaultAddress, setDefaultAddress] = useState(
    "300 N Ft Lauderdale Bch Dr, Ft Pierce, FL, USA"
  );
  const [accentColor, setAccentColor] = useState("#0A6B5F");
  const [tags, setTags] = useState<string[]>([]);
  const [tagInput, setTagInput] = useState("");
  const [enabled, setEnabled] = useState(
    Object.fromEntries(dataPoints.map((d) => [d.key, d.defaultOn]))
  );
  const [enableLeads, setEnableLeads] = useState(true);
  const [position, setPosition] = useState("right");
  const [bottomOffset, setBottomOffset] = useState(8);
  const [tooltip, setTooltip] = useState(
    "Click here to explore the neighborhood around this property"
  );
  const [onlyDetectedAddress, setOnlyDetectedAddress] = useState(true);
  const [searchPageForAddress, setSearchPageForAddress] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyScript = () => {
    navigator.clipboard.writeText(STATIC_SCRIPT);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const addTag = () => {
    const v = tagInput.trim();
    if (v && !tags.includes(v)) setTags([...tags, v]);
    setTagInput("");
  };

  return (
    <div className="max-w-5xl mx-auto pb-24 relative">
      <div className="text-xs text-zinc-500 mb-2 flex items-center gap-2">
        <Link href="/self-serve" className="hover:text-emerald-700 inline-flex items-center gap-1">
          <ChevronLeft className="w-3 h-3" /> Dashboard
        </Link>
        <span className="text-zinc-300">/</span>
        <span>Customize Popup</span>
      </div>

      <div className="mb-6 flex items-center gap-3">
        <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 text-white rounded-2xl flex items-center justify-center shadow-md">
          <Settings2 className="w-5 h-5" />
        </div>
        <div>
          <h1 className="text-2xl font-semibold text-zinc-900 tracking-tight">
            Customize Your Popup
          </h1>
          <p className="text-zinc-500 text-sm">
            Configure how the Dream Neighborhood widget looks and behaves.
          </p>
        </div>
      </div>

      {/* One-time installation script */}
      <Card className="border border-emerald-100 shadow-sm bg-gradient-to-br from-emerald-50/40 via-white to-emerald-50/40 mb-5">
        <CardContent className="p-5">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 bg-emerald-100 text-emerald-700 rounded-lg flex items-center justify-center">
                <Zap className="w-3.5 h-3.5" />
              </div>
              <div>
                <div className="text-sm font-semibold text-zinc-900">
                  One-time installation script
                </div>
                <div className="text-[11px] text-zinc-500">
                  Install this once. Settings below update automatically.
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

      {/* Explorer settings */}
      <Card className="border border-emerald-100 shadow-sm mb-5">
        <CardContent className="p-6">
          <div className="text-sm font-semibold text-zinc-900">Your Explorer Settings</div>
          <div className="text-xs text-zinc-500 mb-5">
            Configure the explorer settings here.
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="md:col-span-2">
              <label className="text-xs font-semibold text-zinc-700 mb-1.5 block">
                Default Address
              </label>
              <input
                type="text"
                value={defaultAddress}
                onChange={(e) => setDefaultAddress(e.target.value)}
                className="w-full bg-emerald-50/30 border border-emerald-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-emerald-500 focus:bg-white"
              />
              <p className="text-[11px] text-zinc-500 mt-1">
                The default address that will be displayed in the explorer.
              </p>
            </div>
            <div>
              <label className="text-xs font-semibold text-zinc-700 mb-1.5 block">
                Accent Color
              </label>
              <div className="flex items-center gap-2 bg-emerald-50/30 border border-emerald-200 rounded-xl px-2 py-1.5">
                <input
                  type="color"
                  value={accentColor}
                  onChange={(e) => setAccentColor(e.target.value)}
                  className="w-9 h-9 rounded-lg border border-zinc-200 cursor-pointer bg-transparent"
                />
                <input
                  type="text"
                  value={accentColor}
                  onChange={(e) => setAccentColor(e.target.value)}
                  className="flex-1 bg-transparent text-sm font-mono focus:outline-none"
                />
              </div>
              <p className="text-[11px] text-zinc-500 mt-1">
                The accent color of the explorer.
              </p>
            </div>
          </div>

          <div className="mt-5">
            <label className="text-xs font-semibold text-zinc-700 mb-1.5 block">
              Tags
            </label>
            <p className="text-[11px] text-zinc-500 mb-2">
              Add tags to organize your explorers (e.g. Instagram, Facebook, Webflow).
            </p>
            <div className="flex flex-wrap gap-2 bg-emerald-50/30 border border-emerald-200 rounded-xl px-3 py-2 min-h-[44px]">
              {tags.map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center gap-1.5 bg-emerald-600 text-white text-xs px-2.5 py-1 rounded-lg"
                >
                  {t}
                  <button
                    onClick={() => setTags(tags.filter((x) => x !== t))}
                    className="hover:text-emerald-200"
                    aria-label={`Remove ${t}`}
                  >
                    ×
                  </button>
                </span>
              ))}
              <input
                type="text"
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === ",") {
                    e.preventDefault();
                    addTag();
                  }
                }}
                onBlur={addTag}
                placeholder="Type to search a tag..."
                className="flex-1 min-w-[120px] bg-transparent text-sm focus:outline-none"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Data to display */}
      <Card className="border border-emerald-100 shadow-sm mb-5">
        <CardContent className="p-6">
          <div className="text-sm font-semibold text-zinc-900">Data to Display</div>
          <div className="text-xs text-zinc-500 mb-5">
            Choose which data items will be shown in the explorer.
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {dataPoints.map((d) => (
              <label
                key={d.key}
                className={`flex items-start gap-3 p-3 rounded-xl border cursor-pointer transition-colors ${
                  enabled[d.key]
                    ? "bg-emerald-50/40 border-emerald-200"
                    : "bg-white border-zinc-200 hover:bg-zinc-50"
                }`}
              >
                <input
                  type="checkbox"
                  checked={enabled[d.key]}
                  onChange={(e) =>
                    setEnabled({ ...enabled, [d.key]: e.target.checked })
                  }
                  className="mt-0.5 w-4 h-4 accent-emerald-600 cursor-pointer"
                />
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium text-zinc-900">{d.label}</div>
                  <div className="text-[11px] text-zinc-500">{d.desc}</div>
                </div>
              </label>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Lead form */}
      <Card className="border border-emerald-100 shadow-sm mb-5">
        <CardContent className="p-6">
          <div className="text-sm font-semibold text-zinc-900">Enable Lead Form</div>
          <div className="text-xs text-zinc-500 mb-4">
            Choose whether you want to enable the lead form.
          </div>
          <label className="flex items-start gap-3 p-3 rounded-xl border bg-emerald-50/40 border-emerald-200 cursor-pointer">
            <input
              type="checkbox"
              checked={enableLeads}
              onChange={(e) => setEnableLeads(e.target.checked)}
              className="mt-0.5 w-4 h-4 accent-emerald-600 cursor-pointer"
            />
            <div className="flex-1 min-w-0">
              <div className="text-sm font-medium text-zinc-900">Enable Lead Form</div>
              <div className="text-[11px] text-zinc-500">
                Enable the lead form to capture user details after they view the
                neighborhood data.
              </div>
            </div>
          </label>
        </CardContent>
      </Card>

      {/* Pop-up settings */}
      <Card className="border border-emerald-100 shadow-sm mb-5">
        <CardContent className="p-6">
          <div className="text-sm font-semibold text-zinc-900">Your Pop-Up Settings</div>
          <div className="text-xs text-zinc-500 mb-5">
            These options apply to the floating Explorer in the lower-right of your buyer's site
            (only visitors who match data points and don't dismiss it ever see it).
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
            <div>
              <label className="text-xs font-semibold text-zinc-700 mb-1.5 block">
                Pop-Up Position
              </label>
              <select
                value={position}
                onChange={(e) => setPosition(e.target.value)}
                className="w-full bg-emerald-50/30 border border-emerald-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-emerald-500 focus:bg-white"
              >
                <option value="right">Right</option>
                <option value="left">Left</option>
              </select>
            </div>
            <div>
              <label className="text-xs font-semibold text-zinc-700 mb-1.5 block">
                Pop-Up Bottom Offset (px)
              </label>
              <input
                type="number"
                value={bottomOffset}
                onChange={(e) => setBottomOffset(Number(e.target.value))}
                className="w-full bg-emerald-50/30 border border-emerald-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-emerald-500 focus:bg-white"
              />
              <p className="text-[11px] text-zinc-500 mt-1">
                Offset in pixels from the bottom of the screen, e.g. for a sticky banner at the bottom.
              </p>
            </div>
          </div>

          <div className="mb-5">
            <label className="text-xs font-semibold text-zinc-700 mb-1.5 block">
              Tooltip Message
            </label>
            <textarea
              value={tooltip}
              onChange={(e) => setTooltip(e.target.value)}
              rows={3}
              className="w-full bg-emerald-50/30 border border-emerald-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-emerald-500 focus:bg-white resize-none"
            />
            <p className="text-[11px] text-zinc-500 mt-1">
              Leave blank for default wording. Use {"{address}"} for the detected
              address.
            </p>
          </div>

          <div className="space-y-3">
            <label className="flex items-start gap-3 p-3 rounded-xl border bg-white border-zinc-200 hover:bg-zinc-50 cursor-pointer">
              <input
                type="checkbox"
                checked={onlyDetectedAddress}
                onChange={(e) => setOnlyDetectedAddress(e.target.checked)}
                className="mt-0.5 w-4 h-4 accent-emerald-600 cursor-pointer"
              />
              <div className="flex-1">
                <div className="text-sm font-medium text-zinc-900">
                  Only show on pages with a detectable address
                </div>
                <div className="text-[11px] text-zinc-500">
                  Hide the floating button on pages where no address is detected.
                </div>
              </div>
            </label>
            <label className="flex items-start gap-3 p-3 rounded-xl border bg-white border-zinc-200 hover:bg-zinc-50 cursor-pointer">
              <input
                type="checkbox"
                checked={searchPageForAddress}
                onChange={(e) => setSearchPageForAddress(e.target.checked)}
                className="mt-0.5 w-4 h-4 accent-emerald-600 cursor-pointer"
              />
              <div className="flex-1">
                <div className="text-sm font-medium text-zinc-900">
                  Search visiting page for an address
                </div>
                <div className="text-[11px] text-zinc-500">
                  If we can't find an address in the URL, scan the page text for
                  one and use it as the explorer's default.
                </div>
              </div>
            </label>
          </div>
        </CardContent>
      </Card>

      {/* Bottom action bar */}
      <div className="fixed bottom-0 left-72 right-0 bg-white/95 backdrop-blur border-t border-zinc-200 px-8 py-4 flex items-center justify-end gap-3 shadow-md">
        <Link
          href="/self-serve"
          className="text-sm text-zinc-700 hover:text-zinc-900 px-4 py-2"
        >
          Cancel
        </Link>
        <Button className="bg-emerald-600 hover:bg-emerald-700 text-sm h-9 px-6 rounded-xl">
          Save
        </Button>
      </div>
    </div>
  );
}
