import { Product } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "VX-9000 Cyber Runner",
    price: 249.00,
    category: "Footwear",
    image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&q=80&w=800",
    description: "High-top tactical sneakers with reinforced neo-mesh. Acid green detailing and impact absorption sole.",
    rating: 4.9,
    reviews: 412
  },
  {
    id: 2,
    name: "Tech-Shell Cargo Pant",
    price: 185.00,
    category: "Bottoms",
    image: "https://images.unsplash.com/photo-1552160793-eb8e6066ce58?auto=format&fit=crop&q=80&w=800",
    description: "Water-resistant polymer blend. 6 utility pockets with magnetic closures. Tapered fit for urban mobility.",
    rating: 4.8,
    reviews: 128
  },
  {
    id: 3,
    name: "Oversized Glitch Hoodie",
    price: 120.00,
    category: "Outerwear",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=800",
    description: "Heavyweight cotton fleece (450gsm). Screen-printed distorted graphic back piece. Drop shoulders.",
    rating: 4.7,
    reviews: 89
  },
  {
    id: 4,
    name: "Modular Crossbody Rig",
    price: 85.00,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1547656807-9493caad65b8?auto=format&fit=crop&q=80&w=800",
    description: "Utility chest rig with detachable pouches. Ballistic nylon construction. Fidlock buckles.",
    rating: 4.9,
    reviews: 210
  },
  {
    id: 5,
    name: "Zero-G Puffer Jacket",
    price: 350.00,
    category: "Outerwear",
    image: "https://images.unsplash.com/photo-1551488852-0801756acb50?auto=format&fit=crop&q=80&w=800",
    description: "Thermal reflective lining with synthetic down. Cropped fit. High collar for wind protection.",
    rating: 5.0,
    reviews: 56
  },
  {
    id: 6,
    name: "Tactical Balaclava",
    price: 45.00,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1577555536464-c7b0e30a9291?auto=format&fit=crop&q=80&w=800",
    description: "Knitted performance fabric. Breathable mesh mouth panel. Minimalist branding tag.",
    rating: 4.6,
    reviews: 142
  },
  {
    id: 7,
    name: "Flux Runner Low",
    price: 195.00,
    category: "Footwear",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800",
    description: "Aerodynamic silhouette designed for speed. Responsive foam midsole with carbon fiber shank.",
    rating: 4.8,
    reviews: 95
  },
  {
    id: 8,
    name: "Industrial Belt V2",
    price: 55.00,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1624222247344-550fb60583dc?auto=format&fit=crop&q=80&w=800",
    description: "2-meter industrial webbing. Heavy-duty metal buckle with engraved logo. Safety yellow accents.",
    rating: 4.7,
    reviews: 310
  }
];

export const CATEGORIES = ["All Systems", "Footwear", "Outerwear", "Bottoms", "Accessories"];