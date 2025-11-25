import React from 'react';
import { MountainSnow, Facebook, Twitter, Instagram, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-stone-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="bg-emerald-600 p-1.5 rounded-lg">
                <MountainSnow className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white tracking-tight">Senderos</span>
            </Link>
            <p className="text-sm text-stone-400 leading-relaxed mb-6">
              Tu compañero definitivo para explorar el mundo natural. Encuentra rutas, comparte experiencias y conecta con la naturaleza.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-emerald-500 transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="hover:text-emerald-500 transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="hover:text-emerald-500 transition-colors"><Instagram className="w-5 h-5" /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Explorar</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/trails" className="hover:text-white transition-colors">Todas las rutas</Link></li>
              <li><Link to="/trails" className="hover:text-white transition-colors">Destinos populares</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Nuevas adiciones</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Guías locales</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Comunidad</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="#" className="hover:text-white transition-colors">Historias</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Eventos</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Foro</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Club de senderismo</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Suscríbete</h4>
            <p className="text-sm text-stone-400 mb-4">Recibe las mejores rutas y consejos en tu correo.</p>
            <form className="flex flex-col space-y-2">
              <input 
                type="email" 
                placeholder="tu@email.com" 
                className="bg-stone-800 border border-stone-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:border-emerald-500 text-sm"
              />
              <button 
                type="submit" 
                className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors text-sm font-medium"
              >
                Suscribirse
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-stone-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-stone-500">
          <p>&copy; {new Date().getFullYear()} Senderos. Todos los derechos reservados.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="#" className="hover:text-white transition-colors">Privacidad</Link>
            <Link to="#" className="hover:text-white transition-colors">Términos</Link>
            <Link to="#" className="hover:text-white transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;