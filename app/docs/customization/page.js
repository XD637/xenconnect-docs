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
          XenConnect allows you to fully customize the <span className="text-gray-800 font-medium">Connect Wallet</span> button 
          using the <code className="bg-gray-200 px-1 py-0.5 rounded text-gray-900 font-mono text-sm mx-1">label</code> 
          and <code className="bg-gray-200 px-1 py-0.5 rounded text-gray-900 font-mono text-sm mx-1">style</code> props.
        </p>

        {/* Styling the Connect Button */}
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Styling the Connect Button</h2>
        <p className="text-gray-600 mb-4">
          You can pass any valid **Tailwind CSS classes** (or inline styles) to customize the button’s appearance.  
          Here’s an example of a **blue button with hover effects**:
        </p>
        
        <CodeSnippet code={customButtonExample} />

        {/* Customizing Button Label */}
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. Customizing the Button Label</h2>
        <p className="text-gray-600 mb-4">
          You can change the text of the **Connect Wallet** button using the <code className="bg-gray-200 px-1 py-0.5 rounded text-gray-900 font-mono text-sm">label</code> prop.
          Here’s an example where the button says **Sign In with Crypto** instead:
        </p>

        <CodeSnippet code={customLabelExample} />

        {/* Customization Possibilities */}
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. More Customization Options</h2>
        <p className="text-gray-600 mb-6">
          With the <code className="bg-gray-200 px-1 py-0.5 rounded text-gray-900 font-mono text-sm">style</code> and <code className="bg-gray-200 px-1 py-0.5 rounded text-gray-900 font-mono text-sm">label</code> props, you can:
        </p>

        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>Change colors, sizes, and spacing.</li>
          <li>Modify text to match your branding.</li>
          <li>Apply hover, focus, and active states.</li>
          <li>Use **Tailwind classes** or **inline styles**.</li>
        </ul>

      </div>
    </div>
  );
}
