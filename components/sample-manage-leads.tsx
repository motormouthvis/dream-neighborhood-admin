"use client";

import { Filter, ArrowUpDown, Download, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const brand = "#0d5c52";

const SAMPLE_LEADS = [
  {
    agent: "bill@motormouth.io",
    explorerId: "4",
    email: "bill@motormouth.io",
    phone: "",
    address: "311 Poinsettia Road, Anna Maria, FL",
  },
];

export default function SampleManageLeads() {
  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-2xl font-semibold tracking-tight text-zinc-900">
        Manage Your Leads
      </h1>
      <p className="mt-2 text-sm text-zinc-600 leading-relaxed max-w-3xl">
        Your Generated Leads — A list of all the leads you have generated through your
        explorers.
      </p>

      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:justify-end">
        <label className="sr-only" htmlFor="lead-search">
          Search leads
        </label>
        <input
          id="lead-search"
          type="search"
          placeholder="Search leads..."
          className="h-9 w-full min-w-[12rem] rounded-xl border border-zinc-200 bg-white px-3 text-sm shadow-sm outline-none focus-visible:ring-2 focus-visible:ring-[#0d5c52]/25 sm:w-56"
        />
        <Button
          variant="outline"
          className="h-9 rounded-xl border-zinc-200 gap-2 w-full sm:w-auto"
        >
          <Filter className="opacity-70" aria-hidden /> Filters
        </Button>
        <Button className="h-9 rounded-xl bg-[#0d5c52] hover:bg-[#0a4a42] text-white shadow-sm gap-2 w-full sm:w-auto border-0">
          <Download className="opacity-95" aria-hidden /> Export Selected
        </Button>
      </div>

      <div className="mt-6 rounded-2xl border border-zinc-200 bg-white shadow-sm overflow-hidden">
        <Table className="min-w-[800px]">
          <TableHeader>
            <TableRow className="hover:bg-transparent">
              <TableHead className="w-10 px-4">
                <input type="checkbox" className="rounded border-zinc-300 mt-1" aria-label="Select all" />
              </TableHead>
              <TableHead className="text-zinc-700">
                <button type="button" className="inline-flex items-center gap-1 font-medium">
                  Belongs To Agent
                  <ArrowUpDown className="size-3.5 opacity-45" aria-hidden />
                </button>
              </TableHead>
              <TableHead className="text-zinc-700">
                <button type="button" className="inline-flex items-center gap-1 font-medium">
                  Explorer ID
                  <ArrowUpDown className="size-3.5 opacity-45" aria-hidden />
                </button>
              </TableHead>
              <TableHead className="text-zinc-700">
                <button type="button" className="inline-flex items-center gap-1 font-medium">
                  Email
                  <ArrowUpDown className="size-3.5 opacity-45" aria-hidden />
                </button>
              </TableHead>
              <TableHead className="text-zinc-700">
                <button type="button" className="inline-flex items-center gap-1 font-medium">
                  Phone Number
                  <ArrowUpDown className="size-3.5 opacity-45" aria-hidden />
                </button>
              </TableHead>
              <TableHead className="text-zinc-700">
                <button type="button" className="inline-flex items-center gap-1 font-medium">
                  Address
                  <ArrowUpDown className="size-3.5 opacity-45" aria-hidden />
                </button>
              </TableHead>
              <TableHead className="text-zinc-700 text-right pr-6">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {SAMPLE_LEADS.map((lead, i) => (
              <TableRow key={i}>
                <TableCell className="align-middle px-4">
                  <input type="checkbox" className="rounded border-zinc-300 mt-2" aria-label="Select row" />
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Avatar className="h-8 w-8 ring-1 ring-zinc-200">
                      <AvatarFallback className="bg-[#d9f99d]/40 text-[#166534] text-[10px] font-semibold">
                        WM
                      </AvatarFallback>
                    </Avatar>
                    <span className="text-sm font-medium text-zinc-900 truncate max-w-[10rem]">
                      {lead.agent}
                    </span>
                  </div>
                </TableCell>
                <TableCell className="text-zinc-700">{lead.explorerId}</TableCell>
                <TableCell className="max-w-[10rem] truncate text-zinc-700">{lead.email}</TableCell>
                <TableCell className="text-zinc-400">{lead.phone || "—"}</TableCell>
                <TableCell className="max-w-[14rem] whitespace-normal text-zinc-700">{lead.address}</TableCell>
                <TableCell className="text-right pr-6">
                  <div className="inline-flex items-center gap-5">
                    <button
                      type="button"
                      className="text-sm font-medium hover:underline"
                      style={{ color: brand }}
                    >
                      View
                    </button>
                    <button
                      type="button"
                      className="rounded-lg p-1.5 hover:bg-zinc-100"
                      style={{ color: brand }}
                      aria-label="Delete lead"
                    >
                      <Trash2 className="size-4" />
                    </button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
