import React from 'react';
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone } from 'lucide-react';
import { APP_NAME } from '../constants';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-earth-100 border-t border-earth-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-xl font-serif font-bold text-earth-800 mb-4">{APP_NAME}</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Creando piezas únicas que conectan la tradición con el diseño moderno. Hecho a mano, con alma y propósito.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-earth-600 hover:text-earth-800 transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-earth-600 hover:text-earth-800 transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-earth-600 hover:text-earth-800 transition-colors"><Twitter size={20} /></a>
            </div>
          </div>

          {/* Links Column */}
          <div>
            <h4 className="font-serif font-bold text-earth-900 mb-4">Explorar</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link to="/shop" className="hover:text-earth-700 transition-colors">Tienda</Link></li>
              <li><Link to="/about" className="hover:text-earth-700 transition-colors">Nuestra Historia</Link></li>
              <li><Link to="/contact" className="hover:text-earth-700 transition-colors">Contacto</Link></li>
              <li><a href="#" className="hover:text-earth-700 transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h4 className="font-serif font-bold text-earth-900 mb-4">Ayuda</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-earth-700 transition-colors">Envíos y Devoluciones</a></li>
              <li><a href="#" className="hover:text-earth-700 transition-colors">Cuidado de Piezas</a></li>
              <li><a href="#" className="hover:text-earth-700 transition-colors">Términos y Condiciones</a></li>
              <li><a href="#" className="hover:text-earth-700 transition-colors">Política de Privacidad</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif font-bold text-earth-900 mb-4">Visítanos</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex items-start">
                <MapPin size={16} className="mt-1 mr-2 text-earth-600" />
                <span>Calle Artesanos 123,<br/>Barrio Antiguo, Ciudad</span>
              </li>
              <li className="flex items-center">
                <Phone size={16} className="mr-2 text-earth-600" />
                <span>+34 912 345 678</span>
              </li>
              <li className="flex items-center">
                <Mail size={16} className="mr-2 text-earth-600" />
                <span>hola@tierra-manos.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-earth-200 text-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} {APP_NAME}. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;