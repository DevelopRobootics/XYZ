export interface Tour {
  id: string;
  title: string;
  description: string;
  duration: string;
  price: number;
  difficulty: 'Easy' | 'Moderate' | 'Hard';
  imageUrl: string;
  rating: number;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  comment: string;
  avatarUrl: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
}