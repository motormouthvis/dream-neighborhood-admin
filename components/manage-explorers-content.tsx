"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, Filter, Share2, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const rows = [
  {
    id: "DN-1001",
    address: "300 N Ft Lauderdale Bch Dr, Ft Pierce, FL, USA",
    views: 3240,
    leads: 12,
    leadOn: true,
    tags: [] as string[],
  },
  {
    id: "DN-1002",
    address: "1450 Brickell Ave, Miami, FL, USA",
    views: 1876,
    leads: 4,
    leadOn: false,
    tags: ["popup"],
  },
  {
    id: "DN-1003",
    address: "892 Palm Trail, Delray Beach, FL, USA",
    views: 950,
    leads: 0,
    leadOn: false,
    tags: [] as string[],
  },
  {
    id: "DN-1004",
    address: "221 Banyan St, West Palm Beach, FL, USA",
    views: 2103,
    leads: 7,
    leadOn: true,
    tags: [] as string[],
  },
  {
    id: "DN-1005",
    address: "48 S Main St, Salt Lake City, UT, USA",
    views: 612,
    leads: 1,
    leadOn: true,
    tags: ["popup"],
  },
];

export default function ManageExplorersContent() {
  const pathname = usePathname();
  const dashboardHref = pathname?.startsWith("/partners") ? "/partners" : "/self-serve";

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-start sm:justify-between mb-6">
        <div>
          <div className="text-xs text-zinc-500 mb-1">Dream Neighborhood Realty Co › Explorers</div>
          <h1 className="text-2xl font-semibold text-zinc-900 tracking-tight">
            Manage Your Explorers
          </h1>
          <p className="text-sm text-zinc-600 mt-1">A list of all the explorers you have created.</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 sm:items-center">
          <a
            href="https://dreamneighborhood.com/book-a-call"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-xl bg-[#0d5c52] hover:bg-[#0a4a42] text-white text-sm font-medium h-9 px-4 shadow-sm transition-colors w-full sm:w-auto"
          >
            Book a Free Explorer Install or Support Call
          </a>
          <Button className="rounded-xl bg-[#0d5c52] hover:bg-[#0a4a42] text-white text-sm h-9 shadow-sm w-full sm:w-auto">
            Create New Explorer
          </Button>
        </div>
      </div>

      <Card className="border border-zinc-200 shadow-sm overflow-hidden">
        <CardContent className="p-0">
          <div className="p-4 border-b border-zinc-100 flex flex-col gap-3 sm:flex-row sm:items-center">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
              <input
                type="search"
                placeholder="Search explorers..."
                className="w-full bg-zinc-50 border border-zinc-200 rounded-xl pl-10 pr-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#0d5c52]/25 focus:border-[#0d5c52]"
              />
            </div>
            <Button
              variant="outline"
              className="rounded-xl border-zinc-200 text-zinc-700 h-9 text-sm gap-2 w-full sm:w-auto"
            >
              <Filter className="w-4 h-4" />
              Filters
            </Button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left min-w-[880px]">
              <thead>
                <tr className="border-b border-zinc-100 bg-zinc-50/80 text-[11px] uppercase tracking-wider text-zinc-500 font-semibold">
                  <th className="px-4 py-3 whitespace-nowrap">Explorer ID</th>
                  <th className="px-4 py-3 whitespace-nowrap">Created By Agent</th>
                  <th className="px-4 py-3 min-w-[200px]">Default Address</th>
                  <th className="px-4 py-3 text-right whitespace-nowrap">Views</th>
                  <th className="px-4 py-3 text-right whitespace-nowrap">Leads Generated</th>
                  <th className="px-4 py-3 whitespace-nowrap">Lead Form</th>
                  <th className="px-4 py-3 whitespace-nowrap">Tags</th>
                  <th className="px-4 py-3 whitespace-nowrap text-right"> </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row.id} className="border-b border-zinc-100 last:border-0 hover:bg-zinc-50/50">
                    <td className="px-4 py-3 font-mono text-xs text-zinc-800 whitespace-nowrap">
                      {row.id}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        <Avatar className="h-7 w-7">
                          <AvatarFallback className="bg-[#0d5c52]/10 text-[#0d5c52] text-[10px]">
                            BM
                          </AvatarFallback>
                        </Avatar>
                        <span className="text-zinc-700 truncate max-w-[10rem]">
                          bill@motormouth.io
                        </span>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-zinc-600">{row.address}</td>
                    <td className="px-4 py-3 tabular-nums text-right text-zinc-800">
                      {row.views.toLocaleString()}
                    </td>
                    <td className="px-4 py-3 tabular-nums text-right text-zinc-800">{row.leads}</td>
                    <td className="px-4 py-3">
                      <span
                        className={`inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-medium ${
                          row.leadOn
                            ? "bg-[#d9f99d]/40 text-[#3f6212]"
                            : "bg-zinc-100 text-zinc-500"
                        }`}
                      >
                        {row.leadOn ? "On" : "Off"}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex flex-wrap gap-1">
                        {row.tags.map((t) => (
                          <span
                            key={t}
                            className="text-[10px] px-2 py-0.5 rounded-full bg-zinc-100 text-zinc-600"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="px-4 py-3 text-right">
                      <div className="inline-flex items-center gap-1 justify-end">
                        <button
                          type="button"
                          className="p-1.5 rounded-lg text-[#0d5c52] hover:bg-[#0d5c52]/10"
                          aria-label="Share"
                        >
                          <Share2 className="w-4 h-4" />
                        </button>
                        <button
                          type="button"
                          className="p-1.5 rounded-lg text-zinc-500 hover:bg-zinc-100"
                          aria-label="More"
                        >
                          <MoreHorizontal className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      <p className="text-xs text-zinc-500 mt-4 text-center">
        This is a preview layout for marketing. Production lists live in{" "}
        <a
          href="https://app.dreamneighborhood.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#0d5c52] font-medium hover:underline"
        >
          Dream Neighborhood
        </a>
        .{" "}
        <Link href={dashboardHref} className="text-[#0d5c52] font-medium hover:underline">
          Back to dashboard
        </Link>
      </p>
    </div>
  );
}
