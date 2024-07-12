import createMiddleware from "next-intl/middleware";
import { locales } from "./shared/lib/localization/i18n";

export default createMiddleware({
  // Список всех поддерживаемых локалей
  locales: locales,

  // По умолчанию используется английский
  defaultLocale: "en",
});

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(ru|en)/:path*"],
};
