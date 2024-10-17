import { NextRequest, NextResponse } from "next/server";
// import  { createProxyMiddleware } from "http-proxy-middleware";


export default async function middleware(req: NextRequest) {
  const token = req.cookies.get("token");

  
  if (!token) {
    console.log("token not there");
    return NextResponse.redirect(new URL("/auth", req.url));
  }
  const response = await fetch(
    "https://seepbackend.onrender.com/user/checkLogin",
    {
      method: "GET",
      mode: "cors",
      headers: {
        Authorization: JSON.stringify(token),
      },
      credentials: "include",
    }
  );
  console.log(response.status);
  if (response.status == 200) {
    return NextResponse.next();
  }
  return NextResponse.redirect(new URL("/auth", req.url));
}

export const config = {
  matcher: "/console/:path*",
};

