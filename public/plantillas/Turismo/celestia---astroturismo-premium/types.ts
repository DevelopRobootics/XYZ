export interface Tour {
  id: string;
  title: string;
  location: string;
  price: number;
  duration: string;
  rating: number;
  image: string;
  description: string;
  difficulty: 'Fácil' | 'Moderado' | 'Avanzado';
  features: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export enum ViewingCondition {
  POOR = 'Malo',
  FAIR = 'Regular',
  GOOD = 'Bueno',
  EXCELLENT = 'Excelente'
}