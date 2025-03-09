"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Menu Button (Moves Down to Avoid Navbar Overlap) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-16 left-4 z-20 sm:hidden p-2 bg-gray-100 rounded-md shadow"
      >
        {isOpen ? <X className="w-6 h-6 text-gray-900" /> : <Menu className="w-6 h-6 text-gray-900" />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 w-56 bg-white border-r border-gray-200 px-6 py-8 transition-transform duration-300 
        ${isOpen ? "translate-x-0" : "-translate-x-64"} sm:translate-x-0`}
      >
        {/* Logo (Hidden on Mobile if Sidebar is Closed) */}
        <div className={`${isOpen ? "block" : "hidden sm:block"} mb-8`}>
          <Link href="/">
            <span className="text-2xl font-bold text-gray-900">XenConnect</span>
          </Link>
        </div>

        {/* Sidebar Links */}
        <nav className="space-y-6">
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">Getting Started</h2>
            <div className="space-y-2 pl-4">
              <Link href="/docs/prerequisite" className="block text-gray-700 hover:text-black">
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

      {/* Overlay (for closing sidebar on mobile) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 sm:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
}
