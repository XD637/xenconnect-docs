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
    <div className="relative bg-gray-950 text-gray-100 p-4 rounded-lg border border-gray-800 shadow-sm">
      {/* Syntax Highlighter */}
      <SyntaxHighlighter 
        language={language} 
        style={dracula} 
        customStyle={{ background: "transparent", fontSize: "0.875rem", overflowX: "auto" }}
        wrapLongLines={true} // Ensures better mobile experience
      >
        {code}
      </SyntaxHighlighter>

      {/* Copy Button */}
      <button
        onClick={handleCopy}
        className="absolute top-1 right-1 sm:top-2 sm:right-2 p-1 rounded bg-gray-800 hover:bg-gray-700 transition"
      >
        {copied ? <Check className="text-green-400 w-4 h-4" /> : <Clipboard className="w-4 h-4" />}
      </button>
    </div>
  );
}
