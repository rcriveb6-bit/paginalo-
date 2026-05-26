// Matches actual Supabase "products" table schema
export interface LioraProduct {
  id: number;
  name: string;
  category: 'frutal' | 'floral' | 'fresco' | 'especial';
  note: string | null;
  price: number;
  stock: number;
  stripe_price_id: string | null;
  image_url: string | null;
  bg_color: string | null;
  wax_color: string | null;
  active: boolean;
  created_at: string;
}

export interface RyaService {
  id: number;
  title: string;
  description: string | null;
  icon: string | null;
  order_index: number;
  created_at: string;
}

export interface RyaTestimonial {
  id: number;
  client_name: string;
  text: string;
  rating: number;
  avatar_url: string | null;
  created_at: string;
}

export interface SiteSetting {
  id: number;
  brand: string;
  key: string;
  value: string | null;
  created_at: string;
}
