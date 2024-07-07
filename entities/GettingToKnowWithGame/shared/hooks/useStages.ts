import { serverApi } from "@/shared/lib/axios";
import { useAppDispatch } from "@/shared/lib/redux-store/hooks";
import { UserSlice } from "@/shared/lib/redux-store/slices/user-slice/userSlice";
import { Logger } from "@/shared/lib/utils/logger/Logger";
import { useCallback, useState } from "react";

const saveGameDataToLocalStorage = () => {
  // TODO: реализовать сохранение данных об игре в localStorage
};

export const useStages = (chatPageRoute: string) => {
  const dispatch = useAppDispatch();
  const [stage, setStage] = useState(0);

  const finishOnboarding = useCallback(async () => {
    const logger = new Logger("useStages");
    try {
      await serverApi.put("game/onboarding/finish");

      // создание игры
      await serverApi.post("/game-chat/create-game");

      // получаем и устанавливаем пользователя
      const myProfile = await serverApi.get("/auth/profile");
      dispatch(UserSlice.setProfile(myProfile.data));

      // return serverSideRedirect(chatPageRoute);
    } catch (error) {
      logger.error(`Error in ["finishOnboarding"]`, error);
    }
  }, [chatPageRoute, dispatch]);

  const handleStageChange = () => {
    if (stage === 1) {
      finishOnboarding();
    }

    setStage((state) => {
      if (state > 1) return state;
      return (state += 1);
    });
  };

  return { stage, handleStageChange };
};
