import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import ProductCard from '../components/ProductCard';
import Button, { ButtonVariant } from '../components/Button';
import { MOCK_PRODUCTS, TESTIMONIALS } from '../constants';

const Home: React.FC = () => {
  // Get first 3 products for featured section
  const featuredProducts = MOCK_PRODUCTS.slice(0, 3);

  return (
    <div className="space-y-0">
      
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1493106641515-6b5631de4bb9?q=80&w=2866&auto=format&fit=crop" 
            alt="Artisan working clay" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30 mix-blend-multiply"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto text-white">
          <span className="block mb-4 text-sm md:text-base font-bold tracking-[0.2em] uppercase text-earth-100 animate-fade-in">
            Artesanía Genuina
          </span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight animate-slide-up">
            La belleza de lo <br/><span className="italic text-earth-200">imperfecto</span>
          </h1>
          <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto font-light text-gray-100 animate-slide-up delay-100">
            Piezas creadas a mano que cuentan historias. Materiales naturales, procesos lentos y diseño atemporal para tu hogar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up delay-200">
            <Link to="/shop">
              <Button className="w-full sm:w-auto px-8 py-4 text-base">
                Ver Colección
              </Button>
            </Link>
            <Link to="/about">
              <Button variant={ButtonVariant.OUTLINE} className="w-full sm:w-auto px-8 py-4 text-base border-white text-white hover:bg-white hover:text-earth-900">
                Nuestra Historia
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <SectionTitle title="Piezas Destacadas" subtitle="Nuestra Selección" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Link to="/shop">
            <Button variant={ButtonVariant.SECONDARY} icon={<ArrowRight size={18} />}>
              Ver Todo el Catálogo
            </Button>
          </Link>
        </div>
      </section>

      {/* About Teaser */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-[4/3] bg-gray-200 overflow-hidden rounded-sm">
                <img 
                  src="https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?q=80&w=2449&auto=format&fit=crop" 
                  alt="Hands crafting" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-earth-100 p-8 hidden md:block">
                <p className="font-serif text-3xl text-earth-800">"Crear es un acto<br/>de meditación."</p>
              </div>
            </div>
            <div className="lg:pl-10">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-earth-900 mb-6">
                Materiales Éticos, <br/>Procesos Lentos
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                En un mundo de producción masiva, apostamos por la pausa. Cada una de nuestras piezas es moldeada, tejida o tallada a mano por artesanos locales, utilizando materiales sostenibles de proximidad.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Creemos que los objetos que nos rodean deben tener alma. Las pequeñas irregularidades no son defectos, son la huella humana del creador.
              </p>
              <Link to="/about">
                <Button variant={ButtonVariant.OUTLINE}>Conoce a los Artesanos</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-earth-800 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <SectionTitle title="Lo que dicen" subtitle="Testimonios" center={true} />
           {/* Override title color for dark bg via explicit css or utility if needed, relying on inherited text-white for now generally works if title wasn't hardcoded color */}
           {/* Custom render for dark background title */}
           <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-12">
             Palabras de nuestros clientes
           </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="bg-white/10 backdrop-blur-sm p-8 rounded-sm border border-white/20">
                <div className="flex justify-center mb-4 text-earth-300">
                  <Star fill="currentColor" size={20} />
                  <Star fill="currentColor" size={20} />
                  <Star fill="currentColor" size={20} />
                  <Star fill="currentColor" size={20} />
                  <Star fill="currentColor" size={20} />
                </div>
                <p className="text-lg italic font-serif mb-6">"{t.text}"</p>
                <div>
                  <h4 className="font-bold text-earth-200">{t.name}</h4>
                  <span className="text-xs uppercase tracking-widest opacity-70">{t.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-serif font-bold text-earth-900 mb-4">Únete a nuestra comunidad</h2>
          <p className="text-gray-600 mb-8">Suscríbete para recibir novedades sobre nuevas colecciones, talleres y consejos de decoración.</p>
          <form className="flex flex-col sm:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Tu correo electrónico" 
              className="flex-grow px-4 py-3 border border-gray-300 focus:border-earth-500 focus:ring-1 focus:ring-earth-500 outline-none transition-colors"
            />
            <Button type="submit">Suscribirse</Button>
          </form>
        </div>
      </section>

    </div>
  );
};

export default Home;