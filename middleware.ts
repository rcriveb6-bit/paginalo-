import { NextRequest, NextResponse } from "next/server";

const SESSION_TOKEN = process.env.ADMIN_SESSION_TOKEN ?? "rya-admin-session-token";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Protect all /rya/admin routes except /rya/admin/login
  if (pathname.startsWith("/rya/admin") && !pathname.startsWith("/rya/admin/login")) {
    const session = req.cookies.get("rya_admin_session");
    if (session?.value !== SESSION_TOKEN) {
      return NextResponse.redirect(new URL("/rya/admin/login", req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/rya/admin/:path*"],
};
