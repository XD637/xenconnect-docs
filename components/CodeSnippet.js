"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { Clipboard, Check } from "lucide-react";
import hljs from "highlight.js";
import "highlight.js/styles/github.css";

export default function CodeSnippet({ code, language = "javascript" }) {
  const [copied, setCopied] = useState(false);
  const codeRef = useRef(null);

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [code]);

  useEffect(() => {
    if (codeRef.current) {
      hljs.highlightElement(codeRef.current);
    }
  }, [code, language]);

  return (
    <div className="relative rounded-md border border-gray-200 bg-white shadow-sm overflow-hidden font-mono">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2 bg-gray-50 border-b border-gray-200 text-[11px] text-gray-600 font-semibold uppercase tracking-wide font-mono">
        <span className="capitalize">{language}</span>
        <button
          onClick={handleCopy}
          aria-label="Copy code"
          className="flex items-center gap-1 px-2 py-0.5 rounded-md bg-white border border-gray-300 text-gray-600 hover:bg-gray-100 transition text-[11px]"
        >
          {copied ? (
            <>
              <Check className="w-3 h-3 text-green-600" />
              Copied
            </>
          ) : (
            <>
              <Clipboard className="w-3 h-3" />
              Copy
            </>
          )}
        </button>
      </div>

      {/* Code block */}
      <pre className="m-0 p-4 overflow-auto text-[12px] leading-relaxed font-[Menlo,Monaco,'Courier New',monospace]">
        <code
          ref={codeRef}
          className={`language-${language} whitespace-pre`}
        >
          {code}
        </code>
      </pre>
    </div>
  );
}
