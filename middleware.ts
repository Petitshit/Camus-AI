import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Exposes the current pathname as a request header so the root layout
// (a server component) can read it and set <html lang="..."> dynamically
// per route. Required because Next.js App Router's root layout is shared
// across all routes and doesn't have direct access to the URL otherwise.
export function middleware(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-pathname", request.nextUrl.pathname);

  return NextResponse.next({
    request: { headers: requestHeaders },
  });
}

// Run on every route except Next.js internals + static assets.
export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon|opengraph-image|.*\\..*).*)",
  ],
};
