"use client";

import { LetsMeetDescription } from "./shared/layout/LetsMeetDescription";
import { ParalaxBackground } from "./shared/layout/ParalaxBackground";
import { usePreventOnSwipeWindowClose } from "../../shared/lib/hooks/usePreventSwipeClose";
import { Button } from "../../shared/ui/Button/Button";
import { ButtonLink } from "../../shared/ui/ButtonLink";
import { useState } from "react";
import { serverSideRedirect } from "../../shared/lib/utils/serverSideRedirect";
import useRequest from "../../shared/lib/hooks/useRequest";
import { authorize } from "./actions/authorize";
import { useAppDispatch } from "../../shared/lib/redux-store/hooks";
import { UserSlice } from "../../shared/lib/redux-store/slices/user-slice/userSlice";
import { serverApi } from "../../shared/lib/axios";
import { useRouter } from "next/navigation";
import { setCookie } from "cookies-next";

const isServer = typeof window === "undefined";

export const LetsMeetWidget = () => {
  usePreventOnSwipeWindowClose(true);
  const router = useRouter();

  const [stage, setStage] = useState(0);
  const isLastStage = stage === 2;

  const handleClick = () => {
    if (isLastStage) {
      return serverSideRedirect("signin");
    }
    setStage((state) => {
      if (state > 1) return state;
      return (state += 1);
    });
  };

  /**
   * Получаем jwt токен для идентификации пользователя
   * и устанавливаем его в localStorage, чтобы в дальнейшем использовать для axios запросов.
   *
   * Поле этого отправляем уже авторизированный запрос (с установленными в хедерах Authorization в
   * interceptor serverApi: {@link serverApi}) и устанавливаем данные о пользователе в redux-store
   */
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

  return (
    <div className="flex h-screen flex-col justify-between overflow-hidden">
      <ParalaxBackground stage={stage} />
      <LetsMeetDescription className="w-fit" stage={stage} />
      <section className="p-5">
        <div className="flex flex-col items-center gap-3">
          {isLastStage ? (
            <ButtonLink variant="yellow" href="signin">
              Начнем!
            </ButtonLink>
          ) : (
            <Button onClick={handleClick}>Далее</Button>
          )}
        </div>
      </section>
    </div>
  );
};
