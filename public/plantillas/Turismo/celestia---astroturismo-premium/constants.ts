import { Tour, Testimonial } from './types';

export const TOURS: Tour[] = [
  {
    id: '1',
    title: 'Observación en el Desierto de Atacama',
    location: 'San Pedro de Atacama, Chile',
    price: 150,
    duration: '4 Horas',
    rating: 4.9,
    image: 'https://picsum.photos/800/600?random=1',
    description: 'Experimenta los cielos más claros del mundo en el desierto más árido. Incluye telescopios de alta gama y guía astronómico profesional.',
    difficulty: 'Fácil',
    features: ['Telescopios 16"', 'Fotografía Nocturna', 'Snacks y Vino']
  },
  {
    id: '2',
    title: 'Aurora Boreal en Islandia',
    location: 'Reykjavik, Islandia',
    price: 220,
    duration: '6 Horas',
    rating: 4.8,
    image: 'https://picsum.photos/800/600?random=2',
    description: 'Caza las luces del norte en jeep 4x4 lejos de la contaminación lumínica. Una experiencia mágica e inolvidable.',
    difficulty: 'Moderado',
    features: ['Transporte 4x4', 'Chocolate Caliente', 'Garantía de Avistamiento']
  },
  {
    id: '3',
    title: 'Noche Estrellada en el Teide',
    location: 'Tenerife, España',
    price: 95,
    duration: '3 Horas',
    rating: 4.7,
    image: 'https://picsum.photos/800/600?random=3',
    description: 'Observación astronómica desde el Parque Nacional del Teide, patrimonio de la humanidad. Ideal para familias.',
    difficulty: 'Fácil',
    features: ['Guía Starlight', 'Abrigos Polares', 'Charla Didáctica']
  },
  {
    id: '4',
    title: 'Astrofotografía en Nueva Zelanda',
    location: 'Lago Tekapo, Nueva Zelanda',
    price: 300,
    duration: '5 Horas',
    rating: 5.0,
    image: 'https://picsum.photos/800/600?random=4',
    description: 'Taller intensivo de astrofotografía en la Reserva Internacional de Cielo Oscuro Aoraki Mackenzie.',
    difficulty: 'Avanzado',
    features: ['Equipo Fotográfico', 'Edición Post-Tour', 'Grupo Reducido']
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Sofia Martinez',
    role: 'Astrónoma Aficionada',
    content: 'La experiencia en Atacama superó todas mis expectativas. Ver los anillos de Saturno con tanta claridad me hizo llorar de emoción.',
    avatar: 'https://picsum.photos/100/100?random=10'
  },
  {
    id: 't2',
    name: 'James Wilson',
    role: 'Fotógrafo',
    content: 'El guía en Islandia conocía los lugares exactos para encuadrar la aurora. Increíble servicio y profesionalismo.',
    avatar: 'https://picsum.photos/100/100?random=11'
  }
];

export const NAV_LINKS = [
  { name: 'Inicio', path: '/' },
  { name: 'Destinos', path: '/tours' },
  { name: 'Guía Cósmica', path: '/guide' },
  { name: 'Reservar', path: '/book' },
];