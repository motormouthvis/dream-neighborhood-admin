"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MapPin } from "lucide-react";

const WIDGET_IFRAME_SRC =
  "https://app.dreamneighborhood.com/a/netlify/widget/?partner=23720&widget_number=1";

export default function ExampleExplorerContent() {
  const pathname = usePathname();
  const dashboardHref = pathname?.startsWith("/partners") ? "/partners" : "/self-serve";

  return (
    <div className="max-w-6xl mx-auto space-y-5">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex items-start gap-3 min-w-0">
          <div className="w-11 h-11 rounded-2xl bg-[#0d5c52]/10 text-[#0d5c52] flex items-center justify-center shrink-0">
            <MapPin className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-zinc-900 tracking-tight">
              View Example Neighborhood Explorer
            </h2>
            <p className="text-sm text-zinc-600 mt-1 leading-relaxed">
              Browse the live widget below—the same Neighborhood Explorer buyers use before
              and after touring a property on your website.
            </p>
          </div>
        </div>
        <Link
          href={dashboardHref}
          className="inline-flex shrink-0 items-center justify-center rounded-xl border border-[#0d5c52]/30 bg-white px-4 py-2 text-sm font-medium text-[#0d5c52] hover:bg-[#0d5c52]/5 transition-colors sm:self-start"
        >
          Back to Home
        </Link>
      </div>

      <div className="rounded-2xl border border-zinc-200 bg-zinc-100/50 p-2 shadow-sm sm:p-3">
        <iframe
          src={WIDGET_IFRAME_SRC}
          width="100%"
          title="Dream Neighborhood explorer preview"
          className="neighborhood-iframe block w-full rounded-xl bg-white"
          style={{ border: 0, colorScheme: "light", outline: "none" }}
        />
      </div>

      <p className="text-xs text-zinc-500">
        This admin site also loads the corner popup script in the root layout; you may see
        both the iframe preview above and the floating widget while testing.
      </p>
    </div>
  );
}
