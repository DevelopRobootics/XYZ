import React from 'react';
import { Users, Camera, MessageSquare } from 'lucide-react';
import Button from '../components/Button';

const Community: React.FC = () => {
  return (
    <div className="min-h-screen bg-stone-50 py-16">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <Users className="w-20 h-20 text-emerald-600 mx-auto mb-6" />
        <h1 className="text-4xl font-bold text-stone-900 mb-6">Comunidad Senderos</h1>
        <p className="text-xl text-stone-600 mb-12">
          Conecta con miles de senderistas, comparte tus fotos y descubre grupos locales.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 text-left">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center mb-4">
               <Camera className="w-6 h-6 text-emerald-600 mr-3" />
               <h3 className="font-bold text-lg">Galería de Fotos</h3>
            </div>
            <p className="text-stone-600 mb-4">Sube tus mejores capturas de la cima y participa en concursos mensuales.</p>
            <div className="h-32 bg-stone-100 rounded-lg flex items-center justify-center text-stone-400">
               Grid de fotos simulado
            </div>
          </div>

           <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center mb-4">
               <MessageSquare className="w-6 h-6 text-emerald-600 mr-3" />
               <h3 className="font-bold text-lg">Foro de Discusión</h3>
            </div>
            <p className="text-stone-600 mb-4">Pregunta sobre equipamiento, estado de rutas o encuentra compañeros de viaje.</p>
            <div className="space-y-3">
               <div className="h-2 bg-stone-100 rounded w-3/4"></div>
               <div className="h-2 bg-stone-100 rounded w-full"></div>
               <div className="h-2 bg-stone-100 rounded w-5/6"></div>
            </div>
          </div>
        </div>

        <Button size="lg">Únete a la Comunidad</Button>
      </div>
    </div>
  );
};

export default Community;