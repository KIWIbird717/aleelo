import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";
import { mediaApi } from "./shared/lib/axios";

// Может быть импортирован из общей конфигурации
export const locales = ["en", "ru"];

export default getRequestConfig(async ({ locale }) => {
  // Валидируем, что входящий параметр `locale` является допустимым
  if (!locales.includes(locale as any)) notFound();

  const localisationJson = await mediaApi.get(`/localisation/${locale}.json`);
  return {
    messages: localisationJson.data,
  };
});
