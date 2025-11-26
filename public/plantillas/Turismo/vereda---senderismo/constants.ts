import { Trail, Difficulty } from './types';

export const MOCK_TRAILS: Trail[] = [
  {
    id: '1',
    name: 'Valle del Silencio',
    location: 'Picos de Europa, España',
    distanceKm: 12.5,
    elevationGainM: 450,
    difficulty: Difficulty.Moderate,
    rating: 4.8,
    imageUrl: 'https://picsum.photos/id/1018/800/600',
    description: 'Una ruta escénica a través de antiguos bosques de robles que desemboca en un valle glaciar silencioso y majestuoso.',
    tags: ['Bosque', 'Río', 'Fotografía']
  },
  {
    id: '2',
    name: 'Cumbre de Águilas',
    location: 'Andes Patagónicos, Chile',
    distanceKm: 8.2,
    elevationGainM: 920,
    difficulty: Difficulty.Hard,
    rating: 4.9,
    imageUrl: 'https://picsum.photos/id/1036/800/600',
    description: 'Ascenso desafiante con vistas panorámicas incomparables. Solo para excursionistas experimentados.',
    tags: ['Montaña', 'Vistas', 'Reto']
  },
  {
    id: '3',
    name: 'Sendero Costero Azul',
    location: 'Algarve, Portugal',
    distanceKm: 5.5,
    elevationGainM: 120,
    difficulty: Difficulty.Easy,
    rating: 4.5,
    imageUrl: 'https://picsum.photos/id/1047/800/600',
    description: 'Un paseo relajante por acantilados dorados con el sonido del océano de fondo. Ideal para familias.',
    tags: ['Costa', 'Familia', 'Playa']
  },
  {
    id: '4',
    name: 'Ruta de los Volcanes',
    location: 'La Garrotxa, España',
    distanceKm: 14.0,
    elevationGainM: 300,
    difficulty: Difficulty.Moderate,
    rating: 4.7,
    imageUrl: 'https://picsum.photos/id/1015/800/600',
    description: 'Camina entre cráteres inactivos y bosques de hayas en un paisaje lunar único.',
    tags: ['Volcanes', 'Geología', 'Bosque']
  },
  {
    id: '5',
    name: 'Laguna Esmeralda',
    location: 'Ushuaia, Argentina',
    distanceKm: 9.0,
    elevationGainM: 200,
    difficulty: Difficulty.Moderate,
    rating: 4.8,
    imageUrl: 'https://picsum.photos/id/10/800/600',
    description: 'Un trekking clásico a través de turberas y bosques hasta una laguna de color irreal.',
    tags: ['Laguna', 'Nieve', 'Invierno']
  },
  {
    id: '6',
    name: 'Bosque de Niebla',
    location: 'Monteverde, Costa Rica',
    distanceKm: 4.5,
    elevationGainM: 150,
    difficulty: Difficulty.Easy,
    rating: 4.9,
    imageUrl: 'https://picsum.photos/id/1043/800/600',
    description: 'Sumérgete en la biodiversidad de un bosque nuboso lleno de vida salvaje y puentes colgantes.',
    tags: ['Selva', 'Fauna', 'Puentes']
  }
];

export const NAV_LINKS = [
  { name: 'Inicio', path: '/' },
  { name: 'Explorar Rutas', path: '/explore' },
  { name: 'Guía IA', path: '/assistant' },
  { name: 'Contacto', path: '/contact' },
];