"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent scrolling when sidebar is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
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
        <nav className="space-y-6">
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-3 pt-20">Getting Started</h2>
            <div className="space-y-2 pl-4">
              <Link href="/docs/prerequisite" className="block text-gray-700 hover:text-black" onClick={closeSidebar}>
                Prerequisite
              </Link>
              <Link href="/docs/installation" className="block text-gray-700 hover:text-black" onClick={closeSidebar}>
                Installation
              </Link>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">Connect Button</h2>
            <div className="space-y-2 pl-4">
              <Link href="/docs/setup" className="block text-gray-700 hover:text-black" onClick={closeSidebar}>
                Setup
              </Link>
              <Link href="/docs/customization" className="block text-gray-700 hover:text-black" onClick={closeSidebar}>
                Customization
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
