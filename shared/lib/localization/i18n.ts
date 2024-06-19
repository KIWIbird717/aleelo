import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";
import { mediaApi } from "../axios";

export const locales = ["en", "ru"];

export default getRequestConfig(async ({ locale }) => {
  // Валидируем, что входящий параметр `locale` является допустимым
  if (!locales.includes(locale as any)) notFound();

  const localizationJson = await mediaApi.get(`/localisation/${locale}.json`);

  return {
    messages: localizationJson.data,
  };
});
