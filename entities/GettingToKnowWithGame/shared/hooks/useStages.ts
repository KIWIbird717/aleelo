import { useCurrentGame } from "@/shared/lib/hooks/useCurrentGame";
import { useAppDispatch } from "@/shared/lib/redux-store/hooks";
import { UserSlice } from "@/shared/lib/redux-store/slices/user-slice/userSlice";
import { Logger } from "@/shared/lib/utils/logger/Logger";
import { useCallback, useEffect, useState } from "react";
import { getCurrentGame } from "../func/game";
import { UserService } from "@/shared/lib/services/user";
import { GameService } from "@/shared/lib/services/game";
import { PracticeService } from "@/shared/lib/services/practice";

export const useStages = (chatPageRoute: string) => {
  const dispatch = useAppDispatch();
  const currentGame = useCurrentGame();
  const [stage, setStage] = useState(0);

  const finishOnboarding = useCallback(async () => {
    const logger = new Logger("useStages");
    try {
      await GameService.finishOnboarding();
      // создание игры
      const createdGame = await getCurrentGame();

      if (!createdGame?.chatId) return;

      const { data } = await PracticeService.getPractices(createdGame?.id, {
        limit: 50,
        offset: 0,
      });

      const cellOne = data.find((item) => item.cell === 1);

      if (createdGame) {
        currentGame.set({
          id: createdGame.id,
          chatId: createdGame.chatId || "",
          practiceId: cellOne?.id!,
        });
      }

      // получаем и устанавливаем пользователя
      const myProfile = await UserService.profile();
      dispatch(UserSlice.setProfile(myProfile.data));

      // return serverSideRedirect(chatPageRoute);
    } catch (error) {
      logger.error(`Error in ["finishOnboarding"]`, error);
    }
  }, [currentGame, dispatch]);

  const handleStageChange = () => {
    if (stage === 1) {
      finishOnboarding();
    }

    setStage((state) => {
      if (state > 2) return state;
      return (state += 1);
    });
  };

  return { stage, handleStageChange };
};
