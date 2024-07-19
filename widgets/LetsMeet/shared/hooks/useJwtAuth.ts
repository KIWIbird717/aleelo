import useRequest from "@/shared/lib/hooks/useRequest";
import { useRouter } from "next/navigation";
import { serverApi } from "@/shared/lib/axios";
import { useTelegram } from "@/shared/lib/hooks/useTelegram";
import { Logger } from "@/shared/lib/utils/logger/Logger";
import { UserService } from "@/shared/lib/services/user";
import { UserServiceTypes } from "@/shared/lib/services/user/types";

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
    const authTgRes = await UserService.authTelegram({
      accept: "*/*",
      "Authorization-tma": `tma ${telegram?.initData}`,
    });

    // устанавливаем jwt в localStorage и cookie
    localStorage.setItem("jwt", authTgRes.data.jwt);

    // заносим в настройки пользователя дефолтные данные для юзера
    await UserService.updateSettings({
      name: "игрок",
      gender: UserServiceTypes.Gender.human,
      reportNotificationHour: 0,
      reportNotificationMinutes: 0,
    });
  }, [telegram?.initData]);
};
