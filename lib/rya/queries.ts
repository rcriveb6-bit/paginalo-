import { supabase } from "./supabase";
import { Producto, Evento, Categoria } from "./types";
import { MOCK_PRODUCTS, MOCK_EVENTOS } from "./mock-data";

const useMock = !process.env.NEXT_PUBLIC_SUPABASE_URL;

export async function getProductos(filters?: {
  categoria?: Categoria;
  talla?: string;
  precioMin?: number;
  precioMax?: number;
}): Promise<Producto[]> {
  if (useMock) {
    let products = MOCK_PRODUCTS.filter((p) => p.activo && p.stock > 0);
    if (filters?.categoria) products = products.filter((p) => p.categoria === filters.categoria);
    if (filters?.talla) products = products.filter((p) => p.talla === filters.talla);
    if (filters?.precioMin) products = products.filter((p) => p.precio >= filters.precioMin!);
    if (filters?.precioMax) products = products.filter((p) => p.precio <= filters.precioMax!);
    return products;
  }

  let query = supabase
    .from("rya_products")
    .select("*")
    .eq("activo", true)
    .gt("stock", 0)
    .order("created_at", { ascending: false });

  if (filters?.categoria) query = query.eq("categoria", filters.categoria);
  if (filters?.talla) query = query.eq("talla", filters.talla);
  if (filters?.precioMin) query = query.gte("precio", filters.precioMin);
  if (filters?.precioMax) query = query.lte("precio", filters.precioMax);

  const { data, error } = await query;
  if (error) throw error;
  return data as Producto[];
}

export async function getProductoById(id: string): Promise<Producto | null> {
  if (useMock) {
    return MOCK_PRODUCTS.find((p) => p.id === id) ?? null;
  }

  const { data, error } = await supabase
    .from("rya_products")
    .select("*")
    .eq("id", id)
    .single();

  if (error) return null;
  return data as Producto;
}

export async function getProductosDestacados(): Promise<Producto[]> {
  if (useMock) {
    return MOCK_PRODUCTS.filter((p) => p.destacado && p.activo && p.stock > 0);
  }

  const { data, error } = await supabase
    .from("rya_products")
    .select("*")
    .eq("destacado", true)
    .eq("activo", true)
    .gt("stock", 0)
    .limit(4);

  if (error) throw error;
  return data as Producto[];
}

export async function getEventos(): Promise<Evento[]> {
  if (useMock) {
    return MOCK_EVENTOS.filter((e) => e.activo).sort(
      (a, b) => new Date(a.fecha).getTime() - new Date(b.fecha).getTime()
    );
  }

  const { data, error } = await supabase
    .from("rya_eventos")
    .select("*")
    .eq("activo", true)
    .gte("fecha", new Date().toISOString().split("T")[0])
    .order("fecha", { ascending: true });

  if (error) throw error;
  return data as Evento[];
}
