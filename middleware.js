import { NextResponse } from "next/server";

const SUPPORTED_LANGS = ["en", "bn", "hi", "es"];
const DEFAULT_LANG = "en";

export function middleware(request) {
  const { pathname } = request.nextUrl;

  // ❌ Ignore internal files & API
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  // ✅ If already language route → allow
  const isLangRoute = SUPPORTED_LANGS.some((lang) =>
    pathname.startsWith(`/${lang}`)
  );

  if (isLangRoute) {
    return NextResponse.next();
  }

  // 🌍 Detect browser language properly
  const acceptLang = request.headers.get("accept-language") || "";

  let detectedLang = DEFAULT_LANG;

  const browserLangs = acceptLang
    .split(",")
    .map((lang) => lang.split(";")[0].trim().slice(0, 2));

  for (const lang of browserLangs) {
    if (SUPPORTED_LANGS.includes(lang)) {
      detectedLang = lang;
      break;
    }
  }

  // 🔁 Redirect to detected language
  const url = request.nextUrl.clone();
  url.pathname = `/${detectedLang}${pathname}`;

  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next|favicon.ico|robots.txt|sitemap.xml).*)"],
};