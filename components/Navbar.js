"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="fixed inset-x-0 top-0 z-10 border-b border-gray-950/5 bg-white">
      <div className="flex h-14 items-center justify-between gap-8 px-4 sm:px-6">
        <div className="flex items-center gap-4">
          <Link href="/">
            <span className="text-xl font-bold text-gray-900">XenConnect</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
