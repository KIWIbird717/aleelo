import { errorHandler } from "@/shared/lib/utils/error-handler";
import { serverApi } from "../../axios";
import { GameServiceTypes } from "./types";
import { IGameStatistics } from "@/shared/lib/types/game";

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
  * GET /game/general-statistics
  */
  export const getGeneralStatistics = () => {
    return errorHandler(
      thisName("getGeneralStatistics"),
      serverApi.get<IGameStatistics>("/game/general-statistics"),
    );
  };

  /**
   * POST /game/onboarding/finish
   */
  export const finishOnboarding = () => {
    return errorHandler(
      thisName("finishOnboarding"),
      serverApi.put<undefined>("/game/onboarding/finish"),
    );
  };

  export const makeStep = () => {
    return errorHandler(thisName("makeStep"), serverApi.post("game/make-step"));
  };

  export const getPractices = (params: { limit?: number; offset?: number; gameId?: string }) => {
    return errorHandler(thisName("getPractices"), serverApi.get("game/practices", { params }));
  };
}
