"use client";

import CodeSnippet from "../../../components/CodeSnippet";

const customButtonExample = `\
"use client";

import { WalletButton } from "xenconnect"; // Import WalletButton

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

const customLabelExample = `\
"use client";

import { WalletButton } from "xenconnect"; // Import WalletButton

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <WalletButton 
        label="Sign In with Crypto"
        style="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-lg shadow-lg transition"
      />
    </div>
  );
}`;

export default function Customization() {
  return (
    <div className="flex flex-col flex-grow w-full max-w-[90%] sm:max-w-2xl px-4 sm:px-8 lg:px-12 pt-20 mx-auto">
      <div className="w-full flex flex-col items-center sm:items-start text-center sm:text-left">
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mb-6">
          Customization
        </h1>

        {/* Description */}
        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
          XenConnect allows full customization of the{" "}
          <span className="text-gray-800 font-medium">Connect Wallet</span> button using the{" "}
          <code className="bg-gray-200 px-1 py-0.5 rounded text-gray-900 font-mono text-sm mx-1">label</code>{" "}
          and{" "}
          <code className="bg-gray-200 px-1 py-0.5 rounded text-gray-900 font-mono text-sm mx-1">style</code>{" "}
          props.
        </p>

        {/* Styling the Connect Button */}
        <div className="mt-6 bg-white shadow-md rounded-xl p-6 w-full">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Styling the Connect Button</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            You can pass <strong>Tailwind CSS classes</strong> or inline styles to customize the button’s look.
            Below is an example of a <strong>blue button with hover effects</strong>:
          </p>
          <CodeSnippet code={customButtonExample} />
        </div>

        {/* Customizing Button Label */}
        <div className="mt-8 bg-white shadow-md rounded-xl p-6 w-full">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Customizing the Button Label</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            You can modify the text of the <strong>Connect Wallet</strong> button using the{" "}
            <code className="bg-gray-200 px-1 py-0.5 rounded text-gray-900 font-mono text-sm">label</code> prop.
            Below, the button is changed to say <strong>Sign In with Crypto</strong> instead:
          </p>
          <CodeSnippet code={customLabelExample} />
        </div>

        {/* More Customization Options */}
        <div className="mt-8 bg-white shadow-md rounded-xl p-6 w-full">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">More Customization Options</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            With the <code className="bg-gray-200 px-1 py-0.5 rounded text-gray-900 font-mono text-sm">style</code>{" "}
            and{" "}
            <code className="bg-gray-200 px-1 py-0.5 rounded text-gray-900 font-mono text-sm">label</code> props, you can:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Change colors, sizes, and spacing.</li>
            <li>Modify text to match your branding.</li>
            <li>Apply hover, focus, and active states.</li>
            <li>Use <strong>Tailwind classes</strong> or <strong>inline styles</strong>.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
