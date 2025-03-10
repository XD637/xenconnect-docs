"use client";

import { useState } from "react";
import { Clipboard, Check } from "lucide-react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function CodeSnippet({ code, language = "javascript" }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative bg-gray-950 text-gray-100 p-4 rounded-xl border border-gray-800 shadow-lg max-w-full overflow-x-auto">
      {/* Syntax Highlighter */}
      <SyntaxHighlighter
        language={language}
        style={dracula}
        customStyle={{
          background: "transparent",
          fontSize: "0.85rem",
          lineHeight: "1.6",
          overflowX: "auto",
          borderRadius: "0.5rem",
          whiteSpace: "pre-wrap",
        }}
        wrapLongLines={true}
      >
        {code}
      </SyntaxHighlighter>

      {/* Copy Button */}
      <button
        onClick={handleCopy}
        aria-label="Copy code"
        className="absolute top-2 right-2 p-3 rounded-lg bg-gray-800 bg-opacity-75 hover:bg-opacity-100 transition text-white flex items-center justify-center sm:p-2"
      >
        {copied ? (
          <Check className="text-green-400 w-5 h-5" />
        ) : (
          <Clipboard className="w-5 h-5" />
        )}
      </button>
    </div>
  );
}
