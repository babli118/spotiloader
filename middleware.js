import createMiddleware from "next-intl/middleware";
import { localePrefix, locales } from "./navigation";

export default createMiddleware({
  locales,
  localePrefix,
  defaultLocale: "en",
});

// only applies this middleware to files in the app directory
export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap|robots.txt|manifest.webmanifest|icon-192x192.png|icon-256x256.png|icon-512x512.png|icon-384x384.png).*)/",
  ],
};
