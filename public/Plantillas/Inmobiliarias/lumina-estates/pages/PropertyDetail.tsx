import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { MOCK_PROPERTIES } from '../constants';
import { MapPin, Bed, Bath, Move, CheckCircle, Phone, Mail, Calendar } from 'lucide-react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const PropertyDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const property = MOCK_PROPERTIES.find(p => p.id === id);

  if (!property) {
    return <div className="min-h-screen flex items-center justify-center">Propiedad no encontrada.</div>;
  }

  // Mortgage Calculator Data
  const downPayment = property.price * 0.2;
  const loanAmount = property.price - downPayment;
  const interestRate = 0.035; // 3.5%
  const monthlyInterest = (loanAmount * interestRate) / 12;
  const estimatedTax = property.price * 0.001; // Fake tax
  
  const chartData = [
    { name: 'Principal e Interés', value: monthlyInterest + (loanAmount / 360) }, // 30 years
    { name: 'Impuestos', value: estimatedTax },
    { name: 'Seguro', value: 100 },
  ];
  const COLORS = ['#0284c7', '#10b981', '#f59e0b'];

  const totalMonthly = chartData.reduce((acc, curr) => acc + curr.value, 0);

  return (
    <div className="bg-white min-h-screen pb-20">
      {/* Image Gallery Header */}
      <div className="h-[50vh] relative bg-gray-900">
        <img src={property.imageUrl} alt={property.title} className="w-full h-full object-cover opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="flex gap-2 mb-4">
             <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-bold">{property.status}</span>
             <span className="bg-white/20 backdrop-blur-md text-white px-3 py-1 rounded-full text-sm font-bold border border-white/30">{property.type}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">{property.title}</h1>
          <div className="flex items-center text-gray-300 text-lg">
            <MapPin size={20} className="mr-2" />
            {property.address}, {property.city}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Main Content */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-8 mb-8">
              
              {/* Key Specs */}
              <div className="flex flex-wrap justify-between items-center border-b border-gray-100 pb-8 mb-8">
                <div className="text-3xl font-bold text-primary-600">€{property.price.toLocaleString()}</div>
                <div className="flex gap-8 mt-4 sm:mt-0">
                  <div className="text-center">
                    <div className="font-bold text-gray-900 text-xl flex items-center justify-center gap-2"><Bed size={20}/> {property.beds}</div>
                    <div className="text-gray-500 text-sm">Habitaciones</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-gray-900 text-xl flex items-center justify-center gap-2"><Bath size={20}/> {property.baths}</div>
                    <div className="text-gray-500 text-sm">Baños</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-gray-900 text-xl flex items-center justify-center gap-2"><Move size={20}/> {property.sqft}</div>
                    <div className="text-gray-500 text-sm">Sq Ft</div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Descripción</h3>
                <p className="text-gray-600 leading-relaxed text-lg">{property.description}</p>
              </div>

              {/* Features */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Características</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {property.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-gray-600">
                      <CheckCircle size={18} className="text-primary-500 mr-2" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              {/* Mortgage Calculator */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Estimación de Hipoteca</h3>
                <div className="flex flex-col md:flex-row items-center bg-gray-50 rounded-xl p-6">
                  <div className="w-full md:w-1/2 h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={chartData}
                          innerRadius={60}
                          outerRadius={80}
                          paddingAngle={5}
                          dataKey="value"
                        >
                          {chartData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip />
                        <Legend verticalAlign="bottom" height={36}/>
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="w-full md:w-1/2 mt-6 md:mt-0 text-center md:text-left pl-0 md:pl-8">
                     <p className="text-sm text-gray-500 mb-1">Pago Mensual Estimado</p>
                     <p className="text-4xl font-bold text-gray-900 mb-4">€{Math.round(totalMonthly).toLocaleString()}</p>
                     <div className="space-y-2 text-sm text-gray-600">
                       <p>Basado en un pago inicial del 20% (€{downPayment.toLocaleString()})</p>
                       <p>Tasa de interés fija del 3.5% a 30 años</p>
                     </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Sidebar Agent */}
          <div className="lg:w-1/3">
             <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 sticky top-24">
               <h3 className="text-lg font-bold text-gray-900 mb-6">Contactar Agente</h3>
               
               <div className="flex items-center gap-4 mb-6">
                 <img src={property.agent.image} alt={property.agent.name} className="w-16 h-16 rounded-full object-cover border-2 border-primary-100" />
                 <div>
                   <p className="font-bold text-gray-900">{property.agent.name}</p>
                   <p className="text-sm text-gray-500">Agente Senior</p>
                 </div>
               </div>

               <div className="space-y-3 mb-6">
                 <a href={`tel:${property.agent.phone}`} className="flex items-center gap-3 w-full justify-center border border-gray-200 py-2.5 rounded-lg text-gray-700 hover:bg-gray-50 font-medium transition-colors">
                   <Phone size={18} /> {property.agent.phone}
                 </a>
                 <button className="flex items-center gap-3 w-full justify-center border border-gray-200 py-2.5 rounded-lg text-gray-700 hover:bg-gray-50 font-medium transition-colors">
                   <Mail size={18} /> Enviar Mensaje
                 </button>
               </div>

               <form className="space-y-4">
                 <input type="text" placeholder="Tu Nombre" className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary-500" />
                 <input type="email" placeholder="Tu Email" className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary-500" />
                 <input type="tel" placeholder="Tu Teléfono" className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary-500" />
                 <textarea rows={3} placeholder="Hola, estoy interesado en esta propiedad..." className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary-500"></textarea>
                 <button className="w-full bg-primary-600 hover:bg-primary-700 text-white font-bold py-3 rounded-lg transition-colors shadow-lg shadow-primary-600/20">
                    Solicitar Información
                 </button>
               </form>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;
