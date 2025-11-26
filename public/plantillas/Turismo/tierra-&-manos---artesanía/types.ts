export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
  isNew?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  text: string;
  role: string;
}

export interface NavItem {
  label: string;
  path: string;
}

export enum ButtonVariant {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  OUTLINE = 'outline',
  GHOST = 'ghost'
}