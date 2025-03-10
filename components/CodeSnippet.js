"use client";

import { useState } from "react";
import { Clipboard, Check } from "lucide-react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomOneLight } from "react-syntax-highlighter/dist/esm/styles/hljs";

export default function CodeSnippet({ code, language = "javascript" }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative bg-white text-gray-900 p-4 rounded-xl border border-gray-300 shadow-md max-w-full overflow-x-auto sm:p-6 md:p-8 lg:p-10">
      {/* Syntax Highlighter */}
      <SyntaxHighlighter
        language={language}
        style={atomOneLight}
        customStyle={{
          background: "transparent",
          fontSize: "0.9rem",
          lineHeight: "1.5",
          overflowX: "auto",
          borderRadius: "0.5rem",
          padding: "1rem",
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
        className="absolute top-2 right-2 p-2 sm:p-3 md:p-4 rounded-md bg-gray-200 hover:bg-gray-300 transition text-gray-700 flex items-center justify-center"
      >
        {copied ? (
          <Check className="text-green-500 w-5 h-5" />
        ) : (
          <Clipboard className="w-5 h-5" />
        )}
      </button>
    </div>
  );
}
