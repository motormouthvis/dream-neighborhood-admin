"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MapPin, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

/** Public page that demonstrates the Neighborhood Explorer experience */
const EXAMPLE_EXPLORER_URL = "https://dreamneighborhood.com";

export default function ExampleExplorerContent() {
  const pathname = usePathname();
  const dashboardHref = pathname?.startsWith("/partners") ? "/partners" : "/self-serve";

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="flex items-start gap-3">
        <div className="w-11 h-11 rounded-2xl bg-[#0d5c52]/10 text-[#0d5c52] flex items-center justify-center shrink-0">
          <MapPin className="w-5 h-5" />
        </div>
        <div>
          <h2 className="text-lg font-semibold text-zinc-900 tracking-tight">
            View Example Neighborhood Explorer
          </h2>
          <p className="text-sm text-zinc-600 mt-1 leading-relaxed">
            See how buyers explore schools, demographics, market trends, and more around a
            property — the same experience your popup delivers on your own site.
          </p>
        </div>
      </div>

      <Card className="border border-zinc-200 shadow-sm">
        <CardContent className="p-6 space-y-4">
          <p className="text-sm text-zinc-700 leading-relaxed">
            Open our marketing site in a new tab for a full-page walkthrough of the Explorer.
            On your live site, the same tools appear inside the Dream Neighborhood popup your
            visitors launch from the corner of the page.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href={EXAMPLE_EXPLORER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#0d5c52] hover:bg-[#0a4a42] text-white text-sm font-medium h-9 px-4 shadow-sm transition-colors"
            >
              Open example explorer <ExternalLink className="w-4 h-4" />
            </a>
            <Link
              href={dashboardHref}
              className="inline-flex items-center justify-center rounded-xl border border-[#0d5c52]/30 bg-white text-[#0d5c52] text-sm font-medium h-9 px-4 hover:bg-[#0d5c52]/5 transition-colors"
            >
              Back to Popup Settings
            </Link>
          </div>
        </CardContent>
      </Card>

      <p className="text-xs text-zinc-500">
        Tip: This admin preview also loads the live popup script — check the bottom-right of
        this site for the embedded widget when you&apos;re testing.
      </p>
    </div>
  );
}
