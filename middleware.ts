import createMiddleware from "next-intl/middleware";
import { locales } from "./shared/lib/localization/i18n";
import { NextRequest, NextResponse } from "next/server";
import { Logger } from "./shared/lib/utils/logger/Logger";
import { ResponseCookie } from "next/dist/compiled/@edge-runtime/cookies";

const handleApiCookiesSet = async (request: NextRequest, response: NextResponse<unknown>) => {
  const logger = new Logger("handleApiCookiesSet");
  const isApiCookiesReq =
    request.method === "POST" && request.nextUrl.pathname === "/api/set-cookies";

  if (!isApiCookiesReq) return;

  const data = await request.json();

  logger.debug({ data, existingCookies: response.cookies.getAll() });

  data.cookies.forEach((cookie: ResponseCookie) => {
    logger.debug({ cookie });
    if (!cookie.name || !cookie.value) return;
    response.cookies.set(cookie.name, cookie.value, {
      path: cookie.path || "/",
      // httpOnly: cookie.httpOnly || true,
      // secure: cookie.secure || process.env.NODE_ENV === "production",
      secure: false,
      sameSite: cookie.sameSite || "lax",
      maxAge: 31536000,
      expires: new Date(new Date().setFullYear(2025)),
    });
    logger.debug({ setCookies: response.cookies.getAll() });
  });

  return response;
};

export default async function middleware(request: NextRequest) {
  const logger = new Logger("middleware");

  logger.debug(request.nextUrl.domainLocale);

  // Step 1: Use the incoming request (example)
  const defaultLocale = request.headers.get("x-custom-locale") || "en";

  // Step 2: Create and call the next-intl middleware (example)
  const handleI18nRouting = createMiddleware({
    locales,
    defaultLocale,
  });
  const response = handleI18nRouting(request);

  // modify response if it is /api/set-cookie POST req
  const isApiCookiesReq =
    request.method === "POST" && request.nextUrl.pathname === "/api/set-cookies";
  if (isApiCookiesReq) {
    return await handleApiCookiesSet(request, response);
  }

  // Step 3: Alter the response (example)
  response.headers.set("x-custom-locale", defaultLocale);

  return response;
}

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(ru|en)/:path*", "/api/set-cookies"],
};
