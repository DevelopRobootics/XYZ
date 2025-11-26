import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-secondary-900 mb-4">Hablemos</h1>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            ¿Tienes una propiedad para vender o buscas tu próximo hogar? Estamos aquí para ayudarte en cada paso.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Info Side */}
          <div className="bg-secondary-900 text-white rounded-2xl p-10 relative overflow-hidden flex flex-col justify-between h-full">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
            
            <div>
              <h3 className="text-2xl font-bold mb-8">Información de Contacto</h3>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-lg">
                    <Phone className="text-primary-400" size={24} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Llámanos</p>
                    <p className="text-xl font-semibold">+34 912 345 678</p>
                    <p className="text-sm text-gray-500 mt-1">Lun-Vie de 9am a 8pm</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-lg">
                    <Mail className="text-primary-400" size={24} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Escríbenos</p>
                    <p className="text-xl font-semibold">hola@luminaestates.com</p>
                    <p className="text-sm text-gray-500 mt-1">Respondemos en menos de 24h</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-lg">
                    <MapPin className="text-primary-400" size={24} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Visítanos</p>
                    <p className="text-xl font-semibold">Calle Serrano 45</p>
                    <p className="text-sm text-gray-500 mt-1">28001 Madrid, España</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <div className="flex gap-4">
                 {/* Fake Social Icons */}
                 <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary-600 transition-colors cursor-pointer">FB</div>
                 <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary-600 transition-colors cursor-pointer">IN</div>
                 <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary-600 transition-colors cursor-pointer">TW</div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-10">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Envíanos un mensaje</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Nombre</label>
                  <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-primary-500 focus:bg-white transition-colors" placeholder="Juan Pérez" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Apellido</label>
                  <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-primary-500 focus:bg-white transition-colors" placeholder="García" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                <input type="email" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-primary-500 focus:bg-white transition-colors" placeholder="juan@ejemplo.com" />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Asunto</label>
                <select className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-primary-500 focus:bg-white transition-colors">
                   <option>Quiero comprar una propiedad</option>
                   <option>Quiero vender mi propiedad</option>
                   <option>Información general</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Mensaje</label>
                <textarea rows={4} className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-primary-500 focus:bg-white transition-colors" placeholder="Escribe tu mensaje aquí..."></textarea>
              </div>

              <button className="w-full bg-primary-600 hover:bg-primary-700 text-white font-bold py-4 rounded-lg shadow-lg shadow-primary-600/20 transition-all flex items-center justify-center gap-2">
                <Send size={20} /> Enviar Mensaje
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
