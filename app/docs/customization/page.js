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
    <div className="flex flex-col flex-grow ml-56 pt-20 px-12">
      <div className="max-w-2xl">
        <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight mb-6">Customization</h1>

        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
          XenConnect allows full customization of the 
          <span className="text-gray-800 font-medium"> Connect Wallet</span> button using the 
          <code className="bg-gray-200 px-1 py-0.5 rounded text-gray-900 font-mono text-sm mx-1">label</code>  
          and <code className="bg-gray-200 px-1 py-0.5 rounded text-gray-900 font-mono text-sm mx-1">style</code> props.
        </p>

        {/* Styling the Connect Button */}
        <div className="mt-6 bg-white border border-gray-950/10 shadow-md rounded-xl p-6 backdrop-blur-md">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Styling the Connect Button</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            You can pass **Tailwind CSS classes** or inline styles to customize the button’s look.  
            Below is an example of a **blue button with hover effects**:
          </p>
          <CodeSnippet code={customButtonExample} />
        </div>

        {/* Customizing Button Label */}
        <div className="mt-8 bg-white border border-gray-950/10 shadow-md rounded-xl p-6 backdrop-blur-md">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Customizing the Button Label</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            You can modify the text of the **Connect Wallet** button using the 
            <code className="bg-gray-200 px-1 py-0.5 rounded text-gray-900 font-mono text-sm">label</code> prop.  
            Below, the button is changed to say **Sign In with Crypto** instead:
          </p>
          <CodeSnippet code={customLabelExample} />
        </div>

        {/* More Customization Options */}
        <div className="mt-8 bg-white border border-gray-950/10 shadow-md rounded-xl p-6 backdrop-blur-md">
          <p className="text-gray-700 mb-6 leading-relaxed">
            With the <code className="bg-gray-200 px-1 py-0.5 rounded text-gray-900 font-mono text-sm">style</code> and 
            <code className="bg-gray-200 px-1 py-0.5 rounded text-gray-900 font-mono text-sm">label</code> props, you can:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Change colors, sizes, and spacing.</li>
            <li>Modify text to match your branding.</li>
            <li>Apply hover, focus, and active states.</li>
            <li>Use **Tailwind classes** or **inline styles**.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
