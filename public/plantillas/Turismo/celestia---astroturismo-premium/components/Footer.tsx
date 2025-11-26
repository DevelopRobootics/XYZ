import React from 'react';
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-space-950 border-t border-space-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-2xl font-display font-bold text-white mb-4">Celestia</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Acercando el universo a tus ojos. Somos líderes en turismo astronómico sostenible y educativo.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-space-accent transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-space-accent transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-space-accent transition-colors"><Facebook size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Explora</h4>
            <ul className="space-y-3">
              <li><Link to="/tours" className="text-slate-400 hover:text-space-accent text-sm transition-colors">Destinos</Link></li>
              <li><Link to="/guide" className="text-slate-400 hover:text-space-accent text-sm transition-colors">Guía IA</Link></li>
              <li><Link to="/about" className="text-slate-400 hover:text-space-accent text-sm transition-colors">Sobre Nosotros</Link></li>
              <li><Link to="/blog" className="text-slate-400 hover:text-space-accent text-sm transition-colors">Blog Astronómico</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Legal</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-400 hover:text-space-accent text-sm transition-colors">Términos y Condiciones</a></li>
              <li><a href="#" className="text-slate-400 hover:text-space-accent text-sm transition-colors">Política de Privacidad</a></li>
              <li><a href="#" className="text-slate-400 hover:text-space-accent text-sm transition-colors">Política de Cancelación</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Contacto</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-space-accent mr-3 mt-0.5" />
                <span className="text-slate-400 text-sm">Av. Las Estrellas 42, Valle de la Luna, Chile</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-space-accent mr-3" />
                <span className="text-slate-400 text-sm">+56 9 1234 5678</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-space-accent mr-3" />
                <span className="text-slate-400 text-sm">contacto@celestia.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-space-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-500 text-xs">
            © {new Date().getFullYear()} Celestia Astrotourism. Todos los derechos reservados.
          </p>
          <div className="mt-4 md:mt-0">
            <p className="text-slate-600 text-xs">Designed for Stargazers</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;