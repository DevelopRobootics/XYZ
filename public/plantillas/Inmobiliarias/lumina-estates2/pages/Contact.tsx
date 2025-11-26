import React from 'react';
import { Mail, MapPin, Phone, Clock } from 'lucide-react';
import Button from '../components/Button';

const Contact: React.FC = () => {
  return (
    <div className="pt-24 pb-20 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-4">Hablemos de tu Futuro</h1>
          <p className="text-slate-600 max-w-2xl mx-auto">Estamos aquí para responder tus dudas, agendar visitas o ayudarte a listar tu propiedad.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white rounded-3xl shadow-xl overflow-hidden">
          
          {/* Info Side */}
          <div className="bg-slate-900 p-10 text-white flex flex-col justify-between relative overflow-hidden">
            {/* Decorative circles */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -mr-16 -mt-16"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -ml-16 -mb-16"></div>

            <div className="relative z-10">
              <h3 className="text-2xl font-serif font-bold mb-8">Información de Contacto</h3>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="bg-white/10 p-3 rounded-lg mr-4">
                    <Phone size={24} className="text-primary-400" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 mb-1">Llámanos</p>
                    <p className="text-lg font-medium">+34 912 345 678</p>
                    <p className="text-sm text-slate-400">Lunes a Viernes, 9am - 8pm</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-white/10 p-3 rounded-lg mr-4">
                    <Mail size={24} className="text-primary-400" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 mb-1">Escríbenos</p>
                    <p className="text-lg font-medium">contacto@luminaestates.com</p>
                    <p className="text-sm text-slate-400">Respondemos en menos de 24h</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-white/10 p-3 rounded-lg mr-4">
                    <MapPin size={24} className="text-primary-400" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 mb-1">Visítanos</p>
                    <p className="text-lg font-medium">Av. de la Libertad 42, Piso 8</p>
                    <p className="text-sm text-slate-400">28046 Madrid, España</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative z-10 mt-12">
               <div className="flex items-center gap-2 text-slate-400 text-sm">
                  <Clock size={16} />
                  <span>Horario: Lun-Vie 09:00 - 20:00 | Sab 10:00 - 14:00</span>
               </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="p-10 lg:p-12">
            <h3 className="text-2xl font-serif font-bold text-gray-900 mb-6">Envíanos un Mensaje</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nombre</label>
                  <input type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:bg-white transition" placeholder="Tu nombre" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Apellido</label>
                  <input type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:bg-white transition" placeholder="Tu apellido" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input type="email" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:bg-white transition" placeholder="tu@email.com" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Asunto</label>
                <select className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:bg-white transition text-gray-600">
                  <option>Información sobre propiedad</option>
                  <option>Quiero vender mi propiedad</option>
                  <option>Agendar visita</option>
                  <option>Otro</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Mensaje</label>
                <textarea rows={4} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:bg-white transition" placeholder="¿Cómo podemos ayudarte?"></textarea>
              </div>

              <Button size="lg" className="w-full">Enviar Mensaje</Button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;