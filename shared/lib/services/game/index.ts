import { errorHandler } from "@/shared/lib/utils/error-handler";
import { serverApi } from "../../axios";
import { GameServiceTypes } from "./types";

export namespace GameService {
  const thisName = (serviceName: string) => {
    const namespaceName = "GameService";
    return `${namespaceName} > ${serviceName}`;
  };

  /**
   * GET /game/status
   */
  export const getGameStatus = () => {
    return errorHandler(
      thisName("getGameStatus"),
      serverApi.get<GameServiceTypes.GameStatusResult>("/game/status"),
    );
  };

  /**
   * POST /game/onboarding/finish
   */
  export const finishOnboarding = () => {
    return errorHandler(
      thisName("finishOnboarding"),
      serverApi.post<undefined>("/game/onboarding/finish"),
    );
  };
}
