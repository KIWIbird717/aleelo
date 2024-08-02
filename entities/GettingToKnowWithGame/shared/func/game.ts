import { Logger } from "@/shared/lib/utils/logger/Logger";
import { GameService } from "../../../../shared/lib/services/game";
import { ChatService } from "@/shared/lib/services/chat";
import { IGame } from "@/shared/lib/types/game";

export const getCurrentGame = async (): Promise<{ id: string; chatId?: string } | undefined> => {
  const logger = new Logger("getCurrentGame");

  try {
    // если нудно получить предыдущие данные
    const gameStatusResponse = await GameService.getGameStatus();
    return { id: gameStatusResponse.data.game.id, chatId: gameStatusResponse.data.game.chat.id };
  } catch (error) {
    logger.warn("GET /game/status request was not successful");

    try {
      // если заходит в первый раз
      const createdGameResponse = await ChatService.createGame();
      await GameService.makeStep();
      return { id: createdGameResponse.data.id, chatId: createdGameResponse.data.chat?.id };
    } catch (error) {
      logger.error("Can not finish game creation");
    }
  }
};
