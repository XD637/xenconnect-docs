"use client";
import { useState } from "react";
import CodeSnippet from "../../../components/CodeSnippet";

const providerSetup = `\
"use client";
import "xenconnect/dist/tailwind.css";

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
    <div className="flex flex-col flex-grow ml-56 pt-20 px-12">
      <div className="max-w-2xl">
        <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight mb-6">Setup</h1>

        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
          To use <span className="text-gray-800 font-medium">XenConnect</span>, set up the provider in your application.
        </p>

        {/* Provider Setup */}
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Configure the Provider</h2>
        <CodeSnippet code={providerSetup}/>

        {/* Connect Button */}
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. Add the Connect Button</h2>
        <CodeSnippet code={connectButtonSetup} />

      </div>
    </div>
  );
}
