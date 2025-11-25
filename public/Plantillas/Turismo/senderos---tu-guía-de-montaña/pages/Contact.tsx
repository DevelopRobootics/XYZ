import React, { useState } from 'react';
import Button from '../components/Button';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => setSubmitted(true), 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-stone-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-stone-900 mb-4">Contáctanos</h1>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            ¿Tienes alguna pregunta sobre una ruta? ¿Quieres colaborar con nosotros? Estamos aquí para ayudarte en tu próxima aventura.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info Card */}
          <div className="bg-emerald-700 rounded-2xl p-8 text-white shadow-lg lg:col-span-1 h-fit">
            <h3 className="text-2xl font-semibold mb-6">Información</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <Mail className="w-6 h-6 mr-4 mt-1 opacity-80" />
                <div>
                  <p className="text-sm opacity-70 mb-1">Email</p>
                  <p className="font-medium">hola@senderos.com</p>
                  <p className="font-medium">soporte@senderos.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="w-6 h-6 mr-4 mt-1 opacity-80" />
                <div>
                  <p className="text-sm opacity-70 mb-1">Teléfono</p>
                  <p className="font-medium">+34 912 345 678</p>
                  <p className="text-xs opacity-60 mt-1">Lunes - Viernes, 9am - 6pm</p>
                </div>
              </div>

              <div className="flex items-start">
                <MapPin className="w-6 h-6 mr-4 mt-1 opacity-80" />
                <div>
                  <p className="text-sm opacity-70 mb-1">Oficina</p>
                  <p className="font-medium">Calle de la Montaña 42</p>
                  <p className="font-medium">28001, Madrid, España</p>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-white/20">
              <p className="text-sm opacity-80 italic">
                "El camino es la meta, pero si te pierdes, llámanos."
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-stone-200 lg:col-span-2">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-stone-700 mb-2">Nombre completo</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formState.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-stone-50 border border-stone-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all"
                      placeholder="Juan Pérez"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formState.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-stone-50 border border-stone-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all"
                      placeholder="juan@ejemplo.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-stone-700 mb-2">Asunto</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-stone-50 border border-stone-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all"
                  >
                    <option value="">Selecciona un motivo</option>
                    <option value="info">Información General</option>
                    <option value="routes">Sugerir nueva ruta</option>
                    <option value="support">Soporte Técnico</option>
                    <option value="business">Colaboración</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-stone-700 mb-2">Mensaje</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formState.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-stone-50 border border-stone-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all resize-none"
                    placeholder="Escribe tu mensaje aquí..."
                  ></textarea>
                </div>

                <div className="flex justify-end">
                  <Button type="submit" size="lg" className="flex items-center">
                    Enviar Mensaje <Send className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </form>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-center py-10 animate-fade-in">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-stone-900 mb-3">¡Mensaje Enviado!</h3>
                <p className="text-stone-600 mb-8 max-w-md">
                  Gracias por contactarnos. Hemos recibido tu mensaje y nuestro equipo te responderá en las próximas 24 horas.
                </p>
                <Button variant="outline" onClick={() => {setSubmitted(false); setFormState({name:'', email:'', subject:'', message:''})}}>
                  Enviar otro mensaje
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;