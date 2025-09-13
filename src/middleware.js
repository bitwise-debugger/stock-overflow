import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";

export async function middleware(request = new Request) {

    console.log("Inside middleware");

    const cookieStore = await cookies();
    const token = cookieStore.get('authjs.session-token')
    if (!token) {
        return NextResponse.redirect(new URL('/auth/login', request.nextUrl.origin));
    } else {
        if (request.nextUrl.pathname == '/auth/login') {
            return NextResponse.redirect(new URL('/', request.nextUrl.origin));
        }
    }
}

export const config = {
    matcher: ['/']
}