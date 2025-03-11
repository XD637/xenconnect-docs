"use client";
import { useState } from "react";
import CodeSnippet from "../../../components/CodeSnippet";

const commands = {
  npm: "npm install xenconnect wagmi viem@2.x @tanstack/react-query ",
  yarn: "yarn add xenconnect wagmi viem@2.x @tanstack/react-query ",
  pnpm: "pnpm add xenconnect wagmi viem@2.x @tanstack/react-query ",
  bun: "bun add xenconnect wagmi viem@2.x @tanstack/react-query ",
};

export default function Installation() {
  const [packageManager, setPackageManager] = useState("npm");

  return (
    <div className="flex flex-col flex-grow pt-20 px-6 sm:px-12 sm:pl-56 w-full max-w-[90%] sm:max-w-none mx-auto">
      <div className="max-w-2xl w-full flex flex-col items-center sm:items-start">
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mb-4 sm:mb-6 text-center sm:text-left">
          Installation
        </h1>

        {/* Description */}
        <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6 leading-relaxed text-center sm:text-left">
          Install <span className="text-gray-800 font-medium">XenConnect</span> and its dependencies
          using your preferred package manager. XenConnect is designed to be{" "}
          <span className="text-gray-800 font-medium">lightweight, easy to integrate, and developer-friendly</span>.
        </p>

        {/* Package Manager Switcher */}
        <div className="flex flex-wrap sm:flex-nowrap gap-2 justify-center sm:justify-start w-full">
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
        <div className="w-full mt-4">
          <CodeSnippet code={commands[packageManager]} />
        </div>

        {/* Next Steps */}
        <div className="mt-6 sm:mt-8 bg-white border border-l-4 border-black shadow-md rounded-xl p-4 sm:p-6 w-full">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4 text-center sm:text-left">
            Next Steps
          </h2>
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed text-center sm:text-left">
            Once installed, follow the{" "}
            <a
              href="/docs/setup"
              className="text-blue-600 hover:underline font-medium"
            >
              Setup Guide
            </a>{" "}
            to configure <strong>XenConnectProvider</strong> and start integrating the <strong>Connect Wallet</strong> button.
          </p>
        </div>
      </div>
    </div>
  );
}
