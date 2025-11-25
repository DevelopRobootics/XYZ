export interface Property {
  id: string;
  title: string;
  price: number;
  location: string;
  type: 'Casa' | 'Apartamento' | 'Penthouse' | 'Villa';
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  imageUrl: string;
  featured?: boolean;
  description: string;
  agent: {
    name: string;
    phone: string;
    image: string;
  };
  amenities: string[];
}

export interface FilterState {
  search: string;
  type: string;
  minPrice: string;
  maxPrice: string;
}

export interface Message {
  role: 'user' | 'model';
  text: string;
  isThinking?: boolean;
}