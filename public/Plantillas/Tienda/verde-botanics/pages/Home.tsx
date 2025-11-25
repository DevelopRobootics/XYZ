import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';
import { ProductCard } from '../components/ProductCard';
import { Product } from '../types';

interface HomeProps {
  featuredProducts: Product[];
  onAddToCart: (product: Product) => void;
}

export const Home: React.FC<HomeProps> = ({ featuredProducts, onAddToCart }) => {
  return (
    <div className="animate-fade-in w-full">
      
      {/* Hero Split Screen */}
      <section className="grid grid-cols-1 lg:grid-cols-2 min-h-[calc(100vh-64px)] lg:h-screen border-b border-stone-900">
        {/* Left: Typography */}
        <div className="flex flex-col justify-center px-8 md:px-16 py-20 lg:py-0 bg-[#f4f4f0]">
          <span className="block text-xs uppercase tracking-[0.4em] mb-6 text-stone-500 animate-slide-up">Est. 2025</span>
          <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl leading-[0.9] mb-8 text-stone-900 animate-slide-up">
            Vida <br/>
            <span className="italic font-light ml-12">Interior</span>
          </h1>
          <p className="max-w-md text-stone-600 mb-12 text-lg font-light leading-relaxed border-l border-stone-900 pl-6">
            Curaduría botánica para espacios modernos. 
            Plantas que respiran diseño y transforman arquitecturas vacías en hogares vivos.
          </p>
          <div className="flex gap-6 items-center">
            <Link to="/shop" className="group relative inline-flex items-center justify-center px-8 py-4 bg-stone-900 text-white overflow-hidden transition-all hover:bg-stone-800">
              <span className="relative z-10 font-bold uppercase tracking-widest text-sm">Ver Colección</span>
            </Link>
            <Link to="/shop" className="font-serif italic text-xl hover:underline decoration-1 underline-offset-4">
              Explorar
            </Link>
          </div>
        </div>

        {/* Right: Image */}
        <div className="relative border-l-0 lg:border-l border-stone-900 h-[50vh] lg:h-auto overflow-hidden group">
          <img 
            src="https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&q=80&w=1000" 
            alt="Interior Minimalista" 
            className="w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-110 filter grayscale-[30%] group-hover:grayscale-0"
          />
          <div className="absolute bottom-0 left-0 bg-white border-t border-r border-stone-900 p-6">
            <p className="font-serif text-2xl italic">Monstera Deliciosa</p>
            <p className="text-xs uppercase tracking-widest mt-1">Edición Limitada</p>
          </div>
        </div>
      </section>

      {/* Marquee Banner */}
      <div className="border-b border-stone-900 bg-stone-900 text-[#f4f4f0] overflow-hidden py-4 whitespace-nowrap">
        <div className="inline-flex animate-marquee items-center gap-8">
          {[...Array(10)].map((_, i) => (
            <React.Fragment key={i}>
              <span className="text-2xl font-serif italic">Diseño Vivo</span>
              <span className="w-2 h-2 bg-[#f4f4f0] rounded-full"></span>
              <span className="text-sm uppercase tracking-widest">Envíos a todo el país</span>
              <span className="w-2 h-2 bg-[#f4f4f0] rounded-full"></span>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Editorial Grid */}
      <section className="py-24 px-4 md:px-12 bg-white border-b border-stone-900">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 border-b border-stone-200 pb-8">
          <h2 className="font-serif text-5xl md:text-6xl max-w-xl leading-none">
            Objetos de <br/> Deseo
          </h2>
          <Link to="/shop" className="flex items-center gap-4 group">
            <span className="uppercase tracking-widest text-xs font-bold group-hover:underline">Ver Catálogo Completo</span>
            <div className="w-8 h-8 border border-stone-900 flex items-center justify-center group-hover:bg-stone-900 group-hover:text-white transition-colors">
              <ArrowRight className="w-4 h-4" />
            </div>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-stone-200 border border-stone-200">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
          ))}
        </div>
      </section>

      {/* Feature / Manifesto */}
      <section className="grid grid-cols-1 md:grid-cols-2 border-b border-stone-900">
        <div className="p-12 md:p-24 bg-[#2f4f4f] text-[#f4f4f0] flex flex-col justify-between min-h-[500px]">
          <Star className="w-12 h-12 text-stone-300 opacity-50" />
          <div>
            <h3 className="font-serif text-4xl md:text-5xl mb-8 leading-tight">
              "No vendemos plantas.<br/>Vendemos atmósfera."
            </h3>
            <p className="font-sans text-stone-300 max-w-md leading-relaxed">
              Cada espécimen es seleccionado por su estructura, salud y potencial estético. 
              Entendemos que una planta es la escultura viva de tu hogar.
            </p>
          </div>
        </div>
        <div className="bg-[#e7e5e4] p-12 md:p-24 flex items-center justify-center border-t md:border-t-0 border-stone-900">
           <div className="border border-stone-900 p-8 max-w-sm w-full bg-[#f4f4f0] relative shadow-[10px_10px_0px_0px_rgba(28,25,23,1)]">
              <div className="text-center space-y-6">
                 <h4 className="uppercase tracking-[0.2em] font-bold text-sm">Verde AI</h4>
                 <div className="w-full h-px bg-stone-300"></div>
                 <p className="font-serif text-2xl">¿No tienes mano para las plantas?</p>
                 <p className="text-sm text-stone-500">Nuestro asistente de IA te guiará en cada hoja amarilla y cada nuevo brote.</p>
                 <button className="w-full py-3 bg-stone-900 text-white uppercase text-xs font-bold hover:bg-stone-700 transition-colors">
                   Consultar Experto
                 </button>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
};