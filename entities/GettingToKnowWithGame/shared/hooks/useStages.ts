import { serverApi } from "@/shared/lib/axios";
import { useAppDispatch } from "@/shared/lib/redux-store/hooks";
import { UserSlice } from "@/shared/lib/redux-store/slices/user-slice/userSlice";
import { Logger } from "@/shared/lib/utils/logger/Logger";
import { serverSideRedirect } from "@/shared/lib/utils/serverSideRedirect";
import { useState } from "react";

export const useStages = (chatPageRoute: string) => {
  const logger = new Logger("useStages");
  const dispatch = useAppDispatch();
  const [stage, setStage] = useState(0);

  const finishOnboarding = async () => {
    try {
      await serverApi.put("game/onboarding/finish");

      // создание игры
      await serverApi.post("/game-chat/create-game");

      // получаем и устанавливаем пользователя
      const myProfile = await serverApi.get("/auth/profile");
      dispatch(UserSlice.setProfile(myProfile.data));

      return serverSideRedirect(chatPageRoute);
    } catch (error) {
      logger.error(`Error in [${finishOnboarding.name}]`, error);
    }
  };

  const handleStageChange = () => {
    if (stage === 2) {
      return finishOnboarding();
    }

    setStage((state) => {
      if (state > 1) return state;
      return (state += 1);
    });
  };

  return { stage, handleStageChange };
};
