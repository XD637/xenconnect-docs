"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <div className="fixed inset-x-0 top-0 z-50 border-b border-gray-200 bg-white">
      <div className="flex h-14 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Left: Brand Logo */}
        <Link href="/" className="flex items-center text-lg sm:text-xl font-bold text-gray-900">
          <span>XenConnect</span>
          <span className="ml-2 text-xs font-medium bg-gray-200 text-gray-600 px-2 py-0.5 rounded-md">
            v1.1.8
          </span>
        </Link>

        {/* Right: Playground Link (opens in new tab) */}
        <a
          href="https://xenconnect.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm sm:text-base font-medium text-gray-700 hover:text-gray-900 transition"
        >
          Playground
        </a>
      </div>
    </div>
  );
}
