"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="absolute bottom-0 left-0 w-full border-t border-gray-200 bg-white py-4 text-center text-xs text-gray-600">
      <p>
        © {new Date().getFullYear()} XenConnect. All rights reserved. |  
        <Link href="https://github.com/xennium-labs/xenconnect" target="_blank" className="ml-2 hover:text-black">
          GitHub
        </Link> 
        <Link href="https://twitter.com/xenniumlabs" target="_blank" className="ml-2 hover:text-black">
          Twitter
        </Link>
      </p>
    </footer>
  );
}
