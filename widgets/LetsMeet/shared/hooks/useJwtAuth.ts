import useRequest from "@/shared/lib/hooks/useRequest";
import { useRouter } from "next/navigation";
import { serverApi } from "@/shared/lib/axios";
import Cookies from "js-cookie";
import { useTelegram } from "@/shared/lib/hooks/useTelegram";
import { Logger } from "@/shared/lib/utils/logger/Logger";

type ResponseType = {
  jwt: string;
  refreshToken: string;
};

/**
 * Получаем jwt токен для идентификации пользователя
 * и устанавливаем его в localStorage, чтобы в дальнейшем использовать для axios запросов.
 *
 * Поле этого отправляем уже авторизированный запрос (с установленными в хедерах Authorization в
 * interceptor serverApi: {@link serverApi}) и устанавливаем данные о пользователе в redux-store
 */
export const useJwtAuth = () => {
  const logger = new Logger("useJwtAuth");
  const router = useRouter();
  const telegram = useTelegram();

  useRequest(async () => {
    if (!telegram?.initData) {
      return logger.error("telegram init data is undefined");
    }

    router.prefetch("/signin"); // подгрузка бандла для страницы /signin

    // авторизуем пользователя
    const headers = {
      accept: "*/*",
      "Authorization-tma": `tma ${telegram?.initData}`,
    };
    const authTgRes = await serverApi.post<ResponseType>("/auth/telegram", {}, { headers });

    localStorage.setItem("jwt", authTgRes.data.jwt);
    Cookies.set("JWT", "jwt-test");

    // заносим в настройки пользователя дефолтные данные для юзера
    await serverApi.post("/settings", {
      name: "игрок",
      gender: "human",
      reportNotificationHour: 0,
      reportNotificationMinutes: 0,
    });
  }, [telegram?.initData]);
};
