"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const PLAN_FEATURES = [
  {
    title: "Solo Agent",
    monthly: "$24.92/mo billed monthly",
    yearly: "$24.92/mo (billed yearly)",
    bullets: ["Use the pop up", "24/7 support", "Cancel anytime"],
  },
  {
    title: "Brokerage",
    monthly: "$99.92/mo billed monthly",
    yearly: "$99.92/mo (billed yearly)",
    bullets: ["Everything in Solo", "Invite your team", "Priority onboarding", "Cancel anytime"],
  },
] as const;

const testimonials = [
  {
    quote: '"Within a month we saw more qualified inbound leads than the previous quarter."',
    author: "Aaron G.",
  },
  {
    quote:
      "\"Our sphere finally understands what they're buying—not just sqft, but the neighborhood.\"",
    author: "Kevin D.",
  },
  {
    quote: '"Easiest onboarding for our agents. Buyers keep coming back for the explorer."',
    author: "Lisa M.",
  },
];

export default function SampleSubscription() {
  const [yearly, setYearly] = useState(true);

  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-8 lg:flex-row lg:gap-10">
      <div className="min-w-0 flex-1">
        <h1 className="text-2xl font-semibold tracking-tight text-zinc-900">
          Manage Your Subscription
        </h1>

        <div className="mt-8 overflow-hidden rounded-2xl border border-emerald-200/70 bg-emerald-50/70 p-6 sm:flex sm:items-center sm:justify-between sm:gap-6">
          <div>
            <h2 className="text-lg font-semibold text-zinc-900">Your Current Subscription</h2>
            <p className="mt-1 max-w-xl text-sm text-zinc-600">
              You are currently not subscribed to any plan.
            </p>
          </div>
          <div className="mt-4 hidden shrink-0 sm:block sm:mt-0" aria-hidden>
            <svg width="112" height="72" viewBox="0 0 112 72" fill="none" className="text-[#0d5c52] opacity-85">
              <path
                d="M8 62h96M16 62V38l12-14h16l14 18h22l14-22h14l14 36"
                stroke="currentColor"
                strokeWidth="2.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                fill="currentColor"
                opacity="0.35"
                d="M52 62V44h26v18zM22 62V48h22v14z"
              />
            </svg>
          </div>
        </div>

        <div className="mt-10">
          <h2 className="text-center text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
            Upgrade your plan
          </h2>
          <div className="mx-auto mt-4 flex justify-center rounded-full bg-zinc-200/70 p-1 text-xs font-semibold shadow-inner">
            <button
              type="button"
              onClick={() => setYearly(false)}
              className={`rounded-full px-6 py-2 transition-colors ${!yearly ? "bg-white text-zinc-900 shadow-sm" : "text-zinc-600"}`}
            >
              Monthly
            </button>
            <button
              type="button"
              onClick={() => setYearly(true)}
              className={`rounded-full px-6 py-2 transition-colors ${yearly ? "bg-white text-zinc-900 shadow-sm" : "text-zinc-600"}`}
            >
              Yearly{" "}
              <span className="text-emerald-700">(save 33%)</span>
            </button>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {PLAN_FEATURES.map((plan) => (
              <div
                key={plan.title}
                className="rounded-2xl border border-amber-100/90 bg-[#fdfbf4] p-6 shadow-sm ring-1 ring-black/5"
              >
                <div className="text-lg font-semibold text-zinc-900">{plan.title}</div>
                <div className="mt-4 text-xl font-semibold text-zinc-900">
                  {yearly ? plan.yearly : plan.monthly}
                </div>
                <ul className="mt-5 space-y-3 text-sm text-zinc-700">
                  {plan.bullets.map((b) => (
                    <li key={b} className="flex gap-3">
                      <Check className="mt-0.5 size-4 shrink-0 text-[#0d5c52]" aria-hidden />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <Button className="mt-7 h-10 w-full rounded-xl bg-[#0d5c52] hover:bg-[#0a4a42] text-white shadow-sm border-0">
                  Upgrade Now
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <aside className="w-full shrink-0 space-y-3 lg:w-72">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-zinc-400">
          What brokers say
        </h2>
        {testimonials.map((t) => (
          <div
            key={t.author}
            className="rounded-2xl border border-zinc-200 bg-white p-4 text-sm shadow-sm"
          >
            <div aria-hidden className="text-amber-500">
              ★★★★★
            </div>
            <p className="mt-2 leading-relaxed text-zinc-700">{t.quote}</p>
            <div className="mt-4 flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-zinc-100 text-[10px] font-bold text-zinc-500">
                {t.author.slice(0, 2)}
              </div>
              <span className="text-xs font-medium text-zinc-900">{t.author}</span>
            </div>
          </div>
        ))}
      </aside>
    </div>
  );
}
