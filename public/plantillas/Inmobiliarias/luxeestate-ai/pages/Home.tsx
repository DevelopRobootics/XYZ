import React from 'react';
import { Link } from 'react-router-dom';
import { Search, ArrowRight, Shield, Award, Users } from 'lucide-react';
import { PROPERTIES } from '../constants';
import PropertyCard from '../components/PropertyCard';

const Home: React.FC = () => {
  const featuredProperties = PROPERTIES.slice(0, 3);

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <div className="relative h-[600px] md:h-[700px] flex items-center justify-center">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url("https://picsum.photos/id/1040/1920/1080")' }}
        >
          <div className="absolute inset-0 bg-brand-900/40"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight drop-shadow-lg">
            Find Your Sanctuary.
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            Discover a curated collection of the world's most extraordinary homes. 
            Luxury living redefined for the modern era.
          </p>
          
          {/* Search Box */}
          <div className="bg-white p-2 rounded-full shadow-2xl max-w-3xl mx-auto flex items-center transform -translate-y-2">
            <div className="flex-grow px-6">
              <input 
                type="text" 
                placeholder="Search by city, neighborhood, or address..." 
                className="w-full h-12 text-gray-700 placeholder-gray-400 focus:outline-none bg-transparent"
              />
            </div>
            <Link to="/properties" className="bg-brand-900 hover:bg-brand-800 text-white h-12 px-8 rounded-full flex items-center justify-center transition-colors font-medium">
              <Search size={18} className="mr-2" />
              Search
            </Link>
          </div>
        </div>
      </div>

      {/* Stats/Trust Section */}
      <section className="bg-white py-12 border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center justify-center gap-4 text-gray-700">
              <div className="bg-blue-50 p-3 rounded-full text-brand-600">
                <Shield size={24} />
              </div>
              <div>
                <p className="font-bold text-lg">Premium Protection</p>
                <p className="text-sm text-gray-500">Verified listings & secure process</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-4 text-gray-700">
              <div className="bg-amber-50 p-3 rounded-full text-brand-accent">
                <Award size={24} />
              </div>
              <div>
                <p className="font-bold text-lg">Award Winning</p>
                <p className="text-sm text-gray-500">Recognized excellence in service</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-4 text-gray-700">
              <div className="bg-green-50 p-3 rounded-full text-green-600">
                <Users size={24} />
              </div>
              <div>
                <p className="font-bold text-lg">Expert Agents</p>
                <p className="text-sm text-gray-500">Local guides for your journey</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="text-brand-accent font-semibold tracking-wider text-sm uppercase">Exclusive Listings</span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-900 mt-2">Featured Properties</h2>
            </div>
            <Link to="/properties" className="hidden md:flex items-center text-brand-600 font-medium hover:text-brand-800 transition-colors group">
              View All Properties <ArrowRight size={18} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
          
          <div className="mt-12 text-center md:hidden">
             <Link to="/properties" className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 rounded-full text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
              View All Properties
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-800/50 transform skew-x-12 translate-x-12"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-white mb-6">Selling your home?</h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Use our AI-powered tool to generate the perfect listing description for your property in seconds.
          </p>
          <Link to="/sell" className="inline-block bg-brand-accent text-white px-8 py-4 rounded-full font-semibold hover:bg-amber-700 transition-colors shadow-lg shadow-amber-900/30">
            Create AI Listing
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;