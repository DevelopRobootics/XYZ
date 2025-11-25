import { Product, Testimonial, NavItem } from './types';

export const APP_NAME = "Tierra & Manos";

export const NAV_ITEMS: NavItem[] = [
  { label: 'Inicio', path: '/' },
  { label: 'Tienda', path: '/shop' },
  { label: 'Nosotros', path: '/about' },
  { label: 'Contacto', path: '/contact' },
];

export const MOCK_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Jarrón de Arcilla Roja',
    category: 'Cerámica',
    price: 45.00,
    image: 'https://picsum.photos/400/500?random=1',
    description: 'Un jarrón torneado a mano con arcilla local, perfecto para flores secas.',
    isNew: true,
  },
  {
    id: '2',
    name: 'Cesta de Mimbre Tejida',
    category: 'Cestería',
    price: 32.50,
    image: 'https://picsum.photos/400/500?random=2',
    description: 'Cesta tradicional tejida con fibras naturales, ideal para organizar el hogar.',
  },
  {
    id: '3',
    name: 'Manta de Lana Merina',
    category: 'Textil',
    price: 120.00,
    image: 'https://picsum.photos/400/500?random=3',
    description: 'Suave y cálida, tejida en telar manual con lana 100% orgánica.',
    isNew: true,
  },
  {
    id: '4',
    name: 'Tabla de Cortar de Olivo',
    category: 'Madera',
    price: 55.00,
    image: 'https://picsum.photos/400/500?random=4',
    description: 'Madera de olivo recuperada, tratada con aceites naturales.',
  },
  {
    id: '5',
    name: 'Juego de Tazas Rústicas',
    category: 'Cerámica',
    price: 38.00,
    image: 'https://picsum.photos/400/500?random=5',
    description: 'Set de 2 tazas con esmalte reactivo único en cada pieza.',
  },
  {
    id: '6',
    name: 'Lámpara de Macramé',
    category: 'Decoración',
    price: 65.00,
    image: 'https://picsum.photos/400/500?random=6',
    description: 'Lámpara colgante anudada a mano con algodón reciclado.',
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Laura García',
    role: 'Interiorista',
    text: 'Las piezas de Tierra & Manos aportan una calidez inigualable a mis proyectos. Se nota el amor en cada detalle.',
  },
  {
    id: '2',
    name: 'Carlos Mendoza',
    role: 'Coleccionista',
    text: 'La calidad de la cerámica es excepcional. Es difícil encontrar artesanía tan auténtica hoy en día.',
  }
];