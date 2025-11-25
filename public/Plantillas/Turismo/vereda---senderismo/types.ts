export enum Difficulty {
  Easy = 'Fácil',
  Moderate = 'Moderada',
  Hard = 'Difícil',
  Expert = 'Experto'
}

export interface Trail {
  id: string;
  name: string;
  location: string;
  distanceKm: number;
  elevationGainM: number;
  difficulty: Difficulty;
  rating: number; // 0 to 5
  imageUrl: string;
  description: string;
  tags: string[];
}

export interface Review {
  id: string;
  user: string;
  comment: string;
  rating: number;
  date: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}