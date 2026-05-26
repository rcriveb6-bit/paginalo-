import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { createClient } from "@supabase/supabase-js";

const SESSION_TOKEN = process.env.ADMIN_SESSION_TOKEN ?? "rya-admin-session-token";
const useMock = !process.env.NEXT_PUBLIC_SUPABASE_URL;

async function checkAuth() {
  const cookieStore = await cookies();
  const session = cookieStore.get("rya_admin_session");
  return session?.value === SESSION_TOKEN;
}

export async function POST(req: NextRequest) {
  if (!(await checkAuth())) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  if (useMock) {
    return NextResponse.json({ url: null, message: "Mock mode: configure Supabase to upload photos" });
  }

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );

  const formData = await req.formData();
  const file = formData.get("file") as File;

  if (!file) return NextResponse.json({ error: "No file" }, { status: 400 });

  const ext = file.name.split(".").pop();
  const fileName = `${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;

  const buffer = await file.arrayBuffer();
  const { error } = await supabase.storage
    .from("rya-products")
    .upload(fileName, buffer, { contentType: file.type, upsert: false });

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  const { data } = supabase.storage.from("rya-products").getPublicUrl(fileName);
  return NextResponse.json({ url: data.publicUrl });
}
