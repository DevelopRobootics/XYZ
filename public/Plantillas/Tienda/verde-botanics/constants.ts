import { Product } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Monstera Deliciosa XL",
    price: 89.00,
    category: "Interior",
    image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&q=80&w=800",
    description: "La icónica Costilla de Adán. Hojas grandes y fenestradas que añaden un toque tropical inmediato.",
    rating: 4.9,
    reviews: 215
  },
  {
    id: 2,
    name: "Ficus Lyrata (Violín)",
    price: 120.00,
    category: "Interior",
    image: "https://images.unsplash.com/photo-1613143927459-009c9cb4434e?auto=format&fit=crop&q=80&w=800",
    description: "Un árbol de interior majestuoso con hojas grandes en forma de violín. Requiere luz brillante indirecta.",
    rating: 4.7,
    reviews: 84
  },
  {
    id: 3,
    name: "Maceta Cerámica Artesanal",
    price: 45.00,
    category: "Macetas",
    image: "https://images.unsplash.com/photo-1616489953121-778875574309?auto=format&fit=crop&q=80&w=800",
    description: "Torneada a mano en terracota blanca con acabado mate. Drenaje perfecto para tus plantas.",
    rating: 4.8,
    reviews: 56
  },
  {
    id: 4,
    name: "Sansevieria (Lengua de Suegra)",
    price: 35.00,
    category: "Fácil Cuidado",
    image: "https://images.unsplash.com/photo-1620127366355-94445c996d73?auto=format&fit=crop&q=80&w=800",
    description: "Indestructible y purificadora de aire. Perfecta para principiantes y espacios con poca luz.",
    rating: 4.9,
    reviews: 340
  },
  {
    id: 5,
    name: "Kit de Poda Japonés",
    price: 65.00,
    category: "Herramientas",
    image: "https://images.unsplash.com/photo-1599687267812-35905d212aa7?auto=format&fit=crop&q=80&w=800",
    description: "Tijeras de acero al carbono forjadas a mano, ideales para bonsáis y plantas delicadas.",
    rating: 5.0,
    reviews: 28
  },
  {
    id: 6,
    name: "Calathea Orbifolia",
    price: 55.00,
    category: "Pet Friendly",
    image: "https://images.unsplash.com/photo-1632808016462-26d400247656?auto=format&fit=crop&q=80&w=800",
    description: "Hojas redondas con patrones plateados. Segura para mascotas y amante de la humedad.",
    rating: 4.6,
    reviews: 92
  },
  {
    id: 7,
    name: "Regadera de Cobre Vintage",
    price: 75.00,
    category: "Herramientas",
    image: "https://images.unsplash.com/photo-1622375836263-54602cb87342?auto=format&fit=crop&q=80&w=800",
    description: "Funcionalidad y decoración en uno. Cuello largo para riego preciso en macetas densas.",
    rating: 4.8,
    reviews: 45
  },
  {
    id: 8,
    name: "Sustrato Premium Aroid Mix",
    price: 22.00,
    category: "Cuidado",
    image: "https://images.unsplash.com/photo-1637681023223-2895f32d8478?auto=format&fit=crop&q=80&w=800",
    description: "Mezcla aireada con corteza de pino, perlita y carbón activado. Ideal para Monstera y Philodendron.",
    rating: 4.9,
    reviews: 156
  }
];

export const CATEGORIES = ["Todos", "Interior", "Fácil Cuidado", "Pet Friendly", "Macetas", "Herramientas", "Cuidado"];