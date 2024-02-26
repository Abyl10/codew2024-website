import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["en", "ru", "kz"],
  defaultLocale: "kz",
});

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
