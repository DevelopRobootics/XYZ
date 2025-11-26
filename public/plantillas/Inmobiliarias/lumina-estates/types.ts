export enum PropertyType {
  House = 'Casa',
  Apartment = 'Apartamento',
  Condo = 'Condominio',
  Land = 'Terreno',
  Commercial = 'Comercial'
}

export enum ListingStatus {
  ForSale = 'Venta',
  ForRent = 'Alquiler',
  Sold = 'Vendido'
}

export interface Property {
  id: string;
  title: string;
  price: number;
  address: string;
  city: string;
  beds: number;
  baths: number;
  sqft: number;
  type: PropertyType;
  status: ListingStatus;
  imageUrl: string;
  description: string;
  features: string[];
  agent: {
    name: string;
    phone: string;
    image: string;
  };
}

export interface FilterState {
  type: string;
  minPrice: number;
  maxPrice: number;
}
