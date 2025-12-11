"use client";
import { useEffect, useState } from "react";
import Banner from "@/components/banners/banner";

const navItems = [
  "Servicios",
  "Nuestros proyectos",
  "Plantillas",
  "Quienes somos",
  "Contacto",
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const headerStyle = isScrolled
    ? "bg-white/90 backdrop-blur-sm"
    : "bg-white backdrop-blur-sm";

  return (
    <>
      <header
        className={`sticky top-0 inset-x-0 text-gray-900 z-50 transition-colors duration-300 ${headerStyle}`}
      >
        <nav className="max-w-6xl mx-auto flex items-center justify-center px-4 py-3">
          <ul className="flex flex-wrap items-center justify-center gap-6 text-base font-semibold tracking-tight">
            {navItems.map((label, i) => (
              <li
                key={i}
                className="px-3 py-1 rounded-full text-gray-800 hover:text-black transition"
              >
                <span>{label}</span>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex justify-center pb-3">
          <span className="inline-block bg-amber-50 text-amber-800 text-xs font-medium px-3 py-2 rounded shadow-sm border border-amber-100">
            Zona de navegación en construcción.
          </span>
        </div>
        <Banner />
      </header>
    </>
  );
}
