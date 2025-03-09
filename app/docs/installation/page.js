"use client";
import { useState } from "react";
import CodeSnippet from "../../../components/CodeSnippet";

const commands = {
  npm: "npm install xenconnect@latest wagmi viem@2.x @tanstack/react-query lucide-react",
  yarn: "yarn add xenconnect@latest wagmi viem@2.x @tanstack/react-query lucide-react",
  pnpm: "pnpm add xenconnect@latest wagmi viem@2.x @tanstack/react-query lucide-react",
  bun: "bun add xenconnect@latest wagmi viem@2.x @tanstack/react-query lucide-react",
};

export default function Installation() {
  const [packageManager, setPackageManager] = useState("npm");

  return (
    <div className="flex flex-col flex-grow ml-56 pt-20 px-12">
      <div className="max-w-2xl">
        <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight mb-6">Installation</h1>

        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
          Install <span className="text-gray-800 font-medium">XenConnect</span> and its dependencies
          using your preferred package manager.
        </p>

        {/* Package Manager Switcher */}
        <div className="flex space-x-2 mb-4">
          {Object.keys(commands).map((pm) => (
            <button
              key={pm}
              onClick={() => setPackageManager(pm)}
              className={`px-4 py-2 text-sm rounded-lg transition ${
                packageManager === pm
                  ? "bg-gray-900 text-white"
                  : "bg-gray-200 text-gray-900 hover:bg-gray-300"
              }`}
            >
              {pm}
            </button>
          ))}
        </div>

        {/* Code Snippet */}
        <CodeSnippet code={commands[packageManager]} />
      </div>
    </div>
  );
}
