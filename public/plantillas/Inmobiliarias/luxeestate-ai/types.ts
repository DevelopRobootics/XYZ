export interface Property {
  id: string;
  title: string;
  price: number;
  address: string;
  beds: number;
  baths: number;
  sqft: number;
  type: 'Sale' | 'Rent';
  imageUrl: string;
  description: string;
  features: string[];
  agent: {
    name: string;
    phone: string;
    email: string;
    image: string;
  };
}

export interface SearchFilters {
  query: string;
  minPrice?: number;
  maxPrice?: number;
  type?: 'Sale' | 'Rent' | 'All';
}