export default function Prerequisite() {
  return (
    <div className="flex flex-col flex-grow pt-20 px-6 sm:px-12 sm:pl-56 ml-10">
      {/* Documentation Container */}
      <div className="max-w-2xl">
        <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight mb-6 text-center sm:text-left">
          Prerequisites
        </h1>

        <p className="text-lg text-gray-600 mb-8 leading-relaxed text-center sm:text-left">
          Before using <span className="text-gray-800 font-medium">XenConnect</span>, ensure your project meets the following requirements.
          XenConnect is built to be <span className="text-gray-800 font-medium">lightweight, flexible, and highly customizable</span>.
        </p>

        {/* Required Section */}
        <div className="bg-white border  shadow-md rounded-xl p-6 border-l-4 border-black">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Required</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-center gap-2">
              <span className="text-lg"></span> <strong>React 19 & ReactDOM 19</strong> – Latest version required for compatibility.
            </li>
            <li className="flex items-center gap-2">
              <span className="text-lg"></span> <strong>Project ID & App Name</strong> – Required for WalletConnect integration.  
              <a 
                href="https://reown.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-600 hover:underline font-medium"
              >
                Get it here
              </a>.
            </li>
          </ul>
        </div>

        {/* Recommended Section */}
        <div className="mt-8 bg-white border border-l-4 border-black shadow-md rounded-xl p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Recommended</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-center gap-2">
              <span className="text-lg"></span> <strong>Tailwind CSS (Optional)</strong> – Easily customize the **Connect** button UI.
            </li>
            <li className="flex items-center gap-2">
              <span className="text-lg"></span> <strong>Next.js or Vite</strong> – Ideal for performance and developer experience.
            </li>
          </ul>
        </div>

        {/* Note */}
        <div className="mt-6 text-gray-600 text-sm text-center sm:text-left">
          <strong>Note:</strong> XenConnect works with all React-based frameworks.
        </div>
      </div>
    </div>
  );
}
