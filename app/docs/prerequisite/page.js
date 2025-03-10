export default function Prerequisite() {
  return (
    <div className="flex flex-col flex-grow pt-20 px-6 sm:px-12 sm:pl-56 mx-auto sm:mx-0 items-center sm:items-start text-center sm:text-left w-full max-w-[90%] sm:max-w-none">
      {/* Documentation Container */}
      <div className="max-w-2xl w-full flex flex-col items-center sm:items-start">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mb-4 sm:mb-6">
          Prerequisites
        </h1>

        <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
          Before using <span className="text-gray-800 font-medium">XenConnect</span>, ensure your project meets the following requirements.
          XenConnect is built to be <span className="text-gray-800 font-medium">lightweight, flexible, and highly customizable</span>.
        </p>

        {/* Required Section */}
        <div className="bg-white border shadow-md rounded-xl p-4 sm:p-6 border-l-4 border-black w-full">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">Required</h2>
          <ul className="space-y-2 sm:space-y-3 text-gray-700 text-sm sm:text-base">
            <li className="flex items-start gap-2">
              <strong>React 19 & ReactDOM 19</strong> – Latest version required for compatibility.
            </li>
            <li className="flex items-start gap-2">
              <strong>Project ID & App Name</strong> – Required for WalletConnect integration.  
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
        <div className="mt-6 sm:mt-8 bg-white border border-l-4 border-black shadow-md rounded-xl p-4 sm:p-6 w-full">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">Recommended</h2>
          <ul className="space-y-2 sm:space-y-3 text-gray-700 text-sm sm:text-base">
            <li className="flex items-start gap-2">
              <strong>Tailwind CSS (Optional)</strong> – Easily customize the **Connect** button UI.
            </li>
            <li className="flex items-start gap-2">
              <strong>Next.js or Vite</strong> – Ideal for performance and developer experience.
            </li>
          </ul>
        </div>

        {/* Note */}
        <div className="mt-4 sm:mt-6 text-gray-600 text-xs sm:text-sm w-full">
          <strong>Note:</strong> XenConnect works with all React-based frameworks.
        </div>
      </div>
    </div>
  );
}
