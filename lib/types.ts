export interface LioraProduct {
  id: string;
  name: string;
  description: string | null;
  price: number;
  category: 'permanente' | 'temporada';
  image_url: string | null;
  aroma_notes: string | null;
  featured: boolean;
  created_at: string;
}

export interface RyaService {
  id: string;
  title: string;
  description: string | null;
  icon: string | null;
  order_index: number;
}

export interface RyaTestimonial {
  id: string;
  client_name: string;
  text: string;
  rating: number;
  avatar_url: string | null;
}

export interface SiteSetting {
  id: string;
  brand: string;
  key: string;
  value: string | null;
}
