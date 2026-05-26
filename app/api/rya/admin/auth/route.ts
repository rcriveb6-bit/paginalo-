import { NextRequest, NextResponse } from "next/server";

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD ?? "rya2025";
const SESSION_TOKEN = process.env.ADMIN_SESSION_TOKEN ?? "rya-admin-session-token";

export async function POST(req: NextRequest) {
  const contentType = req.headers.get("content-type") ?? "";

  // Handle JSON login
  if (contentType.includes("application/json")) {
    const body = await req.json();

    if (body.password === ADMIN_PASSWORD) {
      const res = NextResponse.json({ ok: true });
      res.cookies.set("rya_admin_session", SESSION_TOKEN, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: 60 * 60 * 24 * 7, // 7 days
        path: "/",
      });
      return res;
    }
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  // Handle form logout
  const formData = await req.formData();
  const action = formData.get("action");
  if (action === "logout") {
    const res = NextResponse.redirect(new URL("/rya/admin/login", req.url));
    res.cookies.delete("rya_admin_session");
    return res;
  }

  return NextResponse.json({ error: "Bad request" }, { status: 400 });
}
