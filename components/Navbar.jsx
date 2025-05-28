"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import { useState } from "react";
import { FaGoogle } from "react-icons/fa";

export default function Navbar() {
  const { status } = useSession();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const sections = [
    "features",
    "how-it-works",
    "security",
    "dashboard-preview",
    "pricing",
    "contact",
  ];

  return (
    <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white shadow-md">
      <div className="flex justify-between items-center h-16">
        {/* Logo */}
        <div className="flex-shrink-0">
          <a href="#" className="text-2xl font-bold text-slate-900">
            SiemTrix
          </a>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex space-x-8">
          {sections.map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className="text-gray-700 hover:text-emerald-600 transition-colors duration-300 font-medium"
            >
              {section.charAt(0).toUpperCase() + section.slice(1).replace("-", " ")}
            </a>
          ))}
        </div>

        {/* Desktop Auth Button */}
        <div className="hidden md:flex">
          {status === "authenticated" ? (
            <button
              onClick={() => signOut()}
              className="bg-slate-900 text-white px-4 py-2 rounded-md hover:bg-slate-800 transition-all"
            >
              Sign Out
            </button>
          ) : (
            <button
              onClick={() => signIn("google")}
              className="flex items-center bg-white text-slate-900 border border-gray-300 px-4 py-2 rounded-md hover:bg-gray-100 hover:text-black transition-all"
            >
              <FaGoogle className="mr-2 text-lg" />
              Sign In with Google
            </button>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-gray-700 hover:text-emerald-600 transition-colors duration-300"
            aria-label="Toggle navigation menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  isMobileMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isMobileMenuOpen ? "" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
          {sections.map((section) => (
            <a
              key={section}
              href={`#${section}`}
              onClick={closeMobileMenu}
              className="block px-3 py-2 text-gray-700 hover:text-emerald-600 hover:bg-gray-50 transition-colors duration-300 font-medium"
            >
              {section.charAt(0).toUpperCase() + section.slice(1).replace("-", " ")}
            </a>
          ))}

          {status === "authenticated" ? (
            <button
              onClick={() => {
                signOut();
                closeMobileMenu();
              }}
              className="w-full mt-2 bg-slate-900 text-white px-4 py-2 rounded-md hover:bg-slate-800 transition-all"
            >
              Sign Out
            </button>
          ) : (
            <button
              onClick={() => {
                signIn("google");
                closeMobileMenu();
              }}
              className="w-full mt-2 flex items-center justify-center bg-white text-slate-900 border border-gray-300 px-4 py-2 rounded-md hover:bg-gray-100 hover:text-black transition-all"
            >
              <FaGoogle className="mr-2 text-lg" />
              Sign In with Google
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
