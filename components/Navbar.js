"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <div className="fixed inset-x-0 top-0 z-10 border-b border-gray-950/5 bg-white">
      <div className="flex h-14 items-center justify-between gap-8 px-4 sm:px-6">
        {/* Left: Brand Logo */}
        <div className="flex items-center gap-4">
          <Link href="/">
            <span className="text-xl font-bold text-gray-900">XenConnect</span>
          </Link>
        </div>

        {/* Right: Playground Link */}
        <div className="flex items-center gap-4">
          <Link href="/playground">
            <span className="text-sm font-medium text-gray-700 hover:text-gray-900 transition">
              Playground
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
