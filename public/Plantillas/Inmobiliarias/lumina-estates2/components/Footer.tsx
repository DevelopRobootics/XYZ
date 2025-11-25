import React from 'react';
import { Home, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 text-white mb-4">
              <Home size={24} className="text-primary-500" />
              <span className="font-serif font-bold text-2xl">Lumina Estates</span>
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              Redefiniendo la experiencia inmobiliaria con tecnología, transparencia y un servicio de primera clase. Encuentra tu lugar en el mundo.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="hover:text-primary-400 transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-primary-400 transition-colors"><Twitter size={20} /></a>
              <a href="#" className="hover:text-primary-400 transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-primary-400 transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 font-serif">Explorar</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-primary-400 transition-colors">Propiedades en Venta</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Alquileres de Lujo</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Nuevos Desarrollos</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Vende tu Propiedad</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Agentes</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 font-serif">Compañía</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-primary-400 transition-colors">Sobre Nosotros</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Carreras</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Política de Privacidad</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Términos de Servicio</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 font-serif">Contacto</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start">
                <MapPin size={18} className="mr-3 text-primary-500 mt-0.5" />
                <span>Av. de la Libertad 42, Piso 8<br />28046 Madrid, España</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-3 text-primary-500" />
                <span>+34 912 345 678</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-3 text-primary-500" />
                <span>contacto@luminaestates.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Lumina Estates. Todos los derechos reservados.</p>
          <div className="mt-4 md:mt-0">
             Diseñado con precisión y elegancia.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;