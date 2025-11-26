export enum Difficulty {
  EASY = 'Fácil',
  MODERATE = 'Moderado',
  HARD = 'Difícil',
  EXPERT = 'Experto'
}

export interface Trail {
  id: string;
  title: string;
  location: string;
  difficulty: Difficulty;
  distance: number; // km
  duration: string;
  elevationGain: number; // meters
  imageUrl: string;
  description: string;
  rating: number;
}

export interface NavItem {
  label: string;
  path: string;
}