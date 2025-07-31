import { FaSearch } from 'react-icons/fa';
import Image from 'next/image';

const navItems = [
  'Inicio', 'Quiénes Somos', 'Nuestros Proyectos', 'Contáctanos'
];

export default function Header() {
  return (
    <header className="bg-[#313133] text-gray-200">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-8 h-13">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Image 
            src="/XYZ B logo.svg"
            alt='XYZ logo B'
            width={50}
            height={50}
            priority
          />
        </div>

        {/* Navigation links */}
        <ul className="hidden md:flex gap-6 text-sm font-light">
          {navItems.map((item, i) => (
            <li key={i} className="hover:text-white transition-colors cursor-pointer">
              {item}
            </li>
          ))}
        </ul>

        {/* Icons */}
        <div className="flex gap-4 items-center text-sm">
          <FaSearch className="hover:text-white cursor-pointer" />
        </div>
      </nav>
    </header>
  );
}