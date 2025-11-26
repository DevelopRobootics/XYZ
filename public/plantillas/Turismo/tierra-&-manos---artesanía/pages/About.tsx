import React from 'react';
import SectionTitle from '../components/SectionTitle';

const About: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <SectionTitle title="Nuestra Esencia" subtitle="Sobre Nosotros" center={true} />
        <p className="text-xl text-earth-700 font-serif italic">
          "Recuperando el valor del tiempo y la belleza de lo hecho a mano."
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20 items-center">
        <div>
          <img 
            src="https://images.unsplash.com/photo-1505567745926-ba89000d255a?q=80&w=2942&auto=format&fit=crop" 
            alt="Ceramic workshop" 
            className="w-full h-auto rounded-sm shadow-xl"
          />
        </div>
        <div className="space-y-6">
          <h3 className="text-2xl font-serif font-bold text-earth-900">El Taller</h3>
          <p className="text-gray-600 leading-relaxed">
            Fundado en 2024, Tierra & Manos nació de un deseo profundo de desconectar de lo digital y reconectar con lo tangible. Nuestro taller está situado en una antigua masía restaurada, rodeada de olivos y tierra arcillosa.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Aquí, el tiempo se mide en ciclos de secado y cocción, no en horas. Respetamos los ritmos naturales de los materiales, permitiendo que la madera, la arcilla y las fibras guíen el diseño final.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20 items-center md:flex-row-reverse">
        <div className="order-1 md:order-2">
           <img 
            src="https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=2940&auto=format&fit=crop" 
            alt="Artisan hands" 
            className="w-full h-auto rounded-sm shadow-xl"
          />
        </div>
        <div className="space-y-6 order-2 md:order-1">
          <h3 className="text-2xl font-serif font-bold text-earth-900">Sostenibilidad Real</h3>
          <p className="text-gray-600 leading-relaxed">
            No concebimos la belleza sin responsabilidad. Trabajamos exclusivamente con:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
            <li>Arcillas extraídas localmente para minimizar la huella de carbono.</li>
            <li>Maderas certificadas de poda o recuperadas.</li>
            <li>Tintes naturales derivados de plantas y minerales.</li>
            <li>Embalajes 100% libres de plástico y compostables.</li>
          </ul>
        </div>
      </div>

      {/* Team Grid */}
      <div className="mt-20">
        <h3 className="text-2xl font-serif font-bold text-earth-900 text-center mb-10">Manos Maestras</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
             <div key={i} className="text-center group">
                <div className="aspect-[3/4] overflow-hidden mb-4 relative">
                  <img 
                    src={`https://picsum.photos/400/500?random=${i+20}`} 
                    alt="Artisan" 
                    className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <h4 className="font-serif font-bold text-lg">Elena {['Ruiz', 'Marco', 'Sanz'][i-1]}</h4>
                <p className="text-xs text-earth-600 uppercase tracking-widest">{['Ceramista', 'Ebanista', 'Tejedora'][i-1]}</p>
             </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;