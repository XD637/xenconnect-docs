"use client";

import CodeSnippet from "../../../components/CodeSnippet";

const providerSetup = `\
"use client";
import "xenconnect/dist/tailwind.css"; // ✅ Import XenConnect styles

import { XenConnectProvider } from "xenconnect";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./globals.css";

const queryClient = new QueryClient();

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <QueryClientProvider client={queryClient}>
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

import { WalletButton } from "xenconnect";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <WalletButton 
        label="Connect Wallet"
        style="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md shadow-md transition"
      />
    </div>
  );
}`;

export default function Setup() {
  return (
    <div className="flex flex-col flex-grow pt-20 sm:px-12 sm:pl-56 w-full max-w-[90%] sm:max-w-none mx-auto">
      <div className="max-w-2xl w-full flex flex-col items-center sm:items-start">
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mb-4 sm:mb-6 text-center sm:text-left">
          Setup
        </h1>

        {/* Description */}
        <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6 leading-relaxed text-center sm:text-left">
          To use <span className="text-gray-800 font-medium">XenConnect</span>, you need to set up the provider and integrate the wallet connection button.
        </p>

        {/* Provider Setup */}
        <div className="mt-6 bg-white shadow-md rounded-xl p-5 sm:p-6 w-full">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Configure the Provider</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            The <code className="bg-gray-200 px-1 py-0.5 rounded text-gray-900 font-mono text-sm">XenConnectProvider</code> must wrap your application.
            It requires a <strong>Project ID</strong> and <strong>App Name</strong>, which you can obtain from
            <a href="https://reown.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium"> here</a>.
          </p>
          <CodeSnippet code={providerSetup} />
        </div>

        {/* Connect Button */}
        <div className="mt-6 bg-white shadow-md rounded-xl p-5 sm:p-6 w-full">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Add the Connect Button</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Once the provider is configured, you can add the <code className="bg-gray-200 px-1 py-0.5 rounded text-gray-900 font-mono text-sm">WalletButton</code> to your application.
            This button allows users to connect their wallets effortlessly.
          </p>
          <CodeSnippet code={connectButtonSetup} />
        </div>

        {/* Final Steps */}
        <div className="mt-6 bg-white shadow-md rounded-xl p-5 sm:p-6 w-full">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Final Steps</h2>
          <p className="text-gray-700 leading-relaxed">
            Your setup is now complete! You can further customize the button and connection experience
            to match your app’s UI.
          </p>
        </div>
      </div>
    </div>
  );
}
