import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;
    
    
    const userSession = request.cookies.get("userSession")?.value;

    const protectedRoutes = ["/dashboard", "/cart"];
    const isProtected = protectedRoutes.some(route => pathname.startsWith(route));

    if (isProtected && !userSession) {
        return NextResponse.redirect(new URL('/login', request.url))
    }

    return NextResponse.next()
}

export const config = {
    matcher: [
        "/dashboard/:path*",
        "/cart/:path*"
        ],
}