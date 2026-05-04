import { notFound } from "next/navigation";
import Link from "next/link";
import { platforms, platformList, SCRIPT_TAG } from "../install-data";
import CopyScriptButton from "../copy-script-button";

export function generateStaticParams() {
  return platformList.map((p) => ({ platform: p.slug }));
}

type Params = { platform: string };

export default async function InstallPlatformPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { platform } = await params;
  const data = platforms[platform];
  if (!data) notFound();

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50">
      <header className="bg-[#0A6B5F] text-white">
        <div className="max-w-3xl mx-auto px-6 py-5 flex items-center gap-3">
          <Link href="/" className="text-2xl">🏠</Link>
          <div>
            <div className="font-semibold text-xl tracking-tight">Dream Neighborhood</div>
            <div className="text-emerald-200 text-xs">Install guide</div>
          </div>
          <Link
            href="/"
            className="ml-auto text-xs bg-white/10 hover:bg-white/20 backdrop-blur px-4 py-2 rounded-xl transition-colors"
          >
            ← Back to dashboard
          </Link>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-10">
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-3 py-1 rounded-3xl mb-3 text-xs font-medium tracking-wider uppercase">
            Install Guide
          </div>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white border-2 border-emerald-200 rounded-2xl flex items-center justify-center text-2xl shadow-sm">
              {data.emoji}
            </div>
            <h1 className="text-3xl font-semibold text-zinc-900 tracking-tight">
              Install on {data.name}
            </h1>
          </div>
          <p className="text-zinc-600 mt-3">{data.tagline}</p>
        </div>

        <div className="bg-white border border-emerald-200 rounded-3xl p-6 shadow-sm mb-8">
          <div className="flex items-center justify-between mb-3">
            <div className="text-sm font-semibold text-zinc-900">Your installation script</div>
            <CopyScriptButton script={SCRIPT_TAG} />
          </div>
          <div className="bg-emerald-50/60 border border-emerald-100 text-emerald-900 rounded-2xl px-4 py-3 font-mono text-xs overflow-auto">
            {SCRIPT_TAG}
          </div>
          <div className="text-[11px] text-zinc-500 mt-2">
            The same script works for every customer — no per-site customization needed.
          </div>
        </div>

        <div className="space-y-3">
          {data.steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-white border border-emerald-100 rounded-2xl p-5 shadow-sm flex gap-4"
            >
              <div className="w-9 h-9 bg-emerald-600 text-white rounded-xl flex items-center justify-center font-semibold text-sm flex-shrink-0 shadow-sm">
                {idx + 1}
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-semibold text-zinc-900 text-base">{step.title}</div>
                <p className="text-sm text-zinc-600 leading-relaxed mt-1">{step.body}</p>
              </div>
            </div>
          ))}
        </div>

        {data.notes && data.notes.length > 0 && (
          <div className="mt-8 bg-amber-50/80 border border-amber-200/80 rounded-2xl p-5">
            <div className="text-xs font-semibold text-amber-900 uppercase tracking-wider mb-2">
              Notes
            </div>
            <ul className="space-y-2 text-sm text-amber-900/90">
              {data.notes.map((n, i) => (
                <li key={i} className="flex gap-2">
                  <span>•</span>
                  <span>{n}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-10 bg-gradient-to-br from-emerald-600 to-teal-700 text-white rounded-3xl p-6 shadow-md flex items-center gap-5">
          <div className="text-4xl">📅</div>
          <div className="flex-1">
            <div className="font-semibold text-lg">Need a hand?</div>
            <div className="text-emerald-100 text-sm">
              Book a free 15-minute call — we'll install it for you while you watch.
            </div>
          </div>
          <a
            href="#"
            className="bg-white text-emerald-700 hover:bg-emerald-50 px-5 py-2.5 rounded-xl font-semibold text-sm shadow-sm whitespace-nowrap"
          >
            Book Meeting
          </a>
        </div>

        <div className="mt-12 pt-8 border-t border-emerald-100">
          <div className="text-xs uppercase tracking-widest text-zinc-500 mb-3">
            Other platforms
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {platformList
              .filter((p) => p.slug !== data.slug)
              .map((p) => (
                <Link
                  key={p.slug}
                  href={`/install/${p.slug}`}
                  className="flex items-center gap-3 px-4 py-2.5 bg-white border border-zinc-200 rounded-xl text-sm text-zinc-700 hover:border-emerald-300 hover:bg-emerald-50/50 transition-colors"
                >
                  <span className="text-lg">{p.emoji}</span>
                  <span className="font-medium">{p.name}</span>
                </Link>
              ))}
          </div>
        </div>
      </main>
    </div>
  );
}
