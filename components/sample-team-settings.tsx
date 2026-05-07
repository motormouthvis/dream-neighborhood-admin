"use client";

import { Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SampleTeamSettings() {
  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight text-zinc-900">Team Settings</h1>
        <p className="mt-2 text-sm text-zinc-600 leading-relaxed">
          Configure how Dream Neighborhood works for your brokerage. This preview shows the
          layout for billing contacts, explorers, and access before your production settings
          are connected.
        </p>
      </div>

      <section className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
        <div className="flex items-start gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0d5c52]/10 text-[#0d5c52] shrink-0">
            <Building2 className="h-6 w-6" aria-hidden />
          </div>
          <div className="min-w-0">
            <h2 className="text-lg font-semibold text-zinc-900">Dream Neighborhood Realty Co</h2>
            <p className="text-sm text-zinc-600 mt-1">
              Billing email: bill@motormouth.io • Team timezone: Eastern (US &amp; Canada)
            </p>
          </div>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div>
            <label className="text-xs font-medium uppercase tracking-wide text-zinc-500">
              Workspace name
            </label>
            <input
              readOnly
              defaultValue="Dream Neighborhood Realty Co"
              className="mt-1.5 w-full rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-2 text-sm text-zinc-800"
            />
          </div>
          <div>
            <label className="text-xs font-medium uppercase tracking-wide text-zinc-500">
              Default explorer region
            </label>
            <input
              readOnly
              defaultValue="Florida, USA"
              className="mt-1.5 w-full rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-2 text-sm text-zinc-800"
            />
          </div>
        </div>
        <Button className="mt-8 h-10 rounded-xl bg-[#0d5c52] hover:bg-[#0a4a42] text-white shadow-sm border-0">
          Save settings (preview)
        </Button>
      </section>

      <section className="rounded-2xl border border-zinc-200 bg-zinc-50/70 p-6">
        <h3 className="text-sm font-semibold text-zinc-900">Sample members list</h3>
        <p className="text-xs text-zinc-600 mt-1">
          When your SSO or invites are wired up, admins and explorers will appear here.
        </p>
        <div className="mt-5 space-y-2">
          <div className="flex justify-between rounded-xl border border-zinc-100 bg-white px-4 py-3 text-sm">
            <span className="font-medium text-zinc-900">bill@motormouth.io</span>
            <span className="rounded-full bg-[#d9f99d]/40 px-2 py-0.5 text-[10px] font-semibold uppercase text-[#166534]">
              Owner
            </span>
          </div>
          <div className="rounded-xl border border-dashed border-zinc-300 bg-white/70 px-4 py-6 text-center text-xs text-zinc-500">
            Invite teammates from the production dashboard — this shell is illustrative only.
          </div>
        </div>
      </section>
    </div>
  );
}
