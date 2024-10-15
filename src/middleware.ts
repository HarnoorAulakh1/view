import { NextRequest, NextResponse } from "next/server";

export default async function middleware(req: NextRequest) {
  const token = req.cookies.get("token");

  
  if (!token) {
    console.log("token not there");
    return NextResponse.redirect(new URL("/auth", req.url));
  }
  const response = await fetch(
    "/user/checkLogin",
    {
      method: "GET",
      headers: {
        Authorization: JSON.stringify(token),
      },
      credentials: "include",
    }
  );
  if (response.status == 200) {
    return NextResponse.next();
  }
  return NextResponse.redirect(new URL("/auth", req.url));
}

export const config = {
  matcher: "/console/:path*",
};
