import createMiddleware from "next-intl/middleware";
import { locales } from "./i18n";

export default createMiddleware({
  // Список всех поддерживаемых локалей
  locales: locales,

  // По умолчанию используется английский
  defaultLocale: "en",

  localeDetection: false,
});

export { default as defaultNextAut } from "next-auth/middleware";

export const config = {
  // Сопоставляем только интернационализированные пути
  matcher: ["/", `/(ru|en)/:path*`],
};
