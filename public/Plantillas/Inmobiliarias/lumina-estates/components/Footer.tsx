import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4 tracking-tight">Lumina<span className="text-primary-500">Estates</span></h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Reimaginando la experiencia inmobiliaria. Conectamos personas con sus hogares ideales a través de tecnología, confianza y servicio premium.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Explorar</h4>
            <ul className="space-y-3">
              <li><Link to="/properties" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">Propiedades en Venta</Link></li>
              <li><Link to="/properties" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">Alquileres</Link></li>
              <li><Link to="/agents" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">Nuestros Agentes</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">Vende tu Propiedad</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contacto</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin size={18} className="text-primary-500 mt-0.5" />
                <span>Calle Serrano 45, 4º Planta<br />28001 Madrid, España</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Phone size={18} className="text-primary-500" />
                <span>+34 912 345 678</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Mail size={18} className="text-primary-500" />
                <span>hola@luminaestates.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Newsletter</h4>
            <p className="text-gray-400 text-sm mb-4">Recibe las últimas propiedades y noticias del mercado.</p>
            <form className="flex flex-col gap-2">
              <input 
                type="email" 
                placeholder="Tu email" 
                className="bg-gray-800 border border-gray-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:border-primary-500 text-sm"
              />
              <button className="bg-primary-600 hover:bg-primary-500 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors">
                Suscribirse
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">© 2024 Lumina Estates. Todos los derechos reservados.</p>
          <div className="flex gap-6 text-gray-500 text-sm">
            <a href="#" className="hover:text-white">Privacidad</a>
            <a href="#" className="hover:text-white">Términos</a>
            <a href="#" className="hover:text-white">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
