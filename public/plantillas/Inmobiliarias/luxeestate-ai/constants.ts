import { Property } from './types';

export const PROPERTIES: Property[] = [
  {
    id: '1',
    title: 'Modern Waterfront Villa',
    price: 4500000,
    address: '123 Ocean Drive, Miami, FL',
    beds: 5,
    baths: 4.5,
    sqft: 4200,
    type: 'Sale',
    imageUrl: 'https://picsum.photos/id/10/800/600',
    description: 'Experience luxury living in this stunning waterfront villa. Featuring floor-to-ceiling windows, a private dock, and an infinity pool, this home defines modern elegance.',
    features: ['Waterfront', 'Pool', 'Smart Home', 'Garage'],
    agent: {
      name: 'Sarah Jenkins',
      phone: '(305) 555-0123',
      email: 'sarah.j@luxeestate.com',
      image: 'https://picsum.photos/id/64/100/100'
    }
  },
  {
    id: '2',
    title: 'Downtown Penthouse Loft',
    price: 1200000,
    address: '450 Main St, Seattle, WA',
    beds: 2,
    baths: 2,
    sqft: 1800,
    type: 'Sale',
    imageUrl: 'https://picsum.photos/id/122/800/600',
    description: 'A breathtaking penthouse in the heart of the city. Industrial chic design with exposed brick, high ceilings, and panoramic city views.',
    features: ['City View', 'Rooftop Access', 'Gym', 'Concierge'],
    agent: {
      name: 'Michael Chen',
      phone: '(206) 555-0987',
      email: 'm.chen@luxeestate.com',
      image: 'https://picsum.photos/id/91/100/100'
    }
  },
  {
    id: '3',
    title: 'Cozy Family Cottage',
    price: 3500,
    address: '789 Pine Lane, Portland, OR',
    beds: 3,
    baths: 2,
    sqft: 2100,
    type: 'Rent',
    imageUrl: 'https://picsum.photos/id/230/800/600',
    description: 'Charming cottage nestled in a quiet neighborhood. Large backyard perfect for families and newly renovated kitchen.',
    features: ['Garden', 'Fireplace', 'Pet Friendly', 'Renovated'],
    agent: {
      name: 'Emily Davis',
      phone: '(503) 555-0456',
      email: 'emily@luxeestate.com',
      image: 'https://picsum.photos/id/338/100/100'
    }
  },
  {
    id: '4',
    title: 'Contemporary Hills Mansion',
    price: 8900000,
    address: '90210 Crest Rd, Beverly Hills, CA',
    beds: 7,
    baths: 8,
    sqft: 8500,
    type: 'Sale',
    imageUrl: 'https://picsum.photos/id/221/800/600',
    description: 'The pinnacle of luxury. This architectural masterpiece offers complete privacy, a home theater, wine cellar, and spectacular canyon views.',
    features: ['Theater', 'Wine Cellar', 'Gated', 'Guest House'],
    agent: {
      name: 'David Sterling',
      phone: '(310) 555-9999',
      email: 'david@luxeestate.com',
      image: 'https://picsum.photos/id/177/100/100'
    }
  },
  {
    id: '5',
    title: 'Urban Studio Apartment',
    price: 2100,
    address: '88 Broadway, New York, NY',
    beds: 1,
    baths: 1,
    sqft: 650,
    type: 'Rent',
    imageUrl: 'https://picsum.photos/id/449/800/600',
    description: 'Efficient and stylish living in NYC. Close to subway lines, restaurants, and parks. Amenities include a 24/7 doorman.',
    features: ['Doorman', 'Elevator', 'Laundry', 'Central Air'],
    agent: {
      name: 'Jessica York',
      phone: '(212) 555-1010',
      email: 'jessica@luxeestate.com',
      image: 'https://picsum.photos/id/331/100/100'
    }
  },
  {
    id: '6',
    title: 'Secluded Mountain Retreat',
    price: 950000,
    address: '44 Aspen Way, Denver, CO',
    beds: 4,
    baths: 3,
    sqft: 3200,
    type: 'Sale',
    imageUrl: 'https://picsum.photos/id/511/800/600',
    description: 'Escape to nature in this beautiful log cabin style home. Features a wrap-around deck, hot tub, and direct access to hiking trails.',
    features: ['Mountain View', 'Hot Tub', 'Fireplace', 'Acreage'],
    agent: {
      name: 'Robert Stone',
      phone: '(303) 555-7777',
      email: 'rob@luxeestate.com',
      image: 'https://picsum.photos/id/203/100/100'
    }
  }
];