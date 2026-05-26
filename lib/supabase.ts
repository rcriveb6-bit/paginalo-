import { createClient } from '@supabase/supabase-js';
import type { LioraProduct, RyaProduct } from './types';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? '';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? '';

const isConfigured = Boolean(supabaseUrl && supabaseKey);
export const supabase = isConfigured ? createClient(supabaseUrl, supabaseKey) : null;

// Fallback data used when Supabase is not configured or tables are empty
const FALLBACK_LIORA_PRODUCTS: LioraProduct[] = [
  { id: 1, name: 'Vainilla & Canela', category: 'especial', note: 'Vainilla bourbon · Canela de Ceylán · Almendra', price: 28, stock: 10, stripe_price_id: null, image_url: null, bg_color: '#EDD9C0', wax_color: '#D4A96A', active: true, created_at: '' },
  { id: 2, name: 'Lavanda & Eucalipto', category: 'floral', note: 'Lavanda francesa · Eucalipto · Menta verde', price: 32, stock: 10, stripe_price_id: null, image_url: null, bg_color: '#DDE0EC', wax_color: '#9DA8CC', active: true, created_at: '' },
  { id: 3, name: 'Sándalo & Musk', category: 'especial', note: 'Sándalo cremoso · Musk blanco · Ámbar', price: 35, stock: 10, stripe_price_id: null, image_url: null, bg_color: '#E8DCCC', wax_color: '#C4956A', active: true, created_at: '' },
  { id: 4, name: 'Coco & Lima', category: 'frutal', note: 'Coco tostado · Lima zesty · Vainilla tropical', price: 30, stock: 10, stripe_price_id: null, image_url: null, bg_color: '#E8F0D8', wax_color: '#A8C070', active: true, created_at: '' },
];

const FALLBACK_RYA_PRODUCTS: RyaProduct[] = [
  { id: 1, name: 'Blazer Vintage Camel', description: null, price: 35, category: 'outerwear', image_url: '/rya/item-1.png', sold: false, active: true, created_at: '' },
  { id: 2, name: 'Conjunto Coord Café', description: null, price: 28, category: 'tops', image_url: '/rya/item-2.png', sold: false, active: true, created_at: '' },
  { id: 3, name: 'Vestido Midi Floral', description: null, price: 32, category: 'dresses', image_url: '/rya/item-3.png', sold: false, active: true, created_at: '' },
  { id: 4, name: 'Top Linen Crema', description: null, price: 18, category: 'tops', image_url: '/rya/item-4.png', sold: false, active: true, created_at: '' },
  { id: 5, name: 'Pantalón Wide Leg', description: null, price: 25, category: 'bottoms', image_url: '/rya/item-5.png', sold: false, active: true, created_at: '' },
  { id: 6, name: 'Chaqueta Denim', description: null, price: 30, category: 'outerwear', image_url: '/rya/item-6.png', sold: false, active: true, created_at: '' },
];

export async function getLioraProducts(): Promise<LioraProduct[]> {
  if (!supabase) return FALLBACK_LIORA_PRODUCTS;
  try {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .eq('active', true)
      .order('id');
    if (error || !data?.length) return FALLBACK_LIORA_PRODUCTS;
    return data as LioraProduct[];
  } catch {
    return FALLBACK_LIORA_PRODUCTS;
  }
}

export async function getRyaProducts(): Promise<RyaProduct[]> {
  if (!supabase) return FALLBACK_RYA_PRODUCTS;
  try {
    const { data, error } = await supabase
      .from('rya_products')
      .select('*')
      .eq('active', true)
      .order('id');
    if (error || !data?.length) return FALLBACK_RYA_PRODUCTS;
    return data as RyaProduct[];
  } catch {
    return FALLBACK_RYA_PRODUCTS;
  }
}
