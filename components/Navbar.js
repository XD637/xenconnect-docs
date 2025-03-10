"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <div className="fixed inset-x-0 top-0 z-50 border-b border-gray-200 bg-white">
      <div className="flex h-14 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Left: Brand Logo */}
        <Link href="/" className="text-lg sm:text-xl font-bold text-gray-900">
          XenConnect
        </Link>

        {/* Right: Playground Link (Adjusts for Small Screens) */}
        <Link
          href="/playground"
          className="text-sm sm:text-base font-medium text-gray-700 hover:text-gray-900 transition"
        >
          Playground
        </Link>
      </div>
    </div>
  );
}
