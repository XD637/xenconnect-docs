"use client";
import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="fixed inset-y-0 left-0 w-56 bg-white border-r border-gray-200 px-6 py-8">
      {/* Logo */}
      <div className="mb-8">
        <Link href="/">
          <span className="text-2xl font-bold text-gray-900">XenConnect</span>
        </Link>
      </div>

      {/* Sidebar Sections */}
      <nav className="space-y-6">
        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-3">Getting Started</h2>
          <div className="space-y-2 pl-4">
          <Link href="/docs/prerequisite " className="block text-gray-700 hover:text-black">
              Prerequisite 
            </Link>
            <Link href="/docs/installation" className="block text-gray-700 hover:text-black">
              Installation
            </Link>
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-3">Connect Button</h2>
          <div className="space-y-2 pl-4">
            <Link href="/docs/setup" className="block text-gray-700 hover:text-black">
              Setup
            </Link>
            <Link href="/docs/customization" className="block text-gray-700 hover:text-black">
              Customization
            </Link>
          </div>
        </div>
      </nav>
    </aside>
  );
}
