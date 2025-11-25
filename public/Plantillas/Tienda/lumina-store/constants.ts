import { Product } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Reloj Minimalista Chrono",
    price: 129.99,
    category: "Accesorios",
    image: "https://picsum.photos/id/175/800/800",
    description: "Un reloj elegante con correa de cuero genuino y movimiento de cuarzo preciso.",
    rating: 4.8,
    reviews: 124
  },
  {
    id: 2,
    name: "Auriculares Noise Cancelling",
    price: 249.50,
    category: "Electrónica",
    image: "https://picsum.photos/id/3/800/800",
    description: "Experimenta el silencio puro con nuestra tecnología de cancelación de ruido de última generación.",
    rating: 4.9,
    reviews: 89
  },
  {
    id: 3,
    name: "Mochila Urbana Tech",
    price: 85.00,
    category: "Bolsos",
    image: "https://picsum.photos/id/367/800/800",
    description: "Diseñada para el nómada digital, resistente al agua y con compartimento para laptop.",
    rating: 4.7,
    reviews: 56
  },
  {
    id: 4,
    name: "Cámara Analógica Vintage",
    price: 450.00,
    category: "Fotografía",
    image: "https://picsum.photos/id/250/800/800",
    description: "Captura momentos con el encanto del film. Restaurada profesionalmente.",
    rating: 4.9,
    reviews: 210
  },
  {
    id: 5,
    name: "Lentes de Sol Aviator",
    price: 110.00,
    category: "Accesorios",
    image: "https://picsum.photos/id/64/800/800",
    description: "Protección UV400 con un marco clásico dorado que nunca pasa de moda.",
    rating: 4.6,
    reviews: 45
  },
  {
    id: 6,
    name: "Sneakers Urban Drift",
    price: 95.00,
    category: "Calzado",
    image: "https://picsum.photos/id/103/800/800",
    description: "Comodidad todo el día con suela de espuma de memoria y diseño transpirable.",
    rating: 4.5,
    reviews: 112
  },
  {
    id: 7,
    name: "Set de Escritorio Premium",
    price: 65.00,
    category: "Oficina",
    image: "https://picsum.photos/id/366/800/800",
    description: "Eleva tu espacio de trabajo con materiales nobles y diseño ergonómico.",
    rating: 4.8,
    reviews: 34
  },
  {
    id: 8,
    name: "Botella Térmica Matte",
    price: 35.00,
    category: "Hogar",
    image: "https://picsum.photos/id/75/800/800",
    description: "Mantiene tus bebidas frías por 24h o calientes por 12h. Acero inoxidable.",
    rating: 4.7,
    reviews: 156
  }
];

export const CATEGORIES = ["Todos", "Accesorios", "Electrónica", "Bolsos", "Fotografía", "Calzado", "Oficina", "Hogar"];
