"use client";

import { useState } from "react";
import { Zap, Code2, ArrowRight, Copy, Check, Users, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export default function PopupAdmin() {
  const [view, setView] = useState<"selfserve" | "partner">("selfserve");
  const [domain, setDomain] = useState("yourwebsite.com");
  const [copied, setCopied] = useState(false);
  const [snippetShown, setSnippetShown] = useState(false);

  const snippet = `<script src="https://cdn.dreamneighborhood.com/popup.js" data-domain="${domain}" async></script>`;

  const copySnippet = () => {
    navigator.clipboard.writeText(snippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Header */}
      <header className="border-b border-zinc-800 bg-zinc-900 px-8 py-5 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-emerald-600 rounded-2xl flex items-center justify-center">
              <Zap className="w-6 h-6" />
            </div>
            <div>
              <div className="text-2xl font-semibold tracking-tight">Dream Neighborhood</div>
              <div className="text-emerald-400 text-xs -mt-1">POPUP WIDGET • ADMIN</div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-8">
          <div className="flex border border-zinc-700 rounded-3xl p-1 text-sm">
            <button
              onClick={() => setView("selfserve")}
              className={`px-6 py-2 rounded-3xl transition-all ${view === "selfserve" ? "bg-white text-black shadow" : "hover:bg-zinc-800"}`}
            >
              Self-Serve Agent
            </button>
            <button
              onClick={() => setView("partner")}
              className={`px-6 py-2 rounded-3xl transition-all ${view === "partner" ? "bg-white text-black shadow" : "hover:bg-zinc-800"}`}
            >
              Partner Client
            </button>
          </div>

          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarFallback className="bg-emerald-600">WM</AvatarFallback>
            </Avatar>
            <div>
              <div className="font-medium">William Miller</div>
              <div className="text-xs text-emerald-400">Founder</div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-5xl mx-auto p-12">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 bg-emerald-950 text-emerald-400 text-xs tracking-widest px-4 py-2 rounded-full mb-4">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
            NEW SIMPLIFIED ADMIN
          </div>
          <h1 className="text-6xl font-semibold tracking-tighter">Popup Widget Setup</h1>
          <p className="text-2xl text-zinc-400 mt-4">Three lines of code. No redesign. No tech headaches.</p>
        </div>

        {view === "selfserve" ? (
          /* Self-Serve Flow */
          <div className="space-y-12">
            <Card className="bg-zinc-900 border-emerald-900">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Code2 className="text-emerald-400" />
                  1. Authorize Your Domain
                </CardTitle>
                <CardDescription className="text-lg">The popup will only appear on domains you whitelist.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                <div>
                  <label className="block text-sm text-zinc-400 mb-3">Your Website Domain</label>
                  <div className="flex gap-4">
                    <input
                      type="text"
                      value={domain}
                      onChange={(e) => setDomain(e.target.value)}
                      className="flex-1 bg-black border border-zinc-700 focus:border-emerald-500 rounded-2xl px-6 py-5 text-xl font-mono"
                    />
                    <Button onClick={() => setSnippetShown(true)} size="lg" className="bg-emerald-600 hover:bg-emerald-500 px-10 text-lg">
                      Generate Code
                    </Button>
                  </div>
                </div>

                {snippetShown && (
                  <div className="bg-black border border-emerald-800 rounded-3xl p-8">
                    <div className="flex justify-between items-center mb-6">
                      <div className="text-emerald-400 font-medium">YOUR 3-LINE INSTALL CODE</div>
                      <Button onClick={copySnippet} variant="outline" className="border-emerald-700 hover:bg-emerald-950">
                        {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                        {copied ? "Copied!" : "Copy"}
                      </Button>
                    </div>
                    <pre className="font-mono text-emerald-300 bg-zinc-950 p-6 rounded-2xl overflow-auto text-sm leading-relaxed border border-zinc-800">
                      {snippet}
                    </pre>
                    <p className="text-xs text-zinc-500 mt-6">Paste this code just before the closing &lt;/body&gt; tag on every page (or in your site template).</p>
                  </div>
                )}
              </CardContent>
            </Card>

            <div className="flex gap-6">
              <Card className="flex-1 bg-zinc-900 border-emerald-900">
                <CardHeader>
                  <CardTitle>Ready to Go Live?</CardTitle>
                </CardHeader>
                <CardContent>
                  <Button className="w-full h-16 text-lg bg-white text-black hover:bg-zinc-100">
                    Continue to Subscription → $39.95/mo
                  </Button>
                  <p className="text-center text-emerald-400 text-sm mt-6">14-day free trial • Cancel anytime</p>
                </CardContent>
              </Card>

              <Card className="flex-1 bg-zinc-900 border-zinc-800">
                <CardHeader>
                  <CardTitle>Need Help?</CardTitle>
                </CardHeader>
                <CardContent className="text-zinc-400">
                  Our team or your IDX partner can install this for you in minutes.<br /><br />
                  <Button variant="outline" className="border-zinc-700">Book 15-minute Install Call</Button>
                </CardContent>
              </Card>
            </div>

            <div className="text-center text-xs text-zinc-500 pt-8 border-t border-zinc-800">
              Everything else (full explorer, reports, leads, advanced analytics) is available in the <span className="text-emerald-400">Advanced</span> section.
            </div>
          </div>
        ) : (
          /* Partner Client Flow */
          <div className="max-w-2xl mx-auto">
            <Card className="bg-gradient-to-br from-zinc-900 to-black border border-emerald-600 text-center py-16">
              <div className="mx-auto w-20 h-20 bg-emerald-500/10 rounded-3xl flex items-center justify-center mb-8">
                <Zap className="w-12 h-12 text-emerald-400" />
              </div>
              
              <h2 className="text-5xl font-semibold tracking-tight mb-6">Your Neighborhood Popup<br />is Already Installed</h2>
              
              <p className="text-xl text-zinc-400 max-w-md mx-auto">
                Your website partner has added the 3-line code. All you need to do now is activate your full experience.
              </p>

              <div className="mt-16">
                <Button size="lg" className="h-16 px-16 text-lg bg-emerald-600 hover:bg-emerald-500">
                  Activate My Popup — Start Free Trial
                </Button>
              </div>

              <p className="text-xs text-zinc-500 mt-10">
                Your partner can also give you a custom discount or extend your trial.<br />
                Just ask them!
              </p>
            </Card>

            <div className="text-center text-xs text-zinc-500 mt-12">
              This page is marketing &amp; billing only. Technical setup is handled by your partner.
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
