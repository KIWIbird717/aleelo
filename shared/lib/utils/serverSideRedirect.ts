"use server";

import { ArgumentTypes } from "../types/utility-types";
import { redirect as nextRedirect } from "next/navigation";

// export namespace Bootstrap {
/**
 * Переадресация пользователя
 *
 * Используется переодресация с полной перезагрузкой страницы.
 * Неоюходимо для полного обновления данных используемых в приложении.
 */
export const serverSideRedirect = async (...args: ArgumentTypes<typeof nextRedirect>) => {
  nextRedirect(...args);
};
