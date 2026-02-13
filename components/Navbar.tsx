"use client";

import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <nav className="fixed w-full bg-black/70 backdrop-blur-md border-b border-gray-800 z-50">
      <div className="max-w-7xl mx-auto px-6 md:px-20 py-4 flex justify-between items-center">
        <Link
          href="/"
          className="text-xl font-bold text-cyan-400"
        >
          PORTAFOLIO PROFESIONAL
        </Link>

        <ThemeToggle />
      </div>
    </nav>
  );
}
