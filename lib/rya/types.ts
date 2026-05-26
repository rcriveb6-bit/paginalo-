export type Categoria = "mujer" | "hombre" | "accesorios";

export interface Producto {
  id: string;
  nombre: string;
  precio: number;
  talla: string | null;
  categoria: Categoria | null;
  estado: string;
  fotos_url: string[] | null;
  stock: number;
  descripcion: string | null;
  medidas: string | null;
  destacado: boolean;
  activo: boolean;
  stripe_price_id: string | null;
  created_at: string;
}

export interface Evento {
  id: string;
  titulo: string;
  fecha: string;
  hora_inicio: string | null;
  hora_fin: string | null;
  ubicacion: string | null;
  descripcion: string | null;
  imagen_url: string | null;
  activo: boolean;
  created_at: string;
}

export interface Mensaje {
  id: string;
  nombre: string;
  email: string;
  mensaje: string;
  created_at: string;
}

export interface CartItem {
  producto: Producto;
  cantidad: number;
}
