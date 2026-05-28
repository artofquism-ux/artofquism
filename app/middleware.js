import { NextResponse } from "next/server";

export function middleware(request) {
  const { pathname } = request.nextUrl;

  // ignore static files
  if (
    pathname.startsWith("/_next") ||
    pathname.includes(".") ||
    pathname.startsWith("/api")
  ) {
    return;
  }

  // already has lang
  if (
    pathname.startsWith("/en") ||
    pathname.startsWith("/bn") ||
    pathname.startsWith("/hi")
  ) {
    return;
  }

    // 🍪 check cookie first
  const cookieLang = request.cookies.get("lang")?.value;

  let locale = "en";

  if (cookieLang) {
    locale = cookieLang;
  } else {

    
  // 🌍 detect country (optional)
  const country = request.geo?.country;

  let locale = "en"; // default

  if (country === "BD") locale = "bn";
  else if (country === "IN") locale = "en"; // or "hi"

  // 🌐 fallback: browser language
  const langHeader = request.headers.get("accept-language");

  if (langHeader) {
    if (langHeader.includes("bn")) locale = "bn";
    else if (langHeader.includes("hi")) locale = "hi";
  }

  // 👉 redirect
  return NextResponse.redirect(
    new URL(`/${locale}${pathname}`, request.url)
  );
}

export const config = {
  matcher: ["/((?!_next|favicon.ico).*)"],
};


