import Link from "next/link";

export const metadata = {
  title: "Dream Neighborhood — Welcome",
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50 flex items-center justify-center p-6">
      <div className="max-w-3xl w-full">
        <div className="text-center mb-10">
          <div className="text-5xl mb-4">🏠</div>
          <h1 className="text-4xl font-semibold text-zinc-900 tracking-tight">
            Welcome to Dream Neighborhood
          </h1>
          <p className="text-zinc-600 mt-3">
            Choose how you'd like to get started.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          <Link
            href="/self-serve"
            className="group bg-white border border-emerald-200 rounded-3xl p-8 shadow-sm hover:shadow-xl hover:border-emerald-400 transition-all"
          >
            <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-600 text-white rounded-2xl flex items-center justify-center mb-4 shadow-md">
              <span className="text-2xl">⚡</span>
            </div>
            <div className="text-xs uppercase tracking-widest text-emerald-700 font-semibold">
              Self-Serve
            </div>
            <h2 className="text-2xl font-semibold text-zinc-900 mt-1">
              I have my own website
            </h2>
            <p className="text-zinc-600 text-sm mt-3 leading-relaxed">
              Install the Dream Neighborhood popup yourself in under 5 minutes.
              Same simple script, copy &amp; paste it on your site.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 text-emerald-700 text-sm font-medium group-hover:gap-3 transition-all">
              Open dashboard →
            </div>
          </Link>

          <Link
            href="/partners"
            className="group bg-white border border-emerald-200 rounded-3xl p-8 shadow-sm hover:shadow-xl hover:border-emerald-400 transition-all"
          >
            <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-600 text-white rounded-2xl flex items-center justify-center mb-4 shadow-md">
              <span className="text-2xl">🤝</span>
            </div>
            <div className="text-xs uppercase tracking-widest text-emerald-700 font-semibold">
              Partner
            </div>
            <h2 className="text-2xl font-semibold text-zinc-900 mt-1">
              I came from Realty Candy
            </h2>
            <p className="text-zinc-600 text-sm mt-3 leading-relaxed">
              Your popup is already embedded by your partner. Activate to unlock
              the full experience and claim your 50% off first month.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 text-emerald-700 text-sm font-medium group-hover:gap-3 transition-all">
              Open dashboard →
            </div>
          </Link>
        </div>

        <div className="text-center mt-10 text-xs text-zinc-500">
          Need help?{" "}
          <a
            href="https://dreamneighborhood.com/book-a-call"
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-700 hover:text-emerald-800 font-medium"
          >
            Book a call
          </a>
        </div>
      </div>
    </div>
  );
}
