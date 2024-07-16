import { errorHandler } from "@/shared/lib/utils/error-handler";
import { serverApi } from "../../axios";
import { GameServiceTypes } from "./types";

export namespace GameService {
  const thisName = (serviceName: string) => {
    const namespaceName = "GameService";
    return `${namespaceName} > ${serviceName}`;
  };

  export const getGameStatus = () => {
    return errorHandler(
      thisName("getGameStatus"),
      serverApi.get<GameServiceTypes.GameStatusResult>("/game/status"),
    );
  };
}
