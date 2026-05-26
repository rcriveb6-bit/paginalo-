import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/rya/supabase";

const useMock = !process.env.NEXT_PUBLIC_SUPABASE_URL;

export async function POST(req: NextRequest) {
  const { nombre, email, mensaje } = await req.json();

  if (!nombre || !email || !mensaje) {
    return NextResponse.json({ error: "Campos incompletos" }, { status: 400 });
  }

  if (useMock) {
    console.log("[CONTACTO MOCK]", { nombre, email, mensaje });
    return NextResponse.json({ ok: true });
  }

  const { error } = await supabase
    .from("rya_mensajes")
    .insert([{ nombre, email, mensaje }]);

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ ok: true });
}
