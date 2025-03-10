"use client";
import { useState } from "react";
import CodeSnippet from "../../../components/CodeSnippet";

const providerSetup = `\
"use client";
import "xenconnect/dist/tailwind.css"; // ✅ Mandatory: Import XenConnect's Tailwind styles

import { XenConnectProvider } from "xenconnect"; // Import XenConnectProvider
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"; // Import QueryClient
import "./globals.css";

const queryClient = new QueryClient(); // Create a QueryClient instance

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <QueryClientProvider client={queryClient}> {/* ✅ Wrap with QueryClientProvider */}
          <XenConnectProvider projectId="yourprojectid" appName="yourappname">
            {children}
          </XenConnectProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}`;

const connectButtonSetup = `\
"use client";

import { WalletButton } from "xenconnect"; // Import WalletButton

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-purple-500">
      <WalletButton/>
    </div>
  );
}`;

export default function Setup() {
  return (
    <div className="flex flex-col flex-grow w-full max-w-[90%] sm:max-w-2xl px-4 sm:px-8 lg:px-12 pt-20 mx-auto">
      <div className="w-full flex flex-col items-center sm:items-start text-center sm:text-left">
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mb-6">
          Setup
        </h1>

        {/* Description */}
        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
          To use <span className="text-gray-800 font-medium">XenConnect</span>, you need to set up the provider and integrate the wallet connection button.
        </p>

        {/* Provider Setup */}
        <div className="mt-6 bg-white shadow-md rounded-xl p-6 w-full">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Configure the Provider</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            The <code className="font-medium text-gray-900">XenConnectProvider</code> must wrap your application.
            It requires a <strong>Project ID</strong> and <strong>App Name</strong>, which you can obtain from
            <a href="https://reown.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium"> here</a>.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Additionally, <code className="font-medium text-gray-900">dist/tailwind.css</code> is <strong>mandatory</strong> for styling.
          </p>
          <CodeSnippet code={providerSetup} />
        </div>

        {/* Connect Button */}
        <div className="mt-8 bg-white shadow-md rounded-xl p-6 w-full">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Add the Connect Button</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Once the provider is configured, you can add the <code className="font-medium text-gray-900">WalletButton</code> to your application.
            This button allows users to connect their wallets effortlessly.
          </p>
          <CodeSnippet code={connectButtonSetup} />
        </div>

        {/* Final Steps */}
        <div className="mt-8 bg-white shadow-md rounded-xl p-6 w-full">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Final Steps</h2>
          <p className="text-gray-700 leading-relaxed">
            Your setup is now complete! You can further customize the button and connection experience
            to match your apps UI.
          </p>
        </div>
      </div>
    </div>
  );
}
