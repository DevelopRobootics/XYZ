import React, { useState } from 'react';
import { Mail, MapPin, Phone, Clock } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';

const Contact: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('success');
    // Simulate API call
    setTimeout(() => setFormStatus('idle'), 3000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <SectionTitle title="Hablemos" subtitle="Contacto" center={true} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-10">
        
        {/* Contact Information */}
        <div className="bg-white p-8 md:p-12 shadow-sm border border-earth-100">
          <h3 className="text-2xl font-serif font-bold text-earth-900 mb-6">Información de Contacto</h3>
          <p className="text-gray-600 mb-8 leading-relaxed">
            ¿Tienes alguna pregunta sobre una pieza personalizada? ¿Quieres visitar nuestro taller? 
            Estamos aquí para escucharte.
          </p>

          <div className="space-y-6">
            <div className="flex items-start">
              <div className="bg-earth-100 p-3 rounded-full mr-4 text-earth-700">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="font-bold text-earth-900">Ubicación</h4>
                <p className="text-gray-600">Calle Artesanos 123<br/>Barrio Antiguo, Ciudad</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-earth-100 p-3 rounded-full mr-4 text-earth-700">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="font-bold text-earth-900">Email</h4>
                <p className="text-gray-600">hola@tierra-manos.com<br/>pedidos@tierra-manos.com</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-earth-100 p-3 rounded-full mr-4 text-earth-700">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="font-bold text-earth-900">Teléfono</h4>
                <p className="text-gray-600">+34 912 345 678</p>
              </div>
            </div>
            
             <div className="flex items-start">
              <div className="bg-earth-100 p-3 rounded-full mr-4 text-earth-700">
                <Clock size={24} />
              </div>
              <div>
                <h4 className="font-bold text-earth-900">Horario Taller</h4>
                <p className="text-gray-600">Lun - Vie: 10:00 - 19:00<br/>Sáb: 10:00 - 14:00</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 md:p-12 shadow-sm border border-earth-100">
             <h3 className="text-2xl font-serif font-bold text-earth-900 mb-6">Envíanos un Mensaje</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
                <input 
                  type="text" 
                  id="name" 
                  required
                  className="w-full px-4 py-2 border border-gray-300 focus:ring-earth-500 focus:border-earth-500 outline-none transition-colors bg-earth-50/30"
                />
              </div>
              <div>
                <label htmlFor="lastname" className="block text-sm font-medium text-gray-700 mb-1">Apellidos</label>
                <input 
                  type="text" 
                  id="lastname" 
                  required
                  className="w-full px-4 py-2 border border-gray-300 focus:ring-earth-500 focus:border-earth-500 outline-none transition-colors bg-earth-50/30"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input 
                type="email" 
                id="email" 
                required
                className="w-full px-4 py-2 border border-gray-300 focus:ring-earth-500 focus:border-earth-500 outline-none transition-colors bg-earth-50/30"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Asunto</label>
              <select 
                id="subject" 
                className="w-full px-4 py-2 border border-gray-300 focus:ring-earth-500 focus:border-earth-500 outline-none transition-colors bg-earth-50/30"
              >
                <option>Consulta General</option>
                <option>Pedido Personalizado</option>
                <option>Estado de mi pedido</option>
                <option>Prensa / Colaboración</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Mensaje</label>
              <textarea 
                id="message" 
                rows={5} 
                required
                className="w-full px-4 py-2 border border-gray-300 focus:ring-earth-500 focus:border-earth-500 outline-none transition-colors bg-earth-50/30"
              ></textarea>
            </div>

            <Button type="submit" fullWidth disabled={formStatus === 'success'}>
              {formStatus === 'success' ? 'Mensaje Enviado' : 'Enviar Mensaje'}
            </Button>
            
            {formStatus === 'success' && (
              <p className="text-green-600 text-center text-sm mt-2 animate-pulse">Gracias por contactarnos. Te responderemos pronto.</p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;