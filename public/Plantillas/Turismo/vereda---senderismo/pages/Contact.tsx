import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, ArrowRight } from 'lucide-react';
import { Button } from '../components/Button';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'success'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    }, 1000);
  };

  return (
    <div className="min-h-screen py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Info Side - Dark Card */}
          <div className="bg-pine-900 rounded-[2.5rem] p-10 text-white flex flex-col justify-between relative overflow-hidden">
             <div className="relative z-10">
                <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Hablemos.</h1>
                <p className="text-pine-200 text-lg leading-relaxed mb-12 max-w-md">
                    ¿Tienes una ruta que deberíamos conocer? ¿Problemas con la app? ¿O solo quieres saludar?
                </p>

                <div className="space-y-8">
                    <div className="flex items-start space-x-4 group cursor-pointer">
                        <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center group-hover:bg-citrus-400 group-hover:text-pine-900 transition-colors">
                            <MapPin className="h-6 w-6" />
                        </div>
                        <div>
                            <h3 className="font-bold text-lg">Oficina Central</h3>
                            <p className="text-pine-300">Av. Montaña 8844, Piso 3<br/>Patagonia, Chile</p>
                        </div>
                    </div>

                    <div className="flex items-start space-x-4 group cursor-pointer">
                        <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center group-hover:bg-citrus-400 group-hover:text-pine-900 transition-colors">
                            <Mail className="h-6 w-6" />
                        </div>
                        <div>
                            <h3 className="font-bold text-lg">Escríbenos</h3>
                            <p className="text-pine-300">hola@vereda.app</p>
                        </div>
                    </div>
                </div>
             </div>

             <div className="mt-12 relative z-10">
                <div className="p-6 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-sm">
                    <h4 className="font-bold mb-2">Para guías profesionales</h4>
                    <p className="text-sm text-pine-300 mb-4">Únete a nuestra red de expertos certificados.</p>
                    <button className="flex items-center text-sm font-bold text-citrus-400 hover:text-citrus-300 transition-colors">
                        Aplicar <ArrowRight className="ml-2 w-4 h-4" />
                    </button>
                </div>
             </div>

             {/* Decoration */}
             <div className="absolute top-0 right-0 w-96 h-96 bg-pine-800 rounded-full blur-3xl opacity-50 -mr-20 -mt-20"></div>
             <div className="absolute bottom-0 left-0 w-64 h-64 bg-citrus-900 rounded-full blur-3xl opacity-50 mix-blend-color-dodge -ml-10 -mb-10"></div>
          </div>

          {/* Form Side - Light Card */}
          <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl shadow-pine-900/5 border border-sand-200">
            {status === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center">
                <div className="w-20 h-20 bg-citrus-100 rounded-full flex items-center justify-center text-citrus-600 mb-6 animate-bounce">
                  <Send className="h-8 w-8" />
                </div>
                <h3 className="text-3xl font-bold text-pine-900 font-display mb-2">¡Recibido!</h3>
                <p className="text-pine-600">Nos pondremos las botas y te responderemos pronto.</p>
                <Button variant="outline" className="mt-8" onClick={() => setStatus('idle')}>Enviar otro</Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-pine-900 mb-2 ml-2">Nombre</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="block w-full px-6 py-4 bg-sand-50 border-0 rounded-2xl focus:ring-2 focus:ring-citrus-400 transition-all placeholder-pine-300 text-pine-900"
                    placeholder="Tu nombre completo"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-pine-900 mb-2 ml-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="block w-full px-6 py-4 bg-sand-50 border-0 rounded-2xl focus:ring-2 focus:ring-citrus-400 transition-all placeholder-pine-300 text-pine-900"
                    placeholder="hola@ejemplo.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-bold text-pine-900 mb-2 ml-2">Tema</label>
                  <div className="relative">
                    <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="block w-full px-6 py-4 bg-sand-50 border-0 rounded-2xl focus:ring-2 focus:ring-citrus-400 transition-all appearance-none text-pine-900 cursor-pointer"
                    >
                        <option value="">Selecciona un motivo</option>
                        <option value="general">Consulta General</option>
                        <option value="support">Ayuda con la App</option>
                        <option value="colab">Colaboraciones</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-6 pointer-events-none text-pine-500">
                        <ArrowRight className="h-4 w-4 rotate-90" />
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-pine-900 mb-2 ml-2">Mensaje</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="block w-full px-6 py-4 bg-sand-50 border-0 rounded-2xl focus:ring-2 focus:ring-citrus-400 transition-all placeholder-pine-300 text-pine-900 resize-none"
                    placeholder="Cuéntanos más..."
                  />
                </div>

                <Button type="submit" className="w-full text-lg" size="lg" variant="primary">
                  Enviar Mensaje
                </Button>
              </form>
            )}
          </div>
      </div>
    </div>
  );
};