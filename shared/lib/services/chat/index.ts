import { serverApi } from "../../axios";
import { errorHandler } from "../../utils/error-handler";

export namespace ChatService {
  const thisName = (serviceName: string) => {
    const namespaceName = "ChatService";
    return `${namespaceName} > ${serviceName}`;
  };

  /**
   * POST /game-chat/create-game
   */
  export const createGame = () => {
    return errorHandler(thisName("createGame"), serverApi.post("/game-chat/create-game"));
  };
}
