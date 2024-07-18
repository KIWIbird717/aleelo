export namespace GameServiceTypes {
  /*
   * Слава
   * Семья
   * Здоровье
   * Деньги
   * Любовь
   * Духовность
   * Самореализация
   * */
  export enum GameSphereEnum {
    glory = "glory",
    family = "family",
    health = "health",
    money = "money",
    love = "love",
    spirituality = "spirituality",
    selfRealization = "selfRealization",
  }
  export enum GameStatusEnum {
    inGame = "inGame",
    ended = "ended",
  }

  type GameModelSnapshotType = {
    id: string;
    request: string | null;
    sphere: null | GameSphereEnum;
    status: GameStatusEnum;
    talisman: null;
    created: Date;
    ended: null | Date;
  };

  /** GET /game/status */
  export interface GameStatusResult {
    game: GameModelSnapshotType;
    stepsCount: number;
    practiceCompleted: boolean;
    numberOfGames: number;
  }
}
