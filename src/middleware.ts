import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { FEATURES } from "@/config/features";

const HOME = process.env.NEXT_PUBLIC_BASE_PATH || "/";

const GATED_ROUTES: Array<{ pattern: RegExp; enabled: boolean }> = [
  { pattern: /^\/info(\/|$)/, enabled: FEATURES.SHOW_EVENT_INFO },
  { pattern: /^\/committees(\/|$)/, enabled: FEATURES.SHOW_COMMITTEES },
  { pattern: /^\/staff(\/|$)/, enabled: FEATURES.SHOW_STAFF },
];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const blocked = GATED_ROUTES.some(
    (route) => route.pattern.test(pathname) && !route.enabled
  );

  if (blocked) {
    return NextResponse.redirect(new URL(HOME, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/info/:path*", "/committees/:path*", "/staff/:path*"],
};
