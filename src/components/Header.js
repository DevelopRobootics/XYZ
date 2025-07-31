"use client";
import { useState } from 'react';
import { FaSearch, FaBars, FaTimes } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link'; // Asegúrate de importar Link
const navItems = [
    { label: 'Inicio', path: '/' },
    { label: 'Quiénes Somos', path: '/quienes-somos' },
    { label: 'Servicios', path: '/servicios' },
    { label: 'Nuestros Proyectos', path: '/nuestros-proyectos' },
    { label: 'Contáctanos', path: '/contactanos' },
];

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="bg-[#313133] text-gray-200">
            <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
                {/* Logo */}
                <Link href="/">
                    <div className="flex-shrink-0 cursor-pointer">
                        <Image
                            src="/XYZ B logo.svg"
                            alt="XYZ logo B"
                            width={64}
                            height={64}
                            priority
                        />
                    </div>
                </Link>

                {/* Desktop nav */}
                <ul className="hidden md:flex gap-6 text-sm font-light">
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


                {/* Search + Mobile toggle */}
                <div className="flex md:hidden gap-4 items-center text-lg">
                    <button onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </nav>

            {/* Mobile nav */}
            {menuOpen && (
                <div className="md:hidden bg-[#313133] px-6 py-4 space-y-4 text-sm font-light border-t border-gray-700">
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
