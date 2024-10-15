import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { log } from "console";

// 1. Specify protected and public routes


export default async function middleware(req: NextRequest) {
  const token = req.cookies.get("token");
  if (!token) {
      console.log("token not there");
    return NextResponse.redirect(new URL("/auth/login", req.url));
  }
  const response = await fetch("https://seepbackend.onrender.com/user/checkLogin", {
    method: "GET",
    headers: {
      Authorization: JSON.stringify(token),
    },
    credentials: "include",
  });
  if (response.status == 200) {
    return NextResponse.next();
  }
  return NextResponse.redirect(new URL("/auth/login", req.url));
}

export const config = {
  matcher: "/console/:path*",
};
