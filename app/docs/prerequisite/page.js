export default function Prerequisite() {
  return (
    <div className="flex flex-col flex-grow ml-56 pt-20 px-12">
      {/* Documentation Container */}
      <div className="max-w-2xl">
        <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight mb-6">Prerequisites</h1>

        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          Before using <span className="text-gray-800 font-medium">XenConnect</span>, ensure your project meets the following requirements.
          XenConnect is built to be <span className="text-gray-800 font-medium">lightweight, flexible, and highly customizable</span>.
        </p>

        {/* Required Section */}
        <div className="bg-white border border-gray-950/10 shadow-md rounded-xl p-6 backdrop-blur-md">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Required</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-center gap-2">
              <span className="text-lg">⚡</span> <strong>React 19 & ReactDOM 19</strong> – Latest version required for compatibility.
            </li>
            <li className="flex items-center gap-2">
              <span className="text-lg">🛠</span> <strong>Works with Next.js, Vite, and all React-based projects</strong>.
            </li>
          </ul>
        </div>

        {/* Recommended Section */}
        <div className="mt-8 bg-white border border-gray-950/10 shadow-md rounded-xl p-6 backdrop-blur-md">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Recommended</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-center gap-2">
              <span className="text-lg">🎨</span> <strong>Tailwind CSS (Optional)</strong> – Easily customize the **Connect** button UI.
            </li>
            <li className="flex items-center gap-2">
              <span className="text-lg">✅</span> <strong>ESLint & Prettier</strong> – Keep your code clean and consistent.
            </li>
          </ul>
        </div>

        {/* Extra Note */}
        <p className="mt-8 text-gray-500 text-sm border-t border-gray-200 pt-4">
          XenConnect is **framework-agnostic**, making it effortless to integrate into any React-based project.
        </p>
      </div>
    </div>
  );
}
