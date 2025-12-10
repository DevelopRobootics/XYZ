"use client";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Banner from "@/components/banners/banner";

const navItems = []; // top navigation hidden

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <header className="sticky top-0 bg-black/80 text-gray-200 shadow-md z-50">
        <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 py-1 md:py-2">
          {/* Logo */}
          <Link href="/">
            <div className="flex-shrink-0 cursor-pointer">
              <Image
                src="/XYZ B logo.svg"
                alt="XYZ logo B"
                width={40}
                height={40}
                priority
              />
            </div>
          </Link>

          {/* Desktop nav */}
          {navItems.length > 0 && (
            <ul className="hidden md:flex gap-4 text-sm font-light">
              {navItems.map((item, i) => (
                <li key={i}>
                  <Link href={item.path}>
                    <span
                      className={`cursor-pointer px-2 py-1 rounded transition ${
                        pathname === item.path
                          ? "bg-indigo-600 text-white"
                          : "hover:text-white hover:bg-gray-600"
                      }`}
                    >
                      {item.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          )}

          {/* Mobile toggle */}
          {navItems.length > 0 && (
            <div className="flex md:hidden gap-4 items-center text-lg">
              <button onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? <FaTimes /> : <FaBars />}
              </button>
            </div>
          )}
        </nav>
        {/* Mobile nav con animacion suave */}
        {navItems.length > 0 && (
          <div
            className={`md:hidden bg-[#313133] px-4 py-2 space-y-2 text-sm font-light border-t border-gray-700 overflow-hidden transition-all duration-300 ease-in-out ${
              menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            {navItems.map((item, i) => (
              <Link key={i} href={item.path}>
                <span
                  className={`block cursor-pointer px-2 py-1 rounded transition ${
                    pathname === item.path
                      ? "bg-indigo-600 text-white"
                      : "hover:text-white hover:bg-gray-600"
                  }`}
                >
                  {item.label}
                </span>
              </Link>
            ))}
          </div>
        )}
        <Banner />
      </header>
    </>
  );
}
