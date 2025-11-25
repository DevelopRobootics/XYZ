import { Property, PropertyType, ListingStatus } from './types';

export const MOCK_PROPERTIES: Property[] = [
  {
    id: '1',
    title: 'Villa Moderna con Vista al Mar',
    price: 1250000,
    address: 'Calle del Sol 123',
    city: 'Barcelona',
    beds: 4,
    baths: 3.5,
    sqft: 3500,
    type: PropertyType.House,
    status: ListingStatus.ForSale,
    imageUrl: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80',
    description: 'Espectacular villa de diseño moderno con piscina infinita y vistas panorámicas al mar. Acabados de lujo, domótica integrada y amplio jardín.',
    features: ['Piscina', 'Vista al Mar', 'Garaje Doble', 'Domótica', 'Jardín'],
    agent: {
      name: 'Carlos Ruiz',
      phone: '+34 600 123 456',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80'
    }
  },
  {
    id: '2',
    title: 'Ático de Lujo en el Centro',
    price: 850000,
    address: 'Gran Vía 45',
    city: 'Madrid',
    beds: 3,
    baths: 2,
    sqft: 1800,
    type: PropertyType.Apartment,
    status: ListingStatus.ForSale,
    imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
    description: 'Exclusivo ático en el corazón de la ciudad. Terraza privada de 50m2, cocina gourmet y acceso a servicios premium del edificio.',
    features: ['Terraza', 'Gimnasio', 'Conserje 24h', 'Ascensor Privado'],
    agent: {
      name: 'Ana García',
      phone: '+34 600 987 654',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80'
    }
  },
  {
    id: '3',
    title: 'Casa Familiar en Suburbios',
    price: 450000,
    address: 'Av. de los Pinos 88',
    city: 'Valencia',
    beds: 5,
    baths: 4,
    sqft: 2800,
    type: PropertyType.House,
    status: ListingStatus.ForSale,
    imageUrl: 'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?auto=format&fit=crop&w=800&q=80',
    description: 'Perfecta para familias grandes. Cerca de colegios internacionales y parques. Cuenta con sótano reformado y zona de barbacoa.',
    features: ['Cerca de Colegios', 'Sótano', 'Barbacoa', 'Chimenea'],
    agent: {
      name: 'Luis Mendez',
      phone: '+34 600 555 123',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80'
    }
  },
  {
    id: '4',
    title: 'Loft Industrial Renovado',
    price: 2500,
    address: 'Calle Fábrica 22',
    city: 'Bilbao',
    beds: 1,
    baths: 1.5,
    sqft: 1200,
    type: PropertyType.Condo,
    status: ListingStatus.ForRent,
    imageUrl: 'https://images.unsplash.com/photo-1560185127-6a6a66194265?auto=format&fit=crop&w=800&q=80',
    description: 'Espacio abierto con techos altos, ladrillo visto y grandes ventanales. Ideal para profesionales jóvenes o artistas.',
    features: ['Techos Altos', 'Diseño Industrial', 'Parking', 'Mascotas Permitidas'],
    agent: {
      name: 'Elena Torres',
      phone: '+34 600 444 888',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80'
    }
  },
  {
    id: '5',
    title: 'Finca Rústica con Viñedo',
    price: 2100000,
    address: 'Camino Real s/n',
    city: 'La Rioja',
    beds: 6,
    baths: 5,
    sqft: 5000,
    type: PropertyType.Land,
    status: ListingStatus.ForSale,
    imageUrl: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80',
    description: 'Propiedad histórica con 10 hectáreas de terreno y viñedo propio en producción. Casa principal reformada manteniendo el estilo original.',
    features: ['Viñedo', 'Bodega', 'Histórico', 'Privacidad Total'],
    agent: {
      name: 'Carlos Ruiz',
      phone: '+34 600 123 456',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80'
    }
  },
  {
    id: '6',
    title: 'Apartamento Playa Primera Línea',
    price: 320000,
    address: 'Paseo Marítimo 10',
    city: 'Málaga',
    beds: 2,
    baths: 2,
    sqft: 950,
    type: PropertyType.Apartment,
    status: ListingStatus.ForSale,
    imageUrl: 'https://images.unsplash.com/photo-1515263487990-61b07816b324?auto=format&fit=crop&w=800&q=80',
    description: 'Despierta con el sonido de las olas. Apartamento luminoso con balcón directo a la playa. Excelente oportunidad de inversión vacacional.',
    features: ['Primera Línea', 'Balcón', 'Aire Acondicionado', 'Amueblado'],
    agent: {
      name: 'Ana García',
      phone: '+34 600 987 654',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80'
    }
  }
];