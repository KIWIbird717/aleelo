import { Logger } from "../utils/logger/Logger";

const CURRENT_GAME_STORAGE_KEY = "CURRENT_GAME";

// shema
export type CurrentGameType = {
  id: string;
  chatId: string
  practiceId: string
};

/**
 * Данные о текущей игре, хранящиеся в localStorage
 *
 * @example
 *
 * const currentGame = useCurrentGame()
 *
 * currentGame.get() //
 */
export const useCurrentGame = () => {
  const logger = new Logger("useCurrentGame");

  // перезаписать
  const set = (currentGame: CurrentGameType) => {
    return localStorage.setItem(CURRENT_GAME_STORAGE_KEY, JSON.stringify(currentGame));
  };

  // обновить и оставить предыдущие значения
  const update = (updates: Partial<CurrentGameType>) => {
    if (has()) {
      const currentGame = get();
      if (!currentGame) return;

      return set({ ...currentGame, ...updates });
    }

    logger.error(
      "Can not update currentGame. State for key: ${CURRENT_GAME_STORAGE_KEY} in local storage is empty",
    );
    throw new Error(
      `[update] Can not update currentGame. State for key: ${CURRENT_GAME_STORAGE_KEY} in local storage is empty`,
    );
  };

  const has = () => {
    return Boolean(localStorage.getItem(CURRENT_GAME_STORAGE_KEY));
  };

  const get = (): CurrentGameType | null => {
    const currentGame = localStorage.getItem(CURRENT_GAME_STORAGE_KEY);
    if (!currentGame) return null;
    return JSON.parse(currentGame);
  };

  return { set, update, has, get };
};
