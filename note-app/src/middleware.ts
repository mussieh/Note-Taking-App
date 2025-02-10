import { NextResponse } from "next/server";
import { auth } from "@/auth"; // Assuming you have auth helper for NextAuth
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;
    const authData = await auth();
    const isLoggedIn = !!authData?.user;

    // Protect /notes, /archived, /settings pages
    if (
        ["/notes", "/settings"].some((path) => pathname.startsWith(path)) &&
        !isLoggedIn
    ) {
        // Redirect to login page if not authenticated
        return NextResponse.redirect(new URL("/login", request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico, sitemap.xml, robots.txt (metadata files)
         */
        "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
    ],
};
