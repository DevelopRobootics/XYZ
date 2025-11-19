"use client";
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

const navItems = [
    { label: 'Inicio', path: '/' },
    { label: 'Quiénes Somos', path: '/quienes-somos' },
    { label: 'Servicios', path: '/servicios' },
    { label: 'Nuestros Proyectos', path: '/nuestros-proyectos' },
    { label: 'Contáctanos', path: '/contacto' },
];

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 bg-black/80 text-gray-200 shadow-md z-50">
            <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 py-2">
                {/* Logo */}
                <Link href="/">
                    <div className="flex-shrink-0 cursor-pointer">
                        <Image
                            src="/XYZ B logo.svg"
                            alt="XYZ logo B"
                            width={48}
                            height={48}
                            priority
                        />
                    </div>
                </Link>

                {/* Desktop nav */}
                <ul className="hidden md:flex gap-4 text-sm font-light">
                    {navItems.map((item, i) => (
                        <li key={i}>
                            <Link href={item.path}>
                                <span className="hover:text-white cursor-pointer hover:bg-gray-600 px-2 py-1 rounded transition">
                                    {item.label}
                                </span>
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Mobile toggle */}
                <div className="flex md:hidden gap-4 items-center text-lg">
                    <button onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </nav>

            {/* Mobile nav */}
            {menuOpen && (
                <div className="md:hidden bg-[#313133] px-4 py-3 space-y-3 text-sm font-light border-t border-gray-700">
                    {navItems.map((item, i) => (
                        <Link key={i} href={item.path}>
                            <span className="block hover:text-white cursor-pointer hover:bg-gray-600 px-2 py-1 rounded transition">
                                {item.label}
                            </span>
                        </Link>
                    ))}
                </div>
            )}
        </header>
    );
}
