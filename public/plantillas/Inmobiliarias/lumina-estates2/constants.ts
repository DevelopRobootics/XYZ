import { Property } from './types';

export const PROPERTIES: Property[] = [
  {
    id: '1',
    title: "Villa Moderna con Vistas al Mar",
    price: 1250000,
    location: "Costa Brava, España",
    type: "Villa",
    bedrooms: 5,
    bathrooms: 4,
    sqft: 450,
    imageUrl: "https://picsum.photos/id/10/800/600",
    featured: true,
    description: "Una impresionante villa de arquitectura contemporánea situada en los acantilados de la Costa Brava. Cuenta con piscina infinita, sistema domótico completo y acceso privado a la cala.",
    agent: {
      name: "Elena Marín",
      phone: "+34 600 123 456",
      image: "https://picsum.photos/id/64/100/100"
    },
    amenities: ["Piscina", "Jardín", "Garaje", "Domótica", "Vistas al mar"]
  },
  {
    id: '2',
    title: "Penthouse de Lujo en el Centro",
    price: 890000,
    location: "Madrid, Salamanca",
    type: "Penthouse",
    bedrooms: 3,
    bathrooms: 3,
    sqft: 210,
    imageUrl: "https://picsum.photos/id/188/800/600",
    featured: true,
    description: "Espectacular ático dúplex en el corazón del barrio de Salamanca. Terraza privada de 80m2 con jacuzzi, acabados de primera calidad y portero físico 24h.",
    agent: {
      name: "Carlos Ruiz",
      phone: "+34 611 987 654",
      image: "https://picsum.photos/id/91/100/100"
    },
    amenities: ["Terraza", "Jacuzzi", "Ascensor", "Seguridad 24h", "Aire Acondicionado"]
  },
  {
    id: '3',
    title: "Casa de Campo Restaurada",
    price: 450000,
    location: "Toscana, Italia",
    type: "Casa",
    bedrooms: 4,
    bathrooms: 3,
    sqft: 300,
    imageUrl: "https://picsum.photos/id/204/800/600",
    featured: false,
    description: "Encantadora masía de piedra del siglo XIX totalmente reformada. Rodeada de viñedos y olivos, ofrece la paz y tranquilidad del campo con todas las comodidades modernas.",
    agent: {
      name: "Marco Rossi",
      phone: "+39 333 444 555",
      image: "https://picsum.photos/id/177/100/100"
    },
    amenities: ["Chimenea", "Bodega", "Huerto", "Pozo", "Calefacción"]
  },
  {
    id: '4',
    title: "Apartamento Minimalista Loft",
    price: 320000,
    location: "Barcelona, Gracia",
    type: "Apartamento",
    bedrooms: 1,
    bathrooms: 1,
    sqft: 90,
    imageUrl: "https://picsum.photos/id/221/800/600",
    featured: false,
    description: "Loft de diseño industrial en antigua fábrica textil. Techos altos, grandes ventanales y espacios abiertos. Ideal para artistas o parejas jóvenes.",
    agent: {
      name: "Sofia Beltrán",
      phone: "+34 622 333 444",
      image: "https://picsum.photos/id/338/100/100"
    },
    amenities: ["Techos altos", "Diseño industrial", "Cocina americana", "Cerca de metro"]
  },
  {
    id: '5',
    title: "Residencia Familiar en Suburbios",
    price: 650000,
    location: "Valencia, Campolivar",
    type: "Casa",
    bedrooms: 4,
    bathrooms: 3,
    sqft: 280,
    imageUrl: "https://picsum.photos/id/235/800/600",
    featured: true,
    description: "Amplia casa unifamiliar perfecta para familias. Situada en una urbanización exclusiva con club social, colegios internacionales cerca y seguridad privada.",
    agent: {
      name: "David Estévez",
      phone: "+34 655 666 777",
      image: "https://picsum.photos/id/349/100/100"
    },
    amenities: ["Club social", "Piscina comunitaria", "Jardín privado", "4 Habitaciones"]
  },
  {
    id: '6',
    title: "Estudio Céntrico y Moderno",
    price: 210000,
    location: "Málaga, Centro",
    type: "Apartamento",
    bedrooms: 1,
    bathrooms: 1,
    sqft: 55,
    imageUrl: "https://picsum.photos/id/401/800/600",
    featured: false,
    description: "Estudio recién reformado ideal para inversión o alquiler vacacional. Ubicación inmejorable cerca de museos y zona de ocio.",
    agent: {
      name: "Laura Gómez",
      phone: "+34 688 999 000",
      image: "https://picsum.photos/id/433/100/100"
    },
    amenities: ["Amueblado", "Céntrico", "Aire Acondicionado", "Licencia turística"]
  }
];

export const PROPERTY_TYPES = ["Todos", "Casa", "Apartamento", "Penthouse", "Villa"];
