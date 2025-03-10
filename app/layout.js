import "./globals.css";
import Navbar from "../components/Navbar.js";
import Sidebar from "../components/Sidebar.js";
import Footer from "../components/Footer.js"; // Import Footer

export const metadata = {
  title: "XenConnect",
  description: "A Wallet Connection Modal",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
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
