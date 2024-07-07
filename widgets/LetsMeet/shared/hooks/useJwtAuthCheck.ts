import useRequest from "@/shared/lib/hooks/useRequest";
import { useRouter } from "next/router";
import { authorize } from "../../actions/authorize";
import { setCookie } from "cookies-next";
import { serverApi } from "@/shared/lib/axios";

const isServer = typeof window === "undefined";

/**
 * Получаем jwt токен для идентификации пользователя
 * и устанавливаем его в localStorage, чтобы в дальнейшем использовать для axios запросов.
 *
 * Поле этого отправляем уже авторизированный запрос (с установленными в хедерах Authorization в
 * interceptor serverApi: {@link serverApi}) и устанавливаем данные о пользователе в redux-store
 */
export const useJwtAuthCheck = () => {
  const router = useRouter();

  useRequest(async () => {
    router.prefetch("/signin"); // подгрузка бандла для страницы /signin

    if (!isServer) {
      // авторизуем пользователя
      const authRes = await authorize();

      localStorage.setItem("jwt", authRes.jwt);
      setCookie("jwt", authRes.jwt);

      // заносим в настройки пользователя дефолтные данные для юзера
      await serverApi.post("/settings", {
        name: "игрок",
        gender: "human",
        reportNotificationHour: 0,
        reportNotificationMinutes: 0,
      });
    }
  }, [isServer]);
};
