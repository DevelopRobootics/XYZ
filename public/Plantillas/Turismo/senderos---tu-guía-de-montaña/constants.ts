import { Trail, Difficulty } from './types';

export const MOCK_TRAILS: Trail[] = [
  {
    id: '1',
    title: 'Ruta de los Lagos Azules',
    location: 'Pirineos, España',
    difficulty: Difficulty.MODERATE,
    distance: 12.5,
    duration: '4h 30m',
    elevationGain: 650,
    imageUrl: 'https://picsum.photos/800/600?random=1',
    description: 'Una ruta circular impresionante que visita tres lagos glaciares de color turquesa rodeados de picos escarpados.',
    rating: 4.8
  },
  {
    id: '2',
    title: 'Cumbre del Águila',
    location: 'Sierra de Gredos, España',
    difficulty: Difficulty.HARD,
    distance: 18.2,
    duration: '7h 15m',
    elevationGain: 1200,
    imageUrl: 'https://picsum.photos/800/600?random=2',
    description: 'Desafiante ascenso a uno de los picos más emblemáticos, ofreciendo vistas panorámicas de 360 grados.',
    rating: 4.9
  },
  {
    id: '3',
    title: 'Sendero del Bosque Encantado',
    location: 'Navarra, España',
    difficulty: Difficulty.EASY,
    distance: 5.4,
    duration: '2h 00m',
    elevationGain: 150,
    imageUrl: 'https://picsum.photos/800/600?random=3',
    description: 'Ideal para familias. Un paseo relajante a través de un denso bosque de hayas con arroyos cristalinos.',
    rating: 4.5
  },
  {
    id: '4',
    title: 'Cañón del Río Rojo',
    location: 'Andalucía, España',
    difficulty: Difficulty.MODERATE,
    distance: 9.8,
    duration: '3h 45m',
    elevationGain: 320,
    imageUrl: 'https://picsum.photos/800/600?random=4',
    description: 'Camina entre paredes de roca roja y pozas naturales perfectas para un descanso refrescante.',
    rating: 4.6
  },
  {
    id: '5',
    title: 'Travesía de los Volcanes',
    location: 'Islas Canarias, España',
    difficulty: Difficulty.HARD,
    distance: 24.0,
    duration: '8h 30m',
    elevationGain: 1450,
    imageUrl: 'https://picsum.photos/800/600?random=5',
    description: 'Un paisaje lunar único. Terreno árido y exigente, recomendado solo para senderistas experimentados.',
    rating: 4.9
  },
  {
    id: '6',
    title: 'Valle de las Flores',
    location: 'Asturias, España',
    difficulty: Difficulty.EASY,
    distance: 7.2,
    duration: '2h 30m',
    elevationGain: 200,
    imageUrl: 'https://picsum.photos/800/600?random=6',
    description: 'Espectacular en primavera. Praderas alpinas llenas de flores silvestres y ganado pastando libremente.',
    rating: 4.7
  }
];

export const NAV_ITEMS = [
  { label: 'Inicio', path: '/' },
  { label: 'Rutas', path: '/trails' },
  { label: 'Comunidad', path: '/community' },
  { label: 'Contacto', path: '/contact' },
];