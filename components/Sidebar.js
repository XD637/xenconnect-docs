"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronRight } from "lucide-react";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent scrolling when sidebar is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  // Close sidebar when a menu item is clicked (mobile)
  const closeSidebar = () => setIsOpen(false);

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-16 left-4 z-50 sm:hidden p-2 bg-gray-100 rounded-md shadow"
      >
        {isOpen ? <X className="w-6 h-6 text-gray-900" /> : <Menu className="w-6 h-6 text-gray-900" />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 w-56 bg-white border-r border-gray-200 px-6 py-8 transition-transform duration-300 z-50  
        ${isOpen ? "translate-x-0" : "-translate-x-full"} sm:translate-x-0`}
      >
        {/* Sidebar Links */}
        <nav className="space-y-12">
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-3 pt-14 pb-6">Getting Started</h2>
            <div className="space-y-6 pl-4">
              <Link
                href="/docs/prerequisite"
                className="text-gray-700 hover:text-black flex items-center group"
                onClick={closeSidebar}
              >
                Prerequisite
                <ChevronRight className="ml-2 w-4 h-4 text-gray-500 group-hover:text-black transition-all" />
              </Link>
              <Link
                href="/docs/installation"
                className="text-gray-700 hover:text-black flex items-center group"
                onClick={closeSidebar}
              >
                Installation
                <ChevronRight className="ml-2 w-4 h-4 text-gray-500 group-hover:text-black transition-all" />
              </Link>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-3 pb-6">Connect Button</h2>
            <div className="space-y-6 pl-4">
              <Link
                href="/docs/setup"
                className="text-gray-700 hover:text-black flex items-center group"
                onClick={closeSidebar}
              >
                Setup
                <ChevronRight className="ml-2 w-4 h-4 text-gray-500 group-hover:text-black transition-all" />
              </Link>
              <Link
                href="/docs/customization"
                className="text-gray-700 hover:text-black flex items-center group"
                onClick={closeSidebar}
              >
                Customization
                <ChevronRight className="ml-2 w-4 h-4 text-gray-500 group-hover:text-black transition-all" />
              </Link>
            </div>
          </div>
        </nav>
      </aside>

      {/* Overlay to close sidebar on mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 sm:hidden z-40"
          onClick={closeSidebar}
        ></div>
      )}
    </>
  );
}
