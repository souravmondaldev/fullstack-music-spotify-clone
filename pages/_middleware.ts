import { NextResponse } from "next/server";

const signedInPages = ["/", "/library", "/playlist"];

export default function middleware(req) {
  if (signedInPages.find((path) => path === req.nextUrl.pathname)) {
    const token = req.cookies.SOURAV_ACCESS_TOKEN;
    const { origin } = req.nextUrl;

    if (!token) {
      return NextResponse.redirect(`${origin}/signin`);
    }
  }
}
