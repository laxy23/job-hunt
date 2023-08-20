import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { useSession } from "next-auth/react";
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const isLoggedIn = request.cookies.has("next-auth.session-token");

  if (!isLoggedIn) {
    return NextResponse.redirect(new URL("/sign-in", request.url));
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/profile", "/create"],
};
