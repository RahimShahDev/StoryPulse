// middleware.js
import { NextResponse } from "next/server";

export function middleware(request) {
    // Check if the user has a token in cookies
    const token = request.cookies.get("token")?.value;

    // If the user is trying to access the login page but is already logged in, redirect to home
    if (token && request.nextUrl.pathname === "/login") {
        return NextResponse.redirect(new URL("/", request.url));
    }

    // If the user is trying to access the home page but is not logged in, redirect to login
    if (!token && request.nextUrl.pathname === "/") {
        return NextResponse.redirect(new URL("/login", request.url));
    }

    // Allow the request to proceed if no conditions are met
    return NextResponse.next();
}

// Specify the paths where the middleware should run
// export const config = {
//     : ["/:path*", "/login"], // Apply middleware to these paths
// };
