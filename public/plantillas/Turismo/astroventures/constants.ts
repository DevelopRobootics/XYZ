import { Tour, Feature, Testimonial } from './types';

export const APP_NAME = "AstroVentures";

export const TOURS: Tour[] = [
  {
    id: '1',
    title: 'Milky Way Walk',
    description: 'A guided night hike through the desert focusing on naked-eye astronomy and constellation lore.',
    duration: '3 Hours',
    price: 85,
    difficulty: 'Easy',
    imageUrl: 'https://picsum.photos/800/600?grayscale', // Using picsum grayscale for moody vibe
    rating: 4.8
  },
  {
    id: '2',
    title: 'Deep Space Telescope Night',
    description: 'Exclusive access to our 20-inch Dobsonian telescopes. View nebulae, galaxies, and star clusters.',
    duration: '4 Hours',
    price: 150,
    difficulty: 'Easy',
    imageUrl: 'https://picsum.photos/800/601?grayscale',
    rating: 4.9
  },
  {
    id: '3',
    title: 'Solar Photography Workshop',
    description: 'Learn to safely photograph the sun surface and solar flares with specialized H-alpha equipment.',
    duration: '6 Hours',
    price: 220,
    difficulty: 'Moderate',
    imageUrl: 'https://picsum.photos/800/602?grayscale',
    rating: 4.7
  }
];

export const FEATURES: Feature[] = [
  {
    id: 'f1',
    title: 'Dark Sky Certified',
    description: 'Located in a certified International Dark Sky Reserve with zero light pollution.',
    iconName: 'Moon'
  },
  {
    id: 'f2',
    title: 'Expert Astronomers',
    description: 'Our guides are Ph.D. students and professional astronomers.',
    iconName: 'GraduationCap'
  },
  {
    id: 'f3',
    title: 'Advanced Equipment',
    description: 'Access to professional-grade Celestron and Meade telescopes.',
    iconName: 'Telescope'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Elena R.',
    role: 'Astrophotography Enthusiast',
    comment: 'The clearest skies I have ever seen. The guides knew exactly where to point the scope.',
    avatarUrl: 'https://picsum.photos/100/100?random=1'
  },
  {
    id: 't2',
    name: 'Marcus J.',
    role: 'First-time Stargazer',
    comment: 'A humbling experience. Seeing Saturns rings with my own eyes changed my perspective.',
    avatarUrl: 'https://picsum.photos/100/100?random=2'
  }
];