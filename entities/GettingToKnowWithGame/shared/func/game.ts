import { Logger } from "@/shared/lib/utils/logger/Logger";
import { GameService } from "../../../../shared/lib/services/game";
import { ChatService } from "@/shared/lib/services/chat";

export const getCurrentGame = async (): Promise<{ id: string } | undefined> => {
  const logger = new Logger("getCurrentGame");
  try {
    const gameStatusResponse = await GameService.getGameStatus();
    return { id: gameStatusResponse.data.game.id };
  } catch (error) {
    logger.warn("GET /game/status request was not successful");

    try {
      const createdGameResponse = await ChatService.createGame();
      return { id: createdGameResponse.data.id };
    } catch (error) {
      logger.error("Can not finish game creation");
    }
  }
};
