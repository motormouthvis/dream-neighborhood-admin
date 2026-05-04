"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

export default function CopyScriptButton({ script }: { script: string }) {
  const [copied, setCopied] = useState(false);

  const onCopy = () => {
    navigator.clipboard.writeText(script);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={onCopy}
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
          <Copy className="w-3.5 h-3.5" /> Copy script
        </>
      )}
    </button>
  );
}
