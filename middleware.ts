
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { createServerClient } from "@supabase/ssr";

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const pathname = req.nextUrl.pathname;

  console.log("=== MIDDLEWARE DEBUG ===");
  console.log("Pathname:", pathname);

  // Create Supabase client for middleware
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return req.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) => {
            req.cookies.set(name, value);
            res.cookies.set(name, value, options);
          });
        },
      },
    }
  );

  // Refresh session if expired
  const {
    data: { session },
    error,
  } = await supabase.auth.getSession();

  console.log("Session:", session ? "exists" : "none");
  console.log("Session error:", error);

  // ✅ Allow auth pages
  if (pathname.startsWith("/auth")) {
    console.log("Allowing auth route");
    return res;
  }

  // 🔒 Protect dashboard routes
  if (pathname.startsWith("/dashboard") || pathname.startsWith("/admin")) {
    if (!session) {
      console.log("No session, redirecting to signin");
      const redirectUrl = new URL("/auth/signin", req.url);
      redirectUrl.searchParams.set("redirectedFrom", pathname);
      return NextResponse.redirect(redirectUrl);
    }
    console.log("Session valid, allowing access to:", pathname);
  }

  console.log("Allowing access to:", pathname);
  return res;
}

export const config = {
  matcher: ["/dashboard/:path*", "/admin/:path*", "/auth/:path*"],
};
