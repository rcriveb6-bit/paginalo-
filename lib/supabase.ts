import { createClient } from '@supabase/supabase-js';
import type { LioraProduct, RyaService, RyaTestimonial } from './types';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? '';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? '';

const isConfigured = Boolean(supabaseUrl && supabaseKey);
export const supabase = isConfigured
  ? createClient(supabaseUrl, supabaseKey)
  : null;

// Fallback data used when Supabase is not configured
const FALLBACK_LIORA_PRODUCTS: LioraProduct[] = [
  { id: '1', name: 'Vainilla & Canela', description: null, price: 28, category: 'permanente', image_url: null, aroma_notes: 'Vainilla bourbon · Canela de Ceylán · Almendra', featured: true, created_at: '' },
  { id: '2', name: 'Lavanda & Eucalipto', description: null, price: 32, category: 'permanente', image_url: null, aroma_notes: 'Lavanda francesa · Eucalipto · Menta verde', featured: true, created_at: '' },
  { id: '3', name: 'Sándalo & Musk', description: null, price: 35, category: 'permanente', image_url: null, aroma_notes: 'Sándalo cremoso · Musk blanco · Ámbar', featured: true, created_at: '' },
  { id: '4', name: 'Coco & Lima', description: null, price: 30, category: 'permanente', image_url: null, aroma_notes: 'Coco tostado · Lima zesty · Vainilla tropical', featured: true, created_at: '' },
];

const FALLBACK_RYA_SERVICES: RyaService[] = [
  { id: '1', title: 'Business Strategy', description: 'Planificación estratégica para escalar tu negocio con métricas claras y resultados medibles.', icon: 'chart', order_index: 1 },
  { id: '2', title: 'Branding Premium', description: 'Identidad de marca que comunica excelencia y atrae al cliente ideal desde el primer contacto.', icon: 'diamond', order_index: 2 },
  { id: '3', title: 'Marketing Digital', description: 'Estrategias de crecimiento omnicanal: SEO, paid media y content marketing de alto impacto.', icon: 'megaphone', order_index: 3 },
  { id: '4', title: 'Coaching Empresarial', description: 'Acompañamiento ejecutivo para líderes que quieren transformar su visión en resultados concretos.', icon: 'target', order_index: 4 },
];

const FALLBACK_RYA_TESTIMONIALS: RyaTestimonial[] = [
  { id: '1', client_name: 'María González, CEO TechMiami', text: 'RYA International transformó completamente nuestra estrategia. Crecimos 40% en 6 meses.', rating: 5, avatar_url: null },
  { id: '2', client_name: 'Carlos Rodríguez, Fundador StartupPR', text: 'El coaching empresarial fue un punto de inflexión para nuestro equipo. Altamente recomendado.', rating: 5, avatar_url: null },
  { id: '3', client_name: 'Ana Martínez, Directora Creatividad', text: 'Su trabajo en branding nos posicionó como líderes en el mercado latinoamericano.', rating: 5, avatar_url: null },
];

export async function getLioraProducts(): Promise<LioraProduct[]> {
  if (!supabase) return FALLBACK_LIORA_PRODUCTS;
  try {
    const { data, error } = await supabase
      .from('liora_products')
      .select('*')
      .eq('featured', true)
      .order('created_at');
    if (error || !data?.length) return FALLBACK_LIORA_PRODUCTS;
    return data as LioraProduct[];
  } catch {
    return FALLBACK_LIORA_PRODUCTS;
  }
}

export async function getRyaServices(): Promise<RyaService[]> {
  if (!supabase) return FALLBACK_RYA_SERVICES;
  try {
    const { data, error } = await supabase
      .from('rya_services')
      .select('*')
      .order('order_index');
    if (error || !data?.length) return FALLBACK_RYA_SERVICES;
    return data as RyaService[];
  } catch {
    return FALLBACK_RYA_SERVICES;
  }
}

export async function getRyaTestimonials(): Promise<RyaTestimonial[]> {
  if (!supabase) return FALLBACK_RYA_TESTIMONIALS;
  try {
    const { data, error } = await supabase
      .from('rya_testimonials')
      .select('*');
    if (error || !data?.length) return FALLBACK_RYA_TESTIMONIALS;
    return data as RyaTestimonial[];
  } catch {
    return FALLBACK_RYA_TESTIMONIALS;
  }
}
