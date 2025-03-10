export default function Home() {
  return (
    <div className="flex flex-col justify-center flex-grow bg-white p-6 sm:p-12 sm:pl-56 pt-20 ml-10">
      <h1 className="text-3xl font-bold text-gray-900 text-center sm:text-left pt-8">
        Welcome to XenConnect Docs
      </h1>
      <p className="text-gray-600 mt-2 text-center sm:text-left">
        A sleek and customizable wallet connection kit.
      </p>

      {/* Features Section */}
      <div className="mt-6 space-y-4 max-w-5xl">
        <div className="p-4 border-l-4 border-blue-500 bg-gray-50 rounded-md shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900">🚀 Faster than traditional WalletConnect</h2>
          <p className="text-gray-600 text-sm">Optimized for speed, making wallet connections seamless.</p>
        </div>

        <div className="p-4 border-l-4 border-green-500 bg-gray-50 rounded-md shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900">🎨 Fully Customizable Connect Button</h2>
          <p className="text-gray-600 text-sm">Easily style the connect button to match your brand.</p>
        </div>

        <div className="p-4 border-l-4 border-yellow-500 bg-gray-50 rounded-md shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900">🔗 Fewer Wallets, Broader Connections</h2>
          <p className="text-gray-600 text-sm">Supports key wallets with improved compatibility.</p>
        </div>

        <div className="p-4 border-l-4 border-purple-500 bg-gray-50 rounded-md shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900">🌟 Simple & Lightweight UI</h2>
          <p className="text-gray-600 text-sm">A minimalist and elegant experience for seamless onboarding.</p>
        </div>
      </div>
    </div>
  );
}
