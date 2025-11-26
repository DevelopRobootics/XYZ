import React, { useState } from 'react';
import Layout from '../components/Layout';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { TOURS } from '../constants';

const Booking: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    tour: TOURS[0].id,
    date: '',
    guests: 1,
    requests: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setSubmitted(true);
    }, 1000);
  };

  if (submitted) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center bg-space-950 px-4">
          <Card className="max-w-md w-full p-8 text-center border-green-500/30">
            <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">¡Reserva Recibida!</h2>
            <p className="text-slate-400 mb-6">Hemos enviado un correo de confirmación a {formData.email}. Prepárate para tocar las estrellas.</p>
            <Button onClick={() => setSubmitted(false)}>Hacer otra reserva</Button>
          </Card>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="min-h-screen pt-28 pb-20 px-4 bg-space-950">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">Reserva tu Experiencia</h1>
            <p className="text-slate-400">Completa el formulario para asegurar tu lugar bajo el cielo.</p>
          </div>

          <Card className="p-8 bg-space-900 border-space-800">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Nombre Completo</label>
                  <input
                    required
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-space-950 border border-space-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all"
                    placeholder="Juan Pérez"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Email</label>
                  <input
                    required
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-space-950 border border-space-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all"
                    placeholder="juan@ejemplo.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Selecciona el Tour</label>
                  <select
                    name="tour"
                    value={formData.tour}
                    onChange={handleChange}
                    className="w-full bg-space-950 border border-space-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all appearance-none"
                  >
                    {TOURS.map(t => (
                      <option key={t.id} value={t.id}>{t.title} - ${t.price}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Fecha Preferida</label>
                  <input
                    required
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full bg-space-950 border border-space-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all [color-scheme:dark]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Número de Personas</label>
                <input
                  required
                  type="number"
                  min="1"
                  max="10"
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  className="w-full bg-space-950 border border-space-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Requerimientos Especiales</label>
                <textarea
                  name="requests"
                  value={formData.requests}
                  onChange={handleChange}
                  rows={4}
                  className="w-full bg-space-950 border border-space-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Dietas, movilidad reducida, celebración especial..."
                ></textarea>
              </div>

              <div className="pt-4">
                <Button type="submit" size="lg" className="w-full">
                  Confirmar Reserva
                </Button>
                <p className="text-center text-xs text-slate-500 mt-4">
                  No se realizará ningún cargo hasta confirmar disponibilidad.
                </p>
              </div>
            </form>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Booking;