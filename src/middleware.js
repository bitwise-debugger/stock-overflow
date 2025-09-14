import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";
import { getToken } from 'next-auth/jwt'
export async function middleware(request = new NextRequest) {
    const { pathname } = request.nextUrl;
    const cookieStore = await cookies();
    const cookieToken = cookieStore.get('authjs.session-token')
    if (!cookieToken)
        return NextResponse.redirect(new URL('/auth/login', request.nextUrl.origin));

    const token = await getToken({
        req: request, secret: process.env.NEXTAUTH_SECRET
    });
    if (pathname == '/auth/login') {
        return NextResponse.redirect(new URL(`/${token.role}/dashboard`, request.nextUrl.origin));
    }


    if (pathname.startsWith('/admin') && token.role !== 'admin') {
        return handleForbiddenRequest(request.nextUrl.origin);
    }
    if (pathname.startsWith('/manager') && token.role !== 'manager') {
        return handleForbiddenRequest(request.nextUrl.origin);
    }
    if (pathname.startsWith('/staff') && token.role !== 'staff') {
        return handleForbiddenRequest(request.nextUrl.origin);
    }

}

export const config = {
    matcher: ['/', '/admin/:path*', '/staff/:path*', '/manager/:path*',]
}

function handleForbiddenRequest(origin) {
    return NextResponse.rewrite(new URL('/forbidden', origin));
}