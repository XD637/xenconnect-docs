import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar.js";
import Sidebar from "../components/Sidebar.js";
import Footer from "../components/Footer.js"; // Import Footer

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "XenConnect",
  description: "A Wallet Connection Modal",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="flex min-h-screen">
          <Sidebar /> {/* Sidebar on the left */}
          <div className="flex-1 flex flex-col">
            <Navbar /> {/* Navbar on top */}
            <main className="flex-1 p-6">{children}</main> {/* Main content */}
            <Footer /> {/* Footer at the bottom */}
          </div>
        </div>
      </body>
    </html>
  );
}
