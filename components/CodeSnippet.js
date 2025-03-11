"use client";

import { useState, useCallback } from "react";
import { Clipboard, Check } from "lucide-react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomOneLight } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { vs } from "react-syntax-highlighter/dist/esm/styles/prism"; // Clean white background theme


export default function CodeSnippet({ code, language = "javascript" }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [code]);

  return (
    <div className="relative bg-black text-white rounded-xl border border-gray-300 shadow-md overflow-hidden">
      {/* Syntax Highlighter */}
      <SyntaxHighlighter
        language={language}
        style={atomOneLight}
        customStyle={{
          fontSize: "0.9rem",
          lineHeight: "1.5",
          padding: "1rem",
          whiteSpace: "pre-wrap",
        }}
        wrapLongLines
      >
        {code}
      </SyntaxHighlighter>

      {/* Copy Button */}
      <button
        onClick={handleCopy}
        aria-label="Copy code"
        className="absolute top-2 right-2 p-2 rounded-md bg-gray-100 hover:bg-gray-200 transition flex items-center justify-center"
      >
        {copied ? (
          <Check className="text-black w-4 h-4" />
        ) : (
          <Clipboard className="w-4 h-4 text-gray-600" />
        )}
      </button>
    </div>
  );
}
