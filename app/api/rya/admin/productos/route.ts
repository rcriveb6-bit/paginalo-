import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { supabase } from "@/lib/rya/supabase";
const SESSION_TOKEN = process.env.ADMIN_SESSION_TOKEN ?? "rya-admin-session-token";
const useMock = !process.env.NEXT_PUBLIC_SUPABASE_URL;

async function checkAuth(_req: NextRequest) {
  const cookieStore = await cookies();
  const session = cookieStore.get("rya_admin_session");
  return session?.value === SESSION_TOKEN;
}

export async function POST(req: NextRequest) {
  if (!(await checkAuth(req))) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const body = await req.json();

  if (useMock) {
    return NextResponse.json({ ok: true, id: "mock-" + Date.now() });
  }

  const { data, error } = await supabase.from("rya_products").insert([body]).select().single();
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data);
}

export async function PUT(req: NextRequest) {
  if (!(await checkAuth(req))) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  if (!id) return NextResponse.json({ error: "ID required" }, { status: 400 });

  const body = await req.json();

  if (useMock) return NextResponse.json({ ok: true });

  const { data, error } = await supabase.from("rya_products").update(body).eq("id", id).select().single();
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data);
}

export async function DELETE(req: NextRequest) {
  if (!(await checkAuth(req))) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  if (!id) return NextResponse.json({ error: "ID required" }, { status: 400 });

  if (useMock) return NextResponse.json({ ok: true });

  const { error } = await supabase.from("rya_products").update({ activo: false }).eq("id", id);
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ ok: true });
}
